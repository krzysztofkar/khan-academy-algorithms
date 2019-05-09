// Swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, p, r) {
    var q = p;
    for (var j = p; j < r; j++){
        
        if (array[j] <= array[r]){
            swap(array, j, q);
            q++;
        }
    }
    swap(array, r, q);
    return q;
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var q = partition(array, 0, array.length-1);
println("Array after partitioning: " + array);
Program.assertEqual(q, 4);
Program.assertEqual(array, [5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);

var array = [1, 99, 4, 2, 1, 6, 48];
var q = partition(array, 0, array.length-1);
println(q);
Program.assertEqual(q, 5);
Program.assertEqual(array, [1, 4, 2, 1, 6, 48, 99]);


