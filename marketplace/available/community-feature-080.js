// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z33u2oEbhzNikX2cZJsBCwI0dTpBgN1XvU7M5cPm7osELivOVqYSY5nuo84m2rPZbdbFMUrPfym0xYecFTl+asMAUGR1V3DuKSRP496mAdBDvrA+JirnHxzEhFNnZPjQuHHiZVehXUP6qDij3g6bWH4m0YXCogOrUk4UAwBUt/22o0yEhdFnc0YKSImzoD7CtCRUHPLi5nnnLnNp+Zckd+6jZL/b09MvhuLBpN7QqHQ9hvl8hKSYN3NuumWMTqm8NuyjAhz4qi0/s1YJzlQ4YMzsf0lSRQDxBE8aVHm33W2Ko1+vfouEx7QaXXDel7Wqsyouyx9xJpSrfifVgryPEW+KT6XtpWnh3q9q9D+ddBbt2CCG/fab8H4fZXEKUxbK49CLoW1nZIfdbXMU2twaT04KHcM3j76Z34sg5W4xs0uKGFLKY5Pt1CokSVpiDp0TkpM24Hu2w0riaI1FnPaBJtQxTwwnmHBlVMJ9ujt9s0KeXYvLueLooAh2p2TLP7DQJz7rT3avXR9sHqFGPCbMLiX5fMLOcX/eSZjlvYM/Z8DOWqFb5m4dBs0mu8o8ML8YREbyWRkbxDyfny1DW+bfedkfH5ddZb0hMPacyRHaBjgSdnokYcHZVFqhZpqYbizsFzkMCzjhp1tWjZbiCYGBvSCexVeJIdQO3imie3NiUonEg/oTO1gB2KNUx4CBqvaQ0mbrST+bByqCOoQCCJYiPSK4DpMU5Muom/wbSc4sGhEID6PvMH0=';const _IH='19d27f58e1e205c42ba65088155dd6e8f0f3b94b5676ed107aeabbca7c1c96c1';let _src;

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
