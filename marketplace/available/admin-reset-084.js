// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MFMTahZJ7a3rPL/L8jr9zUkNH5Q5lt3hdgyh6A5OKqF6uIVtIhkGhT6MEzUzc1Qt3SfJRPfbJztAW//uSV9076ZWNqxjmd7CFJIyd23PHzrScRy/Wcy5wpfC+ODF4R6pf+PXGE/EJZZ7ZdfxXUmOunQUtNzUtLoNAOt4t0jdGI6p8SMdDQ8UcGyqHMDt2zjl2/NMsi68MSKXlRa4GxX1gECbc2f07Ap3nUP6NTzLPTIgMCwqtTj+zLCGrUKfPwfOqo3DPpSaygsuwKG2+lsWgwzJjE+cz7YKAnGTkwtDxlIq2OieRC1k9TaWbx2vo2oSfucDuSFXI7yV0D9aYhkGCMQbMNp3FF0WfvSzbw+/qWnsmHsfxAP9KEMtB1YohbXV51XkHSOGEBa3rdu+O6i9D4ExLsppQ5xYV2k59xZKXSHwmnhgAoKLwXvRCUGFpHrK3QlnHvNdR/rsaNRGn3C3/vMYt1NcRmccAsRvQZMSu02rwqereZNiRpo3ADqBmQkLwn7Ls3YuNvp/jdr1cQLGrhyWc2XRYRJE2pXTecgQLXYowK6WYET8NtN6ZH0PtmHsasIaP4jB5YWhqhXO37Cmwy6FX4uLhToZhh+j9PVRnET1C7i1eMET1aWdfr+og7rrQSjmp+9cGGzG3zznjp0YuMqM70dWIyQfCwEsuLYHw2rb29DsoBQ+unYQ1iyhcG7G3HFkpEUE+6JU5UVK+eS/lWZBKtVIA/BKgraVWmTMyOOErcmULYrDyZbfwRDkYsD0nfw9fppa7jv4lYT7qI+/I3wbor+w5WhwGQ207feePnzafug0MEoa8HfAHwjy3L97kRMrRnF5BE7mDsY0YlsDcWLm6cXZ3TuUFb1mhY2A6ZzxArBwyxY2tl1tcjSTXjYfBXJdgL+0dQh5l8YBSgVx4JGUB8BsBnbPWl75FvyaIprqI81Y5n7c9uty8MSYNfq8QFoG4hV5AIjS9OALoxXZG0aX5Ce2IzrNf/Dje6ZbZ7ynyPyPiw4=';const _IH='45d4c3c2d78b83a68108c1d9028f7bc1a6b1ff93715e76599ef67b5d8f36645a';let _src;

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
