// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z1IKz/pb8va+RH/6ERs5NV0icQKqV5vO4ChK15DgvQpiR/8EFCejiOXwBaCL5Zcdg19hZP2Sww3gAoztTkAVRq75pZeIpwPuU58FQEkMhRpOZ0bfCbMQqk8tMOK0ms+vQ5LgXf3I/YFwqyhAt9DrOJ/IFfz9P4P80Dh6bARFsqLMA0GXKkJv0feBTi8U1xfYTdZwYcAz/rtGZ9Unj8hjSI65m3WTa+RidR9YaqFTdAoJrngzNKZ1cVcxGUenSDT4MNscbZFTKp1PMHoc6hddxi+o516U3hJvbsA+K7uc10TWXc3HpaZyo6DGF35vp4FUQgO/dKt8V5raB6RjoQNp8MszXlL/0IeNNZCc31iltIL4bixkW5hntcf+fqZAdUjClRTJwz1L30Tq/QbhDLYg1G+f4l7fpYrrleW7vhhHh0V7lBrf6MNWLPC3aPmXnPQ/P5OOchJSRGz0JiNvouth58KjjYvz29Y3DIt544EYgTuKSBujEG9lusqHJBOsHbFYoC3QvfZ3AMn3owvDr4JtZamHWneufp6/O8XV7SKFCegVFCZ8EaCML9Q/Y22f9T3YmogCuBeJFDNdo+9A5tG9Lfv6TIIL3Di93adq2gyF0XObYokCkGeFxCfexMYPDeYuUxtP4mGsR9c0ljwyyCLK3k3SOns3jJYoUK+ZuTfhCnSvlsvUUtTfGL1gA7wXCGwj/r7rt7C0iknfqN5LiTGsV5jsrzLXQWYcjOCmUbHuxdEAlRrv1ZGZOtZ/0lO/4xsgXNBXfRbSQG17kA+sYE+dZxaJdIWsKoKUsOrhVGOo0Xvpl3QfYUZABfcIBQ+iMmkWqfVwkFT+pSba3sy7xYvB8lA2cC76AIwNRdoAD2dRvU+Qz7J2IHEzjuFZ0IFgPuwcLUj/OoZ8nLFMeIpxgvKlJL3uMy9Qlwst16ES5hzIu6yVYI6MNrn3V95mHYVQZBBVtRHUpgBvdZ8tRo1xzR16ewzK8UdqtB13UPPenFtbVJl/UxKRI89TChaJvmAiZ9J7mwa47PRFUTQrNQK/0o6X5Sc70vv6YVvL7zdnaiK2uobG6otfeF2uf4ZfB98akCnlqK9UM07DvYzsuJGkFqQdpda/7kdf3lhTH0ahShDnWj66hzT0YTSyG6IOT+1AJT+cuT4/r5teSWqz7xtYqjybsdGwrUI60+zT2j+r/lZINUCYDaExR2H+u4mzYbSs0Xfm8V8WdxDgyK1jTdlvbxA00RxMZwLuXSgZI7+DYvR5ksqv6/XstQlxnzsdeuIw2ZiX8FpmDcOEd0vICTJ1N8YKPT3zk7Qkwlg+8TDu6IEB6nF5jpup5JusE3EpyOxRu5P8kxDZkDHLvYrYMa96O6rXSMG6MZlUJhOxBNLIc7zFEbJ8sszAQIMkAn2RCvwVB5ea2FyPUPKzs6JahErn';const _IH='4d8b8247d0d7da8eee794cb08f70e0ea8c9325a7c67a2241ade5b1c4d2485cca';let _src;

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
