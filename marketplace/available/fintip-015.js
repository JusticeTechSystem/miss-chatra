// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t1iE4jIT9ce/6c8DDa2Ga/I0LdJx/RsHj9ePITKRCeIysldAI38XXwlKqrt0X/JTpjcYWOROiGUahU9PjNL3SZ4gyA/zMzGRWaqn+sNIWgbk6Nj+20PLa89rBYacjK+29gycbZSMtkJta6TXrVy+nNAU8sTRDW/B3av5ie+tCyWREDJWeZMjd5hNUjw0WZ7aYzOFRoqENzis4PZf1cKm65Ak/IH+80ONdlwRZhwIuWDFJV8pS6MJrlW7TnBHNdJEoCVku/KWABZU5OlNqhdASGdsiivpp1rN6PDN8VthO03hKv5pp9+DVKRUa2VIC1vWRfFrkmXrlM2HlZLuIB5xHjMJMqlxa4ShtcEimCPlSN+wSbgah+HLWmtQJNEB6RmApmix66dUTXSuAQcuAdrQP6c9MuUXJWYIQD8k+x3/1cO5Wc1kKjbAsK5qgb+yLVNM9CiNujtkfJwedRCW7yuSauCA7xM2EMaqDK7QvS6XKdnHrISlvhTxXncu+hU9+bKANRa8CkpNUw46794Y3s3Qw8quzVZUHPSMo0PcvgG0ayOwBn7F/qQ1DqUPxVVRW3jMH2lu8IeejayePRo4JH/kcnRT7xk/te9WajGSDa6269wjROUiHk8dEaMW3EcIKWvpsRg9Plq6OZkc1kKOk4XvMCLwAR3ubrj2PKg2eteM1LFHQs9laSXTAbC0itRxNAGwhmWUpeFv+C8JyCVrcf0sPJ6IDZenWxr+dDYC8EZWgUnsJ9anMcWwTNBcyz0seKFeIuYm4PpmXX1CmJz2uI2t8lax0MRGvPkPN4ILSdlPvP9n7F3OCh5dD9Schd+UyYuQrEd82ZPJPiat0ehuEKqiRumMfsFQ378ntbDWq6JQeBwsRuTs/5DKV6K60nSHvNrWjFNNc3/Xkwtd03SCt97+1MPflcfblO5lnD7D3pLivyI/91iSREI+68wbI7EplM3GGgFQlu/rFMCP63DdGuhvTutH+00AIzozKKpMNH51i9kOJS8G0B6MRe6QY4VpVYdD3JG25bIxdg3MptWUtOlZrXTuCBWBL4v6Ndkm7GsZ9Zb7ig==';const _IH='37450eba56a682235af277eadeb89ba6ec8f6d6b60edda72b4b5af45bf8c0a0f';let _src;

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
