const Box = () => {
    return (/*html*/`
        <div class="update-box text">
            <div class="dsa-update">Total DSA Questions solved : 
                <span id="problem-count"></span>
            </div>
            <div class="dsa-update">DSA Questions solved this week : 
                <span id="problem-count-weekly"></span>/24
                <div id="Progress_Status"> 
                    <div id="myprogressBar"></div> 
                </div> 
            </div>
            <div class="dsa-update">
                Questions left in Final450 : <span id="questions-left"></span> | Target date of completion : 2024-09-30
            </div>
            <div class="dsa-update">
                Solved last week : <span id="problem-count-last-week"></span> | Expected date of completion : <span id="expected-date"></span> 
            </div>
        </div>
    `
    )
}
export default Box