# 개요
[모바일-포트폴리오 이동하기](https://mportpolio.netlify.app/index.html)

# 프레임워크 사용현황
```
+ Home
  - Jquery Mobile
  
+ About
  - Jquery Mobile
  - Bulma
  
+ Stack
  - Jquery Mobile
  - BootStrap 5
  
+ Projects
  - Jquery Mobile
  - Foundation
  
+ Contact
  - Jquery Mobile
  - Materialize
```
# 화면구성 및 사용한 프레임워크
![image](https://user-images.githubusercontent.com/94514664/196271960-b6714fb8-c1fc-406b-8c2f-fd5cb75b7ada.png)
### HOME 화면 ( JQUERY 모바일 )
```HTML
<div data-role="page" data-theme="a" id="Home">
  <div data-role="panel" id="mypanel" data-display="Reveal" data-theme="a">
    <div data-role="header" data-theme="b" class="header" data-fullscreen="true" data-position="fixed">
      
    </div>
    <div data-role="content">
    
    </div>
    <div data-role="footer" data-theme="b" data-fullscreen="true" data-position="fixed">
      
    </div>
  </div>
</div>
```
### About 화면 ( Bulma (Card기능 및 Grid 사용) )
![image](https://user-images.githubusercontent.com/94514664/196275537-47f34ba0-700f-4aa2-b7cb-401b7400cd70.png)
```HTML
<div class="card" style="width: 30rem; position: absolute; left:30rem">
                <div class="card-image">
                  <figure class="image is-1by1" style="width: 30rem">
                    <img src="./img/MyImage.png" alt="Placeholder image">
                  </figure>
                </div>
   <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      </div>
                  </div>
```
### Stack 화면 ( BootStrap ( 프로그레스 바 기능 및 리스트 사용) )
![image](https://user-images.githubusercontent.com/94514664/196276365-8719d850-e320-4aec-b0af-41ed6b594baf.png)
```HTML
<ul class="listgroup">
                <li class="list-group-item"><img src="./img/html.png" width="70rem"><h3 style="display: inline-BLOCK">HTML 5</h3>
                <div class="progress" style="width: 30%; margin-bottom: 2rem;">
                    <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                </div></li>
            <li class="list-group-item"><img src="./img/css.png" width="50rem"><h3 style="display: inline-BLOCK">CSS 3</h3>
            <div class="progress" style="width: 30%; margin-bottom: 2rem;">
                <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 45%;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
            </div></li>
            <li class="list-group-item"><img src="./img/js.png" width="60rem"><h3 style="display: inline-BLOCK">JavaScript</h3>
            <div class="progress" style="width: 30%; margin-bottom: 2rem;">
                <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
            </div></li>
            <li class="list-group-item"><img src="./img/React.png" width="50rem"><h3 style="display: inline-BLOCK">React</h3>
            <div class="progress" style="width: 30%;">
                <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 15%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">15%</div>
            </div></li>
            </ul>
```
# Project 화면 ( Foundation ( Card기능 사용 ) )
![image](https://user-images.githubusercontent.com/94514664/196276656-920a28ca-ee87-487e-a4df-15f451d3ff2e.png)
```HTML
 <div data-role="content">
            <div class="row">
                <div class="large-1">
                    <div class="card" style="width: 500px;">
                        <div class="card-divider">
                          
                           </div>
                    </div>
                </div>
            </div>
```
# Contact 화면 ( Materialize ( icon 및 list Group기능 사용) )
![image](https://user-images.githubusercontent.com/94514664/196277192-c94f3d22-1790-44ce-88e6-da378a5b993e.png)
```HTML
 <ul class="collection">
                <li class="collection-item avatar">
                  <i class="material-icons circle">call</i>
                </li>
 </ul>
```
