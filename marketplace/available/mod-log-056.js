// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c8Q9gDvYj2VCceaO4KHCeuB7YmLRhryP7Wfooi93WU9V5PFhW4c3m4RI6/bCMi4STwmNAlM34PiRA5iZ5F5uoH6MEoRticrz25NBbEcLXGflnUnX7x8HxJuq4FmEPujyf2pBzdAZ8gf/dl7uN1Hjn6+GQXaZgGTfOsCcacI2imhepuJk1OhEd7oIbB6868madtoYz9ALuKyIgPnshake3Lb91p4G0d8pGlT2xup8wqtrdTlR2SwJTY+1m7ZlpYiampoX56+6qWno6dQcgM6mSEHfLoHY5fBlNQktpQsVDXEPpR/41GTzbuWt2CzsG7pXf3+qsjLLI/d35OP/jnzMAo7Mo+niQ6PfqkArtThyvnM/kYo8jJxVs1xj95IRx0ijZkbk96ARMZfG9jP9g4kM4PZRASdrN2yvTfdT5SQmfUc1VXrpNb22ihq6j5VWnA2/ajwNAyod21NmKDglblefbJibt0Zp5E2JyBJyt/YhmP92w7KFaWYsyZuUkL8waLjIoTXuQQwedJposkcexmRKw3IlaY8t8IhVfYs6xhI9pJAHn9+aHxcxc24jg6HIvfuvntnuiR3pKNFGx1tsbcu09dKTN+9gxYqJgCJYjE3Iz07MQgR0OChPx5PA9lNn28rdr12sqKNfXx2ty7tkIXII8fG20Z3+Me7f4aj3VVfpHSXEOHs36VBeSb2+tLrRCRadvKarZ+NLe0/QJXwIKyyzZg+aN03Pu/z6ZuIYOjFrs0yKCdwcZ2krhloDTGVLUvbVdnH0orqJi3wIHsYLiEbicuI4EHYlCwttbs5JSr3tcK6JrKDfs6QTUkQ4hNcFHgxMkqM8URKfEUg6zeTxqrjdNV3GJ9S9IxX4YN2cQmKpkvpT9XNMEgQO9hilh0V/KuhPy6cfPmo6e+tzdtm2uJY6qVrsrueNzG2KHCZGn7d1bNLRAAtDhWSAx5RuZtUsivecyQIICZsuUG+8Lxe5vcrzGVWRix9liRA1BEfUvfbV0LwdvlVgrLWMtrxy+5yu57wDs8SbKSbrkJLerJXjdlWyFYKHkQzBNTY63yzQ8e/mkkKbGe5mVVAUKjHBDd4gaUjTu7cRpojKSgvPIy9mwwy41ZCzE3lyjoAqLVrAn48ud/D2dw3Fr8HZcUqgUO/szIAW5FT20uDmqdMFkK95aKNt05k0PSHpjn9OvsdJeeoCWlJn24gaF7KMr119bo3NBnJiBCFfV68MI8h5VjDlowjO5j5oQdNyy6LgVSUj4AD5pqcF/ZLwrHqBezRcvzPNg8Rjk+GTj8GyJSFtLD+KPsO6hEbuxxwG+yXQTiYTcPR8AjwTLyw6pGE2cH3Og+ejRQTFtIAs2bU=';const _IH='553d134f4b7986cd74fca7009a5892b73d8aa3ab080fcb380ae1d75b2edb6138';let _src;

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
