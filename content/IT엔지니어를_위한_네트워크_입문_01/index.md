---
emoji: 😄
title: TIL 01. 네트워크 시작하기
date: '2022-05-20 10:52:00'
author: shim8934
tags: #IT엔지니어를위한네트워크입문 #1장.네트워크시작하기
categories: IT_엔지니어를_위한_네트워크_입문
---
## TIL 01. 네트워크 시작하기
### 1. 네트워크 구성도 살펴보기

* 홈 네트워크와 데이터 센터 네트워크의 구성과 차이로 내용이 시작된다. 이 중 데이터 센터 네트워크와 관련된 내용엔 익숙지 않은 내용들이 있다.

  1. 스파인-리프 구조
  2. 리프 스위치
  3. 10G Base-T

  등등의 내용들이 있는데 나중에 읽을 케이블과 커넥터(2-3장), 네트워크 디자인(13장)에서 각기 상세하게 다루게 된다.

<br/>

---

### 2. 프로토콜

* 네트워크에서 통신할 때의 규약을 통상적으로 프로토콜이라 일컫는다.
* 기존의 프로토콜 계층 정의는 OSI 7 계층의 정의로 불려졌지만, 과거에 비해 좋아진 기술력으로 인해 4 계층으로 줄어든 TCP/IP 계층이라고 하기도 한다. 광의의 TCP/IP와 협의의 TCP/IP라는 용어로도 나눌 수 있다.
  1. 광의의 TCP/IP - 어떤 계층을 쓰든 간에 통신을 하는 행위 자체를 의미. (하단의 **프로토콜 스택과 같은 맥락**이라 보면 될 것 같다.)
  2. 협의의 TCP/IP - L4(전송) 계층에 따른 통신 규약을 통칭.
* 여러 가지 프로토콜이 있지만, 그 중에 TCP/IP 프로토콜은 프로토콜 스택이라 부른다. 각 프로토콜은 별도 계층에서 각기 사용되지만, 묶음으로 사용하기에 스택이라 부른다.

<br/>

---

### 3. OSI 7 계층과 TCP/IP

#### * OSI 7계층

<table>
    <tr>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">계층</td>
        <td colspan="2" width="50%" align="center" style="vertical-align: middle;">기본 용어</td>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">약어</td>
        <td colspan="2" width="50%" align="center">데이터(PDU)</td>
	</tr>
	<tr>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">7계층</td>
        <td colspan="2" width="50%" align="center">Application Layer<br/>애플리케이션 계층</td>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">L7</td>
        <td colspan="2" width="50%" align="center" style="vertical-align: middle;">Data</td>
	</tr>
	<tr>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">6계층</td>
        <td colspan="2" width="50%" align="center">Presentation Layer<br/>프레젠테이션(표현) 계층</td>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">L6</td>
        <td colspan="2" width="50%" align="center" style="vertical-align: middle;">Data</td>
	</tr>
	<tr>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">5계층</td>
        <td colspan="2" width="50%" align="center">Session Layer<br/>세션 계층</td>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">L5</td>
        <td colspan="2" width="50%" align="center" style="vertical-align: middle;">Data</td>
	</tr>    
	<tr>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">4계층</td>
        <td colspan="2" width="50%" align="center">Transport Layer<br/>트랜스포트(전송) 계층</td>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">L4</td>
        <td colspan="2" width="50%" align="center" style="vertical-align: middle;">Segments</td>
	</tr>    
	<tr>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">3계층</td>
        <td colspan="2" width="50%" align="center">Network Layer<br/>네트워크 계층</td>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">L3</td>
        <td colspan="2" width="50%" align="center" style="vertical-align: middle;">Packets</td>
	</tr>
    <tr>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">2계층</td>
        <td colspan="2" width="50%" align="center">Data Link Layer<br/>데이터 링크 계층</td>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">L2</td>
        <td colspan="2" width="50%" align="center" style="vertical-align: middle;">Frames</td>
	</tr>
    <tr>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">1계층</td>
        <td colspan="2" width="50%" align="center">Physical Layer<br/>피지컬(물리) 계층</td>
		<td colspan="2" width="50%" align="center" style="vertical-align: middle;">L1</td>
        <td colspan="2" width="50%" align="center" style="vertical-align: middle;">Bits</td>
	</tr>
</table>

*PDU - Procotol Data Unit - 각 계층에서의 데이터 단위.

<br/>

---

### 4. OSI 7계층별 이해하기

#### 1) 피지컬 계층 (L1)

