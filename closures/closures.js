/*
    A basic example on closures
 */
function showName(firstName, lastName) {
    var nameInro = 'My name is : ';
    function makeFullName() {
        return nameInro + firstName + lastName;
    }

    return makeFullName();
}

var fullName = showName('jayakrishna ', 'pulipati');

var getCounterValue = function () {
    var counter = 0;

    return {
        setCounter: function (value) {
            counter = value;
        },
        getCounter: function () {
            // This inner function will return the UPDATED counter variable​
            // It will return the current value of counter, even after the changeTheCounter function changes it
            return counter;
        }
    }
};

var mjID = getCounterValue(); // At this juncture, the counter outer function has returned.​
mjID.getCounter(); // 0
mjID.setCounter(567); // Changes the outer function's variable​
mjID.getCounter(); // 567: It returns the updated counter variable 
