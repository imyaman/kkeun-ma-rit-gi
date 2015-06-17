var url='https://imyaman.cloudant.com/d001/_all_docs';

$.getJSON(url, function(data){
  /*
  var itmes=[];
  $.each(data, function(key, val){
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
  */
  $.each(data.rows, function(key, val){
    console.log(key);
    console.log(val);
  });
});

/* when i call all_docs
{"total_rows":1,"offset":0,"rows":[
{"id":"f67c8bbc01c303e9486cc4d3a3a20c45","key":"f67c8bbc01c303e9486cc4d3a3a20c45","value":{"rev":"1-9305a0280eb712c221f476087c48890a"}}
]}
*/
