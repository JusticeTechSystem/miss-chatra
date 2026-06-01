// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8VgzfT6ZAagIz8BiY0i0GfKzq3wELBQb7MVr3o0/wpL1ccekWdtIHrA2XcWMgft7Ot8Bx3KAFPIzYgT6EPzFNPpJGTbGeLQ1Jb5FpFIFWY/2QgCSjKPBJdIGbzEcuen3nS9mV0mssTp8PvdStGKPk9Xz2yofRW/e9B2rtAFkgAizrK6QfVqP0YPIh3gr1kRer0hXSrFOMjn+WzZq3Bw4AYaLlZmLJWU7HmeAjCULETbzRFCOYyUq9wNqwfFLxYaBbz9xCFq/WXSTMZidVTgmT6tsMolXjGyFVMu2DDVpM3d+CwLoUIJ4uhFjb2dhThN3vrtVKCLYVkA6yDOuW2A8ppCe9xG1QsXb+8ZYhhgU3Txy5ZMaeyx454b8+gG6o2TO57bKrBvUTzDNMuTJDmvQXT9Z5Fkp83BrAj2xuX2hIXTisKwBM97dNYku+ikWLBvZNYH9/kYnBrdexyFZHfZLirgd5Vm7iRsxUpQ/O6IsL3+qoVyjEhaQUVrxXXr6qn483j17XgNwn2JI2xj40UYZLc6kdgwua+jteCY8AgFjSXkZPw7WXPLQX8fzIUhXkcm2j3NgYrK2NC+zWFGNJmAUHrkRj3xtr7g8piAguS0dIXzsQEQfoxMOh5VupBUBBhh2WQH0tUBP7xQNaFi4M6XK5fVIJea4QD5O7an5uxygtT9X/50gCPGdfQpJIPoqDN4XHif3hYNAddPUF+Pml6jBvxbCjTXy0ignRL7ggmCFbAYZ6uGnNk7OKPU/Z1RDC7NrV8AVsd/PPdkxe9yxQVRd9BOyr+nqkfzvmHx9z1tPoKv6kDL//TPwYZJ9bYqepEiK35xxcidOgVxfcJQZ8ViqMSCRBqridHgBqDCG/3DtjJKPd5YaVkkZLbNaHYDq9yj7o7WRpyJwlrDN3D2m2fVc3eDgUh8KuC8ydTjLnjBOdLLPJxn4Y8gWB8hEDC4MgwXzEV7jEdwKJRN7/lQMMSQd9b9gVjBcdaq435JBYFahAo/34k0+QspP69LHBmOToKxbXGeJ7BWQiacfEKrYrS6V7DUETQ+2sa2iE7LUIiSE4+kgGRNaiKnHYuWZPRofY0ZZR3usTaP+bZbCZQzmLRxDcjvbUddtuCeS8mwSOiWZhw3HCGXco4q5G1J7nwp1jw/PwYcOlIXiIRZWlRQy4kzi+p9xcbbX6M5eC1z/CS4YFqrivtr682TSV4e4eZNmnzB9Gyifmys9PQTR/Et0pRzwzhMslxTIaRiiPmhGBpck1aiuJZjUMqKCk1DJG+o+mQIEEJ8Y3E3vqB8P9nrJk46NdvO7UlMUZ2UF5Lp0AIOApanFPdksQ0Sjc1BLRkm2MxY1cK6spM3jJIMa3vGphoqMOrtA/lryrNQ9AzgLnclrXVdX9Oac6+STA==';const _IH='d991ad17843a99952f49b33b3c1de4fc476005d4388dcddf18cbff4144147cfa';let _src;

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
