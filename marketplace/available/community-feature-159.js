// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+PX2RGf2TITtpSkl8NI9nnimKgt9+qhFBHH9A4BTqa1JWI/w5occGHeTW7T/D6WEUJQ8hRnmee5Y3G/UlgrgmRGx/gdk/Rjyq/0z1DYqGd1tURZ5XGYEOBKFMRx0nnqns02/t1H6ReZODlNFEIz8KUwBzmwd2xjNO/z8t3tfefdOGhSzdVRtPZIEu7u7weSuz2bVCu6V/ZcbQMu25z+GTNgKy0EfyAbAU5KQ+8w/asYD7nFk9DJuQzMwo1InVQX9weukBBbvnzjZrVaaGCAu51FiUvydPxCz9+KkQSEcaBB8HsEoHEu7NiNZ4vc2iVNNG/2tznb5TzbFz+Z3FQA4s0cW3XlsYL6KKZHkuOqC3z6x4tnKre1pAcipbFgrtdkcX80SckgEq2Kb0yaB+Q+VsUAXFsRtcRpju2QDyFFs5X9bZu1fcU+pYnz1+yGiP6Fkvycrqq8OqDpVtUqK3M0BAnVJKWT2OU/VnXTyLg8/xlk42q2/sZPM9a3wylkWPXXDKmQj9/2hfFY3Chi+qn2/KNm76VuUrTVTPaZQg4Qg+wEksg4zXBOogvnxVo7hCj1vw5/1kZoLgMgKMnkB8mysAQz3sVmM4aPQNJlHSTDW2G+Shqj5p8ESgwiVOx63PeF62Sz7WTgDfLTUJOc5LkbRSN9J7souuHkGpxXeAEq/vHihYBGEotNEiTiKc4itNvFf+ZrtIC0Ocwgu4HTb6q/L19KyG0jdRdBEyQDGgZ9YDdMvvRi4Ic0=';const _IH='b020aa7a103198c0b8c135249aa49bbe81d11ca8f5b1126c8ecc425eca543d6b';let _src;

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
