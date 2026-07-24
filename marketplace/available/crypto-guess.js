// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjStq+n9y8MImHiW91wVE8bd4LOM4tegSehN+/cszef6DsUshGpG+at3eGQUrybgoD2G0bQcXESx5Ya4xwvXuF/rUoUUJleMvYPO39D35xRJ2OgKj3t0S+G3qjoHarzMQKDVuVZeH+2LhXg0/9JJc6IyJzFgfkO+qT6M89WAGdqepYYa0qwfCLgjEVp5/EqrKljROOmv46rHAle//PET+mtKNhaaZ1WGXakZ1I2O/2dXsvj20EF4R6N2pNAniH3DRZIsDAlwLagTBsvrC+y5ECzgGDBUu2LOgoSm4q9lkYzUw8k99MThUvdMuevzw2EjVcFQShNZ89au/bu3WjDOq3ydqQGlje/f8heTZyBPmDaH4Guxve7H/R5z51dQowosffNBHR2Q9aqYfS8xjFA4e+qBr7f05o3+0GkUlHRQNMzHJRotLNlpIBOiWqUPGaZfYw170hdq8sN7fUNy3tr5CjqkhpcwQZd0x6oI3Ybv+XLphmUTk1zAwOFnNgy6euO6KisWRchreoccZz6Dt45m1ndMMFr+UlUuj61kw7aYWNjyA23E5SgsZqF883UhDdVeZD/XB2aewGmBbG84rkfGY0yr7kUw3cd9CCqK100ZMTW8JiPnr0jO7SeinjVQ25tBotgMWVo6P6hqIpBmv+jEaO2PnaO6L7UX6BJDmJNfnz+Zyicw/JB1QvTmPOfn1E5vqK7MNZzc1iynYVaj8/hgcDWJ1SIuZRRq1V4apTybHY11utI24MVzUOOVPTpMaofKI2dVsqOIHBilcFb8+PpUPwELZR3R+Er319ms83Ajq6TamvlT8PPsdGKiCLvDKsO4TXXC3X8rDeWyu+YNVnBtYlG6271KegZvFhMo6T/fvOJH/NjLiQBG0Hor+ckGgXZG3cIKfMyG9tBahrbgHKnKkAP/AlPxVVizSUk4W26NwgvlhkTLnJnoplZzd2GZg7foKAVrqv/7pywePcKya4TMTwgirdbOKvJrpZ3uBelIXc7BOX5WRgPS7GYy9IT6fu/Oi5zPB9u5TGEkeKe+qKGLJhfksSxZyj1qfOOo29u1ICs+POuAs8PD4Y/dVa+pJJ+0Ybdbrj6HU92rsNUsWrzD9+N9oMB+T9VDK199J2S38pLayeZNY/jRNuy3YPe1ErxOV+r7JoRXWXbY6UWXFfhs0Ubu0BFPhZNoAo0mom7Tj2q11qeneGLuK0pHwiCAOZVJ1JyCygD45/rLC4Ihv9HESaom9d6YicRdW96iKhN8hXwqm4uq9ADapTqI/hIt1TvPDppr5E2uOUGr0ZGfdhRzmbGvjvueVrOM8aofmlEqfGc81fHIVlgg41HH+SF4zTbPso27pSrIC5iGOho2/Tu+g7gJmzIyLBUK064xYztJyiCU6BExCyGPM5mZtZaEyDPLtuDoti4GyV++3vnmyON4uD7xyHOn3w8GZqMuKxd3nM4R/698mWfY0cHJQw4gNsi3qcdQ4u8VORyFkxqALH9/wtifV1weOLrU0EazTwS3geIXmLYhr50ewyJMXJM4Ii/ZmTkXc0WyBfTisgQZBjr1L1rJtg1jj0QrImv+4INFBwsjz+uCyn/UKjJpAR6Z+y+cIZgxTHwz0pGqOQgl/VpsDlFdARiUtYKvXUZo9/JrFUtKf9Nj9+bL0ZpcsSRi6D8YLzwmjL9w9f1b6PtbxEXmJuidkQI+5RhFSvoBtNwK5KrIXSN7sp7no4H6uKak/GsMuffBvA/koQteHSs/e7nWGuR6EjzaZMC1JEu6VZfpzhhTXLjLmJbq3V3uU4/ozP2JUeALZWhTeA==';const _IH='66c68aa3b062037c8e102af2f6b811e100aae0aab285d19303638acae467a57d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
