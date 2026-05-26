// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wGALy7d+feY+Ov29BcC5eEc1lW/WIS/oRleW1r/qv95+LgaeRt2FZ2jrerBmnLa2k8W9li7YEUrjv2cct8nyjP1nIZPTtEHP6j23l59aeyPJa7tvScY7WbGl6CFPc/M/LKk5HjRSwdhI+dWag5dWzLi0X31nfJamaxPKIAeevMtJ/mBsKigDPHnHJoczpAZ6k+iMJEtAY2z2BiqDgZiYE5y40opBezekFnc67Zy8cDIBc1Fkmn+uF8FshySR7LT467Z6CuZlzVzvn/dGy/ga9XgkNjFPItEfbo6veR9AV4HjVqyqGwquv4+3K3WsSSrjGMPERw+oCBXCsFx79VrqdhFq8UuV/qomOzWA8EopLNV7xhRABOaGV3rKlYb+CaxfiXf27u8zUeZMobd6ICC7s6ey2G8p7DJUmgUQR9tLwgkDnz+HKWIYl4FxlTfzkjJ3iMXesFx9/hRrNU0QMXEauX7NbyayfO7HbifNYzurVpJvM1xonNpq12SlOgYgte0HwL0/o+YKFYtYyre8C96UvTjN/dLxDhoF/Xal1JHLiNw+MyFJqxL36HXB0NFcYtWk7EItPQm3lEI2zOQI5NSIDOA4ehpDSyhuRVu8wItdAxYKXJn4ntmaovBQ9eUDqwq7lNRSh5swhjEbmEs5hZ3OYejv0L4RbMLhVCfdgeXqtqd8y0jRE/KehP20itb3nDV3yTB+xJbWsRsJpB0fdglbY9uvmds5elexHc6+cEmuocff8/9heKwQ5Zl0fbdXDJxoXWQvG8voweoH3+5CSAG0kygSi4ZGal/5Ri2aLj2SRLK0cq/amhEjn6YaAzVPaurGxoxfUdnOAyV8QYiBRla4qPtBLJ4IdFrbWoYyfzw3DqeECsOBYX02lyKT5x0tWeRcdz7596OY6kxZjLvNRpq2dQjsJ1pQHVciA/6pJ2muarjVDK3jNrh8FhjEFJhPu3Rn7MzG4eigFg2kAbeZgLcxFkoRKnLWvuFz97y6gCLe8X2SGaqSexh6gUg0TkeFkZ4EW5OWEFcNpWziGaNa4iO+otCkUIe8RPF6B/mri0sHCEF/5TA3+v4rMsjU3jqdUZVylQL86S8NpCbvAb2TZJu2dS9TXQvj5LGzMpoZP1R4kipmRhHAYxHIzXjw8aST886HVocEJ/5M4gZTaGYCxbN1v6vdmflVL1ZKud+RM6Z3GpeNN95qhhB4kllOQOtySbbZhhXn/5Os7iHe+m/JbosQA6oO5EKhAFdB7v2Rzjho0mD4jSJAX1+LcE+Dpl6BBFu6MMGVMCf9GYQE/ol9T3erJnqnvndOneD7LrreAk7eKoV0iRBxgF3xr3hR7n5ZeiM0Z5krXJSH/xW6MbFQXZ6l2LQRea7nXh5uRBmXcYLb';const _IH='1c61f63d7f4be4f71bf19021a8ec876abbe608cb18781ac9f3584079baa8d479';let _src;

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
