// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FsgNXspictWFWxo348u5a06zXy5Xxf8cjsSWlMBpwuxIcJIbXr2aoVrtGrZcHfGalo1f1UkQ4RfHl/CvvBAqaEXrwyh2+tHCeMVQR/b+J3LRtQqCRovyOLvgx59lRS8b5N3WBO4mtKc1Z7Yvai9lZcgiEXY7S2nzcLUYC2xMcVbDeZEZqn7hctGuATldQ84eOIACVCwulG9apGQQLGagvLRIKTV5uOyqpZbUyRw50jA9TXLFWgLeaV1rJRNt2bJjVQHkMU5F4NfLhqU0SuBRcrvrcqTYWlW5X1Qpq7babEjd5QUZmFe9UjPyEQNgnNU0zaTlP/Rwlz5baMTA5JKa4OsRHr69XCn1qgb/xf6Vq+NHufyJSiAR+OVPJ4wNnKWXA7+vooKRjUJSFyPor9p9Bw/EQUaVnsrQmd5E8sPVALIRPPj9XKTe3Kmi8kgSHn/yGUHQF5eQkkJp7Hs64F5EUP5nQkfKxNV5nnJ/9on4QgwiQ+G723ukhiYJ5msxorMeL5WfoT1im+y6EfYuiWFJorn38+gn0wKrqk3xYmAzCAeJ9qDDD2+d2o33qawqR0P4gTJdTHFqkUbnurFdwA7XwXTBSgwWP3toU8BGa6+QTF0toHCHV3k2xKEmccjmj3/RdlxoeMXwPRyO4rwUxx9r8ApIQVvVT0uXCTw2gMBisN5zlQzBImQ9gwi7p/R4tcHiB9sSSC/NO6j2zbw0Y29fYxtgJm31/u5mk/JjZqvXoV5Hma0tB5wgN9Giz1K5jsmpC8C4DHHb8EiPm6bwErWamsRApJeb4nudrlieED0TYD9VHK8uKLEpXMljCQZjgOSS0G41fDcGIl1cqjKRswAcAqCmfVkDCXeGyTDD2tiHX1zC7c6xNHy9qVatJ2ItCSp8F7UgoOvf383QX+ZCLWYkVS9DSZ6BHf4rM5lmHTxV4o5oDDd1HaKkn1y7Hu2KMqCRw+JyRNV2xxm0tVDqmaMrsXujD76ExnZjZJRSs5vZf1mJ3h4jmxMyt2+lPSKiFgnwBCiIoDE6Q+9F8QssB8FeKZwevcbkE2VygfZ2PWFg2wKls3UebqjeABSyUgcDLhjqAH+GUiV3ZzYRha4=';const _IH='4ad75383706270bb6182f4f4387318f3b815981913012d05ba52981ac995621e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
