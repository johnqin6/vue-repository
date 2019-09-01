//推荐页面轮播图的api
https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1566353715246&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1

//推荐页面推荐歌单的api
https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?picmid=1&rnd=0.15984148806729825&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&categoryId=10000000&sortId=5&sin=0&ein=19

//歌手api
https://u.y.qq.com/cgi-bin/musicu.fcg?-=getUCGI21510355056899444&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data={"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}

//歌手详情api
 https://u.y.qq.com/cgi-bin/musicu.fcg?-=getUCGI7115890979239698&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data={"comm":{"ct":24,"cv":0},"singerAlbum":{"method":"get_singer_album","param":{"singermid":"001fNHEf1SFEFN","order":"time","begin":0,"num":5,"exstatus":1},"module":"music.web_singer_info_svr"}}

//songvkey的api,用于拼接歌曲的url
https://u.y.qq.com/cgi-bin/musicu.fcg?-=getplaysongvkey505656775966828&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data={"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"5655257600","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"5655257600","songmid":["004dFFPd4JNv8q"],"songtype":[0],"uin":"1120996904","loginflag":1,"platform":"20"}},"comm":{"uin":"1120996904","format":"json","ct":24,"cv":0}}

//歌词api
https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?-=MusicJsonCallback_lrc&pcachetime=1566355026039&songmid=004dFFPd4JNv8q&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0

//歌曲评论api
 https://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg?g_tk=5381&uin=1120996904&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&cid=205360772&reqtype=1&cmd=8&needmusiccrit=0&pagesize=3&lasthotcommentid=0&qq=0&msg_comment_id=&pagenum=0&biztype=1&topid=104913384&ct=888&_=1566355496436

//排行榜api
https://u.y.qq.com/cgi-bin/musicu.fcg?-=getUCGI3271108173239481&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data={"detail":{"module":"musicToplist.ToplistInfoServer","method":"GetDetail","param":{"topId":4,"offset":0,"num":20,"period":"2019-08-21"}},"comm":{"ct":24,"cv":0}}

//热门搜索词api
https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0

//搜索关键词api,key是关键词
https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?is_xml=0&key=${key}&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0

