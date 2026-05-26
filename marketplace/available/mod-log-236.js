// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LvRKSTn8HjncL+OB4an6Ij5IW1RFqKhoykT+sIcYv0VExoouNH8KYzYMYCyDfd6hOzuQw4/3Y+lwu0AAsM2ibNdAWyM8xM/p2ThMJqs1BwNB9mnbbaS6AjF8fKh9RAzhfHlvGWD0ELpnU1HtcOeMLGIv415N6StV+sr9dvOCFBSTNDj/0tzntt6mwLa0LTXQIhxW9G1R4Zr6Ec4Nk0TGDJrPo3mMphLw0JrCWEq9q4k8Y3OX+Zqo2CqZWDxxdp55YWxMogEjSsuPyCNWN917Ropf4cRMasL/49m12PsHPss+zupbo9Ceyfy314+ZUhAZZUGjCTWBAnwl+W0NWz4z4xXy4X8LVDq9xNewpyEQ+gsB/NM5DzrKtDy9HVd/yS8sqm9kcxB3E04BBplZjf8P3R1qUWnYnXUhTfnXX2l/q2yy+cGyr6DvzkheFKvkqsvRpSqfd19J3kJM3n9hYvsNEvFCuOwe7pumMyZloW91zybq5OhtLF5d5LkrH1gyZHbBibmEo2A3zauJIu4jpnckK/7SiN06Oaj6dWcsYJ9Tuxg9KxCqujfTxxJ/wbi1iGeUiLyx9ePTzbWQdwJQDnuwSnAM3De8wcQ9fn6zAZpGdDZuMefdS7azhBUJGDi39HU+70Tkx/iWNYUJTI1vW3vVg9n/vLNCbdO6DUB3bKYcTs7HRYkXJutMz5KRnaQSw1FvJmWSuE8iPM7kwgp1PlCeXym16gI51O1gzVXXvs7kpCsrtuqmI677aMUUuDBgks7H0Q1mWsNTmR7korRx3LC1gYPwrU2YfXdRvx8WLt2aF7KuQt9YEI9UlIANSKHXlcTmVAYUmYsDHivCjbmkutvcZ6/uK8kfOf5lfq0bsG8pT+y2geP71vnY833FsQwa+Uqo/yNmzSNSKddFvNLi8cqWzd/+MtpodcDwPzddBnsEGtJRCi3ofUYY/Y2pQyAFuNzGI8Ivi4MRlVTXFqjJP59aRmjH7WljaGUXyBTH1mSjJu+MazwGToV8GE1jx59W4w38yJDT/C7vDzkYOydwpguISuBIFFUSw0xRbnJgtQwRntKzNXyZAIjm5BODFcwhC/TUAjoVsyCI/Y0nuthbxKGWt28ybbFyw2GnFbAD2yPULX/9fQtZUESmJ3++OPog+bT5PO8i8Uagdkjb+KT6P6xcfRxbsIiws7XyyuqmBWJh2/Ar9e7rpmP9eq6IdvT9nkl4Yg5Y7GZpkouv7GPfTJHQPIlnt23/1/LNJgvzTQgm5ArHzvkjwsLLf8JxoESVCn8dt8GazaPHoMEZKe+c73YSLWR04Nh0wyBHIu7bqoSEmYRwSROQwZrR03viA3TMh4AEtjjRH29ryPZGag==';const _IH='ddcd649d63e32e52f6c223ec7ba789d93f2ea8473d395dcffad19d2185d1f88f';let _src;

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
