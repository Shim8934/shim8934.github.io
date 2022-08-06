---
emoji: 😄
title: TIL 08. 서버 네트워크 기본
date: '2022-08-01 11:52:00'
author: shim8934
tags: #IT엔지니어를위한네트워크입문 #8장.서버의네트워크설정및확인
categories: IT_엔지니어를_위한_네트워크_입문
---
## TIL 08. 서버 네트워크 기본

> 이번 장에서는 서버 내부의 설정 중 윈도와 리눅스 서버에서 네트워크를 각각 어떻게 설정하고 현재 네트워크 상태를 어떻게 확인할 수 있는지가 주관점이다.
>

<br/>

---

### 1. 서버의 네트워크 설정 및 확인 (OS 별로 정리)

#### 1) 리눅스 서버 네트워크

##### (1) CentOS의 네트워크 설정

* CentOS의 네트워크 설정 파일은 다음 경로에 존재한다.

  ```shell
  /etc/sysconfig/network-scripts
  ```

  <img src=".\CentOS_network-scripts.png" alt="CentOS_network-scripts" style="zoom: 67%;" />

<br/>

* 네트워크 인터페이스 별로 설정 가능한 사항이 파일에 기록되어 있으며, 주요 항목은 다음과 같다. 주요 항목 이외에도 설정할 수 있는 다양한 항목들이 존재한다.

<table style="width:80%;">
    <tr style="text-align:center;">
        <td colspan="2">CentOS의 인터페이스 설정 시 주요 항목</td>
    </tr>
    <tr style="text-align:left;">
        <td>ONBOOT</td>
        <td>부팅 시 인터페이스를 활성화시킬 것인지 결정(yes / no)</td>
    </tr>
    <tr style="text-align:left;">
        <td>BOOTPROTO</td>
        <td>부팅 시 사용할 프로토콜 (none, dhcp, static)</td>
    </tr>
    <tr style="text-align:left;">
        <td>IPADDR</td>
        <td>IP 주소</td>
    </tr>
    <tr style="text-align:left;">
        <td>NETMASK</td>
        <td>서브넷 마스크 <br/> 예) 255.255.255.0</td>
    </tr>
    <tr style="text-align:left;">
        <td>PREFIX</td>
        <td>서브넷 마스크(비트 값으로 표기) <br/> 예) 24</td>
    </tr>
    <tr style="text-align:left;">
        <td>GATEWAY</td>
        <td>게이트웨이 주소</td>
    </tr>
    <tr style="text-align:left;">
        <td>DNS1</td>
        <td>주 DNS 정보 입력</td>        
    </tr>
    <tr style="text-align:left;">
        <td>DNS2</td>
        <td>보조 DNS</td>
    </tr>
</table>

<img src=".\CentOS_NIC.png" alt="CentOS_NIC" style="zoom:67%;" />

<br/>

* CentOS뿐만이 아닌 대부분의 Linux 계열 OS에서는 인터페이스 설정 파일을 수정하더라도 변경한 값이 즉시 적용되지 않는다. 변경된 설정값을 적용하려면 다음 두 가지 방법 중 하나를 수행해야 한다.

  1. 네트워크 서비스 재시작

     ```shell
     systemctl restart network.service
     ```

     <br/>

  2. 특정 인터페이스 재시작(ifup)과 다운(ifdown)

     ```shell
     ifup ifcfg-eht0
     ifdown ifcfg-eth0
     ```

<br/>

###### * ifconfig (Linux) & ipconfig (Window)

* Linux에선 ifconfig, Window에서는 `ipconfig`로 각각 네트워크 인터페이스의 설정값과 상태를 확인할 수 있다. 다만 차이점은 Linux의 ifconfig에선 활성화된 인터페이스 정보만 확인할 수 있다는 점이다. Linux에선 위 1-1)에서 다룬 인터페이스 다운으로 비활성화 시켜둔 인터페이스는 `ifconfig`를 통해 드러나지 않는다. Window에선 비활성화된 인터페이스까지 포함해 모든 인터페이스 정보가 보여지게 된다.	![ifdown후의 ifconfig 차이점](.\CentOS_ifconfig.png)

​	위의 예시는 ifcfg-enp0s8 인터페이스를 다운시킨 후, `ifconfig`를 통한 정보 확인 과정이다. 기존에 출력하던 `ip 주소`, `netmask` 등의 정보가 표기되지 않는 것을 확인할 수 있다.

<br/>

##### (2) 우분투 서버 네트워크

* 우분투 네트워크 설정 파일은 다음 경로에 존재한다.

  ```shell
  /etc/network/interfaces
  ```

