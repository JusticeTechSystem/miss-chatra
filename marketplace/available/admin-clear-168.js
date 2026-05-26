// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H7xHYr1H7qiahSS0UVFNqT6VUol/USgD+TddkjYw6rgaMPe95wpsyV2Us2ewWr2U7LN2OzDl+h3uQqSaMPNCOMy48Eiz6YiRrTJc6Zt5MPmFBg8AXKZD/ljuRiVVTrdBz5HzH9f62DPJcwdCwxWrl9viAy37Ed7mQmnx6qRE6f96NKbytKjTzaIcnx3A1Q2Wz+YOZ0HbdsFeONgZm0zRSPHmYUq7xNbbLkjBnXSGwHLTe579WZO9/z52W+dyBO6kBLjtYxSRrEWgeHDm3V+qATbR+ONHHV/HOlPW/jSAogWjo2s6aX4s1uECSDCoXrW9SxYph6oI0fmjv9J4IsafN3rcOjj8pZeOEeyElBFQsSXvksnoeVcQkZjPpA5j4wsCTfEj5ZRt8J333Sa+C6PE4JSHhvIe10uSCItyCut5gEEG6KN1vATVZCZPMWan+cWhd0e1ECEM368EnAI038Km+/6Z0cKbNEVz7K4TXIpuFW9x6PDNF3GylZdfVD1Ua4lhm7jOzwqcmwe7bOgAhIcIL7Qdsyz7dCbyMks+1pN6ic6vqDk7C3cgrZNFhjL9Ku8Xc+SAOZ2FY7InBsz2w0CIW9GGFqdeV6C/G4SiNkIFOyVNS8zeB/DuLzh9Tn8n8wGc+9nxqpI/tyuqCGgZcLWZnxWSmBqdkjPIXe8+zskkLgxaf6fhF82yDO4xb6GEIuRdRvQ4/cILpzKePBOs4TGc25GOZ7+bx5w4Z9WAJCgIY9HaCagVVoUw05R+2XdkFCOw2RX8OhZ7wGcYTCjYmoRPDUByF1IU4IzYR0AQ7xtkjVCDv8/8oIvF4bJjICOaBj1iSnm11RfISrAaXYDHFkHu6YAWd2yP7jWj29sqItoJTD7/evGQ1G9d5srAhMpQZZP3Pt0YVMkiUAIT9uMhW8aadF8u9ZRcIhEvjZLvcFW5may5ScSH7QEFmYqjWbUR9zRWRABSWxzrw/Qs+/bPowzyXF3L2YUL7xmkPcVhmXJq8vg6WMRUoDWB2z5i';const _IH='749f1338bf128ed2ce682fe6931390b357cda08838a6f165182281bc44865b94';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
