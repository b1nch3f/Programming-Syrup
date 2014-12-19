var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = "http://www.codechef.com/problems/extcontest/";
var baseURL = "http://www.codechef.com/problems/";
//#primary-content > div > div > div.table-questions > table > tbody > tr:nth-child(2) > td:nth-child(1) > a > b
////*[@id="primary-content"]/div/div/div[2]/table/tbody/tr[2]/td[1]/a/b

request({"uri":url}, function(err, resp, body){
  var $ = cheerio.load(body);
          
  var strContent = [];
  $('#primary-content').find('div').find('div').children('div.table-questions').find('table').find('tbody').children('tr.problemrow').each(function(index,item){
    var tds = $(item).find('td');
    var problemCode = $(tds.eq(1)).find('a').text();
    console.log(baseURL+problemCode);
  });
}); 