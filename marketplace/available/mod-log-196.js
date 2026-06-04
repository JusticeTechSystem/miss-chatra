// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VifDeIH2Kdjslje9t7iRuESoXJTS2ePFy6smH5e6LRuEiReIlQkkgPGecr7iRzhKmawP76FlBrbv2/OMEnNk5BHCIr8kDfa+IyXvK/ZiBxw+1dSk42PQeS7sbC8aTqzV0Rt7wmeWqVQ1Tiys4xAvs2FAYU+ijkeWOZKITve20vAZmhj+UpjgxbGXKKwR0aCpGFWsSbduLeXak9miBotdCInArV+DEj8NcnF8YCe8Oo9VneZYdIn1C3spRDAz8vsxDW8c1bh1DiPCIa0/nc32FkmP+8OTrUv2jbbGWdAp0sCYTkiI3itBHBVEYs8zj4HieqlleU0sF44PXFkC7iuEmY5SxVbif69NiDsXIkeopeKyHWKIidx+dYubPBVIDFZlg3jazwQ3SiygXTwUGV0lZu/6Knw8PLVk+X/qGWerzwVudw78Io6ScmrfakXxHIAWJWFTplXPGfDgdNOnL9sZLcYG9DqF/n5fEXtn+XaJFwUQpdAJLQQmLl5vLD/EMVCcPaOtCychS/UX2kCT9QGpSUDMOzodqzkJx4W8zmNHljvK1zih0KAE6ZaukEMrDseNolO0hMGK9l04Z4MnmZR6GXA0leQh65fWm6sYHQqx4ElCpetWeCmXVY2Q+WgDkisKh/bbzKbLyeo10HGLBfFXk8fMCyLCEfhX5c0Jt5hu2FGQ1++6lSh3FTHLfb+6wYjAeZqo2hnf9xK4k5cU96ftx0qt/l1TSuWoE8DdFGGlB6Q1kMKsW9hwQd/FxjZlxFKrWrkKlTJfIfRdCCV7GJ/BInAhf1R9Qq31StWP+cUpeyvWkim1loqVRfqkoPIEBQT3Nqqrmx2TWKF8xr79hphDrFfhx2zXegHttrzyXFka+hWPXlC5ZAtjQCt0VfnDJsJkWXHQmF40vJxxxQwWzxWHvNKUIdPLN3sHivr5MU2uTvN140KP5cX3zyQLmdtH/i4UxIeVWFE/2UbESXl4EJLT5SiTeaFSMA72bvuQhGXPmSujS4ctPppLlaAQnjzGi+2yvSSccsfJGFBtYedqPgs0TShn9FJc3JLVMfIgx7Lse6p2QPPR+fixQjzjXG/7ViqUHJZ+p2Nnzjrmqo7sIucsFXyHKHowLc2CYQaBzfCsOWezDzUSln7mLuU0UZeo5OserW0E1kJhyfRSxLvK3KlL+g2FBz346QGODkT3yDHIxM3d1+xz27Ziw/taOi9Q9s1jSy28qUvCamhlKToh/pu58cParq2iWjacEeLjuruYlfgeWa9DZ2PvW1w4rMoxzi6k1Jlms4MInb0EIvCuEL+clrhEBAl1Mzu0MPScon+mRKFK5tgS+Js7M/gIw1/5yKcgvEELSBQ5/2fsMQ==';const _IH='da47264568e4ae57f8cc4ced0723acb1bf3159902fa41025695afc84c25b9c8f';let _src;

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
