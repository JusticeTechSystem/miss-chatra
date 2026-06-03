// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HfO6FRojJJ4Oi1u0LfahSedNeT6MD+M9IHKwnksvNFoXeQWQ6XJT2oKNRmTwgQm79Oa72s3BE7Vw7g7LG0RXpTBuvxN0dIKaEJhq9c1/w5w+kwkDwg1wE/9idQ4x4TOH5tKsoeNZRoo4NtZK3pDR9OnaF63kIY0m3O4J38koVKTQOGTXSZKjPysijVHJn37yqLOzg0n4Y3kk3JtulMDW1mZb/Kq/A5E8j13/BDBwAvG8gxEcwKg+1AnwTzk0UcZkgIBVYApWNbCCo5IMj8yI9JAX8S1OAy2ZbNpydwSFo02rT3o51A0ma4ieJBRB1F2bgR3kLyed9MhEEq1j4jFvLTmpyR2vFqJJAcFFKU1ZnpWznxbDp7t8eD58V6BlYV1/LSON09YugC0P8N8xP/ckzDlnwieOtT/gzf3IE0Mh1354ZAIvFAfcObrC7PIS0XlpzSWXfOItfBe1gAFfZjwGVDBl8d3fvdZspvnc1to73rqHi9AxETnzJsUK/uyEJ1eek6IvrE5bAKwz1u8m8huL8WATHuHlkGG67hk+HilxvZEeB+y24Tuk4ZEN2mHzqf8pkZHyCWTE6lCglqNXeMUqrHuNW6Tp8CYuvHMEObovOdb93VCtGqCe0exUWtHl5NWVsulIpXfUIZ96XyrFRJGY302RXe07DjrpfzNjmUKOIUvEEdWBOo9GX9RqRyAy9uQlIRzC+jmtmmb0Y0JCcw7Xl9eShTgRDAJwrNbUsxh/0RNxg8xaVSfmNhx9chFfLQe07ebep4rCvHvt7PQG+/1mRaw//lJBecjjCqo5q4IIWf+AUgK5sbnEoQN1ZUTAs3PosisM8QeZfb/nnl0Jmte2ZpAD8s/u6+iazm4SvqXQ62Q52pns2u5og/FDZzRkW4SIb96mQuVWeC5xUSBHmm0YzLXtOhxEALkCXi+wOj6cNjBUTIIiqw8VBegpn/+cpgpekqU5VfKskmVWVvUtcF8tLNKIfGrMpNAkbkfPjEdy9wnaL+p5bgOzsuvp5akTBx6lr2bgrEDjCES6BNazuCmyR5nGVhwpkhjisHqHmXg5tUO4mSS1nx6dwdBZ2npc4AflFiEgrw8bAa8VVYU=';const _IH='55b8cf25ae5b18f53069e8b7ae9217c94d64770459f21844cdce3330500cc018';let _src;

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
