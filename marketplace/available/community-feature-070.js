// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9f2tVBECtDVrVS1K4Dubdexuja/S4MqRx24u15gE8nhefS5pGNuclv0p9AslsGMPWAfBTbZNXnQw4nQDub9e+af+CJ5BeWtOrej6Jy3VR9ahMtc/KwGvVr0x4ENpRg2cNqy1CE5E0PXqDVpnVLprMuLYUgY8Kr2Pwjy9GlKWjRRFCS3qSR1eVywFEpkYWeuL4ZfkeEABGF8eC5HGk+PHPZHOqgt/pxO3XrfMZgpzxlzc8BW+WImLg8dD0asQnP0HEkfwCGsgGustF4pjU28TgMBJlHylaho+cHgDkWxDquTth9+gWafk5XBpT2B83GH041XynKqX9OYi6S9BlWbriFz8XopAv2lYIzdpcA76o7U+ZRrAWvtNXWY4QOI1WkV7L2wlDxD5ISiDOKfmdc72hwyftHuDPji08tHun5ScEm6Kdboez2tlI+udCUvacl784Ydam4f55C1/JC8GOHxXb8ypqrRQCGWcGMags3jdSnH78I88eE1gtxRAt+u1pXrWYun6PcK7WPGt7eBdi8keGNyn7Fs8iCXPVm/CQELwexxU0D9w4v2KKMcBngPj7hrIcBpfwOi1zpuBxvsE6tSDspcfyYSjfJpiYtAYviQXz0MFoQ1zqk/vZjnnA1J9bHkVKTXOFVpdzNL0uNC1nFeFyIsQpYKhhsSiRLh21HDrlQ4gBvsi9VmIPOtTMr6bHEPBg8Fh4Ftv6jH1klJWwTGZjeL2Wv8Q4LPfdv85Co5/zwE3IipmPRg=';const _IH='d4434d64b2f909731687d4410e9b427f98d239a309bec1c9cadb375568005deb';let _src;

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
