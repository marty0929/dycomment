## 公共方法
	
整理一些常用的方法：
- promiseGet
- promisePost
- GetRequest
- Ajax
   - url: string,
   - type: get | post, 默认为post
   - param: {usrename:123},
   - datatype: json | xml,
   - async : true | false, (默认为true)
   - jsonp: callback,
   - jsonpCallback: 默认为你添加一个函数名，
   - success: (res) => {},
   - error: () => {}

### promiseGet

'''
$dy.promiseGet('/api/:id').catch( error => {
  // dosomething          // => 这里就是catch到了error，如果处理error以及返还合适的值
}).then( value => {
  // dosomething          // 这里就是final
})
'''
	   
	

### promisePost

'''
$dy.promisePost('/api/:id',{name:'marty',age:'28'}).catch( error => {
  dosomething          // => 这里就是catch到了error，如果处理error以及返还合适的值
}).then( value => {
  dosomething          // 这里就是final
})
'''

	

### GetRequest
   
'value = $dy.GetRequest(key);'

### Ajax

'''
//定义接受的参数
data ={
    url: string,
    type: get | post, 默认为post
    param: {usrename:123},
    datatype: json | xml,
    async : true | false, (默认为true)
    jsonp: callback,
    jsonpCallback: 默认为你添加一个函数名，
    success: function(res),
    error: function()
}
'''
	   

#### post/get请求

'''
$dy.Ajax({
    url: './index.php',
    type: 'post',
    param: param,
    datatype: 'json',
    async: true,
    success: function(data){
        console.log(data)
    },
    error: function(){
        alert("err");
    }
)}
'''
	   

#### jsonp请求
	
'''
$dy.Aajax({
    url: 'http://api.douban.com/v2/movie/in_theaters',
    type: 'get',
    param: {"count":5},
    datatype: 'jsonp',
    async: true,
    jsonp: 'callback',
    jsonpCallback: 'myjsonp',
    success: function(res){
        console.log(res)
    },
    error: function(){
        //do something
    }
})
'''
	   














