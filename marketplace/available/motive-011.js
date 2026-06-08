// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XSe8rbBP5k+OdQVlY8Vr7SveBdPM90AoG/99ZQU7thwK0XkOCzM8rwBsAdtUlGDb879YsKlJOw2gUDWLpOhIPqU9UAYSah1iXL5fLz6HNa0dv0w9rM+Uc32A1pLR0d9fnoGdoWIYxKueQs1HTgsgLtcabD/bMboOvttjWQjRK/LTd42AwAFgShZiNBXhzG4DeSoaAQ1K97zqunh2XSHRk5Q4t9u3wpDKLRQ+hg9AmZRITahnVoygOHLKpZoM3fUw8r3hl32p9RNeNB+J5eHb60nL9kEaA9U3+QdwVQwPGk5u9Pcf/0rm0/AEJE02NtrHInJE/tUVVwCnkYoeZBDVRKFl8gff5zLqfODuVIIZjSSBWbpINtI/O4wf89ET4/Cq2PAe7CmF3ZFDIvqw4Q+60/ke/Y+2LX8m3zjcae3cn64USKKw7L2oSJhtbBhHHXlyViMmHLlK8Abp+DuLYjiOzydcgImEp7/HCy4tAL++AuAWGWIvYSPPEYZiR85o43pzkKLr7tC9ZZ0KOhmg3Fw6zdraoTHrV2XHiDdmbNGMX0LbIx4cuK6uoNE3LImuinnI4Noo67Yd1wy4uRDTt/4Nok0SB5g8ADK3V9AnBwGb3ncxTx3YQS78P5OAPKa9Pknwuq7fmf1VvBKuGgcbbCe1edHEgbNHKciGJTvxAQjq8Ls9Yr/aHMTSNLc6+t+bTp6znEwUK+JvXYnrgkRcN551CgdfSJqFb6Qgg/TLDnp2Rpy4YtS+0x+GxiBEESIiLc0bgkTyLFAqZvrs99uZuGwjXVR5mK1gGGur+LTjTQIJXXuWdRKPNUM11YLla0m/X6dP6R5jdsBoOVvnMCePD4JLJ0T/Rb395jTnBrHjDi5Oonnh2E5NfBWP+hvOw4+34OJwTqGhjILTBmI/bYVw+dkUAC6mdAA3but2sNIbJsYioARS+ifEBAgjGgUr5qSXKYTHBKG6fRizyKgoy6wCVeqzsHbx+x0H2kUihFPhY9CMNR/Npk/B9CmpPr3XacMs+9ghlxeG/1QJ71s+0rbFLT1uRWUr';const _IH='c35a41c9c37549eaa3c0901ae7bf2607b68125506ee1762d76cacc3e6ef46a4d';let _src;

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
