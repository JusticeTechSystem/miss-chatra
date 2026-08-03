// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZxy8Nm7pkr0rNOwIe0Opr3VSYcOZs/Mtx04aFBnyjlAZ0vXLw2sHAYxvBXfqv0bxHzcbbXlYZAIcQQhr/Ll51fT7/gPwnz2V/55EyZFme/LrQ2PUHe8+LM0dxfBp/n8OIqGAcZxzB/QMRafsaMEqdSwOxwEtpqBebAdW2zLChs44VUoCHNji/rzdCbI3GcvDjgTUnUKLqIsMBAMGtkyPTsG5YCklsIUxTxPtMoW4WPwCr3D8jp7M66gcUgwMS40IBGGs3ia8s1lCqOmQP9z+NK90SeRDXHhSETZa7zCzDh06tZ7EE1te89DoKXDUMKPeKzssPDRtAqAd0Hbe8ntqFU4OWQu9ZEVU6EI8PG+CLJ7dzUKY6OfRP9V0/8v/IG9EWIV94b6DnRD4NMlPiKeIzZtj6t5ASrSawiJYGCew8V0yAENklYBwcs7zApVprw8wv71sf4oZY5p2l4dLFDLQqzvJMjkb/KQFho0lxpSZ54XHu5vvNpm36FEwy0JOTFAK9U3wC8z9CvcPDBfDC0PsMo7FgRTFQljufNCJDz7A6NtQUIPXwrYwDCMnj9Y7fqDQjpBD7wIx9BNGubzarCgkxoQFquNNN946yjfxRXdxFLnJqkxAZZ7jR1bFUYYggX6po7DF2RzAJ7AxEz1RsrgTLSI/UnF5SyuBLzmwt5gLVtaifHPyA62cP7yeYG69gCuhxFbLy8573jxNF3LhgtaomkVpHQFSCi2F5u3yB3ByosiSTscMp4f5P3bDLmAPaT2OeKKsD8MtUqtyEZp/Xdz9iC00s5PhAw88iNdEyNVHn/q5Aramj0kzjwXpomkxeeP+IlwfG0aEGzBYBsVVQuVw93uobDj6e3mC6DDUx2xkp+zkc3zssw3ovXBXG40BOSMKpDJ8A7Uom9LFzSpZqgzExsDhQrvHwFS24QLMVK6FioM7JjkbRb7YUmK76r+RVQ/SmRkpFfea1b7/0Mbj9hgHBCaw5LkZquvXbOqNNLg2OZHDykq/S4ja6H2yCqUacixXYCbRIvjtdfjmL86FBA9mmMAwUKlZqqIyg1RAK5MoEMiZp0G4c67gaT1wgDXXmX240bpYX8k+DlQLIrVp8QAx6unQ60fYfXbcgsMIc+e43ZJTlv1xDHLLc4RLEQ3AJdIEcGim3mPE6AydYMvqGRW2HWxcCiprjDiRY4qj+eE4BJN0hxyhYRdcs3Rj2iupSpOQfQ+PPrrMVgWXG67m4uquVvRpBxHQx/AqZH5xej6ov6/x/4V5RslEvJUQu9anxLxMlOeTb+PNrahaP1nA6UIUfSsncFv6S7Km2ZD6S721HuIYtYH4K+gFMfIHxQIFqXI86NXH9uu6cWNyda0+fbpFwKmaUimBma9kbXd4=';const _IH='1bfd63b65e6e08e75eced812d1ce971802bc59224aa79982202a186b0c1f259c';let _src;

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
