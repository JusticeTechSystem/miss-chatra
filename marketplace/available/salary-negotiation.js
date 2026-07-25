// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBT2AT2Ywi/gZo5L9c8OLr3glCj9hCSzUKUEcgdDGIAEbek1J5Lw9qD4WdiH16Olnkxt6/POr87e5Ffcr16fScYvByuQ8fGML+K7yrPtVAkI+a9vvVH3BWpFUx6eRNnv5CyXD/AppWmecjyJ0eHgbQHZPqjmEtox2WEP5G0GEPUI+joEuLq6gWKxcGNWUyLcMH4Jpg8MTd3MOdm0cCOLEi6UiyrARxEvTkVkQlilpY/fWMw/y66j2n+sQvg4UMNXrYUMqoLTaM/qgnicLUbx2GY90dO5sMzWPiaVBJhSMXRT/gj4LwR7Ci153nvjzdSBTyz3Hr6IzLC/Z64lLq06nKrPBpDywk4PJv8xQvLgxGL9+PbJ9XLWWPUg7K5onwwOqueZ7T+VNrw22dKU1/HBXJYNx3JrUEsW/8RB/PhL/e1Y/Bvd65sX6eSOezOIhFStBxl1NmuBa39Bh1SHUcyMLC2XKAC143vn7ZmJhSGZikVSLOBjO485/1XnigkhZpSWFZmIBF5qBBR/+6kdoWSS/F8+RkFr5CCilTUDtOSv+HIbTjbP5iCUHGYePP5fFFW3d5tZGk224GUDsKgrdPjBTA5rTxS3BOXwWoYiY1ygazahyQUlBVNKQFVrmH3g/EC4gyKCzUeUuHRdY3hDtH4aE6qx8jJvbXsnry17wx1qw2j/3eRrzvzBF8CMF+D/dU2k9p5lWaQb2/N7P6g8iP5KfzltmeeXJ7iI7rt18PX0RBhbuOysAgv3Dv1KZA8nGBIWJCgmfDMJhRoRSTeqfFGRRZD8yHenadHFUCoRQfNf16+CaPBN5+J7godEva5ON2JKQ/kV7lEd/GnRcF0iD8L6MPoNSi5nZbssZXNEA4SkuGjNj0I4VJlFTlCEKTyTaw9sRhX8h/cFEcmGbJxZjU/W3FQtPw1ZFvGhRE+QfVriYK3fyl3yC2COMY8qH04WNVyqAescZwYeaRq8klHWDIONWgDWFdi4LM9Y9wEOXj3TTzpQUbvZU4ylRSUYLc9pexYRu48Csb77VnbnseeuWWsvKrATJcZldsENnaklOQEgWDMgLm8vjvbTEuwHXb3xBhmloLNiH3QZ5o6H5C0SpIjRsWEWRZFRHsqy/rNDVaLaepVVQ3wONlKtVRY0W/LQDJIGb5oDdMS8Tr+VL8uacUCPJ6xjIX7JUgyIrlTEgFL3+04QK6pzbQY4Q5dqUOWG9iEfElIfsvsOS7fxfTUa1x7P82psdglM4imdslroBPkg6K4kYm8WEHoJndspfzkCAmBCaa8suxbO1EzOahdnIvDqKhsbq1v0Epb3VczRURi7tKVUyQRpaLi6jCMTzvMia/r+8NWhwcz+4hoUXsJkreoZOj92ZsFJveeA==';const _IH='f7a25f6cc386d87a52a6e342ad768209c33b0628d7b50122e08be8ff9f165920';let _src;

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
