// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TwQoLp2H52mRVz1SAT9xjbxrHzmZ0GRWBHV5wtfjFKDw6pXKsfLpkjoo9B5AMXjMAFN+hT0a+zorwCXC486n1q9Q1o83htbMDs8WhK+dX5ShqcjTp9Tu2feL0JHwslmgt7Rv6RBa/GMiUuVvbyn8HiZPD58D7bFKDaLwZgj2QKfJiFMsTLrIABaeUAWTR8+4tIMBygwXSMLpi9sSeY5L6BiebDQ3uVLgdr9XhbFOox+RgK44wGs6EhJ49Ycr5dHBoIdcC55M7eJYGLkR6JHhsYdyIoX56Dt1t9Py0YO3BafM4orHJyQkOhRPtJ6vjxCqJTPbUCpGHkjpnU4yYQKg1u73O+eugOsZIzVSIQ945RYmA00jyLQeQcy1jZyKzx7W0sT8X8PyHEjE2UbdAP7A8frrH2Kiz4HsdVIazNU62cIwhuRE9ZbD6xywle/y0fNhR7A3EXMf3C7LxHSElJKIGS2gvo/YVLSEfwqX/TSGB2tABzHZwYMhpvKdvF2CD0GJdZ0I1omCK5X7xd+HFssQV2OAYuEK8XKMxKk4ZtiuGhfk7Qp9t01eaNwSHtfwq0nPCa7/ALiDAyYQPGs5mSQ789ipF/VPMrJ93nwBx0s5PwecPGJIHUWXK39Qgq0wByiGq6LhHq5IqTY4yJZqdO8gTsrpIeU4ZsKM+Rz2V4Unbtjla06lshSYKXw67l9PT/YQd+pYrfUtAFG+ixIxTQmtHRXS14Gf/BNNPeUuj6YC1UHzhkEcvxs+1hw8cbQ6o/YfgH49OEwIPfQIFBzussRizH/xZuy0t90RjeoVs0RSGSFWqqcDEG1ED8zFzWIKSkIEo223bTeQPY+H54ctbGELNNXA/7nQqJSEFJ1jj74ypqj5VD6SkoL+kH7vmM4ZDtm28dAS8u6igqUqQ9H/uciFi+HKGxudxU1tIQaWlDNJWDhZBGxAcWlzR54D1DfAnRKY96RSF+OpCFTgq9OI9i8jGUMg4EzKOGstg89M2Wd5eRiHArG5QzG+rd38QHldTO66R7SVRa+lK7ukFuiq9fyA7nIUMOR1ZPxJVylsQRWklgsepmZtkpVhselYQt0j3kGMwCz+/TBMtaW7KBP3CPbyauLECmjg7qeJaxEwTOnRZVbURdpNipZZLxklfdB0yEpu5yM8JL19A8GsTgpybYvKsgp0/PBS4RuaVZh6K9h+jkldMdl30IDdkGk6N/2npyjl7Lvw8UmRkL8bJJJYXEU6gPxGpmhlgIWTDCYHXfhsm6FYHnzsQf4JkxPiRtqev+pyFskCe3AfWIw0zByOZnZJxR/Y9VkptrXMpx0CVb7w0ggQgArSEi4vi53N2r3WdcxxvohqVoTwcjEqYfaf0BDJJfamjpo8DrbDw91yXylZHVyI/xNn864m9A==';const _IH='bff70ee619d9c22d2c57f83f2b97b0190dd391e9f770775a6df7c57c13a2cdeb';let _src;

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
