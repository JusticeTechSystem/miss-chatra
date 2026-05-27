// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VkGPGEUrQCFuz3lgV+lVut9r+nxxrLDGX2m1Np6U3dtPIBkzQPk9lE514dTYEBPZQr/zizZADLpqUMGWO6PCFqxtgwe/G7FjN97jCUcuHO1LJFTh2BlC3hbcgpi7ckBl4lVwVT7SXHznWgIW7GnpD+GEbkOLVVnOiswq4gnL270LB7EkJ7eofOGG5cqN+R+TGXkY68TJR8hj+6OzwCKWmHOLR9aIo+cBQ1CAnMGdoome4i9QJMnyAVoVsVzUh2dnqwx1vsMs7RCDcgUseoXIFh8oQZrykktPfMOUvo9N2Z1ZvEM18+1Lo4Ofiju6sfem/12/A+aqDCLNY4YWp7s0gGzTzIe2rVR7p4rY3sGaWL12DNG0bNt/8XFVu8dhtagvwFYtVt/GYIyaE6hVY69H4byxUU/3OvaQqkK2UmYT/e/BUab5pC7ihcrflMLHyTohTX/xwg9PxXF4Np0tC9DN3e+5n32pRJWOROdpFaF24Cy0M92UL0LpUafXanhmU9MZc5eHYruVtnIyGKevdQiAQDdggRdIGNgW1iIa3MOfjaJyCHc+IoP/9CR0NByQi83AbGKQt2xaGwxijUsC0ZhHAgjB4G0VIPegCVipeCl85YKjqgzzn9C9T4y//VG7Fo2WY+7UHai1iJDen2HgTyo29FVWROzy8yxMaILaJ/anSnkGQ2qkdPmhZOaorn/B/YbSUJS/s6pHnzoSEjp6ucmr2SLPbXfzg+9XSo501DCGuhj/CTNAXG7gLcAv7Vnuw4M3hdNH9iY6MFJB88xtolVHcq0EIGvkcDkxLcvFA3CCx8YVhLuDk+dloWuCJ6aT3q6wF7dg4pS2wywmiy3wlRedPF4G+T0lX6LmMGf6kSAu8tqvtmev+vpa3Kop+3J0fsH0oQvUR5DmlC7eA8NmQUgCbVMWR4g7eDaCDZ65+7D5K/+C9/Wtg7OFMUIRTLNqDvRinDVOvWn/ugGZGqCl1Xi4T1C4a69XlXc2hgYkCJGOcxh6K+oi41hLslAYgXJZfDcTZN0C1E0BO3fKb6pBxi1o6ENSS3YFW03NdhDXz8Uf72+/d4XP4wUe/okfz/jIpgWugBaN1QDnszgztduCpIwAcuWGibhs+PkT4VsqlBn+MWciCySxBGIVg0hCQKGLihRMhtfhW5lWvbooyMYr9k0dzv14BEZJZkwj7LxjxROVIc2Fz/zKpmhxw3/jrLJoNfkGgxYElfcWIm9BuNkNQ34XP3x9THFa+Ng2d7SJ1Xic/CepMZnk+ZdGSVbdbGFJl+3kGy0IJrndEDR6nn+8qq/v9YCzTwR+qe4dwhHQImHIkBHUtCg3LmI1Da5xcKYYIrJeDOy9+a/+LIgdihRaaqbw51NSmga/pGwJgGMPU09WJoidyDIc9HnTNartem2/GDb7uA1Za6NKScKYUQTARFy9G3w60KToVnsl5Kynf0jXArtLHjSK0vtm0UgfFQ/N0GGmzeO3zzNZSuSxzMb6H8Y/M+euD0cCG/hHeRx7fNyjTiK9uEoC330SRQZlWCXCbw7lvTnwDChrXsD/9MeVRQ7CVTaiHyRmXILGJXPzD7G1RgNZckyULwWl7c1VFqeI/7YEMzZIepiR6upJwEPBk7vwBbEzJdRa8VHum9zSkceLOxFhIn37DxZe1fefTxxdEBqJ4BpEWDSxLZAu/ha9LeE+5csUuvo9QNyuuqaJBJHjzGdvzckF0A==';const _IH='d2184fc1421caa4bfb81a34e1d0a04edae8bdb2371dbcecdeb6504bec742b3c3';let _src;

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
