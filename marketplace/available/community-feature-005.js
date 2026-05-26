// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Dn9Ua6RRTtEGYEju8hcj5sSO0xOT1z5gSxltYjxrnXvZgMbQuK+HioF3jvNNbme30OssuutUhIfUefWzsDU5I2BtdQ1iTXHYMr90j8gy/p2twCtTq4ErPhPfOkNTwHsPnj9WXL+Icx3taDnwv2xCpEAjSf5OY+0WceX3Hgs/7/pNip4YBAY3OiW5+fAj6QEDFr06POPXnmqejI3GI/UWa6ACSDGvCqOmutpcExZy09YiS4iYy9zD0w4U6BdQon1uLKeC0aAIw2ro13YP+OBocFwGRzbk7M3zQpKBsZiPLqBRdzbu6KJ4e8t2JN5EL8DD184n2Bqy7JKkhO16sSbPGOS0aw7Yvg0o+JWRo/rdxzyNMB5uJLEf97WJxfFmwSjZZ3p3PPUJnnMRV1meGpY3JZSf2W29QlpiOkfTk8GbO8x5xcpfAeXH6pxcoda9h5+CsPi3TGqBwyttzDAEo1ReqeYRYh7/RUC7QZAc59n5YUUBTuNnxI1pjDcGYqGg3RLokmJHXdZ8feyrwSBT2oDKjFNJvtq7mxf5vCkkzExX4GSo2MM3zwQdDe/+7iTVVFVbbl+tVzEc8FyM57ClStgS3TkJv4JPhG0n0pxpqts/ZOdJKItWWX/TFvJzSt4UjnMRcb1Z5SPiXzN5usJhHzWBM8ST42AM7f+YzgeJzNKiHd7/MRdhVfZ+MOO6wLxFbHxNuIHZItx37Wz8w2OQIkcRJ2w3DQeJOZTUselhN0pkfEcUPQ==';const _IH='91c7181b40e6dafb9e8f1f8b2672c3ec441f0f2d8dbf77cdc0f40456bb789752';let _src;

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
