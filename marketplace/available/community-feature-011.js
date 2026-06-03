// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U9H/ZXssJk1THiRDpSxfa2tIPsUT/tT0KQrEgR1LhCjwlNzfJW5XmwLmF0Ng71vffuQtqIxItGKRxCaHbfvGQJ80ewDvBYVyG9zpcdgfrL9Acs7JBig5K5/Y+eCodZkPTRGXroz2Fc5ubs5M/kydMT/PmlsS0B0gCvvq3Vs00Y0pXxpPF1948wbL8axRp2IcOa0MtKbU30R9zm4V4f9BlH6Sk5DqcbELPpuXoy/szMWuLB6rLEggoycm1oS3uaxDcjSbHf6XHDqnAbMHiewKyosbMU47t7HDKrCA2BPzMP4WIHO0vwqXwi/N0Xt8t6r2oq2e92CaSSG/gqrJSY4qdddMo9TI5yeJPCG/WzdK2QGqhpxVi+pi908tlORvoO9fDyVhyurH/avSblVw7qdmd+Bt74C4yIuMEXbPzuQi7Yt++gOqukrar/UDxwVFxkDV2WCzNHciASiWVKZpGfA6kOn0pBtcDi8bOIx8em6po+BPYm0ybIZamZS+1SvtZPfulcyhooX0vc+Bk49/M0GBMPb1woSDNV560/N08hWNgMg1AuRsKK7TvGJ3p3p5/7GNGynJ/zJqeTn29ThfAJqwqhho726RPFdvimyZIRaW0DkLIOu8aDR5MVFHs2og8oGZZhboRmcv+kkibV82d0dQqdldKjaPihpj4F0a4FuR1M/ncqftm+nJgysGAsQk7qewnT6IyX3QwIZMR/b4BTejPwB+jtg=';const _IH='7c0fa674652395dae2818173b8a229e8ddc5a2f59bade5dbf119fae2a63e6739';let _src;

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
