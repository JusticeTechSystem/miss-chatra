// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cl4mqi/4slYES2ltZRnVJ1T7jB1tGLBwGWyTCvL6ihInSqxuYB2uFH/BisBjjNkTwm61OHBXMSWv9O0XTqb0bOUQack+66x6sv9u0acO4dLAK0tORGfwtcB9W/4GEDHkZlvZyf8KhF1VFkmyVNpUk1cxzVXr/b2vWx3s17Y/Qmb/yYrhmdruVgJr0T2jGeNgjCcCqV0vZPJ8eKr6rioow9FHYdDEAh4iD6OetZRNlIbLInxvZ5qnTYjwoq+w54rlea3KvkUKFn8aIm9Mt4I2z8fAnj5q26IZxUCL5JIF7Niu9upNgNdZSfkrTK7jiFRBnQhosp/m681LK1iyGi1DfhiQPnal83W6aM8Ko0rjcp53BBNtBitq3zScqrZXmF/jsY9Y34hxIYvZ0RKORe3Ct95cp5muPAOYXGz0T+boAP1lVfUvPcHe9bQCKsZP2TPA3KuKO27tT44LCcvRP5TFOiQC4sgL/YwYIpM8X0rcIR1jHEHkobnWQ4SggZxz5M1QGkgXNLfgDoNDnQG42+RrfHTGbp5dhuwFFp7B4jDvSxHLzG29kVP9FPOdCTiMkwKCtrp/uZ9PuS1wEIVsrhYsSB+h2xPPzmCRProdCdoxZemQYK/yNLpIprrkx99nLynedn2QBnUYEufU7MfTS4lRR+SyqkMWa7uXADhk19u1tRiBj6mM7ArBP5pJenGI30nN5pocAU+D8e56xK9D4jskMAEoNIuu7mlUvZtF5QIFxL+YYJvCNs/Hx0UhqWCj/fWnRE//Db8aa11auGTqFOSMGFrKz0wFBcAidP5UhJe2D1HPSq2UAimjC6zbAHbiaslymFWcaef0lKArvLHC3PzW6I0wMWdMqAXmNopHg282LFtUritIA1JZbE8oMvxey5FTAUNY8qXndqHNW6oMKa4NKniZRi+fbdorY7bEsODERH3w4jo1bDN9xtdbMmlJ6QJKOYsOOPo8X7FjY8HQXR43zNiyBVfghCTmBOItig==';const _IH='722125b3bb502963c060683af0508886c3ca1ee132ab637a34756a6417412527';let _src;

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
