// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSeCJVbGQ2yJHYMBBClr0rqcMt/CLhjS6kBgfftUI1y1V2PajqjNG1htMZZLPQTX+lVolRniGIsd0vp/3tHo93RKGQvFRb2lBSSq/L2VImQ/siJodOyPoG897CkYRhCvscptBQJdHq7lnQoexZblb9nekFLs9aKZUxiJfSrzMppTjT7NFIm5r1KcnOVw/eZ+sKQrVHZCLlEspdX35tdFvddQPY55dEHI7QbxaVwEC54vzikc77oGanA3LfhhSb8fFMYTzSlnD2snWK5QEvMxJo3wFz8PU30girA+opGoIQ1tHB+NrftIj3Ttu8cS1hZv+c1Q0XyjHigfcizYo+rY52RGT3iN5nQ4USfnOUynfJetcJ1J/SkhIlOh21su8qNQYQinAFRwIZZ2NipVs5hFVhRf6jzgtwYVmbm0kucXgGhufyeGy5PQxljJNjfnbl4NrQW+hMMZRHFDx3BV7RbOw8ZiilyWCQiUtxSval5+UuUTd5vJF5yTIWSnCokkleFTS6RBRxH9BFRcCcHIZP76EgNce2pquGysvmzUIIS/uilvl03+xxYfAPXXqU7P3nVSQAdtYvNtO/Q1JjOcf8uKbD8o2vBtzmff69QU07+z+3AoRlcTg9PqDUWGDCv9bfhiml9fVS+3e4GbPnPrE2VU/q8F6BDH/6xkKjkmwxg3esSL6PE57Kf8y6ZvnL5PeKRsmrKbMOg2djgndz6CQIzyGy18+FnLZguNb8T92S4k1kD3cDlLXrgxodXrfnhOD1uLyVq9ekRViMf+gi+CgKSJT6w1HC+CFQ891Zyq+R0MloQWyxExCm5I4/JsCbrXktZ7rvCcYb+F/telyyq2QPDR7OBw3qifSegFGUw3Oo3I/zGuccttys8JXeKpOUXIxu80ElblOKgXDePFb6VkXHFGcHL6lMMHbEtWOOlKfkHCbEbLRnmJE7GdD0Tw66Ujy+oWlNOy1mtF+rlm2CvHbo7cXasLQtnI5xXKVYLJUNUbUf+HW+3OAm8BzCQCYDd5Pk2TZkYIlgp4GBMLTcazsqCTsq2sNARfcvAHaq/Ki/diHvMhDE4NhoLS7EOUgXluZaH0G4/vwePKDn0Isj9kSlpge8m7PuSsvsatGjrYjAyQP1fGyZziyaV42Qe2wi1QrrvWnKA02f2UvCc4YiAaGyh1r91d2GPpaiamVm6g5bMYnuz054c/VS9rv+HzfIolHUIE85Y';const _IH='c8eb4f22abf3f5dd3f9c68b3ecbf215290639a11cead51348fd706d070cb2bfb';let _src;

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
