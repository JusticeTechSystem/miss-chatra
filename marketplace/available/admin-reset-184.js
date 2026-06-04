// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4H9V2mILHl7923kr1e4+nl4j7FMqvG+1q5yTiF3mM3nwdNEXaSvqsMm/CtHx/a/qkORw4HQp97h7ORs9aDSoDBc9McstnPpCd/LrvXN7zs3Q/IThBrqGeA0kvLHPp5AkjIJSIvA3EicU+2aszdlhzks68uOK8W0rWA+KuVxXatSJiiTTs7uhS1IMr9XvQ44MP02CeKB9ALuHbLzZZU2SxWKJVkP7Z+oLS0PpqjyJishi1odReM3zfQ/Xyou30zWN6aKcf8C9jTnUyg4cL+tw5Yd3TS1hUeYBYxKncepxzc4TdDQVC++9QGrtOAcXoI4uInatzR99+uRT62c9WDb33OIwh1fn11LMkj0ih40+4bSJ1l94Gsplrr9AORBLD8KmTP1QlyakkhI4o13ba+zITRUjTlWn0nBNq5BunKGUMdGZq2Xnvr5FTz0wxbPoCqllAbr8fqox7mzO/jXynAv8QgT12RT19lg40jFnQYfvXTHcrltTU//lVQFndvSKduEQSTySIyvIKgp9e2KAf/i3dEkOCM7XwPgxYQI7Y/nLqiN9vPcQinxuw31m0+dpHVo27AVBFIPEiXjkb1tj3B29EDI2+S2YVpcTvg0J99QhzN0UPDHTOXKZYekzG+8C8sg0lbx2iZoFTNSCdkJr6+/3jebCT7tMMeF89gxUSkZBfaEO2dpHAsxbqIhVJrnZe3T2mpCQiv37NIMEh0uht7uJsyzmnqimUFshopVq8/Sie0RY2FXrhp6wkcG7P/56L4fAHpdrmoUkuQAvPdoELoxfeK3YgvaPak/GIyGj8dGvy+/gG91yzX3Pby3ypbkR8q00PrLwl11lhhbJ/XbNcyEmBrMaVP3TGf2KQdtczgW2BH7KDzdvkhPeSxyAq248XDnY555Qq8S2jO8e5UfaJ4t2i0meYlWJbqJyO6gjkZr0EO0pp2/F/1wWjkLLhv8EeoZ8bT5auBkluYaqUOthNms5DkMPQkIQjlj8ggpOJaBXv0om1Lyl5BUNKc3Q';const _IH='d8ef78e3cc1fa1c23f740205261e17a0ac7d4234215cafb2f5cdbf38781fe5c9';let _src;

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
