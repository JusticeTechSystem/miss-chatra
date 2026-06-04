// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3WDlczVvEvsCq57j9O3QctnT0Qv8lDEeWXDk3IzNTqD3ARLpp8JjWYDQ7a5q1DMHCDh24yEs4JZ6bvKNW0I/BsFZdvTam+avfeFVyB4cWeSECp8ZlxJHwhAcO3LpKZhxFV47zLjVZgDJzl0cuICmO8fsAw5hcT2BapDPWJb449sdPKUIb7sggFYADr//5bdfs+AYP1jOJqE9+jokVGD0qcMQh6Q05Lbge2NWmh1JHePzli3wx7vKsZ7qyk/ZfjD2hqvYJHCJZrvXLAXj3QG6KFixg+GWpMNtx6CA9c8Bb1QrcEO32yLTDCGHdBliCWc3Zi/st+UHdhBXl/EliBJE6b4zFDBjARPO+n4l3AAV5gymBsBBluJD/8nNMpFPrUkvHWgRFJW+PFn/fWV8HZYElJdMIlno+2yOL3zjNIUiosoLwOptBCDJDYqaGjzIdnJwPFVfgKFg4l6RGniMoIfTU07Q7qAr624Sx2WvyrPLIDsyKhvpO5yHdcQtfn2Lj1jqzUo9FUTD/eh40Hz4pN7RBNjVj3yeQ46x6ndm67AZjD4mYb/flx4mE49KtEK4aEwYdVWIIIeVT/fHvXvHdbAnDuVurhgyUtO0pokLTXarNQyuYIfWJIk6fxHim7wWMkLJ4EwPyUAtBsuMmA80NBNjbFpfpofpLGstnznpyXcs+L/w2ofPrMxiPT9xldffmAVQBpb0KY9TwLkIoyZba1AmvR7048+gWpRX+dxwmMxHf11jNh4=';const _IH='5e8e7199dcf6becbb30d7afb8f9611c146110e6b5582ef0e9b44abc503bc7f6b';let _src;

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
