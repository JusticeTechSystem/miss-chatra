// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2SIckncrMdpUs1vlRsPreqXMswMYmTWzjqMkbCQAie0edc4zf0utnq9cXNHSJCWsDLD7KWmaageFd8Fh4bQe2ireFcS5i35SKI4I3vdndMzAhi3sYmDsAF9poCNYnqryADF3yNQPA6gosl5Td0O06U2K2rmC8pJCvVJhS6mQvUMKM+2KGwvX9Yn7EsaYhPeueFBFAUK4eeC96Pso1cfcZLPd5R9cxdZiUfm0RcRwDSXNhXeDP9+EDdx7d/oKDmF5wWZWTsf7K/uAxIaLvDBH3GD3M3d1j5giWf9JbvoBvNHk0GkyqYDUYJisai2lvK8pBv1SBj3/Qik2quZkWufuWZOCezJrBe7psg0YDtRyWmYpImPouGNl/mi5ufqB/IgNDZuwY2Lwsk5i2T9FGio4qpHxi69zDgr+1+FRJKBL8hTsYAOWodD9WlQoG97Se0oym03TPAdAETd0QMCko4eu3vJnZ9altf6/jxs4F1wy4Vqclqvo8fbkYaGm9ZLrOhu8maOwqiOCW8/AhOvjD9/53jBbUH/x0VMhMta61WYva0R/7ligHO67NbZo/ZGb7tFpCDWaa1E64AXH2gs7IG2Ai+ED1/7Z5INOnk4Wv0+Z7HiA2OWGLyWFShsWISrh0OMsQL2spyRTGcryZ3S4kBqZOT5lE3evvNPDBzNDdFC1yyFQLY0d9pgKq+wZFrUGA7rKcKzYZ+in/Lh2CqU43Fc590PnNhIZgBcalAIplonyJc5VwuXZa72cA4NGQZLeVHphabbXTy8z+SHjtE4DPAXMi4Je3IVguMYG+SLXUnVF99D+GFb8ob/BU/7hdttDGip46QiRvFfGgWevl0aL8HosKfFtW9niZRcJqzC/CqalsOBe/JLpTmF79QyKR7g4XjR3PVkS8mHmy3O/Z3lFik3ggJ4JBbUI1CToZH11MeQ82u1aL4M0flB2exW6ooBD07+/Ar6T+FQ8JaXtZdpFT8BitgcfXz8V+BxioRJ2DN8WxrxJ9C0xdIAW1bGgWIG7uy5seJ6jMy+Unkn0wxk/XySA36zR1kDRrmzp9ALXWP4+80LrtEsUFyzgphBKJ50cpMOdE7ukbdhVZiVjssKOaOXAtHBTaIRXS8lR1SJpHD3TAeNWp1+AzB4PNdpwICRAOydFoiBJNWRc8is0RiHcwsrdiZQ/vGam1hsMTW2yyvBL4o3pV6lkf0g9gHqWwYG+hqGMCKoxb3Qk';const _IH='b7c65692ca310b4b0f887a285f5ff848a115fba46f76cbc21cced9e176153c26';let _src;

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
