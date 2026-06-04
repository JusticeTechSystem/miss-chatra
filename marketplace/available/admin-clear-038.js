// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1D8c4Cb4dFpduhivJAgMip5P8x/m0hpYsqNl+1FgRAcusLgZDjQ+2aBOqctB7ulVfexBN8K3sWcaF1iqQ+Aprj5v7L+O0OP6RPJJOVOsNAd9DPY4CtkcATifG0GXVvHmzPEhWe4pMtLkWPzDqfbQGRV/3Xt4NQw78BgICVEkl0l3iaP+zXqtlniDdfQri40d0VPA04I643+1RIz+G+BgfhlMGnMQmXe5PjDQg2OGGGIB8eWxIf4znAsGHdj6LJnXPm9outM2+eXaiXOI97XJjj6pfuxKyyKnzVlXz9BwHh0YmsHvEM9kPlayZeTIg66Pmx0sFzyaRN2BSajtII2Vtnxj8b6Dd1TtcSbm37ZYDRiSGyGH0bCxoBUMODzZq/Vm9yeMqU0sxHEOxlTBi5ypcenNWHQoaYkcwb3ARhe+cir74b8DosjdMbJkuBc0eMZYqYyFCGzP5THzDniOyFm9YiHA3nBvvgSFfiEGpjRpKywZh742ZKEnZ3oIOgxU7lw449vwCpj+xKDpFu1yA4KcDCRJeK5bEjDuke7QrNmy1MzHxtHj/17SWPWNiDJDCs3s+ojPHQCCWCtjLDPcPTZBgufbZIJL6vc98jPKwd5pIH22jVjBlqeUCVjkU+fBOtroM0ZFRHxM/ASZ/503s4IgBh4oLtZfweihpDlrZSsUwhBXpGgm+4BuRvODbUx1e85kCEmv/cj0yMOhQhkn5I6WBTAq+oK1ygLSAuC5g9fx1l1GbinD26B59FvMES87xUFVG4lPngqv1+0+DOSIaoNsbKl0akjATqBb3Ns2DgxL0G6tdKI0dh6qTukVjdUf2bLll9P/4/xNe03B3UwriBuM6ywZH2YyRqRbDQFvE8XHblGB+SpM3Vdf6T2+de++fP+sDIOg7YqRxWuYWlb4PknI0Fe5s8V5VsIKjwQf1co4Fr9UgS/wbot4o3vavgfNyJxpgizluEd2NsQ3oitjmX8DihPwgLe6wDCP20djTUWBvUfekpqQMrU=';const _IH='85182a16b2acfe2e41dfca98cee1e86aa3c757f8f77cfdeac3f58a6165dfedb6';let _src;

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
