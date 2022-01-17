---
emoji: 😄
title: JPA 기본 강의 정리 - 09. JPQL 정리_01
date: '2022-01-16 06:00:00'
author: shim8934
tags: JPA Java JPQL
categories: JPA_Basic
---
## JPQL

### 1. JPA에서 SQL을 사용할 수 있는 방법

| 방법                                         | 설명                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| 1. **JPQL**                                  | * 가장 단순한 조회 방법<br />* 엔티티 객체를 중심으로 개발<br />* 문제는 검색할 때이며, 테이블이 아닌 엔티티 객체를 대상으로 검색. |
| 2. Criteria                                  | * 자바 코드로 JPQL을 작성할 수 있다.<br />* JPA 공식 기능<br />* 단, 너무 복잡하고 실용성이 없다. |
| 3. **QueryDSL**                              | * 컴파일 시점에 문법 오류를 찾을 수 있다.<br />* 동적 쿼리 작성 편리하며, 단순하고 쉽다.<br />* <b>실무 사용 권장</b> |
| 4. Native SQL                                | * JPA가 제공하는 SQL을 직접 사용하는 기능.<br />* JPQL로 해결할 수 없는 특정 DB의 의존적인 기능 사용 가능<br />  ex) 오라클 Connect By, 특정 DB만 사용하는 SQL 힌트 |
| 번외 - JDBC API, MyBatis, SpringJDBCTemplate | * JPA를 사용하면서 기존의 JDBC, MyBatis, SpringJDBCTemplate 등을 함께 사용 가능하다.<br />* 단, 영속성 컨텍스트를 적절한 시점에 강제로 플러시해야한다.<br />  ex) JPA를 우회해서 SQL을 실행하기 직전에 영속성 컨텍스트 수동 플러시 |

---

### 2. JPQL

* 객체 지향 쿼리 언어. 단, 테이블을 대상으로 쿼리하는 것이 아닌 **엔티티 객체를 대상으로 쿼리**한다.

#### 1) 기본 사용 예시

```java
// Main.java
Member member = new Member();
member.setUsername("member1");
member.setAge(10);
em.persist(member);

TypedQuery<Member> query = em.createQuery("select m from Member m", Member.class);
```

1. 별칭 필수 (위의 Member m). as는 생략 가능.
2. 테이블 이름이 아닌 **엔티티 이름을 사용**한다. - 위의 Member는 테이블 Member가 아닌 Class Member(즉, 엔티티)를 호출하는 것이다.
3. 엔티티와 속성은 대소문자 구분 O (Member, age 등등)  /  JPQL 키워드는 대소문자 구분 X (SELECT, FROM, where)

---

#### 2) 반환 타입과 파라미터 바인딩

##### (1) TypedQuery<속성>

* 반환 타입이 명확할 때 사용. ex) String인 경우 - TypedQuery<String> member.....

```java
// 반환 타입이 Member 객체로 명확한 경우 - 01
TypedQuery<Member> query = em.createQuery("select m from Member m", Member.class);

List<Member> resultList = query.getResultList();

for(Member member1 : resultList) {
    System.out.println(member1.getUsername());
}

// 반환 타입이 String으로 명확한 경우 - 02
TypedQuery<String> singlequery = em.createQuery("select m.username from Member m where m.username = 'kim'", String.class);
String singleResult = singlequery.getSingleResult();
System.out.println("singleResult = " + singleResult);

```

---

##### (2) Query

* 반환 타입이 불명확할 때 사용.

```java
// 반환 타입이 여러 기본 타입으로 불명확한 경우 - String(username)과 int(age)가 같이 반환되는 경우.
Query query3 = em.createQuery("select m.username, m.age from Member m", Member.class);
```

---

##### (3) 결과 조회 API

1) getResultList() - 결과가 하나 이상일 때, 리스트 반환  /  없으면 빈 리스트 반환.

2) getSingleResult() - 결과가 **정확히 하나** or **단일 객체**
   	* 없으면 NoResultException 발생  /  둘 이상인 경우 NonUniqueResultException 발생

* Spring Data JPA에서 별도의 방법으로 Exception 안 발생하게 하는 방법이 있다. ( 추후 공부 )

---

##### (4) 파라미터 바인딩

1. 이름 기준 ( :변수 사용)

```java
TypedQuery<String> singlequery = em.createQuery("select m.username from Member m where m.username = :username", String.class);
singlequery.setParameter("username", "member1");
singlequery.getSingleResult();
```

2. 위치 기준 ( ?숫자 사용)

```java
// 위치 기준이라는 것을 명확하게 하고자, where절의 변수 위치 표기를 바꿈
TypedQuery<String> singlequery2 = em.createQuery("select m.username from Member m where m.username = ?2 and m.age = ?1", String.class);
singlequery2.setParameter(1, 10);
singlequery2.setParameter(2, "member%");
singlequery2.getSingleResult();
```

* **실무 추천 - 위치 기준은 되도록 쓰지 않도록..!**

---

```toc

```