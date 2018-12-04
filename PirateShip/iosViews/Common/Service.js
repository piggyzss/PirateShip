/**
 * Created by zss on 18/12/02.
 */
/*!
 *
 * 服务URL
 * 基于豆瓣Open API的图书、音乐、电影服务
 * 如果https://api.douban.com/v2/都保持不变，则可以将其设置为BaseURL
 */
module.exports = {
    //图书搜索
    bookSearch: 'https://api.douban.com/v2/book/search',
    //已读图书
    bookRead: 'https://api.douban.com/v2/book/user/82690325/collections?status=read',
};