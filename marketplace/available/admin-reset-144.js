// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7LgElPeuUlD8TCisaAouJWhS3R8GzgHv3O6/XaDeDwt0Z4Y7Ln787UcLNCiqiTKatcoRwePLhr1Oc9dGPjhh7i7aYWUn9M6gxAQrWldlxvXsH1mSD5k+DUjEuO4OOQ5xm4tfTrxHWq5LdR/s3Wa5ivohrc1bgFErR5Jk+iLZwHOldFDD+VYKqxwdfvscj+x7oLtdBGq5BFaWSNFKxbzZA2SrtCqCcozW38QorbWwzaoYEdkRhOj7umFGH8kl7VIktzBUJLY/p1lNOu+dVsl3XKEkcFbd8RUL+oSmtgpf4bF/K1P0R7EfREyEvmclbI6eYp/+BkBLvsdAf2Qce1MAPvFImuSWLqFCSssdWzL2XvTP8oTtD5tMkZ3M3H1Kso+bdT1QvSXZP7nhNN8FF0I5/VXKVOwSRKwmCbtBhmF6Nou9LwROmjWCNNB/tGWaksOO/Ro5Sa94qd8/OF8eBQRpv3oZGeTUM1/ic5Q6suGZ4eLVdcdJE1odmSsFumtV+kENHb/KbGRS8zXFDwVbxueoqGqhxgdsS1ktukBSIeN4MQEemkes8IiKh4NwheNisCvB5YnRza3DNd1sPEqAtnUw/e8XAmq8Ji1tiDhniQUR2TLIk7E11wdJJKKMpS/I+qNlL2pAZDe1BgVrOZ4DYnAdA/garsSfvYxnGIZUJ5xodjBkYaDau96mVhiBFZBX6MPOUwmYby0c4PEfEa/9v3kOBeKhWIIKqyES9yPYYHDAld/VifjfXI2vU23qKqDbxVdsysVkUgEyz29LM6oFBp25xnR1yySMIK4DDiceu8qxRcnW9yY5s/7dOvWTTOdtle8Unc1345SVAcoCMcZCkTayAk8NKRbuwMkORKE3n+eI1N2HCF63jGlf92GB08qRrMdUcmwkTgFCInBNIFiv0raUuKYsGusrc+LMgfXEFOSJYbokbRa+j3pbkOaVgHnO+X4Pd5zYXeqLbAZAQ6Pj+oj53SW0EoIAgh4hQte9CS9dk5YuJLgKHAqUcY2W';const _IH='ee1e72eeacaa4aa23febe762152ea8127151f05ee4c43497910147d2fd926d7f';let _src;

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
