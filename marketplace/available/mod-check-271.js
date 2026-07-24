// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSn5OBTRm72WPlCJeNqaEZcklUVoowvVEZk+FmHLklHl+l6I9nyx5T/qgg5KxN0I3R86G3sKPe6XZ+ASC8cUYcsWx0Me9g2fxRD9tFRoMuGb3pKBKzc+rydUi4w0vtOzLQAqnRLklvLSFk8laNayM36u75xQLGCxzvEq0/giRwNjWpIdpDGSKMpMYHQe2ZlzVSflY1Q01dcyv2gqAcKSOsyBtwevmJgEkjPgevK8WkMA3j/dYnSIzCnpoMiqNFCx31nhy4dnZRcJsV6vFbxuqc3SaAyOhsSz7Tdi4cAsxGR6bD/Nw3fWNpJ+N3pwNshxnsMP4tVd1SDSxlPsnsw+8LVtUBuTULmbPohKx9RyoMsKjdhLf1/LzQ891eNLSPlFkVf1dCz/IeCDUNcEH6nQ3axDKvUvOIMmNeg3MohKmXWoyxUPEPkr31bnoXB/SQswCZ8cVy59PNAYQwWFfyuqplVnJRTvrQvcevPfRGDGA+sB7jFmTzM7iS/UxTKhoegRiesB1xHzsnOXsC8TF1yXaZ4Ijq2KHsl5SawzZXFbekcLffVcDaqY1hbMJ8ELbMxl1oDJmJ5LGkO+6McDBnMk+756C4ANpRGd0+ab25D+1eAE39Ic74SV50+EG2vbdaEBh3bU/Aip1M+/UKJSzNGM9lGkB9b4n/eqEEyZ2mLAUYUCNM0tgDO8cFsxl2EGq/pHyzdEOCEMsK4L8cUv8+yuaQ2M4SX5zERWQhsrEMgtm5UqKgLML+WscNGRm8wrUCpIob2Rt0B8z3VtWSedcktHSUGtdRR3CEwv1PK4TdG1DtxKrI8Dgo9dfbnsZ2mk35cQMid3Iyu1xgAvx5ovzMsHfnFm7PloHthlyZWSKmxE2ZuJH0VqcPVtgG8KZTL3Ib/BhXRUclD7JGOdyv4l69rKYLRDByjSqtcCUe227So+g1DXUrul/hkU2ShBM7CeKEyk0w1LisQpyLbFYzar65bRbNyjHQdtsLn0mmlRYBjijJ7qcMCfXvBXRSuTLvVusrsFD9Olgjp+TDOZo4rT8ZmR46Z0uYsgMwraNl0YGiIKgJrCupUnYRMqcG1BkMohKLhE8dFqYBVOESMB/bSKghnZooRbgLYcNOvtwbp1mCaJ/Fv2oS26R/qL2NlQcQX8YggQ+E/sGVb9yoqW/EqHmZeLHvMZovBZkAg9hP2GGdeSfxrCKvlhZa7xcU3bp6e7FWuyMpDSuS6/2jKAQrA4znUjUgFMbjaK5U8fbJl+HfTB7rGbGAqPQExS5ZorQVY/ok3oAxMwNh9CkQD6fhSN0a2juX9t/2WFYd6Mz7SuAfjJf67Ec1n05xkd3ohfOktfX3xcfAfh+N8+y2Fo+TVQwWrsByUrik+chfU7gbTUq39Kxs=';const _IH='6a46f84ba416fff1e0557cbcd27f5440343239f2ff00fd261339fa73d8b967fd';let _src;

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
