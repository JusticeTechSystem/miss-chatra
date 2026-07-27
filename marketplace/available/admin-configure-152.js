// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRboFQan/6W+EXD3pzt1bTrLM8aA4pJtEsSEwoW3pZ8l50qtHjJV7APDa46o2CMr5Cjffj7AKiKrhjEoWihaSmwK/LqyM4A8Rdz8sUIwI8GI7PH6MLXEcS99AkziFbrnz/OWRsxnXs8dFvxqyCf4PiywpbW9kpRiazLvZ30+RGdgJ2OdvjWK58w7zU+R9X8vQzqRVnKyVfswYHJR+eGkBV9Zlgx2hHQcDPIqlAJ893ERObzMqLxNTNSEKZlLZigDrMaYaWkOLWIF329EVaP6dli/iOnmFAZ6/16Grz1OY7yWW6szpnyKCpTHoPI5aqOSvUmhToLVQnWVQxQs26yEelv+RDqKuelMSZJVz/dEcjRxXL8ulvftrstkPGc/5NZhRx6yuOE3oHdmIsyjGnKf2193N7gOHO6PNrWA8bfDBS64K2/i9A05waSd6iI23sNWNm/pM+YR+KOcHGLdBafPBdX/U8x3BUPXDuvjTaXOlHfPv6S++ws5PBouIJ2bum6D04vePBqf7GGY9CJ6l5Wu6btyd2Wc/makFCcdg9xgyXPbLhhyBJXXIZVsAf9QB9cVkfHIGEdk+5jdE4NysY1cxP/Aa0jdx3e5P+2HBaFE9ExnJN497FRD+hRkEFPSN+5PHLEeWnM465FfZjxOlRsVz52pWgOGRinleLZwHTHXwKdOlvbX+ziNxitl7OsflZiKvkIOR/KBzJiAqWXcLFwy+RJItBb7dC0RhvjGnjlrdaUjdtjAy2NZgMqhMd30CIXgzjhh+0NMWhlPdgjsmdXFTxIC4vC2JT4ckgWxnnTwUZUaLgfx44monMsnGOD0XtVVcKnMDxQ24WXQf8DxCVEAl1U73pN94gTEGQbiqCpbEiv3BPFNgHNcN25K2DloLybgIjL0zHumU6MdjKICb3St8PjptnlOYzi3Q5LqidDfva+tMnztAFfRDemLm6fX8rU2Owuzu1HiE89ukPPUY802hfx7VcdrYTAxoc1H39zPvwJvcJzro0m9v5dHIzSyIt8lhp6ScKtRJwfeDNcHLCDSYowx735uxFe';const _IH='78697dbe872add2d0118577f98f0c04cf64bb83e17abf0406519fd7918b40de4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
