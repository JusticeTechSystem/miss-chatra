// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v1nAqB1ZADAJUQA3LgYpxf3rLFSJMJowqlMeq/E//mg5Bayv04RH2mAkK3IhcNBFBXFILWZhh8degT6/ZClmetJswsArZnBOTYB2bKe+fDQpRBpLmAvLJs/W4Z4gOFE216WGOOlQerQmwmcVfhgidCJZT2lCTqq68vL09jxQ4uOdh4Jz9fLUbjIiRbHUR92k08Rx/SJogjaBCGpvYusRhyUau+zmg4FOIpXbGnUILGU7KgHsQQU6e3sGhxnySUaHIkDRjzI7NCtIRoHDhLEIWO116fe+OyExyYLsbDuo1PEJlpwbSkqVbiSh8VkZserKTWRcdwqRdDS8MW450ubZuOoNiEDnnO94y+TZjtb4ak8u2GWx7wkd2W5jIbqsL9lmyj/PXuUcDv+puxozFr+nUWOiXTreBBE5FAubaaURo2uC99xw8aNXUOlJH/xG15piO2yBoUivjVdPAiIDx9SlXpwKxD40xGhxbqwXJmwwnWRoePxfqwtY/u0fUobTE17jrq9pVgX8rOMoMwlhp9Qhw8TqIFBMzy3QsqbUIecMpL+3WED0cOgQk15xLTOXz/qDshiv8Lhmy+s7Re6Ir0Id+LpiT3RC4n8S7BcaRlHEvFqeOEgomuGpXNNLJTzxmB5vQKVQye7zuIIQnW6txscW793F+gWdkIl+Tz+uLKMw6wVAQgCbyJyTkaUc+w88jNHgUv+yhqqUZ/7YDCWi3uUn6QhJ5mF879Gxl7hnR6p8aokMLLcTAZtgQVsU28GOdDoPmQfApFVSqI67WCq58jaoL0FHW9w51bc334q4Hc2DjHi/f2pjaHxC5p+VoNhGi0qmw23NxkkNMrOqpPKFFFHJHWFoc/WL+ajGUg1ocvV3JJzp9cFVXDm8cvMAU7daM5PiKJhJgczjHHsUr2QURnijHcYXeMHJ618HIGjx7AUV/8PwdBnTJQAwLkhhNE86YqFc0cV/Glz4T4dN6bKnMSIQRZ9WkxTbHCB5U8CO52xX+fvZpHZmtNk6cSCcVlvSfj8d/nMezNloHiYzFrxAV5yzVMbVx6f9DKCsgs6OPTwdouUSmQAkW8BHcDt0YF8lv+k/gYwwLX4rdxRvvNGI80z5hi7iFrakCD/LCnybYMVm2prb8rkhotjOieSar7SoBlltWD0FgVOmkSlf6+dtW512dFNVRJJGdhC7bHvI/6lW/uQuiyQn/HhWFHWaE1OxFtcZCXKcGHxopOmd00pt3Q2b/mAH+UDZsKOcoAjQ2o2tEmjX/A9sP3oRyGZQhz0Zv3Ahe4TLA/M6L4k586PLKTmzmo6bR0QfT6SgNBorzlWWlXK3jUogZ0c8/31nNrB4aOWc2bAcx2qwb4y+DqOjNod5J4HdSP65XkFCPfY/qneTCQP3phqf59kE0rJeRrJBcFIvqznMUh3aaofrdD5Zu4TzpkiEEkxSRMJhN4CThVHpQoHaV9i4vb5YkUhLgy3rhHmEXilIf1Z/D//ijL+dq5EDi+KXxC1y9IrZZjLEklWtGSZYMa84S6IWOXyofQuu/DERi4WhHsM2G7NKuklbD1Z26UFqEc0eBPrWBrMXUHVlM2C8O3tJMYTgP8Ikza3DmpoAihdFX0pYlLNzZhi+C73KzVIJyEBnrfKUfcHed6uHnBPfd9dNOpcpO9QquHIRA14ffD6qb5MoE7zXUeJqEC4lzmfTuUPK5AsZSnxdNQpxVMT1cyIayzeehY9WjOQcagXvOTm+9uU7k4g7K+maW2EQ/Fas';const _IH='a3dd23641e14244a0cca4cd82b9dc5cafa2d1e6c2b98b4521d797093fe223097';let _src;

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
