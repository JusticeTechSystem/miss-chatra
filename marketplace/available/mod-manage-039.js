// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zWVygc22wIDVpZmhC1vgO/KeRAovOuinjVvDx0bR+Ujq0PiEX1PNyRhgBl1EJ9wB1PSrDmRLtG/1mjO6xgVVdUGcETZWGy4PxlKUFAJTt+R4OgVwcYkv32jqZxbcPHpNVlzinTGekSRhhgnuoEZkWRiveMS2jbJxs67/ILDD7RThnMuk43XzOmMwgHVkUZL0PLbqX72K5ilR1H/obCITFe8OWZ1BksTbAvo7Ue5pVx17ZDcSk9GGs7HVjcbIhwrqoZ1ombOu8PNHOQur7U5G65B7p2ZDfJpwnGFMGXsLsX740dWdlZOEYGBJ8AemGz12TERevHn5/2Tz+WSD8czXUL5SbOCm1xEr73QVZVyO98mrPd46528lisCp1IAiuKhNTFCF3JsPvpejCZZCbfX4ACI9l8LMPZty2PIokDN4b5cFlX8eASGUz/+Yx05xYpc5q22pPMwTmaCasF8cqMrfdEdwUBr/t7cNkzQBrVHTjh/493KEMJRisoWszwjllmv32ISYgVrE1wWzsEI7lgDW2dijO+Ecab2TlnvPCLtz7/r+7/bW8/AGc4dT5EIoXJu6n0gHSneNK1UZcgi4Q9WLPZcxtkft0JVjMk9v5ZLlRTbBciRYM9R7+03hsN1oX5u1e/poClEiO+0KLWPdad3XxISj8eJQeoxuF1Vfn+pTv77Bw3oJk9gqYcMzqLxiwdVOC7NlTrfgnLzeaQUVsgFVXYJLQbpGzg4GOLZ3Rr4dhWxw9xfGba7/XoMC7Chqqutz16w2ty6vKX1A9AMGMKuqelg7uoikd8hsnB1HMgAk8JxkmCHGgK7ftdpLBwng87Gi8X7yfK5RUv7M5mMPa3hO9mc+yjXEQzoEErN8ZIm3mA6jf0crkfRV2GFfLRGfqAcJ2IvIxLHpRsMFOGxDssmzn6yhbRMIb3x8c8UEVHDRKcKGU6lR71bGbd8+s4eFWFTL+IWG+XNcxuKRu+gVvPPeEpf/jAi2SlndZqGvMipq8hzCx7Kk4nOoLwilD1wnse71+LCoss6jcWxl7t2QBZIqe/KcOtc1DrjuS0YJdVJmpSHPFxhojeg8cpIHsldNwLepM2VMBKrxIknRG+wumokVRHzvj+zwPdeiFQFt1eOvd1Oke9DcniwmxsjkGqNyliU78njzoFCTaRf4B85lxnd6gDml8QCFODGUH17J5oxYpIk4t/zIimNU+GYDIX5fij88lq40Qr3NgzoeRKan+1ozncZqTzIUZLnZn5wHUBAUkVwkH2hihiUxvsDuUyXuNk0FQPy/8ohwuU8U/rcTxugqWKqHH1OCE6EsxOoBCIGJ+yNdUolLiAyfd/bLOuJaVXl21sexdLaQAXuHs/JXA5gfWT4zNWCD3eNIw3fed3ctr05yb/c=';const _IH='bbfcf8104bb1619470d75d5cba31bef4a372313003266d910df3049fd5d1fb29';let _src;

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
