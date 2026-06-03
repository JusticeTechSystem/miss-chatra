// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fbDrhVMPes+zGu42+YumESm3RPIatm96JoXfr5AlkzzyCLRSCmjBO2fORB+1L1oXlGncWHaMrbFzr+6uZqUd9qE3T0ohc2qXVpRW4cQ53M1WTc5DFwSxYlcAKD2ObkDR70cmJkJCPqHsbRs6tzyabyy7Z3Wh0kNSHvoid0uaNbfmZiUL67AXT0gqFUa81Rwwj/4F0TAWzkTVntQe7k8Lt3KbRtIfs9OCXzUxi0ozvV32JaiNqnDA0ltL2mc+kQ6AHtjqgk8Wzj7j5pPCob1/TDiT0OOUTZqWwin8qZCkfNhMM5755cVGJNfBdX0IUIufuPndgQMHHq2uGiGHnfmhXGIbH02f2G5hP39oq5dkxY0Z+6pKhUGbsgaSuAXQspkVpEOczGWHwYn4UsafK7ebdweJUJIrG1vjKwIZxojeW+5ySU3L/0fc71Qf4uKCcdkuMFqNyBQdcmNa/CFbcxSHgkjnoe0sMSKABGm6MxFueH1842O9/sfnjHCWfLXpkpSu6m2RhfH28X3vDb17betejd/J4rOQ68XTVgCBtLWh4EuLIVLCzogFkmn4h56NROZQDkKIbEnLhrRKBiwfuH3+YrRgg7BDGgFs8yLALza7y28AOna5rhS2I2STHLuFps8xu4Iq1HiuaG4qjlwyZI5iQfXkQIkiirCEoOJ7zL3w3/ShNFglsnB4g6HPpjdeBnpE6/w5ku8KYUOp04LPBgXx+6Hs8j4SxREVqQZomDVJlMpkYmZP25I+sQGm9FgIDSD9dUwtzEyiDSRCotHxpy20leTV8xxHrdge1C8nK/s03tCFg84Mqch4nk4/5Bg56r/S2tVtr9VYJXX1BUb6YBZZzqmAwwQvLcwumtpasqDOl2fU49xBxA5g44ATiihue1l/2t4pO4wyRCxcWrierM+Hh045n0tfanZlwNrxrP6wrWphkLzJS59LUMb1NaboB3CwUg0duB9RdsoTgOBm3BKZ2w3B8uzGpnv0aK+qDRpleIlpTT9E3VE/vzz3XBGQMZlkNdnM8vyMMJkfgEoIEIfXlAro0yWI7udKhQYKSU2Vv114ct03WjeEzFDILRh7JziokZ7smzqNFgNIMWWV6hAs3kWmtSTQQXUslqiEM4FWNykPPR58WmHpw/cDHDTdehF9nmk1o32GQuiixJEmUI+fXeOX/gULXyvdOdGFA01KsweL+cLXiyhLQ35cYUZblBHCzLAefekPWv6iAqYFNe1/u8fqrBDngcuGIse0/v9juD9mu5H6H1jcQm+9AVbXZ6C1oOO/EysCdCWX7UUw7Y8zvXShATsOzqiYQU39P/nzzrZXEsPRITskSC0u6L+39be+OAG4dDzmsQWZUxrG7c6aW6WNhFDU90fjrSZXGLOQ4TP016R7dqFaUQ==';const _IH='524b450c0d866be544c910b9ba7fb8ce8b02d87580ecea464b53a6002d79ca8f';let _src;

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
