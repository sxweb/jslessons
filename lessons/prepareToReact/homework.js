//replace old code style to new features
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.map((employee)=>{
   if(employee.length > 0 && employee !== ''){
       return employee.toLowerCase();
   }
});
/*for (var i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].length != '') {
		employersNames.push(employers[i]);
	}
}
for (var i = 0; i < employersNames.length; i++) {
	employersNames[i] = employersNames[i].toLowerCase().trim();
}*/
const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const money = sponsors.cash.reduce((sum, value) =>{
    return sum + value;
});



function makeBusiness({owner, director = 'Victor', cash, emp}) {
    const sumSponsors = [...sponsors.rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner:  ${owner} , director: ${director}. Our budget: ${cash}. And our employers:
        ${emp}`);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with  ${sponsors.eu[0]}. It's a huge risk.`);
}
makeBusiness({
    owner: 'Sam',
    cash: money,
    emp: employersNames
});
/*
var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own) {
    own = own || 0;
    var everyCash = Array.prototype.slice.call(arguments);
    var total = own;
    for (var i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
    }
    return total;
}

var money = calcCash(null, sponsors.cash);

function makeBusiness(owner, director, cash, emp) {
    director = director || 'Victor';
    var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    emp);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);*/
