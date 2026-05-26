// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xYWh2gnhMReObt1I1xSxAT3c1bryGg5l0NcH4H+525VWrZARviyE/f2BSaOWqDVKz++SjkHK6UwAZ5YGZon4IiBmqZ3zBWCRMzSkDaqBUQKfXA0z/zqnzvEZlW1cPf/qpLAbHzQdYqeZ+sUWCT9RQP4QJnQgmYQklmRSkB7aVNGGdTX7nPUy3fMActjNxla9g/PqjnO3aI/qIaFEpCsH8enC9rehV2fe6XJZwkDNjHx623yKMyeY+5pMskD4yTv/QsAMFDyXqN6KZDglwdlL2AuugAfBGrpjO/3jKOByvLfZE0EfSXnQxqMv4wkOXcQnjtbIwzK/ismLqtoX6jI/s5TdK123X/MtJCVAFXnxBzxa9BZSITPURmM7dggo7HwHXN9f41/guSXBXPKDwF8yluHfNpI9TubS4GRAmVU8g3K0q9X3LkX9EGmq8Tarcx7q3DqMQXWw1idFSmAixyswAjcLE4tWL2BMeVKy8mA+ux24OvuqkPfdYhv54axcaHcYwuwl0PrDy7mk3E6QpMf3kd714LeVxvwjuDaQMM/8ZsqI4/zVZZFf3TkeENNNVctgcO0iBLuZ+wU6LJNNVFHU3W4WVUGVZrO41TOWkqJxwTL83Gmds0BDSDt2g6iLtk9rnZKmHgE+vI5quyKmbFpZSzzwsLMtla0WxgZY/jAjt/dh9zw62cJPyEkurFuwlpQxrbo1d5uVlESZuBTAt0y/u1rxrG6WWF2+yV+u9KjQsMXEKBV1a16YpUnu/COxhE4FilnYCR4OU3dlyYM4TfcOk1qSX/5GxMt9oI6evt7/Z69hhBIxJ46h9jIcimEEEXwqYF23+Dao3ibp3ijro8ikNYz/eugww9Ih3ouo6JNFp7JcmwXdZQNqRvt1oX6BiEdCTubrqnfB402nTjN16dYkV+pZgKVmSIJTnlTKJq3iUSBtA+1DrfcSz6FsRwyqF4APJm4zbKklsyTeE2BMhs9xGzhbIRJy/ucpWG+IPBDc7N6AfDutlsw4Bx/6WiJ3qOJe092dj1Ky1d2KkK7tMMonx5db2R8QPKe+e72UTQn+Pe7GEJ3OfeN6bfMvna3ABGhlNISIWk9xnVWYQwAs8G8bNCAJis+CKtgqe9t5UqtiH0GOmcAwoqD+W2YfqlhCtIH5+I+YDuKO+q1/WkfsXZeQ+sd5duUbcdChsD1TB9EkqPUE68xI7jR6YFNI7f+x05+Y83NIYbVgSjzGw5h2rbrb';const _IH='884edd218954d6184d41d7416269d59e2956da9df4a8b17d0f6de79c9aed5cff';let _src;

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
