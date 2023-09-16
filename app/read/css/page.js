"use client";

import PropertyDescription from "@/component/PropertyDescription/PropertyDescription";
import "../html/Html.css";
import Link from "next/link";

export default function Css () {


  return <main className="Read Html">
    <Link className="ToHome" href="/">목록으로 돌아가기</Link>
    <div className="HtmlTitle">
      CSS, 어렵지 않아요!
    </div>
    <div className="HtmlSubtitle">
      사실 조금 어렵습니다. 그래도 찬찬히 배워봅시다!
    </div>
      <div className="HtmlContents">
        <p>
          css의 기본 문법은 태그, 클래스명, 또는 id를 가리키는 선택자(selector)를 적은 뒤,
          <br/>
          해당 선택자에 적용할 속성들을 중괄호로 묶어서 이어 적는 매우 간단한 방식입니다.
          <br/>
          따라서 css에 어떤 속성이 있는 지 잘 알기만 하면, 원하는 대로 자유롭게 스타일을 지정할 수 있습니다.
        </p>
        <p>
          다음은 기능 별로 묶은 css의 대표적인 속성들입니다.
        </p>
        <div className="HtmlSectionName">크기 / 위치</div>
        <PropertyDescription name="position, display">
          요소의 쌓임-맥락을 결정하는 속성입니다. 요소가 자기 자리에 위치할 지, 또는 화면의 특정 지점에 위치할 지 결정합니다.
        </PropertyDescription>
        <PropertyDescription name="width, height">
          요소의 가로, 세로 크기를 결정합니다. px, %(부모 크기), vw / vh(화면 크기) 등의 단위를 사용할 수 있습니다.
        </PropertyDescription>
        <PropertyDescription name="margin">
          요소의 바깥 간격을 설정합니다.
        </PropertyDescription>
        <PropertyDescription name="padding">
          요소의 안쪽 여백을 설정합니다.
        </PropertyDescription>
        <img src="https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png" style={{width:800}}/>

        <div className="HtmlSectionName">폰트</div>
        <PropertyDescription name="font-family">
          글꼴을 지정합니다.
        </PropertyDescription>
        <PropertyDescription name="font-size">
          글자의 크기를 변경합니다.
        </PropertyDescription>
        <PropertyDescription name="font-weight">
          글자의 굵기를 변경합니다.
        </PropertyDescription>
        <PropertyDescription name="line-height">
          줄 높이를 변경합니다.
        </PropertyDescription>
        <PropertyDescription name="color">
          글자의 색상을 변경합니다. rgba, hsla, hex 등을 사용할 수 있습니다. 기본값은 검정입니다.
        </PropertyDescription>
        <PropertyDescription name="text-align">
          left, right, center, justify 등 글자의 정렬 방식을 변경합니다.
        </PropertyDescription>
        
        <div className="HtmlSectionName">배경 / 테두리</div>
        <PropertyDescription name="background">
          요소의 배경을 지정합니다. 색상, 이미지, 그라데이션 등을 사용할 수 있습니다.
        </PropertyDescription>
        <PropertyDescription name="border">
          요소의 테두리를 지정합니다. 굵기와 색상, 타입을 지정할 수 있습니다.
        </PropertyDescription>
        <PropertyDescription name="border-radius">
          테두리의 둥근 정도를 지정합니다.
        </PropertyDescription>
        <PropertyDescription name="box-shadow">
          요소의 배경 그림자를 지정합니다.
        </PropertyDescription>
        
      </div>
  </main>
}
