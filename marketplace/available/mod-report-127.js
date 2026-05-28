// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vd/aCuEReGuau72QtQgZawtvaY5JbWcJ8glekvdyj6dU5M0r5gTSzx4AqtQyMXMdSbAXWxHUibt8HbQEDm2gsQGMNqZ+bedp4Tffv3aj6Rs/YtWEgwE4O/2cH40N4jS/jEmGkGjggEnoQqc3nbzrmqOk6WedFTlddbzPSBw0bWHJyE9el37X8Os0GFfG3hyR2yhUqXfVGhECAysfiGlVMRxIfx5xdU/Z3Fy6LwqO/xzCwR4gO7GI9Lv4iUI3KT9fFv31yUO07uvcAElHOBRCq5Weoix/GansTSQm8iKuTiP+jPN4DUiAxiwiXNmdz+tQSklzoqVsLkmnu2+2niW5G3yTc2uKKVQ0e4fc6AA4qqIc4phzmKyzbkLwNp2cNG5SvOwggWQe/kwALgWNlAye430aebLOIKafM6Wz/YEMz5vu2/4vj6GQjTxhtOmhdmXR2xIcaaSwYZMTsNIayJjDCZ6CNjHnZO6AqpBrLfgEesiR20HBAHTagU6Grj6+CiDitH1OPH9r8J/Rj+wQDYKcgb+uA2Kcwc+7WpwwoYIAybMxF5kkjO1zLXNB2YEBP7Sws1kvDRFJXNVTAKEPyuE3JwVOWGeN1di6H268YJ2gR5t7pvrqnPP+uFwcqNoHgbIx0Qm83W6wF7J12XQ1vMCwuUjASjk5m8HQEiflDDe6HrUDgN8OjYnGI4cQWnfLyjh8UXShSbQ2pE1JDhbVpzCDD0D2S5uPgQX4rtK5SdojkOC6lwnuYSgQAxyxvjXz5vePOjXvQsz3umPUPrxsfdvmgGVd1oUzJPw9MRqTDFrZqBbWzOZ4ns88z6U2TWHYrLACr7i1WdCPvOdcPRM5cUsE5j5AFRnTMr8f+eFG2pbmkaq+KDM2S/lZsWYCuDZfHCej8G8zMIYJhcmMRTwNKM6aW3hRmWtqhZ+nVBmgIaYJoUnS6JAT9kzYmTzNfwzaVOIkx8P8qav312vgyjhsdKLqCjC2TY6IcTZNhwmGyBMEkvbUalrxIfVy4d295EE/dLpH1fsPX29XNNeZCZk/7Lgrs1CbhI4dCtUBnnzjVVqcqnMmcInLXiLbFj6hBsiRM76bj7KutJCU2rV4eirxnB0F6ZKsSF2Uk7T/THEnef7VA+VKuy20VdSz+d1UuFos7LWjjmdXuMAZP6c5EfI9RXx5sQ3BDPpGfu17bbqvSQ1/BhjDf873Pel43l0Ie94win67iZCfZmpEBs1uTf2Wx98uX4UHrb3IZ2Bq7MPR5zHXZFZvKy0xhB7x7zE8PDuUfZMRbJvHyAROpd0NjTQSYIJou2KjQ+ExAaixF5kVTpNPQmbzjB4LBBpzkj20Eg8bINJ9iuBteO4Xg9SRtstPIyWvdadhoAS70FsqmAWBUFzqwKrJ5wrLlnEIvA==';const _IH='e3b5efae9776915edb9f55d992c5b57d2b4b1c383ef2ddcd13b8ea64e5e531fe';let _src;

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
