function createSelectElement (id, valueArray) {
    var html = '<select id="' + id + '">';
    for(var i = 0; i < valueArray.length; i++) {
        html += '<option value="' + valueArray[i] + '">' + valueArray[i] + '</option>';
    }
    return html + '</select>';
}

function getRandom() {
    Math.ceil((Math.random() * 1000)) % 11;
}