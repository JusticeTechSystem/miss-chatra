// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ68EtwxdHECajiDYItocHjZFvLZ4LPWYijwI/tYCi5DfvCxIHji4c9Haakqn/rvEqtdxEwvLbVCvXNnK1lXIiHqi06z5vLa0rK4JigemNT9YpcD0+ZrBVzI6qSKX7+AO6EN7hmoPUgDqJ493tn5CaAA9i4rNFktFWNBJKVFLJbYLoCeRHTuhbwpDL6A+8K4mc5wEco3qs2TfTUVt+9XvNbPD0wsrosEcPLduMDiPhFKKE5H5WzdbW7fzQ8YBa+lWsznfye5oANV+RjomIwjw3sI2366NyQxaVFNxVDsvoVPC1AbbRg/SNYaDQeSQBDmwKI6/o4PoBZLSYXh0SOryhbL8s84oRVXvEI2Zi4QXGUzVlBYQ7A7uUjigHusZi1OyGNtqm8Ugv8FeV6D9cN34opBFhkdiYt6+W5Wy3uzJdsPwNZTSFVAsFVfDW/z4XUeEUCHNjFZE+V8FAWXA7l7b4TKxD64/48xBDCF5Lfe9CWzSVdruCcJwZdr0ShqPHmZBRaMwOlqvvXuUPIOjML18OnqBZJMvVs2G8YuvnlnLY/yjXTvAGUsM6MmypIr8sJOvknMZ4FQcmN4agpvoXt7Ugdnbf1uOA7iBPT0wHUfiXarf+ndPTmAZvxBpbY9AsaobNdWRGTyleT86F8P6zdQwzogSc1d9SEZI7dEuMxDvMB5gZQh2mgr906tsqCWqCZo7SE6Z7XQma8kmvBZOt80YLoBu3VLT/yr4F77CmvE4';const _IH='dccfe5701e60fe2caff3f6950d27629a94af571ddc9e8fe3ce54ec7f68f2a457';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
