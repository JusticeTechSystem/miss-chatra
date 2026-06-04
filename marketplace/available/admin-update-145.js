// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ryEZBNfZjFOcgZjqfV/AkMv+rGUDcjeXMPn8znw3gHQzhK6Yl1P1MRcBDAfEMJ2v7+OpEetjRFO8NTJpqXqTMdB/PJY57fOO9jX/PmVTLkoH6vGrCMpGUVKYM4lMuiUvpNhofUx7lMk8MTES2BAk3CJSsEvgcbgiNYMSrlKLL9E1wJYQ5dNZg0kDc8IK3dUMdrVuzdZMyuzdrvQSLGrRuWtMxza1VVSxGV1vvL8O5uidtrNKG9kK0x95PurBQ5tF3sRqd8ifngYJS81GQ9n6MjJ6GvQt/Cjxp7LsyKPXiI/+6K7GiYA3n+ZKbHKtTkC6EfsvsyVD37jWle/WQL6vhmqm29uaUQ61sEa+RgZdpE9soY+F/jA4kl1zSEW8vEmUCr+/TJ4LTZVZwyGkVKlsv1CTP0ZrJdF5Zyw2ZWv5kxxFaI+ASzjwtfs5kLCAMobfCUcZ664kWxFQWxR/suXU9IPZvCJfjX6mHEUK2RgEzMfLZ57MCHyYfuhKLyIO7tYNOAih0Gw3ZRY39le/jIOH6M30MH2vp+8K3N4ij6GQKMZGTlqMnquOL0nSf1L96d8IAYPd7jWYlEwe19yMBsWNgJtjbNmMDSrnnGgDGbFI2M2M2YpIbv+ruvP6BxnrmQwkGWBXn2GTEoLwdLpAwzuUjW7AI93SNvD/hNpBrLbDDCskPHhgDVRgzHtA456qFko1fHyLdlrpR6ShW6z/VSDXEMPdpEYsc4TD/VSukduWmy74WrqEGwDY+7DEMclWqvZEGWStBaFhG/IbryQZ1ekGxq+1fWuWrKSZkw8fvLRuRBabGrnWhr9uNXx2U3TYNqh1tV2pInFmxbMZdERLT2A+n9kKn14OiEOtHtS/ZZR53t/gLH2aUNmXL0mRGP7oyom2aBiABQjFg23dkUI6CYXyp7oXGg4UfUC19jPNb2TArMGjsN1ogxMEG6Bfuj+/Rei+C00KEFlIsCnPFI9xADeZcj1/A+yt4cLP0+s799v1PQMLXfoOedrQNRaIwUasIokerw==';const _IH='7b566ce4b9d1d400564e4376720579b012e1ae8c09f855583fa3e3d3fa9198ac';let _src;

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
