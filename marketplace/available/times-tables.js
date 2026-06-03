// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3p7lVSFV9jE/EQ3f4FbUZO+lmRvyIn0CkLr7Z9jzKQVwLiI93k5Okt/BXr+4Dq01PDCxG2sF/OQh+En4mPkLfCxqVTShCH8bgbGxt818H6shSeaPXDRHHBUIbgH6bxF0oz5NNaBN9etcaBMze/9jZ864Ch/vYZ4WdKSHVfJNpNoQVUwffey1NLt9igukLWkZ8Y0LREyUTynWM3TLvpzVzoWwXxRVkNImji0XlWMTOeYCqB4MekVPMfeoADRbaFz6hQXsS290WT1U4hKCAHXGRs1yOzK5ZLaUJpV1oLVmQiLoBmXL9pOogNxfVQkELaJxCVJHlvTZIcfpZEzqA8M0jvbw1qg9X2kSjvDT2qkVZPpEp5Y8rb8UQrlzfzU9qE+5b4kiEoTABlgkW9Hx30J8QtQjRV9tOuuyv4/xsW/V/NauRrPHkERZ0JRKugt0PgBBi82AUt47KEB3ggyyc+Kbl6ciH1gmS56efa5G/HJ/ttrsEmwM2/QxKzn1tCOzi74ntuAeKlz+C3R6G1qVoFepT2tlaWKUVfEXX4NTqW93LAfsLSvPp9aY7D8Ux2Zdc60O07U8RUdpO2QOMNDKoD0zykQsVHXfdm9x5F6vDTPIwN/CPpXHOyoZd4teEtMnap0thSJTt5eMkdd4YkSP8YefGb7t7RbiTLZ+a1iY7RkwWmi1ZnLkbXYf+ZSKYn2FKB8fKFZoN4oOZqx6sbjxuY5YXDM1W3MVNnVSt0wd8O2uirBf4hXMuqlLQ5EMK5B2JinqWFqpVkmm24A1dfAhLMEbh8cWppRCuM+B8uGXWcQQT1c7PrK0PYMTo6JiFS5ReLAUfRLn1NWfTVzIlM++/is=';const _IH='0ddec13adff184fce9827bf65f49000f2895f7ccde4106c93a593a186f09b09a';let _src;

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
