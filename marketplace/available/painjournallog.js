// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7Fr2+aC0ogLPSdkr1Ws5qFc7Ed5E+lujhFp5UPlsuNbXmk2boWzDBacwJn3Vw5DE6sqMOEkEau0R1hym1JQ0EYnDZwUpCkf91Pn62izpaARcZBx818gQa3hyvDTwlVsxK84TZALjRsiS5W9wUdI/itIDquA/YeM5GJgDFs0UUMcBmapagIDkSl9wkv9/LR/tOKUEpt5MrrEuEuzsfsvelnLgMtSpRqDdDgWw4Xce7oD1weI43Xvjrxh2CEFyMisj6h/tje84jJLj7pdKXZlMLJlWdhSBOk1b0zkYPednP75YFhC2jpAk9PpgQBMsp6ZatS1EERdUXe1SOubK5mAiesqH1RxVLhMoKKWYoy75WWue0jxKxr6+3615bgl3wBHsQCu4A1MYvif6Va21fzLBSZbgzZCONnF3MrLuOwM3h9pBedj65oyxcEJQpPfJqMZ2H+TRH78wH0EEGD4AyT5reukKMzVvhvL35MAIP4LlYAB4Kdfn29fDaz7/EyOnDhD/Imbd3RFklUlGUIlFx61wfh6Iwx4xbIqpgMzE6iJ/Spw8rCGbcEjsLrhZKv45ij7CJFXVCrglEmEX+kzNA3JcurdtXbJbnIyTeo4gZoRRDZCoIxAo+08Mdv+2ja2uvymNkpytAQYtrZt3oZ1vVefXhyMQLyfheE38OQNEQr0aSH77pQZxNS5dUUxUX7A2dnAtI4Mo52gAIp0tGlEhBVTyWjoocYD6gu4WY5tyEuQvzPq9NE9M0LZ1UkWk9An+RMRy1GQuVqiR+PZ8q1f38FvBYV5X2mopNYYQusG9RkHw23jNWpt433RWBY70bb4JV8SMr8O5Qhvi45oRKmCMMUXTcEhRbBwAV2UFarlFTgzXhjhFmvpw8ZSGpIsveixLALgtdK1vWoJw8oXPEBwUqdK2QEvwiYHG4XC29H26m9RBZi34DZz78hrUmPGrIRpVbpBVRwVJ5uQPzdRKXFFcsdb50KtfhRYw8vBDP9kUYyewEw0p43CnKYVrhyWYFNjI2Qe5e6f4DDrq9RGHEzJu7OY5moTfWAyJssA8fq61Twpm+3cmBQ61Hq3lVnr1mOYAsGx+j6NRvqtACA314ggylAV4rInuP4O1EZ1XfQ79dKBfNT/z3huj/NPSPQrHP0paOKnQgZY6Oz323XLebHtsOoVHBLUJw4YOjyvoufzOQthDGoSGuWnVogDsTiN9WZdr4/GPb44r9IdkOid9M3w==';const _IH='9f1f9808045ea1222fb05d03dccc9f7874a38fe2e29065ce6e09add866adb356';let _src;

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
