// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nJk7umQW6wnfKNX0N4GEQWQE69Q+jh8vT207nlZhc8lAjyhO9rvdopE89AizEhNi4m8iaHJ7fBVrzwY9Uu/YIG3ydWDyOQPKSWUUZqmzUJDoPXrajs1RJ5yPe0HoAyPu04DCtymgo+mD4ixe+9mDRHPGQ5PB6IwkHIm6I1X/4TM4BqpW8yuc57+ef/55b5ZPQOfS27FCu+9kxnr+9C9HgkECndnAvytiGgdgfNrxfO3JiZKKEmQZdSwttWWn4CeuQD97zk+WCOg+mT1hqgiAZ8lPLAifCIHaD2zpX93TFthm/e3VNjK1XtGWOCUnkLej2kK7ZHB3c4uPti84yCWXGj+yXOhSYXemvLroO488tVKSja/F7H5kuMdcGF9dgC2kH75SKx0e7Yeqj6I7dw+WXiKMBxAPc/EUezJJsYMHT7gn4WxHUOBL1EjiovhWRSVF2XJPMi7i4fes2USETFaB0dcH/0cULeGZ01/B7yM9xUK/GbFQaLS5/OhX7objXVH+yH9t6ZArriFsHk6GazYHQbZ+VLexCbD8EeqTUItRHwEAHopvpggi/TcpWGlPWfPilu0sYB14jKbXqd/hUwu3XU80jiAA1pcP/kjqU4cr9UogZ9mZr66q90UrjL3vhd3iOQlHHqbIEuUbwQumOLckxOT6IwLa6LRVkNQq7eSNyFGFSSmuJKXImnLdBYPNr0R2YYfi23+N0KWdbMLMaO5IIg==';const _IH='db96494c2283bab658b3a60206d55ed72949f33967e80b9be6511bdf91952bdc';let _src;

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
