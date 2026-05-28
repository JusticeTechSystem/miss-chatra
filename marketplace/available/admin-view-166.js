// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1It5t93XhV/JbzBewxhasvQ1ZYDRIvmb0RsUIYK2g/zBqOLFqxxVmo2fLzZm1V1u7IsU6bx1LtF1l7bnecZUNtEV4uDY+gY0O0ZqLoQacCPqT7cn4XAlBsUPDV0oiiLYtimZ4PG6y+X1e/0bjG/9wJk3r1ysZpXOj74OxuuBRZ5mOzj2U1T2m/A3bfZUdG8ujl76BtBq5iZJpKEb8aeYcRwewJ6ZLpYzZSlO0M587W9187w2lx9FXus11+9sQ62GHE8X23+75GTyHlIjUb344/9mRR/UtiBdhNgSteYB1D5yRToy/qUVrWNobOYDHawqs0PR9b/c4FAmCXwVUyWDz1eB5RffZpLCBxi+djrrQDY0vfuKdbj2V6ipLhvwnT/hUyr3GnGC0qNfmUvuZqSlD11fxLlI6Udpy11bPg5aWu2mHU0KQctzemL7XlG0XWDzNPwA0s9G4QvLrt/qGvXAdd8mCD3eBosnjvVKEduuyqQzyeX6s1Gg+EmFLJN1A+f5fpvRnYhEbHl7ZE6Q8WJVQaewqCg/hwkN+TrtelPAdVNA7TFUPo/5GxoAbmwhB1LcKZI/ir6RQvGphS16iDiVRNC8Wb/112nexDMB+QOWge1t5BDzBUN7l1GeFLSFI+urP3uhQvOBGk8zikjs+xax1QBsYY+vaUS8741Ko+lpls6vhtVQ3IH7cNNL2MjtxBIjXGxG/hKHrqCq2H8BuCAq9p9+ZNC7f+t7ENeEaQ1u3C8Up1Jcl6nHCWbVlEOruJA+SpQhh/Z2WEIqUdjNP0VnboI2CCD2El8P/brgcqybm9y+bsnTJNQfnDcE6Hp6M+4gRK/CRdZLPdX8x7YuQMy5fBj3d8RwIZNQhic3wy1v037szefk+3cHA4rfackqThBiFFSTy/tzMzC0H+b9Wh6dqpDkFdXlSyLHrJDRhjfa7wP/ZITc819ijiR70Dox+xx7seLKGNSHGYzWqRH3/AeqbTgktKDu/t6LeNX0XP3N6pAvHGk=';const _IH='76602e5c3a884d1457f9d4fac9021053df21e952c4f783182a527c2ffa2539cf';let _src;

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
