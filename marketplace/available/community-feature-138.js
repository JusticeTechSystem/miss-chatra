// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tpce/fuzCYmoxN1HD7i9b/R2TCQFGP/BqAjvm1YIDMgl5jbVQ9SSxJJt/RFIv8fZHL2z3lnc6kF7Sv4W18zChe7/fZux4t/9Q93rRwjS8buORYXvyK+ZCBqkY1ZT/Y6at16KM24pzTvv5CfqF+4GWZvfyXFayTnGGXlW6vfsVroggkSI4GsQm0N1kCIva0M2sFpTCSeNiuXfM4ij9sHMeds5mSALEqdy7oenwtrZn5ODMQvuT9W4TAJHiMryNk0GsVIpjp4fteZzHBd+hwjrvwuXcgY5K+h/MdLk7i9YxnhMiLVzSNrWX9sTesXZnAiaCXA9/i4v7FIK5c4SDTmpagHfz4+TcjJ+cv+ML4jpBPejCzuqJbdTETDZ9Js/odv/lemqP3nKS4aqd0XVwg2gnoegqzSCVp4aV35PDlczGlpDBoWnAS4PN54GTDyJmMNLf9mCzqftRGjhJQGS6iXUBvkd788x4LADK03rXBXjSq8Edi7DBxYTaV2TsMf0vF2K6KwrkbdbMQtBrmuV9W63q1YIGEQFElqu+Eaz7Xxo4bX7sbVW/5HZwQUxXlosobhIVqYXyXXc8JbNhCzuPVsWK/1kAmFy4voI+e+VRc274SScZL8aWiuXLK911ZGKKSMoVxyh4zB7jF9jM9P7Mk/K5AYxIPDoO8f70ZuBa/EXh9TP6Xz+Q6zvuSchECYlve9cIljJoPqNahPKuMMpX1/xdNcUWweHVknq6ZKHmsI=';const _IH='c5252ace8182a7405be297090c0a6347f3af2ab5737360f09470197a6d6d819c';let _src;

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
