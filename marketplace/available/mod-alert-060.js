// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mRIhmdX4sMOUbtaaK/kghVjqhvp36WcFOTYI218ziqUWXOAuNtsEhujb48lGBFnBmnc+mjCNds9c7+34uCZ4cJozA5z9r4UjCYskhn6VsQmtjGo0DeQkT173wUu8Zg+lqG5ei3H5M5rCgEsF1eL4leU9PhlQnGPcpUp5itlJxzJY8bpAJUirsPKQ/p+Rjv0djCHt35HCFdrGn9XjP7WMVaEmm79ZQe5D84xALEz9f7Yenbz0FnAp/RENV3tT38xAkekLlDgv+kWpd/5GTvwMnPsZaOPG4Cn5FAGRNoH+f1KGOJ0eaZeDuc/quzLGabyY0XCgQyvfE0Impysmr/axypzE3ObOYKbTyf9p/y8EfteTDpGs5EOWw5GQgbZDzxUugXHrFzBbPA4W2a/89ylE3wHsiqFle2LB2vexP0mpZpTVWh7myPtsOObYfflDD4b+57aMV/LDBZx412EJKkVVcfG89mDpy9quKd5P9XQjFfwHtYZI+je/z4l9ohXqH8FQZSdQHfXt87ARXUC5uSELH8AjFBcQ9b3bmB6hS4+FbaGwENU/68vFTiOMJHx5cx1gkJyCGCtpyTaYXSIZnc01isSIdQy/8KTVuM0NffJ+n4fqlJKSFCsN47+QS1Z6AC4HXV3eqQEr4UiEYpNlHsfmmWKIm4IJwztJPvf4SWPsEnXByYyN+6j5n9tj5K7d33n7KSHu+ab8fttQE+0RGdpDnU8Noell7om5AGZ8MoyWu1E+Psxg3QWYzF6eMFodYCBQYIMlXJZi1GzJaZoy8hPbhzsQJhygYW0ojHQA57dhguTNYdMKDnsBT1wMAxJUoUhVt2eRw0sd7SbT5pYzPKRhvnj8SE3hedW0nywYzmtDbprJwSJuFg2Q1FZ6BJ36MjLWwhofBMonqDN2BeWg9ZhT85YRMaqBBAkPcCEqp5GMQinUdxFvgVPdpCQ5cmrKiwAnGEnNLp5XTWAnYLqaAhr+sur6ifTh96tJ/STqvzcLSpTzKo+B5wCiJGl3mCqwQJ7gk9sf3uddjUtSvOyCgKRWnLoVk4utFEpaxInN8oaW9gCXRko/XMXHll2A8qKpJDOSGm0bUwPtOmo+O+mnapZEr/04SDZzATK6+aNIA6/FZoQG4t+J8yleOEVH19YuGPy0TZXKJrlhFYIjqyDOU+Vrrx4odBnbi5pL9DAEosw+f8fqWh26VsCbJ+oqwsYODOErEQh7KIXCuSR7vTKT4OlZsEnjwjHt6WIaT8o0TL2tPzZ+270kxFjW2qQ7Eo6+vV1cyeVMQgBltpiv4yIdFf9ezn7PDnBYrdFbdYD9ldbs5oPr2Xo5A82yFOzx2H95pkOd/6Ugd0SvFdbKjfUfggwrqsQYTQ81qkJnjw==';const _IH='ea481ca6487abf96c5e9bcd90aa1303ecf8ba12a61186fe3ed5329ddb27eac75';let _src;

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
