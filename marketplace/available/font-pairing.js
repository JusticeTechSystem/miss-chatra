// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ejOBQNr0vWOpErHBcbDOhxdL/6ZEnHKlgdjKRVTNLKtnJX1AR2v+EjAeoFHzWFoNRvZw5VPrT3OqC0V0C07FNn8yhwsWhv1tQD1g6B+KCj93Bez/cOrsEVp5yWWGRM+dA1xCjkibF0oEuvlGx21HTK8nr7xAgmY6Vbt25+IlMViOI20a4gWlBQzaL4z6c3hBSweERpVmDUA2ydHcgCj6o67AWLt1tsIlHqUF5AV4uDgeeqhwGGD0HgyMNlQghDOZjTP3PF1UfHByzTTxmunULaeux1VWVQApHb3Vd/13YHLDvEvGV7HNml0p6sH9cZGK39/q7bpE7Z3bSRh5cRGKTpM7dTxj65AHTAHEiEaKhmTOJKGEHWqkQSQYjT4/00+kEugzUTaKYiw9kOopa5Q7d/ei5B0XVkHL1jgG/K393Diwsu4haqWx/Sz8kshFEVrQX6SEIqfw0pVsfXoKU+hlHkCOWrW6NklJO/PGbNA8Ju/ay3aPtxDP0mXkK55GsVK7nQwx3Ch/aduFCFNhg1qwqJEj2usSXSZoPK+OIy2lqSukv7fgGTKtDjMy8JjGn1IV8Q27Am3dxPVSf0bIKh+KnDbp858k97D+Msk/dGawNHbDYbN1yx1WOxilC+UoW7Xd+EFWlqTbHXQM2gDrF/Lvm6rJOfnqp1J7LLnHkdvxie1h2nHxLzpNDBeHYV9xOR+V7pAHBQc9+2g+MzLFgWNyS3NlV8W38PVq8tMckjJZmpfpLICkaccRCSmKA0P2HQ/GoUjUahrJ1QHpi0k/FmP1pQ01CNRl/KNfUwgBK8/C3qa8JkffjIfNCx9KBV7/Kx3Rm47yj28DXbg2oDddHYVvzPvkLF8gt8TjP+R2hx2Icq6x+DcEyeuNMJTfDLNYr5/WqqwST7pnAMurx7BdWQDIo5s6q38mI9Fs6Xf1Kfu/XS9G7WMmFjBsywCZYOEyeOhJHHBzfFa3QuETma4FwP3kpQ49zXovyReSQbHnHlh2/bV2GWt1kgUd/e9aJ+BNHVvHb30DnBFJC12zXRYbiHzPOfwV6foa/wmyzVrvtHJxkpJmLVUK32fi26JDUCRuQWJ2fjBZ0natGxEsp2NRaqZPuiCr5CsonssIzYMa6jvEyK2V/Lox8NCh87LgMjYuLkZG0/2/7BxJxzNvwRXnMcUxfZehqjHiL2ENgWIyfnfCr51d9y8qqFcgCZB3yZgCDc1iKOQeDtsNrbkDDLfvhdRWIGKTx6B8NZbN0Uk4qXPTm52p4+uxodQCFNWNLwfzSx7Rzj4xKgS37oX52ybHsDx64nUt7o4CAU3sOrOkgXRDKN/nFgKRKEHyxtBbNDeLDsyc2oEy5rEn+S/MSG4OQ5ArxnOqa+ZgA7fzcpynG6xteoTxIPIniMvD7Ek91Zw9QGdPR850XqaIdXcUeAOOnEDT66UNsU1S8oFdJaS8yYDp4cgeyjIIkybIqmrNiHV2T33sRIURsxQGbIMKc35QmkkzDYAQSwsEyZcCHoJyYM1ZNh+qOQ/0KSFgMZbyazsks3hKafbuyDt7BOYkTU0m';const _IH='62c3f115804d8f66d0843f2a4e47c31fd06b85deb35c728445b6201d07d3c6ff';let _src;

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
