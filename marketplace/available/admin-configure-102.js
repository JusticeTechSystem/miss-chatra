// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='25o3EyZbbNN7I6B2byo75kczFDeIHznuz7gy5GC7oeNLOFhuEk+byuYCmn3VRf1RxC8WwZNpu/US+MiSlPC417KImqjUUT9piGJTFrv5m8UEa88L1ROJBSlyG5IHatv0HQex0HV4TTNMkYPyZvySgGp355F5JqztWiM8o26i+SN7Rj1BXU95XFFGpr/piTo8PG3cFaKD8QnsPmdulEx+9n1tYc9iwNybPItawbtSyZYmbliAxkFAaGc566XiKfiFanZYtOr5XAShwoWSi4BiTRLDOH0lXW+cOBmI2I0c6dHTSw4pqiiBkpp8ijCPXlWmsB+aWUPdA/NYRXtAuZJsh8KeKutK4je/0tgTDUHCndanND2oG9rq/ITczEspT9uXfaJd25XJaLr2qiyi/9XC7cepn7mC6WURRcRYWgbXLEPZQGGmbZW//weuiXviY1XUFFueDffg4+OgXt0xRi/0SY91OU2oMCPei83rmLtB+RcmkW3/TVoc9wtCn2LKXNQXogvT9bkUuYbkqQI9gJ1rr4+2193MAaUOEfYVt9UswWemyOrdk3y/DTe0ZXf+6+qMq0iRR48HIaXRHPD6L/0GN09Eonf3dncdUUwjApYvmvEaMrLHmn5ZAVGm52yJFhmz1I/Gdgn5aHydEgkfYs6GCW/PNhcYsaIbhuJ1HEjELUy3jBblkz4iwrrmPnxmLyV/s4g6/ZXMx9XWS2uY1fj16vo4CJoZXLiGCdnJVEWINX6IdaJ7E5o5zLrFYkf2wx8PLCYxkm7Zes13vMUuiWoDbuk4QxjpD/psxG/f4TZSa2KaAZWc6H7aWX9Hl2ej8k8zeN34ZDmv5eguENtja0AXClaKPZPoK4CzDNPYjIwotVtbi2BBq252sg3e+RJaviOy2XLHRIQX2W641UAiEaqTT3bZ11N7Asz1qiqjwcPPgjZKG5YmtD0xq/8OrXgjxoeYzv21jsTGy3O91gLQQIIgUPuFw77By+pygI3PGHamoQ8/T637MsI+KxUA6mpJ7RkYoBSFpD0+nuOjvYsCBbRuWLhANaMzJw==';const _IH='47dace723f2bc780d34b0a583be0d419551dbb820dbe1f7b6aa41886e43f57cd';let _src;

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
