// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='76lfzSG85yv/TNeJCTEYL4203qlli8dCNK1lDchvzp9Yd7MLFM8aEaRky/4FASjeExbcxv4zjRvUIuQkJhb1XtPeF+6no5hMDIP4fUaomypy53IJT0S8k9Tch1MRyvfy07Uyhn6P3nrbrAAlVeINTl/chIATdseRGHRIROShNZbyl5ojN7HX7ZPRbLMdg40PTO2CPdQOURquwHsnWEgAW1+/xnCbXPW3/uEbNQgD1/IF2Puv4RoNgbude9H0AHPv/wxT+WmYQEdMQGzwJmneoKH+W3HQjjFIpOzxaOqrEnkSnn1lezrF9YIq304ODa1WrZD1E9qB8Fi6XSzP3gte9p/MHSOikt2r70ixkWSEDeuZRBjmNBnYdDqLyYHBvvlXicaGNa43YADC47R245ch85E6xte9DviklyERFpyF3paWh6ClPFsj5Y8SXHuVIZyx7XUAoBLgP2prsBwZc6qMe9HHYB0uQCYl14DQoUg/2StuT4Qw0tBycK5obv72pq95YA1/qEFNneYEGL/mIk1Qs/42z/CispvxxNHGyQHFBGghkoF/W+2FL3D3KqsuwBkjLTU3xdBIeTqhF0x1MabjfMMa0LFAJyHGHV+0AtsCV7Gba0Os+Rm62zWzjrdfjLAN1P/cm9nmIi351yhCyIRJ3pllN25kyXUxITjAjVMSCNxwyDz8nDrGLcexwzSIACEWpZ4QM4zhPlv80UY/e+CBbhtMlmfgsqcoov/7DBKBSWP9/gyyD8X2G96xpsbGKjQ72CuL3eR68g1RKdxdiwa5BygA7TI2OyjFL4zR5NmAmn3ifd6Ye8iF6C72fDRSyZFI9sHhNyP+c1EP+OWiFClSOpm24h81aV/Pn14xk7jFYIZU5IsDCH2ucONdefbDbOjoKDkr0M63j80ciotpFOI5nGzAYVr9t5EmHg8tY2arVKjq9GJ3jMAbp3ebtwTFObLrZMsgAu/ZdENJrQ1UsKdbUICX0UfRgZ3ifBqz3u1/r83z9rC8bk4zddQS';const _IH='62cd7c419c9c0b88e544e69b043b18c44f6fdbc305b033b38454de42c63a6ac6';let _src;

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
