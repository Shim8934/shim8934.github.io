---
emoji: 😄
title: Clean Code - TIL 10. 클래스
date: '2022-05-11 20:48:00'
author: shim8934
tags: #CleanCode #10장.클래스 #노마드코더 #북클럽 #노개북
categories: CleanCode
---
### TIL 10. 클래스
#### **오늘 TIL 3줄 요약**

- 클래스는 작아야 한다. (172p)
- 응집도를 유지하면 작은 클래스 여럿이 나온다. (178p)

  [^응집도]: 결합도와 함께 모듈의 독립성을 판단하는 지표이며, *모듈 내부의 기능적인 응집 정도를 나타낸다. 결합도는 모듈과 모듈간의 상호 결합 정도를 나타낸다. **응집도는 높을수록 좋고 결합도는 낮을수록 이상적이다.

* 클래스가 응집도를 잃는다면 쪼개라. (179p)



<br/>

#### **TIL (Today I Learned) 날짜**

2022.05.11
<br/><br/>

#### **오늘 읽은 범위**

10장. 클래스
<br/>


#### 책에서 기억하고 싶은 내용을 써보세요.

- 단일 책임 원칙 (SRP - Single Responsibility Principle)은 클래스나 모듈을 변경할 이유가 하나, 단 하나뿐이어야 한다는 원칙이다. (175p)

- 클래스 설명은 만일("if"), 그리고("and"), -(하)며("or"), 하지만("but")을 사용하지 않고서 25 단어 내외로 가능해야 한다.

- SRP 원칙과 OCP 원칙을 지원하는 수정 케이스를 기억하자 (185p ~ 188p)

  ```java
  // 10-9 변경이 필요해 '손대야' 하는 클래스 (186p)
  public class Sql{
      public Sql(String table, Column[] columns);
      public String create();
      public String insert(Object[] fields);
      public String selectAll();
      public String findByKey(String keyColumn, String keyValue);
      public select(Column column, String pattern);
      public String select(Criteria criteria);
      public String preparedInsert();
      
      private columnList(Column[] columns);
      private String valueList(Object[] fields, final Column[] columns);
      private String selectWithCriteria(String criteria);
      private String placeholderList(Column[] columns);    
  }
  ```

  위 코드를 살펴보자. 아직 미완성이라서 update문과 같은 일부 Sql 문을 지원하지 않는 상태이다. 구조적인 관점에서 **Sql 클래스는 SRP를 위반**한다.

  언젠가 Update문을 지원해야할 시기가 온다면 Sql 클래스를 고쳐야 한다. Update문을 지원하기 위해 손대다가 다른 코드를 망가뜨릴 잠정적인 위험이 존재한다. 그러면 테스트도 다시 해야하는 셈이다. 위의 예시에선 Update 문만을 예시로 들었지만, 다른 새로운 Sql문을 지원하기 위해선 반드시 Sql 클래스에 손대야 한다. 예를 들어 Select 문에 내장된 Select문을 지원하려면 반드시 Sql 클래스를 고쳐야 한다. 이미 2가지 이유 만으로도 SRP를 위반하는 클래스인 셈이다.

  <br/>

  10-9의 내용은 다음과 같이 개선할 수 있다.

  ```java
  // 10-10 닫힌 클래스 집합 (187p ~ 188p)
  abstract public class Sql {
      public Sql(String table, Column[] columns);
      abstract public String generate();
  }
  
  public class CreateSql extends Sql {
      public CreateSql(String table, Column[] columns);
      @Override public String generate();
  }
  
  public class SelectSql extends Sql {
      public Select SelectSql(String table, Column[] columns);
      @Override public String generate();
  }
  
  public class InsertSql extends Sql {
      public InsertSql(String table, Column[] columns, Object[] fields);
      @Override public String generate();
      private String valuesList(Object[] fields, final Column[] columns);
  }
  
  public class SelectWithCreteriaSql extends Sql {
      public SelectWithCriteriaSql(String table, Column[] columns, Criteria criteria);
      @Override public String generate();
  }
  
  public class SelectWithMatchSql extends Sql {
      public SelectWithMatchSql(String table, Column[] columns, Column column, String pattern);
      @Override public String generate();
  }
  
  public class FindByKeySql extends Sql {
      public FindByKeySql(String table, Column[] columns, String keyColumn, String keyValue);
      @Override public String generate();
  }
  
  public class PreparedInsertSql extends Sql {
      public PreparedInsertSql(String table, Column[] columns);
      @Override public String generate();
      private String placeholderList(Column[] columns)
  }
  
  public class Where {
      public Where(String criteria);
      public String generate();
  }
  
  public class ColumnList {
      public ColumnList(Column[] columns);
      public String generate();
  }
  ```

  * 위 10-10 의 각 클래스는 단순하다. 10-9에서 update 문을 지원하기 위해 Sql 클래스에 손을 대 다른 코드에 오류를 끼칠 수 있는 상황도 피할 수 있다.

    Sql 클래스를 상속 받아 update문을 지원하는 UpdqteSql 클래스를 제작하면 끝이다. update문 및 새로운 기능 추가를 위해 다른 코드가 망가질 염려가 전혀 없는 것이다.

     위처럼 구조적인 설계를 변경함으로 SRP 원칙을 지원하고, OCP 원칙도 지원하게 되는 것이다.

<br/>


#### **오늘 읽은 소감은? 떠오르는 생각을 가볍게 적어보세요**

-  첫 프로젝트에 참여했을 때, 매우 방대하게 만들었던 클래스가 생각나게 만든 챕터이다. 클래스마다 단일 책임, 개방폐쇄 원칙은 커녕 돌아가는데 급급한 코드를 급조했었다. 매우 부끄러운 경험을 했던 것이다. 지금 다시 한다면, 개방 폐쇄 원칙을 지킬 수 있을 지 장담 못 하겠지만, 단일 책임만큼은 지킬 수 있게 이 챕터의 내용을 참고해 짜지 않을까 싶다. (단일 책임을 지키다보면 자연스럽게 개방 폐쇄 원칙도 지키겠끔 코드 작성을 할 것 같다.)

<br/>


---


```toc

```