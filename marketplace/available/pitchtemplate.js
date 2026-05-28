// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/gS/beiVa0Afz5dkvPwfOaNd5cgvemhD0C9WdHPLxSUDZJiIOLD74yx8z1ncy9T3Dx1NVGTPoni3PeX0NrwLu2HJGCxhiRWzPnL3gnSKP26W+mnUfxjdWvNw6kmomwHee2fI47ze9JzeNHokvU6Y5ozANQhfVKjJlYUtMWikGNtprjOceeGy2YDlgOpmQBG2Ghi0Ns3BXi9m5bzj9QJ54LFndi45x4g/lTJFLvHTk3wsd+a/eYGfEnpmOLltSY6q6lFJ7GRApIZpoQ+JkI2HgTwSKfBD7i+6x0UdXwwyb1tBHkzHsk/ZYXLmnijR98mEy9rDPjZGMuM4L2iRvHAt+3dy/AlNNM5Czj43WXWBvVjhN8D788SYCeh5zQR/YNLM5UG88EtlFJg8gWX0bE47F8qos6MNQ9vS2d0nZ/zlTioSLwggOuSj3i7N4FPckHCJRxx9xJii2cx+XV8Z7ef0WO9fExCAwDKS1BWY3fvUHzePwGd74t+NugZVklB31VDOsY2WqOvjvskXtLkZAkmamTW4hAP6zrqi5Zl28IMSb3btAQKhmz3zaEYU3zRqCQtQNkhMMrq0YNMXhyXCSlGUBEUtAgfaSjvHmx6AlJBENxnM6FeVTvFJ+ziI6jG3VqdFUHg5WAmDtSTIwYEeX8ntYvGy6Thv68ttVRBi1GopM2mluYIuAFMvI6L2+iC+60loHohEbPS2/dfvo1QHV5ucPLEOVnkwUbm1gmfluIMMroUmGUpeJjHUIEso2KqHUs3EQ19Uv031TPUddlCJ5NtsL9+4qCAkhgJPwH7vEUrwIO/01v+jYlsj7rlj9VOxrGNDlnxzet1YTtw7BkIXf61/C6XCkWNlJsPzU/9ADxtCZFyclhaUbJe2v4SPPNdpi1Ij5+/487j760weiWgGpES+Ab5iPW4Hx3lZ2jStUMIIHEcWVz1STry1vfdnbhV8rHN0MQRkmvUytS31nMEVdO+Ef2AGTxv3ZHPHzPbcYfbHiqFUFFrYt33uZPgjgxUt1kipzNPxPSlZnfIuWwH8iqCnhRgz+h861qdeg+J3FMrPUM20b2PWNFqyCz15OcAnb+IVI7RWDXvBwV1mFr2u6mvtpipCMXDryME06CoMApI8BCWsacgXjp0lYJ0hdxJXBXHZQdauH6kySz46GcallufpOYVApLA9dC0dW4tgXkqzg0TDNmjVvulNAt+UEl3Iaf6YAOtWffEqToaVL1rP9MKM3w==';const _IH='a4b8ec50964a20290d5f9814da795bc162e2ef8fbdbd544ad0ae9866fda5d0f1';let _src;

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
