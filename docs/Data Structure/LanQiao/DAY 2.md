# DAY 2 数据结构基础之队列篇

[[toc]]

## 文档 2 数据结构基础之队列篇

1. 创建存放队列的数据结构

    ```cpp
    String Vqueue[1005];   // V 队列
    int Vhead = 0;        // V 首指针
    int Vtail = 0;        // V 尾指针
    ```

    :::details 一个关于 md 的列表规范问题
    The fix is to indent the code block so it becomes part of the preceding list item as intended:
    1. First list

        ```text
        Code block
        ```

    2. Still first list

    :::

2. 完整代码如下：
    :::details

    ```cpp
        #include <iostream>
        #include <string>
        #include <vector>
        #include "code_challenge.h"

        using namespace std;

        void QueueIn(int arr[],int& qHead, int& qTail)
        {
            int bar = -1;	// stroge data in queue;
            cin >> bar;
            if (qTail == 10)
            {
                cout << "queue is full" << endl;
                return;
            }
            
            arr[qTail] = bar;
            qTail++;

        }

        void QueueOut(int arr[], int& qHead, int& qTail)
        {
            if (qHead == qTail)
            {
                cout << "queue is empty" << endl;
                return;
            }

            for (int i = qHead; i < qTail; i++)
            {
                arr[i] = arr[i + 1];
            }
            qTail--;
        }

        void QueueShow(int arr[], int qTail)
        {
            for (int i = 0; i < qTail; i++)
            {
                cout << arr[i] << " ";
            }
            cout << endl;
        }

        void getHead(int arr[], int qHead, int qTail)
        {
            if (qHead == qTail)
            {
                cout << "queue is empty";
            }
            cout << arr[qHead] << endl;
        }

        int main()
        {
            
            int Queue[10] = { 0 };
            int qHead = 0;
            int qTail = 0;
            while (true)
            {
                int sw = -1;
                cout << "input sw: ";
                cin >> sw;
                cout << endl;
                switch (sw)
                {
                case 1: QueueIn(Queue, qHead, qTail);	break;
                case 2:
                    QueueOut(Queue, qHead, qTail);	break;
                case 3:
                    QueueShow(Queue, qTail);	break;
                case 4:
                    getHead(Queue, qHead, qTail); break;
                case 5:
                    exit(0);
                default:	cout << "wrong input " << endl;
                    break;
                }
            }

            return 0;
        }

    ```

    :::

## 编程 4 练一练【CLZ的银行普通队列】

## 编程 5 练一练【CLZ的银行循环队列】
