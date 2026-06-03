// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gzoqm+cUAkzbPcBagXGeKBxY10VWlIGk0RS/ej5Tw8RHMPwEuXKQLSLk/b2LsfExyf8XwyX5kE3plOEHtqAmon4BIX70ZWn1cAhRcA2V/lris+CpOKtKenFp3rrIL1lO6GGlU7gE3hmWnMgO47TWg6u+stQoU/XExI9265xeNo/YI9lP/Oj2oGhjBwio9QUfbC/YTeuqqevWab0t1qchEBYxqUYLKWWrx25SqdWIEtbU4YyZnXqvee5wtK0L6k5GJTWSCyPzt005MIK1Ozg4kq08Efo2LvrUX/RU/0UAXABWj6r4wLOKqTRAkohrOPHY4fEYDdHtriNyh6kEPO3ZwTclW5MiLT5hOu3q1iGgaKVyzTYlWRRdBCJejBCAlM+mJerYstuCgLrr/xvYWEbMbNYhN0nWMRVgse72YLUL+UEp9gmIlvB7Y9Pmm9I7KNE3MrIbTvOEOhxjRg/AFhHqfaluHTTaSX+Q25qvjwXAVFZZgNn1Xl6jyhpb0QHbNCnh8KqJnh01UsKOo/l7VGc/wAei1CExe+WqkrlAZCK4WCCY8J86GttrcNGg+YQ23BnLvyCJ3E887SHwBefpN2UPKrJN9lljMtyiHnYxRE1Ri7nLwrxyUZNoaIR64wYRmk6aC/So+LA7qpW6hNF3Gqzu06a0w4DnS0vFOQwcm4g22DUU+i4cZTkJhQ==';const _IH='e374cdeeb274e7facee261bad2061539c55313eac44b9869dd5857f0592a8762';let _src;

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
