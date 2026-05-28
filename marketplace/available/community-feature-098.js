// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jSxYvdbpDpUvlLMpr/CfB0sndGXvwdlRrT+bT51OSxntEFtwSUDQ5PivS5/7lz8hgKZP95GwjRza7I3UWsWhhu5TcavZlAzDvEvdAhnRMjOCRK4D+SVr2BxHw5xBmC5Jq8OCmEkhmFS4l6OR7VZMmzGOQrEJjJqOcMkVTEKhHZkeEOEmdiTDh6VeURuP+jbomJDwebIRUI4a6F9Fevr4QOcQzdzkNWJqbO6+66L2snQ9Nwur8J1s3HAkJ0lDKi+fO+/LHIPMAxHOlRd6Xrv6UJtnX7QQF3AQs7hJAL4VuMV+SYApS5h7pmvVpG1q2bBN3jAALOKZalk4T5pTRJb1fJfEEWmUevGEoRViI3MPhQnlx6T7yC9B3+BQyEGr/w4wbW6aQHESFpcmNCz8/8QgxGMEedqVmPxk5weX/il5HuF98cucMES9Cyd/tVihJpXbFs+N9s3L1BotUJWyAwv5g78yV0CfaIwqGy5m8xQarnaUldKunV99qw/Rj5mEebHxUVPMpSV9faYBabNxnw/iuKNa4cvedojVEurcZunis9G+XURBQHl8qZ33U8ww4gOSIQpGmhVD0GpAIrfY1X+U6MvCHaQhKezsTtqLBRlBym2si5ofFJXRqEpN/rJ5izNtRJOCJYiBIkkKvwVLCiviKpLBWiqi9LQ6koABvEFQJz+GwpxCgR8sCe79aHPFF7gxAV0+kcW/zXs7y8KoEuGYfmXtG/0NzeHOHw==';const _IH='e21ca37dc82186a8f88451c4746c72cf2a25cd6998cb240ef9a2d4993b3a01ce';let _src;

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
