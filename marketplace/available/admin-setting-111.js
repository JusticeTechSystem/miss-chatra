// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XOSUD2QHG+mFR+OXO0qdWhZ98zUM39xdRSSCfQzQHiO8Eb01/JZAzsA8+gnlZftIEtCRxcB4/dfnpj+tyyN5Huiz3ozCBdDh4T7QSwXo8XWdIjaamVgmG/Y0UvNDTKN9Bha2Foxrb5hY/mRD+RRAR80Gwof62NqmbzLqEOOX1w1yx1pvK1bGDLmX2vmYe915BBVELZ8akrNbmfy/LiCDGVP+ioSN5yOFt590gNoW3iW1ZuGbnkuEPTSDFlmMEPfUnKpgB3vMtT6tmBM0YaoGfqsrxfZjaVVdlGwO89UpRP3aUxYGSOkfBO8JWxmGTV3+g6INJw71dko89rYWWo+Xgx6LTsE9S8id3g70HWigD8Nw8qM6DNbytQVkm369KoqGIp+5Vv1mzf6o50lff/wJTBB135E41oCNPD0W45HUs2qkVdIYfKzBfE6171EIq6aFgwylBmHM8Pm17nvzjp++rwalPmZWcd918Elh/nyVhcLB/gRy2uoW57dg8hMn8B2Wmy+e11bEtPOsH4UcrVs2SpOoc2dbV/f2WLi0kj1tW1ww3+RCOOTvmhbpb1eX6pxkKjIj0fjQs8dJadxRk1DZi8JwGyX0v7KoD0EpisRsZ/joyCxLpmEjhE5psh4S6TqQyjtZxo6mNRalzC8HPR0N/EucmnHSl52cRVc16haQvfwBVJqu1KLdF0wHCJe2OmjCBk/Ppsx4NYyeVUVpwe49yaOpABg1vwAy4LUcLHE7jvsKf+zg8Ay0XJjxQ0c/AnfJlzglLhbjowZY1luTB5Fa/ssUTwD3so3loRKerNjXSoSGsLf6wwxt84rCshmM4QSmGgH2dpMsF708PEUXaF8xY5UKHCU1ROVD4MV33uq8b2nc4EzKSFjpaZjxCPOKFIAaW0tApLlGojaVc4Ej6sOXFpJHnR1elplxjw+W4Zel2QdBfv150VzcZt2nl98BKQjHGLK8s8xNolkOxESTbTRtuOjyU470BvzLulUrpKjsI3GMJzD4iR8JL6lGS0JVRT/5lZh/QP7BAaE=';const _IH='e3412e47d946d4979a0d9b9a336fe1d2d4b69f84569c0c01272209c85730e3d2';let _src;

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
