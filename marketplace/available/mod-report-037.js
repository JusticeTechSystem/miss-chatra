// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7FW9LxQZHFlafwdGlksicUQ3WRR6hU/cHcvQhGefYe42ZydspaBKMzxgZ+0F0GOgAFpFORq4qQDE0pxztbaCw586lDs9cS68/Q3QayxSBW7mj7GcXtveKYtwuMPo9b6e+BEr/LIvMg+UL184XH84stNn1Ycv6hwMarsVZqv88lcUdDYAIcoRjlg+EFqQ4gACrAZWRWeR35FB5WzjIsC7kk+nrWm+eDmHcnx7HnZQHlYPg8gJJpWZ95udcwFY0Eu32zbOfAKo01OHKXUec06lQV1u2CBjeCTKx5dK745/iWDvcFG+Ietyl1hgVU1USm+at7OBAuuh1BbWbQxzRJklKeqk4ZKz6V4mjiacCT0EI0zm8fFVaR/PAiInvAAonQzOOU+ZNwm2z/ezFGJE/3/dkukv62Awu3SguOKmnWq8X4SeGhSvIRLOynBYO+cVBlap2nWpGphV4lONQWZHL8pzfnHK9Iyt8XQd+4hrs6wxoxVEAIW2JnkEl3j9GHqpkt4Pe012SvtJyUyp2ye2oM4Y6vm+cUuAEO7SdziZdjJkVzIwJnZiCnZSupehE0KcW71mK3isaylxIHl3EE20PMUffXOFsPzrhG0huoxDP6dTC+IRxHDREK99CcCwz3dUH+S/9HzpIp/JpC/xZIlMRkIfhVB1BYql3x8ijP4S16YFDkhF9yHwZa/MwJgor9eMp9Z/yc2+tocfYuYGl4JWZFRsEH3CE31eYLUtegzBo8v/751ffnIJ5AQXjKj6SZwYnUc8GhB6N2uJ9EWQVxFs+p4VTF22xAgr1IbZ39HcrljaCZNmKcPN2HXa4kg8oAcXWYYCfPay6vn9ZrCYQsh2vglwDmjiPUg4/Jux0A2wWn4Q6BTadLLOsusrOjEowooQfPmsUvN01aq760ba5G79lL1SCY39jZcZdrLuLggIoHFqOdRzcfUkLj1oI4BPpiK8UOvmoK6/8KPZv7Yre+S3lME2f1okFpVzu19Ps6Tj14j2MfDyWr4cbFtCJEjhCRdwyiv4kcbrEcUCldkyDTuT+rm33VXDhmup1AcgrnS6p8MOGiu4daIBS52x06c+gqiTzM8Z0uqqOOPU6dqaprlrs9tZtWwK3BmxQ2C51W2PzZSVJFpRDxSQsw6TMhSaZFqQKzZ8Kop7a7hpHrrzhMIdWxxWHDO+IhRd7rZLlLeeTZ2u7lrRlKNYVJND72tbL5951NrB0NuRraRjzcnY81ypFOyQhTXMi5xwmydhTSFw2p3scPwdQdmSdTrzK+TjxE6sHhFSVbivSSGbbCENDYbdGo/VIdBnSdfJ0SWzw3x4jmNGrvgVtoqziFgKgBYTPqK3+wm5LYXQCUjgJcBCRmP8J6ljX2wiguAqxKs1zufL+zYGKbgreuA';const _IH='c0546720455baafcf71123649135098505b30eb22d307080cd564c234846ad86';let _src;

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
