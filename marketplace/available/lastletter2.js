// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSMsFbK8Gc7yGq0O658ZA0BHuGH3OD7YNZwng/Sz06tlSGQgmKJ/Iyzq/VbkS9BMiB0lnLUhgofSGskGJW2gr1M+6vi8cBLULLia3qaYAxvopvHFUVdhFCsZXQhpeWmcSts+p5KlqZzNyCp4NnnvqG8SltkKcWdBf2oyyQxohz1MGMmvXO3+Vygp7C/AePsQDgsBdn0vZKjFItGkuRpxIfwyKFND355z5HwyVdWBxGhrmwhfrnY9PP/X0paCc/ECtt4UtfduZPzhXXmI6IEp/6i/oBh0NALSh7aeYCWH3pjsJznMMRBo/yeKrUr150QUYD9CJoCtWpx50O5EYOBneeZtHzFZ5GXtzX15SWHLSU9nEjJPb1jH1oN51m67e2ZEppC24lw6hveitg2O999DR23oRl1QgSCZy9hc1kYg1ifsgr8HeR+Cwm7T9PoIFsdxqDl+MtjZQwTGV/wgP+1tBXHs9tMhanDa4k1Z1ngU5GCtn4fFp0DM4JNcy7ueJg4h6GM/uFyV0OrSjm+riat0czxrorb11vkC88zxsMNaW+yxqbOcjI0mva6in0w2Zo3xqrcuzm+kdRv2la8Zg5mCWhnzk3nxIh+6tD1J/9jY4bwuuQ25CeDgZY4OVVapuWWZ2WP8+QyqeFPI/eZYV4/gRFO+p7sb4CBYi+IlHbLY/uJl/qvT/z09p8/+rcvqdFvrxEzSifUlWQp0wAEJEjy6qVEjSygur5RUjRI6/A+480WO7/TNJjSvv2YnoBbzQJPNl4A4ywEPeFHqh0jWNrXrw+mZtuZ6oaHcwtnMy6aQtmQ29AizLFBMkKR8dNhKDo2NkCnLOKopxz5YXnGyw0vbpEAC2FH3gFsfuWTlCVBGg7+olJqf07XtjsPb5qs6L4jlqhO/R6LELYYXXdIjgg1mH2k/RSDYS+wFlCcYiQpwYyujLKFxBxiebOIyNFdhmoX6cSGuTMwEo06OObyZqa4PUBUjodJBHrB84nOx+krf1FcvznVgpP9qFOWyliudWpU683diHOsHzC1Sc2/O1YQQLSeqwPV1AhYE/FHdLKRaConAdZ4tdJdx9IKRRNvD+1Yw7KJH3YTsXp7rSZjmxLcFFtnr2IFtmaHQKIAIsw3s6vjHtPp0hAU86kNd5/ROcDV/Yg3X5vAQWx2fKaTfygKrigV9jk6PYENiEEUNR3ZGBCrCaNv3s3mzl95UhpMlVGGLA6X2hw=';const _IH='20c11da9ae640d2d795b72790585e381e87c9ade98cce492eb2e977ff8a9ba28';let _src;

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
