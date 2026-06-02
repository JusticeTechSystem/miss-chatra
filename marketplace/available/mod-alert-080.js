// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VuZ+ym7mZogUqzb3t6NXZvgE7MzBjm2laaxI1Zs1h3iI+T+xKKNmv+U9K4RmiaCruoDxPgQ4ATBdWi3/OgmPyEAZ2662SRkyJI3v5kYAJ1lB0nKwlw8UaXxkBHE62mj/ZoLQlX4noESXrcmxtKLfzHHLcRieY2pBnRxAnjvVUeZwphjaLKfMJX1Rc77Y8WlsNdurzTiV6IUu18Du+67Qvaq/myDywhsQ3YSzJjvegdcUd+fhy/ysFHFr4l2h3GjzEPEtqye5aAHjvxke0l7+1Q5qkiWt17pG8JJDO21BTSuYz2q1jQS4rBBBhfBMn2u4EFoGy2ulmgk88iCHVu8w61ivfOQfYsFRGxmx4e2OGI6+m2ZQlWWGCvZuU8jT1ClgSqNRA63LkKPuaKxzskz3TAnfFLuTDbFF54gU/qTicvktPVzupZH5iip9lnJMIxrJ06n2IWXtkjEEoxfxQD18LVu5dNw5wMmUUVGwR8hCBUyuUdC6eS5Z93iRxxLN9sL/HO3LR4hQ0DxmXNu/LcyU7cv9Uv1MU8BpMgFbwuq+sQgo87IdPvdGQfLecV4sblr2r7xSdECfr5Ak1S9xvk4HClXiqkzIbsTHg8giinrwEvImqX5ViL/kwWg39f7gsepbrF7THM3mPCfdjBFK0aC1nIWaNPao1fxii8gViVGekmBg6MJH9rgmbxqQ0OtoMdKXqjK/LCk16FWhYw8UGVD8TCb3hGqfI2DRn5MItsfFNXRik3vemV3hVKhgu+4p6vQduX32ztgI7dhka2jLfalR5nCkNSZCMmpMcTYUMAxkRMyfcRN22ysDmnkAJuDFXbNNXqr9ja2ew73+DBeEboaPSdDVUKFRmqPQp2uRUzxg4T6SvLvsGXcW8mTjeo+rJWRBfj9vZl8a2Hq65GA8NmM2j8TobHsGUtJR1+ufOKf0uixmX5AgYE1Ww6+1B/o2uOeexxE8f0+7KHLo0YnnusIhZlFwwSaG9ryL6kMF84pdI4TDmG0MUjjgLHCqCE1OKwt28T7f4Cd4TmP+sv0qoRpSB5Y/n8y1kJQ2M8toXR1EjohHz419sG73t1OiKQyQRUAqkRMkNgtmrupTZuxM2BOdmxZGe57pqB9YaQnVD3IQVBhv31hb+jC7JLABvLTvHZKnMF/hWDWNPS6eu+9w1WdCSjrZEFj0HlE+EQ98VXlbsQQP0eDAWZPv5R8EMX6mFoiI0HS+aWLGU9UcQwtBtd6jrGI0homEQ7cud3ycAr+2w1JI1bTcFpSrpQqsCj70M28ljDa1wqPZZWMzTi4IoV58NGGkMEGPUyqEc1KDWxdslHXxL0Q0+9HKnZRhLa9oeB9ZMAaBcQL11GX7QNAKykYJbPmxgnk7n5xMGw==';const _IH='5b2b1702bdeddb8c02abcbc8cd2266e9078cdef58002a2b6c7fe04f8283f9c27';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
