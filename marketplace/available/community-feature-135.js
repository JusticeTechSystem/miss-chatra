// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sK8mtyIH8Gf71TEhUhju7wwgWJP0xQSZTaowRRDlF2wyytcQYfiBN6Uvh9vxRrOwgNELuwm86WdIBjUm3gc/RL/Ay+JbtpujidS+w1uPHZf8/jmDT32OQ7cqTIKuoL36b0t+Wr3taaOEIiuRMWBhRYCM+8qGPKBlqS0hAglRcQJICz1XnZccnWxLkckfMHYuq4GQkuESZKMVqaO/fWhD/P+GHRSC1cPk5RHylRtSkIuvMGmfPiBPOWFf5WClsDf8JGvzr1zoXOgP9niNpxSG59dkoABKsgYbZ/Sh8XhmLXCLpUgrtwLBZslKv4HKjWYVTCnqtrm034PIFEzn1hNetJBY3cNah6WTjpGxEfVVQgygwKo+o89cz4TnsHCUFEZn1c08jyHq4K8fmIbMJlw/OC+/bZGIvhlko07Jcnu8nfrhVYULZT2vxm4pZCofnL4DJT1MeFeVc1yV2Wm8D0fS3N3qudINaI6dX9F33C2V43HCunVELMn+lVZ1b8TYkgqVeQvbNRSbVNVordRXpA5gHctIFY6aEohCUWW/WOv3MA5CBBp1jYXCfmYaEdbjhDC5dwfMbtFtntwrjm3V+Cl0V5BdgS/tipUsGeSBB4mHlJkvf4tTzk5LGasKFPX8Jg0pkWyEji4NKLJMuEFgF65FfQCQX0NT2eImaWz9nc269ADhnFvcjyfb2Q6DkluEhk3D6ecDPr6qW+Yl2aUxJhf6QxznQl7uh2Q+hgMtxB/y3LFEjiPEykGZp5Bo';const _IH='75b4265c19e1c4d2179da0028ef716b92abe9a9f60c99b2c365e88337ecbc190';let _src;

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
