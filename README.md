# namasthe react

# about parcel:-
- Dev Build
- Local Server
- HMR =hot modular replacement
- File Watching Algorithm - Written in C++
- Caching -Faster Builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bunding - Support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Dev and Prod Bundles
  

  
//react Element

            // const heading=React.createElement("div",{id :"heading"},[
            //     React.createElement("div",{id:"child1"},[
            //         React.createElement("h1",{},"this is h1"),
            //             React.createElement("h2",{},"this is h2")
            //         ]),
            //         React.createElement("div",{id:"child2"},[
            //             React.createElement("h1",{},"this is h1"),
            //             React.createElement("h2",{},"this is h2")
            //         ])
            //     ]
            // );


//reactElement but in JSX


            // const jsxheading=<h1 id="heading">Namasthe React</h1>
            // console.log(jsxheading);
            // const root=ReactDOM.createRoot(document.getElementById("root"));
            // root.render(jsxheading);


//react Component- 2 types
            //1.functional component 2.class component

             
            // const Jsxheading=()=><h1 id="heading">Namasthe React</h1>
            // const Funcomp=()=>(
            //     <div>
            //     <h1>hii hello namasthe! </h1>
            //     <h1>{console.log(Jsxheading)}</h1>
            //     <Jsxheading/>
            //     </div>
            // )
     
            // const root=ReactDOM.createRoot(document.getElementById("root"));
            // root.render(<Funcomp/>);
            


     //food delivery app 
      * Header
      *  -logo
      *  -Nav Items
      * Body
      *  -Search
      *  -RestaurantContainer
      *    - RestaurentCard
      *         -img
      *         -Name of the res, Star Rating, Cuisine, Delivery Time
      * Footer
      *  - Copyright
      *  - Links
      *  - Address 
      *  - Contact
      

//react Hooks
       1.useState()-superpowerful state variable in react 
       2.useeffect



use effect have two parameters 1.call back function, 2.dependecy array

//it render every time the component render
useeffect( ( ) => {
       console.log("useeffect);
})

//it render only at first time of component render
useeffect( ( ) => {
       console.log("useeffect);
},[])

//it render when there is a  change in rendings  component 
useeffect( ( ) => {
       console.log("useeffect);
},[someelement change])


