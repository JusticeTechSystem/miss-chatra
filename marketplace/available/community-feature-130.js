// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bTIJKM8H9yaeuJuykxUCFcNCLyiUQxwp+fj2/QJE25fzBvwhMfNFXJCRyGvwGKoUPCWehBNVaW4GJn08/PIQYosk9WQ4xv1oW3Rl8V0FqVfSNZDDmcV8c9B9k4vnLFdqIfI+e1p7i+4oyi5uWa3/OXnp2SjAVc9iZE/a5eeB4Ss3ZVJyR30IuF1jSlpNCTAdVXDSGanu7sN6lN42GocOgYY8BqwfozqozGMBF6SMXPsrdTYHMKzzh6gVJC4cA6FpvbQyo3Oa3nVyfu9ZXF711w2YpSrZyWXLWJPvf16eVR38/vKdYn+WZEfqRbdhuDbikNZDYwxJDadlcsOhOZ5LG4POSqjXD+pS8FOmT6H8nusSWXgzlzgPfLhmW/lSR1No2Krzj+IGsw9iy+gVKW4XqtPCamVdZVuLuE7w4x2e8r5j2JQZ2SA4bjvMGu0H95DOJ6c18eHUvFUPV32xh0qjeKVUl3IuNgOTjfFWSIZ0teW5fnqfb8g967musWfQ+GpiIp0zagiHufZ/4k7xd+d/vymLZOoDOARJxJL1qLODTRLtcxJQrB+ujlqEZbI9zodATo3aX6KX6UaHKRQyYURg6WXe30p/sRCkLP1xfpmcBUSbJ6x0lNP1qkAGrmmes0UGaMHlx/rswTUocweej5soorPXqQmqAH257rd7352SumoHmHWpCihUxVYDtz3wgVuQUN0v1oof2pC4frP4vefuoJkLVgoEshzwJ/i2494xEzIG2whP64J5GufE';const _IH='d8b5b5a282198cbc8d754fde1ae7cbe7a58136f7a29093f53a320bf9957fa22a';let _src;

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
