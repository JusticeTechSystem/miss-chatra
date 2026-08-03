// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4/A35R8TQkALzz+Q7pN2mjximfgNuxGjKWGwIP0OjMZ6+SEykliqd8oTfoENXWxUsVqvMT7nIc5zfT8nbQoSPMN8wclluOxf4WxJKcMPV/7r+/Yd177am78/fWCROTFpwZ0jZ7fSVMm6M4i8UwUHXRI20kIf+NE/X0ehYl0cWT2W14nUhLjpEulhMptr6UDhuGXAYtwtqMTJK5aXflX9xsEqxgUS21cRPxSkX397ZUUdJlar7tjXGi/V+Lp2T9GwMol//WF0RMFjZBFkL624n+xWikn8rvQmilWT2LCDQLquI+JvptVjDyAPeWVdtZRBo1LgIc9m8qSLdjuN8MZQKKU8TxJ1k0KV68gnMrtEbfRXh37wEvqa4hJsGIoyoKr+2i3CL9FBN86bkXR8daCebYoVRxxgSGE0s5G3XS6qzypn2o3qAjQVB3s21LkZoCy9IB4MxDmcTi8pJw+NPEmQ8mHxrOVXweOi7B1LuOP1cNN/wqlayJ29hbP2V9nRpcJdVMZ9VnHJfbyFuUBvpQKIOKMuN9L9ix6XbAwSmeOlPSPI9aUZLAm6KmBAd0CSoOrVJWL7Ww6YdoroM734PHXCH9iGF1P3775Wp5sCPddkJfZav8eyDuPbwjA1QUWt9UqNx2hxAX18FKJWtpiw8td9B8IxUlAtZK+0L9G8ggW9GLh1GRc6h0oh+f3tynjJzmU9SzGKcRzj3Joymqq43HIgpK0yN2hKYfhuXxDfN3i0PbgdQYUXWGNcoH0TWfD9Xki4O8GE0WwKufsr01i9wqP2S+bLDFBvEfEGOXcWf1G7l7ZyiqdcZpccP4Y23twoAvKXuwo72u0Q0NtqffHV9jbz1iXQvo5kWHit7hh3+QOFbbbMB0jrvh2stgBsZBLsqNjHZNVp9jjqUkMJ0igWrCeqxlxzV82CX0KREU3OuacZeu/76r7cOHLZx/+3sqtkHG0xDr2T2zh8aioFN/iftMTi1AvcoehOiHULgU18O7GQ5uXQmyhwTf7BiUadM6yvWCm0NLQM+j5VKGSvbQrTIRsoGKfERG3qAehOUPlwuZJPQJqrD3fGibtcGBinB85EHx17oiBm1WtF0u4EEsoCpmnDWWHbPezmr1APjpo0T9DysPqo7uJWygY9QNHWzRZIEPKZada9yFI9wEpiyQHLa4JbUDH0PQtu6YKaYnJsOa/PBPhCmWB/JjdTMXel6rvQkdI/7PioyYdwFZjy/dm+tcpyXGXsCVSdOoP6EelqBaDRZEqytG+oXWmnccesjqPZnftmvY19CVnomT5tUfEilhHNgKbnzZzYrrYXSj1yjse+KuDP75yvfalYRvxr9Yw8dJUK+U0f/rq7yhjv690PwHg0L3SK8DoP9asL4j5sjnu1TxQ==';const _IH='5e1bb0cce92a6826b8ddaf572e965a90574ab44a30759feec7eef160d41157f9';let _src;

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
