function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function calcSpan(data, field) {
    // data 为已经处理好的数据，不存在嵌套格式
    // field 为对应字段，即需要合并的列对应的字段
    // 返回结果为数组：[4,0.0.0]
    let rowCols = [];
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            rowCols.push(1);
            this.index = 0;
        } else {
            if (data[i][field] === data[i - 1][field]) {
                rowCols[this.index] += 1;
                rowCols.push(0);
            } else {
                rowCols.push(1);
                this.index = i;
            }
        }
    }
    return rowCols;
}


function SpanHandler({rowIndex, colIndex}) {
    // 根据需要合并的列计算，合并数组对应的合并数（rowspan)
    if (colIndex === 0) {
        const row = this.calcSpan(this.data, 'type')[rowIndex];
        const col = row > 0 ? 1 : 0;
        return {
            rowspan:row,
            colspan:col
        }
    }else if (colIndex === 1){
        const row = this.calcSpan(this.data,'ip')[rowIndex];
        const col = row >0 ?1:0;
        return {
            rowspan:row,
            colspan:col
        }
    }
}