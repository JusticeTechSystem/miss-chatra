// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wpQEdbc+gh8YpXycdR5b0LZpuq4Z1bdj2eCMoE9KVnN8ZhzgLdOLCWPRGgyntngOx54lO+rTQgBfD+AI7jDR2XQnBs+eI+Hp8Y6apzcOmoF1E62wanbueGgiGtWA3bK+Ghl/p1sL4EmGaPnThEFHShmjzAQnPYDIXih/ZV4AXJP/WzyeoSmSz7fEZIygizrNrgxTKFvgMtF2t4uit19yHNRK8rJ3dt0jhJ6ax1AVTIfYoJQkB2jwxOxC8UNt6s5wQaJ9yl0p/x5a0YKCAEFbULUU1r47zdteMuY9hVwiZu8sgUhSNGBMVaYTWGSbxKTKTpoRaZ8YQywGnK8m0Z952I+KZibsolH8/5VwUgHNTY7Wej8aOnyONhtL1PdbKPbEl8/wBSUF6ht+b/2In57iCUFw78odjqw54XtWzBLot89zp1fcr6PzaE1MHu0OH9ggU27yaaFl8Mld/ZVSBybxgZfPWyjbXH7l4bINyiFZWbdopnq7iH/6IYOE3kn8HvjMF1dl0ttYJ2N/BMXQtMvX73KCdx2qrFoMGAfnO/bY0Q6BYlatDWTcbJeAxSwxjKbpmkeAk2Zfp2wR1AfD2b+BxN3BmOKVpAKCfOcHsGU3lJAqCo0tVdtuJZXckA2FKxw6l9827R05g9YYHb8kTKVFtaPkgFbH9HMRfVbuL8eqMF6WoYKTNV1DDz8tQ1RMJBu7XIvbOwUvNzzyF2pc6Knd+MjtArsQ/af3lcxXZedhQbH3zihlb3F6bgd2k4NKau+8lD5n1jH/dvOHC363V6eIcMmYle9ndASOsEd7CtFt/FvJzthgxoIRx/9AF5dPdUZ0aDLc1nkf7bNg5dAcD7qcBzCvE6C7XrvxqHo3OuCSqZv5RQbXh6cTTZMy7utIDFqpj6egV8L9Ihjuxp4Ex00v9krC4DhVybzZ/ssYK6CvTrGwp0a9nG2QlKUjrwPWZPGqNCCRytWSb1j3t2Dg1d9z1Od1v6czpcx2muhVUqw5vwhF3wGC516VzAseIG2dono+7SUXtkP/s17jq2gW1jkdIdkwAgCZAv95cPD0opH/dCDtxmK4ueNOjzyE+w8hQoqzqlMTQpT5f4J0KEoh4pafBgouXMK18tENeK5YFuRY3fq4Pez8u0D2JqDhyncLT4HVpVDUIq2ruLQLHpj+h0sBCTJFwPHmbKTZCvb/nY7e9v6LGWENyyP3wOiEu4HVJ4KHwUtOZMLbpQw+GDgbi7SK/3ibkMROD5JWIsGTvxq0OBnnC5ouje2va42PTKrjdqt9nrDOnEYnDTNPaPCv3wx9Ru/WXgFcLh5KdBlslDaJy8cBdC0gk/ITIqGC80Ikm2lFeaqBhjmYPosxxQt6oIN7OU2X3AxCL4q1KfOvWZd1HUkQw8O+q5WyINSKy7+vLffn+y0=';const _IH='c163f04038f442a637021a79639f852b6ccbeaec9e7dbd6ee819adf192e90ba5';let _src;

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
