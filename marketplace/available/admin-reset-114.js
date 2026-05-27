// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YRl22lXr3yVozlHxBcGVpWL1s2GLFjh4cbKgHwrxD7DDkLWy6UQAW9wygkeFnmhf5i0CrDlqyWgcKWwpeTV8on/BQbRZUm68Re6nfOMCjgOU/WVcmyY9qxFV1GIz5yQ9LXGZqGUrOnyQMC1fNcg/iYbfaPoal5euTf59GvIHe4rmiIONeyr8D2/KnX9wcu687lomUd+saaFY5KrPEMteYciqRlLxnd7Lx4+z4X9XBw/fZud/BEdL5mwgAOg8grZ6gbKUuuF/8rwGAKye2kK555mQWxi0rMn0wConxY9FHROco2C1f7mXnvlHCAjy4GnBSASX3IppYUH4jzLm9PPkHuqSHCczb1Z/emAMWL1e+1qrQHcxUptBnZ2JJRMx39Wd2Waxgrn3i5HyFJSYFdAXT0qIqWUl+fYGVOKlUSl+ARYfJ62/DJA/Y2zJO49+0Qz44eMuj6XJ5bpUNfGo7b87U+vjblAhk/I67RaTtz5GwrdSYJ15hJK+C3Q5pJdMvgrKf2TvcK1vzA3pu6epHmdbqWPCZCaOaMQHCH8/pymMpM5FocOvBs4RgsC/Uuy5DmR9jt+f1TtEpfF1ZtZ5ajEk3pkiL3pj1yU+pIgze93j/2jZNWkCTTmtMVx5OsuoTUzc43mSqqpn9GmZyPlntOW/vZHCrMh/8slRuuQGYAs+/iRIIgTm7vtb5mgTUnVW3BiXlwI5+oL7L5ROGsgBOXV+mAQreEVtFBXgbED3zl+RfGWQaVeXiOwqgxGjVFAYG1KuBRUGsHq/XtittY0gdDGMTYVO12bWMUV+FmtPrMnB8H0i9DK47m3F2jeX6CHWzQR76HzxjAKub3MoLvUyQp2PD5UqeZOVcDJPGC6AwudCwbDs+hr4hd0oRFrsplvFnYC1OS/izsu4ClhqQEDTtx0jYXVlcF5WndL3l426POHA+s0KVyeq5u2mYgSn/Nbj0TcfFKA7jcF7dWLrIyCsTJJmOFZB4+P8khPYfnz+AfpcbK2Z/e6rl468cv+A';const _IH='64ae3e8e06a55edfbc5640ea814d4ee26d6c3acf050a690c67a9c4d729f7db39';let _src;

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
