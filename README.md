# 코르도바 설정

## 1. JDK 설치하기
[[JDK설치 오라클]](https://www.oracle.com/kr/java/technologies/javase/javase8-archive-downloads.html)
![image](https://user-images.githubusercontent.com/94514664/204339616-afb1dcc3-4552-43f3-9cdb-25363d87e25c.png)

## 2. 디렉토리 만들기
<pre>
  <code>
  md [디렉토리 명]
  </code>
</pre>
![image](https://user-images.githubusercontent.com/94514664/204341649-e1e44c9c-525c-4394-b42d-7847d9edfd7a.png)

## 3. Apache ant 설치하기
[[Apache ant설치]](https://ant.apache.org/bindownload.cgi)
zip 풀어서 만들어둔 디렉토리에 두기

## 4. Gradle 설치하기
[[Gradle설치]](https://gradle.org/releases/)
zip 풀어서 만들어둔 디렉토리에 두기

## 5. 안드로이드 스튜디오 설치
[[Android Studio 설치]](https://developer.android.com/studio?gclid=Cj0KCQiA1ZGcBhCoARIsAGQ0kkqlYNEvfjGG-u08JWsbA7E9dTOs6sA8fT_wgGn3nzSHCYR6yCagOBQaAiktEALw_wcB&gclsrc=aw.ds)
### 5.1 AVD로 NEXUS 5나 NEXUS 5S 만들기 ( API 29 ) 
![image](https://user-images.githubusercontent.com/94514664/204344362-9b5ad111-487f-43a5-8d40-714b8820f466.png)

### 5.2 안드로이드 플랫폼 패키지 추가 설치
![image](https://user-images.githubusercontent.com/94514664/204343857-a36530e9-34e0-4f9a-94be-d3855c82fdd1.png)
![image](https://user-images.githubusercontent.com/94514664/204344194-eadf76c1-0242-44b2-98db-aea5150833fc.png)
<pre>
  <code>
  SDK platforms
	Android 12L	32
	Android 12	31
	Android 11	30
	Android R	29
SDK Tools
	Android SDK Tools
	Android SDK Platfor-tools
	Android SDK Build-tools

Extra
	Android Support Repository
	Android Auto Desktop head unit emulator
	Android auto API simulator
	Google Repository
	Google USB Driver
	Google Play Services
	Android SDK Command-line Tools
	Intel x86 Emulator Accelerator(HAXM installer)
  </code>
</pre>

### 6. 환경 변수 설정 (윈도우+x => 시스템=> 고급시스템설정)
<pre>
  <code>
  	JAVA_HOME 		c:\progrqm files\java\jdk1.8--
	ANDROID_SDK_ROOT	C:\Users\사용자명\AppData\Local\Android\android-sdk
	GRADLE_HOME		C:\gradle-3.5

	Path 
		%JAVA_HOME%\bin;
		%ANDROID_HOME%\tools
		%ANDROID_HOME%\platform-tools
		%ANDROID_HOME%\build-tools
		%ANDROID_HOME%\cmdline-tools\latest\bin
		%ANDROID_HOME\emulator
		%GRADLE_HOME%\bin
		c:\HybridApp\apace-ant-1.9.16\bin
  </code>
</pre>
