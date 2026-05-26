// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oAiXOyCpt2S6Z11g+v891H/4vdVlcHOmbv/vPiOGx9PE/9mCWFOK9ZYtw7g5/UHsVP00kved/8IKCl1IpJxjzyi6596UvrO2/NZh8T+LUh/X57jVd+1vsNGdlnhH2AKHarcBNcQoUGcc4foCB24omy4PsHkrmmdaFb0H5uvpIbisJ3rUuaxHAVTxh6r1EuWdYryRXgNd6rMeBugTRyhI1+5uSRsSfwHKN8C5MNczztYHWMZVn9pRvCUWftSLMzw7hl1oRbbJVW1kflRspqDDZnuTxi1W9xOMvwxN36ecjBqxFsYOoLtKYamE4rcUa1DTZ4EtUPLDcRV9WPjhzEpVbWHmBSS/QPcFVjtU+Sda22nmSHX9dZPbYn84h8Ad/+M5A9Yol5wX97XUBWSRiI34KsEFGrR+dVuf8YihOPAvrCrFzwrz3CGLC8yRXrJhZ8Pw3kg2QgDOM8EVSQFdUgtbeJdN5oTjD/EMwwCo4CuHKsPyQXXopIWS1H5m6uqA8tSJtL3MOTidfBO8zsRENhjGSjkecgNuZ1m/HsOxnuPGdC3DgNKD+u/ZTb3FU45KTXrVWqFQrAODyy+eRZTcC/ic16+oKw==';const _IH='73b1ee542614fdedc4d395692de3d9830c3ea873578c0a40a6c0d29732ebb70e';let _src;

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
