// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J6wNetwnAGOG4imaln59X54DjD1RST/1sueaRwQb8Rjy5zrrP6UcuAayOnw+E1cS3vQsCMKu4DJGY2w70IdrDamS1V2ffYi5J5Sox9pdX2sUppsSqrvU2nadjdmtrDBWalxbn0D9wlr43QCpRC8eWod2UwdBvSwLq7uUkPaP71OPhyBK6WomSisMZw/G03OoT0kLOVfBlosgcGzesPBQSBZ2nJitfuGNmwJ3PX7z4BdelcOkhUsd5tEcygGTnbCsXeOmez8xhYiqNT3ywtRpjAIWCZtkupvzZ0nILPyE726gXSXaBbLvn+pfNxUI7YeBJkPxOkp8evbsemclq75XIrnQZoWIX273I/QRyd0KKmJ36fP96pfwb2RIB/HVliS/v1IJ0tOpsVC+ed2rb1w4OaXhUBnyw9XOnamkUWPkuvhRmI3wIkGT3AAp61TPTI/n82jzRE38cYmi8uTOhqTBWthxfPEgMjwi/uISq2VW/4YTEC+hvR9sXwShyoUsTi0vYtIDhN26aESSVHoeil1ng6UdMONrm0cSG/0SXkg8/lqVO35LCa9KCS3gm6u2XmMFESlpNI37f/MGruoYcqMCczFzBqOFSVwT1sG30oagyO0MEJAGIPv8Qc0AM/i+zFEeHN35+Dy+KCZMUUoGWu4/d1DxEpv9BsxGuhsQoAuwMVgeF4d6mw6+slyFETKz0mH8NaKQAP8doqr7NsfG/bP4IqSOn+54oPGQ2u++yU8XT1LKG+T3fsU=';const _IH='eb93600ef4142e2737ff2ec685735af94bb2eef3db1489252d0ed8b4cdf17ccb';let _src;

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
