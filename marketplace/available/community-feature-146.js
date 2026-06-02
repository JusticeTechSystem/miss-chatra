// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='27+rGODenlYQ6+cE00u4G4WTTvcj2Wc5KKD8nxpTXLbUvGCRyD64ZsZn2ksVrFR3GSVJ29RIBzmYTKKsA+Izg+N6o9I2OutTfkTk9It+7QX2UYvJkYDSM9G5es1fWZin2bkNhytKNb3W2g7K8UR+ksyIPJX73MRU5E8Yok5NHVixbUGWus8CPrZrAvMa3+USnod1AXmlSxBUuZwi0ceUQzeLCq/ouc134ArytnJa1ytN5zxhINZcCzGpsTd3q+5/3Nx1+qEXzTAW59Q7/IrugF0jwkCpRYDsVoGd2fEzUfa5dAV/iMJL7Abjq1GN5LOfbLpgTTAPsV5lmVtXl4+JSI6qeC0IcPvWyCbyUDcWPsiYaTseP06uPFo66mLrS5dCMK1XeCuEfEKlJmcNs+xlRkRQUpwo7A8NSKDuWyiyP+885NiRzer+qF1Pu/NpBQf8GVqyj/68Irh//tluyP7Wt1DTGV6P2e4GvuR2PSwFoG66RbihXUbzWL0B2t6OcaMu8a6z7jopW5/H7AuQ+gsS/tsm0eYYsHhNSjlTQEpM9yEMeQF51ni+tyXRuBZax/kndRqBw3nYyIcNHxnHS6thiNWuoys19WK98pKtNJsfEF81nnEXL8txPpwOL/WP+dwMroMUPvBDPLi7t+B/C4fAJnzXiuilmEAoVb3XnueHrAB2OpLIAyIv0NVCb4Vpl9H3t9WRwirIYzORGw+rC4LftK07cxLH+bHK';const _IH='66d1872680dacc152748560e1f383ca5c864fcb58222ac6790b6a8911d315d09';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
