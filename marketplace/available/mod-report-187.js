// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0lWFhK56T9mhUL6QQCt2Egr2p4rRrDz3wSHK7wMrFDk9CztlN4+LywEdFL8SbAuSnkACLNu+yUEsUs64FdoUVnQwmgOHC5QLwxL+cgAI9HTT0QNm5O6AQt1vPwQf0eAdxabMTbebSiwlvWYFTScoXDzUtvdFhBsmGJ/bp6qbtJEarqqsG1uHjBVx/Ii8D81LexDW+WD1/6B+lgBXJg9bmbw5aUcljMZcIFScLh+yMofElB6sa6vrXeLbnd8ksOOkB5AMzrbZvmvXhDoZd8HRwNJgqTEuExYkfSoHEihvgimJCeIFA0S2pgtLllWm5DvQIZBuN38ho+jFSommds26h2lQJ8nGBbrBX+/0bk4MgUZrE6igdZmP8x54b7vKQ1yCFoadIuRCH1ozA9JUtNpNj5Beqxw9etmFHbLh90QiNgMz9rqO2JLtRAdtByPzcnwVVloimWLJdS3o5eRmiZuVIAhNaBIcNrSSQ2U8Ct8Luup2TdZ+4z5HSZ0E/XjBixCs+0jK3gPj7yVPSi1nyjBeayMFe6PD5+mEXZ5R/E5PXOFLSdPgbM7c/4sv1srcucmjXhEGiftYaHr55/0OxaJaNFromu9AbByLeLtXf4iB77Lgt9o8ZZ5wfRLM9WA9mNemiRvBtucQqpMX0JeCC3sRyMrk3Zl18G80xZMgopofbyt2C7QvMJ5fKMwcwzw58SaAt0iJll2cBi5PbWiI5+pLquGCq4McaUEe8TqhGpSgaDPlX+8A33BMBqzwhPKMfcrezJFe75fkF8S5Vbr28B+lDav3EnN7tX+KpY3/Ad2yL1/0sJCmn6oP7pqPh/bA9ygY8uBiwgC+VVMKgQUWruAEyhlDMRxhY0J7bgKIp3D7glJm5cQ/G0nDfFfB5Z+r5/GHR1hwyYs4IpTT91xfo42+GYyzM/k1XyvnGGFhq7AEJ/fhzXCFaMc7aj1vLGj2YonsV6FMurVkvvTZfoYYGUj1IVETC1DhKcOjK8jxCg9nnk799EcfFdMws8JV76CQ0BSWv3UMQk6ugOzOlQ+syYgIpJoL17giWCMAOF9TIq+R0ITLRmqvMqSxdv13O59JzBK6MDIhbCSoHu9Dsv1wlusOCLOlU9jSy2bLOarKV9KehIWTX29LNdMcPXifQoSbhJ64xBEw2c6KPuqjqc4P+39+H6Pq63/CBy8yVt922SQzyz8OQ9qZAwXHaiy2eUbXaFYSSutWJGqhLUCUOvzLOTOvSzYQLkvWUvyBM2r+sUYwbLHQwM+4dxbdYGFIUXX1OYYnXaCMY/lJTHz3aF2t2xni6fbGbGvTTGe3VaEwAg7BDoHyFFpuE5mravcmsP/5LLoqVjWSc1AxIRhTPPmozUdwQjjJNGIq9iVF7v+e/7kkIyoLTqO7OnHooQ==';const _IH='6cfe0d7ef005ac01609c2f292af70805d90a28ca982595280a75cc89393432c2';let _src;

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
