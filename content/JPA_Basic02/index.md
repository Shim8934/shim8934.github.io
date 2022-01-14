---
emoji: 😄
title: JPA 기본 강의 정리 - 02. 엔티티 기본 매핑
date: '2022-01-07 06:00:00'
author: shim8934
tags: JPA Java
categories: JPA_Basic
---
## 엔티티 매핑 - 기본

1. 객체와 테이블 매핑 : @Entity, @Table
2. 필드와 컬럼 매핑 : @Column
3. 기본 키 매핑 : @Id
4. 연관관계 매핑 : @ManyToOne, @JoinColumn

---

### 1. @Entity

* JPA를 사용해서 테이블과 매핑할 클래스에 사용 필수.

**!주의**

```
1) 기본 생성자 필수!
2) final 클래스, enum, interface, inner 클래스 사용 X
3) 저장할 필드에 final 사용 X
```

---

### 2. @Table

* Entity와 매핑할 테이블 지정 시 사용.

```java
// Member 객체의 매핑 테이블 이름이 MBR 테이블인 경우
@Entity
@Table(name="MBR")
public class Member {
}
```



---
### 3. Entity의 속성 (테이블 컬럼)  어노테이션 정리

| 어노테이션  | 설명                                        |
| :---------- | :------------------------------------------ |
| @Column     | 컬럼 매핑                                   |
| @Temporal   | 날짜 타입 매핑                              |
| @Enumerated | enum 타입 매핑                              |
| @Lob        | BLOB, CLOB 매핑                             |
| @Transient  | 특정 필드를 컬럼에 매핑하지 않음(매핑 무시) |

---

#### 1) @Column

| 속성                       | 설명                                                         | 기본값                                     |
| -------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| name                       | 필드와 매핑할 테이블의 컬럼 이름                             | 객체의 필드 이름                           |
| insertable,<br />updatable | 등록, 변경 가능 여부                                         | TRUE                                       |
| nullable(DDL)              | null 값의 허용 여부를 설정. false로 설정하면 DDL 생성 시에 not null 제약조건이 붙는다. |                                            |
| unique(DDL)                | @Table의 uniqueConstraints와 같지만 한 컬럼에 간단히 유니크 제약조건을 걸 때 사용. |                                            |
| columnDefinition(DDL)      | 데이터베이스 컬럼 정보를 직접 줄 수 있다.<br />ex) varchar(100) default 'EMPTY' | 필드의 자바 타입과 방언 정보를 사용해 지정 |
| length(DDL)                | 문자 길이 제약조건, String 타입에만 사용.                    | 255                                        |
| precision,<br />scale(DDL) | BigDecimal 타입에서 사용.(BigInteger도 가능)<br /> pricision은 소수점을 포함한 전체 자릿수를, scale은 소수의 자릿수다.<br /> 참고로 double, float 타입에는 적용되지 않는다. 아주 큰 숫자나 정밀한 소수를 다루어야 할 때만 사용. | precision = 19, scale = 2                  |

---

#### 2) @Enumerated

* 자바 enum 타입을 매핑할 때 사용

**! 주의 ! : ORDINAL value는 사용하지 말 것.!**

| 속성  | 설명                                                         | 기본값           |
| ----- | ------------------------------------------------------------ | ---------------- |
| value | 1) EnumType.ORDINAL : enum 순서를 데이터베이스에 저장<br />2) EnumType.STRING : enum 이름을 데이터베이스에 저장 | EnumType.ORDINAL |

---

#### 3) @Temporal

* 날짜 타입(java.util.Date, java.util.Calendar)을 매핑할 때 사용

| 속성  | 설명                                                         | Annotation을 안 쓰고 자바 타입만 쓸 시<br />매핑되는 자바 타입! |
| ----- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| value | 1) TemporalType.DATE : 날짜, 데이터베이스 date 타입과 매핑(예: 2022-01-11)<br />2) TemporalType.TIME : 시간, 데이터베이스 time 타입과 매핑(예: 12:16:10)<br />3) TemporalType.TIMESTAMP : 날짜와 시간, 데이터베이스 timestamp 타입과 매핑(예: 2022-01-11 12:16:10) | 1) LocalDate or Date<br />2) LocalDate or Date<br />3) LocalDateTime |

