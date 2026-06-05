// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0WwEazVQEciAn/RuJdkBGz7PsMnFtat4xEpJoOurmhiJYLOFoiSaOWtTlHJ18cugmZhNPKgYBbEuPCNyUlQm1gPPZful+a2lAqxrqjwtgUab03SZyo+fxK98ATNaecpytnN/KIHshSGSN3DzqaVvbTqPY7zDcZDdxRHj3U0gbrJKhl/nJ5JZnCl6lXZ0QEfpSlKbGRRVNS6nquDlNfcziG6JBl+rlne50E5nFB5NPPpxQDs0lbXj3cHeUzdNNvL1fQz1HN14ZBzYiVvddg9IyG5+ZgzobJJzc2/P5/1rqGUnCI6WnlhHXKwB519vXUk9b8VKZ4SguvwlBTpXiN0kUm48Tmf6xEsqphppOvs+IykFPmH33GXg8nCBl99xQE7W+pVGb+bTutyNPpFncWgIp58n8rT9jV+fXiaG5Ukz+cmFEPZGpX08FKi4XH158UY7ZVj5kR9f3flUo5oLb4wgmESPbg1yMeEveIlSyR8N3/Qu13kD2oMVS6REsd0mHdfuAmvs5vgc8qw8bA3ZYvYcy3Z2ApFdSXOg2sxXnQH+/6XXzL47/sIU8LT3M2479wKF0jlabDJa/oth8yz0gTcMLhKQfuDFrca3wGcPhwIAbpteEr5n5/jlsDkOlY4o27bz1G4tTOF+L9v2pz2fX4qfZ0bPdNzIzuZhf9G/52OyjEXq6DcpNB8oQViAl/3r81vMl1lylEmYMEla95JSGWXuZ/ngliMLe9WGKLNVrr+FTjCLoy2ZuAyeVSreInTNk5IyyR3v5E4S/xLaOv+KCgKHOOCnwUU6Iro1DT/n68O0J0A0N0MTHBQiT8rVDyWuOYTXuiRyjvxNxQdHZSB+oLMOiK5F5UZwG7mzKaqXKv5kiTWyG+VIjtWM1T6jZQBmK7DxiYb8Uz4uBjKhXLjZradU6xMPT8b2FdvOZFw5s+FB+QI0HRCfwdl/0aUUnfMe2cGSOECZNljkfhqUCPXDduLM/S1M47gUrvDJhxAbkt+qQPUQFEhywLxRR0pnr6PLaiPSaWOiIBBuOcFMKSrkiK7+u6jFo3nvIVc0T5hCwBGGKAa/2fSkRbC73X9WMOA4i2t0NvCw8Ti1XhnLucF85gl7UUqmjvdXRZw/D9ADWNnB3bc6i9ugZXCRmadcw5EtHZNf7RGZBH0fGp8az0T8lXamhSG84PyoVgyPaab5s+rUjk6nhqmOI/DWfwRL2YyqcA3OfPQU1rySaHIDgygD3Z8/+bO9PVUKdd/2s7P3WmZ8jSmNwQ+tAiQHX73McKd9YKUtNnREvHmqOYJJNRrS9qitW+9xtj3NKIpKjO8074M1mQ1rOUMC5qJyzS6/QeB009Hc5/0Iaqm+bHB27r+ur3A4FuPhTeVJH31oLQ==';const _IH='e417c75d1c2b65f0b2df4c5a8eca17ee4067d528388217a79a0ac9b2a4645eed';let _src;

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
