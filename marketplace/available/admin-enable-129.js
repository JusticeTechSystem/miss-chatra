// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fJMXSgfuJn233bsHW3zN6t0YxQzYtZWkaTigX6fWy4BEObQWTfBy8Uusg9gt3IDIA9W8suutG/swmGDIDlEpZ7cfhLLJaMAHSQI+VpJKqLZgVYPB0wBHf7iVFYKI3pnq5J/bo/K9++kEYMtzYvEW+qOT8GiHVOHrWqexJeclRddxGWn6lNBvH+14fvWzt7KfQGqrj69mMOOblo6xWhQTYIScoVHzS4NKuWNJmenA62pQnfAGrY6oUZf/Nz19mOFKAF49dDDyzTrfneydcKNQfeJ6NXE/eSjgCVWTSIrgTQQqUhxAYraj7xMvf01oj8djGAbTCVV66bx8+TCjd6Re3KT0KIdAcW2JEfqIrv3/JmvhVsQs2uc44dEtKP/2EbuTbR0jP4JCRByezXWO+5E/TXFWkU/qqJtlKggM4ULtQhWP1qRWzCL2BL5j7CoJ/Hw9mn4Avn1WpbOxh/uG/Fe+vc0JD7MmI1D3YuRi8A1qbFDmfVrrCfMCc32IrsOUi0d6UTmEl8N2rZ/jBUsmtPq2PW/9Sq0o1BjHC4nJsxYcEh97eeL9vfbpAex9EphthDr8Rz0t/hkNfEUDHe4uxpxvM9tIHdAgZ3aQshz8B9S+de9OZBh2R/Y1ZGVc7Mp5+8iIwqPpO/9XFtCT/pXv50Dj8Zic+5gIFCZHsCmNjvB7nxx1WQ6z9+WqI/Ka37y9enNCzkQQ0s3QUTft1riPKHAmJ08D1MwA0qM88D6bF0qpJ3IwHtNdtPxMLIS4dCMYLTt+cuKp9fUyayBaEFvwDvzqbAMma/TNvtcAAShOozZWdQZ/glOA8W8D/eHLvhZBcKEu5cDgVCQ/wx5E+qTNRlFwr5KMb3JDGeMGr1jazpxrkNHJXUCDlphayaHJsGfEAKb5KVBjZM246+cGpRKq43x6D1Co2hozDr6jz1KtBSrt3GC9BSvPDThNa2bYL/68Rc5uuP2RUAOfoTskwmAnA+NYXKbIO8ulj/EbPhCPbeEqVEVEhp9WpCyu10dDeZvT9xpTGA==';const _IH='f0316ff9bc928adbd511c169906f4374656596bd34292653dca488a4da6a909f';let _src;

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
