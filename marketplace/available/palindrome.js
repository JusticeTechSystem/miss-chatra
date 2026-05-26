// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hV8yiGdqdg2PXcKsdk9p95u6slFeFWIj1BnaZoYVOkYD8buKrh0yn6U47XWmh5Vh47/Z4dZjjTeErzghJZbVSWYVFdUz2LEYI/V5/OoiF7nH4+fD3fYHre3R1NEMUP5UUMxvKXPOM50iXO7rCxvj06CAsW3ysnYMrW3812DU5VKYwc+GE/1aHmTJjFT2fN/WBhCA9RKSPoMnM5nbLvGy8eyO3rkypnQQD20y+6Sd0P9MBBdCdLwhQQJEcsjERHj6OUGR/cI5ib9paoshXuKpCbiOjo+xL4NlzY+NHXndehql9qp9+IJ49Ot/JSOpwN1ch+XkwkRk2aUBGbQsk6ITDrtC5WJHYkK6YV1y6sCzO7zgIDSdNyl8Nvm6NroRvFNSk12aX2py2Lj7POh2aBdzte2CLhjdb60FYupfBcz4dy7LfpjbYBhhDceWtBq34jBX3XfQAhQjzfF2WtTMgTBrApq5mMjzvj1dX6QcUcLRksK49WprDaIccqaxg5Fl1yJqXTK5T8H3SNmXMj5jPhKHkk6ZsE+Qxog0S6S3hjX2cnWfL8f+vItCGN57/j90B2VcQDfMX0CVplmXweTeFbsjkEWNq4i1I0M3EVlcK+Exy9VfOMSDywBGsfVYn03TVnEqvY96wFdTRAlwmqfCrptyVt0NFetznH65f6OvQhVO/ZXL3TvExPXHUpUr24kRFM32WxLM3OIEG4H3LEcFu3ZHBKyXFi6MiE7yTAjmp/jyOpKIuTmiHc+Zz1/HjCkSI0p87nJqmVZPvTk+f86uVRRYm4jU7pflCOBiR3ZwtBIu1A43RCQdwm+kPgc2pSKiqZNUfB62vibqsQNlRAHMATr1QbIwC0ZMSoukTjw0PAtSixGe9CMdtHHg9xo3Hxo7fGFlP5LhRr05Rq4OpXg7ORuX/ztJqR55HSOUZu4qJT9WUIAh8UxgaerJkTTlcLd98242Vw==';const _IH='4c1a778eb0d405691dfa09ca054acb3dbe05ef9cdc98213bb5e7654d4608650c';let _src;

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
