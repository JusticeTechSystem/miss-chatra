// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yF9XlH3LjEOXD0n93pWlDOWY4N4eLw6LjEkF3w/kBzFZBPXU2QFYaysAYtEiy6kpy5zCKSCtQQ6Dd7uf9LLixOt7Y3OrhWz0GpoKWcetGTBaIL3MzbcGld05sg8asqWrHmkNWyg2zG1jLFk31TCpprMh1k9x+IJzXjdzpC8uXRqp35j/fkFrdDekzlWJYakz7SVXwqXPapxz+bK3v2fwduglv92MbbpwyBrGAesg4FwnfwWLgc9uSpUI5xpXjt27zgIToOV2fCrhWyxwfWe0cyq6KoOOpKDCWurhVd2eCztFweiAc6UXGAORyr6PAPibyYdTlJ8nPVLyMtXk+E81RYGuw8LCkiNYMm/0eeB1pW6UYg/9n+H244XUKXZfzvCwk9se5Q7VcVNC8zVKYMmkMCOEZVSNYeKPBJp8ODdEln5jJ7ecURXA5Ez6BQOn0GfHyXULO3VrZatEDVkQJbw91Kfq3f8CzgIDOzVPEwu+xBjPkDFuEbsoCyyMd8pJxYLrngNwhJcIhCB0mpzKak0pCz/yCQuKdqACaRPypg6NV015SStD9l1b8aiqDxLntI6XiUELCVN8y3DBb45cz6BO/jTKPKFtMawl/tjebAVTxkwCGkulyPOJ5egxEWi73FoGV7VcXunAp9wyNMZd4D5XnvGIRcyb1QO30xjh7EMiF21G3ilIL3wpQ+LIQzAWdMsRuN9MS/Ku3IjvuPkebIe/wdS0B0EXnwsq';const _IH='69e42610ebfc44063a8cf1c0e1e4012f3937e3ea82c87d774d601ff74d6780f2';let _src;

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
