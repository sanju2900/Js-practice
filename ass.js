/*/ 
1. group Retail Companies
2. group 80's companies
3.companies that lasted for 10years or more
4map ages*20
5.sort ages both accending and decending order
6.get total years for all comapnies
*/
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const companies= [     
   {name: "Company One", category: "Finance", start: 1981, end: 2004},  
   {name: "Company Two", category: "Retail", start: 1992, end: 2008},     
   {name: "Company Three", category: "Auto", start: 1999, end: 2007},
   {name: "Company Four", category: "Retail", start: 1989, end: 2010},     
   {name: "Company Five", category: "Technology", start: 2009, end: 2014},     
   {name: "Company Six", category: "Finance", start: 1987, end: 2010},     
   {name: "Company Seven", category: "Auto", start: 1986, end: 1996},     
   {name: "Company Eight", category: "Technology", start: 2011, end: 2016},     
   {name: "Company Nine", category: "Retail", start: 1981, end: 1989}   ];

  

  //qu1
        const Retail_Conpanies = companies.filter(company=>company.category=="Retail"?1:0);

        console.log(Retail_Conpanies);

//que2
        const Conpanies_1980 = companies.filter(company=>company.start==1980?1:0);

 console.log(Conpanies_1980);

 //que3
 const Conpanies_10ye = companies.filter(company=>company.end-company.start>=10?1:0);

 console.log(Conpanies_10ye);


//que4

  const map_ages = ages.map(age=>age*20);
   console.log(map_ages);

//que5
//assending
console.log(ages.sort((a,b)=>a-b));
//decending
console.log(ages.sort((a,b)=>b-a));

//que6 6.get total years for all comapnies
var total=0;
const Conpanies_totalye = companies.filter(company=>company.end-company.start);
   total +=companies_totalye
 console.log(total);
  /**const total_years_companies = companies.map(company=>`${company.name} ${company.end-company.start}`);



  console.log(total_years_companies); */

