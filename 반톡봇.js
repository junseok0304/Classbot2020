const scriptName = "000반톡2021";
importClass(org.jsoup.Jsoup);
var Allsee="\u200b".repeat(500); 
var NN = "\n\n";
var blank = "\u200b".repeat(500);
var allsee = "\u200b".repeat(500);
let table = {
  "일": ["공부"],
  "월": ["사탐", "화작", "  ", "선기B", "중어2", "영작", "선기A"], 
  "화": ["영작", "사탐", "선탐B", "중어2", "확통", "선기B", "선기A"], 
  "수": ["선탐A", "자율", "영작", "확통", "계발", "계발"], 
  "목": ["선탐B", "화작", "선기A", "선탐A", "스생", "논술", "영작"], 
  "금": ["화작", "스생", "선탐B", "선탐A", "종교3", "확통", "선기B"],
  "토": ["공부 또는 세종심화 토요자습"]};

var admin = ["윤준석"];
var admin2 = ["담임선생님"];
var 개발자 = "\n\n개발자 : 윤준석";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
 
 var ROOOM = '3-4 반톡';
 
   if (['3-4 반톡', '3-4 반톡 테스트룸'].includes(room)){
     if(msg=="/리로드"){
    Api.reload("000반톡2021.js");
  }
     
   if(msg=="/도움말"){
     replier.reply("[3-4 반톡봇 도움말]"+allsee+"\n명령어입니다.\n\n/급식 20210205 - 2월 5일의 급식을 불러옵니다\n/도서 코스모스 - 고 코스모스 책 보유정보를 가져옵니다\n/수능 - 수능까지 디데이를 호출합니다\n/뜻 hi - [사전검색결과] 1.안녕 등을 불러옵니다"+개발자);
   }
   
   }
   
if (!['3-4 반톡', '3-4 반톡 테스트룸'].includes(room))
return;
   var cmf = "/";
