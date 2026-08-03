// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQx3ILukjaFsQjJzYKbJzxioV/+nVQ/Zw/A+pYIodnwEr1iYsS/Q42JfoSwJdnecmUb9U1lKnA+wCWitWDsyIOMSkoklLRlIFSunN5ENL9NBDVMzYOh+Yul5TCIDZxc81cYwSa82ljdK3Y44a9HDYqdxRfIUzweddcPI4lI/HSg8SVYUGlrmF/5C3nuT/iLrFJoGCOgqZQQQ1JrTslyfXvB91S6uwwZmqKZi2sY/JRCPxd/GNbQ6v84rrWwyfq8yZOAhd/HiCnaR/xZ8+0WCRP0eborkNUdspgnhA37EEOu6Ee7VN6ea4PJwlKWhs7J/zeEDMgVmV7QLqeCfiCd/4WqhfgFNg+b9HHsvYCPv8fr4exzlWG8Qq/ehNc3SG1fXFgZpZyPPqrkZmziQwyRl/eo1DY90JdgXrOFpq0+7SalmLNjzSO3iX7maRlak2FLsRIFtED7GHNwsVeYA2pwQRW6bvlv9TbxkDzZMoSWBL7lf6B4Yks77Y1fzdlG6kmnmQBRuC7UZsENQNa5J96XxoNyyA5pWCZMtqMMLqTWEFdBibDCMBVuRbxVELUqZ72ogfdwdXxS0+bKEudS2OqF5Zb8hy2Bg1LoAjLnxAoT0fvj2TC938cjASxAsKQNxisJlaezCScqECYkthryhYQiuTGHLdqjzRXkre56LtGScGenSetZouvXRoQJrmQbxYdfKserrXP5fP2n2z/FEigQ88v4DsWPq9ceANm+pV/iRP5+eAVdYj8CyVBHhW5tPM+vaSsfr8dnIGpGuN7qfdg1pU1dES2ltrZY0aE65/fXnq8dypVMiNDLD5EuP2xtbPlfOhsbc9YmE3d/Cx2sbsjmukBOnrebc3ktRpGLPmNWZMSR9FHswe1TQ2MEsBzFJLilgZqI8pbBwwtFAyWN+148OaM/a/V3OpEC0L+r+sJuP9+L6U4QMN1J9VubYU3LKoJxOfqOCYH03BG0QLPeoHUBpXuUrgp69iRzyniMQ==';const _IH='34a1c3ddd4a3f3a2f98f8a2fdd33f3ec8cba3e91db2f031d44f8bb88b0d53ff6';let _src;

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