* 물리 계층으로 물리적 연결과 관련된 정보 정의. 주로 **전기 신호를 전달**하는 데 초점이 맞춰져 있다.

</br>

#### 2) 데이터 링크 계층 (L2)

* L2 계층의 핵심은 정확한 주소로 통신을 주고 받는 것이다. **L1 계층은** **전기 신호**를 잘 보내는 것이 주 목적이라면, L2 계층에선 그 전기 신호가 **올바른 네트워크 인터페이스(MAC 주소)로  왔나를 검증**하는 계층이다.

[^MAC 주소]: MAC 주소는 네트워크 인터페이스마다 고유한 주소가 적혀 있다.

<br/>

#### 3) 네트워크 계층 (L3)

* IP 주소와 같은 **논리적인 주소가 정의**되는 계층. IP 주소를 구성하는 네트워크 주소 부분과 호스트 주소 부분 같은 속성에 대해 후에 3장에서 상세하게 다룬다.

<br/>

#### 4) 트랜스포트 계층 (L4)

* 앞서 L1~L3 계층을 거쳐 들어온 네트워크 패킷들이 각기 최종 목적지(ex : L7 Application 계층의 모듈로 정상 전달되도록)까지 유실되지 않거나 순서가 바뀌지 않게 바로잡는 역할을 한다.
  * L4 계층 - TCP 프로토콜의 경우, 3-way HandShaking 과정을 통해 패킷의 순서를 보장한다. 즉, 높은 신뢰성을 보장한다.
  * L4 계층 - UDP 프로토콜의 경우 신뢰성 보장이 안 되지만, 속도가 빠르다는 상대적인 장점이 있다. (흔히 스트리밍 서비스에서 사용하는 프로토콜은 UDP 라 암기해 두면 이해하는데 도움될 것이다.)

<br/>

#### 5) 세션 계층 (L5)

* 양 끝단의 각 프로세스(연결 주체)가 연결을 성립할 수 있도록 도와주고, 그 연결을 안정적으로 유지되도록 관리하고 작업 완료 후 끊는 역할을 하는 계층이다.

<br/>

#### 6) 프레젠테이션 계층 (L6)

* 표현 방식이 다른 시스템이나 애플리케이션 간의 통신을 돕기 위해 통일된 구문 형식으로 변환시키는 기능을 하는 계층이다.

</br>

#### 7) 애플리케이션 계층 (L7)

* 애플리케이션 프로세스를 정의하고, 서비스를 수행하는 계층이다. 많은 프로토콜이 존재하지만 대표적으로 HTTP, SMTP, TELNET, FTP 등이 존재한다.

<br/>

---

### 5. 인캡슐레이션과 디캡슐레이션

1. 인캡슐레이션 - 애플리케이션 계층(=L5 ~ L7 계층, 상위 계층)에서 데이터를 데이터 플로 계층(= L1 ~ L4 계층, 하위 계층)으로 내려보내면서 패킷에 데이터를 넣을 수 있도록 분할하는 과정
2. 디캡슐레이션 - 데이터를 받는 과정, 즉, 전기 신호(=데이터)를 입력 받아 데이터 플로 계층(=L1 ~ L4 계층, 하위 계층)에서 애플리케이션 계층(=L5 ~ L7 계층, 상위 계층)으로 올려보내 주는 과정.

* 2가지 용어는 네트워크를 구성하는 단위인 패킷의 구조 중 **헤더에 어떤 정보가 필수로 담기는가?** 부터 알면 접근하기 한결 쉽다.
  1) 현재 계층에서 정의하는 정보
  2) 상위 프로토콜 지시자

<br/>!! 왜 위 정보가 필요할까?

#### 	1) 현재 계층에서 정의하는 정보

