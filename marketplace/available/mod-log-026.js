// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oh7YEK5b/R69i0HS87mO1PEF+54sKC5SMH4TKst5oL1+D6SyYg00wH9Szk4vtPLwQmjFHfe1230tudOrya5klOrlsj9cyrVhmkGIYvIrdDxhXnbrF61mxBrAFNuwh7avuCBL+2RtkSbDjjKsqMgb/xcSpCXYYPXY4bUNchVp2dRPcU7Lc9bqztf9oFYkv9wTju+5Wrk+U7SOxMzgbYUYDr2AxnNSuz8D0ULlXIsACAZnsTjVOIySow9wzsIvRV7ckfRIQpL+it5Lx7IJ4vPKXAJ6cisrB0UDZgG3KdCqDD4lnCNIGXktpu0tXZvCREEosyF0PARVjsSD94o6HKeuGzHUJ8GOsze081MMjKuzmktgINGmA+sfV98Ra/FvUWP10knPBrmS6tCaRSxaexKHWWtB/kijwVTrjo8luIZ4rJ095q2KDdd1viaQGiSzBE3XX1Xwrq3xy0ZBVvAd2+A9QkWG0pAyOBdmMjCo7Prq+l9hQq5fUOXUZagrDgIJRd8D6YUAOQHihjR9yPN8t9sb0vgrJdKK+LnW51lB82PtjZa/P3qKx6C1suTE4GTZB3Hd6MGja1pXSpkJC6HLNFuf9XSENue9MYP5x13VsxC0M2xAUlqVg6VESNKWw7HdpFLHce131GZGmkeJlg6MXNmwAGvIVwrcAQXXSQtoutDVym2ZSX9fcS3ABs9mVzdlBZ6R97y49NYgdhHkCZ+Uvl4nCfpPga8Invh94jSJKYyqhHxP99E2MvfQOOIaJbxhkBd/3dXx5HYmB1kUiWB2FquK1nWc0sFod/ypHiu7zeUdStKisAGLUjtpoK9OKoiIPwEOygJ4V5J6O5rhimRTosoznMKPDTjNEhNuR0clxCuBOB+szJM88b5EkiV0wN03bEviBmUuo7eWNlZoFO5JDRj4IaCeH8axPFhFyw4fWHSnUYs0pVpA/pTKKnvXw1aZmFWcKbsptT5ElEZ+JwJaxikg3EOoNF7tA0bfRCKm3EwhfaNLFUctsiUyP5df0WCUO1IusoIw5vWjJL6Y34E2gayZx4+sFUtYsXWr8MYMUFQbX9L/beHv8USoAyK9yc5EmSHO+SsezVhh2RMySrkoXxvFJf+qj/TWHzpbAViug5GF5A3mGsgM1I9pstG2BI6ZvSV05dxo7x0fZphl4mGeYMHMdqP5IIRfbaXUOuwnC7cVip1/SrQPRUs/rukiEyMeSqD3Lz3At+Jc1IA++fvcjd5jhIxusneCkRPoaRM3h3VVT2tvJN4mA+/l0u8csQpVpGypzR27EL1Ad1FCg6Zt5oTV4LSFVU+F186IiOXJgtIPuH4NhjQjVmE2OlU2bBMso/rhcyMv+GM=';const _IH='d614e346076b8f73df0431d5a8ff8ea3cce22dc4680f9c4ab304e45667c1fe7c';let _src;

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
