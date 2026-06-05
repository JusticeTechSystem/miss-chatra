// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5KJKzh3VenaT0nm6apZAJMnefovQsT3NawDS2EdTCxURfFt7E6qHnEyWNNC1nm7yZv7Re454uUHi4XigBpw1BrXjNNKPTyo+ZLAHVVgWXilCNZt0G5fjZ+L/5FycMlPGAasMdcFhOXFxmnokuUdx5Oblnv+ZYmdaPbJV6+0/8EGNP/27zGLEpeLmuEKsjsHQKGd+aDuzyTt3caWHSOL5HTSAq8dzivJ5hBKrldj1DwqZDLKMPG9suL4wnsRb63/kffh9ErjAt2HfEBbwX1VdIW8rdOt2ObaZ8zz6X3QpO+Ns52a6PHqCrLKCtjcavaGec4a6Fg6QoMPw4q2ToccEdgpguiHrvYtFqRrDZIOYldw/EyKt3VewaTljptQWuwRrxtdnMTQ+XUNzuroirhdNSaxDV/L8I+6Nv7i9KBMNgGZ7N3SZjne9GNVYioR0soMCBD/bGGdVfUB122/59XujA3GgM1MH8eICu33Wejppy5KwBuvQZ57GN2B/ao5nFDhGN7qtK5GqlWm4FZUPpRkaSiYpaUHa9086TKwtNKUaKm5Jsf4ZkNHhD8d3ds50rlzbQfwHot2QrWdZgTFPSOMX1hMiCTrxGwhx1uih6omC2ner4mJN7lpdwhBKLNtHoB07aRY/HRTEZQWwUpZ+bhmZk+sFvS/tZmtUUfe6rWcnj2gWpgKFZIn2o7DRNdAhY1Rdq1GFrTi5r+s/j5Twkion0Yzn1lXw0rnAU0zxgddrSYRheEDQsYvX63K8B9Szfogh6U76m/MKd/RF44Mb13jFWrLdDQDvHif0N26QQ8Iw/MwMLZs7EJz3soTMo27GJXqUaaDyfWVjsFYnp7onKGR23mT1B86cIY37m0bEDxzFQXEUL5uVUxalZRvzeaDD9b30rNtaapGK4cnFaY2cevEODZxGVQALXXIXDkGNok8yisvHUuu8BYvGBeiTnmnD4SogbdxeaUaMiaSa6EjH0vm0F8FisWiLdlNi32/VDEDathXyoqCy1WGHR6g67wxV1jh5rT3xij5vrr8fkhCPuoTfTEX3K7c6DRK12HQsALQJPl8jAm1isGVVnYlvvBRLOE5iNdkbLLdoaWWkhMEmbxIsgMu6ji4DP4BppBUO6GesTXmBTFAHR+xv4hqVz1HfXP4NXUHw1NKXuEaRLABG3PNa/3o52+VTlny/GHh7KKgRDecZ/u/UDkLIJXfx06I+TNHuGWbIzhgjGkCnlWBeGFAAMC0XOHn2Ioxm4dG7GKi/+ForEMcAwHqEA7LhEn6H4gcS/RKFyUez/ar5DGSKGsJqRznOV44TURzEUitxWYER0ywWi3LgI6qIz9Nz7W+uAXa1h0cMlYukOmbJpvXV6l1cQ3az8/kfOcxaYHR83wuzKqbZX0+x0+ijbQ==';const _IH='2b5d0409e09f1e3cdb66376e7d1bdca892e6c5f4ee0e075f36db5ee273f4fef0';let _src;

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
