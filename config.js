var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的宝儿",  // 同上...
        "今天是你的生日",
        "14岁了哦",
        "也是我们在一起的261天",
        "我们一起走过的",
        "漫长相爱的时光",
        "今天要吃很多好吃的",
        "爹爹做给你",
        "再准备一个大蛋糕",
        "把我家的小可爱喂饱饱",
        "然后抱走",
        "YAMI~~",
        "保护你",
        "爹爹对你的爱",
        "是否能明白一二",
        "亲爱的, 互为唯一, 在一起",
        "永远Cc∞",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的宝儿": "./imgs/xiaokeai.png",
        "今天是你的生日": "./imgs/xiaokeai.png",
        "14岁了哦": "./imgs/xiaokeai.png",
        "也是我们在一起的261天": "./imgs/xiaokeai.png",
        "我们一起走过的": "./imgs/xiaokeai.png",
        "漫长相爱的时光": "./imgs/xiaokeai.png",
        "今天要吃很多好吃的": "./imgs/xiaokeai.png",
        "爹爹做给你": "./imgs/xiaokeai.png",
        "再准备一个大蛋糕": "./imgs/xiaokeai.png",
        "把我家的小可爱喂饱饱": "./imgs/xiaokeai.png",
        "然后抱走": "./imgs/xiaokeai.png",
        "YAMI~~": "./imgs/xiaokeai.png",
        "保护你": "./imgs/xiaokeai.png",
        "爹爹对你的爱": "./imgs/xiaokeai.png",
        "是否能明白一二": "./imgs/xiaokeai.png",
        "亲爱的, 互为唯一, 在一起": "./imgs/xiaokeai.png",
        "永远Cc∞": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "点燃蜡烛",
        wish_message: "祝你生日快乐",
        story: "给宝儿的话",
    }
};
