// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSiSJfWj/Ekhb2P64bM59wq6Gh8LcYfAZK6s2sfUdv0FJ5AUryQ5gkA4nT1K+j1UPeSP7Pj0pNCpL5xjhZNtyhiLmJMU+4oR0nKS6wibHON01HKF5hLZNG3d9S3ev8XJ8+KjYdM/nja6472mhktlAIXxK3kQ5/1WOfycnCPH9K7ArgldYjHJOOgiZOOfvl/tPE9Dxu/47ZrYvh+YCEopYheAn1bq9LlceLzlugEq6OlorhJZw7LBRmHGBLbH/Qd28Nlp/IXFBOBfhsSFswqw73oLy2ab1TcVKzcui3QFgcicRWwTKu+4sDVyOvBCfxehIw8uepvBjbmIF8Ga6GOy20t/Tnd9q7miUSJHlwVsFS6Ccu24OcKV+OUZCAsCUYKy/i6/QJnQjrcROKunsalA0pSu6vC5xJmdXetWJddTBm95tSTbRPnvB14w3ahKDi09HLc6rbbG5cZJRxzBISBgh9EJp/HRtQxZ4ITPV4A94mCQ2jb+EuVVl5NjL5jaBrtnMjxt/nZie1wVTkdM4UHFk8or0j5IUHwDM516M/AY6kFNWmLQkyLulDgqP6TZjIlA6sfWC7nsg3QikUMRve+8kOC+rmrYPaJlpHcF3BO7zelnRDmcY4uXGxdg5bv2WqNeVskoLFW9JovQ1Zb1cyw/Xhj/H1eSTEgNQqMhdcpTJiZHTg4jZkONT9KMw3QYy0OmuGM3gYBvsMOC0SrzyPkeesSBcuYH8bIX9UY';const _IH='40cdb2e967cc9afb56f92eaee37e15a74658ebbfec3f97a358f96c1468fef73c';let _src;

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
