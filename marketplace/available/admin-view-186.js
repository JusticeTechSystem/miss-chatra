// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HMVSw7izxhnozZZ4OGvBp7i2/m7ljUWo9mWHwQyHJzYCPprTewns7LQcO+7w66rOjAoNABcFZrJUglV8Krw5Dk56099gZsnVT+sjNYNLEPnUCAbDFIt7BVTBSVa7wtwz1jrF8zBpaEU7PPFHjfOmHXNK9RuB3AgOXu+PQf4bJPZMzuMXCtaVB2ovy0wWIhgRjt0vSObmApfBvMRx2Ogz2Tqcq5UyN3Z8McDHdzOJ4dU7HICLg7xuQ6HgwF2lMdFCD0oTJNqLdjhmfB4NzPW7YONhWd3g1Qpk/wgFwZOld6Le2Yz0m5VHsffKsavTWeE+FO+/0k9I0gsX4YHbv+wb+lDI3PaDZis9dyAy2DGU/tGa4z+HDMoL+Lq4KcCjiogHauv+5g57xgHxd0E2VUBoavF/T8ztDMhQ5FJKEc++p9kU3i/ExwzXGJHL5lT/o7zRTPCZfkI3s1ReIcVnMHsCq80LPNzJ7bD/4tJ8cKek8jEWtSWWWHbMTI/b5ygHaSNmF8iv06F7HPtwcENfxu0d/2qng3P2LgOuGPgypBuMvuRvoQjmLwXMwRTMKJGVhKaxpuNnwYMBqTJdc+YjNQfipnlbvfyAyR6gFhl58/FmA7DDjH4WW+hEBQ6LdUYHWWsJgn4l5A9/UoB5D/AZJzVTZkzlf4A4HoNvMghSZInPzop1tR1/jJUJquh73Mkh5IFy0haoJwIm3TV8XukgsJjrDNXL3ynLovv8wjHufgPZc162A25XtMtlaoNj/+BLt156AG8iubeNfe/byij9pXr8+IM4Ik5MN9MuvU2Dkf5nheOGvcCN4V+0DFlXKtrgAhzpuSUaA+V28HpxWm2SyrmSFBG2IDr/2ihtW1sF2+B8a0b1plp/an5ahXFAIMgEkvfiQwD8OK5zSHDaeeHWr5UQYjcuuYE4Qj8aaSNeHc42rwt88jRDVYERD4u3ueXzsxZdQfS31+IGPNtEwI2SivSSmxr3dejcT+KbJWCyk//4QyapFlc=';const _IH='f489c3f77f91057aadc18288ffdd50c4fc2221d1df71fe4c9f0f0ecfddc979dd';let _src;

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
