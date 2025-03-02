// const id = document.getElementById("body-color").classList;
//         console.log(id);
//         let bg = '';
        let newBackGround = '';
        function changeBackGroundColor(elementID, defaultBackGround, newBackGround){
            
            elementID.remove(defaultBackGround);
            // elementID.remove(newBackGround);
            if(newBackGround !== '')
            {
                elementID.remove(newBackGround);
            }
            // console.log(newBackGround);
            // console.log(elementID);
            
            let colorList = ['purple','blue','green', 'yellow', 'lime', 'red', 'black', 'cyan', 'indigo','pink','gray'];
            let i = Math.floor(Math.random() * colorList.length);
            let r = colorList[i];
            // console.log(i, '>>>>>>',r);
            newBackGround = 'bg-['+r+']';
            
            elementID.add(newBackGround);
            // newBackGround = '';
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


