// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5W+PoFeJ8EE9YdfqXiuCgz9FTCdesK9hbZV+eRPJbkgf7hEhMh+FLb4jI/0goUsBdpKhq51a2xiUNlxZ4IKgcGMwt2XGgnEx5+x+lHQUhe2+wSBY9yRjC7DEH29mUgllOyfSepkyyzPs4e8k3nXEqXMjy/yOlOcvg6tHBsRpbhpxcvWLsf/T4NuLMu7/lBIJAyeBhuDvXp5Y0S5AcLliY9e7kbEV6XxHKloh/Cf9upersW4KjGriQSaSagR6X4qgLRAQ9wQvWWTLd/Rcnp0KXr8ZVuWLmHtaH5RFSHLw5EJ+5+dYL0twZRq4Vnhr5sH+/ggfaHM2StKzAR1EBS0G1xvVP4YGSN5qhQdmk6uwnaujluNUiu3T88U+9CPLXdg3y2E2kjrB9pMLDhYjPvt3fayvf8x93xXxzv/nWyZsN808A3F5vpj4X1dE8F0MMwzYfBLSO3c+aRyLk1OHtS4ha8Fh773Li1a3eD9pJ7Y/LgcDEvuSKO3EP2tiq6tHAMCU8z8i0riN0QFfo2g835TH9sD+5Sewkw5uZQXez19DEH7Tek0xDqdoK++wx/pgkFn1ij15XYWSE1M0e53B3t78VezHUUv7LZFxw7hX8QnZezxQmdyp8ciZRoyIyRQWGfdrf05Y/EX/vs/Z1TloTXPpI5xaS3B46/2A1qP4o3bLD7SyihNbkL3FUiqE0w5VvLlNvLoL9bZ1osea5QNUXBH2z87siAhTUo7aQCxdsfYPptbc8L3ihhdsMTDlfHWRvNp+4tCYDfnJ1od8SsVB9a0BrfJsI0xS81X7cF4OV4CdipyHRToBJO0pzf2nM6unDEX1+qAfKsEz8NHcdvvlfb5WPd4U65ZJjAy+3vesRTOQSPNvQs/hzAoh5nHVnerWbhaZEcqW5K+rCNdO7CyCAEdnfIOtqzls7k6NTkalgA2HbU9efjWGHl6ukhINxxA//zrvguh/+PKdoywO52x2qbrXtxfNmbVa6u6PAsCfPizPt9h2to+3yCimnPmHsm2cURkosHT5q5/7A22ezJ6dWWnqQPrJntmW/W6Cam1AawEXwQDX1VLFUjCRbXp939Ak894YK79DHzErL6/YdiPG8fQciBV/TXDX2VX3o7hMixC1dn9NcS8FGxprRjlzICwkpyQeBtoisMwuIiTKEn9PL5uGN9GhubGN9C10Ca5XRghKpB/kO5A5LNQEmW5Q26I+4QqxLZRUUp2bjSFdfhvK3/xcHbH4uy0DAYOh6J/mcRT5FQ8E7Bgm4H5Y1x2ZA6PkvV+iGQapL6oVsc0y+6eE01KsC6qLNUdJCV7kZ+La+1PTWhkS+zc+zs5GbJ+Vtf6vLng3QUD9OXQUEnNHZjJKh+fmKH3gYgqxrJV7yHA3xkiV8wvfm+LqS3dZxw==';const _IH='9c01a71219419d9c7d63e4adfdf5be9e18ac9d3b9fb2afa8fadd438ecf3eed9c';let _src;

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
