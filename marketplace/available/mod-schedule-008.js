// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YXzm4XUvz3jqB/Ok2NekYsXw5e7Cl3kPjmcCzZpHoLqfLzLXlg5mvcL/Yyzc2eyj18YOd27h3bk6tMd1RrHXCieMmdiyBaH0+M40K3NCu7JW1FJStOMc7PT266QQGseRph9G+fGh5vsvkvQkb4LQe9zlE3pNTwUcm+bWQzSmv7bGfTjJBDLFb1tDxem4DnGm7qEcDhgI+f6x9ldUEeJqHJQNtOP+XN3Wgd1J/cn4qj3nAZkCoFGp7tSHmS+CYxTc6VwoonUzk3IlBDPZKzv5rgRDS+5+hdeShXaTk14BbxqnGHWIQPWAJ3yEtkxelz0/SMLWcZPyCi+llmZwBTotQMKvOsqgibjlozddKEkSYcwph3K7rkS+vHpUtkLzcLbzF4lmEO1OSyze8B4tivjo3nEDnefY4wBpP2ZJQTHlsEol2ScmidZ2L8M4BaaLa/nYsWZeu3OPFnysE0PZXCBRr3WalomRgWzHkZ+HmF94Zs1zGafz/Ra/FOvA28hnDHQEvbLTRi96NBsWNxfIQQsGeYdAjGPZT6unYFyfKxsGaKIhIHpsurt6zlSYAvpCL7rY12ZHzztZxBRJKUXLpEBgQ/w/m19d3bKVzf4aTmbJBQiZLQGo4Kj+jDEdY3DmXR0YXSYFVO7lj7UFmsKujqSZwEC7A5GHUKFKoz7BBBLgrbpacI+RHXPcfr1WnwArdZoeVg+V36d9f4e6vU0jYv/unV3aDdNPFV5itiHZ7LtFl+hFmWyXD7W/EJdSjpv/1vvR/stp0hS8X+SgMpIQ1vvxvMzSLTnucpql6N2ED6FeK1d3Daz8gv2Or2Q1HQYnBqeF3ktYGTOMo3CN8E9NHXhV7GKJ4olZi1e6amMAZ/aFq1eLjwy9mywOqfYWjJ2hNx8Y2TokGNwzbrceR36aazijOZxNJSP+yRFhc4mpY5rclqSFYNrpbUrMSZ12Ojc3ys7hyqxhaqBnVAS3qFO61cZs988ihH3NEf9ALcKUCCMxKMAYekWrgPRUboziNWzW6nRconzK/ggYmUX+tia/XRWQ7Su2qSA1/aNjULmUK6iiGy9DS7+ruODErUnpuux9Qk/+fuV4mYemWvH/ftYIcv4rH9P81QCZPYvo417zJ4pYjmNGjex09c2jSPDXM/MY4t9j/9HM+CnPG9IHVbxC26/O0jauWe3k4rXt1+rFtaTDYuMhAajsAUxSw5lc+QzHfEAYvjKwSR1MnTHLSeQ10Fwu/MvddSej/sMVL1gz8JP7Bz5hTzOmZ+R3cOPn7n/AaMsngfJHMw13hHp434KFRMx4pYS5XHnRPiaaaLZA5E0TlVj3S1P8BQFLuR5UhEyO4uewc+g6bifqCSmCY3TWTsBDPzsxf0Yj7MdoQnfGFqfu3GYMDG7iEnMXYj63ujH8ET2ged8=';const _IH='c0fba6435a382d0d8145fcd5ba760324e2ff9a8ed367194df5aa4aa9a9b25933';let _src;

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