* CentOS와의 차이점은 CentOS에서는 네트워크 인터페이스 별로 관련 파일과 디렉터리가 존재하지만, 우분투는 interfaces 설정 파일에 네트워크의 모든 인터페이스 설정이 들어간다는 점이다.

* 각 설정에 필요한 속성 값은 거의 CentOS와 비슷하고 이름만 조금 다르다는 특징이 있다. 네트워크 시작 / 정지 / 재시작을 위한 명령어의 차이가 있다.

  ```shell
  /etc/init.d/networking start
  /etc/init.d/networking stop
  /etc/init.d/networking reload
  /etc/init.d/networking restart
  /etc/init.d/networking force-reload
  ```

<br/>

#### 2) 윈도우 서버 네트워크

* 윈도우에서의 네트워크 설정은 여러 가지 방법으로 할 수 있다.

  1-1) 네트워크 연결 메뉴 사용

  1. `제어판` → `네트워크 및 인터넷` → `네트워크 연결` 또는 아래 이미지와 같이 `ncpa.cpl`을 실행해 바로 **네트워크 연결**로 이동하는 방법도 있다.

  ![ncpacpl](.\Window_ncpacpl.png)

  2. **네트워크 연결** 메뉴에서 특정 네트워크 어댑터를 설정하려면 우클릭해 **속성**에 들어간다.
     그리고 여러 가지 서비스 중 Internet Protocol Version 4(TCP/IPv4) 속성을 선택하면 해당 어댑터에서 사용할 `IP 주소`, `서브넷`, `게이트웨이`, `DNS 정보`를 설정할 수 있다.
     보통의 가정집에서는 자동으로 설정해 사용하는 경우가 대부분이다.

     ![속성창](.\Window_NetworkSetting.png)

  <br/>

  1-2) netsh 명령어 사용

  1. Linux에서의 명령어를 사용한 네트워크 설정과 유사하게 `netsh`라는 명령어를 사용할 수 있다.

     ```powershell
     netsh interface ipv4 set address name="인터페이스명" static IP 주소 서브넷 게이트웨이
     ```

  <br/>

   리눅스와 달리 윈도우는 설정 완료 후 '확인' 버튼만 클릭하면 변경한 설정이 적용된다. Linux 계열의 OS처럼 별도로 네트워크 서비스나 인터페이스를 재시작하지 않아도 되지만, 간혹 정상적으로 동작하지 않아 재시작해야하는 경우에는 재시작할 어댑터를 `사용 안 함` → `사용` 을 통해 재시작하면 된다.

  ​	![윈도우 네트워크 재시작](.\Window_networkrestart.png)

   아니면 netst 명령으로도 어댑터를 리셋 가능하다.

  ```powershell
  netsh interface set interface name="인터페이스명" admin=disabled   #(비활성화)
  netsh interface set interface name="인터페이스명" admin=enabled    #(활성화)
  ```

<br/>

---

### 2. 서버의 라우팅 테이블

> 이번 단원에서는 서버의 라우팅 동작을 이해하기 위한 라우팅 테이블 확인 방법에 초점을 둔다.
>
> 이번에 살펴볼 항목들은 아래와 같다.
>
> 1. 목적지 (Destination)
> 2. 서브넷 (Genmask)
> 3. 게이트웨이 (Gateway)
> 4. 인터페이스 (face)
> 5. 우선순위 (Metric)

#### 1. 라우팅 테이블 출력 시 출력 항목

<table>
    <tr style="text-align:center;">
        <td colspan="5">서버 라우팅 테이블 항목</td>
    </tr>
    <tr style="text-align:center;">
        <td>10.10.20.0</td>
        <td>24</td>
        <td>10.10.10.1</td>
        <td>eth1</td>
        <td>10</td>
    </tr>
    <tr style="text-align:center;">
        <td>목적지</td>
        <td>서브넷</td>
        <td>게이트웨이</td>
        <td>인터페이스</td>
        <td>우선순위</td>
    </tr>
</table>


* 어떤 OS에서 출력을 하든 차이점은 순서만 차이날 뿐, 위의 항목들이 대부분 출력된다.

