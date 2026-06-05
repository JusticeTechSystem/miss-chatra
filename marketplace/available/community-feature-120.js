// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='88m0TcAp/pNaZcK1rV9MCntcwweSyiMpitKDHTA1jFDRaUIrqV2bT7r7hDPR3JD/wKi5ClXWezly1ozv13zWyj1dU3YSugXWbjzArZKb7x4ATpaxN8Oz5bYDsGWWVl6pzt1TuyukPLOP1IPjP0hRdBTLFIuRBb3lF+QxkuKErG3Utt6CO3kTKtW4SOEt1tq7qFr5A6QuFZ3Qi+VypyzlE4TdPNmVCqx4x6T83wnmqKxEezTNSdvn/kgHbFpJqrbRy4epkLA+fVDLDTCGHixEXG/nmZYsrFqUAjEgGP2uef5oNWyEKxTi92QHJt36EnCTxtj7Pywfr1MHgBT2mJ+en+UQyLVKUU7dbYrrp2RQlrhYpHjSlVKRnYK/24HUShGiLk68Is8dYfPzHomT7/my7bcioo9FE8vVXAwGs2+95IQhGWJkHp/3dMVZCezZ23PGETDftq+uObezapX2nkkYDM8V9RPu+sXj9Mll1wgewlL/o+yfSSoIjk3hTfWsRtiT3RBE47U/Z5C1ryaOkMkPRNqGxT6Lcjr1ncgejl5Xe7uwr8FUSG6cPeGNs+M6NMK5s6XoU/Ipqo9p6uEN6BGiXo5pEVDV761eWVPCNpxZ9ge45rXRxFn1lrYaMdFhQY9d5+vdCEB8iyTY1SrAk/w1BkEkpPxKWtHm0Y5VNHlZohA0RVHyYSQj4T93oJV1xWHQkenaCc6r8gkns+jtAr4B6Qgvik6brfW7IB8YxR5CHcdJeKIPixAUDQur';const _IH='36cb35575642f9463a5b63d4edc2cde5c644cb20e2228995ced8e2a02dbb0d2a';let _src;

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
