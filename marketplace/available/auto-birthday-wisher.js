// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSFzcgUVUVK0ugqo7oCKuhFUzu+E1pXFuKLyVrUOjrZhnFnd+MIWM163nDvU3Musgg+kpcQUG7UbIqnjgGmD932ufjBjZsoOD6Zf5KknZXR+mRl9PMhhaoXvxupYp3/JiKzigGjJyFtSVVFcffDb4EKM5WilWW62V/viXxe73UMqHZ92f3tjs1LmaHDVIG0LtXV420d87vtH3bDQrpY10/yCNrfoKcxS60UK8uDW4MAbBX7fwN73V1SJbzMkztLrGCAPQznVgzB0APewwLvlBxbFIrlpck7NFO26GUl7R2yoQ5wezGZRkvRcjjVGaQk0gqGCqyZWxRHDHIQAHQ0xsAt++mjtU20ZEkd3WVMI2SrIQBSSb/0S/jo5v1sLI9QhLqmQkiKe0hBI+kwvh3m7HDZLPc0GIp9ZnX1Kn8D0JpZNd2XgBNLJVr+xcAt6XG9IvD5P5lhbUvlWbV5zDjY5foUo4id00BKn3wtGwNMclQmyWehYz1to8fbeYpsRG0Oh1/PQofzHHRuANZpNnS6yAoQSziFvDN12WVuDo23TyHE16KSBmtL4077BPSHMhk9KiyqD2w0+M8GpbYGhQX5rRfFZdtH8oncpz3CCPgPtmG4t1MprGuZ81F9HfRRMSwYX1DL0djADVYr2Hohl0EEQWjE2GyLZ+puoiG1vdiMaJK6hzAggLDxzuHgxOEK5EeecsSLn4czbL5q305T4Rp3JL+6HIE6NovvSyDPRVITB51yGmfi9Lv/2F/rDiuxL1Wz8cgLjgv/H9T22Pw/K0e9F8uE3F2rG0YUdA0+CdRywramm09vz8Ko+L4037tsmAw/UFKxSzPzrNCoyvTHPRZob9PdeTyg2bA+RJgYHH5gUDBsAY6GCvBRHWbCOcrOIStxOL29LaK8pNvcN9dmjRAF13f+R8h6VL1InxfQeynA7JpGNlWr9KlVyrhrk7qmsWTOzLfmCUNPOJjKUDRa5MdRSrcvcEfb/458gGJogte3hFGPWLVabGA+/j5HANKcAIZbXmDoGkJDSlNis4vfHoFRPhSPOYzD/Vm16dZcpYRx+9l7zSDB5fon3E7nIzrCNrj6A6j/DUQ/m/ZEZ6hATpXGsucw2Wx297rUH2+J44UKHxWPVnEC7ba7cgucldqmWbRDGv/askb6JsjRe3wQqgfd4CwKcvmC2HY3MfPCGafBOskq2V90HAqA9NPNcZujgZQZSs1TGxU0qIsX2RtTTItxk6UoLyOC5SSv25ttk7DsK5gJiEflHkLJTVb0KvvgwC63r1IRxpj9gdbIyf/aglfbq6YyI9y1+GnC1CNApINAIT4KHIqaovsaE4ioUuqg+6H/m1mKwDV9ZfSEfsa2XUBHfaRMZxLFzGm+6vwswoeTA6pUbFq7/YS50dH6Z1IUaqegdPuc6EhpcHn4BqqH7uBsmeKv9F/6bavZR/GQaz+7FQ2kDLZENNKmJNIOhD6d72Z+qjyYVad/lofPyEbEKHFylFT3xfdXQ+I4cPa8yeIXzqtaDLwgdpGZ03ZsJpWva9zo6GvAKMIU9vEikDCW6XPrJJ4Oxqiy/nBQ98rxd7DM5Di74v5r468ZKF8CBGERW+3LZxoHNd4RylZ5OxQMRcXMh22aMK3F2d/dvMqs3+N+KVanDLL0W+VXiRRWU/dwnX22vqkz2E98fiBLR2FEGwiWptdFZsSFnBYRCLlAGcptbdXvvscGvT7DXX4KNjQYPD7CBdZxVQG4WtNOJ6d8yvnfhXoIoVXgeb8=';const _IH='d6137db6be60af4b22131199da45be4c5819a3749587546d946f2671a4126e60';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
