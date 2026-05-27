// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UtrrYe8u6Hf/RmewQLD8LNXn15dtd9hSbV/Ng8C1Ne+/2jWn7hIoB37R7/Z+9j7QrpuA2zrwms/1ktjb+eYPoVODBF4JtCTu4P4N71YHRurADE6oXICuZ0kp0Fiaxe8xn78V9lRtQ+MmhuCk+//P2YzjC2iIimcIBbYr3fblwHoROQJ3RW8zETJOdHKp5xikVNvYC6Tp7MsGHnr9g73tSkEXS67rAVAEH90XDm4Wj9dLbIVaN/JaXSmEbuAprwSwEUTQWrZWekwJus1T/NrujLgGby2Q6xxulb4bhGjXxbMTEm5+zQHKoxe+6A63gzhQAzCy1pXpiAncTTkpGHStuWREve6fVuV75IvXWv328kzqJwFGmzWVTyOznrE5/4tggc6hWaDd4PonmWR5vN0Qph70PTNhce0pKGjH4Ffuckopd59NB9VjnvU+fi2TAxtAr2Pdo70Tic+7dBGJD2/FHA3neuZBRyubxPe+C7D+CV2mtyzF1KTmyXa4m7CK5zntckWBsaSB8qSEo3+884Wk4flsADT9F7ENv8lPfYqArq28uUrQRLiyym+y7H4t9KF1DKp9N9M3VSoZ7rXOAx/iktFxUnLPzWkS4hb5LeeCIerM1/Q8qeX96jQFjZebLgJgh2KoJ/mJJQap8ec0x6GYr/EM4C+9Cf447yEj8JOYOm1K6o5cgVA3BrJzRgST58tswjKJ6AQyIOop0QYMSTMZgG9IrIYllZWlgIKWjB0rwOoAOchydoX/hBS58ktQrI99nFqSFJxYSvrQEdbKA/jebIiyC18VbZCi7PXdSlgP9zisIW4yS/htkF+l9OY+oocKKS4QXKOFeLUsRuM3HmJsUnT20Zh8jalQR0H68zYZD62XUwtGh5e/GxjZ15Hyvi+3mZrxwmRHEyQ5U78bQTZzzdRU0iYj0Aa+2GM+B/eJvlNNsI2207q1iTsLdW+q1RGeD09A7LWLpi+NSRSQKbutjmiUqFGOIMmPOhv7+Y6KiePdfduYzVgtNywEklnUrL/CDHKLL9hrrrgWr3ZwgCkv+UPzWiQ2SaNckW3jU5ypC5E7Z3eW00tHbFc7XZcqJ085qz/1YnXEYdRnrphbnJQDePl10YPf+DpqO1J0AGmi0e4VXXGIyb0ylmj8Fqm0vZYBhmWH0p/sxlRIouR8mJNIdAluTMtX+2uRMeA5QhFunUIoYvJlWslgzPtDMP/5gje6Gb2ORmIhEgFo';const _IH='a799cd694bdf221ffcca89172b0f6d232504f49d8f9db46d94c9c8d6bf0404f3';let _src;

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
