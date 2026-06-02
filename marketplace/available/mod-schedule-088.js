// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TbqvmCOka5MVgyUS2hkAghwtR4jdNlGvxUvCYh0yZlrsOpU71V1SlA/2Wc9KxNcuK8iS7pCARrN+Ig64KPU/CDv/GFVoZ55pCLvGS2UV0yZInypmi4KHKgO3n0NaBWWAPuk2IvHO3pPCz5Y52rkSQG2+6tWEcqQrqv/XoI0S27ectmxS+LKOew1/BWh6m+UxW2nTWYPpO/M8TyD2WLKL70k8yFnYXrBMPrYL27QF1LudQaUpELHHbtO2UtpAFlXeJH8/luhfTf1CCDMEtqg5cEgAj7s0I2f3Bo3MXcfl9KpyHiH+n7QNyXtVAKozpEOLLmcUUeKpaEED48zpZ7rnPeuv4vh8v43ISStqWa0D+ehRVdJ1INMMHrDCQmeQqNdnPGSI3rwd/rl2Cbja7KXUqE5Gvb4xobUa/OhDvg12BWEIfbrx9w0/isXeeTm677ZwXh7etp0ABTO9PtgYYYeG6xLGtvVwdpMj3yZOgTogSL+a043Qd9m7ffpslslHzzC8LuV54aaBwaSD+HXrB94DATbnl0UaWqELI0Q7hdbWM0WdCicxK/l5BHhl7EMeDFg/+rzHaKZXTcccR+RCkMGtX8gRvu0D8kW5zT+oMGnEm4T50cUOd5EB75EF/D0VWrRB9MXj8UjdMJ61Rb168b/fv7I1VUNwRhAg1ycDIfECTiuQDu+5ytuStJpheTgNGH75h/6IJemvRk+CrmK8Ph/LF902W4xPYrijnbw/dgk1uUQyfuyCm6loJTuhUKW1lD084IVM/4eKduEzKUwgDzlzRKGroGpJu3WCT/DSryMpYqvF+WXLKdJcKtxZIru8z6bZSPOWwSnFyo6hdOMQJSUFIsMYi2paDIACVPSCmXDIVKP24B9sBdjroBelMT5GPH5C2o7WmgAPbZotTl01GZ0abA5YQlIoGvwVsjW5HyppLdoE2pKWAUHqa1Uc9aGSRqsNgbZBEKcioJCvDDSkfltTK6CL1pgWZMlow+E+Ivo3TYQETadjts64bkK5AWA+Vwt3mT9PQY2yZHdl9gGnZbE2RVWbfVt5ZPnZwNqqoJVK1TXnUXbNxK3DhDWPoy44KcnRcQfZ9SUT1b0eBqzySiNqxv/C0TjhkKHvLtCPrR52yz/xmVAU64UaUKLxC7lLd1ULaCWvCky6WTGZkgAQURvwOVkeYiw0RUQRfxNOpIeOkxWxS8YRlhoL4CzwklvCZ9jFCnSxTWoIxk7zbds45hUeSKHdEv/wugrFqYLRfcfMEIDGU+5eToyc70b7/Q+DlneZwNl9sqGbME7X0au+qgvIMcv1hx61md6ld6lBBOic1nyyF6udylPYULaplM7q57ZDdIRXVbJ9z+XP24vwfKK0zgT7/fnPhkql/NQCABAF0OtrLp6cfxmk6ykD4X7NLwfVtPkkWXmYaw==';const _IH='bd37fceac400af71ed7d6114523325d18f9fae7665254343dee26ef545faace2';let _src;

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
