// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9haP7kIdc6Ulj3vvDvz+zACM2SCIElrITDau87t1gYA95/eOHRM54jmVZpB7SJISkbVw3e7714tCOLc/CW5LNgZUOF+Lf7IG96wfgFP+n/N+wCXJO6Xir2ZbM10/zbPirCSPiLCWl2c81bMssg0YgpnNlmnhLBFe8DIRelwPryyn80y7/Mo+dbkDSOwWjqGt+yhhqQAdOOR0W+UtNYnZu+0b+mb75xq0p7xSVJ084I+43A4+pAod+tp5rsEyxixdVao93oMJhM7bmz6x6tV3MLfbfkD5NakoSGxTL/8Qr6+JFy5UlFzuQUZifyDW+m8N0XPzBq0MiKwWwdrfwsWMKdxoEHvBNGZIuY/lSx4e5QeMzbySDEmKzGxBNszgLExQFPjOnYPdyP8PxMSBjhqJ0+vw7eenMU2+AD91fvK1wPVwUPBYyq1kfZs3hD7uS1hlhu8QHd34o243o7JzdWSxdqosfaU9z3mhDqRxAFWP/sQu2hikFdyrJWf0Vl2sv2kY3BrVLAOkUXpMpdDB1cW+3ePm97RAdIXXYy62HqZEyGJYIQQPJxBL+rX0eOHaQ2Wb+Rj3ihLPpmdFbKpVYqIuh87cQMaiYKaXsc4fApA9jxkXWyHiXaqOeMLBd5zkXW8M3XmiH9LJwuCWSmfpoysAO7QWl9ShcBgLdjXzU9HSlmB3UTeeE3i2djo2NBm2QgSUvdMjtuwdOnouwg8J/oorEHd0QHI8dBAAOKjZFKXoEXMfXdxcoLoemnKAK/0Af0E5dTJBgbs5vm5zNt6pfn+b+k3LkIlLPsozvWz6nHeOJyWd2VECAdVWBFVQr4AAJoXIwPTFDHtcMLhlsc30EVSTZ2mG1+BJNyPx9zAj+nXjmxbm6XxDHsBj8PixKWJTZLnTrYSGcBwESjzNBEHqJ1ggws+UYm103IYsBZXK1FYKJp9kx1zDHIHtWTYkna5qBue4ULQiWbODY9RNqpw05guHyw5sPCEiuSjuUUVuwwYE9iZ7f64csHCQcU19hDcJzHHfss5OOWROemuJ41wxq5RYBtOacISbFPUkYHbsn/t0SfDVf/hhsNtb6F8EYzqASqgR7CAp57q6hjRPctnpQTQ9w7uO9uGmiHIgi/+v7N4a1RpBM52Tl86/Og/J3TdJ8Av0Kj1un1Zu6bny6RuUMFVe6AdPc6X+CLWSqFrjmKl+hH+im7J/4OYLnfdq+3+L3hVt7oR4gmDgQpVHSA=';const _IH='a7f8e8cbe016087ae664d2408b3e78f1c13428b28884f5489f143e1358c43b6a';let _src;

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
