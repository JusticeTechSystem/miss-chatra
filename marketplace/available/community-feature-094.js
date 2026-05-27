// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Bd7QE2i5P5U9EYgjPGG0GwD65ZEjen6N9t6u7cbJzlNiOGEcXu+oKrzExgFylg6+q7HrnNPG6FI+3ggnysicj3YA3j2T+e/mthotTN8ddqeENfArzN+Z0g8W+QrAA/+RiG8wJJv8gGA7vNW1xgiSAM/dSQaDqbEVHCnxxGOEKnbuWAsb1l2tlk/qK0r+hmufDXSuBsXeZ0JB23DN98kHQy12vQH+EiyBdbiB+mOmg17jGrFLpTygp/LTXhceNYMTyZEMZzCbdKb9Oyq8HJEl7XVW2a2lrPt3vp/tpc1QamMpWbZ3ab1vNukbsKCkUX/nCVCdT/tz4UZ+oU30YhtydU/FPmJ9qMcECa887/8eJL1gpxP+3lUoPlRZOma3hEK+74ILnAj8xM8VbyvF1A9e9Sp6jm/0NsKSOOFSb+CT52r7yA9hHsJu7h/yld1+kztVJO39D1ACUVQJ8QVcKlB+n96L6VqNS7RcFOgUBhk00xO63eHh4gON81G0EN9/KYbuTZ7jSF2K3bjufc9NpbIV3MEIee6SlebXZCuHcfPeWgZX2j6+SaWwY7RXgGEcvAWeBdG7gjdRQFX0yg7zgu53id1LN+/Vyr8yYkjcsdGQ/JrSzWwWAStMniZPnOJqyg7GN/MiGFHZi2r4zFdejE7lVRH9sxOTNwhyEzi2uxjXffEPsbvaUNqyqstz47k2M8ffQAk04MnXFV4mBckG2NQ9Z2su3IhvlFv7kCKnUdA3titoQ==';const _IH='e42aabbafb4b5a499aba83a3c628b158cb9e3e9b6f15f8731d0e9407988dce3e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