<table>
    <tr style="text-align:center;">
        <td colspan="2">라우팅 테이블 항목 부가 설명</td>
    </tr>
    <tr style="text-align:left;">
        <td>1. 목적지와 서브넷</td>
        <td>서버가 통신하려는 목적지 IP 주소에 맞는 라우팅을 선택하는 기준점.<br/> 라우팅할 때 목적지 네트워크 주소와 서브넷으로 표현되는 목적지 네트워크 범위 내에 서버가 통신하려는 IP 주소가 속한 라우팅 테이블을 선택하게 된다.</td>
    </tr>
    <tr style="text-align:left;">
        <td>2. 게이트웨이</td>
        <td>선택된 목적지로 가기 위해 서버에서 선택하는 넥스트 홉.<br/> 만약 서버에 두 개 이상의 네트워크 카드(NIC)가 존재한다면 원하는 네트워크 카드의 게이트웨이로 지정해 주어야 한다.</td>
    </tr>
    <tr style="text-align:left;">
        <td>3. 인터페이스</td>
        <td>서버의 네트워크 카드를 의미하며, 라우팅에서 어떤 물리적인 경로로 패킷을 내보낼지 설정한다.</td>
    </tr>
    <tr style="text-align:left;">
        <td>4. 우선순위</td>
        <td>동일한 라우팅 테이블이 두 개 이상 존재할 때 어떤 라우팅 테이블을 선택할지 정하는 값이다. 이 값이 낮을 수록 우선순위가 높아진다.</td>
    </tr>
</table>

<br/>

#### 2. 리눅스 서버의 라우팅 확인 및 관리

##### 1. 라우팅 테이블 확인

1. ip route

   * ip route 명령어를 사용한 결괏값은 다음과 같다.

   ![image-20220804094620919](.\CentOS_iproute.png)

​	<br/>

 2. netstat -r

    * netstat을 사용해 확인할 땐 r 옵션을 추가하면 라우팅 테이블을 편하게 확인할 수 있다.

    ![netstat -r](.\CentOS_netstat_r.png)

    * n 옵션을 추가로 사용하면 화면에 표기될 때, 실제 IP 정보가 표기되어 좀 더 직관적인 라우팅 테이블을 확인할 수 있다.

    ![netstat -rn](.\CentOS_netstat_rn.png)

<br/>

##### 2. 라우팅 테이블 추가하는 설정

1. 임시적 라우팅 테이블 추가

   1. route add / del (추가 / 삭제)

      ```shell
      route add { -host | -net } Target[/prefix] [gw GW] [metric M] [[dev] If]   # 추가
      route del { -host | -net } Target[/prefix] [gw GW] [metric M] [[dev] If]   # 삭제
      ```

   2. 이 명령어 뿐만 아니라 `ip route` 옵션 뒤에 `add` 옵션을 사용하는 것도 동일하게 추가할 수 있다.

   3. 디폴트 라우팅 설정 - 일반 라우팅 설정과 동일하지만 목적지 네트워크를 `default`로 표기해 설정할 수 있다.

      ```shell
      route add default gw 10.1.1.1 dev eth0   # 추가
      route del default gw 10.1.1.1 dev eth0   # 추가
      ```

   * 위의 명령어로 추가한 라우팅 설정은 서버가 재부팅될 시 사라진다. 즉, 재부팅 시 초기 라우팅 설정만 남아있게 되는 특징이 있다.

<br/>

2. 영구적 라우팅 설정

###### 1) Cent OS의 영구적 라우팅 설정

* CentOS에선 다음과 같이 별도 파일을 만들어 라우팅을 설정한다.

  ```shell
  /etc/sysconfig/network-scripts/route-장치명
  ```

* 예를 들어 `et0` 인터페이스에 대한 영구적인 라우팅 설정 파일명은 `route-eht0`이다.

* 라우팅 설정 파일에는 `ADDRESS`, `NETMASK`, `GATEWAY` 항목을 사용한다.

  ```shell
  ADDRESS0=10.10.10.0
  NETMASK0=255.255.255.0
  GATEWAY0=10.1.1.1
  ADDRESS1=10.10.20.0
  NETMASK1=255.255.255.128
  GATEWAY1=10.1.1.1
  
  # 또는 아래와 같이 설정
  10.10.10.0/24 via 192.168.0.1 dev eth1
  ```

<br/>

###### 2)  우분투의 영구적 라우팅 설정

* 우분투에서는 네트워크 설정에서 사용했던 `interfaces` 파일에 라우팅 설정을 한다. 일반 라우팅 테이블 설정과 동일한 양식으로 한다.

  ```shell
  up route add [-net|-host] <host/net>/<mask> gw <host/IP> dev <Interface>
  ```

  * 위 명령어 맨 앞의 `up`은 인터페이스가 시작될 때 실행하라는 명령어로, CentOS와 마찬가지로 네트워크를 다시 시작하거나 서버를 재부팅하는 경우, 신규 라우팅 정보가 라우팅 테이블에 등록된다.

<br/>

###### 3) 윈도우 서버의 라우팅 설정

