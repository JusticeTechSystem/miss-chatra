// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/qW8pFtF4qy5SvQCJOT0OeM0cw4aXoRQNJjK4FLksS1L0NSkvSDDnyfhKlPGz5Es0KLvGABs+ZI/Qz7QqIxIXNPfYjQyx/yrb7SQiMo0Z/RB1dwMLBlS0NNHLnzBh1zH+fw7uUBXpK0+Vn4tt7TVhKXdv4A2cptOQpyACJVNz/nfTcB/L6/XO8a4WejzpjG7UUkN88RrakZdv/Ncd+U8x8IulBX+kngwzDWkW8Eze5jum0wBJk6OH3RYx11ei1lmXcLD08gPQwJWLLwNku5PCbZVjulz9hbLHyiZ5gQADrUCziGf4TjF5H85r3TtF0iTu0lqtqaddZ4pjUFWU/HnrsRSz4+WgiWISfQwYM2LLiALbeeCN6o7m/dWq7GrRwqZkGdxQe4ttQQYKuI4WEOb8aiwmuK5mbYmlGWs7K6BDYE6exWR3/RLFd00Sh66gfGWinEerYOdyfCXdgz8hXE4n0nB7PzUGG/3XX7atuUjsELlPwUBkh28YxhTCxXsjBkLerVW6Luf9+FJ7PF3wbArIF254m0boN6gJ5bQdqS4AYLQ+/YF0XT1T7DMGJldDHza3Em/MSNKl6VvbKPr6xBV9v4yQAWxpQ+sTknkRMx5/Gw7tXCd0vQBGqBelALk/9y64RmSYPQqw4ixiPbjwUoOqNmuycQl+gr9qeMcP6rAlP0HBFihnc6E51F2c0xe9WQ1B9trvDTYFGwyQ5VxHl7RgfMejZpdufwMQw96f7QRV3T7+gCkWBgKj+TiRKLnaqO0Rj13KCL81e+41f3fv3xdsjK+xwCyVCtQZUxaSdCJcvZgmJqPJiQ276Jxj/A5zZeBGd/YLz2uG3bpDNdMEKeVJpQr41hrBwI+QxuDN/u+rgf7cZeLvkoKcnAZ1bySOxK8DAlUppgnuQ/iuJXfFnDnNLIx5i5pNps3sbgEygFfuq0xAiDz42dYzuyjcdWTWNwSwktUBlQn1u2QgNrMtIFwKGBz9LKjElQO6lV5WeSO/0JU9FTjREJMCVkUuhhL5k7QmOWxWHh8EV3uJP7L7otTdx4bqFLZb8quF7qX8JPaZVGrIJYnsicndoWRTat3Ox4/muXXaxQ4OdRvjMRHVa0FzNye66WZLl1e8nXuBS8H4kPT6FwdigTADcGATv42/EwVsJbFjvaZjVKbWkICHa6Q9GibcW0F2gtsyL72L5sVLCI4TSZqLvJTyU31hExxraUip2g2W5URot6/QvcaQr6oD3Nb5ROyKL9uxGiKNLye5/td9/+cVnIzIwymmmMHgEydxBRxuJvvz66Zjmlv/7PrnVchgHqPZ5GYy7Yj5kpWKvZF3pco3e5Arjz954Xu68CitmL1XYZpiqMF5LPartlSGerfpT/gzuCo3iBMKd2qXy/hmnS0CtzEfmp3AxuFa/DY7QE7wCPOEPjIMHXz7BE7mkSwXleVvicy4hwdwXQMkxefa2OzDoAWNaJhFOVq79GFL0jfQtFvadNEb8hFcI7QCc9o524m11xI+CN5YmekbK9twyYd8eDdwMEWlZSgKr/+Jut9ps8/2kZ85QY7Z/WHcP98DEiwgKUrd2eOxRQfQ2jTLgchim+msoQF6ybPEauk/pWxgntqUWs/yky9E4hvAZ7QhXJtPqeyojDm8lAcePcdQw8K3lZvTfnW1rqwksHaF27qwHzufH4I2oMyKBAnrhFfNZhpiezDHrig3fX2khez5gA==';const _IH='403fbb66daaeea06b2b8b18bca17286a684bba1a1b87ccf0533effa56f83df67';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
