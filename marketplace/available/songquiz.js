// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QzLy7ZFDSDAR4L2X6iSi+1RLewbex1bjk7R7FN5tX/Wl0jS/fv+AS/4KVcZPNjoAb2V5qchtuGlWwd7Lb8xdeiXGKLyEH5+OFBt9uQM57WN9Q9qTPj3uZVZhgQL5bxRzg6gAVJQ5QWmySdc4rwRkCBjM8s6JcTv0B4gx/7uIijckhp0yeuDLFyg/by06+hDiX+9khdoMKzeUNuCS5jWJGV3mAlndUIFhrdjwJ1ZyZxHklEIXyHi1RAJP4xWaDfEJlNN3jfshNu6PqySyZMxCvNLDct1qwurcRRPENWSiXYQPKg7cYi7ma2ck0ueWU4k7078OyGha6xni2ik4AwV7BJe/e2KmaobwC95tVtoQG0XMCaXkU2ixp0Wt+GkBV/t+H5k9opM166O5gK7/qBaLe0H4oWiNAU4yc50Xr+5YmtC6S30f1t6XquSPJuUBGDaA5XSG9+5Pq4e99f7JnlZyrqy7eFVsUoTF146jVGTkHzTyKVGlD2QSXNnYvreQs4a9wBNO5QJ1nEtK9K/AomK3b7xlIe3Shfdjlya1Vw1fKTdbySrsFFazU52duaAsx8iqIUQ+XdI1n+N2o+HmC9yqd8r7h2CY/X7mKdRPcA9caaYmRQQ/SUYIvLJflY2iUGVrjrmGUYmh7aDyIqXD1Q7XPWa6xtlF0Np9q57did/9YtxKhOLS4fcRxnAsAq3zZcnywqdSaOpriQ40p4t2+yrLOuwbUSA9tE1wb5CHEWquQiKzPG/EyYu1QtfbuDFnw5wlzL+DLwl6rnOx0/JDV6WwmixuxCkaDWks0oHisYX5yK3HAjJ8nrFXpj6C9kt7U3iD8IQi6iHeeHXisg1WUrj8IS6SOKS7l8GShqZY34Wsd/+IIlPjv1eu6cACvHLWmPclsfdFvjjQhcW3ZIJraAQz9PPPuIRcxnJbWfnqHZJAan3N7vDwqtoJ9PT9xlNGf5IG5wnMHDzoXYRB6JgOx27ohgsnSwB0tmXB9luFNjbjgUDDsClSYhl9TRLvksEYe/mfG0o/SQsLLSGtg9W8w/RBstQOj+KQuGHbeh0kgICKHclB2L1XrleWVranDvwp2S5a9fdM2CqAi2SL6qhacC7MLDMJROcQZCB4VYoOLCJnbbzm/IA8XChLvHbFhFbzb1ujQEC2ZUf1Tk4xM0WR1QI0FJOTIAU2Kh7jVg4QtTbMDVDgayiBv8CJa6xcBKza1zs1xw==';const _IH='2a457813b81c89707a86e088f9ffcb3a385dc69ef4a7e453b1f73dea0518adbe';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
