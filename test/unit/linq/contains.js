import mx from '../../multiplex';
import * as mocks from './_mocks';
import {
    qmodule,
    qtest
} from '../../qunit';

qmodule('linq-contains');


qtest('basic "contains" test', function (assert) {
    assert.ok(mx(mocks.array).contains(1), 'Test an array contains a number');
    assert.ok(!mx(mocks.array).contains(0), 'Test an array does not containy a number');
});


qtest('collections "contains" method tests', function (assert) {
    assert.ok(mx(mocks.collection).contains(1), 'Test "contains" in a Collection');
    assert.ok(!mx(mocks.collection).contains(0), 'Test does not contain in a Collection');

    assert.ok(mx(mocks.list).contains(1), 'Test "contains" in a List');
    assert.ok(!mx(mocks.list).contains(0), 'Test does not contain in a List');

    assert.ok(mx(mocks.readOnlyCollection).contains(1), 'Test "contains" in a ReadOnlyCollection');
    assert.ok(!mx(mocks.readOnlyCollection).contains(0), 'Test does not contain in a ReadOnlyCollection');

    assert.ok(mx(mocks.linkedList).contains(1), 'Test "contains" in a LinkedList');
    assert.ok(!mx(mocks.linkedList).contains(0), 'Test does not contain in a LinkedList');

    assert.ok(mx(mocks.hashSet).contains(1), 'Test "contains" in a HashSet');
    assert.ok(!mx(mocks.hashSet).contains(0), 'Test does not contain in a HashSet');

    assert.ok(mx(mocks.stack).contains(1), 'Test "contains" in a Stack');
    assert.ok(!mx(mocks.stack).contains(0), 'Test does not contain in a Stack');

    assert.ok(mx(mocks.queue).contains(1), 'Test "contains" in a Queue');
    assert.ok(!mx(mocks.queue).contains(0), 'Test does not contain in a Queue');

    assert.ok(mx(mocks.set).contains(1), 'Test "contains" in a Set');
    assert.ok(!mx(mocks.set).contains(0), 'Test does not contain in a Set');

    assert.ok(mx(mocks.map).contains([1, 1], {
        hash: function (t) {
            return t[0];
        },
        equals: function (a, b) {
            return a[0] === b[0];
        }
    }), 'Test "contains" in a Map');

    assert.ok(!mx(mocks.map).contains([0, 0], {
        hash: function (t) {
            return t[0];
        },
        equals: function (a, b) {
            return a[0] === b[0];
        }
    }), 'Test does not contain in a Map');


    assert.ok(mx(mocks.dictionary).contains({ key: 1, value: 1 }, {
        hash: function (t) {
            return t.key;
        },
        equals: function (a, b) {
            return a.key === b.key;
        }
    }), 'Test "contains" in a Dictionary');

    assert.ok(!mx(mocks.map).contains({ key: 0, value: 0 }, {
        hash: function (t) {
            return t.key;
        },
        equals: function (a, b) {
            return a.key === b.key;
        }
    }), 'Test does not contain in a Dictionary');


    assert.ok(mx(mocks.lookup).contains(1), 'Test "contains" in a Lookup');
    assert.ok(!mx(mocks.map).contains(0), 'Test does not contain in a Lookup');


    assert.ok(mx(mocks.sortedList).contains({ key: 1, value: 1 }, {
        hash: function (t) {
            return t.key;
        },
        equals: function (a, b) {
            return a.key === b.key;
        }
    }), 'Test "contains" in a SortedList');

    assert.ok(!mx(mocks.map).contains({ key: 0, value: 0 }, {
        hash: function (t) {
            return t.key;
        },
        equals: function (a, b) {
            return a.key === b.key;
        }
    }), 'Test does not contain in a SortedList');
});