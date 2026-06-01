// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwiPSUGa08v/S0TvAEgCc+HlYWeK9r8WNH1zzZte5muAWTQ22YhSCnJ/ZixLlXTHZuzSTaz2RiVfBy5HN17oA03uVne5tQgJ9GdmnJAj63nrylwp3WmYTdsCGfh7j1NRK615Ji06Z8nqULzOmDx/z29dNHn9KUFsBmD9T+FGrOG+xNi1yHpEMNVYRSQ6jVdCccB3dm+1Kb4TQjCDD5Urt9PXGmXu44joWO0kLJcht7ZHwEiiCj+hpDwm84vzPITdfVUUjXyOSnxoipgqOh7f94SOdYSA4OmZ1fbReMHaUMR8lGOJxNSpZZ6zYYSkq7YcmwXzY9UfoN+UCskxygoatcGwosolQpMoVuEt4S6pRVlYyYuDtsw74oUVWLNY3z778+FAUnKLGuvNHFIZ+entEBuOirVkKIpc4cNbQUEpb/9cOBAfYDdSwh1O/tHV2PyyotFYsLz2PnIW9h8b8tfGEVZzXWhONuNO75eCfAFMhBrJqyHEeokJiQPEF0lgMCeqUFPwYWNLMACtq+8lpXV7k030o5Zspi7PE34GNqe1w0jiBjSjEqwMS4MPJCYLcuQEYlW+teuLVZebksd4SQY/LWOTaWi61THvNaoRYOzpENjhbEkDk5GY+fBV+K1ghTO6dBOQrj+LunUQ9nrDFAPc7EB42waQ5eA+l10U5wWdl7hMJm6q3agrGJZ3Jc/RzEi6fshHayR6ZOdSOiMc6u2jxbTkQ6sFqDBkJWqSxOKe+mvdqDptjDRl';const _IH='506b5023059229d57b9ae16e312d22d64bc09df45c75c8379718967d541b95fb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