* 윈도우에서는 라우팅 테이블을 확인하고 관리하기 위해 `route`명령어를 사용한다. 4가지 옵션이 존재한다.
  1. PRINT
  2. ADD
  3. DELETE
  4. CHANGE

<br/>

1. PRINT

   * 옵션 없이 `route print`를 입력할 경우, 모든 인터페이스 목록을 확인할 수 있다.

   ![route print](.\Window_routeprint.png)

   <br/>

   * 필요한 라우팅 정보만 확인하기 위해 특정 목적지 네트워크를 인자값으로 직접 지정하거나 `*`와 `?`를 이용해 특정 패턴에 맞는 네트워크 대역을 확인할 수 있다.

     ```powershell
     route print 10.10.*		# 10.10.0.0/16 에 대한 전체 라우팅 테이블 확인
     route print 10.10.1?.0	# 10.10.10.0/24 ~ 10.10.19.0/24 에 대한 라우팅 테이블 확인
     ```

   <br/>

2. ADD

   * 라우팅 테이블을 추가하는 명령어다. 다만, 리눅스처럼 **명령으로 입력해 생성한 라우팅 테이블**은 **서버가 재부팅된 이후에는 라우팅 테이블에서 사라진다는 특징**이 있다.

     ```powershell
     ROUTE [ -p ] ADD [ dest ] [ MASK netmask ] [ gateway ] [ METRIC metric ] [ IF interface ]
     ```

   * 생성 시, `-p` 옵션을 추가해 생성하면 영구 경로로 등록할 수 있다. 즉, 리눅스처럼 설정 파일을 별도로 만들거나 입력하지 않고도 영구 경로 생성이 가능하다는 것이다.

   <br/>

3. DELETE

   * 라우팅 테이블을 삭제하는 명령어다. 추가와 달리 `MASK` 나 `gateway` 정보를 입력하지 않아도 된다.
   * 단, 세부 정보를 입력하지 않고 삭제할 경우 유의할 점이 존재한다. 입력한 정보만으로 해당하는 정보가 2가지 이상 존재한다면 해당된 라우팅 테이블이 모두 삭제된다.

   <br/>

4. CHANGE

   * 라우팅 테이블을 변경하는 명령어다.
   * 삭제와 마찬가지로 세부 정보를 입력하지 않고 변경할 때 유의할 점이 존재한다. 입력한 정보 값에 해당되는 라우팅 테이블 정보가 모두 변경된다는 점이다.

<br/>

---

### 3. 네트워크 확인을 위한 명령어

#### 1) ping (Packet InterNet Groper)

* 네트워크 상태를 확인할 때 사용하는 명령어다.
* `ICMP (Internet Control Message Protocol)` 프로토콜을 사용하고 ICMP의 제어 메시지를 통해 여러 가지 네트워크 상태를 파악할 수 있다.

```shell
ping [옵션] 목적지_IP 주소
```

* 별도 옵션 없이 `ping`을 체크하는 방법을 통상적인 `기본 ping`이라 하며, 옵션을 사용해 `ping`을 체크하는 방법을 `확장 ping`이라 한다.

<br/>

##### (1) 리눅스 ping 옵션

<table>
    <tr>
        <td style="text-align:center;" colspan="2">리눅스 ping 명령어 옵션</td>
    </tr>
    <tr style="text-align:left;">
        <td>-c<br/>count</td>
        <td>ping을 보내는 패킷(ECHO_REQUEST)을 몇 번 보내고 종료할 것인지를 지정</td>
    </tr>
    <tr style="text-align:left;">
        <td>-i<br/>interval</td>
        <td>패킷을 보내는 시간 간격. 기본 설정값은 1초. 슈퍼 유저의 경우, 0.2 이하로 설정 가능</td>
    </tr>
    <tr style="text-align:left;">
        <td>-I<br/>interface</td>
        <td>패킷을 보낼 때, 출발지 주소를 지정. 실제 IP 값을 지정하거나 인터페이스 이름을 지정하면 출발지 주소가 변경됨. 이 옵션을 사용하지 않는 경우, 라우팅 테이블에 의해 나가는 인터페이스(Outgoint-Interface)의 IP 주소가 출발지 주소가 됨.</td>
    </tr>
    <tr style="text-align:left;">
        <td>-s<br/>packetsize</td>
        <td>패킷 크기를 지정. 기본 설정값은 56바이트(8바이트의 ICMP 헤더가 추가로 붙어 64바이트를 송신)</td>
    </tr>
</table>

<br/>

##### (2) 윈도우 ping 옵션

