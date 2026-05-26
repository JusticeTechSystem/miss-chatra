// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jZhY0Ji0zNBEul2cxKCZrkgZCUvmxlPdYdUb1m60HoE8ALrT2mwEntOD0r34JNSsfx+RXTAAEelc/tGixDg7WE9bC7/u8ijPLHATpjziDGZaxrQJnLZHhe1iFWeB1Z1Ap/c13mV7NXYl3LKmrPMeQ85YShNGg9Bkn7Kq1kqmISEAoj0nBt8BVFI4lQEEBYulyuVBiSBhWwP8qOq8DNYvPn7LFkmMgdDFuuidYCn3Fux5VW8Qe8P11Y3X4SBpd2MoN0W9xP9c/KHLhYTv5z0cz+i+GfqoCyAncsF/gYgc72jXE92mF/dr7c4qsAE70FmN3eBQv+Qn9n1JVM6qWPuBikdnifGsR6kairMgEUwsGo0Zp2B/GipRdspNeVr6ztXzWIRZmqFpTznOKwroenCthbLyyMqgDKBW4dKtkfk2qLu0UAg+MK1HZP6rKFHZYcK2+VISSmqKRY14UGDvSVsLpp9klvB0qtMFfU0fqALDc5FBKHq1V7FMrRaa8mmiPI4z6O+BTLEudw4Evoys5q4V0vv9bac6z+dpS3XE60tFQuur16UX4ttMc12GDQio9qfsXgWdp97bg89k8HcEo5q+I9lg/k1owTu+qH0qy6ny2LhGgf5P8taRo3cjsjLl5GpurEmDlm1ADKHUlRKwVL5XmSfdFXY9r32+gaAEioZXl8BlGI2bOK312K8X1QqDQOjgG7GN9UJnp21tfVi7BppurwwbKqkogGvstzNHjYI1TYdm1QuzQdyak/DQ3LRgmI8KMqVrLoRT+qIXL3Urw04hRzHSIDk/qo80bdOqPwJm38KtnKS+Sp8owhc48B5wvMz6VOLFBmxQzJ+yqUVqeZw7LVP6rJR2b7R4sLE5ybXpBxjogXTXwt7j0YBAP7nfl9vF2WD/PBSFGtB4gg9cDP/ODS0cNWVh2/GuoFdkfhb+/Jbb2W2iQD3mGXI0DQZVsB8tzmNdRPE7dhL9lkJgBKuIq5rovWCGmVA0IjWZO8sJp4VM5WwaTxE97kbperezpLlbup3aazSlnJNJUA6x9eWUkeun9x0Nvu2SnDUhdaFVpHvlA9FfWUowrd1lh8lV3r4Aof0hDFPdzZDOP+ubD3NS0v+5hlT2HGBhZF6i9YwYke+/2GFJQ2H2J4cfFD23guBBEim8gKOcSfqCrm63xhele2/0bmwqRJJFz2MZ4m0wYWrCmwOwL+TAFYNhHNTviO7WazEpAF35je8oFepTwfiZzySaEEgfjXvLhVLD+W3Fw4M0NiJ+WYJEMydG3tfXOvydAc4pvPeK+eV0NsmvKBegIvaaOeXfu48pNzxh9QzZwo3F6VezZ/ybnYMxYE4b0ClcNWhioZduANWWcSoqr9vFRzzWpgT43qKtp7UGU6ky45X2EDn0xrow8uV5NONmvMaPUQJGB8lkXrW+CaExUSgdXngutVwlEjXYubby4EQOevOb1nOfbpU5H5yMTrsefHVVXzbqUAQfPwfvlNqZJA38jDihdrshgd8Q8P7o93kjW7ELH8RKaR/nr2Oext0OHYp4qEKjCvhbgp7MIdBwCoqEyYvtIGrYPq4jy6nOdl/qf74qheL6ZJ4RcAvDCwYZ3jtzYH/QqtJqngK4vJbWcKTCYYki4qiX1S+RnZ50WlwemP4wHM+3B/gSECv0mWEehHj5OMK0+YwemBHGLLEJqCA1gG+VsqsXzri52IlqouYOxb3cDJyf2I52JQGQ';const _IH='813af172e2784265728161778244de7edc5d25c6dda08eba9c84bd8baab42486';let _src;

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
