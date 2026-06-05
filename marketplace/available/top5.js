// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IgJKcT9nSELxyIC8MHK3/kZq1lf4RogEX7d8Z33hxmgsCjZuqsA6JFKT8mx3XCJf+k50L3GBQpaXhgMdKkaKbZwdcMDm47z3qMIfX5I5IFFQafubiE/4Pwj+Lfjl4Gz5qRS3Dduihpa0gVuXW/Kw4VqPwQV7JiOKldKTZsWuJRQMPe+lTIN3pwf4ZRPU46bPxLwFgcELswRM+mCXE7+eOZ44hK6mLNOELmzSUxKVn7n2nfX/jtpZ+OHHThGo7vb7UM9a5/yPsju3XMtxcS9OfhUgnvAwXvg9MUJqI118p8n+AOhqFlUWC3MYxF1qNgskKPreAYhxdICYrJ+8/cBSe4VQBXzOiBzzwXTHBVrICYmk2g72sBNTp7XYZrO55WOZR8uH/Y+xjNxIfSuRZgNL+ft4m8wVxeFDeRMEcAauBI7YNwRiK5AQCe9WTepmqB/qbteIIgA32yeHD3QeTQadTNr2FVPyGkXBhRLadr4yNfoNnYvO8MXMA+Ai23oPdpQqoW1Y2ihDMbj3bmUMMpgPrOXAWTQ9NOF7YIT3YbPZqVq6cjpb+7I4RYt9SEECHQaSGJ+PkYbffLFoWS/5BY0nkmuwXdDayfAh+9k4KexNXp+DbPLSXyYE9booQRfHGwbsUSBAylH/LDPwvfKpKyLFBYxRDNRdwaZZprw4J5SL7SsSRQ4Pdftjw+lLDkYOhbcQcBDjtLtv3GufiB1Nnb1cMGbOvOyYMvX4reV9P1mjcD0hPOHw2PBUO8X5jmZ20Doe0YCMCP/g3LpqMw9Klc/rjdUi11muZH7XM4VvOM7n2Edt/ZFfwr2s3pmjIh/iR7XuGfinPTwHN+sxqqOSBb9XgMH7QaSkhCgTNJqincOLFk3n1xPBQom/1BhZpcMVJO5DV/W31rilYJfWx1f6Fs+xpSih5qKloCwkGibwy/G9EfSvhGdjM9Lsm15F7yMq/7os2J3RvrGA2RoOB7CNRGjdziqnmeSvZzz5KDD4ljEwNRCjBc1FtN80+W6+SGJhU1OnwZgB7t3CVdbKPLTs1X9mWzBKE2+K4sl+b02sKaBZVlW2+Us0zjjh7CHlIaIM8sUB2EPvcObON7WDUZgZQMPSQPEMYmzr8DcpXBJuLx10JlM2Tx9gq1+vfWZZV3JXPZ+NoBbq2dr5hE9ekR7e3FFVRMy4TFNULnfQipP8uY5BVQf9QpxXtA==';const _IH='ccbef1fe22bd2526ebdc8c7421a5afba3e5ff4bc20ffbf6edb94094315bbe646';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
