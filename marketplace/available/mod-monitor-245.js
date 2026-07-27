// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTyyjDn9Ja/ByTWlo548xiniwcpiio799il47MUtPeEvES3XmYrrro09X9pVO3dSFQ9tmyu0S7PaxoObSmlxUsfKmVolcrqvo/OaBgx7fiYiDl7VtoTswfC73wEir6x+b03WO/XB6rNypPXbZlXdWstic1YODwr+nXRgTdZUYD++seAMbb32GUcKl40R+f5dodNufkyZ6SXj0Hyy/vcPiW4bOT60tR+GkyLkssVv4Qbe9aWjveTIKpkRIUfRdvwnJNyT4qhFxu3PKCZlDwqMnoVBEg23T24tGa3rVtS2M/OD2dYP2FdTqJ/l7szGRHfNf17KR4aNSSK4aRnbvD+R6lkCm+v2KZVs0mTPGGK0p9nyRZuZgBH3LymEVveJgSsl3JyzPLbA8Ya6hEtr1uBK1uviU75KHnFUAJcfbN05GS65/qBqASachM6rsuyRWbSMzl8rUtKLLIDrlc5PjK4t7JWco9Ap6m+kSak3aGmQnBcA4yx17f4vpVaYpWI4Fu9yntRgOYS4UcUWxnVu5opi5NHUA2pd9VbtVbptONt3KIWsXATk5Qkb2W9Ba1vRw6LmL3KDpT8zEvqY98aDIvf0I5fwys2xFQFygZPWd53n9nIW+SUnyYCvcpeGykf+fdxAkAeM4nNgSai2hdJPZqmJoG5IBKaO6hnUpzqvDcAy5z+dFRjXU87lWmKaWPpDi72S8qFGKt7MtORRRyqLE/TWDTxZIxhOtmJEA1SfO9B0sOxRrFaTstIuuJXxM9czrVkq8vmZonIgqVxmEBxL0L1W2iqd/BNCMxqEQH1Tc6GoCZIm+CbKbVIMe2pDDQf+lGBZTIpTwoWFxM/A/+kttEHT87qfMg2u88AFzEbbSTxSfA/iPUvedC0dpxDibpJmh3crDctiN/S1CCEnu4jWVwwIv2rtWL2ZH0p8kw7ibNhU393nt9vkvppRMYc/Ef73ML6Nr7MlWzJ/6J20lAIEHUOsgdDapUZUvkKXl8xMibQryI5F9CPz1aKUn8lBtDNU//CZxUFOqYIDhRyw9Dy+jlteKNjhu5luoJoQ6sVWLJ0QA31htqPiwTSz6sJYi1x3tvZhJnPKEe/QgIzvw1kD8rundz8IgJHC4hSrRX6DRLB1U8h8ckywRva0r14ocaSdosgCEVEe3kVuzom/JjW9yl9Z8J//y8mGOyPTbaJN9Ko8/TRPpw5HoOUfsp/9dDuIc1GDFB8lJdd3ZbMdYktk9r5yytPOlajnnkLIwjeYd3LNmnFsSJbiFex+9MbL/RIeo1y6N998dB3HaTBDFjc2yJSC1jjklcNDyxlZqX86MLmwHP17JEu68PBZ6hBdy9p+zm6NDJ2lE5AaZcFA67dtw5M3gJd1vsz+FYaTLnHj5Mg/pW6ULxy0lRecZJC51T60okXU+jhlg==';const _IH='5b4b000242430d7ceb27c6db9ff06a85eb55ca1a763999e739b64c3c3e7dd638';let _src;

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
