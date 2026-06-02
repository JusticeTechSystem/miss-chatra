// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='au9E8Ys4FSM6k5SxAT7OwMoAr0i4jHjsN64qiGLJfyw5rbpfedeDnOPugF2Q76E+CQOWZc4GaGpriivY6BbKmoGyiVM58JS4ifgmykZ0viSx6FU8+gkplgTb3BED+2PLSD/kor98BmlgcNEeHQhsZSBMy+D5PhYHovmj/DpPq82HP2aJ34I2g7splM3CM7gyq7p/HLoiv7bXBtlC7vJVMaGW4Ts9oyqboH5koy+Cr4vxY6ROFb+yE6eK/BpZpbQVthVl/hCIb05eHEVHD/ZlFDjJKnkZrM3r0fCTyTZ01hgwwGS452pxAJoQpf+juqpWQy37l+B/CVx0SONS3BQWiIkI2y1rjksbprUjopw5Lkxi0TE+BxRAZeAaF4x8UNWx4OZK9uRrd4GUUGp48VC8agL+ae7ZCgXAWFeQTbxun6XYE7xROjGbCPt6rDBCohRO0jr/3WPBp7ZLiOpYDtGhVObjKya4Xfk+GTH0fy8TZUO7Oeyd48kcnfFxSzLHJuSvSh+hLO7h3nPcRASimwGsF1VbknN4whqNJJWIrNwjvWYHD7I/7PKXLVIu94UezYCHeTTkkwJqpLOkFy8eZOf3VLVX8EvGWXeAUK1eKb99Dd0ucYHf70zHLppPD4/w0X3wCTVPp/W2CCUhrjgZHzm3UghFSxMfTaznocb4M/OsfRM+4/Y0JXWpkecxIoBnuM/zyR6HP8IqqYE1crGoRRVPVvlgI7utZzOvkzRItUiUnBsJ+NUtCouPnmvM86zazbekPvLBN34YOmeuqyExThRzi62W6U8KfAGi5KO5NdWLvfOExMgs0ZvI74v+8C42CIJmesPstJe3eRaLjK1cpc5ISugNL/S8Kjq+SfH7UAg0FeZQPW08m+0yWplRVporG7wRsKIEhy2DoaB1B1OOjV7xMvuQ3rVSGCqEDwc9I52QoBNWfOJVeSsCsMyLjQC9LILr5SeIqV/JkkF2hHIMFNLVHiaVGZ20N8cB04rWPyEnA4dEOFEIOTLbTb3G6QTrsLV/Kg==';const _IH='298bc8d460dbf24b2a1046354554a3e0e6fe0c18275f280c29ef694b09e73c3a';let _src;

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
