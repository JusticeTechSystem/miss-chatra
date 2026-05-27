// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ItE/wCJYonTqanFzzJK5WifHxODzCyOPnLFdyBvwWus5rEL0lL/5ZNNOqYMx2iLERI+4zLdpeXRKzypkp66B6D/ZuekaNZNsyGPyXq7Bfm2pucsgqhiP5UJ0ThGSZdfsElVPrEibID9JsJWHC/NoNE82RbJnNYHDwbWrLZYmnOMlXJfHymORI4JNgPtFQdXUhPrVQTHaSnXzyPugpPT9sFYaPPmTVbOgvEiOStLvqKRFbHnJm3JL7j6yl+6qn4R4jHQJZNrgyv25idrOjQZQpunMjvuB4w4bB56YdTsEGm2Gz2vPF2bLxl6CdcZrRKKDCVE3cP5nYfwfjsVrw7eTC85js1KZxyTExK0bhMRhHVAo+K19a0Dj6mbKxbLmHujzcZpCX1lPdNsAdIbsVyNXB6t8gUi6bNNoBFk/SXbLAB6BsATOWPOttOScoIH2Kqix9q5UM0KVBTlVJapZiC7w2cBRIi+/1cdY4aiSASGMxOw1rF929ux+9d2LtNFvmXsOpyc5ncCuYuxPBnWOvd5LtLTis7+GouNLTxexB15724ix5XL9dlXq9jvty6egKfLRnJQRdkQgodv/nekVa4TZLG8h5XFTuo9KzUhSxw7NGXc8NpTs0QNd8ltAsE0ih3KJS4RyoObfbP6RR1ThP4clG7BrGyTnJIgbcsEBiag80xNquABcNZidecybWY0O+LMflxnvBxlpnxNTV45jrPOlWvJ//pc=';const _IH='13fb36ccb7ceb8fefa8f9a07fd3e6f864566800e7f2d6e9e8b81d3fdeba77fdf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
