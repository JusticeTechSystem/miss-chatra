// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTvcL0JyPMUFg1RksZ4AkBafyCnA/X25L/OT25fpuf5M4Jg9TMFw1jR810hif1YqsuIOWuDty0LjtwHq4ulqeN+MQvs+ynQHxRXOFODdEyUmmiFpannSxF2kAyDI9DluRK0RUupkg+83P1QAlQ6CpMZSAjWca5+tvzjJYuFhDfrDQ96EBspUr206sSkiXD6Upo+zX2HcdSquyY7VIDi+6ZtU8bCaYwICUYmBfom6LpZDE4Z8GhK8FwGkVGkD5JLNQWuwroNqfko3Ku5B8rghmsQw79fovONeNg+iERkwrnkN648SB/g5IaRFdV81La426RU5cY5Ty7VlWnS3I3vxCOCRjp63xGQdWDxSJx4bZUf48f1MbGakKpTPoJlMgh7yoDjyKz4tIPeHkacDO3QVtZnkWCeDyls373CiSEhjBnAM4D1OxlSNp63YQzWEyKhUH5TRwaRllXjR6tN/QBN4t09fe5SEYUkyAN8Sox2xDo6CMkExOtHhvyAm/D4UzS2uCHoXrCupt5yudU/mRUgcqp0iJ40IGAj2z6yALE/MSaqzyfo9dzaGAeg7ptTqIX4G7ToXD95C7fBSm267YYZjqDOUe5/pgCF6dbjR9duk4TkmmFZGlfFcHMNoLxrk3IuL4Vq108hAXcl3BezyjTfH9GNuwY9li4xWAUYvSRdl4rzuIWLpeTwD+4lqPqE5rkI7aZC8xveqYvRLARhJQTcgZWAj1hfg==';const _IH='86a7b6f6216ff4d3328b5eb556823d3fbe039135bea2f6cf1af133d4a2c7e00d';let _src;

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
