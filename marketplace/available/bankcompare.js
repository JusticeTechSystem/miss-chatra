// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQEnIUV3KhiJKCEYfCIa8Y5UijsOaG4MKsY/QaSTc9e3RsPBpv4M1ISwQtERvh+J/Hxp4GPnkzzz4BWkG20jq4PPj6D8bYejNSXL4qOU3+AIINRfS3ajWaIyIikgTSGBCD6TR8yZc+d4q+2KRYSqTmfWRsamFhquKt8J/Z+N9o7zfSo3xUpk0JrATlQgXl351ep2ZE7q1ZhDvYdFdkNWhhhgERsaHP6czSSsVbqFHi/IOmXc05RZlmSKOJfiIonZdH5KyWJUvZ59Q/4UCYV2EblWF+6rbB35IuGB0kdmtD888nojJc3z4lPvZtMIsLjg2WU7FEf6LQ36qUaSAIdYPveB+62JLdeox0nf8hvXa/ZXfAf0uUDmfWEj/EDsD7pHbYaJw+7z8aKJwSZjaOcjJcJ6rIhwfO7K739jBkd05EQAhCdFUP6C1NQaTL5nvU4ebC8+HqCsVCSbxBaJQuBFS/2ghFptf/l8RG2eTjOkAxY2o5fZa2NYcXp7fjPML0e+Jy35HuR/PgpJirBgKM0T/JOfTpt6Jes/E8VCrOK/pkrpEE/0+8V1M7lgxVYa5v50NOSPrq+DxPEjCgETvTVsGdGJ7JazgTwOWz62UnZNZBLxM8h79r20QelscCVpbwNvsJ+X8IHKJCMJqD4SXKfP/nA05+6HWweU0t8Wzzqxnz7hzwXy76ysNyHKdaUUt7EldW9v1sMlk1IAzuqwfuzSDxeJ+8sL7kGJRonEO2nVFZB1gTwqkYqaE0oeyYWPOt3V9G6NETFeMkL5ZJRE8ZAGgzqlbIZTgEfCEil/WtqMv1wCfJrX8CuuW4Dj1//qwIUgSXdeK28ICYDkUmKGJcEv5Ykk9NN5O6wWISckirVBASI7GqzyEn9oadnwqisW/zUwpYmcgKCA9jWa0sz2FsY7NPHz3C67s0RP6zQR3VL6zJl+M/3+yEGcK541IRgZBZ67K+lGiHeAVWQJylXL6iZ819ZfCvmtm0cZo5By1604+lBADPQ+64Bpl+qD/mKNV6MRU8/dU/Z9MCI3SSyGi0rtTX9exCP1HkpoqEJkcI6s/UF+CpW+RzW6ey+Z4h6GPGuuUfeWI7GQR0RqeZSvWLPROGwXRXjKQnReg2j+hDb5/PXG5tlC9uj+hEF0ZvTaQXZPz/gl6gSDWifoZjdorqXK61/25cgITbURZlnj5ZZxy4Q3XYyoubdOzJ8W9HUknXpvIRjW1lQdw==';const _IH='5389dc9603ddeb2a96c5104ac5fc0fdb394fb6800479a8444f8d94b93f97741d';let _src;

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
