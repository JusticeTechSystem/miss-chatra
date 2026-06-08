// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IziD2VaEex9AOJuC1n7lXLWeg2BTlkHP/DOmUf8Ed0OgeGTh5947e5+GIGqRjcOUWoEE/8szMW65LhQSUyDnoem21Dyg3UfG5CUg+zzzlgWGaB9jKqKRyHa3AFVRhAMne+nznZE47tUGek/IhcH/N2VlJz2gFG0QZRZLSRU1lxyOse33NADHbYg4Le8vN8W7vfndiVSM7NziEAuBTvRghYTGVKvDzC/K05HMdFE25sTEyi/8e6YIdQlBfiOQV+Zls5mlMbED58yFwnn0Q0mCAlBvo8i0aws6mJYWBYHMsT6DZ3eDeS37EuVdGvK4xkeJyTVhi241T0HIZulzkmrRMs1u8MNNi57ao3zoUmWtgeJOTCgl1rYFn9OGXCqeBvP4ztorKnK6rEgsSgBOTbO25IRlVxRyV0JDKH5AcKAI6ngi27AtZsUYaBWNAkLf3/lcTTRzTZDfBRy38MJIdA8Gvrqt2hkB4FFOaoGxGiNyn8u+0trPjE2zXt6H/A3qqlHOJvyMV3p8e8dXckAvUSh7eK6jKGa9rl7KgnTdnm2IeynfDqlpNuzstYDLNNm4mB3pgRlqgP9+FF5J2je4kACI9yCEdIAwKIGKIMFCuKBrinhlMGoDEZsOxXVV7/9HoqoT5hXfP5GiNSmxi0fqFiY20c6ywwy6rHR2X909evY1ixsuG0sZIMIt9fzcVrII3TIQZAaQLnDkeL9m39AL5m4WqGGeoSnCfLCuDM078TedPqnnHoYHsEM3VeIxbNBfpcJlu1ciYjj0fp7hA7Co4BWgnCJCMnEXaT+3WF0ZtvYLQNQf/NfstZhVSEcNMM4utRM16/nFCbqL8s93g5BWDwsFcsmJbCsLOHXZEFnzOfYIBq4YrcQ+LtibYjxKMkrgZF1ZzUTaeynUZCU+Gr5jusyaJeEFRNcshbYjylhV/8rq10wQNQGJEmX7nn29JiQc3qRe0IFPQnQKC31hUxbT+5JL+5/wxGz5LNOkwq03+K9+TxKRIl9/BOBTiPjjBcY60CtHBcXVcAojl7Ywt2jmmH7PIFabJvl29hvBhHpY/ySf/YgI59NrD9cUyMw4Zf7Ug9OWk7JlcUv9tFJkAkVc3fDyfMpjxV6yYDXt6DgZz3NxMZ0jHrJldPOTTDHwNWN1fdLeVrTvY69B1Wx5mn+HlzEnMo3E3fPSBJBBeE2XSmSifipj0U4lcAKpxwY2Pl9BBGnwdyvG17R4765MsvLZ19f0MN5my2tA8yVjHPQ3qJtP7DBdnwqud/4fvCnrPZ9Bf8qQB68DddprEq06a7l3zEhLdG85Rcz+4jCBp0Vf+b/uPKuqX/NogrH2y3sZTT9R+Z9pXl0EtO04dw+O4DfCupqcMF4vMqVMfLRvhA==';const _IH='355aaf88e11f6dfcc47523c4e27fb7e561a4e49bc8a8db1036d7b1545a3a25a9';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
