// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PCqImQ+Gr366vWC5cdRPXX5aYwu2nY069NP02SFSKuNBpmHY3istJBCalGOIFQBfrHj3kWCZgGSHHleoUwOsTOzS+7Iob9Mxu99KeYsBK1cH7paInPRvizWo3+V9gqJ2qH9aUBr1MNB1GytcKls/uEieBwXYsbimHEu+eEBMV+VCANg5MErShjcNR2pLMDgpHBQkmEckq4vhlUhSqBv6wkokDrx6Bg8v5Vva1pqvlzJRB9fplOUwcWsYJz9H1AhL5WO+pgx3zMVrZxt3ywHBVGYEAoCRnev5eR1Z4w6MnoTz5gMUgYrwq8xTwmR+d20tshgaAEqC0/3UVGDn6DJqMTP+TYk82PD6Rzrh4zvQdfTBcJsSkLk1VSBblcshp6otD+T6qWq50Opr9FRGgSds2G5AcWmlwG/yoTc+bsd5WJZVSQlLfsWdYr9WS+EQn1NtsL0Jri4nS2MZZfZN2aWVHA4GZi9VGNuwygVJH2pwrJudlvGjKm/+wfxTVEw5qdgL+LDxvCxBg//TaUSBhHspJJQP7Omwsqd/OVQ3tJWepfLd8D0tSv/YOQm8swFo1w9SehN/xbj5euU3Ys1pNCvt6gNQsoN674Hlxmi2Csc7I8mT0I7FngLxq+UjTGwvXtTvg2PgGzFw0VNrmeSsl/kh6WsW9IByIddC5UQRZ/Qm9XhiIWWw9+y6UjXYxXkpEsxdTmoYZaDv4KbWOkJE9Boiv92olASHgSd36Uq/vJ3Tl5S85RlW+P5in9Lf3VsXYxg/Hf/RcNzTFWfVZZJcPkoIIdU9Rsz8bY8/bB3SgCAVJxM5IIXjhL8X+W82tTWqM0QZh4m+8dFmlLYSKhUHqyjVKHjMN7XKMQYYx4HfizyYQcwbJSE5n7CQRmwgA2X79UZa3271WYi34UOpSImLQfpiD4MRXvzi3KHdtad6duU/B+t9p59dZOokwbCsM6Rk2Uc6QdzXdxV6WqiJGoPFDgBBSMg01LGHt3tH0pGaxw5qOnlpRmm3gCyP9ZTSm2LcKmdcmg==';const _IH='e926a8bc532ab1e7d183e0b56382591a6e1287ccdddf424a40cf8b83a56cd602';let _src;

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
