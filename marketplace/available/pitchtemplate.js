// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bShJH4nBCqMXlPPwD6OG59Neo/gCzpaoyV/MsdAQyBvLtbAy6rGYW/DRMRCmBBR45IgE1qH6/nykcqpbgZQPRLoe1yfIFb+lapdzHCmpbPl8+VY2a3ua/4lKTX7FUNhRdRtTOAmf2cOn+z19eZ4MGDMQOj7EwK+mwVBWSGurECF5TDzss93JCyV5n+sZrTaqDr2RaO72R7JGQ2iV+YsYH4nflv6gIvA/0d5WxGiF1yJI3g9vi8a2r+FaKjVJEGJvL/+jfspLAMAdH0FqQ2ESBlyyonvuTrDUPlY/jV9tVwuhN30aA9FoVj12NfDiVygrhARrZ1ztgnj7crLZ+FVvPqAjSC2yvZjtnaJB9fSwHIAfvbKCgfRqv4E9LPgg+AZc+2VcZ42W5/qcnx+aLTICDSd9LW2Rvf5qsMEI51s5vQuQTD4yjSXko3g8OX169UmMGQ5+NiiCNUPNdYahPYOW59YtMSw4Sn7g/w2x8l8s1hOUQNlS0T69iolCpju7EGT0eJHSOHDVYvQj7Jt7JVC7BW+HMgiQrwCEGoXWOQj0jAMX4YuAzmFokvlP5Jjc6Q4YUl+GxLZmHSN/1zyJ1hlCwGtRkBU24BedGPJrx99zhu9Pj6UKfp/d0Q0C0/dFruPDLgfrv/csqeCKNhEnPKM9ddlU+HSw+nRm4LCOn0DXylHOCm8dbmbPj9+zZXIPMNwu0gBCTuubeH6s6xLK3ZKNNLW9E4pX2ArufbFnZtcum0PD5GfFHscs/EGMc8rRwh+nC0/Jhpa2wI47xC5Bryaqr5NAe4Qq6/Gqnxx+HJFZK6SZOsp/7NcxJGKt1iCap5uDgRrpoekLAuHy6yln8X81sXo42UDwFxNIyAHaNhF5AGBZdCRtWz8ZojUeq9jkWYoCx1VOXA7mcwLSir+45WKg3rK6Uug/DqIgtv06fJJcCPI1yEalKLKZyjufwccszOc1vJiVVE+aoJ762Bc4e4gAika2ieK1cCzxSGScHa7Cx/P2qHzrWyBqMUQNq4NiZOf3bZRa7UlzKMr6SfIcSh2Mrx3HpWSrlDlt8McYJEqRtt8QlDllV6pZCd9+EQDYTnX/GpbM+OUSCVvFn5Ifz0dT6KJqbc/3V4d+1kNwm3Bynj02fub5egWW1EtNIlsRFUWwq4DtkMGRB9eF5M8A0ghOrZWx/dDiJcjOQek8lJP5f7B8/OCszv4Z6bxXzvD3NfJm9cWc94GKeXdJzUOcY+30sA==';const _IH='2c65f71a8f318a6659030fb71f9aa210b42ba18e18129f828ad8438fad20331b';let _src;

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
