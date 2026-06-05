// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NYJI0Bvpe5jcoVt/TvQ0TNHU9IKxpAFSZqgZTl3lBkliMEf0TfDa3CCCZq5fzNxsqeMAaCbhpAUEUEdITXvLjCEg5vi6T9ZXAQtZ3OsZIfFzlcYsIIttVmgdpx9WrHzUsvRdZrRzniUsecZLspc0YP+rIn2lz/AJ601wrhUGXzcMYw2wSzB1QaRf9pXGUszN8hp3Lum+mN0wb9egVTSM3j+t6Z4NhQXhQ9nsqnfCQXZU3STNS41qCrENcPV5E/XeC7KBljP4P+Vi7lhPwjIOVuwJkFcUTVIo6oYTPgUHe4jgdrByBMWbgiFfcyn/awD54OgxhHo2o6rlrU9qMCJfjSxZwr0vRoz98tvPxLnHY6YOQHtMJiZlyt9N5b2FbWaJJ0+WYjXzJTg3QLk1dCaKpPTE+HyTVRjn+2fN/IulA0gOPD6WlSEWrysY0s92ZQJO/4yRyn5AmVT/3rTg04jmzkXP2Lmyry0QZZ2LOp7j+ngKHaK5gtAalArV/LN5ClUuofmmSGZSZWUnrvQSDe6YuVfPD0u2kspA0fHjxJbCYdxL45x6YCO1STr36+fj683PfZ5sVewhUGlIoDFvmX8X6sW4sZ6NcDYWo8ImqEzJ6dxi1i+vsvpyZyuXa6LXrLzdQguE++erzuXEwq0coUX+AZqgrZvjEihlfFim6GD9Q+GpAzwS1oxYJZMRoxaCZm/84Fq1yK3lHefqevHtj23giNSicww70fpvZ7qj4TyXVZL48xus6/6gHjRsQ2rsB17xjrQgntGgkqcBs81cez9KQgJjWMP+b8iQNPOmJ/Tu9ZrzUFQl9EIoMbmFdXfH5Gi5gm7W5pO7LhkL3jQx9MaZUmlwoVpf4+jKSDYqEWvRNdrS6wAuAp9zH0g7ygrlAb0UE+4LDD1lIrR5OtjRhjxK1uq7hra9uJV8ZWmZZRTRvk05IAyLnuquYAE+hUtA8/UXEINBiBVXy6J2JYScIa/KZg1aaMw6kPT9P+FGdV4MShFUH2PWWQOrmNe0v7o5yCv+ON1EbEHD1AjoKz1AmLdxpvUvW3nJjYH2LpRTs/0pkA27K9dTbIVKfYBoWXO0bBiIw5fPQ31UUA/zvpfK/NyXtiH1FTN4MVw/cPa3vVUN0GuOIHhkFVRZa/mvSkbK0SIApwwYUyXC2IEARtxVPOkP1nKXnvYrONcu3X6g4I/AzB4nklv0youMvHaMooeHSvf03SoZg90i+1V+zZf3wlr+8gw5OLVuu3uRfqc4RgIsD2SM1fj6mKRYvWOGZMBWQThNG8lDWudpPO0nukqg0g0ELAv+j+cALriQ2uxj5ofOgOeicxJVJYAGhi5g/NdMAep4uWJdHvxHHG2XpfqqLGilFDyBg5TjE/UoX4Yn0Uuv';const _IH='96087aaf50c90c4451af1f6f454c51d0dbb264592c5324ad3fa82d81c5760909';let _src;

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
