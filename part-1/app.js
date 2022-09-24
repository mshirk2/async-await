let url = 'http://numbersapi.com'
let num = 9

// 1.
async function question1(){
    let res = await axios.get(`${url}/${num}?json`);
    console.log(res.data);
};
question1();


// 2.
let nums = [2,9]
async function question2(){
    let res = await axios.get(`${url}/${nums}?json`);
    console.log(res.data);
};
question2();


// 3.
async function question3(){
    let res = await Promise.all(
        Array.from({ length: 4 }, () => {
            axios.get(`${url}/${num}?json`)
        })
    );
    res.forEach(fact => {
        console.log(res)
        $('#container').append(`<p>${fact.data.text}</p>`)
    });
}
question3();