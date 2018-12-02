const express = require('express');
var pool = require('../pool.js');
var router = express.Router();
router.get('/banner',(req,res)=>{
    var imgList=[
        {id:1,url:'http://127.0.0.1:5050/img/ba1.jpg'},
        {id:2,url:'http://127.0.0.1:5050/img/ba2.jpg'},
        {id:3,url:'http://127.0.0.1:5050/img/ba3.jpg'},
        {id:4,url:'http://127.0.0.1:5050/img/ba4.jpg'}
    ]
    res.send(imgList)
})
router.get('/first',(req,res)=>{
    var imgList=[
        {
            id:1,f_url:'http://127.0.0.1:5050/img/head1-1.jpg',
            tit:'手机馆',desc:'精挑细选正品货iphone',s_url1:'http://127.0.0.1:5050/img/f8.png',
            s_url2:'http://127.0.0.1:5050/img/f9.png',
            t_tit1:'买遍全球',
            t_p1:'精挑细选正品货',
            t_url1:'http://127.0.0.1:5050/img/f3.png',
            t_tit2:'爱运动',
            t_p2:'天生爱跑',
            t_url2:'http://127.0.0.1:5050/img/f4.png',
            t_tit3:'数码控',
            t_p3:'都是你喜欢的',
            t_url3:'http://127.0.0.1:5050/img/f5.png',
            t_tit4:'摄影者',
            t_p4:'单反聚集地',
            t_url4:'http://127.0.0.1:5050/img/f6.png'
        },
        {
            id:2,f_url:'http://127.0.0.1:5050/img/head1-2.jpg',
            tit:'新品达',desc:'多种新品任你挑',s_url1:'http://127.0.0.1:5050/img/f6.png',
            s_url2:'http://127.0.0.1:5050/img/f11.png',
            t_tit1:'买遍全球',
            t_p1:'精挑细选正品货',
            t_url1:'http://127.0.0.1:5050/img/f7.png',
            t_tit2:'爱运动',
            t_p2:'天生爱跑',
            t_url2:'http://127.0.0.1:5050/img/f8.png',
            t_tit3:'数码控',
            t_p3:'都是你喜欢的',
            t_url3:'http://127.0.0.1:5050/img/f9.png',
            t_tit4:'摄影者',
            t_p4:'单反聚集地',
            t_url4:'http://127.0.0.1:5050/img/f10.png'
        },
        {
            id:3,f_url:'http://127.0.0.1:5050/img/head1-3.jpg',
            tit:'限时购',desc:'精品好礼限时抢购',s_url1:'http://127.0.0.1:5050/img/f3.png',
            s_url2:'http://127.0.0.1:5050/img/f11.png',
            t_tit1:'买遍全球',
            t_p1:'精挑细选正品货',
            t_url1:'http://127.0.0.1:5050/img/f8.png',
            t_tit2:'爱运动',
            t_p2:'天生爱跑',
            t_url2:'http://127.0.0.1:5050/img/f7.png',
            t_tit3:'数码控',
            t_p3:'都是你喜欢的',
            t_url3:'http://127.0.0.1:5050/img/f5.png',
            t_tit4:'摄影者',
            t_p4:'单反聚集地',
            t_url4:'http://127.0.0.1:5050/img/f6.png'
        }
    ]
    res.send(imgList)
})
router.get('/sort',(req,res)=>{
    var imgList=[
        {id:1,imgurl:'http://127.0.0.1:5050/img/class17.jpg',tit:'时尚女装'},
		{id:2,imgurl:'http://127.0.0.1:5050/img/class16.jpg',tit:'时尚男装'},
        {id:3,imgurl:'http://127.0.0.1:5050/img/class2.jpg',tit:'休闲运动'},
        {id:4,imgurl:'http://127.0.0.1:5050/img/class3.jpg',tit:'精品手表'},
        {id:5,imgurl:'http://127.0.0.1:5050/img/class4.jpg',tit:'母婴专区'},
        {id:6,imgurl:'http://127.0.0.1:5050/img/class5.jpg',tit:'智能电视'},
        {id:7,imgurl:'http://127.0.0.1:5050/img/class6.jpg',tit:'休闲零食'},
        {id:8,imgurl:'http://127.0.0.1:5050/img/class15.jpg',tit:'电脑背包'},
        {id:9,imgurl:'http://127.0.0.1:5050/img/class8.jpg',tit:'冲锋衣'},
        {id:10,imgurl:'http://127.0.0.1:5050/img/class9.jpg',tit:'家用电器'},
        {id:11,imgurl:'http://127.0.0.1:5050/img/class10.jpg',tit:'五谷杂粮'},
        {id:12,imgurl:'http://127.0.0.1:5050/img/class11.jpg',tit:'日常用品'},
        {id:13,imgurl:'http://127.0.0.1:5050/img/class12.jpg',tit:'移动电源'},
        {id:14,imgurl:'http://127.0.0.1:5050/img/class13.jpg',tit:'个人护理'},
        {id:15,imgurl:'http://127.0.0.1:5050/img/class14.jpg',tit:'生活家居'},
        {id:16,imgurl:'http://127.0.0.1:5050/img/class7.jpg',tit:'平板电脑'}
    ]
    res.send(imgList)
})
router.post('/goods',(req,res)=>{
    var obj=req.body;
    var sql='SELECT id,gdesc,gurl,gprice,goldprice,gpresent FROM store_goods WHERE gtype=? LIMIT ?,?';
    pool.query(sql,[obj.id,parseInt((obj.pno-1)*obj.pageSize),parseInt(obj.pageSize)],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            var re={};
            var sql='SELECT * FROM store_goods WHERE gtype=?';
            pool.query(sql,[obj.id],(err,resu)=>{
                if(err) throw err;
                if(resu.length>0){
                    re.count=Math.ceil(resu.length/obj.pageSize);
                    re.list=result;
                    res.send(re)
                }
            })
        }   
    })
})
router.get('/shopcart',(req,res)=>{
    var sql='SELECT * FROM store_shopcart';
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result)
        }
    })
})
router.get('/comments',(req,res)=>{
    var obj=req.query;
    var sql='SELECT * FROM store_comment limit ?,?';
    pool.query(sql,[parseInt((obj.pno-1)*obj.pageSize),parseInt(obj.pageSize)],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result)
        }
    })
})
module.exports=router