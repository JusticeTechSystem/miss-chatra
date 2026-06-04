// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z9/yUdQKUrw4NSSVY1qAhbvsOpz2Ng8FaZadZED1A+Y/M2x4HfvQLUZpQT2rOs+4M2mpYMUNeqMcOLacrZ9G6csQQUngln8AzFEIUOsVntLZ789KXC1QgsDvTWwCauF3Dtw+roSLF5J4UE7QX7FLz+aBRNoccw04GBHMGzrgrsNTyRKfOf9myf3cgH8kdVUgPyvnoadf+xhlRJbl462qBfSgXyExkkSPTRhSehi9U3rqdA5/C4iH70AZNwj5h0OVtWF8RbFYloDTAZikM806U0U/+gImOyBsiMchsDlI1kK9ZQqlRzG4jBqo7g0cfX8VWcEDU8Tq/IxxC4nzYwJP9eq9FuHI+6VsQ3fHDHG5/YXID+CUBI/Vbjb+i3pAgJwLWuQImpe9kReOLAkU/DguNI0G227C1tAAKl9X6C7LSkRSk+UvcCIsWTYuQkFgPRUcJ6luX7VCNyfkpLMjUWm/HIaMkJNAvgonZu2xTinktOISMywiWRYJT2APVIUWHJUr0Cc56T4uNm4PewQir+3fbs6dCx3psqG9VzGkWVy/nSY7h8C94nmqrbJxo2kH/8BtYHyw5tyT1mj2suyDeqHqpIY/WxgRXc6Px+dAdooFzcM/b4LZiIxU5rDSaiENlswnS6KUC6+UZi3HWfbHIacfFKyT+WaBuAq4F9vhOrsEia8PXDFlfv9GvDodUcfLdCI4Hhc/KXddcar07BnBycHhHkP5iDWqcGcND0Ey5OyeCRxQqxKk1wLkWH7eQWOHQ9JIAeJmfgqUclQLG0f+wJw97+ZoaJ+7Yida4z++rK6hmYQ7riwEHAfVNTyQBBmGLzSbzqFwHguMrn7nxxZSQWRlqsVR+gNIXScnJzaxQNwiVN3hZ6kArApVbYLttfaFttZxSj/IDhqyzPnu2x7Ra8enBVtgl0HqZUNGFPV0J1iHtWlW1V4QqcnXdb5GagXYsJKWutvzThx0+YFbf0j3c9fLp5Y+nD+ti12r4ymCelg0yyBBdisxu3GM88/aZpGy2O6UhXtuoPy/tbmkUTF2ZVEgQw5eoIqNJr6aDxLif+BYM/rGFAPnx5r0IISHqbqJowUH6j7wwV0u3U5ieKtkhAtVNJomgHGz91/WfSIr9R+xqDUHF2c4GDdtKzdJTAXaszPxpSfTEa0tIagxz6iZXM7Nv5CbecghDSWOuAG8a3MGSZy76EToF4UHRCv7W9gRaDR7WsGLFgZRF6+B';const _IH='b630165ea257efd57145fd977028ee2fef8d9678420291eff1021e9035c788f1';let _src;

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
