function calculateDifference(startYear, startMonth, startDay) {
  const start = new Date(startYear, startMonth - 1, startDay);
  const end = new Date(); // Current date (today)

  // Calculate the difference in milliseconds
  let difference = end - start;
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculate the difference in days
  const daysDifference = Math.floor(difference / oneDay);

  // Calculate years, months, and remaining days
  const years = Math.floor(daysDifference / 365.25);
  difference -= years * 365.25 * oneDay;

  const months = Math.floor(difference / (365.25 / 12) / oneDay);
  difference -= months * (365.25 / 12) * oneDay;

  const days = Math.floor(difference / oneDay);

  return { years, months, days };
}

// function isLeapYear(year) {
//   // Check if the year is divisible by 4
//   // If divisible by 100 and not divisible by 400, it's not a leap year
//   // If divisible by 100 and 400, it's a leap year
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// function has31Days(month) {
//   return [1, 3, 5, 7, 8, 10, 12].includes(month); //true if month has 31days
// }

// function has30Days(month) {
//   return [2, 4, 6, 9, 11].includes(month); //true if month has 31days
// }

// function displayDifference() {
//   var startDay = $(".day-input input").val();
//   var startMonth = $(".month-input input").val();
//   var startYear = $(".year-input input").val();

//   const check_leap_year = isLeapYear(startYear);

//   const monthWith30 = has30Days(startMonth);

//   const monthWith31 = has31Days(startMonth);

//   const currentDate = new Date();

//   if (startYear < currentDate.getFullYear()) {
//     if (check_leap_year === true) {
//       if (startMonth === 2) {
//         if (startDay <= 29) {
//         }
//       }
//     } else if (startMonth === 2) {
//     }
//   } else {
//     $(".placeholder-year").text("Must be in the Past");
//   }
// }

function displayDifference() {
  var startDay = $(".day-input input").val();
  var startMonth = $(".month-input input").val();
  var startYear = $(".year-input input").val();

  const currentDate = new Date();

  if (startDay == "" || startMonth == "" || startYear == "") {
    // e.preventDefault();
    if (startDay == "") {
      $(".placeholder-day").text("this field is required");
      $(".placeholder-day").css("color", "hsl(0, 100%, 67%)");
      $(".day-input label").css("color", "hsl(0, 100%, 67%)");
    }
    if (startMonth == "") {
      $(".placeholder-month").text("this field is required");
      $(".placeholder-month").css("color", "hsl(0, 100%, 67%)");
      $(".month-input label").css("color", "hsl(0, 100%, 67%)");
    }
    if (startYear == "") {
      $(".placeholder-year").text("this field is required");
      $(".placeholder-year").css("color", "hsl(0, 100%, 67%)");
      $(".year-input label").css("color", "hsl(0, 100%, 67%)");
    }
  } else if (startYear > currentDate.getFullYear()) {
    // e.preventDefault();
    $(".placeholder-year").text("Must be in the past");
    $(".placeholder-year").css("color", "hsl(0, 100%, 67%)");
    $(".year-input label").css("color", "hsl(0, 100%, 67%)");
    startYear = "";
  } else if (startMonth > 12) {
    // e.preventDefault();
    $(".placeholder-month").text("Must be a valid Month");
    $(".placeholder-month").css("color", "hsl(0, 100%, 67%)");
    $(".month-input label").css("color", "hsl(0, 100%, 67%)");
    startMonth = "";
  } else if (startDay > 31) {
    // e.preventDefault();
    $(".placeholder-day").text("must be a valid Day");
    $(".placeholder-day").css("color", "hsl(0, 100%, 67%)");
    $(".day-input label").css("color", "hsl(0, 100%, 67%)");
    startDay = "";
  } else {
    const difference = calculateDifference(startYear, startMonth, startDay);

    $(".year").text(difference.years);
    $(".month").text(difference.months);
    $(".day").text(difference.days);

    $("button").click(displayDifference);
  }
}

// const difference = calculateDifference(startYear, startMonth, startDay);

// $(".year").text(difference.years);
// $(".month").text(difference.months);
// $(".day").text(difference.days);

// $("button").click(displayDifference);

$("button").click(displayDifference);
