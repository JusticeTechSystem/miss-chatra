// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRycOhkCEKSb4qUUJwx5MKGoIcdPMQgMBGozG6T5+ujrtX6o99EeUR3qDFvFWWgaL8I38EaPxxO2Pvm/9KQ+SZC4TQ0+W2Fic6Szjcb+qDRrHec4OStklBEmRyxPWQbW141YAVYOAkHEcZYTzQpsh5u96H+Ho0mHSXZ53DukcDf5BtFtDJDWzcvf4DX5/w/Q58uab9kj8nUE4Vkm1xbKYk9rgbagpHRZaLiEtIGF+9h7SpodcQA4ggicl6ta+6LgXFY7GIGCb8xt80DrzrHm1uup/S2d+nD8bfoxSfqTzVWfYtzkhldhPOgwubN6cNSmFELrAn3ph80g72W6ti0se4p39hyhBtCiGLLF5uXUxz8VUd4SOkmyM//1+fglIopVArRmSL2XuN0aDRJe/enL98NiOJY74QH1hzEHiTVnPYxJ71+7A9R2ePkjgaRZ4riS2zirh1bvON6rPo3j7L4QUN0rHEbWRuTWhx8Z80G2tR8bywg9iRJRsv/zZVvga72DCAPi09t2QjrHD1VS+jijDfC9ktzdiMhkN881CLUPIOH++3dvaTFILqEU1rrZkH/wn7kYPu6r1alXxUQWRGaSshnkvPNAkxJJhBLIaqsRbLEqlXK79N2FvYG10ZjODRUwuCFuLn6jQLkqS5DpYbR6JjjESvTlzLAzbwFcKMcLUH4ele9Bphq8VjDJ0YWEls990P+QSZDAPGQZP2b1APSAcI2GQRWhD6n7uJ1tPL1DGXAYXgDEQHKA1sou8LmFdLRDIM0DeZQ01xa9MsTluVylh20AZbd90OlfVnLNUk4/ayeINrmyhGnmc2PzMyM+Vx0awTGf5jQCnPHxZF4FAdDDAVvcEGzI2ld9dOuZt6lG9ycwjF3piog4ndGH+TzWAFLK6zQ2MLq95HB1OqEi7JSvDdiFucO7rpyPXd1dpCWmE6NL+JtQ8IUs155TPzGapFMZJ3tluxV3qLmJU4Sbiujh09i5xaBEwovAtU/kqQ4ZAVsiHk74sH6tNFp4SG7tG/aLOn2jbpL3+xBTCBLlhRzrjq5BeB3KJeuDE1vuMXw2Rw0+GRLDWVjXygn0qpn+llNowR/ZGTqLazrz0gSGcr9pP9hw5eX0M2iYapecUa59OkP5x5eIMjRySRCQ7lZBI4NPi2QY6brDI6KiDDp7UA3lxLdHdBquSqffUbcdggQjnXuhlQZuIgTsoCqkW3t7SibOT6kDvBIw10DcCYvcGCGA0yyb+ENUtA5uZ9PYBdP4tYv42RL1uz14nLjkMpVOSL31UME48Y+qaTuh2Fudjoq+tQqgOea+/zsO68ZWBAfreVtDY0E4eGIo/7z3rZvdaDjYh/Aj196JVM8pOkiUDGd3QtRkL4GfWsndYQyTK0OcQ=';const _IH='30bc4da9c5b39ff4831af87e01f7015c9b8eacf40f4f11ece6e240e70fa692e3';let _src;

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
