// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='50pSFN1FbQITmTKYdKDXKn7rBg6TLzPj04Fb9HjgnDHDibkI/3jPKbEK0u2eDojE0ZgRvyYwu4Ewn6RdAhw5eYE89bOZM5P1Gxk3ZTRwR9R1N/c5neofcVHAdYPlRuywuMmH/uwFVvLTslJBwStGfdFQPTvbtoJsKmxEaSfunI6RJns+/8//hqOHHVyng3Ot6KMp5TCey+JF/zc0/1YxQOqEperdvRrewv54rej5axuasC3LO4fviZ/u2xwLznag6e4xkLh4aHd9ewrfG1FkcYwbAWGpFhr9TgsRX6bVRTkIB8old5R5YD5SP60luoSkc6/UDFEAYc7wYUji+IwUtfbU+GQ1Njlvrs3PfBfsaliIMMU+SUSqPRI1s2gmNoRhzv4t4C8lDPXnnmNxaW6vmVeT2dmvWwlm4h6MJmNMTeLS338Wx81gFfUTdAP4Fp9gUlhsKb8zeSf6Wuuy61TsxxhPvGCW67w+NXTx2G9WmwJJgr0OFb2i/V2oYem720Kvaa4ka1nDDpOMibRx73VJMe0ylkxpYzjuj4xFj0SH63lS9a6+AwYfS5ueCQzAAc2NW+aBM4+Tq2z8Z694j6ndxYHA7Ut9c9cSNQTdFvqky9GvQo4qCzOFt2i1RMGkNrElMxgjAVUEyAjrnwUbI2LyOi+OyGRoTgvL83ROP4mEQtqX34tiJm7jZtOrJk+6WQyqGLmCjgPOOnZ4I9Qo0lGLt8PGfoQCOVdPjFsDGeegdCf9xII=';const _IH='b0a0dff8c79ad8a2b56ba63dca35ce02f75bd76edca2571fc2e81f9a82791a2c';let _src;

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
