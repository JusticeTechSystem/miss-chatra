// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CnrT40Smt/PYwSNiONcBGSvh72RlgL2VGLo8afdht782NHEC7lWDwAU7LyaBiJg6nUxwTJB7hyJ952yaZP+DOEc6B91x1/BjY2OCLS5LKetCghh+n/dhxglQmaPThv7vVnji49OGf3qM9DKbz+UA8bJb2f51Q+9oMg0a5FiC9LWHNDc7TVOnGoHYhlz9LuTz2OuDWM87bBoVNGLaHXoho7R5Z+0GYnFG6rcShqkLFAQH5MbgOknjwrpoopMq7FnzUFzjnTAWScAANs0FfoYxueiAN3KfY4huRQi+EpHqxQdEVW8ilDMAp3w2o3/OYTuoJoLuwUXaQ5tXu5nLpIsZmIMBTps/RTnrqNRj7ecvyjr4FhNwoEnymljj2apkZPRVaZzYWUU7lSX565SLU9Gq7wr77mvCL6uZ3igFNe3QPIRKg3mLf12G6TWDaduJe54blBt8+pgJxeyTOLNgqghICjhrHBW/YJPlGM7+oBkisZOto1uYjViSky1lH1OhTdinB8pKN6UxJGLBJjg175E8tn9Dt1Iy/rlFft/ShpLWlTxW5pXsFKBZH0Kh+2cS3iVu+V6mhjaEdA0EZvzgFAsl7hs0md2WsUru2CKgHC2lDzl9v7GqmBDY6J+Iah87GoFUZKzb4T6qDItLQmO4fQn8MkR7BN8iIawUsTLSiFOQRH7w35HLsPaHtfaxyNcd49VH8vIfVckySVMpcnqFKn6tAu3i/9Kjpz38g+VVUajsyUBmigfkHyScJaih+0YtzfisAWYKTAezA2wVsAeJP9jOahVnsLCy36yL3OovoKT22Azd/Lnrmc88lSDXD9QPAGJ6moDBGxZZ6nnFwup/QPW3n8OcJ4mCEyD2W3FogjaCavufiZqlwH5dmpb4Ss8I3pJkc8sPHaiB1Z8IKyeAQGdRi/TJvkNWc+ldc7rRwePpjOhZC8MCUYVaCmABy23WhISVfkvln16hxu2LAHb9qggwt5cZcbJqD/tgEXM1ZOTvfWNkw1k+qZ9WNIi9/O/jbArumm8utByw9HVfEj5U5D0/sFWOi3Un9/bxrHxtGiOML/T515hNs9oQwsHJ7dGxN1KoVq4aD/yDWDCMpimZPjC/CVRnP3Fr6ykkmC74qPy1/lQip6AGbU12b0vyRfYd08ILSfQ77lqJSs9+LSaqArbJkyCUP/0DUokHwYkEL8rONDZhWug9P6jbnYysrzqnffpKCJe6s0GLyxuyQZ08KzdriaqKInMvrssyiza81byP2Z+6awk0lSNWisnjLgQb7q8of9MAZ3fh2aQxpu/cEvgn46UoGBhZOpqJIx5yc6+Plkl+OB6zC//WlQj6JJmiMgGj222lMYdDCOk3KCbHsGOTtY2Nq8/ftyw75+sLRoOm';const _IH='afbe683bf31b7ee6efebedafe161f16e8ca1e88d0ffa339427d0f40138b1f143';let _src;

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
