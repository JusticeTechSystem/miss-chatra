// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HdwY+bjSgBM0Dvs8hiBoT4CYpOL/KGD4JP9rLm8naIpoCEKIQ9c5GgorAH4UyjnenD1dQ+VCAgvbUXY7O8xXgyfVGUe6pudWGJ8R1ysjqxQnoL1BnG2OtDhgqnLpaiNO7URovTbG4WQgKu8Oo2RcsqAsW/nPkcdFx7MQRq20yzfzrBmq8UWXRchJ33+zMwUQkiXCVRypUNL6qt+zXILcQpPf/TslEC8B9i5rvTanR+JK7FDt+CBzq/P+kTTFsuYMU3HTlXEV2n/m04KDjL1CmrSa7rnktKK/TnfxxxTp2Cjq2xoWmAGObMgyftkAqBscVEEORLlyhgRqrpax+hwy3nSDxbLqUwe74C9loaV3BAz4g/5ATr4Punb9O0F/xrJ3gnFW3CRw3GVCiyLGeXzyDUHgCPyUzrDaTtxOzC7iu+yY/dl4XhmGtjKwVyYSVymxsLyDE1+hJ6GkFHmmu/rjLhETFLMc66rjDCWKPSCwadrfJbhstOG4cH6YuAdxlPuwraloI4seRoCdUrOtliWn2vDg+7aj+KZ1tz4uZUBvOC3zQsUbsKU1EvZ8T46S+i8KJIXQulFUo0WhrX9sRVO0V88l/6mU3z1v8Ap2b9wGhP9cH5Y7Ab+3eWnCL+04fXY5Xv6VnL9f7QXodzzixEpbJUcrRwM70rC5Uqsmo91c6kfc6VfZnaOy3IOVCGrWUWbCe0vzUBmL1B3I1HMcrn+iskc9/nXlQfZ+W+KiodG/NCvB+xbCSHl09dGEwz7x1va9aWU/hO4qg4Jz5IcYdpLJPH5qew1UzcJPD2Hpw1AbbfBh0H8XP/VqnalJKsmoxJrnOMSuM2Kf487dXJlcjz4eYZgfsRcBofhtJLn2SjF/xYOrKCuIH3inoV6w9USf9hhFON2rnyiEKjR+ogoWxw+arki7Xk874kGTF0stpH4aH7NiNtx/4COLt+RsFueOXZCQa+XHiywAexpbVhCkWSftAb4Hb1fK1OY+mImQR5NigOtFp8dql+6x/Z9ltv0dhk7KUh8M7S767zMEAL9PI6Ys4wbaWJAweL2yfZtzOWal4kyh1QdpTKykJixcwL6xUmZFhnsA9/c5WLr4j8fnF+NuOALamwWvEn0xQNmlhQcKO4WxtOCUV/8RC8EipeoTxr1N6Tt5b2e+H2FsMn9lAGAsONYueEFIlD7Dq4KKJevMb4rGKJGax2cqPkryvC06jDNa05LUZdEpskgClF8IQ1TEoI/IYPDMLSqk+pGWGrxic61jB3NLx/tnKWGZKa+iPZoIIur1MefYU+Bsanv1qzVNndMEVxV38gzOjg5Js1zYi5vACrloE5vRQuI36mgt5jTvYXYDeCMI5dpQ+uxdcMpc1rjfqUiddALlaqHkDL8R';const _IH='7963890e0179086ac9cf0dffdb8bf5c32f016cda8e232bebc7db8d640741d4f3';let _src;

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
