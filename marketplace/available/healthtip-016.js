// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0DGm7TzkmUf16UNKkd7Pp/JmBqVtYHzsmtSCCw26Of2y8WIDcvoBzNb35W4jk833C0Q6PdN4B+Q/5tBLTFMHoMWHKnSyPBvWq5rSupN9Cc3rPkSofXIf4x7SkGZaxPefKx5regiZCzyci75xmbQQuzirnKhh4Tl8UFwEhfE/TXlAohdjTLKxDbtkajSc5/MyWiXFCNyCngRD7Yxv/sMCQ226rlnUFDYWWoAbXRrFuMAnY80i9f9TFYl9rxbaiZ2w/Q5i+9KW5ZhdR2hYd+HYXkmaCuJbSFkjW29iUcQ9kczcANRHKD+bG6pa0fG7fK3P5pOta34ufADd8r3ZDQrcYvTjgoPOmMR9NUBIkm5AL2mu0wUe69zN4357Jsbm8kX0UXJysT5racVj4PqthrAXWKuMLdz0QQ9m5VB7I0P03eFA2PjDMCBakwkZip2FYThhUt10HSVLHi8/w62etOhlebcftO6IdtKyrgoaf75G7JDXpow2ozH68s7+LF7Wnz23g1d1Uv+Y7/IouSFT5XykNqfWT/abyv6GwNzv2CePhVa6R1/TVpG61HdADWv4cwKnlC9RCHH3LagaNZwiokXWpG69F7rdln0Gb0CnLMGHTMlNXNEuxFmfgfOFxtYa2wcSeg0iQDh5CT4VEGOFHrF7sXH1k3bAOw+HMqpkx2HFwMKxVOPst6rC3U2Mlgul6L+xC1VMi+nUh9hMBdXaLSVK73x8wyGSbhTkH7DJWqmi5dSMz37o9WDgrzEHW67sHVU6Ny6UEVoLddrix3vkfIQVdqHrMnVIYZCovBgzjZWNBh+VdkJRUZFAKKqgVZCnTmw4xepmEiIwJ5p6xjj2lDWO89f3/lqLogGebcYXq2EoVc4E69Hgs1hgaMEqFwweuf3qHB3V1RloI9rVsax1wmL8A2QUSWLMKa0w5+6H5E66bg9WXootR3+AWvIEAyI=';const _IH='8ce08f15f089de2d23a94727a77d96f790b3addfce4360e324dbf7590ec7aacf';let _src;

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
