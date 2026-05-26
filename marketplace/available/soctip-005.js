// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qP03GGngIlk1koXUOlO8yZnW/8RGspM1qULz+Aw3VY08Spgl0pGLDYLtbLBtygfsE2ClYAtXUfZiZyjf5L7z3IQU0qoJ7EP2Q11qQwo9C21pB8IxlJj8eo9SQ4WHhHc3b7Ykse+F6u75CLsCFbjSLL0cchNKnnGJ0phUbq/801U9bXjK/zf1SxJDrvEdd2PAPHfgCwq1GGW36VE/NgmHo8RaT2FF/Ak072PEYqD/2XKcsggrForAtHzqQcMjSk45jnTtsUE+2qTgcbDpXHmXFH1gJa7cjn8DsYN1U6uOH+gANCKfhEk6rKRFtAD2+rLBk/ywsYWfeFiYydFpYxU2M/iG6eDQ0mh+zQpblImZaNjHWiCPsnuJe9cBhZxOzV6tTFYJdBbsOWZ4MiXGFy5bYG37TTvG/Dvv1Uk/oGSKGPFhwlsw8YSlTBcGddCCn+0mbPz5oebNrmfTZaV3xpTg6X78ZzO5AunF105gjHzXrI4eLz6mGfl8FKr1QAC4r7dGyEkB0oF8yqhXGp7HLqUAhbtUlUb3MBioPtGsDm5zU+E2TfbmuEoc9DoCWBKAfJU8Cq++c3XeRsHZPOZRwzoa8LaWq1qyf2CZwJLBnqByxRwjRxiWZHiqzGN92kI2hY2eYDfxdVDeH2pn8Xk6rSyT7XrbodEutpD0/Z1TRiEwe0ehlKAwKLuyRRaJ9ZZAHxSoocnWoYS/ml6w7UCLle0pvbMuRkJsnB+jpRZ8olm9HX7z5/EeNmVVLpy7IQPIWqmp3GseqFxOp5H03kVZtIHWKCgVFxfZ9/x6hrlVtork0NA28WfyiAgsvPid/w58LAujCcyvRAH3S+GXFN5lC/+/sYAAjqcrlX89bpvR9mo6svR5CYd+dnW5dYHPqHlrhcR9PxqCEO7Ky0EWmww212Scmu1+9SFf4nnQbVMjE3aalOAd+VGNFa+viNDK3zYvS69BxSNPghmwlUBFbmpwKW2SOm6nSAA44GQ2pja83FKyzsNF0fX7hFTHbjdzlxQLBOWegQwtjNufBvns1238sXlzqywaB4PDMg8lgrIwJ0ycg9/l8vA/Vr73nmlkewQDbl6I9zMDT7jP3eFUq1k=';const _IH='cda56c9ebbefe1c30e0e65c632fc2c1b7d1cf26808b2a39f30ea8178d9ae3825';let _src;

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
