import _ from 'lodash'

export default (list, cb) => {
  quickSort(list, 0, _.size(list), cb)
}

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right, cb) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            cb(_.clone(items), items[i], j + i)
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(items, left, right, cb) {
    var index;

    if (items.length > 1) {
        index = partition(items, left, right, cb);

        if (left < index - 1) {
            quickSort(items, left, index - 1, cb);
        }

        if (index < right) {
            quickSort(items, index, right, cb);
        }

    }

  cb(_.clone(items))
  console.log(items)
  return items;
}

