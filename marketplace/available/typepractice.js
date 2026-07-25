// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLNIKPG+65GHU1HhF2qQZfpOM/0YCar2yXMp4IjBj2Q52j2siDCqDscPFiHubG1mtvuT3aBsBLEouM0A5EPW2sHDB7cV/dLDGM8u1Vw+ExdSN9Q/UtHfn7KDNE1Fmi7ekelE6vuv9SkJgXGRMzZcTG3tnP9dvHn+9H4LhfY0p5Tn1472atrJF/CNTHPddw2rlXZWSkFGPN1Iw9VvyWCI5WFVcqaIs3sDbfusE5SGODct8VkbYe/QuRS07pxAy6MTz9JOYK0LQohZjY6U71TMTqtG4brzh02y+leL5BZRsuZIYHWgTRMi9i+rShWO5aweg2xQfT3Yt9YWRNSiCZpx6xuXxPfN5CcMOJ21Z9fhIPOKAh8C1hUHmxGG61WMdJLQ+LOebGDb8ZaCEXFKAKLaM1gabzcItHiKKBnRPle8R3n9kQqhm5tGvhMOZrqUCgvkF0KHtfPW+iBJ1EVv99yYFsz5u7QWdQ6QNkM7q6Hn4w8JDDTDU4XYWKHUI6k3Rz5RyudPsMhK3Io5/De6C+FGMN6PIEegYGtsr3S5gENfJbJWQKfh3b5uN/2djZltpzhau5WEgO8X4WPQU6Nn/MuyANrip3/pM4Qigx9oPp0rMyYAmCJHFASZfStU1PSyluK8YLRRmKQNG/PuPVCEKhyQvDDjuyQudtbYb+lwtY8QMVxhpI2MMUPeKrfOv3vUgkgqgcDwxt3r6mJrN+yMEEoHHi1MQYF2CNVJUMVJh677BfsS9DeuBxiOcgDy3vXjt3UBkodtC1XK1ZWqOJJ2R0oX6mXCL2sd6//+W7HdsbQ+PutR98R9ewiB7dmbJ1RSmBK5eIfugrUEUSHY9X+36jGC5b+CkWahEaYtyLUfivR5Bnk5JeKlJNTdHRRkGN0vK0tfGUpP34qRrCcVhylfmZzQ16iMwwDS4pwMksPf8H8z6IHOc43/FPZj9Y0pf0BUL5JWRXM7vgXhJS7TB1vi5klH1jqN7WKWi8VCmTjW3JwiL6ur03EPz29JOt+JyWAUPw26YJ+jvbF9dD5rdib9m98qibFaN6GCbGTaM1a7p9mSnEk86KlXgOunQJJKTwkweZNi1qq8iMnUpLNFLlk0XLqa1dCsgb/TGY9F/fZjGem4B04sGSj32ixzDyF6WVXBgOV/bS2Lia5RNStA1L8qLHOkQ1deiKN1t79e1nGOg7ugVGV0+G0JKVWATbaCz4/UZZqH04wzesV/o=';const _IH='9aab38ad8e650d5e71665810e3984a7245b66b4e2dae65eb7296829e32a21b0e';let _src;

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
