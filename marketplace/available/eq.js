// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dMvgTBDd6JrbXbkGZAP7dAj8aht5WxOZCCh5ZYeRvp3ooWU2h0jHRH3Vl5orf5WyB0Auk2Vp0bTHKSKukcXcUbPILrIn7bdW4Q5KFIo0RJKxmxZbI12En+Lme/WPwbHy/GiF3vx+a1YHVHZGbdUampg18lUQ8KcF6AeLIfnjBIvK+pJLHh1T8eTNB15fFFmQI5OqlMtj98AA3iWO2mzXpWzNcDeRPKdQHOCl5ClQFeqsp+U/j+rEmcjlHnFfXviD8Mr4IQe1mh9vXkWPJTio9qxXf+p/cO71/xPAT6oFOHFbPY1sAt4dTqsGjC8uAkaO+pfA0rG1P7f0nKt61QqFBkAHOi5abZAOUMNk7rv2qP1DZKQWfuxRvx0Swq+d2U3y1t4fN7NLM7LmC1t84CJNWbodQo3XNEFde6mMskI/2eWHynHfUedW5reNGn3oy/zvPRL1UeBIJt/iTOMuMPjkFY2dVjo6CsuWBYXh6Pe6vPpaUQSwNLdvtGmXqBxa5mFHhnsfIWq+p3QBKotmZfBwVNpXGCwxu0kWiGNp6xfNUtRMVtcHUt6KW9x9dO8OSxBvxTKQK7Q4jENvv1T3PoFmdpovsscT3Z/7ocrHdywrygAb6l/jPtWORjVqoeXxQMnhS9vxB2CMs8dLO3LLId+dyhNfmoLPPzxeOPs1paTKv/FrqrK0Imo4hMxl442ipMpI9w6/bZIBIrJudSEFphVkK3ujux5484LqOmImOi2QewOhHoThYuzSnJQXa8/0Q0TYH66pH2MlJLz5Hx7kv1AJku37ynASCxLXc0KfjyIkICYCsJmUTzkuj4Vd7FQvHFWZBx7Pi2yoFXNlvgO0wK4GL4ff89FhsmZXFspf4PHURLi4BrHN8rsBNpx51fBwWF78mWAppjoJCNXITDzg+Q8vTN+wo7JBROVrHEKhORWf6pdyUHBcI2f4rPxEAU655cVbRTZpYmG7M6m2SlBYRSgZGf1Kc8BBIEx1YYD0Br067z9vSyBC+Pz2NBt0Wx0JwgqtWvuRBelelx83UclK92tycK9hxi0F+JAPgLD9AC2eOKqctfwi1R0WHnQNP69H6uMNIxwiopsGytRjr8cMsjAdiJOPGyDVVMln5tfcc33On/6QizXTGHgoXFB08eASOAJ8S685ClxabFBJWeiRb7j+EfiDDTUSjFzK5iBF7bjrboln';const _IH='25fca89210e8d7f31c963e15248ce3771bd483bbff963764fd9d28e8d03a2937';let _src;

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
