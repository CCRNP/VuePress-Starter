---
markdown.code.lineNumbers: true

---

# DAY 1 数据结构基础之链表篇

[[toc]]

## 文档一 数据结构基础之链表篇

### 单链表

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

## 编程1 练一练[小王子单链表]

**问题描述：**

* 小王子有一天迷上了排队的游戏，桌子上有标号为 1-101−10 的 1010 个玩具，现在小王子将他们排成一列，可小王子还是太小了，他不确定他到底想把那个玩具摆在哪里，直到最后才能排成一条直线，求玩具的编号。已知他排了 MM 次，每次都是选取标号为 XX 个放到最前面，求每次排完后玩具的编号序列。

要求一：采用单链表解决

:::details 点击查看代码

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

:::

### 循环链表

* 使用尾插法 在最后的结点尾指针 指向头结点即可

``` c
{  //尾插法 
    r->pNext = tmp;
    r = tmp;
}
r->pNext = head->pNext;
```

:::details 点击查看完整代码

``` c
struct node
{
    int data;
    node* pNext;
    node* q;
};

void init(node * head)
{
    head->pNext = nullptr;
    node* r = new node;
    head->pNext = r;
    r->data = 0;
    for (int i = 1; i < 10; i++)
    {
        node* tmp = new node;
        tmp->data = i;
        r->pNext = tmp;
        r = tmp;
    }
    r->pNext = head->pNext;
}

void show(node *head)
{
    node* tmp = head->pNext;
    for (int i = 0; i < 20; i++)
    {
        cout << tmp->data << endl;
        tmp = tmp->pNext;
    }
}

int del()
{
    
    node* head = new node;

    init(head);
    show(head);

    return 0;
}

```

:::

## 编程2 练一练[约瑟夫环]

**问题描述：**

* 设有 n 个人围坐在圆桌周围，现从某个位置 k 上的人开始报数，报数到 m 的人就站出来。下一个人，即原来的第 m+1 个位置上的人，又从 1 开始报数，再报数到 m 的人站出来。依次重复下去，直到全部的人都站出来为止。试设计一个程序求出这 n 个人的出列顺序。

:::details 点击查看代码

```c
#include <iostream>

using namespace std;

struct node
{
    int data;
    node* pNext;
};

void init(node * head,int n)
{
    head->pNext = nullptr;
    node* r = new node;
    head->pNext = r;
    r->data = 1;
    for (int i = 2; i <= n; i++)
    {
        node* tmp = new node;
        tmp->data = i;
        r->pNext = tmp;
        r = tmp;
    }
    r->pNext = head->pNext;
}

int handleFunc(node* head, int n, int m, int k)
{
    node* tmp = head->pNext;

    for (int i = 1; i < k; i++) // 先找到 位置 k 上的 结点；
    {
        tmp = tmp->pNext;
    }

    while (tmp!=tmp->pNext)
    {
        for (int i = 1; i < m - 1; i++) // 在 k 结点 这个位置 开始报数 报到 m 删除这个结点。
        {
            tmp = tmp->pNext;
        }
        cout << tmp->pNext->data << endl;
        tmp->pNext = tmp->pNext->pNext;
        tmp = tmp->pNext;
    }
    cout << tmp->data;
    
    return 0;
}

int main()
{
    
    int n, k, m;
    cin >> n >> k >> m;

    node* head = new node;

    init(head, n);
    handleFunc(head, n, m, k);


    return 0;
}

```

:::

### 双链表

:::details 点击查看完整代码

``` c
#include <iostream>
#include "code_challenge.h"

using namespace std;

struct node
{
    int data;
    node* lLink;
    node* rLink;
};

void init(node * head)
{
    node* bar = new node;

    bar = head;
    head->data = 0;
    for (int i = 1; i < 10; i++)
    {
        node* tmp = new node;
        tmp->data = i;
        bar->rLink = tmp;
        tmp->lLink = bar;
        bar = tmp;
    }

    head->lLink = bar;
    bar->rLink = head;
}

void show(node * head)
{
    node* tmp = head;
    for (int i = 0; i < 20; i++)
    {
        cout << tmp->data << endl;
        tmp = tmp->lLink;
    }
}

void handleFunc()
{
    node* tmp = new node;
}

int del()
{
    node* head = new node;
    init(head);
    show(head);
    return 0;
}

```

:::

关于冒泡排序的问题
:::details

```c

int arr[] = { 3,4,1,5,2,11,9,23,50 };
for (int i = 0; i < 9; i++)
{
    for (int j = i; j < 9; j++) // j=0 (元素从大到小排); j=i (元素从小到大排)
    {
        if (arr[i] < arr[j])
        {
            arr[i] = arr[i] + arr[j];
            arr[j] = arr[i] - arr[j];
            arr[i] = arr[i] - arr[j];
        }
    }
}

for (int i = 0; i < 9; i++)
{
    cout << arr[i] << endl;
}

```

:::

## 编程3 练一练[小王子双链表]

**问题描述：**
*小王子有一天迷上了排队的游戏，桌子上有标号为 1-101−10 的 1010 个玩具，现在小王子将他们排成一列，可小王子还是太小了，他不确定他到底想把那个玩具摆在哪里，直到最后才能排成一条直线，求玩具的编号。已知他排了 MM 次，每次都是选取标号为 XX 个放到最前面，求每次排完后玩具的编号序列。

要求一：采用循环链表解决

:::details

```cpp
#include <iostream>
#include <string>
#include <vector>
#include "code_challenge.h"

using namespace std;

struct node
{
    int data;
    node* l;
    node* r;
};

void init(node* head)
{
    node* bar = new node;
    bar = head;
    for (int i = 1; i <= 10; i++)
    {
        node* tmp = new node;
        tmp->data = i;

        tmp->l = bar;
        bar->r = tmp;
        bar = tmp;
    }
    head->l = bar;
    bar->r = head;
}

void show(node* head)
{
    node* foo = head->r;
    for (int i = 0; i < 10; i++)
    {
        cout << foo->data << " ";
        foo = foo->r;
    }
    cout << endl;
}

void handleFunc(node* head, int M)
{
    vector<int> array(M);
    for (int i = 0; i < M; i++)
    {
        // storge out number;
        cin >> array[i];
    }
    for (int i = 0; i < M; i++)
    {
        // start change linklist
        node* tmp = head->r;
        while (tmp != head)
        {
            if (tmp->data == array[i])
            {
                tmp->l->r = tmp->r;
                tmp->r->l = tmp->l;
                tmp->l = head;
                tmp->r = head->r;
                head->r->l = tmp;
                head->r = tmp;
                break;
            }
            tmp = tmp->r;
        }

        show(head);
    }
}

int del()
{
    int M = -1; // M 为 记录输出行数 也可以有 M 次 操作 在 handleFunc 函数中
    cin >> M;

    node* head = new node;
    head->r = nullptr;
    init(head);
    //show(head);
    handleFunc(head, M);

    return 0;
}

```

:::
