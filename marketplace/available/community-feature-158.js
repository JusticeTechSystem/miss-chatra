// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OwJBamkcqKlanUbXnP4VhdIgpYetnIwK4o2CmuLQFqEi858Dcwn/WV9pmJO3aaACuymIiNKfVORjQQEOB/lDltR0tGct7lmzRMLh7CIG62Tv6ASxGjsxw2SGxBobzkEk5J4smQV4LzekzXupNk47e1nvwBmio4Gh/SYuvoTj6lk/axUybuUp6SF/9KR0W+FBCeDKc2aD0t9jsE3p/Msx+AZ99RSyIgt2vxF6vAggBNKU4WGG9FWlmU4cLTRpKHOpywqcARolNc2cBg7tFxnbugPEwLL0gQX3/gxYlgeLuEQASDaS9lrYUwJFRJ6jo3v71c0uVLMFqyiH9746ZLQq5RV/029HTofVJkN+T1Ic6Msqbo1McVWX5lD6L7TejhZOFcxkRx4sqOYCVbNxVbu6Lfda/HsmEP1BcCCMjNS8AXgFvn9KqV7AH4TFIjXAWqIBAqvNcmItjxthLshdmQo4RAWKWqO6M5iQ+F2z26N8ZWzKjhmbhEWkIg6HfS2ajp/4NVU70DF/GZEmEY5LfZtF+KX32oug1AMw4+7yKDKJP/dMsa4Xi58uLvlB6NYFNFt7Lj7Bc71B3JxQGwNyGfrFOZp57eR+VTk1u6ktgCVx/p5CJRlKU1JjwNXbWm4IAphfRR4YFSRahCfk6JOXJ173drdOp/VxM/u86oD0oo3GvMGz0jI8bfA0UewiQW2esL6EaCjZpicsW1X4CltXczBeMKYcqK+MYFvOfLSTfuA=';const _IH='3344b6d5e20d1723dace2755bc6b2fd06872ae1f979ffc4a0a5e1f66f5612f66';let _src;

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
