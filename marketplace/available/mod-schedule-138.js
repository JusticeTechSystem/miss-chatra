// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2aBzuicpo1Uag/PZQxKufEaWp/wEFlGu5ftfof1AxjKXnccjAn8soP5DuiPfoV6FjvFA0Hi03KeKozv+qx4csubdeizcSOq8nz3y2sKIzwltJm0tGUucEd4J5aUvdtxZN+P+6ZoOTgHomAu9Wl1myISTLhtAsSSr1A04S0/6DY0YbrUeJuvTGb9W7DzGwBKyawXGdddCyC+RdzUNGnuJUKLXkFiFSK+HZlSwVMMQZzYshZdIKYm3qI34Bm3Q7BtAryLkKhei0Rf0LemswX6muH20rhW7s+CiIAtxI3DDGYin3ZlvMh+hf1vogLiwVc8XyD/rQV1LRAFqRHRPiJpM2yZuhM0kUy7MfWdqj98haw9Pk9D4hGfYerI3iWEnsYKyMrRC5z6V0vtX0XLS7vT6t8dwNdKKQhGNLwxcXwejC9IvVbPRSsMLjGOyv8Um+42G+MUUPj9PZPZ2vZ7rQwN+l/Ss8R1IYMCMKxCcNW+noZ2TzzGVNcEWEIM5uKKnyrX29ukLJRA2SFF0uXqm1TtXJJ9qt0zX2dpBjqT7XjYMuCUuUHq2obf5VB1hs0/xXBU2LN6q1ek5pitjrOzSkUaJYlQsV2fivNSTfLOdzgRzqhVnMWY5IqMSh746pz1T9N3eJ5K6XzJPVPMvP+ygktqIDC9zIAKtar42wxURf2bIaqOrn07qQZsxHCfxLpmVB8wmbBDqWSr3tCbpnPGi6R5Xj6BeMafacBK1yp1Ar6CBefsNRj45QE8xTI1TneYhueHjgSnWuImCdRK1bCsRo+278TEv5dy3JjIRuTbStkT3g/yEKxd56Vm11ZXnBvfejPRIDYn05t1jQLlV2eD+VTO3QqrLbPk/nbYSlotsBkxMwqB+sKpdLp1A0iOezHEotDnAzXgFg04idXLTUgKzlli4v70TF0LXc+Rh/XrrLaJFTDlReU6DRst8kvX7yN8ybNSClrWRhI+49h0Ub5mdwAG2xkYn6v+07bIhfFT82Oe7z1oA8mAc+FE5t2FX0nBFkra7fJFl0IUP70//pYlg7J+x9hnK2CX0VYVmx3IYOkCZh8wGRb6xZ7p1pHvvc/UsI6MLnNCR+HhwQYzdJwXaCtWWrh0tItI1+bkioB2cpWn5FbEqOZ0d1FrfZ9SFR5Hb6qh0EZISxjko2fvcv8fvLzi5F/K7N5Upa0oDTp9bV71dc8gfoZhCF3wFSqUI84AClvf9KUk46yTff7HKfP6DRN8jIZ4QLxjrIE1y58ZmHxtxh1z4X606mSLrKMevymr+uFrHlnxs2nk+4EE5M9HgP4qr5l/I8oV8CRpIoEBSZQEi6TIwhaIEULvhIxCXxpRGgIkx6BsBCW9unYS+E+vMYZxAIE8GT72C/9u8iMK4mBu5NNJIbrKItwEY7MhASAAZPVRQEL93/dNFOGnh/+9U';const _IH='72c46cf499fa26db2c84fa69dc01f6d3302be742dc7c813a09d8003f21317e40';let _src;

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
