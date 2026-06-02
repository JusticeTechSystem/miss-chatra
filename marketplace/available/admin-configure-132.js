// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6uh1bfLsp3hc1lSxzvIV9Q6Wp29DvgB0QgoW4hMTs1rx81P5S+aR3y1C/V2rBSdMsDV4+cWllnl3FxgMQa86s5YRX2JEaIHyjV9oDPoBPgFmP4EB4yQ0HLUJh7ThrDEpirws1lt+j0vwF+14EzlBhhEOaVSGByp0Wfpa8VhXLGWsIxmS75j0wYhtDpf3BiuOGH6/MvXMMVVjs6MpBwG5Oecuy0MAPqZqU03wPlCqNDLyA7PnLTn1Y4Ej9+VeX1TIfL1kkT02EV0qaES+d5PdrBxyUTNfOc8UsmoM59Gy3q7svrvJaozx7ywtWeQcNZutPrz1T/o/f//97cBz6iE3cWjMEjWqupOx79gvY/9jq4hXqTQnYbYvVDQjgWRD4sBR5OPTOEEdPHmf/spysSsFAHARFo0HXeERrpkyPJ/uh1iqfgGlGIyI0oH5l0V4UJebqLiXIJov9P/Tqg0oQwxqOS+JR9R/SrP8d0SMx915f7KSpnsjH5QlcfqiVxa2rUsY6dqbbla1wBsz1w07j0KiLPKiNQFIrmmSV6SkBXvrxsGCo+lcNdsGb+kCak+ret2SMHXu5m1qlqjfChvv9xvHJkuOuXHZnDZBrN+eOKBgEkVJiRCWlt9ssEpUpV5I3xEcnuNlzRtpORhWHZjH+6DQDL3IMXcFvN4iIfMuELN1oFPi2S+VbiKJ0BqRWD/O63IiszdAdUPU0QQ6ArJ3NBgVAMc6JSKx0UomeoIk/07ctKyklddAGBFTrlbO4y5ZDfZ7n53dRUvU2WwuLnwy8HulmE/jv97eZ9oZ8ViYIDzUq8GWkmGiqFuzBIkh8y8nBFnfYW3HxvlUXxp0ezCpODc8ENI24ouKyFZq970B+UCmaw7BEE3h2GyODzF31QXakC8zqCnVxkb5O29fB3ibKetI2Crk4uR6JizYjzycEY2oe5sQXXQ2Y5E4okWilrBgo4T2nGdOgf7/oQJfNliBCyJgYU1OB1QJ0m3bVTr8aiS0HULofPBv6BGr2rjFZgHmHqHUhgbr4EogUFJcyi6KIfazc/KeUyeBiw==';const _IH='340c1f045d3662bcaeaf1613775a493e039bdee13f0500a0daad9fee79650e3e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
