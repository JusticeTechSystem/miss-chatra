// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uNGNUnlFMf9gSdwZuR2eHBskSJgGicXK5hcO6WIErrO+mHWzhyNJzc5loAZhk1GSljIhNQTheLP0599PxIQWQTT+CGV4Cq3p1Hl5/mmZMfKg1YS7lZRD32gr6n/qKIiOwx3ePzT3MPAZpAAX6TxFu9U0lebqWsBrPKKinqsW32vAtaMafVPTFKohhesb7UqryDchazIpADGUgylex+OguD2X8aznLpeNCmac1hDnRqR16C/O0qnZ2Lf5s3sjDYB3bkF+8o/JzaO1x+9nFwGfe5Gfsbk1ra4zi2rts7TCHi01kFxZluF9zn8KF7BJABfgFs0QZfXC0m3v8nzzXsN5TM1li2U/gY8PhZbw3xp5HWxvO2cosO7NBM1CzMdBKjWyxHEQktrz2zONrEUdj+RayT0caHmdOPBXh3H9iAsl2+FZAjKcNXfilVvLWcqaPnRAN01Uz3wZZyIkLhAhaH/DUCUB4GA2mYkG2syhEUT+rSFoAgNMqYCxSShTQhfcPHTkJIX8li0kgjENsFr91ekE8dkDgJRMcG8yABUiFzM2ND2eVt22mabUVn2wReUVQZ9VI4n0yX5Y7FrMXugDPKYZbpa7TY8DBhrfEUH+kmBtY9PW6XCehwWBlRUM4hOw/qLpDjI+6xVMlX48Z4ll3XUShB344YhanP2Jr1dxGYhIKHZLVimg4MNHti27GpcRTieAUTG8v9/wOP/qLAe4RcTK+VB7GgGdDY3BgXKrOGjUgFrquckshXc=';const _IH='0431c30822ce7748d9098ff45365b85275790fb842759aee97814b46577264bc';let _src;

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
