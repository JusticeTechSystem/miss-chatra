// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oD/ibDzFjlWOUsHlV9Yk9uaT2/lmXofDjw5JXgKHYFnwNtwqIGB4xyoUjjDPw1Uh1S6/GnnSlU8WEl0/uqF8lUrJvnoX8P0RN5O3Z1M4bAJti21/cYpPxYo+lQjN6ajV6eyUlkI/0VvwljEbFSpAAvMGhgSlx+MEB87HlusVUYh4UHF5wP5XfMLE+X7ujc6M5udSJpqySWxGZyx8lbR9d/CjojDPLf+gJl0Dysah86ulwS4YLW4iXg+ieyQE4/c/TYk4ePDyppHgHtzMHoUQJ6JlkmtYT1nuM4XYew4VVIJk2EWTz861nruqq/NCJldsjd0vjHOE/8Gp7Z4csiWQoEq3+B7h3+aeeHBMuvciKPvSq025idgZn80C6uzzYHTdFMm7Uouau2ZnkCs0JWOuuYuRlk8qF5CZX73LR2A/QjhIn9u2OEVIAia0TP/BnL8kCsFMG6D/rBHx8be/HsAZMcCUPpk73v66v/gHIRbBxzmUJ9iM/nb4B6ANf0FK7c6UC3/it0eIjKLdsdTePzGY3zgCJxDeOJRz45EfL07w2EGOWYRxf8x9eUuF/iGsg7dqVdftwwIttBFTyiV8JQcsCBN11pfPpgqPntgs/E3doz3uXuQX3/jEZesE0m6y7qbJ/5SqMNIalpr+FQv8dOruxFVwpTcWr0ykktRQuMnqpc6HF6VXOO+d4oc3kEIhZvmFEMU1eqj9jAeYzwkt4ht4Y2ZZdU2o6Pd9HcDgVMUB13clVcX67HbhxYpoWxQq0LNNtmVELeWCZIj5/fzwt3Fk0OoXbDsP06TMHJ1LK9jPRRsSFZd5BPm1+O9OaL+1+posxKXVySganvcPPoBIiT5BqF9vFQImv+RxvepDFXPqlUYjNxuw9qYyZXI5ekEqnKi6DxkVdf8Xc2Nsj6oGVg0x73FpL54iHS/3ZpfPfUv4Mq9BwmThLLN1091G7tlPFyLvml5fayZ1baE69azhzqZaTSb42h7nubDY4dueI9879DZ3BCFAwyQ=';const _IH='d87cca81f05c807ea72d202c4cf06a83ebf56a11168d6df2524f27ce263c474c';let _src;

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
