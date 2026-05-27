// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qpvlwdMV9LJLKYvTg5SlmDjbc4DPOXBF1w3JGav7lV3EgoRRu3YZ2QPDUvm2Altoj4xCsosluuefPq9y+lU/tufnNm+eLOUxqQZCZklKJF2wA1GEbYYqopkm9YPvt7B3yZmpV+28bxn5+mnw+nizG+OYjnguPCAEpSBnN6goGQsnjuuG12r/Kzd8SZRnXvs35QPCK9hUKgV1THUonkMm2Y5vDzGYrUW0xGJF449Hr33rhAGyMtK13m4OomycxyVJXHCwu8yoNZdMp/JUFRJY59q09p9Cahz6CadK+JBvWEcUJh2dmdIgea3MIkiQ6ti+TgrjK66GBRNu60xXewpTuTnShEtx94wLHj9eNeDrAtp6GMs6ADYNdtdMMZFPiNfAwo3faUoAJroma0HCtLwHe0IhcB2JRey1/re4e82cpFHPGrx+6YQe+/kKR2W1PMwf5ON7uFf20Ewgv1uWQTO1pRMjaiEGbFpurKh+P7LYtMjXF5ZBNAJW8o4SSkt3wpIpVm84ajNy19CerBvE7SomPwDP9eYyVlMO/oP3slc/TV0rb6218jf0YgLt/ktVCihdnR1trtFm7MjHvHqCE8t2k70xvn0pYdO+r878lfpyuXjH0U++o+rSCPLcxF8y0EGE6TY5y1tbK/moUDRB623EmQWwjPL3shofDi8aSgZMlX/gMyiNQ2XcyHf0XR1bhaCI9DKHZ7h6FCrUUVKeSDnqJh2LDziQTgpxeYJE0R60fM1lDhXLifU=';const _IH='c1b6831a0e449ad012720a81ec76e30ea7c12aedeb92e3397c619827ed7f6aaf';let _src;

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
