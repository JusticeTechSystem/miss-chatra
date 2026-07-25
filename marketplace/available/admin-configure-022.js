// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQxnAuxVAzpwaEkY7FGdVN+FAbYr9G2AgSFGzzl8E8z5beNBfPFByxg5MgEWWrilZBldBMdyz1FqmvGk1ae7lp4hWwz9A7VpdpXJnnXDXCVRijJtFJNo99JEKmMzwbChh4amrttjoRt43JO7gT+UbiQCInKGxgWI82Rcz/rWmNp1prDnRymexe4McOJbUHoPYtQiSdA9i9tBMCaM1BieTUJiqWXQsfM4V5DJGBObqpjZU4kjLyR9sGuDWfYN01VUAy72TSJrQQWll5ovTKhC4ByMEFDadfYXzWjiszeiGFHAPx7/RAv4ivmH26gw54I6CCAhVeTihX6k7+y/QGVdPixVZmbP5iTi0sUFNDR1WAdt7AQczxIoDdZISUzPeHlIbAVT8tA4fKet3VMOOhxVHeXme6pgqsIODgGrCF5O1OQDx0bkY8dLyYMLwK2OPnaHk/ytu4bqxTeJm7QkcIsTonMgoYTFpRmsxBWslEZjblYBzvwf0cTyIBKeHywKHGPrCjqVMacw7Tac7VsEmALF+0ZxnZLEzH87UgScvgIwPAD6OQEc5Z4TDcK5qN/DzpFB78e2jJkODyDdCNVWXbjLsyIynIKqUv6T7X/GHFPMiw/cN2KDrC1zjY2fogan0LgXZH5kW8Z9myFj9pAYDwtOoxRu4PZiyegDQkaFfFFX3fUcgSqnq3/OQ+UOkPz89/BiA+uKq9cUKQwU4yo5bqW42EOf2q420g8SB7u2rTisNQEb2Zr80d+XMGcPlWd6H3zKUIfYmxaUNxY7stbaifeHWR5qkaVEyLPGeQehS1ug0OERwiXkECj5f+WncNEUSpx95nBmIrdKZSxOnYKQQB0IGBCgHd5QBO3/dfomuZArvBBuLYCsxR8b8dZXM3Th1o0WDM/C07ZTVko+zDw2duEee6gpH77X2n66YfzcVR1gG1IsT1qc+ItKg9bBBHIqsVDrWaCie7AommcUm6M1sytFcKkt/dNrQJvbpg7KxoFhQxEXBgEX8sl1+geaS98nRgh225IXDXxIgppUO7uAfgkfo3GEE=';const _IH='ce54c8231239faf75ca0ba42f7970c8f15606743dad0f1e9af1f483b307455f8';let _src;

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
