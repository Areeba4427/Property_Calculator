const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

});


const slider1 = document.getElementById("range1");
const dialogBox1 = document.getElementById("dialogBox1");
var textBox1 = document.getElementById("managementFee");

const slider2 = document.getElementById("range2");
const dialogBox2 = document.getElementById("dialogBox2");
var textBox2 = document.getElementById("leaseUpFee");

const slider3 = document.getElementById("range3");
const dialogBox3 = document.getElementById("dialogBox3");
var textBox3 = document.getElementById("annualMarkup");

const slider4 = document.getElementById("range4");
const dialogBox4 = document.getElementById("dialogBox4");
var textBox4 = document.getElementById("vacancyFee");

function setValue(slider , dialogBox){
  const
    newValue = Number( (parseInt(slider.value) - parseInt(slider.min)) * 100 / (parseInt(slider.max) - parseInt(slider.min)) )
    ,
    newPosition = 1 - (newValue * 0.4);

  dialogBox.innerHTML = `<span>${slider.value}</span>`;
  dialogBox.style.left = `calc(${newValue}% + (${newPosition}px))`;
};

setValue(slider1 , dialogBox1);
setValue(slider2 , dialogBox2);
setValue(slider3 , dialogBox3);
setValue(slider4 , dialogBox4);


slider1.addEventListener("input", function () {
    textBox1.value = slider1.value;
    dialogBox1.innerText = slider1.value;

    setValue(slider1 , dialogBox1);
  });
  
  slider2.addEventListener("input", function () {
    textBox2.value = slider2.value;
    dialogBox2.innerText = slider2.value;

    setValue(slider2 , dialogBox2);
  });
  

  slider3.addEventListener("input", function () {
    textBox3.value = slider3.value;
    dialogBox3.innerText = slider3.value;
    setValue(slider3 , dialogBox3);

  });
  

  slider4.addEventListener("input", function () {
    textBox4.value = slider4.value;
    dialogBox4.innerText = slider4.value;
    setValue(slider4 , dialogBox4);

  });



  textBox1.addEventListener("input", function () {
    slider1.value = textBox1.value;
    dialogBox1.innerText = textBox1.value;

    setValue(slider1 , dialogBox1);
  });
  
  textBox2.addEventListener("input", function () {
    slider2.value = textBox2.value;
    dialogBox2.innerText = textBox2.value;

    setValue(slider2 , dialogBox2);
  });
  

  textBox3.addEventListener("input", function () {
    slider3.value = textBox3.value;
    dialogBox3.innerText = textBox3.value;
    setValue(slider3 , dialogBox3);

  });
  

  textBox4.addEventListener("input", function () {
    slider4.value = textBox4.value;
    dialogBox4.innerText = textBox4.value;
    setValue(slider4 , dialogBox4);

  });



function calculate() {
    
  // Get input values  from 1 to 6.
    var monthlyRent = parseFloat(document.getElementById("monthlyRent").value);
    var annualRepairs = parseFloat(document.getElementById("annualRepairs").value);
    var managementFee = parseFloat(document.getElementById("managementFee").value) / 100;
    var leaseUpFee = parseFloat(document.getElementById("leaseUpFee").value) / 100;
    var annualMarkup = parseFloat(document.getElementById("annualMarkup").value) / 100;
    var vacancyFee = parseFloat(document.getElementById("vacancyFee").value) / 100;


    // Calculate results 7 - 14
    var annualRent = monthlyRent * 12;
    var result2 = annualRepairs;
    var result3 = annualRent * managementFee;
    var result4 = annualRent * leaseUpFee;
    var result5 = annualRent * annualMarkup;
    var result6 = annualRent * vacancyFee;


    var Annual_property_management_fees  = result2 + result3 + result4 + result5 + result6;

    //APMF per unit
    document.getElementById("apm_fees").textContent = formatter.format(Annual_property_management_fees.toFixed(2));

    //Cost as %  of income
    document.getElementById("percent_fee").textContent = ((Annual_property_management_fees / monthlyRent)).toFixed(2);
  
  }

if(window.innerWidth <= 975)
{

  document.getElementById("header").innerHTML = `Property Management <br> Fees Calculator`;
}