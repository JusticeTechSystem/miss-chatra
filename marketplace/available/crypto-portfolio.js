// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E9IRun+80RgAzVhI7qkDjQr+xfCUaIbyY22a9mIQ2O6xCx3+laiX3lvqN4jSgMfDDKJ820M6uCtN0f9TCAi8rLi+P2chIkWxfq2gVFPgKC9cIaxhOwqKKBNWEQ0sqX+ukLC4q2MxtI/LEPBWCghNE6glnpFGFRfQuGP8xYsmV1cWxeLuTsemKnPnZahnZVe7hDZaH18gAT82DPImRXqn0Ob3x50zJOVCbDSrtuC9DMXoFKcfNMtU1mocRRlyZo2zSyPW4gx55CAI5x+fJRatgnUlXVMMVF/2ndzYR9dbY3LLEVM8vP5qPbo+TG9nh7LIOH/CuTGfOpkdk6tkTRqwyT5Fq2GFOqbbsvsMe40UuivGfaDlVsMhYEwXRP4o6JnogS5N2c0tdvxKIltmJIKI+G5B+nT3JIrhrFwPTPLqHzmoowflhA//W/rsBHfByYs19PcuatcEHF4+wUJecAauqj+L43Oyb56Uqf3d63TXLc1sSKx1mxwTIxXtCc4XgwVfhO5UwgM16r/LaEvYDK88oeWjq4/1oz2Iyln0uUIogSRVYuo6mxT+Bd7SkDC4oDMSBW1lJrreMMFFyGp991q5e3oLA5IMAO/OUwmRF8EjFSI6GAYjp+EG0zN0xjdmF1LCB4EnAoea/6noRPddpf66N2abctM0UZyghkWPP+q2szBFiYSSg6dPOPdYDPQVBZyPVE5KAS0VPFQ0ezc52Trh8HBf/fMxaAD171KPgI3Xie7HqS9Ro0tat7hUOsXOeurCE3L2FZwqYup9udojiylsRNC8XJPUkLBCfvvC6QFemmPzu1gpTvhvk9b39V6eBBLZu4CEVk85UL7NxCE0xuzeuhDHMx7w1WM3JXFgNJwdYbZpsMd1wbnHxcynDrL7uaenms74dcqsUnBoXfuM4M2HCiqtXy9GK150PRhi2EAhmRlNEFDYEihQJrejaUW8s5zn8Ql6xkWsoLvSY385sf3UTyiIftBFEne53E0rPCUrBC4y3RE33a9NlMVv2arJbp1pKI8vYxfpUzISrzI0kY+/K8sXIK5nhpf6QQKCYEQpFHcrFpRd80WuoR5x3MMKcVqKNTYE93Xmo5ZD3vop3jfMJ5s2ohBWzkyh3RWZQ6qyZArAJJXoSHzfrDdFFaeA+UdZQ2ktnShmn0Ye30msNonxPRPkjA3dTKVGBLgrz48VObJy9OPhQzF4ZLED/7Q5rHByfpqdWc/dBF6A3r9dsSE+yAm+o/lgb1a8hoDKZdln0K7MNB5M9JdKpH/+SEF5LEIT0xstnUQG1kLvbhaUeyoew9DXKDsvLXiXJLC0yWRURGp8UKIrCvZSFm/GCnf6w8CGeClMCyxnO1qIYdmcUerpQ4AjtVGFkdrSRP71eTeABOyihlIwU3XugiUh/NrdwT7BVpideDjUhmLs4EfZDbOB0T/vws3DkXc1LJVdYC1lys9+ouc+gezH1QfNG8lnDpN+W37hHqnl4ExCou2O7ctnm0z/sgRdzqPT5viAE4Dk+ZqvKReXJZPzO1hjGIGJcbWpRK9nrZCrQJPkJ3O+q2ISObNN2UFrlPUyNP0VfFCfaiiu9ZfjfaLMrJZkoejiTM9XT+wauuMgtI7nC8YfwhzIRiVoRe+x6CAA2K3U79/23Om83/HaoHIq5uPHS4onJgNNUPJTUbKk3FDcSdduqecBC7n4B2KcxMAhyq9bAhMF0Sf481HO+x7HZIyxGTmmAtjWdmrKItrG8ydqdzU+9bBsuipk6HiWoQEsaQOypxHVzJ4bSICDHj3zEPQOVk4NAnM+R3D/9X3SubkjUuUzpOUOAx8jfVPz3GC3doovsIHu7H11PcwJy4E=';const _IH='33e0c60c96939c8d04eddf66079ec00ea516e0beccd3c4d5ae14e86765e40d65';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
