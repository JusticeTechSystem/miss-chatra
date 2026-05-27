// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='suWEY/xT2a5XJr12jL4OeKlF5MpAVMWY6B5f6i/RjtKPRvu6aKkzSYoCyrrJ5rAQ7nPau9lJGsED8qZwOLrCkSB8PGugn7SJoHzCSOm/Uq66j46lHk/cZeCSAlPcCGlpEF+XCzFMnAlQZyE+kVK9VCF7Cua7VCiy5ciS6XQieSDcOrs0S2n9j6BqPaue2/ltXVJrYNdfHl7b09svFA+maTHYMnWW2W8JOSX5n+46EtGkD10xvRhaVFq0cD56ThoAg0V1IoVV+5c7UO/ikc/BLPnh70UrNSt+cr0JRpObsJNQECry98V+gDUCJWXjzklP2J1y+fGruSqy1SKxIuIRejcoKxLnKrA1MAUYzM0Uv5doDspW8tApekww+R7YBCnpdwWYJARgpmondVlTD5AWwRsoHczqEINNkWEcjk7H2N8FMFPYFahEoYEWmcdHtZOYvRSoq+u9UJ3gqQ0LJBKb5TB/GKpHbBxIYaKXTzFQZ3gdos4A/xid5lzu2rr7sDt2cvDgUa7UNixfTBz0l2sHPrdo/BlkJcHtdf/JvyktqgJcgKABdC8VC83T1JIuUjrp9INDPKih72VsjCS+gENc/zD9uX00oznNvIc87SFDrqZV+Hiw+Zpbn6iwskgHr1LN2N11mOXqZi0Yt3yIwiYwccV1iishlOCaj73Gf79q0haGgb05f58wrQT2MCrEJbQ2THVIOEY9b7IAGzRZ8wGLBxjrhMA1kD0dbkUkFpiagholt8FzQsuzmTBiUTO9XQUmS50qF71whT00fyvt7oDDLCKBxsk0O+TtfcyZox6xSwP8geQQ8DuEmoflvwSiAMPtO69XmAUiXIg3dLfyoWWQnWk7ugYqNtohl18ZHmLN7PrKHw286YXbBcxPtEnZC4iUod1u+mDM7PqFSmYhOYBu4yMghDMVA/DSgJSR1/kTPI2CHr7Z9KciSkMhAMfNrwZy3SIKgugZjfWFiydc7VLJsXQaOdeKc/zALsw1TGvKjw8zdNSxQ114lxiEDMqTHlwDU/drPZE8/n/Pbqeyl88bbfT3gRXzQNMwRcFlZ2bBLG35PDiOEd//wAyjupB7sABt56kEZBnJ3ZiB22gBfAHwomNyO3rFC4a2QxnH9IBvggPC/xA2rd7ie3xmg0ROouVnnuJxKUoPm+Guwr318LZ1hHZnoGM5FqEcQrSej+KRwy+jlQ5xVUoTQ9aPXa1Ng8gotd/+6ThgHyzlyNb2CCkglCGZWX+7z4VF1CTtDnQLMFzw7TYn+k+w5iILmqx4+CbPSeVnp84pIZCR0FjeD7Fkk85nrdoUkjUNg8uT8VNGjgLGgCOFGCnFJWQmXmqdun5BmAPriw7WXcPF3FkRayMqpIchtCN1aoLpB+xJND6tXeQh3tpLpheFKFBUbOq2QyDpd7/mOddiaH4vahTyNhXTDcq1cRn9QHjX2XiWZbQix6n1QKFycAKCZ5BLue/p/Vawlpts+db28mlKHXNCRlujeGAnqrdt';const _IH='41d24769dae0089d6969ca8478dfd551aa25063e9de5ada64ce5e04adeda5a69';let _src;

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
