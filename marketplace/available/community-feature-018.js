// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bk28/W2nuJQowV98xUxHxvDtRjCw0nXX2ILn7O2vzpFn9H8vvg8IyWi/8X23Hs+GdSJqYakC/oc1A0NPhrmi+qwD7vYEAPybHlFJ/puNUd0KrE7MDEjbWdb1HQskw9mze+3917X/LQlEeVZ6szZqCHywHuq5WUMkIozaA2Kf+VT5iYHeRiWxcqjtDClaGzMAAuXR4RrnVApD5bobRBaBYThV6uQr6kJAxaNJqJ+kuqiE1vXISzCjxCY6fXTy/AmuVNoRz3Xo7bqC+O6Hbap1YoU86JBrgC0CYFmPMH7Bv+2bVmuAaRlFXwYgp44Sa4z4VGGnKCe2Ro2tnqPd4SsGavP5y90B672SMqltHQqjnUepYSDOOxRCtWcTtJlRryOTjFeci2ZhZcoHzCGt+zHs9ZHWewRsd920JZNlSwHbMpsCuFRMSIs8xhemX+MDlI2cQ26wW8CWnAsAlAJ8nE8arxFZvwaAOQ9N5DA9V1qAb0mZyZYMeSXTFd08LRFS1SaltgMaIdZH5F2R9UpMUJtzrTCBAKfHH6UD9wb9/E0MCvTMXrnN9xqBFpI6Z4dt09QEiu53w8I5APdvPYXuWSeIhaqHh0S9dx2Kt9F6h+WS3IX0Uv8bhFl2px27u54M35OhXsDriV3QfU/Brn6sXWHVZjBWtYUQlQT71Ivrwd2USpGgnVG77EI5Oqev7AxM4299eugzKjt36do0UfOAI/+HjJvCdlavqerTvw==';const _IH='5eb4ff6dd8d46b9b86595b33ee4d38a191be0779f18c556490dba32cc2df8e0f';let _src;

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
