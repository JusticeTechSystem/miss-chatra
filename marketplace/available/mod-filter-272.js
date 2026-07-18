// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVYsCIQ9onOKNStZYVLPUiPcgb9SZPMGmK0Kz6mkIJN9IUIvcKtupm6JwTZ0ukLZoJLsItaGAwl5Kp8sriu6pnktpWH9tMWgiUpP8hjBd8TfsQURxu6BykrSj+b25iGFLAniasvUQVcxsljsvAYKdpO8Mwux8BkU0IPvz7BxSum0eSsPerTEH11MXgS6IjCb3oYKw2t2PaTCoszU7i3Epi7w5C3J18j7PSOVf3MxbVwYlOpSUpa06T8HUL004Wj9QPmiYJ78ELWNAUCDZqsjd+W4TuE5fYUA9D7QzFGsrQT5LP7oxcqRfE80yBDD0S53azRmH+LwoBAZFokkc6HNxuC8y+XegaB8FDUuKRLrmeU9+Lwz3911ysY5HcNYwC3DK3tiQJvB/mQyFhgjOza2wYwj1jjDr3RUqg0BD8CG2+lLHjZyyC7/zDDGf8begOHWvLf/m6jd3QrCfi+YAsh+xiEzRqGQd/1pDWJ6/2mSg+nzqSAT3zcua4U8nNVK3lVzqXBigRuqOcBX/r1crm8AuoSE55HoIfBID2sUehTlyyWT6N7+oFyoarkcYC9u4P8XvsaOj54+GrbxoFXRPZlnCV7dQfUVtO5zDHWC99yYl1d7ZB4v/Ostsqm4l73wXqWMFn8EdkIFR+yUTrikO9NM/8EjDKZDQC38rEX9kcHZHuZUIU+llY2WnVxD8ZJhj0tsZDKbaMM+EXP1nbyiPzfTKwRKYtkKEPNgeolBl8G7CuddhvpISbjRwP0r+o0y/pPpNvl2ejmFPY7y94wOud9VVmUwlfjp0TRS4CenHDExYjAs5cDVaJpedHAwa0JrQWBuR7ywDYTzBGvVa6i6hM6r36BYBrPAAFjbluxMgdB+0DgdKw4Or5620a1oP8grh7HL1D83WDJ5gIZwNUq5/XMkKShdP7xfZ3HkQQS3A/k4Km1ryRe/En/8cmOg3X8Q6OIyg+E7lE1fgGLsCJrrcahx6jpp9NS4bm8ZGi2Cs8OSx64ACG3E7KhrGvZwckT9mw/J1mW4p8ycNrHPCgVvSX2PxDJE6QH267h2RNfjW/ZPU5ZQ9Of19LRoN8fWUEfWCkFdV74+TMLiAB4Y6bmU5e/KL6aXe8sNF6J8SckzNJ02dlq7IqaYoLJy2CmQ1OoU64IpauJeAXKbD3FeCd44De9ccnhqzrxw7o9mE9H2UoSfXTLoRiNTp/dqgLojX5cTmQT7x6nwu/VpdDsg9Q8DLaTM7iNIyMVOuwazWgQzMaI7qN3QXyJqc6oTz0xKt8zo4Gv/mABBtwqfkR6f1lu9Fv4HEksD+QVN/byagjjALjbgotNTOOxC2YuuyTUSvL955Z4zyZ3K6bHnt/FWUBVwOSro5q5w2Z2Nw8BwUD3T0mblqDHL8T6lfOQbGo';const _IH='df40bb730e7d82c3311f3b979ad02a70870a0ae5c6c9f3a2bcaeefa63f7cfaa1';let _src;

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
