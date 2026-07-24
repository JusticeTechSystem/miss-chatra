// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZ4YK5DgAeTs5hW4eDIkypKR0qQnOz5dzYLvUR3OuoUz3S55H8DJUBMLfehkfGM7SvGND1qc6qyC80F9o8KlgJSegaE/BsUkTfW8E4O8/+aDUAR09zhlEDpZRvqx+OLhHHSJgOunNZ6tXPrP3L4n5ucNVixFRDrIpgQX8kAmFeq2qlEpe3eORQxgOlPpWg9nzbinf2XYNvrFCNNVlqoX4M74ol7VxkY6Ad4UgqfZVCoghnESHYWVjG40uzOpqLD6Sw33VjIXD0t3qQ/FMJ68b1oiDHBGFLVAsTLBN9cGNiIveHTP6SvPPr/RanjPZKU5V8Il2PB/3LAiDjfM/sHbkZeNZG4H0IA2VQ2N9jh9WtZMZnD2jmWWBHZKdA7mxb5sw0NLceGDulsfuQit9rjrnUZ9+66zXog5nMFc7uDZII6uRlf63QZL27xBSku4cPhrPRUJIz3+RrqD/p5jIzktnsIsilsfQtVhx/Wh+VeEZGzHfYnBK2CNVvsrFdI9A7VrxoPAjFxA/ru1WDGXY4RLkuQrXUNzVxJis6Ey1VX4Xn0AZbSpYHg/d5AvOeJWLyMSq4lfsO8chUR+A32V8rLLAth4CRL9wvikHH4jntmE78bjGahsnb1n+ukItSOMF8Nt0BC6fuo5QQx47CNz1IvsOevGZ5UIgYi9Yosg0tVFooFbiHlHwnO8cOvTK8QU77VAzkcN8r+K+9zsWEWy0gDQ7zz+f/Th3rFJLY6swofmSOPRbcM74mJ/SNMHQFxrKdOfXI2eSfRYKSoXYqSNypeLY7j7yIQm+qrQuBriok79avzdATrQuKFxIFmHEX7v/O81QIhbfJFqfykzoYkGpWNB4TEfmGmeFJR6e4NvpNxC2NucnJrqXSs1588jYBujt00/XOI6bwtC60lm6Ow5TwH9qkSbfUZLIZHLlbs8q1B054czBWTb4Vu4OFyRlOrakb9aRs6x8vzSJPQGG+Dm3omT/nzWClyBFjXj/OitOLMV4S2zbTn+nxJh9pE/Q=';const _IH='a4b760f99ff35ebfd2dfd28cd7a5810a62fda44b4acd8de3160f0a420a77712b';let _src;

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
