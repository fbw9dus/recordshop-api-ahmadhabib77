const {env} = process

const devConfig ={
    jwt_key: "ohpkß05zzj5766571kk7?&/",
    db: "mongodb://localhost:27017/record-shop"
}

const prodConfig ={
    jwt_key: "ohpkß05zzjökjkjdf?&/",
    db: "mongodb+srv://dbuser:<password>@cluster0-wkita.mongodb.net/test?retrywrites=trie&w=majority"
}


module.exports = env.NODE_ENV === "prodction" ? prodConfig : devConfig