// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ArZcVsLb7wwEePPWZerV50qGRJeAg/9wlCliBspTm1RS3v8DLT9E9wMW/xTiYBr0bFVs/T2SGL0TrCTMvVhC/TcUDdu9YAmOnQnp893yleCSkUBOPYcg6hAIdigDpJTu9mKnzs68+hW+ZHOGhpBusVPz9KuqNb6d9bNb0vlfeE5lKDTWhLDuZynQ5LtWAkYiQtA+JDn8b+ptuy6JO5TVnvnCAGnCmBuXkjNrGFbJyzVfpIlR/4iIfsXdb/bohhkpVW4/4lCfxBaPGsunKus5CwCj+EDj0ZlAE4fp4rRZR8/nKCqjadAxLAP7Ge5eDqa/fKDqEUZmo2eCE/+e/tQHRnY/NfJgtBrhuHYIOOcgvJxQm6MdaOzjLWm2UrRDI3eBujjjxkTMP9g+U9PbUKpw1haR2MygzEVoVbuzRVqoMjdpK9+f3beBP1wuw3txXgwshl9WH5kkvJ9rZRGh1XW+ExuBdXrJ9xYoISh5V8MtJBTCiW/gxa3bId91gAYmyZNtIldMt+dewmvKU3u/Yhysk+fXFDOsLG5hPcSMHiUDgXP4fOIxpqFB0zuVbgzYoBN+KizDliCThcQXef3DIo3DQiueig==';const _IH='942adebbd4a63850866a63adf6d3bfc914f4ad50671064fe811202a448e6daf0';let _src;

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