<table>
    <tr>
        <td style="text-align:center;" colspan="2">윈도우 ping 명령어 옵션</td>
    </tr>
    <tr style="text-align:left;">
        <td>-n<br/>count</td>
        <td>ping을 보내는 패킷(ECHO_REQUEST)을 몇 번 보내고 종료할 것인지를 지정<br/>기본 설정은 4회 전송</td>
    </tr>
    <tr style="text-align:left;">
        <td>-t</td>
        <td>중지할 때까지 지정한 호스트로 ping을 지속적으로 전송</td>
    </tr>
    <tr style="text-align:left;">
        <td>-S<br/>srcaddr</td>
        <td>사용할 원본 IP 주소로, 리눅스의 -I 옵션과 동일</td>
    </tr>
    <tr style="text-align:left;">
        <td>-l<br/>size</td>
        <td>패킷 크기를 지정. 기본 설정값은 32바이트</td>
    </tr>
    <tr style="text-align:left;">
        <td>-r<br/>count</td>
        <td>count 홉의 경로 기록(최대 9홉까지 설정 가능)</td>
    </tr>
</table>

<br/>

#### 2) netstat (network statistics)

* 서버의 다양한 네트워크 상태를 확인할 때 사용하는 명령어다. 주로, 현재 서버의 서비스 포트 상태를 확인하는 용도로 사용한다. 윈도우 계열과 리눅스 계열에서의 기본적인 사용법은 동일하며, 일부 옵션만 차이가 있다.
* 개인적으로 `netstat -antp | grep LISTENING` 을 통해 상태를 확인하고자 많이 사용했다.

##### (1) 리눅스 netstat 옵션

<table>
    <tr>
        <td style="text-align:center;" colspan="2">리눅스 netstat 명령어 옵션</td>
    </tr>
    <tr style="text-align:left;">
        <td>-a<br/>--all</td>
        <td>모든 연결과 수신 대기 포트 표시</td>
    </tr>
    <tr style="text-align:left;">
        <td>-n<br/>--numeric</td>
        <td>주소와 포트 번호를 숫자 형식으로 표시 (예: http → 80 )</td>
    </tr>
    <tr style="text-align:left;">
        <td>-r<br/>--route</td>
        <td>라우팅 테이블 표시</td>
    </tr>
    <tr style="text-align:left;">
        <td>-i<br/>--interfaces</td>
        <td>인터페이스별 입출력 패킷 통계</td>
    </tr>
    <tr style="text-align:left;">
        <td>-s<br/>--statistics</td>
        <td>네트워크에 통계 데이터 출력</td>
    </tr>
    <tr style="text-align:left;">
        <td>-p<br/>--programs</td>
        <td>PID와 프로그램 이름 출력</td>
    </tr>
    <tr style="text-align:left;">
        <td>-t<br/>--tcp</td>
        <td>TCP만 출력 (TCP, TCPv6)</td>
    </tr>
    <tr style="text-align:left;">
        <td>-4 / -6</td>
        <td>IPv4나 IPv6에 대해 출력</td>
    </tr>
</table>

<br/>

##### (2) 윈도우 netstat 옵션

<table>
    <tr>
        <td style="text-align:center;" colspan="2">윈도우 netstat 명령어 옵션</td>
    </tr>
    <tr style="text-align:left;">
        <td>-a</td>
        <td>모든 연결과 수신 대기 포트 표시</td>
    </tr>
    <tr style="text-align:left;">
        <td>-n</td>
        <td>주소와 포트 번호를 숫자 형식으로 표시 (예: http → 80 )</td>
    </tr>
    <tr style="text-align:left;">
        <td>-r</td>
        <td>라우팅 테이블 표시</td>
    </tr>
    <tr style="text-align:left;">
        <td>-e</td>
        <td>이더넷 통계를 표시. 이 옵션은 -s 옵션과 함께 사용 가능</td>
    </tr>
    <tr style="text-align:left;">
        <td>-s</td>
        <td>프로토콜별 통계를 표시. 기본적으로 IP, IPv6, ICMP, ICMPv6, TCP, TCPv6, UDP 및 UDPv6에 대한 통계를 표시한다.<br/>-p 옵션을 사용해 기본값의 일부 집합에 대한 통계만 표시</td>
    </tr>
    <tr style="text-align:left;">
        <td>-p<br/>--proto</td>
        <td>proto로 지정한 프로토콜의 연결을 표시.<br/>proto는 TCP, UDP, TCPv6, UDPv6 중 하나로, -s 옵션과 함께 사용해 프로토콜별 통계를 표시할 경우, proto는 IP, IPv6, ICMP, ICMPv6, TCP, TCPv6, UDP 및 UDPv6 중 하나를 사용</td>
    </tr>
</table>

<br/>



---


```toc

```