const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "China-Y",
        artist: '徐梦圆',
        url: 'https://www.ytmp3.cn/down/59298.mp3down/39868.mp3',
        cover: 'https://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: 'China-X',
        artist: '徐梦圆',
        url: 'https://www.ytmp3.cn/down/49003.mp3',
        cover: 'https://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
    ]
});