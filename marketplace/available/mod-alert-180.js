// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSy2kV2A5n3tuY3NpM0jr0/X//q6s88e+sbnmhhHXA/aW+jXD8lZmh02VuOK07Ch3I+Uu86X4AmnWzLL9ES3HS0ulSSTWAjVc/DsQ7RIvA3ZpiUyaoviLLXfTJWkxwqhBR67/EWe29ES7DW0vSYmg7d6BHQcxbUyNcs4hmEjfrP0Lzw56kFNIsOtoK+6SDtSvbis944Gvf5Ham2i94IYqzdK3VkoXzJC0joYshqvsPRUtSJt/LZC1UDEJudWvTJ56rjTpZwas1pTsoNZrhX52sRcUfZHDjvk/zvaW4hd7fg8+C8mFSotBzU5orvIXdQwqa7RT8mOU2W5stT27KCSXvH/xIUGpPsXLAdHEuWB998SxIvzUgsIc6Iy8h6ab89u4DMZluLYnSpZwx+ePun+tVbCMymrz2LLYez8XjmAcPpIn1jleDnN/0rk8cj2VwAxC/XYTC/9Ma0X0IPzqsW2fp8tRnWJX8Ne7ijhtJj0q2tqFcgEqJ78UhTdDmmjJ1QmENUkyIwiWguQSAd53IHmDqiWGDf5NS5jZrIhLlsq3pLvlBM3lvRfnq5lG9kBvxhXNWG66eHFOJvAadELaHSUIqfLKt2ZirlVfklVCsELStbUS3Z7NtigIalHRpbt+4Vs8SIsX/o6VCwWHE7Q+zcxuAtwgOeWdUIxVkzbfZ2jFKlCVL3kBiYGIHycmku/NLv9dhMmQde2oVSKL/oIybRtVIKwqvNzZ5ZyFqqj69ut0GC+NYSX7dx/zxiD8Q/2raqeKHDkUbsKN63rvjHGMGuZWBissg/Ala479rvj8lygDN9eKHe5VwBEspRV0EdjsupzQ6s+n3V+h0TrHF0UkkOL0cEBi1M9KqzRp2AXwAzDOUoO049ZIMeP6Ct7dLQmkApk7iaV/YUM4/T8H1z+MlryQ0FIE1SbZ4yK3V/zL5WCfxRDJXqDNbR+63ROMYk/+/LBG3jGs8icj/SutapanKVtgJM6yZ5mRTdB3Q6ZFpIlvR3AOab/CiMY+Ew86IzETrchWBZjHi5rjuB+4sbBHVD1C3s5JMa2Qn2GY9A5oHEFH+Rp9pRLzJ0wc+oGtV+OCc8EMZ5FbVrGVV8XU2NIcrtRibp1dKPUcZ/1zkbAcvI9lOWpyw/E4DIPW5oOzCwjZaEM0TqN7slpDsoJJnq6j5rewz5wqZzIp2iJkrQ7szudGqtEYs5p+D0Af0WMUMmPkI0wbQW0FcA1aWVIOnWMc6a7Y76C6uJnGey20cHgBOjbjxNUEbrBpqntnFdv+ghKSCFwc4sPjEuGwJ/q4bUDFO1nC0aBqVjB6M0Wsh2UNbn8oYzjxdE3kCWq85srLGfOlGp6Y6Li3mAqHVaeAgq4B9AJoDTblie5tlEMYVvhf4=';const _IH='46108a9490f0f521e62d08fd20762286afe8d83091e6b192094711eaabe2d53b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
