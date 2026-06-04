// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LFsJOM8kh1CqWmq3rC5ibtuWg8UHQJpx47dtVbGyeyeGGBrKDmEJOD2md/EJtcENmppGALz2l6I4tbxk9v2UpBmG5CYYS8GjCgyKumn3jVJKzKOdoTMUVT7xXWwmyW3C9hAgIGESJYfkSp3n4TCqonRLMW+SVuNQcuXfGe61MQkshk3SBKZRiI0wZcBtYtm6RyNEz7LK4veLqeIPzS62olB/vLi9fQq4B8Banbszvvo3EvOs+/Mh+9QqA4xzuq/HdsTLpKihwiByPhFnAse/ZBEnm5DyOj+5H3N3uYMdcVNNpfvkrA4qFO/DgAbFCmPaMeZSSmjN4R0R2JOKKuIzUvIX2RGgaC5WxD5mDHUvTVFGQsnKeek/S4ngwCitmtxk94tMEG1mISHGWMqqhaF7pDWQL6HsgjrQYxDSd3yA4gNpVUmwq70jpMZvWAysxq9v9PGHweTDCc88HndbSa13Ogh+RjLdoPO/p11Bhpr9MaR80C89/Q/I/BNmY+MrGYODZosNz87TTurAPCuLugMmluv4R461lq35t0CaIvv/KPOCFo3wV7J9VtyEC/o5iPovUp2i/RjASzDyFni82xCBY1gdl2RRxnP8TfHSJ0ENZoFCYfmVeqatblWmD9DkdvkUOk6H5n6g+m3kP/+skJun3LiCZ/GUvUJXY7kXJf/y6p4HhMtlDpVhjYJz7QODGnHf8N5gCfJ7tbbDWDtFonIWk2bxKobfv+D4oTZeHw6AgjtppwY0BdIRtrARbEb9ai/9ON3mi463TRN/JDQAxU8ZRefVjh1czaqsWE/FQU46FcU2/u3hDqPN1pbWvYZKHq+17ZSpvmVDDDRzhdZFAwihNTb8icg6dV/EYyeWdkzWgL8RAFaizCvB15y0v0Q3boY5a4by+AeFjXXQzonKAg7jidKaUcrRCwII2IkXFKWINbA+h/LLYiS06CNLSkmKQ92+V1GkHM3Hjl4BgqQc3chO0nr/JYie5MefquWYJF384M0voVtfyzf65635jZEJiMfYtD3ZWnrfN1aZPGw8eYh4MnE4ZvRGZcPD8t2jSYK7ZNV3lNaugUND2xe5/T476mU/GwUWhydiOjoDl+q3LiC7O9pv/cdXDYM/1PBU8zOrZW1wUJIFzs7ZnQHX7OkIfwMbPAWgNm469PqJbYBkNRVTw86sH48SKDLFY7wnlu6gffT/VkRQ9y+9v2FMec6qSQX1sAqbaYKZcsV3ZokRAmHeJHdhuaeq';const _IH='e6cca2a4041fdb79962ce4fa5315c9899b82fb837e7e016b87c538f6b16fa504';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
