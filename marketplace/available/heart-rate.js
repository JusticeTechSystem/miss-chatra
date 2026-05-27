// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/z2zxLR4Y4oDU+Q6LuDU2VBH+XH/0mGPkb/ckebsdg/MCmMzUSgSQTImZDIVVLFO1BRo6j2OOpLeneNql2bMmboN1rajPyXJkyJYaLvfTWr9hUpSwondP7X+oQhH6CoE4hV6OCWlfrZMgJS0/u0JUS3kb+aZSwa7bW1+JQjPIHp1wMmgp7wfd8LzEbPJePNlHH9taHUs9TPoUEkyU/G36psbAThVlDIJ0x4IHB7MgezOYEK45q3Kbfqx7cMIMvOXYOcdhWzX1TTY51tiqmoYYl14JCEbTpt8iluRLbzjS/6QzWa4wQb2n91XHGJ+r1VZFsY7zD6+CUg6srwcymiNaOtGOSSNzxLZR+NjSKIDvpNA7l8pCwHrK9JBviOqFdLgg2p/Bg2qyrpDRfC2URfWLwK/62+Pk3GqBzHragb6F+tqd9voGxiJWXY2n0VvPWqA1Y86CGCG7N6zw22oeKOojZvzFCHME5irbJnimSj39sliAiwZZIaKZPszMSxFvmqToXkBuU7Gs57NZlKDfFfwtK59tNU1Lss1IJzCVLWg/wvAlxIDfR2JD6VKBuSv6LynILIme4VGootrBYHyMG8tj2BlD5fKvIp9U61MG2WOZKNTyDgfmKVS8i7bKsGDKil3huF6cmITcvQkNmFmRgc52YsGL02CJUzsDj1XPbgtXivCXsvtRccN+jzRmxOXhU8ujnKhvmzOZ/qMZcVDfT5NAhjwKfosavy+OLSciaeduZwby5A7rsY1jH/ENObLv8LkC46p1VXOSafNvfyX+104JuLBkaPJPtBrG1lBQWaCok62Q4GbBNxH8CIoiVLjkmvjc8kvMLJomOCnQ5SX+f8TyEYEkRbkdoQYZtB5g5fG3j7bhVVcENSD6g8TcM6hcdnOWtNOxodM3P4qvbiaaNTOM9N/qRdol9WBo7bvTRWXtzEcguwFL/ChvpD5BPHvkOfpUWDKnGpIsrxqRqoKEJY5zO58kI2P+/G4X7naCIB50DniOIfbd+TKn1tZR8v4EWP8ao/1xZQx02aKWsu3oo/TO2LQ6GAoo9NB/jrX4TA91j8bqSI/LDWOPzicbgqxVd8r39Kkp88zJFQxyQIlO8kq7/QiV0NQSEY4FLa2KRDECxvpp4LzMKnkIAlfGZNKvRjIh/q/Ea50kYroUq2wLc+K0wBgdcihBaJBPQA4/I+X8QbbIcRrlG0f3Z255gLEhkg+vqVUPiXzRVhY4jJ2AlaEH/mWoKZcugUccg/61bo6Levjp0/1uHh0IhMPZsseJBClRWJmKB0FCn4O6kDZl7ys2BkCVpqUTdYI019W+spvot8u5AsT4H08NJIk5ka58uL/NzE4jsBs62L+W5v8zsMgxQ==';const _IH='e36a2907d6d16e7c4cddb129d371150f9f8988fe762368c2a1d010a025062e71';let _src;

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
