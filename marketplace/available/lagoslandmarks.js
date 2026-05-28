// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cuEpncsrmJtt9uj5P6PmBxhaakfSoehSwKrqVlNzBR4dIuMRSAPkk2S9kTmqRKcWgZ+F+/Gi7q+WQ4XQhqzw6A8aI3auRelS9W65U3PmFNFwx8WVvbwZt0p+myrAPhOz7VcslvfEu4J/SeVmUq6bB/xpZXpjApc8VdFX2lOl+cOYL9XmWbku04vSemJR0uV/Me7V3ZSFUG1Xspf5avTD+liq+yHNazvWg7oaD5psOdx1rvTAifn1v4S2peQJ5hb4eS22im1jyo4Q1ribnt/Ny4/JCmOnRFNwIfCDY5jz9Okk1ISHkoNeLILDa2HUnZPIiZfPy9l0LOdqLtOaQexTfscZLgXFihUGs6CVEV9U1QKALXWlntqLSa2XeDNIB7JCMuj44cZ3IfcHeenvKssZxHy9vX4AvEsS66oKczcIdHC7z4boWcqTAgbPkcoyOo2BwCfw5I4NFFbu1ddfDIaYQkL1FPY0+bVWBlZBUd9Dz5heLwWhZ3esSBULRwhulmGxYbZnJCfhkjNf/Wb0wrxcb2Nnz5A1Y7hWGl7LN2SqQICqZC3oKS8bmktZZRu0m6qfDx2Uec8VtsiVDGsXb2xMUdZvY4Id+Zs3Ztm4ytvQDc2j/nFTVEcLF/+M4suYjUbAG+riFCOePlrZY9gZI4325A4mkWnWm+bFcdnXjuVQmbmsfjYpRqd5K8a3YPWov3fUDE3ShouW7NChOpiGzZ2g5iwC1Ntr8Yz2X0r6+YazjjxBq7lYv7xqOSfBLzddyuGYWPlYFOga1aSNek3CDhEQG6t4Q6x1o2OStJiQlGIqSnGnqepojZ98sH1TDAtHowvFAImi92YaU2eBe+c0pw6QAHEmXuKNKMNnGuaoWpQqGCJDpE832EbcCOHNvJqPd8ZrgrY84wjvhOTWSguPp2UQAstc7MPt9B5lEeUeCaEoKrneYCk04Cofn6J8I9mskISLIpBW5rDHuC9fTvAd2iVFr/FMT0HGrFe7gvb3l1JnwJl1yWWb3uSqGMyBsC9XTxVkX7vQAea1KXnWo+Ep+J//LHPmFnr28JHcderf8RN/EHQzEzW9Py6wjwVikE88TNi1Dit5X3GP16Vl1i0encrFSnOHvs6gWk6NvA0h027m6qvjaoTpkcDfkowOTDgGYITmFS3OQPr2NFVto2cCcJNzkExIiUe5fIrn1J19IaGVcSVzjFggp1KO/gCugqGhb50E0lv8QZBRV2ZM4jsI5Q==';const _IH='f65cad355655ad567885472c02190c30ccc447ed3ab27450dbae968327a12cd5';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
