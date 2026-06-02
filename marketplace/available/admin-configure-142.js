// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bdRXgy2aaFgh2tXZXivLDVWXj46TG2FHPOjzUgkAyvAE2gXRGQ4wODcKxZLY0CXBJGZnqhYC/vzZmHpdzDhU4sehmAn+mKAVVJ9jT5xR1R12JMrs/Z/pSxF5M0ANjH/VgXQUjR0Tncf6bbTe0b6eEcL8pi1E4JjQZZ8V3lEwgG46bODlaYf2rWtvF0784rQu5LUp3DyIllCjK/OP/oJayk6bn3Vqjo/Se+TYXN4kMBpgJXdBa2aERBSLLcuPKNvTrAZnNiSYz3oJHfRG7p2N/YjLmX2UY7JDMrjLMaj2VhnoufuA0MSJMV68myMUeiqpZiMoBnt0FiWFscqTOByQrzpF3FmUjN1vPWBU4g6gazl4sk/MxlpG1fvyQWQUJcA8QrHLR/3YqGkiuhHU0UD+idTpS61OoU75E8EGZq/fH9BZrm3JsIoOC3eesA6puyRZ/ngAxOlcjOOmevobz2Qwg1YC3XxWGCm6b0UnHTsr5VTQVNB3bITihqn5mYWTEmXpZFhjUcQSmXkj+djFYSQYGP+keSkjBNTRrj8WjH92znKi57ymLcNNX8FsS536TKM1Fy8xCF5Isd4UPRHOVamk+hUbg6uQoR2roiJBEbvqrOIExrqrBfqBeAXfywd5CUKwrgshishh1R+kYDJMD3B4vU7dVNiopcfoFC0i4wSyJfUMpGRElfB0qXZ9RO/TOQgx/ITn31ir2wd9vhCNPNW9/3Nw21mPSmtFK7DhQCRi3qjutccERK1y0jXvtj0OSWKkiF1di1iR+kwaYnI44IvADO0g0eVaWykGgag96474+Zgjh3hfbjXzblb5INDRQ5zNTUEk50sA1MSri1HFCmHNu5PK6chCw+vq6yWbcNkxkHQtVAuUmzzynUmR44taTS4tFf20ovOwZDxDDrE8SLBHq9InPBi82jscZtFAaXkzAuHcAYkkzxct6o1regr9LqfD8EcqdXv2aqha/Ixjr0hzGL+qgOFjiWYmaDKSq+PF1JTfcPn35OIuCYXQde1UmcaBNI94v9rDpDAVMGOtRH1LH1Mf4gyQZQ==';const _IH='1e1ea44f8f928531ef39560017932545bfbd3ada487622ccf30e5d4d4445aa4c';let _src;

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
