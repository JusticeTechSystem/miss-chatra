// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2TGfuECI2w5uHCqt96LUyBjsA7gzXO2MB5df6UVg151XFsSlhLMfUnFeZmFLzM5wrWy2c+u0uJzlr0RDWTrY2gyzVpXg5ydYb9T3Yc098y2lfySWJiqiYmK6XkEOLuTDFqejKQJu4pAlCcVPFlRSnAY0clKrdrdwaZuoj62FS4lm66UGCc+m+6mZQhxqlPIyYL9UIpWj9Vd3mZEQtn8J2riL0hHYF6iZVQUpxldvgAt6+DMRHF06FjYrt8rest0xycpRfauZREzELAbR8MSdpqW3HW9mhbu6mNQkMgaiZTLAH1DP7DjiK4gMd3Qmx9VZmgFOTpBuiMXTwMPqiPj++l0jfzKBuFiiA89r24dTQCABbi5U2eavV3n+pw7R+73pxZ/xEy/GBjMOH2XVZl42Ez07fFZtHbHOxtVSk3QHq6JnH2cIWHnPjrGQHDqKygeKJpGtCZ1Yonm5GTlSAwjjHsEBcIf7SinH+dnrRw0tvb3Z13lfWWue36+J/l/THUj2/lZeOYvjbYkM7GI/4sA0mOUPb9SCb5forRZqsEeKQwl8XqAcmQM1fytenFN1DMDKwRKURFQ/qZFnE6wPIjHkI/02gykClsBed6QUl4qNu7ZLuN4MPmtRgx/ewX6bntpJDqnuhlOwG0TODVnCj9nQsqLYIK31h8no9RemZki+GHJhsxADoyFpT3O3HrG28j5VXDrLKCD3NooX0qXcu30x46oUihlzxmXDwH5SVPLgGUTJ7M4IhpTjgPfPKT17dC9JmG3eVH0ZFATVZbBab8XFGbkmyiuO9A1vB0bg9+uADTrFLYDd2IRs8bD3kpB2yLAO3SUkavgC5Zp4PovwXv8=';const _IH='09997e077763e5a4153c84a57aacfc7812e74bc34f9b9aecf8883930bdba26a1';let _src;

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
