// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WCtxGyblF7XkyaIESmeR+ivBtTM24M5zkQ8meVlJfcKlRYm5buxtiRunw0jGJgF05m/NE3Q6KFcNdOQ10WmAJdIVOIudg/SDCuJ82nFndLbKjD+x5ETWjt2MQdGnqo9ITSWipifM7BtiWzXHO4L1xEEs6ClSjaOYt2OsV6xMirl1TVHwYs2PD1wfs8XEAmogWR8nzBCSZpUFQXfQk1rhgVJLnPLKsMmxgSjRhwTUQjR3jAs1s/93Z4p5XCba3kD097RxotnDHQy7JJK62mb9cmfp/lKG/QjH3bpq1Z6BDXT1nxUOxlZANfbHFf2uz3N8NKVEPkZe8ZiA/nzREu+4RDhooZeapzVFGR0GXHJtc7KnoabdOMfOioHYchlXAT1rBL4FnW0F73FoDDlppi+AJkkbphFDT5CeE2fd93KtovllR2grShlBC461zwlooankhtP6BQgH4L3KWS9TBNQlzDAXEhosfmgGmNdDDV+3iMY26DGU0jHTPuqXi8+wr9gDydcouUMfds506xAWDCF4rjR/sjztx2PjGOp9jr+sLUPJIRqZ51xL5Xc09ijTm0kJe/MvmvN+D3JX4IAxS9n4mr4f7ka1SlivY9xHhRqn8lJuqw==';const _IH='3f148387a71352f4c061c50cfe2bcdcebbe203f2476450c469422e494ae61a7c';let _src;

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
