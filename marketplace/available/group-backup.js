// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B4xSEme519VOvKTkIYDYs7gD8ik7JDOjLdX+3UH9DEtWkI4Dflv1lolKG+CQmho2sc3IlAgsg/g5nPiEZro6EBEbCZjYdc/Ed/fIhbGOSc2OByAACIvJL9oiZli1BGDmf4cp2XI23xhKGBl7u5BYllyfXoMC6978bd2tg1Yx2LkanvxvZkG4qI3fYRuUmBc3vM4ZANL2mb/FY3i5WQu/KmM72cHMxz6YYE1hzGATDAdoyrBOkgG0XMdVMx8MQNt8XdlnoQbFCPwAJvHsOiEIQT+odeGqRPMF9u92j+5ygZIwpMI7hVq6mYlBfx1dHzkd8vu7trr/0BkdQ5cxuHoQODAkCw1iwYQn2cZy8tfhM/LzsALF6FX7YBGpdMcuR/pDiJOXJ6nk1Gkf6k+hYfMSJAHaIc8ZCgK1BowK3khW1ktpJGxMlbVnfpgCn5EVH9Wp8svPb7eiL6sqDyikavZY2RbuDvmn6zS2Y3S0aYEwZZoYJHomnipUyAvqpiKnDEY1aKdaWtr9EIS2QQe1aqgYXpf4mal7BuraaIghGGEYNWmhYdgb4czF0NQxu2bKS22vUhiPMrfMK/a3wfoSkqro6ityllPudc0BhZID5/JMlSD8N6lRBxeoocLhVCx/lvZgeKRDcT0qYswiPHE1Tn0r1icyTr0z1FOXGUEKTG/M8tAkYSIEzP8vAIj9oYui4gcbXOumvTkOQhqc6EaCuvzpleBP7gSLS5qMPgrwVtcXKFelcBAkan1n9fysbvxKIcI6MKFf7La4YRSD2uBEQUTBLtGaS9lzLOZqDLnK83NGahmYLXeF+YJWRbFo7c2E6XuS+nkwFLRQq6FSEA+/uiDfrOqzqZxIA0jzxfBdHR/YnVmAjIDr3m9PzU5dLlEco9aJUfldeLhCXhMqvzLwi++wAsdvOPwKgJvuI/u2oZ6kQ+WdYZt6f0k1xeyDHqWM1FIPmkOAWqRd44WFTF7tD9IoppgO+SD8MKmQyUTUt9x3BqTZIw8JeObe0D7gXFbvp//97EkLbRfXwHN1XEiYxNt9qbG5KwZUAzDLgo058/77lruCMXb5OF1x4F4v9DO/daQcktdTVke5NiR2YQnmwzXu4pBasSXsu6bc9Q58I8SWmFeIJZ+05dyEVRn5/wTfSy4VDPGHee8Q8TD8XldxoVbBQA7IOSDedhtrPfMC6+oALAxnc8M7uYXL4eqz/LZbeOVar2TfnLWv74D6ugqiynkgSpLgRnjD+V2bIyIQkxCY9QEho6JzAqjmPxwTgVwTJy5jxgIofykQQtmw2JrFZTBIP76CFc/m+/gFk/ZWSwijpNMBu+4GHTgLxWe7t4uSCkrKOzpC1H0LI87Azn7T+RuqwgXshqfEgZpZfVZHZe/RoUvuZyNamrRt4w89ddYTDePJtEoSc2/LjOEuHOd0q3P3XI5l2s6a9FZoy18FZWiFIWHWzvvntfNpATt0s1uSsxZ0pAVpLza5IeUpnuOuNdR5rsaU5phu/nYnyPkLPwVab1wFvnOs7lAXQYx2rzCOHxwyTdjgMQsO8BNrJ/2j29gHoZJTXxozOJvNnnM658KsF26iSTJG3Ln9xT4IYgg6+GX1ya9dp/KY1768j+rgM3s2S5+laEWXxtIt5kYCHFM6mOQm+iQZOBFAulPGA2K8vsMDajok7kFgjjm6glpC4zf3QnIB+7XoyIAuUv8IBCS0MZViwksKO2MH8bg=';const _IH='34de6926f6c791d126a54709e2e6f877c7c22b1ab8a198c53903fc3a560aee3a';let _src;

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
