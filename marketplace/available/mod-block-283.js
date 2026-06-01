// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7vG7vcyELKOpT+HLBf6naan6ueKGmxfkAmn27+48le74sEzO7LzbSOA9mMRPVtuM82L1tZMr7aBhm4p+CM0D6UnW2LexTJ6oeZYeNiJivfoMbZhg6oygMJmHSJS23HRou/l0shMT4waah69FlX+y+ydSG9WewFocLvRV5bCsSlHnr7CnjOPuqJlNYVMUtN952HdkfJKHN9SkkZX4wmFhtjrw/igAU0giYoQxXZKLTCbAGKV2o6rWDFZv4kMqAN3uBBPGeSzSkPj649DlL827BP8wtAmLh/yEIOTV325MfzreyvhOH4yqJjwWWpJOypRyDuQHV3iDH/Zdf1lk58FcJQAi8HXS+2TEFXbcNyCPl7bSZ2Yz0/9b/p3ZYKrUZlBopjp2Lf7/ccDt6wtyBEDxaeDiyhgAwjUQO3fnUhesaSqr16PjNWD9EG5ievUSfhdwdbsBXcWMc/DmBTF6bzJekyrzBW4LrxMUV6aKitNUIqSlr3xfxXPjDLCkrMZCfqja6QGk+1fFBP1jIEN2UZjrBwMcGBDdIEaMRb0utFkorx6CTOD47yEnIsWVwrC9YiMsI7D6sFXGuKo82fFRv+1b+zNyXvyola7WHGbBjhLBVFyaRvcByA6C/mvYc6kiy8dz5g6mruSSehbz6EclxMuPqJfj7DgEinEaRFY9ko8l2KaMewRncW4FNF8QZnobX2RGvohzUvZl9OAomc13IVvVmypjGxUrU59MQkCsvvaV/WMn1zmBlZab5GmV6yuc2FkabEy1ZsXyymAGAo9l1kB8X/HkyUV3wGUwF6ljRSWfSaGmJbGtTSq51zD3C41Ngugscx/NexryyfmDh+/nBM5jwgW3ky23Cmb0/VXxLOCSnFFxNACliefz/t8L0lql+KfEMTkF/OAwyFNvwy5CbIXvtWe3s6qO0MXCaDL4Cwe3UTT2PJeiN6YYZeiYvD5MALimIIiQPoS9tgjiGJdXz4ihvE6Td2FNnbjzFsFJJ2zHMRV9TdAk3P/jepwIJkL9GsRDDnwuKpZd401kcIh8dZESRNSoNynHtTDTU5gve8IpAroqwWEoESWJcwfgklH2544z/t9QvIA3FII+1uEfGCEfTqDEgtppPf254oCjsaOXCGcsvhGkLprpdkZyUH6lmW9PRIfwt4XdKPkL9M73+OV3Fj1CrcDEPAtAiFZ+ztbXUqLVozl7TO2op6QG651fM7gqSrsb3vnmbh1M9pRsS6egy+Q7kG7YtNfFId1ZpUu1m5NJ0BEVzWBqNTTu0kZCZdkGBM0Sje0jTdvkF4KXnE7fVXyUlZIi8VM19rQYCk0APQTT6OJdJTEIsxnl+Zc9HrK+DJEklufiw1jjm4IHc+rmDBfA3VGaf2tA7UYH8Nnug==';const _IH='c1bcc5ca739d35dc40f989dbbfd0d9442a35f5bf76596c7b6443e41646c33f63';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
