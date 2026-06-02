// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+58YiSYAahIDoFH29DRSPdKzi7KwFrBj1BX3JPX8TXOCkWQb09UNpy9wv0+/vbuQTnuuSOoUlHZ9zM8s/qUvmOOmdY8cgQhs1mB4s1pDtuQnHzstEDf0b2m675ADKbENmhPqoIoQMLAbKhtpQ1j1eGCYRkLfDwAEO2cze29vKqxmXIqZinAMdcIfC5QzJW6u9h/4R4LQe56njHol1M1d8kBYx7P++BRIkTs79DNuFzWZPzoaLnxT7ePK+LGMOg7qIha1WZeddUS6mggQq+a6BtrYGugA+CjpSMfYvRvUmn0Ao8wVa+j8MDIuRt218+bXiifANvUqTo2wls1db1zsQMugQS+iPkta4PhwnKtIkmhoQl9AOOpAtJ0vZe5jftYckvHNY+CgLCx8eT6FS08IgzO+1HX4vHhnj86aEblzz0ZjEI6ZTS2i2h+E0JcpEgPMTtqk+vGAX3lh7qzW9q/zlyCp8HK2evHReIFpMauskDO2+Wc0uLz7N6BFatc9ZQYMacypMvQ57dLxsu3PvW5UYqrnMzwakMi2/plOxGdw3sjV344Nay4JWw2elyf3Mn/kFreLRHusKvPv6mq73gF0UI6+DxPRfXOOiqakbdGrOVtrWfBywb8Y7Ce7sOpDryaPI8WHrxffklnXPcHL1Ibic8YW/h//bcQpyabWxNdZal55uCsxGUu2zQ1cMPzfTocKvEA6li6zV+sIeAXuegUQUqH1XGcxCd3bLwXXOhx97MMe/v112IPr+h6G';const _IH='3ff8ef20b3587733457e5cf68ebc37bcc8d9d96752a508555be81d2af5c38449';let _src;

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
