// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u90lrYbiFD4qtzlTVa1lsjCeR5fxERqFDOr8XheiKPm5vtWuSaa3N1//SJNomlb0xe8JIVS/kWvf9wA301DQkW0IQnnF2TkCpj58LN961bS2SdT2yWMxpcHCkw0bmOTijiZ9e+P+L5YhaupuGKDrUmmclCyCggalS6l3wRRjnNpvdP+Q6oAbCh/T5cX/2MFLjqiwVCuJ+XkuF/1k+vSzzdo8XwnMpRVqJrBX5NdaHm5SzEl9BL6nv9nMvhp0K+uRqV44AGO+KICmcwAnAA6yLAf8YTabbVMbhJUEvJV4nbJPn53/6YgF1w1AvQ/29TWYdJVOQ/4DN06rmxQoLMS76UgELJvKwCz/kKiDGl6ylsC/rtpzKp9CfaLdIUXrpmXqlhQgaBqMDG4eMUQj5k8r7DCt5YVXqFzXdWFFi5fVWxUcvs7gO9d6KPJp8lOeF289tFnZOB63Z2jdHRLkhrWqtsxvenM5AkFYIEqQuiSr6bu1mz2I5UoUZSuhcRRxnPlwm4kFk2Vk7ThKfzhGpxMGVgr7pKAyarNlVZv/JfMi/pDvnS6h9nOx320ynnNEGKmJBIZfhylPzyr+POFtzXY4d0bH+Yk8PDzYaGXNV4gTIJ1wDf/DGukR+dhUN8JbseVjQ9ZDqIB4B2IcjGnnxzAvmKit7RGQ8xAuC9FzcT2zPvc+pJ4L8rXA2+rxW4FeHFsBOha+BeJj3RRkOdDWBkTWrKDqc2+lFx2/b/oSYms1PGqxr+AnCH6u6+doxW3sUOX38SIqLUXwPmjcJ4MjzhSkSw23yu2F8N2VzegJqC0YZco22Apttvgc58+B6ptEzxb5qE6kQ5Dn43oB4xUGgYjzY++LSYPHTTz/Wxx0W04/bun9gPFwtZ/lRhYiXtQWf0w3ELlJt+gnVq49axwWNxT3zSptRT+BqEsC/xGsM0/rLBV7OD1tTkSJFtpKwIoMBauhjgQctIOv7pEE5LsZ4QOf3huu/YzT6UWAXWxo+ilfNL3pkXXuyj2LtFJsACK+enJnQ4e6Ig==';const _IH='8e2f3ecb36b71452dc4a66b478c49284fd0f10a07f0704c0c0242d83cf853a35';let _src;

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
