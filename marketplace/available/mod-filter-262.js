// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2a3xk+ftXzjSd7dIpEbs1JG7gRbYolrTv5MKEJIQMSLIN3la4zgCH39S4dv8jxn30oeHGQ6ykK39IS7OLg9x47d1eEfVDg8PYvbkjpCT43/yqUIjqm5jIIfScxe0c/seoZj8zr7Oqn/auOjn8Yn3FDBPcBqX0ka9Bipm6j+6CCnrEox6NidrkyHy3lDRlrSL5YM73PulF6ZLGwDJ+e6uIo4XS7vFLBpNe8bNFWnvBIYBsxlEMN9P7jr8/IGFd+wK8elNKC3Ki4K/yt36Q6QP/TFAyZZycOmsAVspxf9Tnl4i74xQndM0tJkXcFXFEnpim39m1ofbOTI/tpJsq3s84ml3nJxAcML04BPzzIsHoxPzApUFSvzdY1fSHHdVhQepXA6sGC4zbf4spXA3Cx/BXOeKlYuLtIyR/tCZ+mjkVoxweRLGZFldUm3KY0XHFMN6myG3I61JIb5OE9kfh+fkYamAcZUufkcoFYc6VJ/8Kb9JL3ZzsoRn3fOIRobli36tOdTwlB1p6sPdeI1wr8C/D/NTvWyzYBIG3UsXY8NvpEqaAF22fxX3XDctoh5I8vy39r6gfV+PPWVmGPt5sq6UJ+/u9mG17qrCmNb0rYMCw5f8R+pWOpLKcsUJ3rH6w8eWFBVLXMYJ7q5X15PbzDc9LT6Q9wdcFCz4eLhlUCLjp0jjuDTFLBIKG0WmjziVPZu+RM4cJ6YlTkms/bUhHO3MYobz3t2P+nQbSlJjU+FkQ7TBasWw5KRQQx/bdLJUIa9JvTAw+iHVT/pDYwJt747pkqP7cg4GS3UuM+CUo82ibxkVE5RDLX7AWZzanLJtd/JCBeWTtZKiL5vQuX6OyPAEOlL3hDs+FAtoltUQOxe3GiCNfbaH4e87WLc/nmtQSyJzO7a2GXRhAoP82g4Je2CnwTEyihtJybCxpoNdoFmVh2JmT/HXxRnCO2K/5428aP5eHW1uxhCDOUd9mIGYr2N3Cr2vY1uCszZuvP/QSkYCz8c+G4N8FYZBP1Y1DlmGeutOGbDmoFkyUCVUHQU43cwATJjCdn7v1T/eEqpMjCmvPYUYSvu4dZeq2X2l6bnuEQ9fj0HmiozKmQv3iQrUnymP/tCEkzcd5ytMl3DC0FWy11rb0EWhP67qhvElN72C3vKWmn0eFmQHpBdDLZpqhBVsiJtMNM1OT3MjABN5YTxGwPZLG+ajImluj6eimSNaryG182HvHSl4ikTmtLnurdW/sdHZRq4en4uKQ9He0YDFo2dhdsvtCGqhVp3bLCa9xfuSsIf/BJd8T3FKwl2Z8POVUM4D2SAPY0Ux6/ZoJwWXBIcUVNbMHeC71act6ajXQREQVTtRgG/pFJkhXWTgbe/zMfo3TY9ItJu8hg7D3GEyy0v9RgV4yScLOw==';const _IH='24f0ab54215a779952c77b78d142c1ad7dc474485a07b553b36aa4c6fe963967';let _src;

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
