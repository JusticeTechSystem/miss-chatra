// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m7tUaKryQ4XFgBsE1A08YogSLAgOleLaLbWPFxJrP6o/91CTLKWq2N+RiosjnUgtHevdRdAPnFWd1GPUz4RwllJDDjYVaTRhmCm5IWt5JfGM6FCsT3+pqRGyDLBaNmFTKVqCGf0Nd/GloGewbPxif9qEWSVnM/NawMzgHotCYOLxfrwd0rz45hD+5+gP41JSSeQyvEMNhz5cKlD3T2WEq3RV27Pr4w4UP50ygcTwKCWiI9kXzJ9Y+41XcJnKw51LS0FJjvi+8Y9Hyj3LJM+bJ4d5L5NIhQOQYT6d1yZ/Ohof+cY0iIfVMBu8IBS/yMe89m13IkV3XKZBkjkKTiwqUlhg6GkIlt9H/kOuzgFqBjVbzHm1udHj9tnlilSUlvPxeKnzyciCBhrc3gpcCyLhTLtRQVO0d7/8f/x4Bs4rbJp1+5GHh8eDTcQMLOnPexEsrHRAjyGjaUKKkki6ryYEOcWP9dKhUsijp9Pes0T0ckuSgu6yUzBE35E0AOp78RuEyEjOTsZjW1fWfDcayunRZ5+c99rLtYwj4hJO4W3dtuxD9pB4Hkw3+y1NGCYsrkGy2C6fWjg9/2VJIHSYTRzVgRSauDHOOxEq02hdlgqi4/Ne3FU6xOxLIyjv+IYvXWpghTHIBk0ZH0fyhtsO3iwBnUWZzKX/lvaCoc+x1+Xi+ZEcf7Sg/TAPm47b7D7yqHWg833ePzGwruUdkpGxMeiH4B+R5KF9J9I4B0SBi+S5FgMuSA8M4zlRq8Qctt0ln5m2wuQaiWFuaBmvgdfpQATGW8pMn/j6NCzbxM6Z+AR6FiCKFt4DI8w774OHrvkVlUHQS2nrXmT7MyImSKbDpBs+hScxFPr67Ak8MDCSHfoCGxgQguDBChr72JeDi+NZP4hQ1e5xY1x8bRZcCEpdRFHtUrgGeHR7jUFGoD/o5VRYpVM0AR1XuhRVISA5HQcnGSeefJaTWarwKz4TaHA1loILCUHWsED2eYgCtHkAQZ/3VhrHbI1wj2cfIYjBpCQB7BbyNh+ayw4/D6z//phRReTo7rcnLgoU51c1xScAgWD9dGOQxRrGSo01OI3ntYdVjOoUNxxTUd3d1Avr0zUub/HN1L2h03bMKJ1TzRcQzpEO+46dOVYfO/Di3sqcjV6XOg+PgryHA5rsSH1i3Ltyksl92Rho6B5GgqqeyvRIoRGCsKZVvYpsaTBzYrGX3GtrZPKFAw==';const _IH='a666940c1a80f700ab95819fe28edc7f5f21826b48ac521052df67d6128d59eb';let _src;

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
