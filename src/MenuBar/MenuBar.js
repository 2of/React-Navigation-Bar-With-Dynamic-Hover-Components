import React, { useState } from "react";
import "./MenuBar.css";
import BaseStyles from "../StyleMain";
import { useEffect } from "react";
import Loader from "../Components/Loader";
const genericimage = require('./fruit.png')


const Paths = [
  {
    name: "Browse Listings",
    path: "/listings",
    type: "normal",
    association: "nav",
  },
  {
    name: "ShowCase",
    path: "/showcase",
    type: "normal",
    association: "nav",
  },
  {
    name: "Sell",
    path: "/list",
    type: "important",
    association: "nav",
  },
  {
    name: "Something Else",
    path: "/else",
    type: "normal",
    association: "nav",
  },
  {
    name: "Account",
    path: "/account",
    type: "normal",
    association: "account",
  },
];

const MenuSubBrowse = ({ proptest }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(console.log("Test"), 500);

    return () => {};
  }, [proptest]);

  return (
    <>
      <div className="BrowseChip">
        BROWSE MENU
        {loading ? (
          Array.from(Array(10).keys()).map((n, i) => <p key={i}>test</p>)
        ) : (
          <Loader></Loader>
        )}
      </div>
    </>
  );
};
const MenuShowCase = ({ everShown }) => {
  const [hasShown, sethasShown] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (everShown && !hasShown) {
      console.log("goinnnng");
      setTimeout(() => {
        sethasShown(true);
        load_content();
      }, 300);
      //The timeout is for demonstration purposes
    }
  }, [everShown]);

  const load_content = () => {
    setisLoading(false);
  };



  const Cell = ({title="Undefined", desc="Undefined", cat="",price=null, img=genericimage}) => { 
    return (<>
        <div className="ResultsCellSubMenu">
          <div className="ResultsCellSubMenuTitle">
            {title} 
          </div>

          <div className="ResultsCellSubMenuDesc">
            {desc}
          </div>

          <img className="ResultsCellSubMenuImg" src={genericimage}>
        
          </img>
        </div>




    </>)
  }
  const LoadedContent = () => {
    return (
      <ul className="submenudynamiccontent">
        {Array.from(Array(4).keys()).map((n, i) => (
          // <li className="DynamicShowCaseCell" key={i}>te33st</li>

          <li key={i}>
            <Cell/>
          </li>
        ))}
      </ul>
    );
  };
  return (

    <div className="ShowCaseMenuSub">
      <>{isLoading ? <Loader /> :
      <>
      <div className="SubMenuTitle">Check These Out</div>
       <LoadedContent />
        </>}</>
    </div>
  );
};
const DummyComponent = ({ text }) => {
  return <>I am a placeholder component from {text}</>;
};
const subMenus = {
  "Browse Listings": MenuSubBrowse,
  "ShowCase": MenuShowCase,
  "Something Else": DummyComponent,
};

const Logo = ({ variant }) => {
  return (
    <>
      <h2>Logo</h2>
    </>
  );
};

const MenuSubMenuBig = ({ titletext, role, show, component }) => {
  const Widget = component;

  return (
    <>
      <div
        // className="MenuSubMenuBig"
        className={`MenuSubMenuBig  ${!show ? "m-fadeOut" : "m-fadeIn"} `}
        style={{
          background: BaseStyles.mainlight,
          //   visibility: !show ? 'hidden' : 'visible',
          position: "absolute",
          borderRadius: "0px 12px 12px 12px",
          marginTop: "10px",
          marginLeft: "-11px",
          // marginRight: "10px",
          border: "1px solid black",

          // width: 'automatic'
          boxShadow: "1px 1px 1px black",
        }}
      >
        <Widget text="test" everShown={show} />
      </div>
    </>
  );
};

const MenuButton = ({ variant = "normal", text, hovercomponent = null }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const getstyle = (variant) => {
    const style_base = {
      borderRadius: "5px",
      //   borderRadius: isHovering ? "12px 12px 0px 0px" : "12px",
      padding: "10px",
      marginLeft: "10px",
      transition: "0.1s",
      cursor: "pointer",
    };
    switch (variant) {
      case "normal":
        return {
          background: isHovering ? BaseStyles.mainfg : BaseStyles.mainbg,
          ...style_base,
        };
      default:
        return {
          background: isHovering ? BaseStyles.mainfg : BaseStyles.maincallout,
          ...style_base,
        };
    }
  };

  return (
    <>
      <li
        className="menuNavButton "
        style={getstyle(variant)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
        {hovercomponent ? (
          <MenuSubMenuBig
            titletext={text}
            show={isHovering}
            component={hovercomponent}
          ></MenuSubMenuBig>
        ) : (
          ""
        )}

        {/* {isHovering ? <MenuSubMenuBig titletext={text} show={isHovering}></MenuSubMenuBig> : ''} */}
      </li>
    </>
  );
};

export default function MenuBar() {
  return (
    <>
      <div
        className="menuContainer"
        style={{
          background: BaseStyles.mainbg,
          color: BaseStyles.maintext,

          borderBottom: "1px solid black",
        }}
      >
        <div className="menuLeftCluster">
          <Logo></Logo>

          <ul className="menuNavLinks">
            {Paths.filter((n) => n.association === "nav").map((n, i) => (
              <MenuButton
                text={n.name}
                variant={n.type}
                key={indexedDB}
                hovercomponent={subMenus[n.name]}
              ></MenuButton>
            ))}
          </ul>
        </div>

        <div className="menuRightCluster">
          <ul className="menuNavLinks">
            {Paths.filter((n) => n.association === "account").map((n, i) => (
              <MenuButton
                text={n.name}
                variant={n.type}
                key={indexedDB}
              ></MenuButton>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
