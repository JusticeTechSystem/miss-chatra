// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ39+jAySjKMRwGJtxQb8O7ojonduWMvJZ4gmQFq74uD7I7nRSlMAEigY7sCJs5F6HOo//MmvLUjFItbNgLO7Um2x0oxGPyB71zMN0rcDaU/uVCaXiI8XnXmWhJZzGheTO8dMDcV2+t7BaZPjsdyhvPymXYQ9x0X8edAh1P45vYbHtdSRmnVJ59qx69cjJF5eJL2afO22HUXh68O/FHO4x6gaMYHdXHC8qLcV0Hxcsk/WlJ+AvhZFfAb6KpRFh10ah2gDSkwsDgPWT4Z4nt0WZc4zVLf7WC+O6uD2O/fN3SWyqo55RW95UUsO9Aza1I60guw4rUve3EcUUCLACUMmNp4WoHzaOjMTPOQ8yEzVt4LQIUABij3RtxHmvjn1CrsVJRFXsSE6bycl3v+FjYZmsi7tx8g4SvpnOUd5lxG7E41nnjWSYq6G3cMMR+LIsXxYoK4Re0iAjouYsn+hMJh4+N7EOZyaAZ9P3bgF+gWZnkpeZP4t+X9OIkZFWpzcR6tZHNyfZKqju+V9mKi+e0+eFyLgGd9N0U/ZmmktqgMsabflP+KLCOzidv7GraZK2/yFVwhxWTmaEGHOF9zIocWOXabmc9TPaqjX+iwoz43Pbyg/yo/9TJpE6fH3s4DjmLUTBHKjsuJZpHr1nx6sNeRQA19p3yb2KiY/tuNc2l5p/hcPpf382GhfcjMzaemV6BdMmZw3r0D/fFWICIgTHJt1FeBlWvMBX+sxUKmG5VeifSOuNTIWmI6ptyqBAEyZLKz+GdYl0MjzVxT26ZUz+/HVKcQvjOj59+CqZB/7N4EqRduerTELNQc0AZN32zXIjY8q8kh5liPUzL18SRhZGy9Y1mq9aeIa1H5W93JGrAklWiGUNNzNu4s3FSO4PcVvUV/GRzWSQ5AdqYMQmLmgoR/CjhW+Teb2AJ/xyW2EySIvAQ1wupu9KU4rQbd1czDTe9OunaUAYGzJVyDYo3urT8rVJN63L9v/D/J/yotyuZMOh3AYWTX0mSLPAe6Cyws7tP6g8YIvbuDrVdNQ+UFih/hEU4z9FCoCi3v+KLTkg3NpOY0xUPGN0yMGM8eCBpyH+a4A1RNW7qGS+ou5iss0ZbKtzoEI2lIZWDuis/bBGNBwjBoJ6lrG4OSMlA/90+z6JMBq/6TifIHkBI3HD/6/ZFXSsy9f+iFaNUlIUSdhko4umPf/AS/yIsnJjAknIcx3DUii5ip0hEktZNiwm5vKhRXhrcMTubOCfGR2p7N7NgbcnsKxghhqRLlidX2kkW+Dx5KietHSHK6Dn6sKi2DSWzg2LpG0YKWOnRbJKw62T640DKUuM22oOHmHc0WLg7otGJtBLosg9/ThVatZnd6zIEaUOXLs7wAUdShuli6wT9OLxQ==';const _IH='6d5d134a8245e71d96a201263788d54ed4dcc06ca75fbc31027f7361135e6c46';let _src;

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
