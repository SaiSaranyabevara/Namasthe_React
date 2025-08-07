 
            const heading=React.createElement("div",{id :"heading"},[
                React.createElement("div",{id:"child1"},[
                    React.createElement("h1",{},"this is h1"),
                        React.createElement("h2",{},"this is h2")
                    ]),
                    React.createElement("div",{id:"child2"},[
                        React.createElement("h1",{},"this is h1"),
                        React.createElement("h2",{},"this is h2")
                    ])
                ]
            );
            const root=ReactDOM.createRoot(document.getElementById("root"));
            root.render(heading);
     