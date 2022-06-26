---
emoji: 😄
title: TIL 03. 네트워크 통신하기 - (1) 통신방식
date: '2022-06-02 02:52:00'
author: shim8934
tags: #IT엔지니어를위한네트워크입문 #3장.네트워크통신하기
categories: IT_엔지니어를_위한_네트워크_입문
---
## TIL 03. 네트워크 통신하기 - (1) 통신 방식
### *  유니캐스트, 멀티캐스트, 브로드캐스트, 애니캐스트

1. 유니캐스트

   * 1 : 1 통신
   * 출발지와 목적지가 1:1로 통신

   <br>

2. 브로드캐스트

   * 1 : 모든 통신
   * 동일 네트워크에 존재하는 모든 호스트가 목적지

   <br>

3. 멀티캐스트

   * 1 : 그룹(멀티캐스트 구독 호스트) 통신
   * 하나의 출발지에서 다수의 특정 목적지로 데이터 전송

   <br>

4. 애니캐스트

   * 1 : 1 통신(목적지는 동일 그룹 내의 1개 호스트)
   * 다수의 동일 그룹 중 가장 가까운 호스트에서 응답
   * IPv4에서는 일부 기능 구현, IPv6는 모두 구현 가능

   <br>

---

#### * 데이터의 목적지 주소를 기준점으로 한 통신 방식 정리

<table>
	<tr style="text-align:center;">
        <td style="">타입</td>
        <td>통신 대상</td>        
        <td>범위</td>
        <td>IPv4</td>
        <td>IPv6</td>
        <td>예제</td>
    </tr>
	<tr style="text-align:center;">
        <td>유니캐스트</td>
        <td>1 : 1</td>
        <td>전체 네트워크</td>
        <td>O</td>
        <td>O</td>
        <td>HTTP</td>
    </tr>
	<tr style="text-align:center;">
		<td>브로드캐스트</td>
        <td>1 : 모든</td>
        <td>서브넷 (로컬 네트워크)</td>
        <td>O</td>
        <td>X</td>
        <td>ARP</td>
    </tr>
    <tr style="text-align:center;">
        <td>멀티캐스트</td>
        <td>1 : 그룹</td>
        <td>정의된 구간</td>
        <td>O</td>
        <td>O</td>
        <td>방송</td>
    </tr>
    <tr style="text-align:center; vertical-align:middle;">
        <td>애니캐스트</td>
        <td>1 : 1</td>
        <td>전체 네트워크</td>
        <td>△</td>
        <td>O</td>
        <td>6 to 4<br/>DNS</td>
    </tr>   
</table>

<br>

---

#### BUM 트래픽과 언노운 유니캐스트

* B (Broadcast), U (Unknown Unicast), M (MultiCast) 을 지칭. 서로 다른 종류의 트래픽이지만 네트워크에서의 동작은 비슷하다.
* 스위치가 목적지에 대한 주소를 학습하지 못한 상황(스위치 입장에서 Unknown)이어서 패킷을 모든 포트로 전송하는데, 이런 유니캐스트를 Unknown 유니캐스트라 한다.
* Unknown Unicast에 따라 전송된 패킷은 전달 받은 모든 단말의 NIC에서 자신의 목적지인 패킷이 아니므로 버리게 된다. 하지만, 네트워크 입장에서는 네트워크 자원을 쓸데없이 사용하므로 불필요한 BUM 트래픽이 많아지면 네트워크 성능이 저하될 수 있다.
* 이런 BUM 트래픽의 발생을 줄이고자 이더넷 환경에선 ARP 브로드캐스트를 먼저 보내게 된다.

<br>

---


```toc

```