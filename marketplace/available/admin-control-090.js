// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E++1GxIqblr/Qp6gsFStNNnrFMieanNK4Eu1htxGxgSUwqB0ydDZjH8l2Sqkoi7Z7FRhn6T3b2i7kkMfxW0tDn3xNkFZOKH3PVO1bM+4JCR8UMQqVT9iZgV+syIoBIT0ludCE96jc0llnDvjvPA08rPQlqfp5iCI8T9+3wX/EiGrZ12FUYDjolCbvW5mD0sizxgQFr6fFZKf+aSDk5EB1vKo/Crh9dTDkQjS+pPgqdLBfepz5zXkT7HRNrHrGcNUKPya0vjnyuW6mOwvZbWSq1boD8n8IVZonV3ICXpG8wJSskMClzKTc6TAx0KzLZeKfo2vgJKSXiNwWdbNd4NmIBctX2LMo981QepJjQLZAfjou5HteYMEQAyJMCEuLXyRzTm11L9lchA3QSTYOkRggKaefwvZnEKEXPYgyQmb47Zftz+EpwaCJRUhWkzSiGKeTkAV/23oNT8V8WMd82uzSmn7+h40AdNWe19Mrc/mceirV+AJBHHFxoqstLzvkyALzyDnKIcc/tZTsbjvtfCPQoJ+ZrupZs2svPEJ2OwULl6uBL3iwqmYDlCq6YcJ2BDXXq/5UBgZlBAsfnmnlOl9EHEXN6Ek7Fh8P0q5unuv9xQDzfsmGqhH6a9vfsuZdOFdVEoJ4TFrfK3goPs+jOkySyuennsvywWy1UXnO88VZzzL3XNps0dCAIK3MpDbpXHr3xgwI9mA0333sBVX85+l0lytPs68wL9Bwb04h2hPaJtePTVImjKEE0eVXhodDAsOu0stMTmvWG+t8Ox57i/rgcQHUOYavh/raw9YiN/8WHnSWHOXTsFhbRkNV7HKepV4y/dyxC/wTyQ4zp75d8RDQX3WJ2a9kygALtCrlnE8gpEvuCrqs6hJri/nY07HUHyiPyGKqUKGU//WiSR/bmIOnDwiuP9C7F2R5+tRAetZVSAeAZ0Rhhz1a1baZs1DmSYGem8HTZgjnCN6FqA5lGzyuRNzFuXVgWesMvb4iMODKyXnUvkMcflxDhK4G6YqMjKiU3GuLw==';const _IH='c379e44e363594671cc56cccb8d99f9b110c46d696a7a90785e47e7685dad33c';let _src;

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
