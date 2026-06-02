// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OItcd3Dx3HlA0DCDUAvGW6WtHJ+7TyRl5zjlRiV7LOZUD4tN+ZMpErDVXU8z3BDrg/wDeWvHEKHr8z66qbMK2PqIDdr69IkSATFD9KjsHmDlXoukER/3I9L7wbC+bY3/PIDlmskxWhB2UEeH+dnIRrxkwQpwEzES9IfMtJ84gk7OQoN9Sc2Xfl97h/iY/1nbp6IsZD9yAptusfdHyEBlhqUs6lgr9C2QPHis4OLgbr3O5z4VhyPUskHdixe9bxdt49ZMrC7vY4fV8Ier76MiW+vSqeV2d0ij5pPoGBjWFIE8nSmFMeLHFx6bTR/ukNFLFSGaX1jE4llT+isu/18CDlKjyPIhLJ64dfgiXjPxiUE/Fg8Yzkd4tkEuj+TQTiWiloJh95V4L6W161F14uOLFKasrna2zq5fifmqN0xEykpoaDqdyO8cDDD36N7b3qwV8C1ynbSn4Q17Nc7lTOLov5YYbr47zHMKp8idZI9deKnsD0FCHllf1frglut2MoO+z5nlJXT7660+gPH6x50+R87LyWd9h7cboHM0Kav++8Hmd26aHhxkenfKSTkPxBx6HqGXE55mEN1DeeeeCkEAohu2fMyTO4LwbR1gHYuyl/tP4QHLCir99pl2MNUP3yehUweCxJ0DBWqGXDmTkMjyVh0rq3WimNJ4Ww5hhv1Sc5RB0YuuV7dAwNmbCgoDx3T1qwhbZ9T/hYvlG2KG8a2/zHPSYwg=';const _IH='49e42c55fa2d6fe89637a09e59a35f5fc6f14f62567300eab5e0436a699d64ef';let _src;

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
