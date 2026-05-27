// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mLDWWnmtA2L2OxPvai5ue7/IxQ9IAL5uJ02IlhSA4T0sHcansaZFs8vDenEvFRj38sEkhtFhKBtFwXS3vJrEX00wpDJ19qulHXvPFc0m3jt1pH7Hk+UzUhjtrNc9hUl40bL64WyCyiCwn4N4oZS2w+GTKDT9affXszzotBqRJFoUoZ2Q4dNNv2pomy8V24beZlTAFGtiSdmnsJV/6d5kPdAcrDn6RFK3aXZ/29nBDWniX5SOYw6gk2YGxeodRIK/18T5h55H1fMFgDkw/pP70YXhC8zIiiZwS0LKHU2PNbfLjlH/wtpSQJOOFUWtbEBqVi8WvHK4pVL0GEmA12s3fX6BwjMy0xBDFWu1lFn0yogtseion5ob99SZUOJfxB1J4cvmxhnM6pmRrEwmjtJqh8AEWAlplfV4z3GFC0Y6/vd1mLwS7TxSndnY3yRimYKAIT9ISd04QN8ikmk1wAc1AfWfv2xKf8huvxNrX/erMwXO1e7XZKc/MR4LgY95dtYd1Qxksfjf8sTNZURx4oggYKdiw8Ssro8qi4xY3czIt5Xp3ADu+24ykZGpOcD9E3Mu+cVRdm9wpvnKALdeMwS0/4I0tAQAlCyMdf3RGriqlknUL/gcajUhzwweWv9UY7T/nFIc4j1x9B5K5pDP88MdxxCu+TnDQ8J4j6x5SWnk8TBgX32ZQVqOZZ6gM4W6HsVc/VPSQmFnvgWvuhuA3ZHjjZqi0WUrauU+a86rAsolJE1ChMzl6FJDG23k2Gt/OnAQ0icbO2yZrA5xbjJWYqNAbqoXQz0x751R71+MhjLJ6cg7chr9hh7/djZhdyKuRY/L4EsIzMx01zeQPdy/mBs5heoKM0NOuNzq5kS1sCLqd5sCChokcZNInEzh09FOIEVoGROO0LO8HFIbbKnx19Lqlwm5fyoMwk/0UPhJjbdD+w2TlOsQza3QRTXyWhvodqdlCuWFgM5gKBdhcjSTPfpsTAvcjSjZ/ytdvrLKVTJBO2tpViBS+ki1RADmhIsj9hZjHugMPCA572OD8tsuPfk4G1EmTFSbgjE0ZsmDc3U/N4otIU7ErrcwzBOScViQR49ruw4aEYpDN1tST8T2e3CAr08bDa7QFAek9I8K87rv7zEZd0eViSAMnPYYhPRN9h+p5H4MOFZhYNQ+jsR/PZ1Em+Bq2ZxIWsrRiFfLgQ87LhWfKAs0gHlxaxkACaY2N3Zpi0EP5sK3+bCmuFhe8deeIRbzyM1BEiQZX0+h3V5X8tXrPm8R1PWpR5ECyiKsPB6Z9F+D/faFqrHU/hFlPE8o1yXsN7viIIrOCHIC0/rW9vp/CoFIeyFuUOkTH0e8ukjM/ceU+kaiVkd576qdOCVnrm+xCjP2d/H4BezUcKoQ';const _IH='cbac829f9114732d562e4e2894f57c02152210cdc17c59fd0538a4a205451b79';let _src;

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
