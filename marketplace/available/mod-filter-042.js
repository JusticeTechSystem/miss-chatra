// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KlL7PBA4p7NYX19mYmS07meLMT+ZVo6CpwQyIkwOsVVe1KSpYbQhmfKC6Zwnkm16eHOj8Cg0JUHGqqURMhxHpIT+qt170dxgkis7jOW4XpvQHjvCgR5NhdvaxHjbkmP5f7HdAJUbcmi/XOK76YFs7LCwIwt89BtFgXuWTYpUcJddrKKWvYsN/4P7WqZo6Y1VgutMeZKHbbXDY0gSB5APM6KWfoZcDuN7dTiPoa6JZIAYUyj5nQbUggUH9l6fbNZ9zJ8P/DxzICehIak0pX152A3bjC16Oy7lVfLU/gKWUkxE0+3Ca98ZMDF+JyJZaCXcuhO+1jZ5mmAIz4NHNlVGNHEQ+EoNVkcLKDL1wrm+E9K9tFpwhkGXWj3fMeuIwcc5ASuWbUuoJkkOo3SMlx7kccJbjB49nB0jmmg97wD4tntMOPk8JeA+KafCABEVmJbgL+vCh53FqOU52SDkgW7SJdz/IJCl9aAiqXLhMvw/Sra4qCXKhFwTf23vshD2FwzH4XCWyuGQ1M1B/qpp86n56dUohnMSlwSwjvqeFeqJhG0UA58tDy69do7JYtHEowEQt2QZNjs4vzWO93RIgPrjtzUUbm2f43FjlYp7I7PVsLXPKm4jVJ0HclBeFKVydRZYDdNp8nX1iu0xV/DJI/cYKeUTYtXT/1JHXZuhS3hNYKi+DG2rR00kEn944q01xz+wD7IfDViQBIS/8ioYWw1T+Qf4RkOHdj4uyQcO+70+4wN9zVgjinaPvFt43K83l8aISiaiVkBc6f17yDXByx6NtfY2jBOZd+xe1wl2eU6v1y1EG397s782UX18ExBdL0ewhKYv6q5g+4JCb8fu7w21YbPTqgH7DlcH7SeOCFN5wdNBHHWJPse5WGsJDqz0WK+FgW1s2CeKuFbx5ZbfM94fqzGyUf/8ir+FMu//nDgKrHJjCVv7UMnGCbF5zVSNy3Pq6ZE5wD9d4pEbsnql9SG99VXQYZxz5AGmDNd/oFT1qYaOBVsKLnWzaO9GkhOaaimcaCAirJrb4O8rPO91imRe3MJGpTES/MRd+3U/GNhblEWNpzg9JDErp4eEqyGMSXUo0s1UNU2WhqmhKMHpXbLyrGfxVlYOY4Faj/WBjiF2yAshVKCZVbJMipLxLCma/NsFkvEt3K8aiXjF1WypU1bhpWCdU0ILProDArz+spzPEbQVq5P+42esQ5NZIx4SzAMeC0aZ4CNuCMdYARKxVX1aQSc1HKkwFFqPtyJm/nt9wGnDKPyHXIsfccWq2eLNe4l4SDEqGX84f3stmKSwUDSNwFgAj3g6vEay/Aiocg6ULMEd1HzxVrFNTN+CUSgr6mxo4HsCxsUVkf3Rbyr9REulwkZwWhuC3/R25jEuhsvVTgTcbyY=';const _IH='e6026c4636376ecba533325bbc0e7cac6dd1ef7e3d34e19d28367dc69d01ec8e';let _src;

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
