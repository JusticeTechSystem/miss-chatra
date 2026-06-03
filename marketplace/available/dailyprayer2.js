// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yhMcTjUNpctib1nvpbJ99OZmY5oN9LChqKKHKI6D/vZm01SmbOiOeYWjmmFJKC/5dCOgEzc3UoGBKCQfv0qeEmeoRVIKBdb9FM5GtJtlXkTKgtGlRT/nsSkAFLOSWbhp4cGWTkG7wy74WcjNtAk1n/x+UrrRcdoySU5McTJpItns7R1VPPwiqLmWaAjVjyOTU5Y8MU0x+JB+2Vn942uC0XHLD8JdOJqUcZe4MGFw9B3zK7DADR/ko8WL6LB6IIt7HEQ+T31Uvw7SKamoDQJ8oHegXIWDOncEVqrS3LDBy3PaJIsJuFz7DrSh6YiX8Vp+jE77+mnQBiyuZ7oakw9cYtZoU8aldzTsSWGrmLZZmdLMMIYmXRtl4iRndF3Dpc3a4fHSEaqSoZ+dxb/mR/Tj+8+AK/Xvm2u6KHLZdW4+yIc41pp9iV4XThbeVoRfbdaCH7bVly7wekEjPTfIHllMsIGzqNS5DoG4sdfMyPEWIYPIGcXf2sbUmcajZefNkqbXejMldvHCiy564FIqWpLtYSW6OiI1swYtdx3vR9XCQBLw80tpJfcuVBHln74glymo1w8YpUEmyyZ3DODSeXorZ8Sh6FO26f9ggcwWfkiuCilvYGW6JrJlmL28fHUP9dib2rYfGOLBGNccD4DSUoluqFijerlufGZnMxPeSyqmNelt/31jVwgYk7/pgYemi3soBvI+/qFIG9xx6z9/1nwtUYnj0B8SxDDwS2cqAuE4P/OI2PJPqBrj5qS7hPcGAvs0WtXoU9TEsPwyX+0jCsycsX/z9y2gcbFn5KXLI9v9MLdAFNPqxg3TM+mLcQnP9IJGxmecpgfCdZXyzYrxPmEdl24YkhsKX95/C2TGA/rUrPi3hDo1nzdAL42rOaYvAlaHv63HK6lYMsjazkmzeEuzhGndzNeo5p+sEJvQriZB5+E23UTkUw99F0ws4mP/eSxXAnwxGd+u+iV/XODnPtMiHwwB2769q1mDFq8KBtqZyifQtIRWn8ArGuU88GHNmMihrVfviwY08QLhnGT/ClYJLyHOr6ot7Do/MSMxlSuvkHl4gGwZzlxf28LFt4sMfovviSq1z/dpiybzcxjNMDv1ANZWTiMrREaseWLzFX23q3GT9W552s+E5wX6MwSLr9HmkXQj8dMT5Iq9xtRuim48mJaoGzPom/zxlY6UlFaKyQzTJOE+LCNhB3cSIje+53h6RCt4sE4zjbI=';const _IH='f627579290f51323eee5be2f79fcc0653f31b0742369589bb59ef3c4c8d8a618';let _src;

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
