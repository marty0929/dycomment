## 公共方法
	
整理一些常用的方法：
- [promiseGet](#promiseget)
- [promisePost](#promisepost)
- [GetRequest](#getrequest)
- [Ajax](#ajax)
   - url: string,
   - type: get | post, 默认为post
   - param: {usrename:123},
   - datatype: json | xml,
   - async : true | false, (默认为true)
   - jsonp: callback,
   - jsonpCallback: 默认为你添加一个函数名，
   - success: (res) => {},
   - error: () => {}
- [decode/encode](#decodeencode)


---


### promiseGet

    promise的get方法，示例：

```
$dy.promiseGet('/api/:id').catch( error => {
  // dosomething          // => 这里就是catch到了error，如果处理error以及返还合适的值
}).then( value => {
  // dosomething          // 这里就是final
})
```
	   
	

### promisePost

    promise的post方法，示例：

```
$dy.promisePost('/api/:id',{name:'marty',age:'28'}).catch( error => {
  dosomething          // => 这里就是catch到了error，如果处理error以及返还合适的值
}).then( value => {
  dosomething          // 这里就是final
})
```

	

### GetRequest

    获取url中的参数值，示例：
   
```
value = $dy.GetRequest(key);
```

### Ajax

    普通ajax办法，包含get和post请求，可以使用jsonp。示例：

```
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
```
	   
- post/get请求

```
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
```
	   

- jsonp请求
	
```
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
```
	   
### decode/encode

    可以对字符串进行编码/解码。示例：

```
//编码
var encodestr = $dy.encode('Hello World');
//解码
var decodestr = $dy.decode(encodestr);

```

回调函数的调用。示例：

```
var encodestr = $dy.encode('Hello World',function(str){
  console.log(str);
  return str;
});

var decodestr = $dy.encode(encodestr,function(str){
  console.log(str)
  return str;
});

```
















