# 数据结构基础之链表篇

## 一、单链表

1.单链表之结构体

```c
  struct node
  {
    ElemType data;
    node * next;
  };
```

2.单链表头结点

```c
  node* head = new node;
  head->next = NULL;
```

3.单链表之前插法

```c
  for:
      node* tmp = new node;
      head->next = tmp->next;
      head->next = tmp;
```

4.单链表之尾插法

```c
  node* r = new node;
  r = head->next;
  for:
    node* tmp = new node;
    r->next = tmp;
    r = tmp;
```

### 编程1 练一练[小王子单链表]

``` c
struct node
{
    int data;
    node* next;
};

node* head = new node;

void init()
{
    head->next = NULL;
    node* r = new node;
    head->next = r;
    for (int i = 1; i <= 10; i++)
    {
        node* tmp = new node;
        r->data = i;
        r->next = tmp;
        r = tmp;
    }
}

void show()
{
    node* temp = head->next;
    for (int i = 1; i <= 10; i++)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
}

void ListOpeartor(int e)
{
    node* tmp = head->next;
    node* q = head;
    for (int i = 0; i < 10; i++)
    {
        if (e == tmp->data)
        {
            q->next = tmp->next;
            tmp->next = head->next;
            head->next = tmp;
            break;
        }
        tmp = tmp->next;
        q = q->next;
    }
}

int del()
{
    init();
    int M = -1;
    int X = -1;
    cin >> M;
    
    for (int i = 0; i < M; i++)
    {
        cin >> X;
        ListOpeartor(X);
        show();
        cout << endl;
    }
    return 0;
}
```
