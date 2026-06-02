// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ro58c+mBCnt1AA/X7gNVsR+I2WPZBjvl+nDJrapYIg4QRlzMirzsXYPziQ2LDkhxrOIW4Ma/dmd2IffE17h6I6TETBPs8PfwI9IMh1WaLyD3b1Y0AKdKaZNatI9C6wZXfc2pVLuZZN1+YAVhEShL+/2OaHRxkgLsHAKcv/DXmD1cnP6RKKD0PXM0gSrJfyS8jLhHrZN2i/4mInMFx/eCSpldMTV3X/ygxcyMNV27UpitGGqAIEgRbWix1s/64YS/AOObLJI5dvdVOOk1tRacyWVQCDKBgUhLgVEGANMXOBHqsagiMs7F1F2lSVwm4rH1cN2zQRzSoPYA/HVCI/uWQJaEVysTFvdB+42KtYnwfmGQSSIHWMb2qY8jwHL3a2lXmdem/W0MN39/hHdjMfRm+8bh5v8LK5D86+tQ2szi67iPnKmRMY/3/Ih4DHeXf0l2tuFGOx7iR0Hg/akmRsR7CzOCir+0t2s903mRBylJeLnkeot6SwoCU286LQR93CxdYu3OaJ5/vFPbOBTdvOqzXiCfMUOcg0yz8diLpn7IgDE/65HA9P04xtHcyQyDf5r10/q7dHKVZFhqNu7jc4CfuIiZB9Az1u+grWx0DHe7sRs';const _IH='0cc1097820a484503fd4b61565a9613cf069c4e115649a2fb72d9e5694f84081';let _src;

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
