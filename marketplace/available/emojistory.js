// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ATGXDasOVPwvGoFsqHKfNXw6Zj7XyiRSkMG726ykNUBWSgzY+J43Ed7nATinS/WfJU8xH7Nl0gcyYw0lhpsahbpPOkFVLkh5wnaIuPpW/csjFCWJRx+p7NI0p6IwFWZwMQ82bXCzo1vNn7hMP9J5ZGN7Kv8116+Uz7P34IOo2P41lZK7OxLhUnBZYK5WkRGIRST7kSBOJK5jraevJSfrxIsfE9nf2QbPtFE1n7Azc13wmL7Eu6fede8LMSIpIrrgedJZfGUW5dMWku27PVKP1g3ZiQ3vLlDuTTs73O+5rzRnP4vEr8IYy1m9+Q+kTY9vCRJ+vYlqbu1R/6C0rAz+XN0qOBJn3If4l10BN0ddnIQfrJjGT2rtS2zunetSjHwkuKx8Dv5s0II2CIU7dd7uHhz66uHWHyp29iX1vLs84lbcBYVXiUb9sGDJyye8jJHKz0CIRDBob84Fej2IIm6SpckoDK11CqKkelVoDaxx/jrHAxkrOmOHQD5n1rRNvLRoWCruFBeygO9EDC/nqu4Ctz2ypQXW8Rxc4A6q0amLdQsxuZNUgU+L3V20yP2WthvdVZTPN+rna4JYJ4QsK7FLrE2fULDD8SNrNW/25q5xQClUcJqTs18X8us74wKjZx7UXYdGpmq+F3beqdnmrY+r3w8S3swBkMIwVUlURJ8wYaxlYMjgeillLAByUfklhoBonASbduZIHVJtfxlulcuZRrHZzSncx3Hoq1Td/N0FYZO/Nd4HVae53iHz1Nf/O7frNtz8Sg9WGXxHCn0G42EFfy+T8o5qzRt/08zzfsI92YR17cD1eOmBQ3ERk1hi3mcMcYKA8P9LZ4fjkoGR+S9y+IszuA4WF0KuxczwjzmTUxCGqThSd4wHb+wp2vQd6oPTUdScoQWOn9c3oPhUgrQhFmZWkPgvDGpCde7sDZXkyB7SUrh/4OzrDkYbyMinsg+jcWDYblgxYlcfg6kk360GDWDXDY+Mqc4zENmiMnV0Rrzmf9uzL72Ge/qfctrlkkfDV/9Tr6mE/RmRufbNFycY+mNwSbCD5uuvVyhFgBpv8XD8RTzUZhysGGonCG+JpH6V+kqGTHWG9f8VHSzgT+K9PVcqZ+Eji5qP8GO9DiYvpgTYnKyv/7kKSSNN27xBTFdSE2kO3WisOankgsaYVQAbRmTcZRSpLEJaoNRdAc7AchlY7D8pUQbPzoWGAQUQcKb5/wtf42bM';const _IH='2c7fd021709031760efcc340e8a848ce7be72b285117f975c36ee38db6de88c8';let _src;

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
