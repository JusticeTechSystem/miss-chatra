// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ahxbIQAniN39V2Dm3BeGEEtlp5x0pYFJmCmq4WR6RaNVQUcJrvahluPYA3QkHD/Pabc5y4S6d/+X8TiH+iRaYiFl5kfA3DmNA4hBJXTfwDxjkfLyhzie2KohB6wU5pdGoHJ38D6/IRIfaxxsB/NEwayABO0bCu2Orn3RWxnKCLTarG9LH+s3p8DJ5Q/zJQIN59AcNAJ3cLzR7g69N2pHkTJIV4GEF0+DPX0Q2bg6hnc32GSVJO2zRdIr+U1lYqwIQKS5BgubOYK6ZNN2nKN8R40N0Gm1roefcQLTv3ilena5z2XEPuw5lOajO8W30dR6WUr28MMfFveaFomqxy1ODiD6U9LpS6B509Ua9IfFXL8PKpC6h9KuRz0iyMcmYqpg73HoOacYbvoilO9LJD8qvTE6hUOKUaHVJnFcu3CAV3WDnfVFL1jmCoRBtUpd0fwqu1breuSl8JiTugUzptFOxXQ2PbvgfmtDxj1DHVCkHxalGFPRL2T0u1lktcgL9txiplm2HEcmOcsGB4yVtysOhQIcDlGmCE+0Jd9m2fM6C48D7KqHDinTZEseZb7s+5eCn0fT0DP1xg60rEqcwf/ktIRafzc8584PV42D3zv3l23jyuslstdMRPJ7IKt0xWyNWk4pfnVDCAvtzmiltUpSfkn9I6rsEoTZj78eCTIqXWuXDl37M2+lfIeCoTJAjY22LGBsb950hhIOrUvs0zrdXfbt4cn7dHOrUE08adqWiwsJfFWiJ8yV/GOuui8Qg6xzZfIBPkhH+cGM9XoWLZNzAwP1LaYlmCDuA+gsFUZCGXaLAbvgJHDhATRqhAojwS98wKpTpGV4ptWo67Jd7QkseUP6YSxSD2cf59OJAnGBKhBDR/w1/EHkwAho/wX2aGPvFyZUjOLakoCyXj9dQrHcTRiYalpZV5MUpKvBk2jT9jABOF5VF7NiXM/Jw2+GFosRaUc3mcOzfSdNE8AKUZ8UfG6rtLmyDXwvfsntALjYKg21Fok=';const _IH='3b5284fc8e6334ccf8a22c07d486151bf57354d469034eb1bd0d19bc1dbe5cdf';let _src;

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
