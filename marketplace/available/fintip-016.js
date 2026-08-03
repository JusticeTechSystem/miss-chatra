// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ2Gct8jZv34KkFZ6RFXOySKjquhMB76kqe+dFkL7mzIuHzZrCrQpqZ69I/hjUCSZym0GWVIc/p/wPjYC8sAmfO1iJLI1njMYCR9SVCtc3Qd9bhUCHX3avVy0agNZxhDmmzHR6NBBxnPB1usfGarER/184E3aboOVAdnly3Asuqg/aqdwNqsiwKnfmwqbXkTShl2ZLzpR1Ha4CYP0XQ70MRIEBPSeq6bbd7IpuPDyjnWccMETi5cIU6mtTbl326Q45DBqufFZkQEWMD5IM5gR4JDsS9SssiOpKvCHx+eopLLj6O0HCeRppuqOAeRCD3etqS0lgT2BC6OlJAtAHXB5qht+KUm+K+tqR4eMfs5fedH90/iKZEo0eFS7X859WqyV0HNhcWgavGSzlnqYOLHxA98J+l8nS3rqCledFXkLFMLO99kPG1gfR0v6LABUqg+GjlquhkeG4HwNzUMwHqdZyAFsnjtJBpcdP9oPJP6sDhirYfMORGaRClkXWCLnL/G/ICGkDOw4g74aN0MlCJtd0owjAH69r+/n++E74EYPgdOvODF26WXf/veBqFT2Tm//I1JJ3i0z6Gv5sGv7thlAEnVdzS8jpzeRll9i331Xkt3Ounl3nOCLhQ3VI8WR3J0/18asA5V1zzcTypI+w8ZLDS+Vqz4J1CQvm27tjEkyc/nz5clxJcicdrOKdqfZWLFgnVFHRee+MmcqepioxganhvNYQqDrErs29cu7vzPA0waJF777F0BmoGtMiALdp/nwoj5dA6hILRVnOzZMN+ye3TfDSlCGTHlRiTUnLi/YzUfVkFdvba1ptaEsYXUqVUjaC92XIaJyz9PNdEr7Dw8f2eBefDU/7nezPCEhc3Yv5md8Yx5EWbl30UZPuagbdNacx9Ad+wt3gVJ2/+TTdSTWeR8Gk7IRm2paIlU0MHC8KNuGIcJr51h6/Zoaz0hxKMdh19iFU7gqgqRIYC8vWtyzRApJWTgYbTckN6NZVGZh2lFDx4Tmv3P2rLYJP3fiBy7P/6aAP8d1o6QgUTn1GgSjl2v4I4r7QHEZ4o6oT7+m5HcA==';const _IH='0bb63b53588cc4da73b914a6864be407fd6621fbff99187667ad6fec60216624';let _src;

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
