// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w9fvUWMXZqKCi1oldsQQyhoce1WVzLs5tXP5WUP7gU2rIbyos18oSGg5PEbqWYOvF0nHO+2OVSyaV5MwW6u/F88xBjPlF+BGTR/su29Z4OJVBwLi7HIeDc0VMC92pJbD8Ey0bXn8/Go0sYR5bCNLX5irkUsfMP5VHh3V9CcQmuVYu4lZMmRRcU465tSGHDmDnnJfMgKXnULM5em6E1n3lY3/YVHxduci3KxXk1C+mA8bxJ9iBlfCc+X6gya8izE8a5GTWAxaxXx3D/w9yyfiel/YWn+Hg4lwIDHqbER6tYA3rQZhcJ9beKcrc7LKOuykfTLmgmsM1hzgikcWDpqivKSV0cAVmb5+NM9B3aWOU2fph4x1AQI48arhNRV5NxNVI66W0S11xfht5RtRJzj38QICLdXjPvK/u74kPhv44Q+Au7+7qbWdOyhv5yKFiwS1f6R/VIVajxHi6jlztCBQ7nR0YXACJfFrtP6OQycw45A3INazAlDRbYFa9jGaLzg+s26gn8KIueCNBjDjkgxymOWobVJFhYoHbpm5g8Mua+H1h41CXXCHPYi5s0NKkLFaQ8pLvmeghkhYKsVtpnuw4ZQEicNdzBPCU4eHPFJ1FyRFiA==';const _IH='cb2e807fd580ca3503db06f94182e9a7103acfe7e9e426f1d69050ceaf913673';let _src;

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
