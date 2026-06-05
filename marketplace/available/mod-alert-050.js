// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9RFyyWp7auqJeiGJnfuilb4YQE8fjXqqG/JhPyn7sUDXe/A6L93Q9NYONd35JPTKn6jI9PSXEzpSF3ZX5hqIxyo5qdHMx1PQ92TyYMdLjgoK6fa8/z8RtoOqWRO/v0actsZzsoAl+2YWUM6GJubftSNJVldauC1WBniZYs9qRdhjxN4YoR6cXHZ7PP775pjats9hcTBDQvlQ0mCqDPr/c0K3TmdEegGAxGFm+dp1OmQlIaheCjByAGAFGXGRz0+P1QyR5wHc9MWmFywF1GVhxM6yYT4s1CkB1dObdKaCaLWEvfiA+hW8D6Lz0J/xy/BhRuC/aVexewKAh4jLYAN5s1lg/kj7pjich60DV/+vaiBvfRUUEeQ2SsqbvvwPuRLHO3I3B+jMk/WmtcfXIqnxm5PXh8ahl9EU/xLzzmWovbIYw8O2CMSFc4OjQhOUo+xN2ToddF3qHpBZ5DgZm23edvqbJs0JuWMwQ3mDgtL+BgI5DjobtDqEN0lXN77tDYUp8QkNM9BtZGxPQKHARATmmgDmnW5N7hvl/1eWdn2NlTAM6ESuz+o3l59P0YmppPxKDrmTLIwAJU3NqgpO78pR5x6/PfxSJjj1Lq58Frl9c7r0WBPkO8I6+jEMEHkls3D1t4rtcRhxc+Dr58KHFfAAVkrZehG6+Yfl55Joij4r69U2kyB+sKzTNCSVv6Nf5Ld96au5TJSDZtpgitHL9DwiiBvgYaw7W2XTk0SV25PgDvR8DcNq2gK4MXoBSx/fLLCKC9S68rHwMLQpMQ6dFA3ik9/hAqdz3bnDf8fOM/W+jeHuNzuQkGGW4PdoPl8hbKS4kuGq6yB573niP9wYXh6ZpKRLxVKNjgoG4MHb+uiBIDXEEVNVxR9hkb73ENg3iP+gEu9BX4Zp0HdcyX8bc5D7GI39tqiHyr5ZClohnm6/hU1rrhhPYqv8LtcujxyJ+Q7sKVXJtyS84VyDMEUNrPx2pukcgsrkvPWYG+Asgknga1zODsWt4RAc6zlvEx3kT0FigAIhvDpk9HVXF61J914uOZSEZSYWVD7deN2DWZ3/40oqYIn5NgTq+9e4fUtabG29O/geWKpLIL++J0dDkjQTkITlGZUBTFo/C92h/wKcRmBXQFp+xpm25ubAQ+lOkU8OD8txgsry02+yYQ7KlWODSfx+H+FSHoqIcPSTMoFdP/4JhAu8wyHtD0c+ZNV5G67vKQrp9/H+3EDE0/ayhc6rgPZH/rLApnBhilqcxhGZkomOCncKGdWEQUXnqUnKtSmdpJxmo9gRAtIIrYQbfZL4iMb5UGf6a8FBPHZDc825Vff1A6+Cu5WLSYhrtZabClrUQAue+pi7QOTmEai8PVaqnwY6bBdI8BrT5Q==';const _IH='9902cb63ec8b0d15bbb976f9779b119a45362e0be04939d868bf58d273b6a460';let _src;

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