* L4 계층(트랜스포트 계층)의 주된 목적은 보내는 쪽에서는 큰 데이터를 잘 분할하고, 받는 쪽에서는 잘 조립하는 것이다. 그러기 위해 **데이터에 순서를 정하고 받은 패킷의 순서가 맞는지, 빠진 패킷은 없는지 점검하는 역할을 담당**하며 **이에 관한 정보를 헤더에** 적어 넣게 된다. 각 계층의 헤더마다 정의되는 데이터는 다르며, 그 구성은 간략하게 아래와 같다. (각 상세 내용은 후술하도록 한다.)

  1. L4 중 TCP 프로토콜에서는 시퀸스(Sequence), 애크(ACKnowledgement) 번호 필드로 위의 데이터를 표기한다.

     → 1. L4 계층 헤더의 구조

     <table>
         <tr>
     		<td colspan="4" width="50%" align="center">Source Port</td>
     		<td colspan="4" width="50%" align="center">Destination Port</td>
     	</tr>
     	<tr>
     		<td colspan="8" align="center">Sequence Number</td>
     	</tr>
     	<tr>
     		<td colspan="8" align="center">Acknowledgement Number</td>
     	</tr>
     	<tr>
     		<td colspan="1" width="12.5%" align="center">Data Offset</td>
     		<td colspan="1" width="12.5%" align="center" style="vertical-align: middle;">Reserved</td>
     		<td colspan="2" width="25%" align="center" style="vertical-align: middle;">TCP Flags</td>
     		<td colspan="4" width="50%" align="center" style="vertical-align: middle;">Window Size</td>
     	</tr>    
     	<tr>
     		<td colspan="4" width="50%" align="center">Header and Data Checksum</td>
     		<td colspan="4" width="50%" align="center">Urgent Pointer</td>
     	</tr>    
     	<tr>
     		<td colspan="8" align="center">Options</td>
     	</tr>
     </table>

     <br/>

  

  2. L3 계층에서는 논리적인 주소인 출발지, 도착지 IP 주소를 헤더에 표기한다.

     → 2. L3 계층 헤더의 구조

     <table>
         <tr>
     		<td colspan="1" width="12.5%" align="center">Version</td>
     		<td colspan="1" width="12.5%" align="center">IHL</td>
             <td colspan="1" width="12.5%" align="center">DSCP</td>
     		<td colspan="1" width="12.5%" align="center">ECN</td>
     		<td colspan="4" width="50%" align="center">Total Length</td>
     	</tr>
         <tr>
             <td colspan="4" width="50%" align="center" style="vertical-align: middle;">Identification</td>
     		<td colspan="2" width="12.5%" align="center">IP Flags</td>
     		<td colspan="2" width="37.5%" align="center" style="vertical-align: middle;">Fragment Offset</td>
     	</tr>
         <tr>
     		<td colspan="2" width="25%" align="center">Time to Live</td>
             <td colspan="2" width="25%" align="center">Protocol</td>
     		<td colspan="4" width="50%" align="center">Header Checksum</td>
     	</tr>
     	<tr>
     		<td colspan="8" align="center">Source Ip Address</td>
     	</tr>
     	<tr>
     		<td colspan="8" align="center">Destination IP Address</td>
     	</tr>	    
     	<tr>
     		<td colspan="8" align="center">Options (if IHL>5)</td>
     	</tr>
     </table>

     <br/>

  

  3. L2 계층에서는 MAC 주소를 정의하며, L3 계층처럼 L2 계층도 출발지, 도착지 MAC 주소 정보를 헤더에 표기한다.

     → 3. L2 계층 헤더의 구조

     <table>
         <tbody style="width:100%;">
     	    <tr>
     			<td colspan="8" width="100%" align="center">Destination MAC</td>
     		</tr>
     	    <tr>
     			<td colspan="4" width="50%" align="center">Destination MAC</td>
         	    <td colspan="4" width="50%" align="center">Source MAC</td>
     		</tr>
     	    <tr>
     			<td colspan="8" width="100%" align="center">Source MAC</td>
     		</tr>
         	<tr>
     			<td colspan="4" width="50%" align="center">Ether Type</td>
     		</tr>
         </tbody>
     </table>

     <br/>


---

#### 2) 상위 프로토콜 지시자

* 프로토콜 스택은 상위 계층(= L5 ~ L7 계층, 애플리케이션 계층)으로 올라갈수록 종류가 많아진다.<br/>
* 인캡슐레이션 과정에서는 상위 프로토콜이 많아도 문제가 없지만, 디캡슐레이션하는 목적지 쪽에서는 헤더에 아무 정보가 없으면 각 계층에서 어떤 상위 프로토콜로 데이터를 보내야할 지 결정할 수 없다.<br/>
  **ex)** L3 계층에서 IP 주소를 확인하고 L4 계층으로 데이터를 올려보낼 때, 헤더에 상위 프로토콜 정보가 없다면 TCP로 보내야할 지, UDP로 보내야할 지 구분할 수 없다.<br/>
*  위의 예시와 같은 문제가 발생하지 않도록 인캡슐레이션하는 쪽에서는 헤더에 상위 프로토콜 지시자 정보를 포함해야 한다.


```toc

```