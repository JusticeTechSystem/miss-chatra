// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ65pLL/R8af2qM6aXpOL6NlYdFd02/jUFQ6V4lAl48f4a549qUqjSrAz4cuZELKglsFA5pp43c4mE2L3vy71eRv146p5866i4uPt1ncIKhgNS83GlBuzhIL2jF2Oa8rnzXJjbWixkilw2ACwyVQdMXfVv70uSST9bnXzZGyPE05d3nR7GVvj0SKk6zoeVpRQvf47v8HHLUKp+8SPhKCW6uZXMx/7L5BTG0elpj5b5R8S7RbFDEbSu61RmG8AlqIVCV/l6oyjE1ZlR+qsO3PlcXDZueyzm815q7e88CZp3JNOAc02tZMYObRsvWY63WEj2b++ga7/gxJNSNtA5UtDAMDiCMe7QijlhiXKaBbqrbcuLpAhBRSKwlLG4U2/IdpsuK57BKXj43xn4+JpcNnMcJ00HxvC47VjLrIhRZxlwplvk3WkOLp5ijra+eH+uUCNc8fuv/14CSpqy3W3A5E4KJEo5PhAElZjsI6dYy2kbRA2X/xOdAFxKMSpXC1KYg9QQWDwiO+guSD6Q5K//NVZ/Olr9TDN6S+emqESgzKMDf6n78uptDDgs0jsAfuKmI7M2ov+vipPleCttZyo1JM+iSDQkm0TJXOdeEpc2HIoxhtOzY8npaSanGhjAKlh+wEGUtGqqLE1SydzyxpudSsmGo7+DFCP9Y4NbxfBUEILI7XNiD8Imt4IH+G4yfhsgnfMJmhcDMVd2UNV7MWAdkV5QOW002zGmkYvMKKqvk1CgSk+ShZGR2LMxblG+Xh+MO8guxAFnH7ccUVNvoc63RX5HEStVpD4JOBc4Qvf9kq55hBBDtafkaBYZsAJc7I/R5ZbP0RYNKLquhjhtyZzh8oZSWWeu4uhIPKMJ0Keas2pcV0AsdVJuLIUZDDnRao9GVyYYEzqz5rGDdK4DsZVTwzqGiSSBl/wEDzo+tX9LXwMN4FMxc2QY1ygqK7JDesKAoq9bUD75ag9/y0lPy+IpeaFvcIszUYrqcEMWRWXdxjbDhfUj67Ig5I9ZVNalK7AtZ08ES6l85qTm1ePLN9HNmiO8vEm5BfA85eDGSq5SNHj4KsfqUe4IZhxcbfobt2RvLRfUgZMSMZOAghlkn8rhop2vFNmuSFSC0Wrv0T/Iyqwlo33b2Pbu4stj4IX+IQ0sCHL1X/hmDe8qtcAKHFL806f+FiHw8QP0Jmjen+PGIj9Bjlp3PiGZIz8Ytokzf6q';const _IH='7d0a5ae44bd080a50c7f6d2ffdee7be390b0e133ff90deda33a4b9c328561c89';let _src;

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
