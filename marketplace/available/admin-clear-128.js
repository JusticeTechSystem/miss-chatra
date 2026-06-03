// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7X7lsueSVD54R3gV/mGLsRY/KzLCSR4+SifvZVJomfRUMwfKWqFXbnlt1YfxhTD3lxCgVafeFdnwD7RymUhRiB5JYTcI7xl0gfmWimpOSOM4EJCDpoQfUsOuzTcCbaTMx1NvUuXX18gQWcOaoowysRVP+++EwcwmBr/YnKIsqFi0cR0WcXD847ZenftuPy4eUE/VpTqSF/9c33rp2vcjJ9wSJMa5aY66F3C9L3b+awT+Ke1luPAoBNjIzvmmXj9I/eAqCc1FeHA6IQCzb9xuUskbSZZhLPhYtI6Rc+9Ujx93eAW1UYqPObquYh4vst9tICXHbYg6ZpxesxLdEBHV6d8d7fteyxNd3mMHoOSn7Bk7nSbdZjNCDveinH/K38TijlcxITGutDEjWkc4jP+hEqGNoiZ4v/wSNGzl8KlcX0O1CRkq4naCl+lI/OpLx7mt84HEifNdY30F7VgsHQZq/gFyIRQxE6xx+vpCGnhqx7/d8wC9b3QVr3uxF7+wRw+Z8ODDWCQHs6KvG6z61cwMv4tFl08Rv4lxCeDowd0ODm0jhGeVz7K8a0AjDOc2P7qWpiUDfSwySsyQPvfQMfITYjA5awsDvsUhfTouWUvbkptlYuvysPGixQvEUZT14BnYRV7554sytDLLUhUQfuvgdDnbHSgqEsnVcfM6ANZB+XulQmPu0CRNr71t4Z/5wFNPcBWeUfEkJWfZxHh5d+J1ZFOY3z+liF0EzROGNvI3iImpn14CxARW1go6GTdfRs+QO9XIIreFDbjet9Xdh1CEIFd4rW/p/yqHPDKzVIowXVrXmlElzC+p8pvt7cCxPwL5n+YoA4BT2DuxFVRboZDM6foVbMs16TEE3t/1YQgjIs3vjsVktp22oU7pA+c9nl/XxnqNm8UEPZTdzH8yrGNIHuxtaMmhGMuZ2R0sDWBtViIyXnMhAFpFWolu3lalotoOocB0M9EPSQWBihWkfEkEXDm3FcnppQ1R1xYsx7DX652SiNC50/buBTOZ';const _IH='e89333d7cf0c58b27fd4696626b34ce6ca8a4f5c8545c9dcfd44846d6498c434';let _src;

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
