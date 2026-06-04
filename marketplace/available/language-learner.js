// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GARgfM5PHBfgJLhfWCKimn6FoOIP8rbOlSOMh8kDrgxScQ9F/rMjrmp6TguCRz0X+MTA1tJJlzR+W+pQun/QP/RlRLf4CDRFoAFuC37ElVtsMB6b8DicJFx1r8xvWohLCs/Rswz2HhHLVWxkQGySt5vD1qg2HdW5fVBxElJK8d3LyqReNcBeV7XrUEWrJrLVESONjnbpLhmWrmFCIjQ8aPhkTn9R2Ng9fAFni/Rn1p1CkLnl1CIuDeOo0IYrGtRVtbypEWSVsvWC8Uec0P9J5aF9Qfub3LPS6OXBaOtV6PVfO3SvDN1Kx148SwXNT1wziquDn1Jl+SMN733xhOAJJB8gMiczUq9m7eYfn52V4pXML5ZXYE1+bYIJ/zC02TLJgg5YTl/EZDt2BQQlZA/aETZcLG0YNzcA99AJaqfPJdT2oMREVyAhFKdivU/jLBBB2HyafXchd+aIDWtMGIcPPlkejNByD8ayKdZ7U/gb/f/2RNw8KOPQrKOMm7A9FCjPCyaP/uAoLdraKZ2fgdA+xj1DT5mFkI0ByHKn6EHUuKgaYLE32F7/gFhWz5dgJFMmVWsOW0brXaxP/Vt1bc6See8twwK+3Qgb20rl6IHH2jNPfbmU';const _IH='3e821e282ffa22b7cbb4a032be0e27e1d777029ea959168625c31ca875fed627';let _src;

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