var rmf = "[!] ";
var isA = admin.indexOf(sender) != -1;
var today = new Date().getFullYear() + "" + (new Date().getMonth() + 1) + "" + new Date().getDate();
   
   

  var cmd = msg.replace(cmf, "");
  if (cmd == msg) 
    cmd = "";
  create = (path, cont) => {
  if (FileStream.read(path) == null) {
    FileStream.write(path, cont);
    return "1";
  } else {
    return "";
  }
};
  create("/sdcard/학교봇/isOn.txt", "1");
  var isOn = FileStream.read("/sdcard/학교봇/isOn.txt");
  if (cmd == "봇켜기" && isA) {
    if (isOn == "0") {
      replier.reply(rmf + "봇을 켰습니다.");
      FileStream.write("/sdcard/학교봇/isOn.txt", "1");
    } else {
      replier.reply(rmf + "이미 켜진 상태입니다.");
    }
  }
  if (isOn == "0") 
    return;
  if (cmd == "봇끄기" && isA) {
    replier.reply(rmf + "봇이 종료됩니다.");
    FileStream.write("/sdcard/학교봇/isOn.txt", "0");
  } else if (cmd == "학번") {
    replier.reply(rmf + "당신의 학번은 304" + sender[3] + sender[4] + " 입니다.");
  } else if (cmd.indexOf("일정추가 ") == 0 && isA) {
    cmd = cmd.substr(5);
    for (var i = 0; i < cmd.split("::").length - 1; i++) {
      var date = cmd.split("::")[0];
      var content = cmd.split("::")[i + 1];
      FileStream.append("/sdcard/학교봇/일정/" + date + ".txt", "\n" + content);
    }
    replier.reply(rmf + "일정을 추가 했습니다.");
    //FileStream.append("/sdcard/학교봇/일정/"+date+".txt", "\n"+content);
  } else if (msg == "모닝!") {
    
    
  /*  replier.reply(rmf + "오늘은 " + new Date().getFullYear() + "년도 " + (new Date().getMonth() + 1) + "월 " + new Date().getDate() + "일 입니다.");
    java.lang.Thread.sleep(1999);
    */
    
    var iljung = FileStream.read("/sdcard/학교봇/일정/" + today + ".txt");
    if (iljung == null) 
      iljung = "추가된 일정이 없습니다...";
    var returns = [];
    if (iljung != "추가된 일정이 없습니다...") {
      iljung = iljung.split("\n");
      for (var j = 0; j < iljung.length - 1; j++) {
        returns.push((1 + j) + " : " + iljung[j + 1]);
      }
    }
    returns = returns.join("\n");
    
var now = new Date().getTime();
    var then = new Date("november 19, 2021").getTime();
    var gap = then - now;
    gap = Math.floor(gap / (1000 * 60 * 60 * 24));
    let su = ('#2022학년도수능 D-' + gap);
    Api.replyRoom(ROOOM,su+"\n오늘의 공지\n" + returns);
    FileStream.remove("/sdcard/학교봇/일정/" + today + ".txt");
    
    java.lang.Thread.sleep(1999);
   
    Api.replyRoom(ROOOM,rmf + "오늘의 시간표\n" + table["일월화수목금토"[new Date().getDay()]].join("\n"));
    java.lang.Thread.sleep(1999);
    
var data = "서울시 중구";
var weather = org.jsoup.Jsoup.connect("https://google.com/search?q="+data+"+날씨").get();
var 위치 = weather.select("#wob_loc").text();
var 시간 = weather.select("#wob_dts").text();
var 상태 = weather.select("#wob_dcp").text();
var 온도 = weather.select("#wob_tm").text();
var 강수확률 = weather.select("#wob_hm").text();
var 습도 = weather.select("#wob_pp").text();
var 풍속 = weather.select("#wob_ws").text();
Api.replyRoom(ROOOM,"["+위치+" 날씨]\n"+시간+"\n"+온도+"℃ "+상태+"\n강수확률: "+강수확률+"\n습도: "+습도+"  ,풍속: "+풍속);

java.lang.Thread.sleep(1200);

var nYear= "2021";
var nMonth = "01";
var nDate = "21";
var Key =  "597b39eb2d7a4d5aaa60a709f9a5ea72";

날짜 = new Date().toLocaleString().split("일")[0]+"일"; 
시간 = new java.text.SimpleDateFormat("yyyyMMdd").format(new Date());

let base = 'https://open.neis.go.kr/hub/mealServiceDietInfo?KEY='+Key+'&Type=json&plndex=1&pSize=100';
let s1 = '&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010266&MLSV_MYD=' + 시간;
let s2 = '&MLSV_FROM_YMD=' + 시간 + '&MLSV_TO_YMD=' +"20211231";
let gup = base + s1 + s2;

let res0 = Jsoup.connect(gup).get().text();
let res = JSON.stringify(JSON.parse(org.jsoup.Jsoup.connect(gup).ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text()), null, 4);
let res2 = JSON.parse(res0).mealServiceDietInfo[1].row[0].DDISH_NM;

 // replier.reply(res0);
  // replier.reply(res);
  //replier.reply(res2);
Api.replyRoom(ROOOM,"[급식봇] "+날짜+" 급식입니다.\n\n"+res2);
  
    
  } else if (cmd.indexOf("확성기::") == 0 && isA) {
    var nick = cmd.split("::")[1];
    var cont = cmd.split("::")[2];
    Api.replyRoom("3-4 반톡", "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐\n\n ⚡" + nick + "⚡📢: " + cont + "\n\n⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐");
  }

if(msg.startsWith("/도서 ")){ 
  try{ 
    var 학교와책 = msg.split(" "); 
    var 책목록 = org.jsoup.Jsoup.connect("https://saroro.develope.dev/book.php?school="+"고"+"&book="+학교와책[1]).get().text(); 
    var 책목록1 = JSON.parse(책목록).content.서울.bookList; 
    var result = 책목록1.map(책저장 => [ "책 제목 :"+책저장.bookName, "저자 :"+책저장.writer, "출판사 :"+책저장.pub, "책 번호 :"+책저장.code, "대출가능 여부 :"+책저장.state ].join("\n")).join("\n\n"); 
    replier.reply("ㅇㅇ고"+" 책정보입니다."+blank+"\n\n"+result); }
    catch(e){ 
      replier.reply("요청하신 결과를 찾을 수 없어요.");}
}

if (msg.startsWith("/뜻 ")) {
var url = Utils.getWebText("https://dic.daum.net/search.do?q=" + msg.substr(3) + "&dic=eng").trim();
var ans = url.split('<meta name="twitter:description" content="')[1].split(">")[0].replace(/"/g, "");
replier.reply("[사전검색결과]\n"+ans);
}

if (msg == "/수능") {
    var now = new Date().getTime();
    var then = new Date("november 19, 2021").getTime();
    var gap = then - now;
    gap = Math.floor(gap / (1000 * 60 * 60 * 24));
    replier.reply('2022학년도 수능\nD-' + gap);
    java.lang.Thread.sleep(1800);
       Api.reload("000반톡2021.js");
  }
  


//펑리닫기
}
