// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6kDENuOTMEgXAwaDSEuPK7AsT8v//5VmX9nr3GtctgktvRCHUk+miUdyDvPiipybuxRhY1feGVWE0n6tlOT2TRHhPjuO7NDqyK25AUK9NOmoLBJt2e+QoKEwcr4kHNWlr0SuQ0VPGkkCZKD42v9wDto90YhCRjsM+oTKlDYK6oIfObDT05zEeRli9NYgoBGBYLJ7knpstZNO0Jrr1rBWGQ/dhE3/MEhtuJC4GEKmneHoxKmL2D9nMsae/Axf5F0vSnrtBa9Or39f7q2DcdS0aeziIKpypx4vm4vT73dXpgA/71uawu8E5QIMI/Cl0+zuUQMGznRldPp43X1NwiP1CarKNWQ4H0YecmbXox3HA9epGsyO5XQyHskxiK8+IlvJcK66HOHmnv7GKtgtr4Wd15sBIh6aL+68wHyCZrQCu8rtGztswb2SDw06JIB2wVdbi6xLKZhEMYm3oDY9vkRLIwggDqQpB2zeC8Q0VMGac5lXzgH9ekKA53MckYV+NgQUadlsnYm7Vo5vWnkteuK2fvAFrHPeXpvgf1AjoShgpxyfQpkqP/YfE5IM0NSpuxaaXeTv87y+eId4Dq69CgkfKe6+soZgQCSxXfjgFp+tYUi+rnbNeMkiEh3BvqzBTOyYcKRAk7CbADTy3czSrsN0FYUnrbiEq53vNUtw4jwdTwrEOISRPBP3Srl9uQn3AV068dIq1iNUAoIrIqsLGGZ6geWi7+z6TaB+u6wZ1Fs0JKNqNrv/XR1xL3p2czzGW5ifbmejS1gPcWASBXDZa0Sp8E8jAVk1dicOKQzF92U/vR5sRcaMNVXhzXxIeBrsdfqwZzxLCW0DofrBzDfE7xG+mfGQ/piZFgxQXxML1ausQCl0+cQGevG7AgX0bAIGJmRyJS8pYfSvzUHz3YOOzfcjvuvf0EOV7d0L36xN3enZDW4NXxbTBCS4s3EIg860jOa5Jo5zOs0gW2lAx9blM+9WzgCm4FHb69n/C9CcY6iOxMw6i/aXCu7/3Fvxqz6gxfZx4CQrOzOgCKo=';const _IH='d05d21e945372ce702ffd0f083e047764b5c6dca233096a2a71353b3d0c580c4';let _src;

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
