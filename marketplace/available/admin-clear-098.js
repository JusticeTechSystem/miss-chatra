// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dx73lzv4spi+RiAk56QCxuYQdpjsa529PS5xxPsJ7kksa56/WDPmv7ngMemNYxfXGU3SrOeMuvWpNKyBzWAp/b+I5+o3D7Yo/F9rQHllurfYfzcNsV7JJBXXvEqFxCbQwtnyxhokmLXj5Blk9p/GpNxSXV9fflPIGxLJd11/aGiBKvwYxb+P97mdq0Gmuu58UtsR9TMVELWSwCQA9aWNt74i9nLOnoIwKqfgJxIKesAe5VjY0dk/Uk+3axQNKpA7oDw/PBgVq2xu+9EO/E8CVjV49PMHhYHIZGk5odK7pD9ziWvEQX2ptSyADm2/Y+WXH3EJcIyjDOtnHf96Zx86xTf8OZWB2zNERJ8TnCbCXGj408Yl45Ldu3t/rKIY7O8AvDqS3kAGPwZFoxjvxX3l1zXTRjqa0mh83DA3RagcLjD+Jx6aW0b2hvpMdFMLJCqLebTigMqHzhG70ES/ohrtqGxACXqq79DsUEq2TikYNQAqSqpHJCxtwPE/0SgcLEVBZnulcAxAanCLsiPs2D/vko+yZ/oovnBmNo6mg9OrtUCTeYJe1hHOJRrEx/4zdoBvc9BdVKZ2bHmyDEv3p9xS3rmiilg4owVUnJ9NkDE1LXvG1aO+pq9DEPc8UNz1zP84x+o8PqQSzU5HVieTVcS+9GpLmeLv4Va8mvWgEBumI2h4QeyQqSgwit/YPoRcbYuNVzZsJjFBP0jlMQWTs+bHu0bqdDcqqCAkp4raqfo5Gn8NvKQX6jfAo2DUXnf+Iq/7FR5QlL19k3ct28O6nyFto+cOPhTksM9/OrXjO/e6q1Ec7VndfBWl/mQcd98GgCk/oSIQyvNVDSBaz3i5WIAa+xWL7+993aAPqaPL20UDx4fJTZSnhqILXfWHS6H11rBzMbWRtm4sHSG8MfxntTKr37w7vD7NXCERoB6BJShA25bZxv8dsYcqNwtjnQNxoUSkt6WL1CP7qIZY8fEDvMfjx00lwRdJz4CTaS4R21gI3rwrab5WDqM=';const _IH='e2c0658ebb13c629af6cf200f2be7c020e62f7832ac4d63083443fafc2cae063';let _src;

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
