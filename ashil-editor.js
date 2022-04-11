
class AshilEditor extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback() {
      
        this.innerHTML = `
            <div class="container-div">
                <div class="container">
                    <div class="row">
                        <h2>Text Area</h2>
                        <textarea onkeyup="callme(this);" name="" id="" cols="60" rows="10" ></textarea>
                    </div>


                    <div class="container">
                        <div class="p-div">
                            <p id="totalChar" class="container-p"></p>

                            <p id="totalWords" class="container-p"></p>

                            <p id="totalLines" class="container-p"></p>

                        </div>
                    </div>
                </div>

            </div>`



    }
    
    
}

customElements.define('ashil-editor',AshilEditor);



function callme(field) {

    var userInput = field.value;

    document.getElementById("totalChar").innerHTML="Total Char :"+userInput.length;


    var wordCount = userInput.split(' ')
                    .filter((word) => {if (word !== '' & word !=='.' & word != ',') return word}).length;

    var lineCount = userInput.split('.')
                    .filter((word) => {if (word !== '' & word !=='.' & word != ',') return word}).length;


    
    if( wordCount != undefined && wordCount > 0 ){
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

