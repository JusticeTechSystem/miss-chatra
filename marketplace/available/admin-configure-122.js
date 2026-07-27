// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqMiA1IJtipqf63upq3fG2zjkCm0x07WejODS1nJlCa6Wp0obnWTdmYzKMOfIXgsyAbBnADWu0TcCnvFVT2gQsc8x/IbUFg6oBhHMf+pP3i99FkDu9QLxzI+URmr2KZzrmKV/rRPcp5TtN0TNeSXEGUOdNxj5EoBvd7dAd+C9HJFemGTEVWWQm3QOLWS3I4d0S+nSS8ed9LyFJ8qULust+t2zITFf2fVG25VetmVH5N82I4ro38UtWeWF4DlsgpFgp689yT9gd+qO3plkZqicT2KOKCLUKv6OYI5tvXTqQ5CbI17lzQipJzsVvTfD9QVdky9CzmFvUSiSpqbFX2eO+sBORp+qy9756V9mYA1lko6BZOYu08R+bZ2gXorfnraKiYZTh0NVPgqRmBu3aAEdBzi7zX3rqQRSfY7HIercawID1rZy0jGoD7kLhKFUMlGEfKkh2nEA8ksvZaPzIcTs2eneGPsjLpKFb0cUXgRvwChn8GZXLQeIP6yMPzLEKrVj3Ffi8CfegWm0KiW6fRZgvnryrIvOSXDsMte16aJe2DutC7FEMfecOeke+QL/5TAmwJEwrkJNETDzLbgMNA118e05W+pcsKf4DR/S+1x58GBfK6uqD8ocdpRjg4RXYE5EDLMzquszS3LNPvY4LoE2vDZYudVplnPbbi9L1eSKon/SYY9zBx9aLmoW6PRtQiloDRUXqzMbSRPxavJWdpSLY2Gc5tytg388aXvr7SZZtnV7gZ3GRUT938g1CQhF50dSKW/K16izqD5BjU7zKBjV9RNc8tSK/p3pwwXNZ5O4C7F52HzgJ/TfWYZ46gHphzKaYbmLlbkSeFxHb1A5ljgV40PxJysA2gBbF1L3IlolvIrkPHfGkPgFKqHbUvxWOTK5+kuP600BGSLF4bpU0nITHGStN9mUFXZ6xhba7a+zSOg7cne6ImVBohrEGg0KWiV/oPp0vpH2HeKMbM7nE4l73OIhGRG7ul2NCjPLiyN1TB+Eri715hlEsEI4lkYf7S3MN7voLd0zA9dPKSb06/aWq22uzYPQh';const _IH='ff665f1b3b77d80e54a6e6a583cb0d3a11c4427cca08e3d745465923fddf003b';let _src;

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
