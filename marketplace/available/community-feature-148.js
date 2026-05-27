// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JP6ULVZD30beZugNo7/FQ068v4Rr9PRZYtzugQSr9l04l3kxJpi6OfpPS3Q/sWN8IOfLmA5r0H85fA99Nf7NVyFwN101i2C42KdsdlY0JxUfk5JH9gSTmOMOCOBu2EWwVDB5+kNdcpUSenxXbmy7QsSnH9B/iqsP5Mg9b3rsnx1AfH73QLcLPbGXBrIVphj9CfKcz3I5K5NbXptEBEK48n02Uc/KRMZMqAvjXe6ms7E572IktB3BX+f7OSYcvFcJyNq0MBOuko0TB92t2+JNyPZj+qPNyglK18IdZxaHgNfmjtd7jdjI4Gy5yXuVgIgH+6aYfQN8pl/pNaiDvZFhXWL956Z9ZWxk0pzmJb0Dqfn1ICvUclsmK+1erCi8yRn6IMDLCUqPJvkl9sOoosv4yXB5Hcg6nFnATZnJpEQC4i/mXfy51V59EihoPJxzOPrVAx02o5lyBwGWvSULTFxRIwIZ3kLiv8Ein+g4/3mwiwGUl3r21fMNt8/b43mmrvzrHU1jE/Kpim+SgoTwP/y+kgrh2oiHsqdndkJ5GESi6qtkSsIKEFMW0BxffUqvujhDgWhi9csOn/Amq/c+nSyUv1LUTHUZOJuRHPrf1gIWwgPf4Z5VNbBN82rvLhN9uYW0uFo9ZwUNnTICJH/GD6tzBb7SrZ52IcZqjD/IWtDX0CyMXaXYM/DQYNvIneYjGcqkiRGrD9eKzcNexshkgIFL3tOGkcBMHQ5apDi25fM=';const _IH='4e680e7e5465809fcdee5dbe21108fef1bdfad7b5dc05ac2639c778e794d9479';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
