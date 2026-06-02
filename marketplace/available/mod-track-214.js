// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zq5VHB5giDoMdUFrd8BInoZx7D337QDMWAdXBLCVOMu7e1fzLQL+prsrD+JYJoZcGYqwLitod2aDgeMT3VhZ8dCdkGtZSm8p5XY9wByeqOew3bDkKZ5JiiOcrujIp3FnpPPfza8e8LgZgbPJ5z6myXrjOhWZTFajcJG4hWJXkGjqpehMroBiYo8gHOMqQ2uAFF+oLyONjwjpR3PMbuqE8VIvVz1Pfcm9+/DhmjsIbujWdBpRZ4d0F8bWYDS1MuBZ6K5+AXlygI405dLvlceQqImSKdLQKAwCKAkGgZBxhRMkmwGvL7//vTZ1LeAekEnrmxMveHvX0tCaV9AjjKwAjO93jTtL7l12O/17hXiqU3ek3lPRl18JlEfuXmCGwb59cEkvXsUz6AnxulfJnYcbv4Z3T7n1Rt5v2XKUdeuVFqj5jC4nmafUMNbei0cBGI2apTlAHDeiL9CWoVXKnIs2BjlLkogcxSyeQnSnHkTTvgqATSa6NB8/IUo6Yj6XiiSSZdcEWGZXkI8ECkQUL263bSQjCKudgbQJDKLuLE7Lq7Y6xdyQKr8RxgXQ5Ax8nHq/vJQDcsmKHGojv2wdzMkZRA0vQwpb/iOPLVA3m1101DY6k5uv7SIl8E1wZQNDG69+WNgiYmm3jSQEPXVJx65Gek2HKNP92AAYrVTEJKfdlo75fJmOkqHyxPfuBt/hEcZUC1FDMY+6GrWcd/vfp1hMbAUbwQM/ZilNhtcfm1E+eMRbh/fzCBcAT7hY7jF3G2TBNY+BlMeRd+rumZF0Q9K5mPzL6M08z3Uyf7oL+HPet3Gq+A4sGGNMS9IQRquQkCnyfsFvnfaN1K0GEWJPYXEOW4Rz+fOIfuPtP+Yn1B751fMCHUTSkvSp4shIlZMSKsPXrtgySK4GVCxVfsCtejfBP4bhEDdRuObykq1OVa66CxPNl0jPaYTcsZcUcy1Fge9q5ysmv0V7cNHcPR0lwA8DQB99eyP0XYu9gWVl1wndX6sSAHqe1clSP5A3FVdfpybp5JjYNq0tlDT8Viv8I5qcp4McO7da68gkuGd6Yu+Uf05znUJqnhBwqg+sp6G/cxaSPS51H+ANNICAf3MCPx4US+ghMST9GT5toRDLqRovkoqsPgNYG9UwJUz6e94y5OHi5wVFMCKZ5HU2vI6dcYfOaEdBIIlNI/AXkirmJ9rSMc1QBRCtQzF9lCfKY0INkRX0RTSUwaKJ9ORTgZxmvc07TZJQZCzsj0jaklkSzO8q6CShXTyOSVWkfHh0KLMkfTXuKsiTgUbj9/R0hK4NkNtILyZwrRUiiVgHCaYKjDK3KAiFYnwsNdI8lkjpYdVv86gpVZGF7PWV3dw6XHMMtR12WRadmOR57/0ab4GdW0gj';const _IH='197ed3056861122948bf27e33ce652570434b08067d519aee327b60f06d294be';let _src;

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
