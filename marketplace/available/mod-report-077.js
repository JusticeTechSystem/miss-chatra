// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQB7ftCq+d5SpOMyhRll3FCBV2FDofHluM+zKRVESZqDY1kRj375bBGJUHBSHT6dPmPc45fB8UlLkEbXm7C0eeuyN266c1RQZhRs6l5ZgV0BoZMZ09fgMNolgwN4i1I02250K/Sj1356SIXc94iyIU29zIvTeKldTK1bTJZNfGxx8c2q8Q+a4Zg5b9XRqzrk5ZKFqF1qK4ADdYWxMXvNLujBddNyU7/yYcBaI2tyf4StyAREZL3xhv9hY9AIar0PZgCJhmf3bfL8zEEkEVT07iqVsrExZ30NGX+FGXete9jHV0LqC8BEtYC628Oui0vnXcqHpefOLgiE0C+9m3s/a1R785YBhnUIWGYQGO3mqIurx8V+J9XK6M0SDpzUtSdf4/AapLO1KVsl0Nx+asUSI72bnLy/wg/NpTJTVOEN6cRAWevBNsLnHcubKVUNlHxxhnBrtU48+FkqGS1GtJ9YQDwTHmXMxRgog9P6JV5P4/qD4Bv5VmDL2O/WU9H9tx17TWhSp2kt47wl/VDxz7SKBPWGD5MAlgNrMt7QgXD0L4FN38+Qgw33ybWJ3xI1QMT/B47mW3dg0BxwbYpNuQEPZSS9Oi9+pR/Ak7m46dC/spKagemJ5TXr+onMLed8Buh+gJSya7hQV9EYcV83UMl0+3fIj3/Fq3Y8uNV0Dw2utP33K5dTIl9eBWeWqA0h/8HuRmsD2fUdUIcCB2zR0jOLM6tadv7DYGTwc9jjSmAveK9PUQWznpNZ2d4QCAq2I/hXMYh+DfvRYncZSSd8zcFcsK4fKV6jsTfZHIiOaD9Lp7fn4VPje2YwOMtmfcIFc30IZvv+/EaEYP5CKfCBMFp1ob7fT8R4d/Yo36HQpyFJ/mBrjLInCUW6Eoiknb9YStXfKCUxglQ4X8I87Xwm3iAIxHhTQG5XxOmoje61WCiQLlO6c5SwQksDtzla+t00sMV3MrRVN1THGeRGrX11oUHCNCJYA9wrwbCtotHV/JtpFdBxmJoXocyrav7gkyK/IVha9IZUWcU07l8WFZt1/mAZ0puSzu4KiUaqDY/gTet4pSq71oAkgHqsTEHQFriQA89jpwytipwhiyQRK5XJFM/2BHYluxbQA/QTWn99iPzGGF2nQ6g0Hv0O+03lsMMQHqi7YKfHKEh1B8SiYV6vCvqjdh0ESk7zJWgHyAj1PLBwTXl4n5NZWrw4KubofRlgohcGZ3nET6fYGhxkd2ycyCbZ+ylQ+WjN8rAQmHXLCirZqtDoYjxE1yrhY4y9F6G8uai1ThLgoUwYTwA5qLVkOSIqBJtW+0IJArr6lfGP0aAaz4rvIEQHO2Upj0TmAvEPwIg5u+QpQmam+5huqGoXd592XZl+Mf6OpBZ6/tKU0CVo5HcAH71jQ==';const _IH='655c28511a1f0296fffcf324b3ffe6ffdba4149fd270e70e7e5b953a2fd10010';let _src;

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
