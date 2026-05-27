// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T3ZbeuQ1fpWMxDMdnyX1znxY5nBG57iJdC3xtk7eUP4tnOO93qRBlsV5yMaI5IIeBwAg0VfOO9PrQqz91gNXWbA8PVHPws3Ta3Nh7T0AyMe1QGplmaTTOvhXZY1Ft/NeX+75tIg/eJ+EzEG6AXCegAmW2rXzuvhnAtlxbYXVfwW/hCMpLrKavYax0Ujs2rsv7IuvN+T3dUTJdoQ4z+ntvOfF6gUSCGx81Cj8nCEF7iIza6IxDBYoU3lqc9kvlXb8gatEmzSQINhNablYIly8kWdEcZv5jkPIRAbuj9+H7NIHIKk914686aT82RN+UhFbwiLmjbtawhsOFFcqhtElKnTze4CipvitG4UtL2phz4cUvP+XAU5ed/fYdKiK/amaZBetIMJkuPsCWMbjX+D+PtxpWzhqYrPLli24VZW89XFf5HtJT6oDHtmXExV0Sx2U4OnpYGq/NrsCm24RCf/0wNxguRRdxPAXgIj6QuTDQrPvEnH7nRZE2wuupNlB0D33xeA0opRHFx9xmENk/0koi7uBf2Hkntk9pOWz4LvPNVMCDlXo8cLjsY1tQ6XvsjKTAS+DLpLcXTMuPozNR8u152esd6qCxhiGm12zaVZzo35EhIiL/ZJuHu6daI44BumPDebI7Ko4vKCHSD1wSpKaw76WUN8jvYAoLFlyxcv6iD3h6lVcZYu9k+NF0HgzrF16jfiUmr4nKpWA/Mup5wvgRRc6Od4aUOhz';const _IH='9bce5a52570a85d49132419de8066ea56bf3d018bcc11338fab2acf4c7ebeba0';let _src;

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
