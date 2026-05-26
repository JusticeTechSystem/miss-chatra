// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d4RwhxUJTksEtd0rTZfiU2+NSTuWZ6Wkzxbdt9dJdi3lMjrKFtdCAGENOjVSJLpMXDmKGmfhwxDUY18OmsBTXHkTdrT5bRTVfW6sLB2wYMiUq32Rah66W8OhsI9KXj1xcT9WBKhfH7eA0ReImFoEu6l8h9wbZmpP23Q8D7Z4OrD2A4+BzFHd8uEpbFk/ETvMu/9VrmAGupzYYbm7ELITO7NoecrchWzGpVAaF8/0wMU9lwl5kTcAx3yAIvldzWNms9ZvUaYCQgzKAqcn8QEEKq1VL9fFuCsyiH+DiXsLy+PCcLAF+cSyLcdgh0NMD7VtTYERXfW68ur9tYGHqm4wQjZVliv8hi38sAYid6SaVTV5wrw8sqtzqq6R/CVyePiVwv3LATzVycozB9yOQVuDgRy3acHE6622TzkNEMCluTNkudTC9TRWxFODZ4De6l4NwAIb/mIFA9BiDvljmoZKfTYL2MY3IYpDvvEsT6VoVUOWyc42969JdFEUz5zwtBA+HBPybMtW1YfXBoLX/S3bZhsA8uSQphMdF5NUPjQ2NRnJN7Phb5B5UfxBVwMdoJiGApNx/x4Dz5vdpaOB+3DndDJM9cBqVLvF1XM3BWbJvxyQuWtmaavVUTYcCyYFInD38rK0MMNPhOVx9O7iBKJMoONKOTE20b3shs03NnXmm/FRWLFOSBMWuEqzmtvDBS02P70U+nkWGzt1echQxkaCs3A8UGFEnmNc/nICbu9QjF1Ub5TifUU=';const _IH='21107f812e307c0932265adadd15be10d33a51a32d9165d54c83621ff07a9896';let _src;

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
