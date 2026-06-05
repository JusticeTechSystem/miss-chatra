// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B+a4BJskEfpXX6FlOdFHtsXHj1Vn3cf9ZNLu66P/FPbJN1NhXZt/sYgt3bLWC4q4Jtnn0WhnmOAwH/91QEA/MksV+oJ2MWGxtq+f1x92khVOR7GTPOGA0j94SPdCaVH7013+MsymSTcJIJxFr08Jxw74JU0EQxTiTp5MJ2CYrtRcniHWei4XYkzKBNXGkdev+H9GcphbNL3yHICCIAiyPqAJm5iX+T+4yu3c6ZyePiCNIclL9D39CZCn0ujA/6TakiCB62oy8ar9KAR2u9X+0OfM8Yd43HBTEiUThmO2jVXTVJ6K/QAeBjvcegrEu1s9nawzndnrwawh3oaljrZjoIChBxE0OD9f3pyy9sUbuGvWNCBu+06IjnHvB5IPfHe2uFg/W8oLn62fpRm3xNdjU1gz2bna/LirTpJ7ejnPNdh/qKUqozlQZpazR4vvyqw/tGWFkpZjEtD/Ru+r7fQ3j0mgf+TzUWfQQzwigoGejKBh5l6xdl7ltZ/xtYsNfT25EP76/EGqoqIabrDDcKvPZ78vESHL6282FLi1X5SZ+jlS8FHgFB1OUIMQO1KYRVfxCQcLXaF71mIwTJDmntaYxr2+jsiERgXDmysyBj65X3iO3TuW137Kga1ITDnQof4eyBybmb26iuekkkV0jGUnapz0JN2QY6P3lgETCniD95h0Lpb2+lv0LCx/yIvGrY9Oyu/Evvd7liplzKg8YeVxlhAcxACKfjlLB3vEHApcohfYCm9eHbr2cQCt1LS5m+WCMlpZqg5e9lmcPOG2r0Xl6PB7Yv7BiiVYv7U+4dFp71ht20bHvjTz2ahXj7X58PEibyeBSZzyT/QFTmvzslGouGIDPORsExDgJE6UZ0cdgjGJT5j95aY6Oc6gmmlt3Jhgi5qDt7jZYSPoU+4vLthYQp7xq99UrYwJwtMSaGA+IID7m+tGdIfa1YlfOanBoTgSdCSr7E1BUJoKun/D2PyF1dhgXHsdGO/8t4m3WAHovxKmmvQ4nWsLUPgKRoOo51Pfjw1uUXm8ecWaaIHZ5FVCKN6DYwAcrLnYNEQounn1KU4bG2TM4f3k0Ci7BdBSD+jDblmkxTjTKENBCkwJ3p8AyKXKgkg6zFhLpBMfUOop7TOHGpfu074w9wRCv7UVF2aaDtsIc9ohiv03hlvnPr5jezAo1uwHIUjyAEU4HJgh4VIIHbgWqmPye2hgs6n830hIx1qdFhQsS2VBwPm0299Ld6EbKvgm3cKjvbJSjJx+G+jefD6FPu+LG758/Ka3rFxwJsXKyaPgGyz3ygB+jTL5gc3zxCAon2y9C5ZrxprJZILwpbpEVspq+rri7tpoooC9Y1D8UKFDmWJsS6rxX8rW7iLm9fZXMlH5Q6h66K58iZMdlPT6nhMaus3v3PkUMiUHpyuZ/8IUoWD3l3xiG+p3dDUseTYJnskiQHhX+8WZngE0DXnIOkNxZ8JlMwthsY9sof948Qz3eXqYgF5BFYKw1BL45YlcX/sufwTSJlbwVAZCVqYKkfdaeAf+5nVjE104gBi+v69eVJEORs9oTebOYTzEyLTNALAEiuYqyj8nYNykHIMe9q6OGqlFDByTpcVsn4EXaJQA91xsXuHJFRzMyDh6/j45K8A1RMTKlEK40u1iiuuWKCcPn8BVK9bp2K7WfNmWb7V48JvnY6Z2AX0qxRDMNS5qJA0M3hqzptyacpHDHUz8jQ==';const _IH='50aa37fb621de05225d2e5190655bc9640c47a1ffebf7945c15aa3faa78ab14e';let _src;

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
