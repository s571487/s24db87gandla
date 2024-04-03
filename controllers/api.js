exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"costumes", "verbs":["GET","PUT", "DELETE"]}');
    res.write(']');
    res.send();
};