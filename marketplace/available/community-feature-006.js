// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTpztywtip/txqjM3jCGr3iES47U/SFJRn1WI//ggWOPbbljCOrcP15UI5StRKi1NMFFGXok7I7LkI91q2NjZ1UqiGp+mvm3Ueit+7LXj8I/bW0Axdso0MgSY1JSbCBdrHrQAaa9XDlTIG9q5rcXibRz4yifx815Nz6Z1vF2sNQbP6PzYr/xC4VCX8dVz5OUcgcWJAbL0wvZRdDgxW6leDNVIJFOBp2mo3NE+9X/M6IW815+Os2DZaYFXdA5zQSYjvdHbQaVIoI7YNxT0yEzJ/bI+ZeY8x3c3oLLEWF6KPA1+d4wadFvalafATfT13TdjfR9dgnIaLkRuh1MYE602IHkfVeynT1azQmklNP9W0IKRxOZK90jP+i9kzfhLmgn90x2iwtANcuB98UXCeHNw6aEC0ncssTqzrbRBAiGfhnfaQRK6j7FmOV+b3KH5qdq51I5mJPL0l31T1BwmZnvne4chTFPoWtYa5sSm1QDQmhKmdMN5YTfSr4trrh5RTIDWnaAN//6hBsjekxIYNiwBVQ9/G3rHZhIDGS4606YcAtz7GyGguNoA4MB8aeAKCXS04f6B6gCADP1Gy95sSDGKO0JsrbkVDnwedEg01Z8psJiPSdO5JTpl6qsMXV/KMtcJtKp89+AAf1BousSkDCQWI5yV1ZvLshx8inwYbrWP1PPj16JhlDveAlDb4lzCJL6h5Sdm4zbXOAacszleK4fvi';const _IH='c9bd702a997752f2280ddbd2fae2d82921c2965bf240af73ca6c93f6b81227dd';let _src;

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
