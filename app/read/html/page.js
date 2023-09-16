"use client";

import PropertyDescription from "@/component/PropertyDescription/PropertyDescription";
import "./Html.css";
import Link from "next/link";
export default function Html () {


  return <main className="Read Html">
    <Link className="ToHome" href="/">목록으로 돌아가기</Link>
    <div className="HtmlTitle">
      HTML 뜯어보기
    </div>
    <div className="HtmlSubtitle">
      HTML에는 어떤 태그들이 있을까요?
    </div>
      <div className="HtmlContents">
        <p>
          HTML은 역사가 오래된 언어로, 우리가 생각하는 웹을 구현할 수 있는 대부분의 요소를 기본적으로 갖추고 있습니다.
          <br/>
          각 태그들에는 브라우저에서 제공하는 기본적인 스타일이 적용되어 있어, 따로 스타일을 지정하지 않아도 사용이 가능하며,
          <br/>
          css와 javascript를 이용하여 자유로운 커스터마이징이 가능합니다.
        </p>
        <p>
          자주 사용되는 HTML 태그들을 함께 알아봅시다.
        </p>
        <div className="HtmlSectionName">기본</div>
        <PropertyDescription name="<div>">
          div는 division의 약자로, 웹 페이지의 구역을 나누는 역할을 합니다. 기본적으로 div는 부모 요소의 가로 폭을 가득 채우게 됩니다. div에는 어떠한 스타일도 적용되어 있지 않습니다.
        </PropertyDescription>
        <PropertyDescription name="<span>">
          span은  div와 비슷하게 아무런 스타일도 적용되어 있지 않은 인라인 요소입니다. 한 줄 안에서 일부 글자에만 특정 스타일을 지정하기 위한 구분자로 사용합니다.
        </PropertyDescription>
        <div className="HtmlSectionName">서식</div>
        <PropertyDescription name="<h1> ~ <h6>">
          h는 heading의 약자로, 제목을 작성하는 태그입니다. 뒤에 붙는 숫자가 커질수록 글자의 크기와 굵기가 감소합니다.
        </PropertyDescription>
        <h1>h1입니다</h1>
        <h2>h2입니다</h2>
        <h3>h3입니다</h3>
        <h4>h4입니다</h4>
        <h5>h5입니다</h5>
        <h6>h6입니다</h6>
        <PropertyDescription name="<p>">
          p는 paragraph의 약자로, 문단을 나누는 역할을 합니다.
        </PropertyDescription>
        <div className="HtmlSectionName">상호작용</div>
        <PropertyDescription name="<button>">
          사용자가 클릭할 수 있는 가장 기본적인 요소입니다. 클릭 시 발생할 동작을 지정할 수 있습니다.
        </PropertyDescription>
        <button onClick={()=> alert("버튼이 눌렸어요!")}>버튼 예시</button>
        <PropertyDescription name="<a>">
          다른 문서로 이동하는 하이퍼링크입니다. 이동할 주소를 href 속성에 지정합니다.
        </PropertyDescription>
        <a href="https://naver.com">네이버로 이동</a>
        <PropertyDescription name="<input>">
          다양한 값을 입력할 수 있는 요소입니다. type 속성을 통해 입력할 값의 종류를 지정할 수 있습니다.
        </PropertyDescription>
        <input type="text" placeholder="텍스트 입력"/>
        <br/>
        <input type="password" placeholder="비밀번호 입력"/>
        <br/>
        <input type="range" />
        <div className="HtmlSectionName">리스트</div>
        <PropertyDescription name="<ol>">
          onrdered list의 줄임말입니다. 숫자가 붙어있는 리스트를 생성합니다.
        </PropertyDescription>
        <ol>
          <li>첫번째 항목</li>
          <li>두번째 항목</li>
          <li>세번째 항목</li>
        </ol>
        <PropertyDescription name="<ul>">
          unordered list의 줄임말입니다. 숫자가 붙어있지 않은 리스트를 생성합니다.
        </PropertyDescription>
        <ul>
          <li>첫번째 항목</li>
          <li>두번째 항목</li>
          <li>세번째 항목</li>
        </ul>
        <PropertyDescription name="<li>">
          list item의 줄임말로, ol이나 ul의 내부에서 리스트의 각 항목을 나타내는 요소입니다.
        </PropertyDescription>
      </div>
  </main>
}