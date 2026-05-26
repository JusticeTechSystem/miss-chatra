// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HkwQI1fiGt+ovzTTJdgCtX3T3QjAO0A6Gk2ULjm5idDj6NB9DSD43Z6Pcb9cv101fOtodkIxl8YUF719svBmldpAN6vczrXLHJqigI4+Esk0CLCOxRsBC3/XVZs0wRqRWwITeddaHJImdpwXgIqI4pDBNoFwVkfVinFfHITNEIhTmpjdSjdEsEPifJnIFmwKp3mh8vnC0HsYpLLLBI2VxSmNOB3KtVwfX8LKk6vMA5+MOfhz7DjpOUQcCguokdPFdDu6FGRX59pxca7lfPsOAOz1ESVJoTkBMaogAFAbq5dJCdD80PIRBg1EHGc0SI8pecq8ArVvD3iHlodxRRvfL63xm0jSetEroDzT3Qd8XlX8+4T73cu1hdQaKGAVYJs8TFGYZqH7iusbrylJnJ43PJn0zHyuvIHTu9fRVmOXE2NAyHhuLNDUsRefNoBKSr9OuiJAYaBP4cC5JFXS4Cty6u1iUnluP28zpZfb5a5pJCFT/jFoB3/kibTXbxZa1Hs685p3X2vcqPt80YDX7ltELoGC3UckWXBn8DIB6HG6R+KH1rQx+kVLBCwmKYl6yu0w3EhRVFx/z4BPqKwUdFwpA06hftiuUddIY14qFRT2DoaJHZUvkerZZhQDrpL1dlsHCDJl0lqM08JqWW1Yat59EgkHjJrQL0fnEFAEQrbcgeBImLnM06nnIaZ3DLcJRhS178DproUD24HMAl9bsopZdsO9lq7A6fhhgKed/H1UlCl/VuiOTft12MomiRX0+VHpu822ij1xzQ25a2Sj5Qu3vcI9qInkDWd+Jwk4MCV6CGR/tBZ1d2kUGIeLXWNU0hhV4HRZSwD8G1LbZq1p969sAM+/3VWkJoEn86fGe3S2HUSNOjlLuwNC5iCi6R3xYXCdH+Avgr653T1ZVywKh2B1I5Qf0XjumcxYMrs8xm9p6Atg4JuZqqKN1OS4nHVZuCmvABkxpAiKmJmWS0vcskjqUsRnVcG0ZIbl8sSFlLpoJf8ptScsg40jvzwsF8X+';const _IH='8469fb89d5ab9c0b3f726e03a31f2e1ff811657c8b6404412fb74b90995b30d7';let _src;

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
