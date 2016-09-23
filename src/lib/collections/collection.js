import ArrayIterable from '../iteration/iterable-array';
import extend from '../utils/extend';
import buffer from '../utils/buffer';
import bufferTo from '../utils/buffer-to';
import isArrayLike from'../utils/is-array-like';

/**
* Initializes a new instance of the abstract Collection class.
*/
export default function Collection(value) {
    if (value !== null && value !== undefined) {
        value = isArrayLike(value) ? value : buffer(value);
    }

    ArrayIterable.call(this, value);
}

extend(Collection, ArrayIterable, {
    /**
    * Gets the number of elements contained in the Collection.
    * @returns {Number}
    */
    count: function () {
        return this.toArray().length;
    },

    /**
    * Copies the Collection to an existing one-dimensional Array, starting at the specified array index.
    * @param {Array} array The one-dimensional Array that is the destination of the elements copied from Collection.
    * @param {Number} arrayIndex The zero-based index in array at which copying begins.
    */
    copyTo: function (array, arrayIndex) {
        bufferTo(this.toArray(), array, arrayIndex);
    },

    toString: function () {
        return '[Collection]';
    }
});

