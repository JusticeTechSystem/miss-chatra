// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zyCpM0Ugw2UmWnN5l+sujp/P2iErSyIo7KtvyCYWWdHCnAr+QCbtoScBQXdPZROdotV2UMLIUoTJ9kSB0iBMN8+h/QtlyuyYhy7fmf74goTDwCXCyrVddgLFpm55NaKECrI7CuszcbqBLjtV2DlU4QGOXWCab0m7dk4cF4rP8p6ndfAZGjAdSeZkw+TPnQeGiJxv7dryvvPYjKf1v+ZU8S2QeAoq6BpN+PxC0ZsaneD68Ocm3eZvkPlbCW178SM/QGQ+9+E/sPOX+oCliTc5N3V6NQ5E2OXIY5NoMbDpU0JW79wiqhJ9OTm9rpcL5lRyTKzdcz4d3Qs6ybn/f9lUAtpsAYRgCgOs+oN6hyVTIj0PgxRpMsP89geuzBUcHmSmciQA39hXaudNZfr/rY1cQWcF3ujlyDhyIwBMWT81cBBkibRL9tAsCx7ODWi+BHx1ISWZ1dZzR+pZa6mF7DGOYxRohYZXrA6ZgzhzYfMYwjP5sb6RTFya/7uAyRdWfYjP6pSIToa7sx0JO4XimZXmqXcltuW6APGYLq0CpZHMM39xwCEAaqLSEdG7toCY8p8ZsliUl8/RrYDTgQEPX7y2+zaday4gZ6Q5V48pmhJ9WFPr+Lus9PK77OQ5AGK6dJY/uuSAM6l68UGcPk8khm61ggvisBJ/u49UdcP/CiFCIRly6zuZk39PCgXPUSFfZeNYVMLME8nF3+oOgTQ842LdXU3s3N5BOudKC9AmEC27sI5KT4I=';const _IH='5f742c858630488bfc818f1f4a03396cb9d133064ec3edde7b5988860b043249';let _src;

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
