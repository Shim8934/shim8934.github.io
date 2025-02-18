---
emoji: 😄
title: Clean Code - TIL 06. 형식 맞추기
date: '2022-05-03 23:42:00'
author: shim8934
tags: #CleanCode #6장.객체와자료구조 #노마드코더 #북클럽 #노개북
categories: CleanCode
---
### TIL 06. 객체와 자료 구조
#### **오늘 TIL 3줄 요약**

- 객체는 동작(구현)을 공개하고 자료를 숨긴다.
- 자료 구조는 별다른 동작 없이 자료를 노출한다.
- 객체 VS 자료구조와 절차적인 코드의 선택은 상황마다 다르므로, 직면한 문제에 최적을 선택한다.(128p)

<br/>

#### **TIL (Today I Learned) 날짜**

2022.05.03
<br/><br/>

#### **오늘 읽은 범위**

6장. 객체와 자료구조
<br/>


#### 책에서 기억하고 싶은 내용을 써보세요.

- 디미터 법칙 - 모듈은 자신이 조작하는 객체의 속사정을 몰라야 한다는 법칙이다.(123p) **즉, 객체는 조회 함수로 내부 구조를 공개하면 안 된다.**
- 절반은 객체, 절반은 자료 구조인 잡종 구조가 나오는 경우가 있다. 하지만 이렇게 나온 구조는 객체 지향과 절차 지향 구조의 단점만 모아놓게 되는 셈이다.(124p ~ 125p) 

<br/>


#### **오늘 읽은 소감은? 떠오르는 생각을 가볍게 적어보세요**

-  여지껏 작성해 본 모든 프로젝트의 구현 방식이 잡종 방식일 것이고, 그에 대한 일침을 놓는 챕터였다. 객체 지향적인 코드와 절차 지향적인 코드의 차이를 이 챕터를 읽었다고 100% 알아먹은 것은 분명히 아니다. 그저 Github에서 봤던 오픈프로젝트의 예제 소스들 중 기억나는 몇몇 예제 프로젝트들이 왜 그런 구조로 작성했는지가 일부 이해되는 정도로 알아먹었다. 많이 부끄러웠다. 그동안 자료구조니 객체 지향이니 그저 당장 돌아가게 만드는데 급급해 짜고 보자라는 코딩 습관이 있는데, 이를 개선해 나가기 위해선 어떻게 해야할까? 라는 고민이 들게 하는 챕터였다.
    아마도... 나라면 객체 지향과 절차 지향 각 케이스 예시 프로젝트를 찾아보는게 최우선이지 않을까 싶다. 눈에 보이는 구현물이 있어야 설계할 때 어떤 고민을 가지고 이 부분을 이렇게 짠 것일까 라는 생각이 들 듯 싶다. 당장 생각나는 예제는 RealWorld 프로젝트를 JPA로 구현한 프로젝트다. (https://github.com/raeperd/realworld-springboot-java) DTO 자료구조와 객체 지향을 적절하게 상황에 맞게 쓴 예시가 아닐까 생각한다. 더 분석해 보고, 나름대로의 분석 결과를 기록해 봐야겠다.

<br/>


---


```toc

```