// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OKuchiKP1Y5ha+wIsmfpY2xojoatEJj6VozvREYC11hCseCcZUDdqh129Zg7exKuV+oMn3OgXRLgb2sxn36FAS59r/94kC6zig7cZT0Cx+Kj86JnTzNrysicIHC+BBLM/iE20dtVeXDPdCrPaaKydjYXpJnRp0758FO4twXhaMIp1jtk/ioqa2HwpFJaRVy1AWbliN06hWy8LZKPN57cgaakiRrWjAgzU1y5pra2Ci1gSPCvkjbRT8MWPdU5pi3C5XNmQJay0zIlR3EHy6+KAb9+Lak6GJs67CdX4fIEfkFvhPPUItYQXk4nIvbVATT6+Nv/7rNCUvQ4lNfzQU5S3mj6GGRPuqiu1l65LgVM63LzCI0462FXJUgroG/b8l4X5WOV3Y/t2nWovotY7lBHYVWMM+mfXuQbu850A+ZI4xYL10V8nVpzUHN+5c/4sunwV+DcsRJpy7BYTxrn62AGlUxX0cHTEl48b9G+J4fiWaYal2YHl3UJsmwr61Jmb/yMOmyFt6o9MeQhsHkWt/5xXYUr7ehTeQX2T7G0JJyJOpPZiVBsnS2leLJCJQe0Zhx081n6fCgGH3p8yqf8qKYeV82MVqJ/s6/bejKpjZ1nwnDOsIhoDVGVx+OZob+Z6k0fgH9VzrbLrR7EwCoOyzMDhczsEc46/4UYKCR8Jrtm0feJW6oKf6JlhUCinUoXHSkDUJMXQPn2lDLUveJvnYLcQYCnamPFSPmuMfPST111djvjojj4xXqy97FHTnmRBu4Fi5BYo37lbSyrpizxzIsLrS00Vw+24Vo6fWAcsaBGXkZ1rs7hAlTNsONB5Ltm6Yx11jYAHm48OwOFRuVZEPyFv6k+yb0k46tLwzP39VezCVZpNnYKm6mEcPfDa84WA5moCWFj7ABgdf6IYzPebQokj6SJPgpEA+Cf8CERD0USYENqcH8oHhNp31Ktrld/8tyv8pufAX1MD22KQ9txtMb18OtpQR0KBAtqzGw6YlKgPh98qFaUKxLmDRdiRp4Lt+zXlGOtt3SyYfcPfHOKdVatc64yy2fV9k0XFd7G47zVJQJHaoE6BqIFhQDjblrmfeAGA6F+YtEabEEVHLMMc5Oxhqt4ib0qg44sTE6XjCIob+hh/1qoYVtXrXJNWi25jAe3jg85woZuRG1gB/BVxyjPXK+1ec726UMXi3GY0EXWv7mBiRkDM0l6Zp69P6vhQkYwogGBnTFAxlp4YQAl5aKAiZKQS/oCOzzDSp1+cLzTuL/FG6BqUZrvHhDSrmrDCCm14jQwHygDzL/O0CjGPr4GpU0sHTS7g5vnWcS3FT3JWCo1Y3yBJxN6qUrW5CYIBRY4n1rwsHBVUKiOpsjGPhafXSDZ19kScZA2Td+8Frvyo2oXFTs3OhA39pFYJNHwv+Y+RToVBqj7JHZEfBwogDjzRuyTwYGOVmWPFHxgnRW/n6UefQAGmhw8oY22vH5032drBw+ys3UURk4YrgbET8sPVnZSef1LfY6MxqEtYvCTQq/cocw90b27OwukAN/ZJq4MYC1MW+T0wfox0W7yVsnM3vwvsKOG2DlLh9sG7/oG+96q8QDG1IdDwQPAXo+Q6uL9k8ph2CA1fd2Az/OP';const _IH='83e1bd78d058d1d348db44400cfcad7ed06bb5f03e24fa0ea247b1c544283bfb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
