// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qzNAJS3eMyjdLVWcoNFdl9ANrxIuGcHu2kx6ODxRo9yZwu+fYeRpmnPRoyCDxPq728UVNX1U7UkLj0q8UK0EAsK/c5KAzvpwuxNntwlsmw9/SfeKml8CJFE4uQg8AAlZ/w4e29TlAoNxgF9zDlutuhgWd5NS6DK/kxjVDYPun/NLF/YqZsy+smxgBXHBDyks85IId2hpY4tkSz5A1s5fBcAs1+ys8tdsDHHHRkMXJ1oMJbNH85ULSE33rcESL6JCxA9stW2q+oiioO1ZjUaYyxLbKaL80agxojmvOjtYV72KbvlgzIYlhyesG2p2NNDElpgynegOay7ySIzRjFPhLu/FlM1BJ9McewkT0UMlUCEshOmASHg/8ndZc2qTZv1zgV9i81jqg08vApKQWtXEVuMoB9NKqYeleCjhWnCuRdDZPl/suX5v2ZKceZ6OJDYC6zDYSJSq4ZJWjZRcmTARqHzYoRy26D67VN0kBWcrfM5QK4/fqMiu6w4MYJfnGTwMLSfnZb4xJX9ArAEe/UekcrvAxB/5jqirENgXfjCrtqRnQGWdIiL6qk9PeU17qkQg7X03PIrzfUcch0jg8cAdEEaqFgUtBnv5Fq1/woNKx6uDBsP69Iu7EIwNVOZReZuCHr/b2HZSG38t6tk77QDvTHuRrZKc3P0V7QGjeegtjlImLfi3jrGitYzOE8jGnCea1T8Wt8GXJoZniaCt9GDQxKP3NsXnKqVdCwGTLxpZ4vyBV6MdM5LKIPGAbiUNybwcvGS91C7ummrC3ctw/BaqSiSaQYq2Hyb+tzVeLuF8pGZR9fDfjopV0sk9M3BzTexIfW/YswbxI51J1Qhc9juyvYri44yUieE4vsvZpcgVOncuNTFEbBPeKf3vgO8UBF5vY+yHBTMYbFGD3d+zslGN5fMQwFZnGU+HDphrF2wJG9iAhcvvfKW6xq5B0E0K/SsW4VdIj8H/ieGdzmkrgue0tXlMzcCVugpG3Ji9gnvtr/R5e74JgMiIk1z8oN26hff9ENvXwtVimY+vElwxg4E56lcjnwA/CF6bvXJAqhkwUfS0YqmWhPHPHcY2U76199Lq9GKnTwbMHFaIlgeBggOUsdGMsVwmWQOw4zVHHbgp+uVccQoERgzYZxh1rUv1nKccnT5Kz1SeN2LZdyilCy6Q3fy4S2I2+k7XkOZ4V7tdzRDXXO6Fb9tfEtuozjc0y1gFkYKw';const _IH='cb3130a2598b6a51f4cc64092e8a16bbce2313ef8bc19d1aa1185c883de2e7d4';let _src;

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
