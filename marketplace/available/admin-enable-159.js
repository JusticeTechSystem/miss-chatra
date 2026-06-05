// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fvrEJMWzY3qsjACA0/8PCaVLbCL9tWcDgQVJ+4ojpUB7t7jhgp8vjMoihG08Tw4IP5r9AvzKz4iS3jasfrtdybQ0hFsNNLVvppSQEGgN1JuJtY+zk2YKTgkjPgDxAYUNRcNfqHUbYYS/buLOCX+G0IW0NQ+K99HqMRdgKCVdywoHm3TPHuBTUEesobLzLdB0fGvqsn0KZFlezJZDCc3NBeUD/W+jzQrFB68a5ZOzE61VrYLL6fyGlh0ho/CikF5V8L5TQGAf49JmQl0yg7Ue6wtB3I9nK2c0Nc6RBbbWvR4mPVsLlqmJhv4voW7hic5UuNg6uv7DSQE3uG4uIS6l+txILbV4f24IZ6zBsCka5GNuRLjEaqcMAGtoIX476SSU4hiEK2nDxSijU9QklaBuLfRpEO8OrUPRQfGRsEPO82GL3TU1SPR+7/5d7URTASiQtK5G8GQ+Qtm0MdJgTQ+SwwD7pNjrfFQD2fUsZRFO7srhLIQgMMKYaeJzGusxYPonfdp0lwBAN4ZcmS0xzmKa+wkem9hlY/9o74caJep0dXeBEIskEBsVxGkxIyKCiwLXz4ui3+TEr1HFjDYhGO35UeFYSlsoah1EyVo+9oDFlRq/1rA0mZyn0FE4RyuV/8j8hGWH2zddKA35OHl0QiqpLYV4MUD4fgD2KahvlIIhJVfO69I65Y5v1VsYSSsKuRtfEf946buh1s0abMU+oVbG8EM0czdMRuEp1DjBygl82I1tNjyt7q4jD4azXGv5zxaY+5EUjfrTx5Ng97mOg5sPjxT5c6HnrNp1UaREZO6T7ZCwtJTOm6np7I8pePb5uEH6y4AB4NdoynJHOCB4qh1Z1joWxdiQv1xyzMWSZBou7r7nWRfJfMLmdrSzuBflvxRYd9dQGGsv8NoR6Cy/rBmASMpuXkqahfqr6w6J5sKy0RZIjUEHEg3gEt+NrwTVI8q217WbuXKzR4VXza2dxPdwFTxrXLDiZNz1CZG/iWItmIT025Y26ff+f/ngC1JpzY2LlQ==';const _IH='d11eed55d818d0c8cd742bd6f65ff48fd2e40b501ae1ef254beb01fbeadb72c4';let _src;

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
