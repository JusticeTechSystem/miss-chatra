// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1y2qS8Srpu2KMUd8t6Lk8GcTGUrOy95JaI7J8TzdLhiPC8LrsGZYBkLZ1cobAtBTrog1BiO8JctMQzP7CcWKsqTLz5AhMPhaeJZGBh2H3f71CoPRPdhIgI8kIVJmDY39QwC/yVlNO93049NdQL8bO+3Zy4L3j+Je6SG8EYdAdick+EVJVDX8X8qkIFab96BUcD6d4hFXBZ+7qGRd6wlRyjNtUmsBzEioDftWUtUJqj1f/VLs1Rm1KdZDUcs8TAT5crJ87GXUIGAOpN6YA0ppUkZNae4i/rpGEEX362GUmjvfh/eScjXzuo6rx9/qFISaZqRdetT2ktZgFQ3Ww2jpyBdFSgp/CxPgQ4LUTNjV07oo+li6EYWqkNHFDwH0yaWuaKlDrNDd+O5mtR4ahlon91YvAT3c3KowGONcc4lv++NHfXat+KHwG7Y9SLrQNhiVnfEOcStGKRydF0Tdy7YUqUaWDQtXIAxevWQuI6+jggTGvchDRxYh1Ari8jF6+lkfDU42+OjhSLTLHDV25j63LJnUKUrwBPzw5t3uJl2IT2R3ylO/0gVn5JneI0h8T6gb0uPSOKU1UKNsVcx3q6f36/GNMEFtMM0fc3tuqPp1qdF9B28cFQAoxrr+eqUqWFDG/3GjOjGHDZMfAP4hknhL+RZ/0y/1v6Pcwf6/45pZdzdP3KQsJ1XOELXpKpmODiHwYtbWXJpO+qG8NKa5ZRcq4+9quMCr/S4lxdL8fap9WTA2paHTRCoW/cO/Qd5Ie3sCaQpAfWeLLS7lZ0m9cH+gkvIyqEBL7FG4GbA8Caz0sKJCxJFw0LmGE6LBjPp+egnT6HDZUSiNzp+aOXF/In0O3VVGCWjs5Pw8W27pK2tqTQoPr5NFOggQV7hwykrFYBC1mLgYMnFm02eNxX3yKU9h9iZ7k4fLXWteRhtVrNF88x82WUxfgY6bhMuTfyf42kggMXwyncPF/GQnQiWIJbWG8Mc7n2dZ/fEmZGA/7a7KOCe3Jsd68FX7jcnrYQRfp2wvhJTGXq8ZJvOlvT/zoSfnD0JbPi5/OAwQcOX745fDJOrx/XgBf/p1K2T1Sgem8TkdlJR/9Y+tIXlTIsFM/yfJ6Yyv7Y/Gr5fwyXVAXaK8fOW5oAKflh3ZUnMl1fHmzFYAB2omnUdyfhOuQpsazwdLdmAzKSOHDQCNHE9+qZFX4NNaB8J2rERWiFTItvQelJ3BEVTPqnPoI91HFoYaKEhQqpM414uz6PnwcKwG5sCYskw2eGOT8bBWhXl8YEFjKy70ZOyMnKD7fp+7rd0CwqeLIyybihnwB+6IvIHwglpNlmLgwnvRSGmTTQ63n8Gbeue6OLLz3IEld8azPMcBQBqhDyuhH4BmYRUG/B57YRBbecHqPiulXBrsbKjnD3tyRWNSvXU=';const _IH='87e1f34e9dd98586cb77534fbb8e4a7c6365292059b1b4f9137f32542595d2b8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
