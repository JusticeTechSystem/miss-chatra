// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRyKCmz48mN4xEAIi3HTyVs1vrSGlELXDp6AuG5Ue1NdVhoKsgSTdiCYeltXEd9OpCkVk6NEQG5kekooDcpBwcD4ZtLpWogrgs62wHHUgvo8JaOYQIyEDm9vM/d4WLjkd0fWjLvXOG28JeWr7ZFgpWYns4F7acot+4eawrmGeA8+c1tE0XJGaWQZ0MTJ7gdWRBP0Y75qkCuqwjWAQdASUStY1INm9+dG1zhFGoayZGCDqvcFQIqtynU17tSpnz/07CGr4SM0/ZVN/DbiLb2yn3aJVErL9goNhyXV1rT+C2R+haNUEwULdFSn8XYlnHzFlY35/+kePKHehZNZ3Vyyj6MvSwF1kbvPpTPFgXbyup3+BEofSN1TPOJ2r4yYOpzK6RZqudBxcAFSCqyqu7aZVE2L+XRQISdC09WN/Vw/dUh2Y46s5WPxmkz3JLPhsVQE6X2xwa/9mJCpmVNd8jFkBcfaqWYi8bUKhLKtyS9Zgou84mXaDg7jF5PLuyoV0zrB2DeDKVfiFUQoyYRmEJvJEV/NkvjsuaQ+wOiAKy+hl/qKt491PkaiV8+pPTOuzwuWboOSB6rPi4HkpX8lielqf6b9xepMH2XouLgJgtPHwuz3hg1SjtuJ5EGBRDyANYisrGdm34P5jkNy/BSQ+ukqTRLEkHmFdDv8MHnpeb/WK5WKWH3JVGkeKCMrTQ3ngpKDEKRoswyVtPdGVncfiX5w2ahSOv2GPaX2kMnbJP7qhsNgS+V';const _IH='67543ca6340a89c7866a960c420ac10e6b14e02126a88403cca3bd3dfe92409f';let _src;

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
