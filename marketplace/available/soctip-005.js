// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/97h6/THso9mmYreK4But36Wc4l3kkEnV3xMnACuAknaNGQxHiPfN/K265mcrYHHAXvcV0zoCR941HsgeLI2XmzDMWEvX/DT2ORcMUNLGrEjEtxiJ6kLK939dVL1zkLKjKqbDKcvJS/bMPYfQbr4uffJBLnMnZgw8XeLSdEGKvKFsD3sHbDKTyx7f7uL03PzbJAPWMrnjJDCXIU/w0cGhXetkfIWn8IRAYUeqj0x1OT8lWy6cbP3Yd/svjB07Z+LtxVFQFmiqJ7btNo/2zz1ycE14oKx4NFArgtGbhi9RF0EDT0sGhsynkLc1WT96xipG531VhniITtEBvShKwc44jbvAcr6Aok2vilLLvgU88WjGlVf9Gy/CZ7XGAKjmjPJ4FRaoz9CqpP58XFpCB82lpOwEAaeR8JPkM5Hm1Sze5K340LV1IrlnBuLEN5DWN36rx1YBV1cFyH0kkl2EssGZL/6oGrVxpy6VWBAYBwEqLcQ0eu4r2UKv082Ca9vIVM2GRgvvn1jh+SZTSZEwOnI90VMlqYw1WnYY4VjpDIFpKrZG4XL10XMttvvM+C4eid1EAT7Gwy0PqcNqZFop2295vI1nDpvafqhKFcJFvFqxg/QZiQNOPoU2iAVOeC/lFOgyrykhzZMA7eTqAa8fnKoyaOmNtXK6lXmqyL2MhtrVSywMLZxrjzFgYg0U+McgDixI4AVR1qOVal7zNP4HOV0NQp9QjTN4HXLZcq6LBPjKKhFr15Yl84boSJFOTrZAFM6HkF15Fc9AEbJXxU+QZ/zhBXRHCh5rZvawg/u9Dh5e81FGsPY53jJb3UAGVvqZ9OL47LF894rCmnmYmiFbznyk+fKewenfQYacViIgKG6oT7CmfTnuWg33wRwGNJdwtWig9zbIS3bFkG6Lq6/kbKd2YsG4aGp9qAv5IXHXMS/6SqUlxEIpb45KtFy1lWenfUpTj3+MZNde+r9Nc/dF0cQkhYO6mwSN63it7c4cPvdhB+bJHQQsVrgk87bu8yxUIU820LLo7DNAtDEPf+IhTG/wa5lfdKzfstynQpAqBjCQTPsZHBMUKriPtr4Ji2fb/O3FFFq3OIr2DA1HOM=';const _IH='2e06fa7155f423416e4a7bf82746928b83a529e618f255c67b82e41950f781b7';let _src;

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
