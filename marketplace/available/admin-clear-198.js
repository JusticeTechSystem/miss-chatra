// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6jqhQ+EisYXgP4CiTXXQ9T4ekH1wpDRaV9oq4MUn835s5vIJI84+wpGkX1Dp2Wrk7Wu0TxMqgeCIMPfQZ0PycC2C5Y6B0WJElI1hpKa3W4ULGBHOkB2iUuZovsB3ZigxY7aVUkRI+Rjfm/YsDJ5u9Q0ha1yDKXfWFBAw7jcDdx1FaR6aN4NW3tDG19Yqp2xc848Ope75/HgEHLjUfTKKH/GJA/0b9YJlG6EDgt1tNnewIlthWWflXeJfkHZ677eKWYVYaHMjG0tUNCK3LP+dKr76KB2Stv7dxqxYDwqsn+MLcb1nelJ22AbDY+sezbMY6TizwzepArBQsD3r5NhBa/I/Lkj/E9laffrCL8cWZh3wyv2nFvxf410j7Gq/ycLbHK3Fyq+kURNnCYok8OruvF3v6EXleUwrY+HcakdN+dpR4ROipqYfJE3OevhPifkzODo2dpzKmrXwqwbf/hzAPYMmxmPsPyG8HMB5cdM0c+RURI6WwSQ7zh+qO1xOGTtD/qNhwMATfC8Dr3Pv9H32LQtsfdyGCWmTVGIUqDpPEd5sHVfbVOr4bN8oj+Luwup7bE7ElyxRaReNV3AMb1Kz0V5eFuSvg/SUv8c268JUcWNpotZcziwhe29s6lI5zxyQp2qa1lmN712S3niAfi4ckoTVJ63XfkMVU404FC8jQHMo/heDeGDh+fN5xBxmiRhthGtGPdHGwTfPfxNqoogL0RXMiYjsna3Dkek0nvGUT1L4T9EYCZOl6S9vZEE/uA/kssA5O4oEy0JJu8PTEpNxg5wvKah2tGFrSljQMpnISW9/OEc+xKwxEBRU9XDofMxHOKT2E3iGKTfiy1s8D+ZCRHViYWzeDBTSvgFDze+kWwhcZSEmWLbjphuNbBNRSk/1Vbw73X+kHcdLkbmrULZAcbQSVxxAltP/BTl2UcIrhB/V+GZe4japtjeLHQptebmmTqoAtvv6REE9nHzlhhbR4mrM/IdAq4AaSI8gqSAGcyWTAE9H8IJbq0ZP';const _IH='f708e8556a07021593b84eec8f29dd53229183f40526d15bf1047d5cd6914903';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
