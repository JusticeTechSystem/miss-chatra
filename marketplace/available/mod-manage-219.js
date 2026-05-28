// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r8bg7K20R6iim03ZOyCOQCGCWAlLs8IXV8aomye06dbMJJ2z0vQrbsgqV53OhY5G/KUlMnmvP528arMCP3Fp/enLNhitrfDafkFa5/564GYBYlQ+JLtLdf7j4OK4NkurTpDSH4m5ZUmD2SknhKp00aSzEdQmE5oDphIdIu5BbLtD6NhTYaH/OOzOHgxDSc6HZZUHRf7mhPsVTyUxPSCtKjG7v1AYQEbTh3TfFUHPwx5HW695zd6c3rY9cyKKktWYP5vLUsFLkEKUSlb+xp30RrJTzMR9hJh/lFxArv3XsOoXOO76CAbVAqR7GgPcslfoxDj0lFa7hksgjM4lGNWAmCFR6GX12vw2DmONb/TOENcu1SI+r1XSzohvGWWcHOb5VUKmIMocadJaBSr1hahBFdj29UO3TJLfVgwRDIemnAlQZ7brVMZShdUGl/hUDOzyU6ETPh/mzs01o8Bs1vY3Dn4ER+s5NDpodlrvEU+T8wdoLQQTPGL7xhOhktx87/kLB6MC1TfTQs7DWXvdWVVw7l+Fl1i9kkM277qW4vP+yxe4Rr7SQOiDjIFamARNXNEgmhDdAQQp4XuUFCqw6pK7c7S2wpnlWNL+wQ9QV38PSGuTtWi3v0nG80ub3AeDyIDWd2rt1/A+wkDjmLYSLssoxRl4/gdn7sKN7CXwjLYIPuGuiXNZCBwDYb1vXxx8hTmhJvP1PLQUZ7BV1pV5oMmTD8ufFOUo9dN6QbQQCAkrDh71LRgL9l7GYrm1o4izHnWQ1ioAsuctq9aNsksg2F3mXxaApRwcjj7477FJB56iX+XIzQn7P4aFHquc/TanvyeKBczQKBaP43RFy+EvO7Vwst5F/lKLciHdvCx0ML9sLtyGIqL0/nt1gQRdrfDYSrPB6Ps5riAczIEyUf01Ecnqt/J1n/JR+TeULyEAeTl2HKEU30LN6wgTsIBM0R/ZfN9xWltIbswC2I9ut/Vnqa21w/0zCA2ULzaz7uz4rf9+JXzHcH2H2Odt2IyINAm+grCXgNQOBocKKlDCea37kUTE8i6FWV7BLMGw9Kc3aF996VTHbfMVZA6uaz3WLeOhE/bPCK2mjxV9pw8/H7RciKFuvpEfDl2poGuwJVGPT48UTK+epndNDAae6vvrBAm520fbQNAdPrhWjvqTM96Q5GuMwIQWpTQ0TyBMP9A9Ey+GJvNWnHupbIZbf4GHs8jko1RXWvM3HeQ1q4I2Le4f8qokGBsDtjOFL8WfduSVwEcFxqLsipk1Pu9mmUb95mZI1Mm6hU6QggWpc4YeVuJsgyEzqZdx9QAN6UCQ89yWmAzIfKgrhFHrBEswCxAnunOndnIpba15vt+yOM+xd9wQ0/CGHm9P0FJ7S1oJAaDO4HbZZy5jR4GsDlCDiw==';const _IH='cf223b26a3ac90fd376b251759c2ac90f55e0660cee7b1288a645582a88c3a1d';let _src;

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
