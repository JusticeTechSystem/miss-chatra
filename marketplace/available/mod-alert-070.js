// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jlqFkZD+h26iP5p1WjK2mXO1AEGVa+TWcLQ4MIS1JYTzUxvz9r2vwdpIGPVSroylYkccduwRw1CDajapCiJoiuUQoP4cnDbM40Ul7p2CNNBLgRp8Hg4KyGlTwDThcUz9XXq3kT4YOpi4zVrPd9+ruju0C2s8eMFOcln6deuo3ZIGd/3+bVQ2zARZg/ozcTj1uva+sZIh+IiDSSJpa4BiFq4co/RE8RGjvnRZy5uyFbN0byRDGPHxDzZBoH53ccYtNoekjF1ycPQtyKjV/Wg8wwGFUqeGe+fibXx2FXXhu71sYlhxglE2Y70hz5QibLcWQjqxLwCcURrI5PCHT8CEOarFAUbnZIScVc2/FqN4Tbi6b99ECEb9WIWEYTNNykc+WX/R4tVGxfFnDd2by9P3iZ3X48YNXR5UK51kyfvnQ5YwyJA89kiIBCYGH2l039smOuEptiI1IuRGa3o/U9f+5CjHSi0NFuftEuL/+oODPmluv4uHcQGAU1S1/H4dPB5izzez+cRIHskN/T3adTiUwN69b3dwIU6GEjkpMjV9DN3HHhjV4UmTVHyeJkNlg778iBBPwjkoiFdo19DRe3KtL9MZAP6gaEzIMFzyvGqX3ozgrv71+qUQMGTDfo5Kt9fA5Xa/vT+lOIlBFRdbSsWUpAawl2feHJ5aym0dJKPIFnvxUVIFo55mlKgW2ZBsvCLAI0/Ak0YWKCUw7UmioOyAy2tnfJcC3uD/DTVixv5QsjOwfog9k/znX+emuv0dvaks/6BKtN8OUSUVCqMFWG11QAR+OS9rP5AVnDwOeuLfxv5RdrBo29KuW/+6q8yCBDoaKA19cC2wYtGX790VANMrcG8crxfjh9+jSC7WBJHl53LoLt6OAkOp3NoDCXrM+lEBJfnfLcqABe6bvGdMUYf8R0usgF+JuNeey9OpM7KM1829IWphRQqMuTxGuS5JQwaEVix3rgROL89DTapEClVa1zHRhXootLAmnwoc571aj+HBnFrLixbY/3xaKaAFpoHRwfCycn0RNKmUfI0SZ6z6oD/h4ly1PxYqaO2f3ftwfJpCxcCoyC1PGD/pvZpXBWkmew8rlza24Qv4+/bDbOIB99wuhtH0wvSm733GnbAaOr9nZvuXMdbJZhV2yXbDUdtsIQ5INGWRatSNWmc9Sg0/CrZBdcmdiiSwClGUl7fj84Dp7NoHco7FEZfVES792WbUCbHvx0Vu7D7bam4fBfj1XJ22DeeURWORwwo44UUUOnDX+Xk5RzdLSY15W8g01s5SxjT7x30LpEgCYpP7e5hHHstZ9ztjg2urFWR/AZwQAqhbjEW1LN1uGSBWysQSJbON3iidPOgtm8q+yRNV9iB3w7E15bUbau08CA==';const _IH='e5a087581124ad5f574cb0b249b8861c4fbeff20a2e8487852c8a085e565d897';let _src;

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
