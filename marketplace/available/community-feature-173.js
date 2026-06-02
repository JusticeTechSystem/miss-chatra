// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RhqK0SAAzjl0hEqVQNFgf0MA07uzsS8SNUfCKt2gJJlarPy1/g6WZPhfdLrOxH0m7ffKYd/eSR9QDYJyYccbOhVA/3STs74bH6cqEaEZEESCSKfaTQRqe+teir6FvnEBYWa6jhP4GHQiMd0iXT+eZXi+DhVa+XHEHp7FxQiskFmCyJyksDgix5eBrjLeQ5p1f1oYIw66tbmS2XVZEZFNKtpSLYHV7ER3lfQ/AsIUDAWAfqF9coNvOiM9OZvu79lwacWa6XnM3JHojKz1XM7F0Pc/GRA3xI/BzyXIlKKnyB22t//lzV4XBpjdWl96yiPDBhFWTXabI9BjzHdkg74fM/d61q1urCi4IL/YKSCizR5pruKWkFpYbijk11g4xMu4GBIYkd6oeNWoil+hNzm9v8UIhx/2LyVTrk4NXcmzbq8P0psTh0e/WN9YsoZEN0G7KG+H8WFThoEA01jsEyl+hnNMh9G6enQhGI3VsfMm62c8r7cbzMo+knS8KjWavCOiw+TMCQf2z1wQ2qnn18CXNc9/hJEmgy1Ka2FoK4DYRUucZzaHIRaipx8cdRkDzDMo0mwMKtq1wRaypDmfm7TUt51Gjo7hCdyH1pbyZS+0r3G7Yf60CVpnKJZar2WMvRuNiY3QccATvbnxKXi81Re+DCdEfyoQrsvmLC400vxvJCe6FXXG24yfRrKl8t9D+gR+e+jxqVPAiTOqm6JUYysW5abstLy+/BiEG8oDKos=';const _IH='73aec43956a085e67930c988ca296ca42a1dacc6931ba13d72338a5bc8e93989';let _src;

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
