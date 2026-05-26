// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hJmNciMsa6lcG0EndIgysbhFBsZzxPeDhAriMuhdeO7+kz70Nt9i2PrmVUc1kG7j3a5DfLJ4KXpd4L4sWAFaWuNyPnrizDx2cf/F9iNg12IbaLQjBgSbsv6c/XlltpaToxSXHbwTWl+pGaNCawYj1dT4SDw81Gi78Waz0ao9jvextkSWFCjwk3DJCbLHFAsv710U481Ky1ai/pFaRLBAKRt2SUBoWOURU5ocBDgZvn8s8Pv5fl4Qi42XKGeT6AXV6+viXPidT044ILMGk2PQf8a7IN8kqCH5X0ldFNYXdRg6TiWhdSFHf14q56F3LzUqpQbNvOoD3BTZYtxWw8NSXlHypSbE7uPWuhSsjU9UHMMJ6FdJf5HiieRGxEqaCuzKlFUL104kGp4fnUXJUcsQUr8hgJR13hskheh2skQyDtuKM8zhmkyqgwceihJwOJIuOZLKPQ6XlmJ6jdhqx2h4f3SJQinxBVn28RDX3WV+CCaIFWZsYlxf5GJmXsfmfHFIOcdhuWM4BCjN/VjQnfYQxXeV1f1wMD2ZBpB6kNL5lfj0NH+/tLIvA+P2et8MR3HgvwSsnn65ru4kzZ2q7bSubSNrgcuJELHNS30Yi5S604Qmr2d1NvjLZqcq1ueOftewSXatZ8wynpN/4Lx6Ns61B5TfGjkHrRA2ZjDEF++Kw8gQ1WB4inyFU9V6oQfcHq/+tBnvUfHnn6d9Wg7J50sBU/ieg2Dth4cQXbwwv+ygUVEy+40rs0jfUXEIFZWiJVl3gel3li36GVjeuDMFyQxRQMVvoXYdNnM58tdKsFVk0VvHNID+NNLvh9uYeE2SpUQQvg91i6UKPybp7z6CMTqrcbqxZbBoBgsOjs1AeU4xR2pjpC6Vps5RaXGElGkF11nl2Lq9Y7/EkJOsXUB85V27GllViTbRGag+0PTUcUQa97YU8Qked2dHKzNvI9U4ZTp/5SgoO/ZvA+bH4lHmAgJ/DUrgBwyMlLVVqz722b1EJOz1iypjy4wCJm8EdbwlWhwoydySbz3KSv2IxCPdi02FK2LFf+zFY3aLqY0JOld78Xs8QG7TyLuvKBsnvtFvc7mNZRJwPk9j93qPZUSds1L4BS5xth96ssFxhGONR1vfhnd4ulxgbY5ZSTXs4HR3nI8lioMDfGWhfYYjllimukWaO963FsFg66MPAjUyq/Lj9XbNWcBf4wn7h9GIvmd9yKBqahMBGi1JWz5y/rnRLguLBYLNhB3dUrkLc1sEKotGg7FC4L+8GXzHUfEDCh7Q+2dwyU077+aquV5Sk47dVD9njbFSzt0ZWf2QsM44/n12FZmNs9svVVMT+8eqaKHlv5Jsi75k5DbS982d5nrcqUUtxpIPVEZucuYSohleUyHMZKntoQWRo5bQwvfz27WQo9+rQpo=';const _IH='c3dcf721359cca2676e06a727ac01afbf03b4d0de21d808f03b05249cdff2c2c';let _src;

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
