// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5dAP3oZYa53lWGprIM1JIUw5sLIrzw0MKWb4qtcd6IxKv4SzpXW3J4wsd2ts0vs3cCKuZtx/A3Hwp6QuPMYk5GbFLZvsQmV2nNHpWKg9wp5conw9JlaWVzMcO/Z4p/yL0GEQxyYTuYfTKktk1ROi3BUrbW6pypFi45IblFg9YkKiPLAzWxIkpu3EbxneqBNbP8aKq+PnDbSegUP6QFrMmJR0csDQVSI88669z+oWrL+ur9YSbvydgKbyADiKkswdorr0s8Sx0n7lJa+idXQ6Mzno38yE5dmRtze01lU0sYyTwmwVuOq9BQPok2ZgkckU9WVuvUKfi9FrhBBzg5EhtYgmU1RcUKuMkwGQYo/XIrjhaArhpxBgQbXyaKhqBBMF2sSshuIvtePvIOURUaaa80R1qMA3GaakBRU/LEl546H3Zq9t+xC4RHFeRAeL3I1ZfeiDHi8U1xr2ps8Txb+OMhXo6VOLRHSRdCRXaBZb/vqymzTmrhsEc4REFZOewUXf/G/gAYAP5F13x2rs+5E9OLMkkvAduEz20svchrbMDuxiy2ZbtSEBve/o7VhTvANi18kmHw4x5NTvVO1uHkbKOgcmQTi9B4bbJ+33cXtWFI/CwNCBiqX2ivpcP50SFGzMUGRXlYtYBnOKeufEDxv9W9grIN95ikR7oV4V1kY3S5yOD5AEqWz9RFaf5bN1pTx7GXjZztfUyEAYbGA3Yb2MlA+xSO8l//i+bUDllmGbrVadrIwMxlBCCNKjCu4AUd9GeEdIQNq7txyHu9AlKpBrBw1jl3zrzXVTORpenucd3ik+sk10Pc/viyz0kaghLIMaBgl1YUqvJho6Z5nmps6pKxzrFsx4vVHWn1XdqyBXN/DuhzAxYnPkXHM8xC4u1IsQNxYn5565+xt195mhFVYewqGb+zT5QW6NF7Dc5S5H5Q9egPDjx+BPjIooLhwIraNfi35y8h65V6FrfSewv0EdARHFYExGTJAA9bICjeN7/QoUhKCNhSc3QwENoEaQMWu09s3LwkSfW2W3PxKHL1vSaREc0caaazPHmpIpxAKqAKjfAhNZhUk61ETxYjfrtcYqfoUmxaEvNaMKBjJ5miV7iUeAMBz52AQdbYRoP3k9D9bz+8p6I8Aqrg4cVa9TTdAsEXUHI4CFB7K5LC/NzLiv3K0CQtwwj0RQW+fi//MZeTD7pEtEVvzJH4hXUDA7GM10EoFhw==';const _IH='0ca40e2de097387d0f488a3fd2f6e00cd829723047f14253af0292362918d64b';let _src;

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
