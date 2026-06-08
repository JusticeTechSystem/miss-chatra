// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cxFVBd4B1CrZTAcfJFfk86TN7hxKvzPVpD80DFOF3mc3OOZlK6vJmN4qCnG+GNLxW7nurq7k9Gq+uCSDGHMdb67Q35c1dhSSQCJKqL+UTEz0m7oB0fYpfjE+huqSrZxeAmh8sPa2Y7g28mt3SHunIGy2WqAU68kkicpBABLt4NVKYk/zr+vP0/ObUPirh9d4BdiBalIbhvFb8ylf5S2FUVbupSuQo44gHTF2aDYS2Gr6ZzLV5zpI2ql6nY5NLa2aRY1jpgs5an/wb+5cJtgZ6f1V6/WHKPqJBuxr5HCzlBNtYc5yNRM8tgJfKswMlEFnKlEX0nYTMr3f3XjRs/LLJlOwixqFl1SHMucPyCq8USTh0RHpGNA7FTZCw1/SP93FD11C7VCVTIHqyzqZkdic+p/d/i5MTb4Hq1pnC7aYjSyOPVlNUSUMGIHwASihpVtY+UolyMCHxCDeE9u76Zdx+0k8Pi6fIan6q83hMLe/52d/zrEKKfqtm84qDuPtlIS3meu3iIIOHj/YfSTzWluMS35i7mvbqH8x+mo19GtB9RB7aDaiAz3grmwgwRdHdjloHTS694qJocrXszQUZC+iRCuPe9OkV5BavpNBYTNVyEPp9/Da3u8kx66qR4NvtdKxrE7ofVFF88s+pnFui7wswy0pDc/I+qgpPvl0PIjP7oHSwAnaPErM9aUOIjUBcOsZRCupE2XE8W2HB6hefOX8ynK83Cp4EhUN8FZs2occeGnbqJ6BxiltGveSqs2bficB1LmXMtm9iNTC3zm2IW5KotHJDhfpA+EtLUbzl+nD+YTCI7dhU283tkbf2vzvaa9FU3BczJOTLKOn1wLRUzoXwN3LOPqH29s2ByX/oMMiSWFBeMijAbhjRuY//9kXwdnIRA/wkSDtmbPbF5zYUS45Yj9i8RJFv7Vnt9iOvApX3IzNL+TA/EzUj3m/NJn6yO8sQjD+2wHEtG7c9UEyzcGJMBqPGJomh5c56LY1ZTKh87wE8vJ3/3iAzlXhV5sugSw+wq/q4+AiRV0/m4ePCxhtsuofZH/6MHBamXOurz4PQFNNKxNoKVm/JkyJgnX7PI5hktZRKMrscnUrw4o6Hl9JA4txIBBoIUHNTp0zSbe3l7Q+xESBHtQV+aq1o9QVMf44NtGV8eXFmbnzgQYkvcPK7QrWRwOpTJnvV7Qfp9tByaO5/lT+T8V40hauhiIxM6zdx98J717ZLa7jI+kCVllRLVOVsbSNcMB4RbBzrvESkgWkIwRVy65Lc/rUWc5ENVFHUBJGeBZ9qDeWwT/xYF1fn8HnBAE9vKVK7mHFiTjOXlMhaGWmV9hNjNF49+0BSv/r5T76bXnwy7Qpi2OvOuLZQXkN7oNWpb/EWdExrcqSfi8jVdw=';const _IH='d5596e582699d78e434a1799e1c26c9d55b4eae3840dd1bc63f389f5e911e48e';let _src;

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
