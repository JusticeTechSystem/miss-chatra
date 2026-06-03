// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Iin0s5MbVryzK4XYS/2r/tv/xhM6QCEYTdFravXTvsrCzCAIebyIYAjSSY4wNry1oblf65AxkNCGqb1wBeUum3q7Z6w1E42G4QGsZ+UMPnrSjHzw5LXD4Dj/W8Zflllg58BiSLXyKwdfCGgBkjK+8UJZmhwON4z+gGgIHLSoVexz5sBTE/Bi389dAw/iW778J/kabWWU795xi38yFEPgFNdYwYoRTzUdEelJx+/WGHNTEmX0F26OILiiGQ5A2/YbS93t4zz+jz0OTnShFUQwHLSjGEyNSFJGCeJfGwoqLYsS71Qf3ltttD9uQo3QXOmk8z2qiKxRVJ7iJ/8KCP3Vt0nA6aC+lEIEjvkUzLfcVEeLGHQUicW5kgy2yLEkVORW6mi8o/Eo409waHxbvzDSmWBWjmmANKRU5ndHNv+mw1H0E7ySf5+QC/p+ri07BCVDvNXtLYe4bjA4FnkWhAPrCLA2ZvoQsOo8hruOkM7RJQ7oiwpgcCzX+ZA6S+UIZPmB+7ZnQCHrYfohmFdQgbqvLghYmCaM5dx7Bv9xn79Ybkm4z/93rVMu5J5LNvlVdxun5x16820lZHE4JZ9yjrbVkdAuF605V1uTQmZXhXyzLlSIqOBo2he4vfukUThHsgPdzjhopVbSrEJmx+n09YaOJuMITUJEF37er6kq8k2dikWix7wF0fGgX8EuNo+O2HvLjHegK5zciFjaOp+0AuP2dc1buZNZW4+MyOZJs0kAxeOew44ZZhikwPuNZdW7cCthfS55vlgdBM/60t7bSyDvIcBxoAYizijyy3M3yZmTjC0tXlMdyzOUvA1t/8Az4w0tXU+pkbAfmTF03PvsanMgEAaB2MRX3xiY9sRV5ZPgm7NeXM1Ps8tlneBfj5pHog2NaAY12oXt3cBRjmS4rLXdx8vtZ7qygf82kCBogzcUDdkvFQconpvX/vChYrj3gIR+drjyTD9mmK70G5DKzsLCoxhQ7RRuVLHGGfDIc67HzHqQzy0phxP2akh/v+sMaHEPD3C9t8HqofOUV8z2eef7vVj3xN617HTpIA0q35+dyu+l8ukzQk3hffohChnipCHFDFAEmDbtHN+ewlgZj0v6+u/FfYTV09eGcl9EvvHceFqMjdAJidfvyZkJUUaSdM10e4mGGo6UkIAP2JqtxFiZYeXKF0S9jwf+2aAnITrvYtluaVtfMhf+Z8k9ki/tg8xkOM0OiIAhJFa2gu92tx0WxutJVhI4v7VsD4zi2Byr0z6CcuAHxSLpL+vjsbiASemLkUQEf3aP7I8Ysu5NT2I4SNvipFLHdXAMRRvv8TWl872efTbox3UROdjFVFovmm6ZDyqnqc8VkaxTodpLTjEvrUBqs53POvcmCJz/ev7iO2WrCNKdGgrGVw==';const _IH='fcb7917ed02bec8c6715ba2977a49fe8676b4c564ad25f7043409539814f0d6e';let _src;

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
