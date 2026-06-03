// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JvPhGluSR9dOXeyxu2TMAmGH6jK9Ek9WRe0H/tjvL5LK/XWYawzF1OX59+QurK3Hxg2BBRgXNsTl13ByuL72orqH1iuHED4S3WJvU5sbRS1MvG0syV8VSqfLC1KZwRyKQyh4cLT91hXr8ODXL8T0KGy654CH6emJ5fP36dV+7ElTqKXvTld4qg3X9kzAEfkTZODvAOZnJnEl+G7MHGMz+abcbrrRdJ5LklIw7cCcFWcBlv010kNNJMdWCsqthKb/03+rHVpf+l3dMEE886MEZQWmjtUo/xK75wWH+K/ojqTu9x4XzWt9mnasEu9Skx1WxZGuCpNLeLtXZAutW+0i83jpczRLzYTEtPvxgnKTXN1CPx8aXyYfzBxktZt80y1BeZdSn02IFG+Xc0FaIQ0F7Le0wc8OhKLtH2LJh6z0ijmErYsf/h57N1plx1Gk+ZhI0J69yfXM0wHmn2n0FRzPwp6FdmWLNkivzyDB4HsSFPOSmlwWSoUQWSYs0TnRYIBuGXtyiJH+5KLoz7VhmejCfohyKgKcJf11BIxYy13N9oGqS/e0OUOm1rmKXB3G5sLiGPQAivoc3LEODhxCn5DWoJ63WDzwTIadqLU2QobUzk6+FhGZADHpaXEDaiJQ9+yTgGxPSumveiOTrQ3VUgvJslg9a4rlygUUwfNLnSoXX5T1LQNMF6mZ/GW0o8X9wWqjFR43/LeZwRsV1D5Pb3Fa0XrX3fSeMqmLaFXV53stmpNJfsW1LOsjI6FRKd/FKnwsRlB1Q5G+6jWFbwiH+lDQNInW2M49dtxRHBO8YdxUN3was7Hvfbl47o3bQ7zhdT34fQXNF2Zgh+vWylEWDmOwpDiTTiYbQziHwYTJj6q5F6KWLhSZjUS6HNozjVqvtFfflHiHepvgNjxmXk5RY9efudLFyAOTATA8oy0BLBJaBn3PgDWJjtsJHCJothAxKXQir9HR5JTDuM3Da/xt1epA4rUwGQIH6sy47IqIYl9i9xl3uN1IwG8ycfTIx5tgLNlDFlJnRQLTBnPfuagWrp1vOYz01Q7sF9Ra9nnBkqH34TLdtMCsgLYAYOOjiIjF8GTebrYOW6phSwDqzS5jWpsT5Pw9ts2i2iP/g9OYDRZAm4T2KSKalwMynL2lCW/2iK2ZIQ9bdHooQLmOmq32AZAnwFNsjF2ox8xA8ae++tc4WUy+cK1M2YxpwdLdZUUmcSNPkjIRlBYUVTKGJFNoEHvJ9PqD/ZUOTc2t/se8EujDa5A9t2sFXK9ThaJ0faVU9298MG0SbZxGlWEOEIWrPd3JZXqskk9gtl8efgYk52wmzupxOrNUDM6N6tkI5hXUWW6XOzUcdvZvis2eh0HSdeDUNh6PDiHT+x7PRg==';const _IH='6c5b2c35eee8730c225adcc8cafe11d204e7ba768886b4b8149ca9c77ccbffb5';let _src;

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
