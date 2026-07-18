// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVQ3CJLWg2tnRKT/FRHbvxcedHQp9z8mFQB8g/5TkUFFCs6O+uUYskSwrFd0BguR9dYgeye0IsjwBkJSajgOCptA90tRihkEB8CcEuCyUUMeCeLi9qEs5Nm7TUtRPPT/AcQWaxb7SsK/nSmdwGV+/7WRuuPznukioDr3VkjKpcW9Dzt8AkMOe7u+Y9rHCKzuGCRuCsjLssuPYA14bR8fUZWN3rOfi4lAAUxHegcPL0dmgpCQLby+aUMJKlCkQQlq1JMTEwMHqTvxCNC9ntvltF9IZ2EKDZcq2dd26XUrVpeB9dZ14S1Htie8nY1A+WPlnPnNKaUSocpV2adA2fWpBPu9Dle22/SzDr4ALpmjJAx99QlYsMUivkttWRB6IiIuaKKyTH71TaeUqHZfblmiaxYR3zl4y2w3Vk4bGhWr0VCYuziTnA8WYKOVL+tMCOAhqtNQo4Y4P/tc0I52C9pvOjPGZAy7Azy4tp3t0PWHu7QRlRdcMipV6YEGWR2n3WSt114u5dXLZ3z5FkzaE6/Jk+iqzHHf+3XKUp81HCwxSz9ptpgHftT7GrkRKxgeM0xxT2w1oTY1WKDLVIoRe4dFWGHW7bsoBo6XXJFhIl4ke4taQ46msfwDs=';const _IH='935e4852253a458fb0b11ce4a9d6eed0d3c7ba9d8c01734614140285e54bface';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
