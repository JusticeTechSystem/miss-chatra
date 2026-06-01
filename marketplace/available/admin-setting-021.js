// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8zkeHClTAKVAeSOqjFYbvAK5bLKf+USr7GW2ASe8M5nn1tDxk3kH+St9eRHV5ORHZxJnBayFbY6k7LEYYz7lGvek8D5NeQWKX7L0Jmzz+lg71/sdkb31I54OsM9tMb9xOqAqS4eJIaQsRfHT5TJfaiBDcpS6/UAfXvax6T48GnIeTJt3bs01JFFBZ8uupq2j7ERfaedjTQyFci9dAe5T7v8DwWl2gSURpaceO+1N9lg/SCIH0ZXCfdxPoMjSPHfIbDFAh8+cxYPSugem1wjst2Di948adjEtK1gM9XqliomRFUE8mUS0tH+puu0zDaVnam8CRiurXCiOCnCgXCAE6r4I3yHD8EeWpS4vv27CO5gniEOX7AJFurWGb9xbwW5ueJK6djpPoqeaIFsm1JNBvPG6sYPMJHED9ulLWs/o5xbIzsFibVlCYnU7bI1jjlzHjOMN6QyTtN+uY8GSexdFiKaCoFprfWp2pO3L6RMuPcMAXcxj0fWos5pQyjP5PxpWjzA7JAMHtXBXfNEhm5HlYhscVRiGnFVkmwFtpN9lNZ+3nX+cm+j5ZKBV0Gz80n2jCY78R2r7aRsph2mxLZhQwkqcJeXOzb1iSfTh49ZstPziBdZ1tgtpfuOTZxDDjrniimqKJ3eqiaOOlHz0kARLEvVH6wGtQ2jXD/ZNFG90yH+oR6uDf7zYqL5uCa68MF+Q9r/AulOQb+BMuLMeOrKT1/zau8ecH3O9ZlGa2vAJCm9sAEZkwT5fIC1liHj3AlK/8Y6HiFFfXhqZCFea8frjxpf0sK66NGETNr3wWTInCFltbljCAAJ+CFHoT3xyomurSVeuhtVMCSuziquW2/2+RxfEv9WNvAhjo8bq5DZJ1Atz5nnV6OwOI55rSu5PYQcYCJZ76k3uEO7f6OmCqFi7TQ0obzAT7jTrYpBBYtwZ76pDXRe5KcC4aWvSP+GMbMP2ldMJDqRdkO5iVs5fKOYNYGHlhtSb0A9nKNBygawbIqY+YbEwrzBASYru9fCQkSfKwZ8/6g=';const _IH='dfa0ea9d800e590f1b53ec1dea3a3e312d9c7642c5610e67f87195dbdf808676';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
