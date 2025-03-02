
        function changeBackGroundColor(elementID){
            
            elementID.remove(elementID[2]);
            
            let colorList = ['purple','blue','green', 'yellow', 'lime', 'red', 'black', 'cyan', 'indigo','pink','gray'];
            let i = Math.floor(Math.random() * colorList.length);
            let r = colorList[i];

            const newBackGround = 'bg-['+r+']';
            
            elementID.add(newBackGround);
        }

        function getTaskCount(taskCount, totalTaskCount){
            totalTaskCount = totalTaskCount + 1;
            taskCount = taskCount - 1;
            const button = document.querySelector("button");
            button.setAttribute("disabled", "disabled");
            if(taskCount>=0){   
                document.getElementById('task-count').innerText = taskCount; 
                document.getElementById('dev-count').innerText = totalTaskCount;
                alert("Board updated successfully.");
                if(taskCount === 0){
                    alert("Congratulations! You have completed all tasks.");
                }
            }            
        }

        function getTaskTitle(taskTitleID){
            const taskTitle = document.getElementById(taskTitleID).innerText;
            return taskTitle;
        }

        function showHistory(elementID){
            const taskTitle =  getTaskTitle(elementID);            
            const historyCard = document.getElementById("history-card");
            const publishedTime = getPublishTime();
            const div = document.createElement("div");
            div.classList.add("bg-custom");
            div.classList.add("rounded-lg");
            div.classList.add("p-3");

            div.innerHTML =  `
                <p>You have Complete The Task ${taskTitle} at ${publishedTime}</p>
            `           
            historyCard.append(div)
        }

        function getHistoryContainer(){
            const historyContainer = document.getElementById("side-bar");
            const div = document.createElement("div");
            div.id = "history-card";
            div.classList.add("mt-4");
            div.classList.add("space-y-4");
            historyContainer.append(div)
        }

        function getPublishTime() {
            const d = new Date();
            return d.toLocaleTimeString();
        }

        function getPublishedDate(){
            const d = new Date();
            let text = d.toDateString();
            text = text.split(" ");
            
            document.getElementById("day-name").innerHTML = text[0] + " ,";
            document.getElementById("publish-date").innerHTML = text[1] + " " + text[2] + " " + text[3  ];
        }
        getPublishedDate();