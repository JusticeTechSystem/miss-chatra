// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3YIj8oW3ozb05k1NagsSKWMnVBpRH2BgDDGyl4UOE2GVKzrTXyTRvlBAOk7vjP9nBywMsaJ8CEJu3yvndtGM7F22BoBnOPWwEpL+p/YtoG9bji+zEVNDfXXKvNenlEOxQSKlQk/gSL+9+3dReTGm+xoKlaCKXd4bdzZCl/wLRMTI69P6POmSbA0HBbjDaMM+QR2oaTVxp8/owjeg5Rxw4toW3k/TXRMskDNb3Skbs4uteMPtYcVlgic3BSDfusNM2Hep9jIxML7WPs2fqtlS9Z8IJrvQX2IBnvKatRiQNd2yZx53H2xbrvLv9XBNkgaw8EqK3JtMjTyclofGeQsQp2M6wfpLxsytQvHAwKVUOMpNnmF1x8910OOBe+KetM836gqTQ1uboJHoeaOT8Vr1soGoyJrjedzN0kwhr30WNdfvkWNtUCY6rb7L2doPrAxzDSkc/k1URbtDasZym9TMGFuLjyRDTIybdXdGvJYAvcWlT8j73EcNCKwSdJ9Zu/iGqDNm5TtskLOQ1CKarAk6p39g3DU4DPJjXB3p7a8UGrbTHFEpzUkBTqYQpuBVcnmSATiMptsrNh4GkBHsFSJCurKzdtgpgcAKsIF5m8qMFDOBVpVWGh6VDrP8mGGiDqRDUpXkUMVux3dPEzAuMjkXMm1SeUYLgMpVFC34ATgdyLgQlmB6RASvVR/vVxpm2Ny+wHiiK02uBRRDNiDlSemRQjTvHLQktzNelR/4HlKuTEmyB/IfH0NnYkmMDBtZ7n2DzKTlKFjwRlsskkQR9PyRWEnwWUtvjKX81bLdzUercHMwI4OMpfrxFkjcX9He1R21xpMpM84n3UHIyT+mYhzjLX+8QnY5sG6XzA5ml+YN9Swasq5Vd3vOKT2/mwcve+kNOnJP6LYXNaEroCnup9aTpl/uBSDj1JQFGsv39Kti3q/FcyBN0DsCv/W/l0ydPxcAPm5Gp03s0tVB4nDyL+aymHaanwD2JvDxlVWFtJU/Qb+Cg13Lpqa888yg46FxdEYWMNrr48C6SDxxrcaBlqEZ253H//UqqTgHPvu50tZnSi2LBmKSntu4YFhOgZ9TOtKaQxil74KdirAEHL1h6ACRNxecPfSgAOFzV+YAOsjghUZ2cbwotVz76rXpzGX6xlyAzTA2l5kSAMgj4phKPQ+EOU4Hv1hQT2HlsNV6ZTL8NhBqLXfrTKhKpGmMVXTNlqN5tcVA=';const _IH='a48634354dc05da1164a95a3b645f8078fad1fff174cbbd4f87945568343cb14';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
