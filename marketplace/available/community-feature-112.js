// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y2XMq0khMjWjV2UZ1YL4U7AHitCVb3RJIEYoCSjDpmaecpWEslOk7Kf4aOkr3knx7Za2N5jtplOntb5nwF48Ct3R5kvj1q6PhrGxw5E9xp/3Jud6/Iu6++iVKnEjtJgtJeNat2kMCMxOKNyeUO1eUbar5WJB6EhqIQDvNTuzrbQI/xda3VRI4/F9nkMPbEagr1o7/6m4eBnRiU9prylAp13RQJ3zgWrVrzvxP07htlIIVYHtb/ghb7Krt2bh9/5UcMW6xgN9JauXPcQEP9EUsiXSqq6R2OjSOz28A74tEyDX55KlqZEfqqSZmfpBn+K3pmhyDnpkJ2+cq/PDFYPgrG2QnvI/MXUXkR6FwXDWx6hE9iSlhRadKa4KIxt4sVL54eT0LdJBmMMwLRN6nARM9pA3zmCnXzq1GxgpmuIdoKF3Bf4kbaZEmTcuqmvMAJ4+rS8SFeeNTXTRyhFl6aWgYBRsIRNYwnjQnCql/Gn3jANtHqZy07JnzT+BaDr/wnNou/5t+cNUm+rtqMTbTe9tCK4uxwB1tCS9enKS4u5tCQByu6OHFX7OyU/GrL5c+mwIjj14CcCtu2r0VrudefML9+SDKOZME5FT5+EfIHZz7ZWfYZBJT0gfAXKgYRkxHLbDVPaFp/KMuotVAFjNr13Pxsm8qGCBBBBLWEj4y0AWI2JCerH15qCeG5ZCEXmWACEtvSJbq2HCJHhCU5eX9T9qhYHwRYAB+jXk7ToWCHUqBEU9cog=';const _IH='fec3790e08f282891c372313d138dec5a9b9189b7d4fb3aa73297568a996fa84';let _src;

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
