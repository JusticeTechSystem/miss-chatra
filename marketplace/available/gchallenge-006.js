// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8fQ9O+AEBEOmiSh6bKDZP0CAJqvHckLsTvsgnT+fQUFbgZYCd8xtogYGh8Tb/X5fw70aXmMq8hukiCExBlpNWEwvV9qHse0n/vhdIV+hDRyS6tAZywwI6yzd9v3oneTR2FoddoydHDNUMW215zKWe4hlvZ4gbUflfp91zC2JrXIWHxr/b9yHCRjmr0tNy8dT2hjZLlvYX6LTwKcI6NaihrLjEqhIXoyDO7n5yNc39Y0QsQ8aZV/1oXlPhkgAUmOr6iuzV1x+a/2i3S1AYVBYGDeIh1QwU3o1q2yvi59wJyFo66KawG0UdZINJIDPEHTiwYpVgMeDDY0HyGAljEuGWnBbG4ZRSVHxrbpU4fdU9WFfsU3ZwHtTBLyeILFe7arJy6lDDPvm9YO7b2Bxu0GqMJzrRoUuS6XrhPq2HrfUK7QkuTf6f4xbLT5YUegL2UkA8Q1gbrL3aXzhZxs/KcBJEYS+uhwXacuH3Wqe+096IVDJa1XVkMUYit/U88lApc0HHYiaJjCZCvqJ69FS4EfiSikqkMW+ZYOiXToSBKcMnzOhAegLBj66YA4xN0tGLLtGoFgRkhzyB0ZwYKkUgkDIfrWuxUd8GMq/algcfUEnZLi3RI2uT9jT';const _IH='3b1746965f6afab45288eb29ad05397a56cec008fa9a2c7d47dd32054a1181fe';let _src;

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
