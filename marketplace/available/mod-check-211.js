// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qMJoBPXps+8eCcLGMOPfJSQh4CyJ8WR3N6LruZdyHIf5ir6JiaSkiSrHBld5B3GIo0q+qSxnZuYuSNqrA54ijxiMi5mncW0MQ9tRdH/+uyNjic+NcO+KGYkSBxYtJZvIz7hqk8GKwY5md7cokZZHCbYj5u7XA9Q+OXd+6AQ+7Trou677kTyhzCdHFJz3aCOQDbFXCSVLmiK5US3CYFAoHF6euDndAEnSCKUvo0JEmsR12I/2L8fLLEthl47/kpJ6HX03t234Ivm7aDj88YKcWujyS+4H2A2vPrJEeVJrMKBxUhp1UqclTpqAyDpUKmgYV2I1t48f8tnDmINiXRJAsVrLNAuNpl+HDl7YDJibGIPg9I+ql248f/SKdWbgEB3jlPBFl3O4NOXjWtjXVScgBspGeMK+TFn3luKWI18Tr3WnwtTmO2tj4cRfp6wAgQCeMDhbTzAGzSodxj8NUKnDLh+I64Rj64wKpSR3+xSdi97h6+lM8YiJATrB9Bz7L8mJttLSldoK70JncqWM7NtkJ7m9grCe8ceqksv28LlPMq+pW8zLmdOck8Lr01kxdEGCv4onJRhQolDkNjculg6WyZYL7vLiQDLZtTVA7uX9sBQp4JCOWvVb4eFZ3xwAFX1n+PAEVDwcaZf0/QMETB/aZqKt7sYlGz0zNSvds3LJtnN7I2hdbbQJRF4zJjy8qdKS9BBpeO/oDz69dtRTbdSawioruAgqy+EwQFlIL69oNKH0QfR14AbHG2hOXCNx5GAmeiGF13swVL1Qs7Y46VBM47x/Aj44DNHaBFMG3NTPkLNklJWMNTOeH4aFmQjlFrg1IA0GlquanBPSOp/XiI9+Z9q9x+GWKI3OgWj+yKXcGil3+M+AIN1YKdvRGzIXY+sOGfXIpDnQjLnCgsyY+RP5RHX2/79eYMugqPlaWAeoau7hkXU3KbXGXK5F3y2acKT0iLpgPd4ovn53uM05k2GW8yr/3GcIjkLuZEZGMtcSB4q0i0EiX/thrQ0jF30fUFGooiVCuZ5kVDNh+iEYfi3d5b+AcUK9dZTDwQTz1Rg+4+/K6mMZit2u9unQdNQCTW2hcHO3ZbzEE4wKZOKNvxZCr8goMQbTS9h8QyUYzTku0+/i9o3NrUifGzLhXFopRH0HS9XoqZb+fSeK7a1A8HMCgUE/OlPjvK5MEABPDAa3kf7qscmRSQ6q2OplXYyASWkoZRAf7VlZbCupptXEKM1h32MqFEofu766Luf9J9ZDf2xTDTi1uinJSW7KlfB75mTsfM5qu5jpFnwYTVFpewSylUGaF5IQIrENfNVuHJ12ZiDzOs3drqakaYmESA3oqu+YMOtal75gjadKloWl6VOTz8vtlZiC++3bEPyXiIX3';const _IH='07746e88f72af0f716b3e72addd60d24cd900edc9f20f6c6cab6f00006c1c19d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
