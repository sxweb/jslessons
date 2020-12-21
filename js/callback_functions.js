function first(){
    setTimeout(function(){
        console.log('some first message');
    }, 500);
}

function second(){
    console.log('some second message');
}

first();
second();

function learnPrograming(lang, callback){
    console.log(`i learn ${lang}`);
    callback();
}

learnPrograming('JS', function(){
    console.log('i learnt this lesson');
});

function done(){
    console.log('i learnt this lesson');
}

learnPrograming('js', done);

const someString = 'message for callback function',
        someSecondString = 'second message for callback function';

function writeMessages(message, secondMessage){
    console.log(message);
    secondMessage();
}

writeMessages(someString, function(){
    console.log(someSecondString);
});

function writeSecondMessage(){
    console.log(someSecondString);
}

writeMessages(someString, writeSecondMessage);