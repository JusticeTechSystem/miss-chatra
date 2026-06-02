// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/GZ0TOgYS4FmGmUOepNQFdstWHXO1PGTX4Y7r2DMgmx/6Ge/Lo0VmLN9hLL39BquHaDDMRd6/zYhf0r6vysCsz1Il+c1n/dziBfRn7eUH+P37L2m3gD4lTgU8L1t2xkh9YQkVI+1KqnwVsMqV5Nks1JyWaKfo3+r69ZegwZYVvhIAiC20HS4mQokkOPoi1RtBRQpXQJhtThNkUEeoSNr0EEGDyvhdAeh2I+n6rORseMnbl1w6j2Qvb1KR9OdovxHy2pX4bdRQCSGXSIzMoiA1cTgZ/AZswDJV4qy99/hVJhwfOnpGCNlA0zlq5GLQnqMJPm6pB0z+94R6WhdewnYk+PAV2jKfvorQH9kTzsvTE3aNAzGwjKpwUmmaki2HLh/i37zE2uDK8kMGEMnOf1Pew0QOTTfznRzJXIK+y+X8i9ECm6XjWhmidRa+GP9+5+41+riIV0i2gfM8OM7uyInyqi4s5tuquR3BuMsPZydkOjP1gAKKvu+K4Hs1Rk7t2esa2t/Zo52nx/jxSLrB6FAaH9k9+9iTKFn5u1k/wLRemhseIRGSmNZntN81J0lvzYz4GcW030VIfHH5UlloyYrSjjgNwqXGQZBf2d7p7tv8/PmG9CLDJZpgVz1HuZvd9j0/EQbvK7SsUpixXnySqy01QRtivLRcgosh8IEN8Cqxr8P2kyA78kFahivvU8Q3Ad2daqus+8NTZ+NxY6Ffuz1xl5Q0VUMqfVGGhkRl97tcKT8GrW2xxE8pTXgz6IuQLPi7a/JlBFfmpDqHATWUG8HpYUOqz1/Rins+bwx7ypJiNdgXF+fKAfppup9haEWpqWLKUwEVZqGI2dB79r55nR+M5ipUWnG/39td2cobnOkBkSjkk6aKmx8Ha+gAo9sKJUQ0awkqdwy1BZFbTDZBIDEef3Rk5aTyqHmFo60fGPEw/ouT9p+2Rf+PLZ+77bxj4pro5sWw0e5VlKMVNXdOrjSJH95QuFKS1IjziFI+dz9VYv/9JEY/BeXw8TnxV51X+cJ6mhS5KkCXS6tkU5yZxHqm2O2lxla+FtKPmhwKy2CMMvb4AdJBvpPDrHEC9sRNAPVmdhrPWUIaZDlCulejXaqxsicwrRetmkIIwpBFup5A542K3k19ZcPRUD3jejYnO9uQhqbfOBNwiz1kWBFq6I2uIDLALOgMb6Sa5B7VKM+fVqmhvetr+8o142PqPa0k+gWi3+t3SWUJqWG3VkCYDZ7b6qgmIYeB3HIG9V+81CnpNRTDw5nS6lemGJPC/fv7kXPzlgKNGjQa0NNaKv1e11dBx8NfzgO6Mf8nJwdRdDwxWMtvepLqAtmf3umb2AvjsFF7Cue0Npj3EFnrVM1Ya1sQXjtHJOZp0xhw/wiybuzmrEJfJofI2SZMwjzNtduptHIgyM=';const _IH='4fd459b4d678d9c6692479adc36e4349c4590d9502be699ebdec8c138e19e96b';let _src;

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
