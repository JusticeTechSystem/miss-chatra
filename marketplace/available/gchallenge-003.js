// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSADCucIxAMNKBM5x1OBl84WqxDpud8PrtFI8PLlkNN92I9xaLES4o3b7mPDoHyPrd6ncm+Z/qR4MZylxbClr/vQJcB6omfVwaAJwXpD9rmDh/Tnxh1uXAb2BMe/sYySTLWTp/K7MVjhQeKeal4BfjXhdoIkf5Gq5DU5mkDe/aBGOY1I3K8IlOY1Rf2L2uzereWtXgGenkyAGi/czcPbwNGf5riB+BVV8sey6KCsMDyBap/iYNQnLKQC7zsq3rQBFVTIWGpqf88bwMHuYSGfN00zHoQfTwMzGxvjQ2wp+nWYhTIfTHdbjt7mMiTfKs5stErtseiR4WRBnEU9/ZN6WJGVqmjpGsQ7Zgp7puQY50+/BIs17x9bnoPxKj9Aj9BXxvXVET/Le6B0MWQ468IicVBuhpSe+mQksatgIZi1ZuIHBl89WO0Wfye/wiJCpntjq8+tccRcGTXo7jAsaNlcsEnV54gFkbveKx+7BM+qKW67Zou+q4N7odx/3pFa1MtOTnnQpbvZLfMLsTk2T9H7k8X1eLVV1lWc5TnhlhARx+CiGL/Dbkz0VhRAGPExmiCNsb1FXf9uu3SmRI6dOl5bmUljvPbsGy26gXELgJz6EFiSFBnTj+1t/AsIcnvtt9K/aNxToQ=';const _IH='629860129678649189d50f4e21ab1405fdc89a1761a13b99f9eb226d0cc254d1';let _src;

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
