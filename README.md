# Simple Menu Bar with Support for Dynamic Components in DropDowns.


![Screen Shot 2022-06-28 at 17 16 20](https://user-images.githubusercontent.com/41722860/176098291-bb225efd-b761-49bf-8245-8ff89386c8d3.png)




Use the 'everShown' Prop on the component to determine first render. You may want to use some useState values to track this.


Heirarchy is simply 

### MenuBar>MenuBarButton>MenuSubMenuBig>YourComponent




Scalability is handled by: 


<code>

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


</code>


and


<code>
const subMenus = {
  "Browse Listings": MenuSubBrowse,
  "ShowCase": MenuShowCase,
  "Something Else": DummyComponent,
};

</code>

in

<code>
MenyBar.js
</code>
