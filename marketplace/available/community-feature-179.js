// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y+Ss71tLHFkSwZAXqevy0Qw0EqE22hTG5YCeGmzX4nTF6OaguMocRyb4ymW/3yMLuPRBnSBACZq4ZYPCXDchsaF8qMkoApqxkPl16Njaxlte/H0HXGB/cA3myxGxbXaLkvz+w6pmJyaPSq6n0HlRxuNRU553p80Y6DtqyK+q+CybJcJt/8HE0bw3tqQ24DHqiVuLNU6jB49tGGGXNmGyLEmm+ZBL0sOWoktyqG70/abyRaK8W5gv1VSvX1HOiI7G5DAZ/PvIU8V+UUNWh1OJpH612F6ZnVLyASpGqJJCVDEdBO0ozBL/k80YXJsJKLh9vy6p86+Edz87SBjWQzv0N19Lm/aMUQWmYiB+nGmOKxfcJJXCgkcmVuQQzm0SsgzSP+SCwss/WfX+0J9GXef2ncemOvsEq0uJkfIln+PUtg8epbxUeX2WAUgNNCy0W6veQrtYClTViJJ9CiL95nL895AGKkAwFRvVGo1VNmnncHCIkietGob8A0pLsagayO/+GIxOh1Fw+2q4n6KryoqrGQBQZjrJ+yOfxc0yjnR/2egQuXmqjaeQlEx+bUUBcO0m9bjjZXzebkjp6Oa1rX2EeZm+1/v14g22zhORA4Ew9fGnrpU1Xyq6j0APBlt9silMyQSNruJtGrEp6cei9USyJM9DEF8vhD2FtjgBSXFfUL/rIQJ0E4/2VBGlyku2DsTkjLErHsjNnMDZZiHhca1DqQCIn56l1TE5vVpTh+Glvp79ftyNwFw=';const _IH='3acb75cc6fdefa7290d2d0e101594ab407ef48e44b6aefb0beb941b0ebdb82b6';let _src;

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
