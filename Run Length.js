Run Length

function RunLength(text) {
    var result = '';
    if (text.length > 0) {
        var count = 1;
        var value = text[0];
        for (var i = 1; i < text.length; ++i) {
			var entry = text[ i ];
            if (entry == value) {
                count += 1;
            } else {
              	result += count + '' + value;
              	count = 1;
				value = entry;
            }
        }
      	result += count + '' + entry;
    }
    return result;
}

// Usage example:

var text = 'AAAAAABBBBBBACCCCCCCCCCCCCDDDAAAAAAAAAAAAA';
var compressedText = compressText(text);

console.log(compressedText);  // 6A6B1A13C3D13A
---------------------------------------------------------------------
  function compressText(text) {
    var result = '';
    if (text.length > 0) {
        var count = 1;
        var value = text[ 0 ];
        for (var i = 1; i < text.length; ++i) {
			var entry = text[ i ];
            if (entry == value) {
                count += 1;
            } else {
              	result += count + ':' + value + ',';
              	count = 1;
				value = entry;
            }
        }
      	result += count + ':' + entry;
    }
    return result;
}


// Usage example:

var text = 'AAAAAA55555ACCCCCCCCCCCCC111AAAAAAAAAAAAA';
var compressedText = compressText(text);

console.log(compressedText);  // 6:A,5:5,1:A,13:C,3:1,13:A
-----------------------------------------------------------------
function compressArray(array) {
    var result = [ ];
    if (array.length > 0) {
        var count = 1;
        var value = array[ 0 ];
        for (var i = 1; i < array.length; ++i) {
			var entry = array[ i ];
            if (entry == value) {
                count += 1;
            } else {
                result.push(count);
                result.push(value);
              	count = 1;
				value = entry;
            }
        }
        result.push(count);
        result.push(value);
    }
    return result;
}


// Usage example:

var array = [
    1, 1, 1, 1, 1, 1,                       //  6x 1
    6, 6, 6, 6, 6,                          //  5x 6
    1,                                      //  1x 1
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,  // 13x 3 
    8, 8, 8,                                //  3x 8
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1   // 13x 1
];
var compressedArray  = compressArray(array);

console.log(compressedArray );  // 6,1,5,6,1,1,14,3,3,8,13,1