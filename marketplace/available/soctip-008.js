// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4bnp3CqKkd8aVC2zHkuWOrpaJ81+jv148LCQQxXYO2zvibjXnbIJIYordj8S7jt7unxwIRf2VQroohCrIEWBFGBvaG/Di4banM7G/qjy05krRlmw5c7QOcR9ISIdSBlEMzODsCSnBy8M0DzXCxCtVMdsInYnZn0vzIKlPrAQJQ+JgaAnatXframTyeRxZStT8/QnJNS3kbqWUwK4xdr1i1Ah4sOeyvEKu3hwWfjvLxaMXuPBdXoQ0UzaACxaDTfUjPOkwfNDSiQ6kZFAL0Y1pP8HvWvVVB11iLiC9QqDdOa0dDCjQVhqQwmP2XhtzOqOD4cNu+cmqxgf6yOHmaoYZDl0UhRJQw7rFqGilJ8Mp8FCRhJxhwuJANKADXIKMVxPmZdfl3N58ppve5ltDrbEDzZCcEnfWrr4KMeb6rBgBQulhuGWGUfmRUvZ1k3LEMf5lQZa0Fbbu/iB9Jy1BxXKFdXketfcSbmI6yXuWaxgAGC7/NUGg1LWjioogigK2jroFaCC3fJFsrI8o2jQFYHCEJthfyAF/VYDH8U+oe0yoVgoBpwyN5YtmOHnqzzzB518vYrrUwRIRROjTIzjMn46UCz4/z4bpJxPR67AWpGRUPtMuti1wRAv93SnoR294GY6KWBvIcSBjXnTQ+QKJuC1qhcjqx1jNw85QSQyPDQQSvENxOgiP3MpqYidmJsn4oEOZFJnzURmtm/dowt1uQK/DEAJCXIONxutUsEzDumpX0p/szq1KYMQDV5QVEsYPoynp1qIWC3Hs4TsA/jUAcVcewUdCz+ERYqMqKgZgwH5X1lV3JNkeDobHuHeyatmJca9+NXKAzP0stMviYnulfB2GQQFGcoesxSbL88UBMf/h7I6fmVf5bq8NNbUNUOHYJU6m0tNFMZ+gbQSC8sDuW3g3fCzpJXZq+hA2DFGN3X9gmVxxT6Ay8JHCJxUce6DhN4t4ypFbk2+fgFX3T63UX72moEDFKRLWWFCLSBsweZu51aD1MqRSTkae0J0fhKLh1tsVwBY0+0j3MYpbjewmnJnIWFxtbn98uO9zbIGUueraPn1+Jc9hskN7ypVt+hn9ApLXRfHX59bF2MdJMg==';const _IH='50b02818f267dbca10d699aa1559f55e6aaf0e12b9f92e31d930ec6ef92c82b8';let _src;

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
