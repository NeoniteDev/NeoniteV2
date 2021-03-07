var parser = require('./index');

// xml to json
var xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?> \
<results options=\"123456789\" start=\"1\" end=\"6\" total=\"6\"> \
    <result> \
        <area>Area</area> \
        <score>27</score> \
        <description>DEscription</description> \
    </result> \
</results>";
console.log("input -> %s", xml)
var json = parser.toJson(xml);
console.log("to json -> %s", json);

var xml = parser.toXml(json);
console.log("back to xml -> %s", xml)
