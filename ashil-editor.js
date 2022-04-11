
class AshilEditor extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback() {
      
        this.innerHTML = `
            <div class="container container-div">
                <div class="row" style="float: left;">
                    <h2>Text Area</h2>
                    <textarea onkeyup="callme(this);" name="" id="" cols="80" rows="10" ></textarea>
                </div>

                <div class="row container" style="float:left">
                    <p id="totalChar" class="container-p"> </p>

                    <p id="totalWords" class="container-p"></p>

                    <p id="totalLines" class="container-p" value="0"> </p>

                </div>

            </div>`

            this.style=`.home-page-h1{
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                margin-left: 100px;
            }
            body{
                background-color: cadetblue;
            }
            ashil-editor{
                background-color: antiquewhite;
            }`


    }
    
    
}

customElements.define('ashil-editor',AshilEditor);



function callme(field) {

    var userInput = field.value;

    document.getElementById("totalChar").innerHTML="Total Char :"+userInput.length;


    var wordCount = userInput.match(/[\w\d\’\'-]+/gi).length


    var lineCount = userInput.split(/\r\n|\r|\n/).length 

    // var lineCount = userInput.split('.')
    //                 .filter((word) => {if (word !== ''  & word != ',') return word}).length;


    
    if( wordCount != undefined && wordCount> 0 ){
            console.log("Word Count : ",wordCount)
            document.getElementById("totalWords").innerHTML="Total Words :"+wordCount;

        }else{
            document.getElementById("totalWords").innerHTML="Total Words :"+0;
        }

    if( lineCount != undefined && lineCount> 0 ){
        console.log("Total Line : ",lineCount)
        document.getElementById("totalLines").innerHTML="Total Lines :"+lineCount;
    }else{
        document.getElementById("totalLines").innerHTML="Total Lines :"+0;

    }

    
    console.log(field.value)

}

