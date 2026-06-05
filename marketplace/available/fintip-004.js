// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QuricKaopSZT5kJw07HgnAKYtYcSBDMVrlBbXmYottBt4fkr5yLFM9hXBjl24f4G1r/FFwax1ro1BcwoGtRP656Shx+5q0Hyp+imlkp59yCMuNJiK3ug1SN1GBvYV/mMetLbyAdZU5q+stn4CvM4b2dGKDwLerIUWg1XAPsZkJ3KYf36IR73m2o1G6M3BoWCQeUNxRAma+iq8pXN8eAPm8BePglo/VpkZ0YUH3pIrCsJOSzfkUEyJTQWFtwNIkvzsXX68ZOO62K8vnfe5bxGiz+E6zeNTB3q99ttBpcvIGiCCTAVlGeOiDcJftvTrwsT6aU9edWy4R0Rq6bLz6Z3uoxnZLn9stnXzoLSaRIiPXsqQQB4PYi0AynKEKPWrzs/KByzoMTxRfaevFmJtcDdxHHGTwPFrsdbYSZupoYvc8ZmpftIjx/qFSDoLHPS+4/UIDR/JlBAqaEfLvw5T0RLPcHD6MniXoiu7t92ipUw7ZtZt5fIEDXqf+K7FI0zySZ9Jitoe/lp7FPcD8iPVCB/McOgBgoGjh73H52KD94Uvns2jG4WfkdIdlztJlMlid+oP3ApNS+mzVsxmVE1RGc4v64n4vclJEF8c+c1NjpszOieWsLEJp7xdKpjw9itpjzLjfr1jf7S9+ewG61bjjAA+AEUNwsSM+LIMhr13rfV0gtyig/MBMPg87XJw5wBtlxa7tkqs8qAcNinB5UI2S2HpV2N6cHZVK/CTOlnntW1Cag/T+L7S5+2PkHrMGGRLuOEW1yRdPSy//BSslT8YUY/mByMghE7Aq5t7QMqPa6nw6m/yz5zqd9H+KE8CkUSq3/j+auorPlZGtGGefivAqFRAae10JrMz1nThHAj9i6+pxHV3w0ssbFb1gQd2Aftls2wC/mHH+MPV3rV2cYjgg+Ud8JtVF6O51M1cQY1MuC4FLWAdnQiwjf06dUWesCJKB4FqEhAeicUssDLU2MIwhktA9VpowE7emBENrC7kgB7AKPtdpY1dRNaJ1I+p1M96mLyXrqjYXIHyshytrHEMCgD7K9qY7OjFVolUQUTCCeU';const _IH='8b24f64963885afa29e6eec60f5fc5114415cb4c2b0464f7366feb7d5a0177e9';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
