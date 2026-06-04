// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XUzOTJwh8nioPW2w0AL38En5ZCGaK+rBa0CUWGxg74o2QU4MkZarJAi1aLbm2VWAV2nwz41kBh6GeR0swvWa9Jrd4mr/+xkQazdSHIhVXafzHCxAe2aZGSQ2XjuIsAF6WPZ/hcjl0+9HresrZQGlXhnZbSesuvjjSOSiluqNYi4KHoSKA6w3NXAtCH/+JtTFWoh2Bclry7YdT//cADU6swXSeiC0QMePLk9d8/MQxXwpgb3O6Tm5AGojb/qiyhMpOk7c1p/r60JVm/rkqJOA281lM4lYPhLCACRRYzep4w55MkNvvBXvQCHKUSD6Ra1FFzxgicEeYEzwFqdEEn2ana7k/CUuony5qnroeHWW7Od7YWw7yJ86FVhQIr0t1A702ccZlYcJt49FeFGtVSMVx6jVmsD8AE8/Co5k8Svx7f+S+7HEq6Wpa47kXic/jL6pCfRGYLYz2FFR9HIk5FPzvL9Hf4tyoZBDe85uZ52xk87QG4DWbQR0h7IQjWfUYZDDbaGrlvnuIuqMtS4jrJsc/xJUmydOnInSzMa/uAbPCgMU4MwXm5nJc2QglT/WyEhUZCHWMlpKV9lDShtZ4ECoWilIUKIPVmWXw+VSKPtEcJ4MXMlZhgDrl78+FmUgbjFy363xos1lXIwCFNpfD/1RpfrRXRSRGu/gFSet2BA19WxxxENzMOuwMGAzpyLbrhhaslhZ0YCavdAAHtU3IOltoAB9YDb2U6S5G5QzQcqid7mXCG+ckQ6rE7yTUNIIsAyjbPBaMON6+9uG03fxaTXxyjKN6gLdhdcn/vtq4SnIyru0kgq0ovl/VlU0sgz6wIcTPvpWgqvuBuchBmCx8EoVPyI2JQBINW6J4JPyAJvA2tVDUbNdjRWlg3hHyrjEFOtd25A0RxL3Evw171RZEDfBOGZ+HY/xh/YS5Qj1PU83f0oma0qQnvNPQ2hbV9wF+6YlpUXoXEravWT/fPMj1AhlqxVojHqTtg+OysQjVqnD9K/OtC+Kz3O32FcXSMoHAPVyF5V2xNRJ8rp8L2Vzy0cO+VwhtvNjm/f79EKbgJaefXHlkhIEUlWcR1/eyl2TPigtFogQsqOmXpbfVRUk91VuPwE5JRbFayEFTJBr3rXGo08w7VrpuG3NLb5aBdS+lJaPVVTx1M3I/ibzwtPzLKgRsC5E7k1WgOKn+prhATEHQZ+VW0iFJhFso8CIaO8QfDFxN+QeuXrwQ1U0svWRFDVdFydq/g/5/qHhvbuJn0RPy7h2StFF8lEmCq/pKd2wHxQhxRYDxjj+6hKZP069VOhLPOcIyHi1V41XVhouobXZFk1ulIJi5blvNDUQpqxXD/fFydRoTjG2Hgnf+6T4DEUMa5ampkJCrFOgWnCrxgDA9hDCjiGZNiADacQsEEDRF2zV3zcWbciPYCXiNP5lUMzWklG+v0HG4mq9xC/PvS0FS1HoM5LgUThghlyaiV9AYSYFvwllkAxqZUrgN6CAQeKeMsj3a18Hzo+xfR6jkHMZ4aZ+gSlj5Voir8XmEte1KX7e5GUNnnI59BHrDDbXbbQM5iSeTDcYQG0om1EMXhAUseg05T0D/4+Y+C1ndrbqosp38D8CLQMvx06j9S6iZ5Rcgzvb';const _IH='7998ee4f22b67f27bc74b3c84e82d0d6bb01d68b01fb38aea559001e380cdb96';let _src;

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
