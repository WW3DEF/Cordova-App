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

## 6. 환경 변수 설정 (윈도우+x => 시스템=> 고급시스템설정)
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
## 7. Node.js 설치
[[Node.js설치]](https://nodejs.org/ko/)
![image](https://user-images.githubusercontent.com/94514664/204345073-c0428313-1906-4c65-8cb7-5204600f686c.png)
<pre>
  <code>
  > node -v (버전확인하기)
  > npm -v
  > npm update -g(업데이트)
  </code>
</pre>
## 8. 폰갭(코르도바 설치)
<pre>
  <code>
  	>npm install -g phonegap
	>npm install -g cordova
	>cordova -v
	>npm update -g phonegap
	>npm update -g cordova
  </code>
</pre>
## 9. 안드로이드 코르도바 앱 만들기
<pre>
  <code>
	>cd \HybridProject ( 만들어둔 디렉토리 이동 )
	>cordova create test com.example.test testApp -d ( 코르도바 프로젝트 생성 )
	>cd test ( 생성한 코르도바 프로젝트로 이동 )
	>cordova platform add android ( 코르도바 플랫폼 추가 )
	>dir platform ( 플랫폼에 디렉토리들 확인 )
  </code>
</pre>
## 10. build.gradle(:app)
![image](https://user-images.githubusercontent.com/94514664/204346072-3b2dfc59-384c-4ccc-b881-37a45deaed29.png)
Gradle Scripts에 build.gradle의 2번째 파일에서 Android{} 밑 부분에
<pre>
  <code>
  packagingOptions {

        exclude 'META-INF/DEPENDENCIES.txt'

        exclude 'META-INF/LICENSE.txt'

        exclude 'META-INF/NOTICE.txt'

        exclude 'META-INF/NOTICE'

        exclude 'META-INF/LICENSE'

        exclude 'META-INF/DEPENDENCIES'

        exclude 'META-INF/notice.txt'

        exclude 'META-INF/license.txt'

        exclude 'META-INF/dependencies.txt'

        exclude 'META-INF/LGPL2.1'

    } 추가하기
  </code>
</pre>
## 11. AndroidManifest.xml 수정하기
![image](https://user-images.githubusercontent.com/94514664/204346662-83ad0db2-5a90-45db-b34d-8f170eacded4.png)   
Application 안에
<pre>
  <code>
   android:largeHeap="true"
  </code>
</pre>
 넣기
## 12. C:\Users\[사용자명]\.android 내에 있는 debug.keystore파일 삭제
![image](https://user-images.githubusercontent.com/94514664/204347248-1d709cfd-d471-4c2f-a8f5-cd2ea8043e91.png)   
(삭제가 되지 않을 경우에는 Ctrl+Alt+Del => 작업관리자에서 해당 프로세스 작업 끝내기 후에 삭제)
