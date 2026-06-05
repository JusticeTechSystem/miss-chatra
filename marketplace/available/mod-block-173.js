// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5lFLf+DhI9Ca5DxV5Eypfu3tOacGs31MEk+eaDLcs8QGlWp+FSXElkSpELo18hSIjqb0GjY0XmTg+XEyH3TKbncF0ISoaZ6cFN7bpcGMPNZwR8PHmhszMvmA5m5fyWbl5Ki+Nl9pC0S5yXIwq/BKaNrZ+HYlWhfKm2aqaY/BI4Tv4/vdz8d/rewlsF5G/VTTsxY6TLMDFrBMcfzbhSLOhOGCRmzTt1mpo6Rqb1pyul6LktfrDhL2U26OnbqxuSSwHLAf5R4fCLED2yrX/faXur5R0TO66Ux3X+phTJqz910hVjR4GeAwo4sFdZD1e0lBVdY8nRBlBedbp4GacEgolbRQJQ5nO6Q+torIMQnOtFIqHQI+tkI8ymXRul6jQ7qz2lZrODhO9zEMrGJHOYxkBCJ1TIETTCvqfWhAJk4oWR9NnHwPMygea2qcqH6CLC0t12lzaVpcqstYWp9cWMf5CMiIn0DkCKCcdUIpLaNP622crYcCOf3KKSVE7Wx4CpI3NAWKbb53i7ATyNlSl+sF22kuzhId1zh4J/GbCLhoG52xyw8pKj33OlmgiJjdYgT1pTf3WtTh3WVCVVF559ifno+xcEBXxofZzIyfCyGiORRHRbAWewIyHc03bN4GvqXwt91BAPmqB/nAh5HsYfGRGlgW4dlSpZyKxjTVKElYm+S1UG6qkY3TvJ5BR82kwZ0f/9fvWp9IY/drsZR/hWcQrztof2EHq6h48Eahf4GRoSIKrOF73MxX7vOoos3PGexZJOQS6ovuUsjBJ2CPA7xyiz9kpb1rkkcEUACHOSW9uKU2NsyUiL/PeY41gF4NDKOcMY7nGwievbKYXQMLtqk7SkwJrtPwL1xf4vr84Yvmak7nyOJo0rx6wXWQOr3rd52HUK7owj1a9koD9jJxECglC1vef79tKBGhy60tSX33AWc6Uwy4ED9lmHq0I2sJp97oaaCnG85j2yibgbEZYXNcv8GHAhnNC/rVVFDqaO8UVpAxhVVFTOQ5wWJD9/GxJorX0ybv9NmSFJ91cRZEkAHKWY0VUWEPRuTSE8OMsGgHbujyrXedRuB25GQAoTNwruBESidr6WOQv1l4auP1T31eaNdYlV2MqjfyxBJf6XkpWu/gxaERQ6rj/X4Hyf5T/0gvksL0MHWY0dppUUFiuJG1fcUzXiG0H0S4khIUSYQj2TU8jZcJCK/wJZGAEqcQkt8vc79u614faDzx4yJhfHRO35DJjB62gIDOgHBGJnH1bDtnfaoamC5CYqwBHoONNTLfiFCVRGgHIhTEPrdYeJwLHfu04hEO3GGBT2O7jcaWlCa0b8bz9wHhkpcq9inbAqckrhXXjTAX1WnQgje1YCuz0szJcXHl0v7bHVER7keP';const _IH='94935e9a6cd1aa0bf785b4cd6fafb323458a45f9963e21449a40e8db1295b671';let _src;

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
