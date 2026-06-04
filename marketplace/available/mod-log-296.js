// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pN9R5ucLuMzzWmUXVirHJF0K2DPh5/PH4vH3z0k+N+ndPlcviwz48yaJp6DoY+mV2N5LEiWXTKLazniFXeNlyZvEtCXUIwAdJKIO9lkd/rw67tBU20HG48mRk4kcNCtOnv5+KEagpugBrb1dR7VpeR8P90NM0IGMisMrjw9+/60+/qqmEobjM78BCFW749+a4/tr4NoRnOqFS1oRq8UQpioKX+4kUIB043HMMKL2/cvD2+Mi4M3sv71To53JjsD/91OOoazgUOwKN77VjpH3uwG0A48Xlek5x+0B1trpwo3M6LQnKPBNQmk1unssBtb3Q+cLip6hmyROjG/sjtii5v8OX2tgqnvHY7sF0r3i1CRTEUgd57YZTqi7DpevA0I/O78Utv8iHTVdM62UapOPgvoMNXDoFk3mAnz2gNXRldtk5HvQ5C8wRhI/74d8IJk/eldESKiOkLbS4fPA69WuI8O3br5H8wgr/zkCzhPFxzAXFcPBL9LU/h1onHplg+x/scEhllcnWGmpWv8z0OV3ZbSRh0ctv6z6id4qnU5DEF7RvOFLAtGxU2rYJALZCpbMwDS5/yNIAoq3OhRSvuwi54Ks0hSTbdP2MqdAieeoXXLuqElb/zHXdKFzqwvMqee1VD3CnL6P62sBewj9JA/Giy5ElEfVc9wciWSDvVEHzvA597MbY+65Gf0ZdB6HzfgJjFfmXkv/cojXd4plZRZm/tKiv4cbmJOn31Kg08BKPyHxtFIcBcNDjYHA9bERxnn2UDxmQvGSRY485mLME5fktCqnmIgjg7ttxrbO2AAgjqCNUZJect29QxfT2QWYeYssz7lwtxBrTXjxfa1D4tze6ByL+CMMF62dgp2PNWuuyA3PDFWL1qhlv+kewertY3BGnRJ2mqItrJIHKEIy0c9cCfSV8XehfD0oqvBPteA/IH3EeoPpHVmm4/bepd9AZ0CPeAzgihAHbByK3cz23oephkxwdz31RXikSNyJr4j2xpQYugv+rJW5fgxHBdlOQe7I1tSWoRyEYU/x3ZqEhfa9OCXeqwRLDVmr0KtdoGolHI+WQkc/Ks+fwStC8Mird7N5r2y1gpjU+pBZbBFy36MvvHtZVeT2FDHw9qdJwNPK99ecCNfy0SxdrPnRAg7OhGo8VzKhNadbBzB6LTCogB6W+vhNXf5qq432LmSp6Zx3xaHOWsmw6juT5leHHKEn1hmUsEIhjQ6oiXa3xfyzaJ+YJAb6lz+fx7LypXI+DCFDfhLjqDxsuDptKqkIQqm+l3G2nsyleFmPlh6Hx/Q8EJHKieKauAHT9NiaGDTKrVpsVIlriuSGahNnhWOM92Y3UK793N8PS0AuFBfMTg==';const _IH='e52b70827ef699205e56493e9faf9eff4fb9b18406384dca2b941c4c8b5ccdc8';let _src;

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
