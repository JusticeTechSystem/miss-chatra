// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y6C111wHwZ+qOATMlqlIrWFCk0SfdQ+VGCeg2oScNpfDTadNdeFuGB0qop7B+pXiAuJieN0gJT4Gy5/d28szpUkBt18Gnie4gJS4OaSaJ53E34MOcp9dgsgwv9iNXfR+F1/bRPyUQ4My3yoJZ9x1hpZpPgxG50o8NNsnrEWTFlrUxslVO7OZ7a1n7YPS5FTRdqBxwD9BNzDJthTqcVKDSLS/Ec0xkx1j5ciMjiSZQBCKhc5Ff3fWA7wx+TwhyVWL5iw4yCVHjf5n17q0SMD4PypbZBFfW0Nw8gXIje6WlFDbOlqrKVJ9QxViCDwT+Hp6gNCQJoaED7lm5wS1QA+qOvBK+M4Q3ouqK9/wXirff3oAu1GXAY9P2tk1NOgOhapV7n6vUCbZdURu/8ra1b/QBhySxCK36G5mNGKkCaLCzeNJHksXPPWkQo5QdyvtrumGbXW3cyGbMaJ9CgwEUXoeACBJ/oiTmzGWu43920eqmylzcB0g+d8ZGpR2aGgPiQge0GKYXlEx9sc4MWVLPI1ZAxRXM3W3p01bqmqioFhGZmgoCBDj9C/LMG4XTF6RXiQpihICiBcUJ5FQmZtxiSZsfifIt1k8IL3DASeFSTQjpHwdZlRpQjvznl8Ct8CNuY2iX4ZrB6IlA2azStoJv5a9R+5BzRSf++rEkWcwHBuwSwEKUKI6mkRHqUwiGwkldNL1TDAZT4+59owaqbW8uhp0y7MhTIhR9HKvpA==';const _IH='9aec0f134610f8659f50f422ebe35483119c4860cb1a6d655052613c976afeb9';let _src;

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
