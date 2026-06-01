// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz3wAyR1WQRBdQvdT7NAif7sFuLNmqRSLl/agLXZcJRBTll2NAMPsz2oNYMP18HcX900W6GzyS7iR89rN3JmS6weGRMEveFQopmpLDfqzTWm7y+QOlRH7t1kOyRJA+f7ax3giUFdfA+5TLwsCS9xLrYd5sktg4TaDK5Z6gnzdf6ufNYoLcOdqxIuj5/ZNEbvSO16PIZnn6BKkmw+CTfZ/eDMrVXFhJHfi/CCZCAxL/tAKmoONIaLIbJoXCy2r+/aHn/8lU+y0v7ssnYwi+irAkFoIZLPVRBt9eVtyfa62rnvb8/rLsCfmHoUKb2UFCyIaBHjjVdDf+9e2sSxOKTTrjRh5XpOxQRmvaaJ2po2mnmwb4lZ9V1O79VfYELS7YuS6J0jLNjc1PJrvAx69k0y71yjcmvYcZQIQ+tDU3h1fCqTeE+iKoigGQzP0W4dJR75Rq7vxzR3Y7mjUnxyYrPlnp/KGK/C4Tj55VPEQymUSyCViRNGX6xgEHlKDpsf75a3Co+v17x09Ez3cVzhXUQWhQXVGSayVzP4Cb8RWW8G994rlFGwPzV/f7acydyV5bqTfqOGPHkxQixdD63fFxdaqrT0QXgFesTWcDE7I5u9d+vNJuhPwdeQy/+su+ETA9td/9/o0iP5ly+SSPwcRxdpAPlTeMHHvmo4ws5vSPhITUyE1EODnXqyz5gfDDUV33pzIfTheZGXMntHxqssad9tHHPtJo6TeQvGHXjPyo2ATIKd1j4Jtvbc0BYOLvqo29hBHGdg4gDPS0q7cuFPTZmrG3ChZ5QQUUe7DtW/W2AD5T+cPWo/zJ7qDB+hGb+A8MnJj/Qy8Z/bdBSt1xYM0oxgTCEj63Qsa60/hb07jLAD6VVoPw+xp5/lt4eUxR15DOwc3qJSZMum1Vtc2CL2F33RzhwDSpYd8FnMAC7UQnwfPhV0Mjgk4IxbgT8=';const _IH='66b80c832dd452a20d7a7a795ba205d3308f9aedb4ece958492672136efea672';let _src;

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
