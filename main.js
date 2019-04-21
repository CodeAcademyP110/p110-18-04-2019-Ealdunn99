

document.getElementById("Cars").addEventListener("click",function(){
    [...document.querySelectorAll(".all")].forEach(function(e){
        e.classList.remove("yes")
    });
    [...document.querySelectorAll(".car")].forEach(function(e){
        e.classList.add("yes")
    })
})

document.getElementById("Nature").addEventListener("click",function(){
    [...document.querySelectorAll(".all")].forEach(function(e){
        e.classList.remove("yes")
    });
    [...document.querySelectorAll(".nature")].forEach(function(e){
        e.classList.add("yes")
    })
})

document.getElementById("All").addEventListener("click",function(){
    [...document.querySelectorAll(".all")].forEach(function(e){
        e.classList.add("yes")
    })
})
let test=0;
document.getElementById("to9").addEventListener("click",function(){
    if(test==1){
        test=0;
        [...document.querySelectorAll(".all")].reverse().forEach(function(e){
            document.querySelector(".imgre").appendChild(e)
        });
    }
   
})

document.getElementById("to1").addEventListener("click",function(){
    if(test==0){
        test=1;
        [...document.querySelectorAll(".all")].reverse().forEach(function(e){
            document.querySelector(".imgre").appendChild(e)
        });
    }
    
})
////////////////////////////


document.querySelector('#fileUpload').onchange =function(e)
    {
        ImagesUploader([...e.target.files]);
        console.log(e.target.files[0].size);
        
    }

    document.querySelector(".Upload1").addEventListener("click",function(){
        document.getElementById("fileUpload").click(); 
    })
   

    document.querySelector(".upload").addEventListener("dragover",function(e){
        e.preventDefault();//drop imkan ver
    })
    document.querySelector(".upload").addEventListener("drop",function(e){
        e.preventDefault();//drop ele
        ImagesUploader([...e.dataTransfer.files]);//dataTransfer den files i gotur // hansiki kompdan gelir 
        
    })


    function ImagesUploader(files)
    {let images=0;
        let video=0;
        let audio=0;
        files.forEach(file => {

            if (file.type.match("image/*") ) {
                images+=1;
                const reader = new FileReader();
                reader.onloadend = function(event)
                {
                    const div = document.createElement('div');
                    const divImage = document.createElement('div');
                    const image = document.createElement('img');
                    div.classList.add("bigdiv");
                    divImage.classList.add("divs");
                    image.classList.add("img2");
                    image.src = event.target.result;//indi elimde olan file
                    divImage.appendChild(image);

                    const imgName = document.createElement('div');
                    imgName.innerText = file.name;
                    div.appendChild(divImage);
                    div.appendChild(imgName);
                    document.querySelector('.imgs').appendChild(div);
                }
                reader.readAsDataURL(file);
                
            }
            if (file.type.match("video/*") ) {
                video+=1;
                const reader = new FileReader();
                reader.onloadend = function(event)
                {
                    const div = document.createElement('div');
                    const divvideo = document.createElement('div');
                    const i = document.createElement('i');
                    div.classList.add("bigdiv");
                    divvideo.classList.add("divs");
                    i.classList.add('fas','fa-file-video');
                    divvideo.appendChild(i);

                    const videoname = document.createElement('div');
                    videoname.innerText = file.name;
                    div.appendChild(divvideo);
                    div.appendChild(videoname);
                    document.querySelector('.videos').appendChild(div);
                }
                reader.readAsDataURL(file);
                
            }
            if (file.type.match("audio/*") ) {
                audio+=1;
                const reader = new FileReader();
                reader.onloadend = function(event)
                {
                    const div = document.createElement('div');
                    const divvideo = document.createElement('div');
                    const i = document.createElement('i');
                    div.classList.add("bigdiv");
                    divvideo.classList.add("divs");
                    i.classList.add('fas','fa-file-audio');
                    divvideo.appendChild(i);

                    const videoname = document.createElement('div');
                    videoname.innerText = file.name;
                    div.appendChild(divvideo);
                    div.appendChild(videoname);
                    document.querySelector('.audio').appendChild(div);
                }
                reader.readAsDataURL(file);
                
            }


            

        });alert(" image = " + images+ "  video = " + video+"  audio = "+ audio)
        }










