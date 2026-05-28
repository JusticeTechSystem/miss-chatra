// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='79dQZ1fGmetwGUok35nDHvqXi42tZhtxZRWLYy0j8FyXhpUQtLF8HFR8naQrX7ljc3ykeR+eITOfZvdkOH3+NRGZXf2r+BzW10V/c5cBup/hB9/cWmdhErVnkjhnTZKUyxvR2Qn3fy967UxpGQJSJyb/BTH86tnIe1hl9VbmAnYI6Ng0HdGBQKPHvFqQd1OQfOxt5PtdS8kneB9JEPLg2PI3kHhVrGBll651uQYtdHL32/K97H8WUXn08kxgTbnoNDicxyY0yD2RK2JUeKsO4sBZR/bV17MMIQ36o5PZ8TgvKg/0+KPFzD+YhkpuA8/iM8vFATMzLkCv7kVf2kR241mpGRngC6JGnTJjjzRtktsylAX+DJzpxIDj3It5Brk9jtmSKDIvjlRKb+mWtD/eR4pP0fAblxNSL9Im3BaaMsS5oD0LbwmU4aX717/m32m5179NrykO6GqgNf5Pbsww6YcqkeP0K2tAQ4Uwh+HW5OeNNXp9em5CV/DRAL+98db35VjajDd17U7RQq8aQ19hkSkPY8cCX6wWV/VRzuS1WqCo3aLsId0r0RiE/4gNtbsbxRH72Un7qUNMLxZ+R7pStc5Hm78JdOy9W0P0JyNhN+IIYDyp4Ffsq6YAZYXDvpsjNWgUiWPgSpCfpcMQfbsULReyMd/mxDJEHhAryiUNTFWOdKp+DDWMEL9Piy/EJyLlPcHHDKF/Go6j/Odx2K0IeztIeuYkTznhwbO8Ffk=';const _IH='87b604d91571dc8ae8437765c3be4f160eff63ba297765a789d43693dae207b8';let _src;

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
