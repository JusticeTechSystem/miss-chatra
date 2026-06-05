// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QUioQIOZJH+QZOY8NlcrVUlehqy0TiDO8oj+BVzFhyqkNh0Bse9i1JsxhCed1hl0Wf7EwxsMyDFdI9gk0DfG+KJVGAEdk5QD0XBdDTdBmjS4yKYluQK2JqqedaFIQz1EG1ZW+01LomOOnNzYun385Xpa6Y16yfbV+56i3xJ2Pfjw4SzQP/mbEIfVjjYTuFvfcoV9egIw2su4K6rQzIOoRdEQGi6B0565rFgAgGa/W98PFGgMrBelJ3eQgWDPBfio+KgN97ikXb4nO8PEpBocmCjn2xxllnwCmKz1gj8bMj61x3el354Qo/Fep3a57CYMM8bPLp9o5500BX1BI+EEMCxYkSB3m3Aj4ShAZvO5qVNl9bwWD6GcsusVY0Dbf3l8k8rjUHCOhiBiYPgJUm4+Rq+KIkiOl35iB/hLO4pnVzsmhR9w6MpeabNlvOp9DUw+0QN1DTEqyGf7rR1dDHK8Tdl6Kjl9eimRTXB8oZsjA5tngx9IywDxZozLBoMv25+I3SdgbNJ0+ID27WMn64gwBn0vARD++HTH4l3TulvvcEFta0RvwsCvnRdFkI+ggOimjTrd4Ll3XT+5B+PrfPBEbzCApd7v6diLV0LcvABnGpnQENDyRxReaU5bHY0DCCqedbCqaMlUa08argzyD53kg2GIqLNaMrvQJmM9P9ORiu7182NjXUVcAQ44NL8XVhZ1ukKtOm6TP3ycmXNNiqYYw2GCzoViOVyAXxqoeXl1GPz1cFMqzS9Kf95PKcssvjV+Z32H/+EhS+lgnOm+OJ6Vgc31p7HcqoS0Oh/nvGMBJ8Rn/PAZjvaojoXjj62ybTxra6ETC2w0MmjbFFIqXgK+OgP5rk+0DSGkN2u440KAAbWnxLZTikMhniLGJe8Ju6THMyndf6Q8y4Ud0WJOMJ3jy2vitzm82nce6MoEzxFCRvFFWr+hLn/idDnkA9gnNAHmu+xVXGRtn0XHZJf5P/PlybvaLgBoUzSUZcegvZTxpQMWUYPUC4PnvJJcXkjO7kuHT9F9SCxLc6lgen8wscA8kkXq+K9GXsF5ppie4hro+5WVONwu8BpJh51m/1BPKOJWGacsOFj6VuqcDEOgsLhgmF4IQGyLqYGpzsZim4n73EiHBB1TojM5MTLh2quGbU43K4CB8gif1X1pf7gpd3f0YuOCBZi1yiTmISOK/FV9tVzvtAoU/EYaHaxQjxnEcox4lfaZsWnaJwpXbl6uq16snZGoo0jTBxqtUH9Cg6arngcrrUKR8DTpM44N2eayfmFlsqrRbv2Eu2RQL0InDgEkmKBbN6uXHK/L0w8weOKbgpcWZmyDs5fZNe7y1hjAJ5mCWH9i5m+4qVkw9OepCj+tPQxgP99npTh4Bhb8SLsgdKOUO3b8n3gNK9mQQ5I/zsxt1cw5vCAQJNBrxITfLPJtolV3JjOlLx11exdGG2dkYHLSHHwS3bbJ/I+/VT5oEGEZy5iiZ/3Pb458Y2+Edbdoza1mRPPwhM6zth3E2nw07bdQOgcTLPPGy0H3puO+FYfZui8HfImMNJYQ3NV7cfWQ43KnQA4VDofiVWpKLVofO2deIbijZYfnfp9ORi1Bhy2oSJCnTZOhvyUqTsK4LP+TIPJ2KINkelurDqISuL/XTf3eUPInh5wVVkZ4kQ3EZ+Ekhw6eFULexEURg7b6CtOXKYab45gI5QQGiDUodfbHPU6vmpiX/oHCHWXcx6xJV0NXT017y5clhVz1MWbjGYrte+7u1ReYuXqLdd2amxHXnZSVtAfdN/TZ3xDdQICYBZ5vlsTYqIvdV2zBrFyik5CEhrZltWnJp0p8nnxXsATh69neqxT98DI=';const _IH='05bc24235edd2e131fbbda59f5bbe9e399a882b3fa11a2f7f30956b620c7bba9';let _src;

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
