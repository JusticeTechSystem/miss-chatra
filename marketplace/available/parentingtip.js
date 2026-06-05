// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F+TfE9YytaGPGG/6iLvWg0QKb/ySumpD2JqFGEHB0KoAihJqE2k5/ht2D3h79LfFlHdvhizQl4u468/fvmr+n9ZsHAwxE3iPDjIKeU37xOta8PHByKHVy+njfJysdDiain/mCCF5t7A+4xxRs4QCIR8GvgokdHDeJiqq7mZ15CBEXFZGDKnaJacVBKKgTnI+rYe9eS4eum0DWzgA7M7+kqp0+TNyQg7uvnzASgaTR+Ve4Y+lgZzC6lkQx9wR3EQ9dVYiIDsVc6/G1B6gAvfERvx2mFGpCQNz5U9SHfEFHH+RYg6Ua4gGGW/y3GEtlye0829DziYruHmfKXAiP9M2cKnntIuE2MVE7ls19KIMejTuBrWhw/ZEFef1hEJIDcfNGbAhbQ0NWkOpvuuatJwd+WFzIdBhvKaR/ePSbTN87HbP60W9z6TrYLTzx0SCqpsbnNjx2C1mejXRWjj5ThLaiDKm8+4CyZP4oAIcbDHCGg94dwUFCHwwFpTqXzvX+ubAHx/A7O9LTTotbn5NyFvOleqY3ox1B8l2RkRBtv6SCxLJf9X1KYhh2prpPqkd7D7DD29i952rmUmF4dlVOWfk0ODGDMH6vRezKo8OB3dJWXY0/rpheE4SryxYAglTfkSF95kFld9cpMB7ZmBTCyz30D2T6KHo0aOcsKWTKhxgt2D6L/2nSpTThHmCUuSM98KONXLFfgHOFbwv9hnEVuVNLQI4ZeevpAkQ5shfZ2BbcbSA+VUYgivQsIfwQuG7/mmPQgaTm9F+6vc/Fi/ZGkaXgR+vW1qINQQEvSfAMxfgqTsBc+wLRjoAUQlR5LX/mEHTXWH4grEBXtPlYyb6XCCf5QMaYFrS5xcp44nzbKlycKW0u/ELk0VcDaWWbQFUbJAc14ooAy6Ngs9j/GEqT9zh8SY/yY5zw+fC3jI/0RWW/MwAPOz8xpWwFEdhwqM/Mga6huJzjvvntNpsbilksZk+OPgPcIw4p9KmO6nW5FVQPnbIk8EcPSZnZR7J1VnrIFu4yKsBc8qCIwTIioSBHhDfuLX6PuiS2M1JXLY1DbWUcb5EV4/gQx0uEDm9XIv6WcL/gNt67lZHNNf6J1Av+JvEaD0DUnJkFouGLU6WHP9BxcrfntCTmTTRBo23snwoCXKHRMYc03qWwbu7qHNFiIR+mPoQ/qyZUwiLf3Mz4KXY5bFasT8J8759CTsYqjqFv8bAnO1THr+UtA==';const _IH='5b299b0389b1e7c9fef012dc6775bbf08a19f00be6dd5ab6ef616403e00fe96e';let _src;

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
