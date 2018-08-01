 var $dy = {
    promiseGet:(url) => {
        return new Promise( (resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        resolve(this.responseText, this)
                    } else {
                        var resJson = { code: this.status, response: this.response }
                        reject(resJson, this)
                    }
                }
            }
            xhr.send()
        })

    },
    promisePost:(url, data) => {
        return new Promise( (resolve, reject) => {
            var xhr = new XMLHttpRequest()
            xhr.open("POST", url, true)
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        resolve(JSON.parse(this.responseText), this)
                    } else {
                        var resJson = { code: this.status, response: this.response }
                        reject(resJson, this)
                    }
                }
            }
            xhr.send(JSON.stringify(data))
        })
    },
    GetRequest:(value,u) => {
        var url = u?decodeURI(u.substr(u.indexOf('?'))):decodeURI(location.search);
        var object = {};
        if(url.indexOf("?") != -1){//url中存在问号，也就说有参数。
            var str = url.substr(1);  //得到?后面的字符串
            var strs = str.split("&");  //将得到的参数分隔成数组[name="marty",age="28"];
            for(var i = 0; i < strs.length; i ++){
                object[strs[i].split("=")[0]]=strs[i].split("=")[1]
            }
        }
        return object[value];
    },
    Ajax:(data) => {
        // 兼容IE浏览器
        var xhr = window.XMLHttpRequest?(new XMLHttpRequest()):(new ActiveXObject('Microsoft.XMLHTTP'));
        data.async = data.async || true;
        //把提交格式转化为小写字符
        var type = data.type.toLocaleLowerCase();

        //定义接受提交参数数组
        var params = [];

        //获取data.param的所有key值
        var key = Object.keys(data.param);
        for (var i = 0; i < key.length; i++) {
            //把每一个参数添加到数组中
             params.push(key[i] + '=' + data.param[key[i]]);
        }
        //把数组拼接成表单提交格式字符串
        params = params.join('&');

        //判断是否是jsonp
        if(data.datatype == 'jsonp'){
            var jsonp = data.jsonp || 'callback',
                jsonpCallback = data.jsonpCallback || 'myjsonp'+ new Date().getTime(),
                src = data.url+"?"+params+"&"+jsonp+"="+jsonpCallback,
                // src = params ? (data.url+"&"+params) : data.url,
                script = document.createElement('script');
            window[jsonpCallback] = function(res){
                //console.log(res);
                data.success(res)
            }
            script.src = src;
            document.body.appendChild(script);
        }else{
            //判断请求方法
            if (type == 'get') {
                var url = data.url +"?"+params;
                xhr.open(type, url, data.async);
                xhr.send();
            } else {
                xhr.open(type, data.url, data.async);
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                xhr.send(params);
            }
            //链接服务器成功执行函数
            xhr.onreadystatechange = function(){
                if(this.readyState == 4){
                    if(this.status == 200){
                        if(data.datatype == 'json' || data.datatype == 'html' || data.datatype == 'text'){
                            var res = this.responseText;
                        }else if(data.datatype == 'xml'){
                            var res = this.responseXML;
                        }
                        data.success(res);
                    }else{
                        data.error();
                    }
                }
            }
        }
    },
    decode:(a,b) => {
        let str = window.atob(a);  //解码
        return b?b(str):str;
    },
    encode:(a,b) => {
        let str = window.btoa(a);  //编码
        return b?b(str):str;
    }

}