---

#### 4) @Lob

* 데이터베이스 BLOB, CLOB 타입과 매핑 (String이면 CLOB, 나머지는 BLOB)
  1) CLOB - String, char[], java.sql.CLOB
  2) BLOB - byte[], java.sql.BLOB

---

#### 5) @Transient

* DB에 저장되는 정보가 아닌 임시로 쓸 변수일 경우

---

### 4. 기본 키 매핑

#### 1) @Id

* PK로 쓰이는 컬럼에 **직접 할당** 시 사용.

---

#### 2) @GeneratedValue

* DB에서 **자동적으로 PK를 할당하게** 하는 전략.

| 속성     | 설명                                                         |
| -------- | ------------------------------------------------------------ |
| IDENTITY | 데이터베이스에 위임, MYSQL                                   |
| SEQUENCE | 데이터베이스 시퀸스 오브젝트 사용, ORACLE<br /> * @SequenceGenerator 필요 |
| TABLE    | 키 생성용 테이블 사용, 모든 DB에서 사용<br /> * @TableGenerator 필요 |
| AUTO     | 방언에 따라 자동 지정, 기본값                                |

---

* GeneratedValue 전략별 예시

##### 	(1) IDENTITY

* 주로 MySQL, PostgreSQL, SQL Server, DB2에서 사용하며, 기본 키 생성을 DB에 위임.
* 영속성 컨텍스트에 종속 시점(em.persist())에 즉시 INSERT SQL을 실행하고, 해당 키를 DB에서 조회하는 특징이 있다.

```java
@Entity
public class Member {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
```

---

##### 	(2) SEQUENCE

* 오라클, PostgreSQL, DB2, H2 DB에서 사용하며, 유일한 값을 순서대로 생성하는 특별한 DB 오브젝트.

```java
@Entity
@SequenceGenerator(
	 name = “MEMBER_SEQ_GENERATOR",
	 sequenceName = “MEMBER_SEQ", //매핑할 데이터베이스 시퀀스 이름
	 initialValue = 1, allocationSize = 1)
public class Member {
	 @Id
	 @GeneratedValue(strategy = GenerationType.SEQUENCE,
	 	generator = "MEMBER_SEQ_GENERATOR")
	 private Long id; 
```

| 속성            | 설명                                                         | 기본값             |
| --------------- | ------------------------------------------------------------ | ------------------ |
| name            | 식별자 생성기 이름.                                          | 필수               |
| sequenceName    | 데이터베이스에 등록되어 있는 시퀀스 이름.                    | hibrenate_sequence |
| initialValue    | DDL 생성 시에만 사용.<br />시퀀스 DDL을 생성할 때 처음 1 시작하는 수를 지정한다. | 1                  |
| allocationSize  | 시퀀스 한 번 호출에 증가하는 수(성능 최적화에 사용됨)<br /> *** 데이터베이스 시퀀스 값이 하나씩 증가하도록 설정되어 있으면 이 값을 반드시 1로 설정해야 함.** | **50**             |
| catalog, schema | 데이터베이스 catalog, schema 이름                            |                    |

---

##### 	(3) TABLE

* 키 생성 전용 테이블을 하나 만들어 DB 시퀀스를 흉내내는 전략이며, 모든 DB에 적용 가능.

```sql
create table MY_SEQUENCES (
	 sequence_name varchar(255) not null,
	 next_val bigint,
	 primary key ( sequence_name )
)
```

```java
@Entity
@TableGenerator(
	 name = "MEMBER_SEQ_GENERATOR",
	 table = "MY_SEQUENCES",
	 pkColumnValue = “MEMBER_SEQ", allocationSize = 1)
public class Member {
	 @Id
	 @GeneratedValue(strategy = GenerationType.TABLE,
		 generator = "MEMBER_SEQ_GENERATOR")
	 private Long id; 
```

* 여러 웹서버에서 구동 시, 발생하는 동기화 문제를 해결하기 좋은 전략이지만, 별도의 테이블을 하나 더 설정해 사용함으로 인해 **성능 이슈가 발생할 수 있다**.

---

##### 	(4) AUTO

* 방언에 따라 자동 지정 (GeneratedValue 의 기본값.)

---




```toc

```