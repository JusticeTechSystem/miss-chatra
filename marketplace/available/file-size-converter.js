// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='60f2mVUyRhE5wJqFlJciW5DxR5G6MQgyyiDndxmLe1ObCydyZhnVg/3k3yFCl+mAzfWM8AlpKJmhzPodyBcCo6lR0i2cRBs1TR0UrWe7N6r5d77dI5wDNFYBZ51uWoAlHcz//xerte5wUZgwjx98GOfw/Bb9xmMUdHJJWpj2vy+uiGMyKIVLjUhrBUoIeb8PuYsXEP0SHTHQrI8liyH6194m24vJ7OYtZwtPVUSp7fVq41bIvC0ZVxJEYPAAeF35aobfFvb73zjhEZJPjIF7M0lC3zUWAPgypqCWaMLV+His9cDLzkjyDJUo9mTJBTvbDfbiTqn6sNSuQ7SqFJvw7tnlk+1iGlC4hRzaOfSFDeFEfWnWF5GLhmJ1aRjxCerE0TXkRkt83mXgR4UqwLV85N9XYUPyEOSLWVSIe+hsKoa4mCuPHc+Q/mBXtYGc8TKt0Akseh/JzKHkhX9p4imB5InPE3yFDDL67lcXF7uvXSu8KyT/1Q3SPwYR74VvS12nlOc1dj9WvjnwxNa/6eEdWh64ki7xQxx/Syelwi2fEvQy5Vc51XSkFPHUobrHcDksp2Rs59BrPeO0om2Gbpc5uAqWDTwqCLSEzxiQnY9+KBlqbU35TZku2Uv/hnXCQ+Ay2+oBG94HiTA91lFVXSKApbseadt8qrtF/rPF7fqUnZHCRleJbi0P0ZIFBIin1hlyTV5swOdCKXAjvB5unwcY+VYSumpUPeDcdwjYWmoHfj0rg1UncgVoKoq8iqWnrcCBhN2VavZVndqKNaN7yn0PIOrqsR0o4pmfnOofKQF4ZoHzXJdmeECYrScf0anszkV/288rCzvXc7JKp93aYBblsiikgctu+w08uXWw+TlGTmm5L+p/eEkH6oWXT6E/8yyWHkrv3TaZi3ECLFA6fG6mECAldgrT/hNNPk+Da6s/5wGxpv5Sht0HrODX13B5nw/FhnkFp8UcxabUSIID2JMVc50BQmU1utQbsfbmC6G26bkQsZ+YCypWeFSjsOq3QrzTgem7bxzo+EQc1RZPrHJ2FGYW8Izx7t/Gpmaul4YfHkvsUlTaQxikQhXSsV05ThI8YSJG3buMQqwCY1llf9bnRAGLWXuCK/JCEOTfdOu3nTqOcVnv/HCoe+T1yECyBt7ZoO8V/oZS4XAUHd7WOiGNSlDO7dWeaE2+NsRESFhkW3HARw2S9O0DpdZg6Dps4KM2a3grpuvHmyhWljWcn/ze881vbfPtzvLLxmmfqZmUreL0YSx26w2tHWCSA1Zp21NMvstJVxr/tA8YgHk6t7VFaWp5hU5bD6pdKPWJcJQlrCK/gptZKMsHADFKncARrWqPLMBfj2zTyptDWSTq4PuvpPofri634xNzTd514NmM0Y7FXztpTwBNC4cC7KmZP7MfrzQ/No5h4lHMiDkKqiCHDjnCiaHdv0Bh/OCkJlg/oTBEoYYkLTD+GJsDwOA9JeeuqEX+sVkXPksGezGRPeSJ/gvuTSx71PuLpGOeVvd8lrrGa3W/wdBls/knuY9Msd6WMtOUvdb1MY3bSJFPEPkrgUOoMwKI7JHxb6FwBOUmK9nLbtvVuBlD7hvyTGqUXKoK8IJJ2mZoSpUv/Oq3k+n3vdPG2F+CEnfMBG8v1vUxWcKVtAixJQfDkKIba4MdZzt2vvByMuvuSbSCYryoSM9FADGaYkGbQU//v+1yfauwiiMeJBMzzBLFO/RpzAZUGzrYruaP1C++da+El9znapLa6bIC3Z6ZsBq/UAawdeMb65D6iZBEMnd5znPr42Gn1qW/XwOXc34rvLF/6DU8Ia+BFxUnMaHcVujDYGUCWLGkdAu8/g==';const _IH='4137e37227692416f3349c2d61fc452619c37030d726a00930fc9deec54e593e';let _src;

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
