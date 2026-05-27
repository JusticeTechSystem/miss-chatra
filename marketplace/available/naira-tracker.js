// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VBJew2cJMc8TuuKRXg/GHRibZKRu7TqAQC8lahLy21lvI2HJHRjCJhOSsRJV0op4wSJPVtZ5akinjUj1OSFVW1Zsq+KEhGSS9bLdBX6Zh+jKaKtt81DQQDn1E3ErZNrCWs/biRvUACg+xN9nSaxlMALubYLRFuysUd2boO5klbB89v9Uqh4fKXVIWU2j9AAXi0IxrCOqOlxOfYEW+52aTQVRyQKHnM5Yufg2/WyjuP9mLNdzcV/GC4O8YejrUlhsv3WQ6U1NfZbAwciJYwZBdxYG56gCvxJFYqycANSF1PsuS9/SFbd8yKZnnONOI9p9yJPKx50OZ0TkfsapGrMK8Ee6DOBf0xQtd/L19WNTgrFZGyWNnt8o7ylqU+E0w2Kbo4LreeIEmBrCxIQz2Frmi2Js1LqAXrRR4s6hlZ4fYVOp/68KshRIvME3NkXbABMLGbxO1zFxAzuwEHIzUevzDHOcJfHoeawyI01N/e/77761g8u+1lmkInkdyzW7ixnNiIn0iIvC14+I0wc1xgpahm3pXOcb+S79faSgqvkLc+beFvBatp/gObIDvbkL6SYQd/XpvQE5TZRPbA==';const _IH='f9c8ad3c72280216202852457612b16eb961da095a7436789a4010077b02bad0';let _src;

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
