# 蓝桥杯省赛14天精讲冲刺

## DAY1

数据结构基础之链表篇

### 一、单链表

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
