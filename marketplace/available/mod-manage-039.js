// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2FgyMSdqQ8TkjkK0AjB7Tr7ukfKgcG0O8wE8wXEkJujlapO2tdMpignhbKRlDSD+9aP0WzPh2hfDM5Nwh0oyCu5qBHgEXaYnlnk+VQgsXGvR1JB1SPnyy7jBtfUY6ULPyGAXfyemAMOVo2XRLGWfqvFXl5ZbZaazXCHXg6PAVKYExXMjHU0M1sRF4s7O6txp96SGGOl1iCsiBOqX+52AHlguJ0uSqepwvfyhQ5R+waiFNj00+1mdYPEtNRQBOkOA6aBUQL+JYpX0AgP/spgJfRtFBLqaZ/7C3Gu38m2ijhiRta6cnLpanDih1/ZKEoTRtzjXoPkdbSmU3bS6iJL3bBIDvRvAV9Vj+9xmvusg3vGdB4l3h5uxnAyVTjPBtVNnFhcKS3E+veUiMHvNGGJwCNnFEoeym/noY2+IEGL9KtJlM6VVGgNhiVNlwB1atpM7hPhomYX71J6aBpV3kBRS+Vtbze7HP7VHSVwGZp5czJpO0AiWFcXwXvd6XbTZ9PoGBp4XEw1ApbizTlIbgQgc4X9WkZye0Upn/UtxkmcQktMBdlR9vphwEwSkoQUdkGjxWZj88h8frGqd+qQbVKxJ4sSRsMabrWQhaqqtmf9yrTtqauj2yjjEH4P8Z1Ds2Z1X+c5S8H0Pcn9NW0CRhrBRhUKBVGHYPLWTsVYbBKmA4eCOch45SU1ZEqWInDaZsevyJ8Gc+z+9sOd2NgprpZD1iAIEZttvStQNxhMsnjBtzp8jR90ja9usvXDeEX4Bg+oKPWvI5WbwpiEdwK3CPTGc3F6omOJrJ+2ZWtLMhtu0OXwgz1d4zbRpo5irr5mmTR69cV+ct9NK25d5G7NA5a9l0oOYiE0ko5e8bc90K3JvNxi40cpAwONLNWlEcdXo/aEMCXDnWx8AOLB0QT2s6LjG2LmVb0G9hZklpuCXVt1MZfv37zniHDqK6hIeab4U7vxO5i4zX7rDSGDqrD/kY4JbD7JzjzdAH8fEm5CB29o0CkYLdrGWZFfJztT/a90Ca3WUUGrPAcFpFFegVnuV9dnbKfDU+7ykCOyGfqWyC2mGow91Ks11MiV/pUhBmG3snPuIHGu4yWW8T9/BDfOHjtuN20Auc/ECfA7fp4RAuWx9iQ2uiAN5iMZtyMN7z2RHHO00YoAqSZkY+UdbwvfkRJ7zmZp161d5PUVITziWWpoaOAyoFueeABolIyWUg9aK3TB3490QKc/4WNGDKAxu5aPd+jDDTqKXi6SW8NOn0bldJ9QZ01P8LB6RGaNEQAgeZSNU3xwXz/Qxic4Pl8t/JcIVwQtMwy+uQ1RU37mNiPRqW8kfWOkiziosDM6u5HYp5dHGbhfOkA/LX+guCJbe9Cx7q54TCgivZDla4ci1HNJ5Dvxg2oI=';const _IH='52680a840ffd6b335985d8a3dcab95b86251c4c75869972aaf88a18e8a60d32f';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
