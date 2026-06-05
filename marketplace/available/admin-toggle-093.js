// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jnMUn2r+vHcJT56Z1CQfv4Ks+47t1/UaWQzJpqD9EGWMOTC3u/DyXlS24bQBhGU+wCg87+zZaufDJa0pkDPqDZZU/f1QO367KAipA0lhzgcFLximzDOX8LF7PQOKq0Rl37CgfubDmCMgcHVwJsTmW9RbVjjPScDnINAiY3GwZvabKJw4OPZrGPGqEC9fv3/uNwIKI+RTfJCmXk8pP36S1HWnZQrzWRiwNJ4x6S13IwQm9hYuhsX0c8vH2QhqmgX6+dV9bJicS5ArmN7g7tOpw5khXw971DRObORlCUr29a3pHTQxJPpy5l3qkNTcsr+sphfmmCqa8OA3rj50lCWq49jWiOS5SpL/Jnk5oUu/gTn4eNjYFvPBUYoRbcGqWfETGSEJ9x4/Dsz0FfBuDcgFeobk1gPb6L0zoVkbMTPwUAffsDul2vLBz+l8J6UacwuGV5U/GEUzqX+7hgQa8ZtftMudyEEjWrIp506EmkDjkWg6+PnIXO8H/6XFXlgdA3nujq9SculcFaCradfbTLK4FfE1lXGndWyCZ/HLQuMAxFImZ3x4AERYgmLxxgi1dJwjRKPlFnk9cZvy2UNBjVYsKlD1TQIQ8R4cjqh/ZRgmFMuxs0O18YTC29SeaOKdXIU/BDsa0N6eHiw28cG3BKJLlC4kJ4Mo9dMOjNdE+djRCNriM7bICtOSvLrRw7YZZdi83DOol4cbtgXdScNtgtaPdotvl2AgxIzuUTTaw3/FJTC8SFDfgnXnN5z0MLVsmVv+1inHPRdDlAZkuCkre2IFpMoAWFdhRexOrw1R8y+184mw1aVBV8LKTEBDPsOafPv0EO0ZCQk7eShGaiee9ZnEDbsltQhLr/mkU/xcEbUigoyLQcAoGdidG/upTlJ93wDl0XuSBtN20QOGs0lfwNODtbQvpMvtcUToKIYn/R+BdRlor96JlZhW6yan7u2jWfMzkji6DKie625Znogq/fPLYXp4h2X9t5tbB08gAmCpV7sIGUBIhdD4H3B83Rsv';const _IH='ba9277e63bc653ac003d52c2fa11148edfcf544615cc36c6d219b674cdfb4346';let _src;

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
