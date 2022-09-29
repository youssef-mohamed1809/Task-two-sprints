"use strict";
//function getHoroscope() {}

const getHoroscope = function () {
  //Get Values day, month, year
  let day = Number(document.getElementById("day").value);
  let month = Number(document.getElementById("month").value);
  let year = Number(document.getElementById("year").value);

  //Validate day, month, year,
  let isValidDate = validateDate(day, month, year);
  if (isValidDate) {
    //Get correct Horoscope
    let horoscopeName = getHoroscopeName(day, month);
    displayHoroscopeName(horoscopeName);
    //Display correct horoscope
  } else {
    //Display error if exists
    displayError();
  }
};

const validateDate = function (day, month, year) {
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
  if (
    day < 1 ||
    month < 1 ||
    year < 1900 ||
    month > 12 ||
    year > 2100 ||
    day > 31
  )
    return false;
  if (day > 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
    return false;
  }
  if (day > 28 && month == 2 && year % 4 != 0) {
    return false;
  }
  if (day > 29 && month == 2 && year % 4 == 0) {
    return false;
  }
  return true;
};

const displayError = function () {
  document.getElementById("result").innerHTML =
    "<strong style='color:red'>Please enter a valid date</strong>";
};

const displayHoroscopeName = function (name) {
  document.getElementById("result").innerHTML =
    "<strong style='color:green'>" + name + "</strong>";
};

const getHoroscopeName = function (day, month) {
  switch(month){
    case 1:
      if(day <= 19){
        return "Capricorn";
      }else{
        return "Aquarius";
      }

    case 2:
      if(day <= 18){
        return "Aquarius";
      }else{
        return "Pisces";
      }

    case 3:
      if(day <= 20){
        return "Pisces";
      }else{
        return "Aries";
      }

    case 4:
      if(day <= 19){
        return "Aries";
      }else{
        return "Taurus";
      }
      
    case 5:
      if(day <= 20){
        return "Taurus";
      }else{
        return "Gemini";
      }

    case 6:
      if(day <= 21){
        return "Gemini";
      }else{
        return "Canc22";
      }

    case 7:
      if(day <= 22){
        return "Cancer";
      }else{
        return "Leo";
      }

    case 8:
      if(day <= 23){
        return "Leo";
      }else{
        return "Virgo";
      }

    case 9:
      if(day <= 22){
        return "Virgo";
      }else{
        return "Libra";
      }

    case 10:
      if(day <= 23){
        return "Libra";
      }else{
        return "Scorpio";
      }

    case 11:
      if(day <= 21){
        return "Scorpio";
      }else{
        return "Sagittarius";
      }

    case 12:
      if(day <= 21){
        return "Sagittarius";
      }else{
        return "Capricorn";
      }
    }

};

const calculateTax = function (amount) {
  return amount * 0.14;
};
//const getHoroscope = () => {};
