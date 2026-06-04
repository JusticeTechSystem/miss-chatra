// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jnZygKMyoN7P9jUfaElCUitTKIYubkMDRh4Vrbt1bzDyOVYW+98RbXDp+Q51PheJ5i7WtLx7ubyGI0r7k447ugkAvVhqcZvVXZF0EKWsZpQ3cz7BBOqws4g3O9z5leHG0SpyBgNkiliUnz2iTwr+KLIK9p9vz1ILc+XnTfIOWctfU3TXYa9kZslg/OXdjD/dULzwKn27w3K5r6MHC7g6M9/0aO+CLgPNQdhU4hcDv96Bu58OgwSUlVzaV5OyRBDqcbz4DVoPa6kUxk3NsGxPfWVzE7UWTEeIvJqf26fyFDAhQUMJQ0YQOgr7xWm7YZv6cr5j0LkyjR5eFV/QuCJM9gSlp15xt8ozxMzuHvIGIkCOoQoQPymimW3z2/kdzM3UfJ1MywmFQlV9c2JbyzbdImr9j4ROaWZktqk5joexQBHW7pSXcPfHZFv8nyqnx9d/BPnih7QDonE0HNh8/bjx+zWgeqO8sFAjIFFcn8Y+M9nrJkGEGhWSMm/5Rhkh4HvyblxOC/tW2CxrN6z3s09rtpdEVaacR9auYoDc1VLTIMqCOHC4joC+hXaKi0WHlaqQZEuanCuFmwKr+JrG9fNX5E+a7U8J1rZXq4CdfGSqj0ETYPnZ2Vy0JRO/am5Qe6ibPzl9gm3Biys+CJc/qcSKg51GfE9tHeLPA6u0c32KRp/92Vnpi2ioyt4eCWQCYcbAFZ9eQcAvlj7mlS0n/YyS5guQQ67BgehS7u3mH2hWg+tDuXKMRo0bF6JZ/mSN4aYylh2zXVp7P7yzh36Z+/mOsQwYBSGvS+u3qzFBenSFRKphZt6Ov5wgLcvgIJfURkVTifV+1DJchY6A3WqlsMXa8qKL8X+CufBs+yy1PkxCgsurwMTgu1e7zhrBoUP92gw8HCMDen2nHxm5RrsbMrPDUET3XP8Pn0L2s9Bo7kkEf73UpDtfUzwYhUunBCVVSpyq62NneUlpnDwF0oRC/fU6IFoos2xagrcG9cNQwELfUMN/VB3/a5QXYpfjAUcLTOgUSGPpCdt9ZJ445nBEV+zLFk4mZWAwRRQKGo9g++MbM5+Xkch6cxwQDN8yFe9GiiT9XQDOn7II38HtzT8WT2lQelvw2g0zIuL+pkYAN6XNM5YMPszFPw2h7CnD7dJ8a1AnoPgPKNJTq5JwrODfvi+en/Kv92YXEA8e4I3XUNqXLFg9aJTh/oWwAcDR9xNsY4D2cXHkQVHVmwib+6Yh5VTAImBjv6MduJ4jZIDTLcDLUuDqyCl9t60Ef5OU7Ve9xuRE9FDJvwbG+XPfcJSh56BouwAbU4qb/GBB+RraBl1JOi03zeo2CFhn2xyisA8GGiRbpG1bjIMgeNhWtNZ88OXZG3dBKGrpIwGvJmA/zHIRsjPF0fui9q7q3Q==';const _IH='1d6c1847a1c0b24f84ab7a0cfb629896655d22ab722c70243800ec0a97a1ea4b';let _src;

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
