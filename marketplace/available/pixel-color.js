// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W3WfYNVlBFj3ArGt3kWsFae4NYXnDefsWzbU6z8m+wapSU7yJQO2vRV0n2yanFtcE+LkyAOMsv5qdfHOFgxP0as4y1ynyDeQAiylGotWFm++k28shHW5C1nFgZXQNP3HhaiK0Gi20kMUr4T4RyXlPvxKPS5PKzc6qOh2Amr6lI9G4fu5e5W41LVWHWAm96Lkf6wVbNyJmBAlBcXp32+VHKkE5qhPbmhA8I5qBzv40iQ+4yvVhp0plHHKGpJJ+w3pgOST9jtNALzKrcrrayNy4xOUzTD6+pyw1xqMoEvyBV0ZvSdodDeEQ4yt66cCL16ArfAO87YtRFGUXH0W2dWIrF2vAozrk5AQD1FPZmqVHbC1ozzrrCS4DFNPXgHIuNiYk9t3X1PkT2HAFS0TLGAXj8Az0vN/2JdLkC11LpPzwJSmKLrMn/9Fn2xmQEBnMNesO041ta6a+cSuP5mvGYUhM2bp0HRsNjY+T5K42SNUENxWH0IwiZo4Sdg5IPsRBSu6FZmU6MkFqA40CrZYV8Qzu74I0osg57LAHFUw1h86oVATzXfw+PI9BKcFmuJHYjH0QBBQ7Ur8HhXibK5OVHv46VQLAlFxncNlFsdfa4HgWvjsJpYJxO4NvNsJ4+oX1n4i+ToidRofjMdV6WZ/NgtZtgdHhxnLMkMk6nOVJ0+9XEJNdZTJjpvK4hE+5zRZMEZAhHi4TMV8P3YLN4OTXmaNpecCtueO7Kzxf9ZDtx5GmWsf10rlY4YxSORcHc54GOR3MLB4TyTqBQxQKKU/fiuzBUsJ9BUif6Kk/VD4/2O0jSe+KoFyDj04nIbFLOG47MTeZCLSqQEH41XDJpzKr8PjQTWQ/I2b1yPLb5wVKbvpNaOYc2Htltr/EWa5doxrmeUJdkg8rH9+Mln0+ldD4CswtYi3gUjsnmt5Y6cpApV5sOBN473dvDml7s5llddIhPZnGvO+axdORHAZOqFeBuYqcE53r9uoty+tAxvCYX+B4smCvaE/L9iptEOfSD8p+i9f0ZaKaBRYqDbqeUseij3snjBdpF6aBeEdl15/EpG8AkMB3DIgTG/nylKLVO0J+297kU995QOrj4QHXDnHXd81jDKv9kL0MO0v54rgaGHTATfvRg0rvh2oyu2X+9oro+BIddRE5eqqwgK+hbgyp7Y/9vFd4Bxrv3FBcjlVk6xaXKAzI6FGbOQvWRu9kAGT9ztuJ/4k3RYElLO4JX5FfF2TQdlA9lZ6GAd9WxY9HEdU0vz5/h4IVR7Z7zV2I8QTRh0koAnr9f4Eac9QKCDJnvBN+3xT5SMDMZ2uI4OOZYDtvEXsOZZER0ZE9yzpr520/1jILvFgrhgdBd1baN7h6iuSru3odAjMuEoqGz2MFbEyxkiDPuyzRPv9jDpp/AzFwsOBdhT8WcPF5ziXDE6QYYDx7uFzSwXJk7oI5GG1i677pm8wpmW4P6JNyPt0huurH2Uhv5U5E+JpkYXJPgcSSr6YGzI/SpS92sL88Kmd5F05wl4B19u+SVHImDgqAuKlN//kMthqIqqFIvWZlZlFoyVFHhglsBHScY1e8W/RB+mwyAm96Y6fdfin8TLAaUebps3AsM8zzLM5UHNzVbRVC+rnGjQwJmRcRi5n2yI7oBZqmZj2au04g+6UPAPhBFRXd8guAiAk10kiqEgIxCzzV8Ga7i5o+UbbTSiZei4XG7e48z4=';const _IH='f367d69a599d678ceb72e06ac3002319e46103bf895bdb14beacbbb045be6a93';let _src;

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
