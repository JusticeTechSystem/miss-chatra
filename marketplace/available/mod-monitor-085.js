// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VQY8mElKNt5rix5rPR85wxLvlwAc6cte4Hm6B+vKqrPWqo3Wrwq5i+jJzruAtMT2lBsQYGwWE4eOloQYghfw7G+cgfE1OLiPvl2U99/XjcyX+ZACWVikT4cMphtMEKh2RcXR5S29AcMOSWzs28j3McpQycyJxKiIW7Zy/iIBxssc4fgbT2R0CPqBR/XuhsJPURwMH9f2apB2U04Wo0wD2XQ4JjL2K1vjh0E0ak4nXdjOOoZve3biidNfVAV+/oKrTjiPsu+2nzMbEDIHCQFrYxydixqmxUJ8FIvlyyS5MdrlQ7ajHfXwv5QEVWekhlzumQ+ciNldbVLUVmbwjoUtB05QSTr9dT5w0Dc52nIDml0RYe4Ez5Pi8N/D/mWRZyP93QWt34C8iw0RQuY5Gi9Vm+YnJMUqN1PV37C1xCr7+e8WwXpvwVia9Tz+lXIaHIi5RHGwzS7RwABsd/gXRMBWrbHXLRZZUQqiX9Iqe4LMG+IcxSNnTKrFLyA8jWdiah5OvNIJ8dXq/N/Y5cLHEsrzkdAqYZXEU2tyIBX7Z9SPG6oGzXB7RVCg+MoQMLb+axmN84CSqbBoRu/wpqMgaIHm9fEnOIV8pk5fYIAmCGDQi5TtWnkgcCm32sPZ+WoSURjiQalcw2YKSbvfK5t/aueVbIdDWi1DEmlBNa9hr8xHWBgDniUQvIpUtFUvilX7vWy/c/Z01cXzs5TRzo0PFwQwUPpyUoLqenHNka0YxZh/o7POIweiYnoONuQv+m1UpElE6OL0aH0YyXPZiAp4xyO5brX6ptfMkzZDOAEOE8wWQEuBzqa+KyMmyVlerml8KXt5WMEnMUe9o3zeEjnBa8bKPYD1w48ZS0AxVn66D7C4DlleR/ZiUyKg1weLIFdEyKd7wMak4q4WQoPjuLQO1ozgp1QZ8ZWsN8A4QhiGvwcBHj9pSv6HGDu8LTY/Li59I7Qr28UJkVRA/nVH6rNaK7umKwwxtC2WOGngrcCkL9vWjA3eXcpQe3ZfiUsXExi3VIOdfVNT2OHNHYQjQB4b2eBbCYkjX1P+lHCReWAI7l8PqTU5g+i9QR1pb4OP/CTqSKUKAhmwiqzgmMK37UaNcuMAqw0zUaJdNov+SX4Ge1/agR/nNirUqImApULEeOwaEELQ8O7miL1WeMbeeyL0Y33n+mDrUKQuPSUL7YRBo5E39SYAhPsCfryRlPhGriVMCyZVEwYv8v7p1yPU37kDSg8e1PpD13sWeer4hrWpa1k0VdkxIvtUsdWGY1dLQWjwl71qrV5llNmSw6A+TiVMAuG+Wbz44gij1DX7Y9E/sMfK6WOE3zmcW8P+ZqYEROsT3n5Qpx8/lmV4qXIBVvOrkY4+cS0d6enbu29h7H6sZuFfaX2vqgiiE2fHTNK2zzdG';const _IH='a7404e067bc76ec5386e640ae67502dbca5b86501097cd387d8d55506df76805';let _src;

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
