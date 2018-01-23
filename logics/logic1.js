/**
 * Created by JAY on 1/23/2018.
 */

var numbers = [10, 20, 30, 40];
var range = "0-10, 11-20, 21-30, 31-100";
var colors = "green, red, blue, yellow";

var rangeArr = range.split(',');
var colorsArr = colors.split(',');


var rangeFunc = (start, end) => Array.from({length: (end - start) + 1}, (v, k) => k + start);

var rangeArray = rangeArr.map(function (range) {
    console.log(range.split('-'));
    return rangeFunc(+range.split('-')[0], +range.split('-')[1])
});

numbers.map(function (num) {
    console.log(getIndex(num), 'sss', colorsArr[getIndex(num)].trim().charAt(0).toUpperCase());
    return  colorsArr[getIndex(num)].trim().charAt(0).toUpperCase();
});

function getIndex(num) {
    var i;
    rangeArray.map(function (arr, index) {
        if (arr.indexOf(num) >= 0) {
            i =  index;
        }
    });
    return i;
}
