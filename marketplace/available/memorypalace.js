// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V/0zw3cK2HC3S0n4XeyGuD6/drBr1kPm+yGteP2Ii1d9k5E5D2VR5HVtJlMvfVE8w7LFlD5XaMXU+df3BiaPCxCXrjZ0kNTeQhcV+D8iLTvsP3DnLIgez+NHb0gHzGD6iRJSFtPFyg2d4Lwjt1EleOmtwyipWRNg9KkEL+pzGUMH8QeFgx3ffMuZIDHIO5pchKZ3WjeaQnDwqja1DvsNnYZEO1b49UB1gpTzpJshoHnyr1mgjBbcv3c7BXVYODp+OB/4nMgtnG6jt0DOPnNl4XkVTYBVRMLO9CSS8TlhApSxQuOEXGXG/AFFVvCnkRkXcTKxNf4qNZSZyxIy3PlKBMptjkh97r9ZK66ZQ3cEzzAc7vaFtOWFikZPQlJpPtcMynVqL3FhbLi5WvNrJmbwEdmDtLxsYTieP7EQ+VT9uFdkNKBqnXRYqsa4EBWfkS1p+/MrhV8wTvW83aST+iSrU0wif6EYoqVVQIUtmljKlJ3XtJAe185tcR3UcVdc7v8eQLRT21pSmS+ohgQW73vfN3sPXHZu+aI3fmE5DnEYCZAwlahio2uLw1emyT6uOrFgCEBHrVTJRtXiIRbeY9oWyS+J3H7PCwHn1XPnylL/iQqJOAgK8EyTYCE1kSTV7XsqyukBS5s8HNB6q1D/u6LEDwJtdkNhvs/SWru1FykkK5ade+bQFs8r9jjoYWWZ8M2/dzMn4466uWFu5tpH/Ol3mRpTnCB+IunfSe6x1eKx+X5OG8DoAM+YAF0ZCVS320kEHjLZCtAZbxpP7bNV0AUxb39KdJSBABrP/72kmI1F3Y1Lf7b5tRaW+Txt8rut/Inn4+uxd3Orb4ZNH03v/VUyEmGup+tAWeGbEY5C48wEbHfksuPS4f+3IBF3ZYsB+Ae6j+jhlzxrefRY5YCq6mLAWmAeQKTHiJYteaSXtSFu2QaNSYlmiRWZAdn8eAuFlvOTWxqnJweiXwR3YvlanfMo9OCpcryezveJgvSPleU3B2ela7aJuocTlSojuJNL6SNLaTjm8IrxY0dmvSw/sLG66XfFhdjWc7qlTiDYYHVmBfsilnxo8AX2hYsZSsPp9c2I/JwjiP1R6d0uer0xN1X2Ab3soAi5f5snahjWIafltJbRt8zJ7Uz5Ez7pzFw3UW9NQPbQOCOcljMmgks3MnLiZPlQwbD/lQ708Ci+eHRM1isXkJPav0y/poocDk5tfTLttJnheGXPdkof';const _IH='aee16f33eaab32527883ed6be56da557487fcc8676d406a7e5d393f64354cd0b';let _src;

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
