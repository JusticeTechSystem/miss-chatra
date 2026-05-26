// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2+n7fRyEV81bNxxYmg/i/+NOh4HPa4kweCjWBndbVJIMO5EBxCpIp59WwUMWlBNoTBvifX/1hoMai8/fup3RjfXrzthu56f7nLgmxikgIlqAbRndIV3idv8+hBzAA/logXufljjl9Hz6CJIBb9lBGbPQo9xhg93821UefYONKee4YUTXZzjV8Re1VbqlzW7/DtFvXPUjT11AZkZ9OSurgHQagfULETgmxjS44fKbQJvLvJZYtfgr7dsIZJ9j0ivTc/pjbvQnmGxor0eEaP+9hbSdDtPTlrhT5hEfGruqaV800TEFs1f3U1+1W4g4dvhwzL16/3De+73RhgkOrmov9ZLyS295pGuzRZj6qCHS8x8DIFC0B5zORACG0PhF6K+7uzagRiVMSHeDYKqY8Cx8J6TiMqYtcv8BFYWKe28Jx7YE5it8yqYlpsCx0zEujPmmEfYV9OfYYx2hrmKd7Ig8lWo1haDnhbkvUahhLv8CDo2ZPSuTADjgon/Gf40LsbuI9DmcGMC9NorvDLweEdJWr3MbxKxaQR7H9wpTZEgtXl8TEFPl5IR7H9/wL45c6LMGaEA+Ti3vSY0xUYftXqYEbXcvz3QO3nhhkTFflV5lOj4nG1BP47N+YUrUPywVu98LfzPTOBDYQWwwfw+B5AZgeubqR0Ze0R3R6PlN2keER241vqwvdbHbdflLlH/11iD2Vsz1u3urcGpzRQloK4HdPHAHWUYzFZ2UKdoz5FbumauTOGKLoCXGMaA+04gB/hwYk10oNEPAAqocCXAzYvR/JsWWaWOwgobMZahSdeMNreDhBxCCJSlMiuIordIBWZrVKJ2V4rSDRhurfJdxzP0xI0KnkHCkWXEn5WGyk7+t/hei5rdo02dRCChawe27eyjx+i/8F+ECi/Wkm15a2sRrezxGNbXPsXV3Gm5p3+HE5NjTJIIJeTaq6VFNXZS+N9WF/xpSLQ2Vtn+63yYuD45RjmbuARkbdD3at6TvyHB/FVphRFHGampmAQksU+5sCMlnsCAdxZ6asGldWRwemNLm991gys17xBhxmL7I24Zz2i6O2Q32zTuclhUWFelOhV7MrfSOu3uSuXktTmsxucWK4RcDij2x6aLro2mlYQs5VG8/MyuKQuEy9fCuos0usS6CgiGi9ssXOPk5ZzSKx0rXiUbzVjYlUeig4j2HNXDIisulm8SQzSrj5fpRDUA2n3tfh8CtL+5fxxcfo9/ZBV/QLFKYGXFUgO832O65184sIVk1gZg3VN9qZgfefY+aJ0ucc1QHay1rUBT2DjiXUdhO7sBW8HQ2yAO8q81BQ0r0uAtExMyvTtZd4EE2yyWwFC6go9BEeYZgcc5lSTdGUHqjkPyUQ5MoI3T1jA==';const _IH='7440a20067751ecdcc953e181229f212aaff833600803eacf9a94f036fb41085';let _src;

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
