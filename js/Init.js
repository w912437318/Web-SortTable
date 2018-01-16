function changeColor() {
    var oTableNode = document.getElementById("demoTable");
    var oTrNodes = oTableNode.rows;

    if (oTrNodes.length > 0) {
        for (var i = 1; i < oTrNodes.length; i++) {
            if (i % 2 == 1) {
                oTrNodes[i].className = "singularRow";
            } else {
                oTrNodes[i].className = "complexRow";
            }
        }
    }
}

/**
 * 排序表格
 * @param node
 */
function sortByAge(node) {
    var cellPosition = getCellPosition(node);
    var tableNode = node.parentNode.parentNode.parentNode.parentNode;
    var trNodes = tableNode.rows;
    var sortArray = changePosition(trNodes, cellPosition);

    for (var i = 0; i < trNodes.length; i++) {
        tableNode.appendChild(sortArray[i]);
    }

    changeColor();
}

/**
 * 获取点击的的字段
 * @param node 用户点击的节点
 * @returns 该节点在cells中的角标
 * @author Wei Wong
 */
function getCellPosition(node) {
    var trNodes = node.parentNode.parentNode.cells;
    for (var i = 0; i < trNodes.length; i++) {
        if (trNodes[i].isEqualNode(node.parentNode)) {
            return i;
        }
    }
}

/**
 * 进行行排序(不包括第一行)
 * @param trNodes 要排序的rows集合
 * @param cellPosition 需要排序的字段
 * @return tempArray 排序之后的数组，不含第一行
 */

function changePosition(trNodes, cellPosition) {
    var tempArray = [];
    for (var i = 1; i < trNodes.length; i++) {
        tempArray[i - 1] = trNodes[i];
    }

    for (var y = 0; y < tempArray.length - 1; y++) {
        for (var z = y + 1; z < tempArray.length; z++) {
            if (parseInt(tempArray[y].cells[cellPosition].innerHTML) > parseInt(tempArray[z].cells[cellPosition].innerHTML)) {
                var temp = tempArray[y];
                tempArray[y] = tempArray[z];
                tempArray[z] = temp;
            }
        }
    }

    return tempArray;
}