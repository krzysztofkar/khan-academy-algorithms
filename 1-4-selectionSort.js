var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    var minIndex;
    for (var i = 0; i < array.length; i++){
        minIndex = indexOfMinimum(array, i);
        swap(array, minIndex, i);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array = [23,34,11,1, 32, 99, 54];
selectionSort(array);
Program.assertEqual(array, [1, 11, 23, 32, 34, 54, 99]);

var array = [4, 5, -1, -3];
selectionSort(array);
Program.assertEqual(array, [-3, -1, 4, 5]);




