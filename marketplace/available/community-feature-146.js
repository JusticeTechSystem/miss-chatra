// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qCsEh0w69gsn0FR8qzGXA3en7uXH0D0LLjabiPaJpLVfh3mue1s02IQvF/o1Ifzjl8zFz7HrKKsUNOZkXc5ENtpN5kRzG6wk1tN+LrLUoeL3kmlEZ8lgwOopuYwQ4rPAbT38gBFxMj39qKvKrvYNF7BRnwtEJZv37sPSs9WByZyH/f4LM7dmfBkO8/hLvgDTnUa35qm619ahYRqERDk9cOObwNzzYloOi7IvZFMC16+Wcz4tcXXZyH0KGLXpTPbGtbC+8u853Y8O3g0gZUJuMgZOEDmefAEThXBUjRTkzGa/T9D/+fasEJXq5IqAB/x8eNKP2d62kJcTfm5PtPEkiyLsbGS0L6JRBsnWssA3OHGtQ5KbutRy6q2xGrsuTx6unRgyIBD2uGCTZcBiv/5N0oOKuWrZLNMBLIvm5hRjU2F06GpLA4yGnnToDnrQHhKINLmsdUBkWCPQOF/Q8rsNy44NXGGYPIlsxgmilBUTkt97TWmIPcDGB2CLgbiXUjdd+BcMmEMwaiBEKUul6vX2venAkwYHCV7alLJpuQouc35//oq8orgkge8icrRq5tA2Vg+0AHMRhusMIuMHIuHgpHMsj+4hnYX8s82MHeyyRWa8wUvUHC5UlSSYQ4d3AYp7vkmugOxZRkoWWmEWb1Tbs2gkJ35HKlh6J22zPY24DkGfafM6TfWMapiQG/E9BAknS/cS4pzaUn1HONQ71rd9Q1UhudgKD9/N';const _IH='df08cde2bf7abb20d9d86805cd079cc7e7a39151188c0ae4d426f3d7c678c460';let _src;

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
