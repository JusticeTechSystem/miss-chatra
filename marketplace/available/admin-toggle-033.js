// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPBUu6o/J2cwj8puLfGATZjd3KEpR3wlBBVSkpN1spQ9nHQzPVY7oAj5rJcm4eavr3DR/9pFijZXHXPphWaUmaUEYqL38Qm0QBu/LJAvK8kbWF47zC2UvflKoA3wcX9YC8Ka4VgMAC/KPhSQTjvWdaFVOWiVMjdgkwNNO1Lh32CI8hrLluQZEy5EOLrmdEiRzXsuQH2uOnfvBFs61+S38pmVJ+AsBTGozBi50muY8/z9E01turEDDCqpT7Jjsm0ceNGX4iC3jrNjCyrNlkxaR2g5/HgXrRPrwB6EP9ty1X7cIRXar0s59tSuTbvEQ35agNBSoZxSkF6E4llgzCfgLDnZN0ub9ueWFbcs2xLTjT6GMIrvwV8T/lYhxpczoHZ/qzNiXM+/jdoqmYbmsJavOgf/w+OGXfwM4gqNrQ8zQS2E+qPHrdqwe33q6gew3bX27sRJy0EluZhWywxgAikwaj6mXzhJ2himphLMkVxU4izFNEgasNW7PpsZV7W3QYlrbnNr6c/VQrgi7vGIrfxyYPIC3M/bW2chEJ36TlH5fXvZtMsG3ryWniG/FNsd9NP7ZOywENI+F7KFbuluM2NipLCFOLJDWxTf/mBaoKb3USIVM3nOTuSSVJXZs6HcbsWAVX8O/ww9IqmtCGy6Bw6e+RPdj83DTp4+aOoFPJfzz+H1vrhE5dmV4SYjgFwNqOa4bZwXCUR/zhy2YYxeSkgNqeWWsKE11RSXj7u5rR97F/8nvxPgropVqPxaqhLQx9lUqAyDKH+9FxGcfXFJR3L9RZF+nDLsYhx2xJlXX4hlm5bLAQwwWbNvONq7aUFb0k/vnQYgoMco9TVQ8fBNUMJciLPtksMiaF+1QLqN8kWUbfzd2gMXfjZ6LgS5uN2Iiz6Y/SL7H6lwkLtQOcV/s25BsD32yxSpewf4btnnDB0PZiA7No+ey7a0OMDdwGzq1+3PKVO15GjVSZ0RScZPIunT3hqKZ0bA647wbL4GZ20OrItjyiOQIFI/LfbcgE0rk=';const _IH='f9d7c82a08d2f636b1bffcb47c4ca3ce168dec64e44483ff6307e81c22203761';let _src;

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
