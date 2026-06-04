// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ki65bn17pHFPhga615NicRJuR0zIGlI4Pt9J+SUTU/UE9U4HEgCCpI39t0as2SYEFHZS738DUIxWbP7Nr811XZ0s9nHot+LJZvqmEYT8pJsx+tIFsdMXEYIIpveMLhZJQ6Y88q67i6ufW/i/9bqQfJCQ3caoJtgEbX+KN1k1m1RGj7C9+psj2G8N162aAu3ufNv7d3a8o7NiKtWspzlJqMmiAk8Zvx/+Fp5T1alTNXJo0Vn5wD26KwUbhulvJj/XOtg+3p2lz+OndMp9JpsE0SpM6viqgVW5A7WmP9I3wPC84f037W0moCOwA7xFMzeAPMmkKC/bDJKP3TZ9xCzUamX1cg2bqHpG1AHcVGvIMzwYGxwIVTyxKuWjhjJrdjUpz/8GlxxDI3eHUjFGZuxJS3tjE9YrEgZQRt0Mf9K6vdTIKcFVl9tZB1za2N8/1Sn1uDrIS2KCKtiwpeEFPk20aZmN13BQTI5CijXByskYtJdpo1HKqQU8wJp1OrhcDAB3jUZgJvDTdzvM1iTTQutqFWeWpt5vguTN7rOy3aU4hxBtM9CXPUEq5DCG1JoX8WTL7Hm9pTQUwTwYO2T82uSUPzL1vx8D0z4EP7N77XJUXFexs3xZkRgJ+smBJe7YKr7lcFswJ1j02MnZ5l0q+1x+kR2cWihz4ZX7/6Nr/QT3dBFvtKQSaScVEckyRr6C08jCfU5LrdhmAMNsDWuFQ188DsapkBjCcxXCZTSpe98VS2xQO3F3ksseqnLqF8OIRw1F9fc7jf/p+MFbpOR6T5f9m6fv2gy13lDvHJIxOKDXybZceDqRotFP7loCS6YLZedRQ4p1URLA2q1eYLOduLqIRh3aIZiDfMeJfsFF2WgW++RF3nR45tzBi5n75Q5h1X2ARweiRe1H3u4PWMf53Ve0TPF+giRToBEB4gbzotqfrxZky26iFh5IzneB/YUF0rTvd8Ot3yak4Me5TDtxGHiE6OzI0pH+f8k62C4l1ekTMtKCyBlpngTcn9ryk3DIuEKIWDzUXiLmFtm4Td3A6na1ooWrwz/2vX68tLeryTcNnf/G+QfIjcO2qSeMjPwPUBSFM+Gf+2gXLAY3wyQGstOuPhkh4Mv3ceP68JdRVA7fTgRvmFA6xDyI8m1MPijvk8vm6ajxSX8ME72ENgxxBAjE82FaWfqIFhP/KyL9qtPp2+SksRkxI2U8ey892E9Z22qID/FUjP8jctMo0njuBRuVRv3HH7RS0MZ2lbGeb84E5j31LyyJBISMKEBSbE5TIV0DrVyPsTRjdaIFKnK1FqBtRy6sg+ldyzJD8pNKVfwrSXY2uKJUdAhnCKlBe+ibbRvBfa2wLUESb4G+D/hy3Laoxzgl06ObGFuylPBjvSrrnkucvxvCqXjaTCIok7yzU43PS75vExnbP9tCacEhfGX1th0qhh6lKpDBehWEJbVu8B/JYrML6T75FJB/j9CgJp58qg+cKjHlCxnjrjeuLRO/f3uiMugnZAK2qJuDuTN/KlMX4SyMRu5L8Fy+Cy60VRR3OQN4FPyFYhudPQhb8ytNWCxZDaCXYlTIUhxuK2Kr96p9io4lcJqTIctSTHobaNITTplIJgJd3wWifzM/7ragRrNdVEeQyIJmo5nAxGw3AVaM06IWoExulCX1G4Jko9/LV43eV2PJXbSWzwf1OdLh6AultuoUDjV1e8i1VMPFpsrwrLbEu2G4r1UV654X3wR8wIjQ63bQ71GPJmPeUUTFeNluJC34g+1SD6im3XCMB3+m';const _IH='e05b0783035d55eab630acbfd674b56d0bcaf694853fa367428d9780c24df4ae';let _src;

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
