// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qdeAMfw0RxKBanGRz3R8AR9tS7B6uEb9S+Cq1THYbFZoneMFiJfgxnkBUnv4bc/fYm6hArNteg3NqGq/Fxju7rp7wo0/1lVxyURtI/b/eqdJu+rmkuhYpvAiWk8eO9chid3RXooL1q/O6ippyNbqR4F/sv9wa9aYJ8KDQA8KEgwUq1DEeiHMZGGRB8gI/gKF+PwofZNoCPI6NO5jqXtWYf92qNPLFJLkkfVqhsBxFPYEiTGxgtgHyd/7pVveiG/xoKxHn/+U+mIQMyrt+CjWHZI990OTftclG6N8AF5bR4fYM66wpLUN9YcqUcd1H3tOOZGPvpgX+drh1JGyghZIU7w3opgd5eiQbf75AtgRuL9xXuuAzvW6VivPh3AqfPlp07x4LcNYWq4FPGK1uDlhch3naQznMcDEwwPXy/W8svjhSuzR48XVvBcqFCYLcxDgpyyMp1XxHvQaA7u1hoAslHIqyCElJQZm2RD2wcqRE44f3gW/Y4CU1X/9tLW/B8OIHYjf94ag7KWDHvt3899tCjPEMb6pfQmLogg5XVLewHovRmnvxwTw2PDhWsemD/+gv/fGrWyVw3UE1Ekakppaq6F1vapUwmjXDTkzxC28aY0lsDH7P8rgQvVc5uYZ6CvV30pWz8kFgwMZ/SekLXMj0p9Kmyd9EEDEIn9Krpi8fko8dO0r3X/aYtiJ4Cv6RxLaGxBrFS0F61wiQuB5oKQMkfWMpu/7dtBBAzVpzVX07/UTVodGREOTtXiEH04jVzU6/+t77EaOu5UBxH0wNBsemAqw8AQQbJfE+dpntWwm+OiI/b9tJ+NxvBE/jylt5F4RzxGVF1/JP3x9pwWadtEsI+XDqz+SqXWTc7SlmQXqg6mnznwcBraWhSEYw7EyWVy7sKKv6WEQFZxKWgii4B1d/fYDfRaPOJ21n6hmNnTrBTzTsR7WDr+9SmgBggffFTy8QeE3zpSUrcKML/Vnce/bDwVKctFTrwB9JZDqbC7S/QwGE8rNGSLhbQvsnH1inh4GPIp1jh2uHxRoU9KxFeM3bnU3Ejmhsd07lIQSJdw9useBAs1BKp4OzywZx6zgsVD8xYwpFnikqEyY60EvmVRLyW6r9iY4eaaC+vuVedzUMxtEWomwkyVzc8/rabwW+D9U+Uy0o60ZXvxc+BHkEkJjtvIpteB5HKyXWk3OOeEolT01XJ5kzbTe74v0alnOvDJEht6Kao3TNaSi7gSZo0h43ciK63Tw5Uq5jG/ROxRVrUR4zmIR7neXhktTECxlcR+6YoaPpcrF5Mcgi5kjM/WZZmXTkYOYD1tBLNLGb1lbJKcUsZA6KnKuu+xangRKJUi2BXj/en8g5cJHA89MS2XjEht9RH8GHPIGSUl60xHP6h829l4kArlLxGeVzkoVR4c9fUCZuyxtN1eRP3a7HuP9N56UAtIqW6bQkwJrYjH178qblAKqY3EMKE5LlrVc7fXORjdkfDjxolmBYX2zQJqMADSFJ0C6X9r1BIeEUIaMMYn7xMSlKSE8Ci+r5g1k4zp75NB57oaC/lFY9bCGLuXb+JmoQGWTzuwPIw68yGd9HD1sGdYEKgCPDyqXGBLpyBhjxf89WtNYcCMvZ+doB9DoXQhLzsmIlQR2MD1Q6QkArmHVUd78svCBdvj2hoFrDxb9qrT1kRmBAvhAA01oaYp3vepwa1dRoZ9zG42YX/8vPHSFl+haxQ==';const _IH='48bab65e1ec1ef1e91e09a6a0007ed1f1320b1f634d5cec875b780b48a919b5e';let _src;

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
