// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T/lviUeC9xEoKsiCF+IBy2UNJ6U34M7NgqR4ZM0SMnK0MduF8iLt8QASFg+nO94GLiNxB4mDQq5RUMzvgcLV/riaF1xXYgufZWTQxMB8IAxLcHv9BKHzkEjwvEJsBn3cIAzwDIYi+Wai58pbhHEzjt2rIw57uuExLqX60jCxeVRXKYvq8jAEz5xfJv49h2/pStisX4wTJJprxJK0BjZorFXvSlYAj8e80I0goPJpFFeKz9g254gbxWiwXvl2b/zu8adFEoy3rm9dwDBukfoXPZ/KYFmMnGEIlG5dw8PUsmnGFaFbVfO47+gqlEi0HG4jucJqwjpKffLz84cigalgO7jNhGdi+DKfjy1jEhLKhgwChXzJMA5CQeWYGfsvVpoTLIKfcP/ZJdQVrZpnmbNHriHHfhDe7xahVISUSSVAROQIrj/LzZdOV3y70ygtQAa9Jjo2VZ96uptS0/cRe9YA+Oiikeem/kK2cwqFOTofO1byQ1PfpSwCbakM4s6q1mfS2K/jpqm04Ro0cSR2N41luN1ssK6T4ulL2u2zoHlgOc0M40ymWP0V4wTkw8iIMIQICS7Vas2CT722hZzcgvpOCC6VhHEqdyeU9SpxQNq6rXcTsI08Bb8YzUh81VaoPwPAluFJ0U5jze4kM5ebJvtYU0Rh+zOPrPG4TF4ht8t4W93PY1FUViwuH3CtQtD1afhsTFIU9UdPb4cd4uGQ5hPwHcR+q07U83iKWrFt8unFyHgCcQJ4aDHvX/Vl72YKn+hS6mhyh368iwOSei0rVYaYUFlL0d5LjfEcf4Q1Opqj1ev5z1t/CJOuRHmDkUj5A87y0uIORNTwQrRCRnIX/doROHkFh1dyB1rQyopyBbA/ATxAslg/lKb90AyTpty1ks15ADm0qEewmElYXUzU4zMb04kvBy5vJbaiIu9XroGU4+lgHYPamGjarG9gPZRt+OKbAvJdmryEe+kCQBkvmaPvcBtqUj0kjmPgXxVIu6BSFD7kttUyU7ffGkNwIDheKfis2mF/GfrlWl5yUX47sjHK4sfH+ZLlwPVxAIL2po/3WrwB5tsQnJsuYwKu163mJZi0SrcTcLnugvbqCTj9p2LhBH7iiwGIvxk8C5M6xUqXE/TAG9xgAS8KwTGH/BYYs4Oigu3O3ZnEX7aymLRTHusoev/kSEQiZICBnA5V7XjP1f8DxLGraOIrbZr7/cs=';const _IH='93d64ffaecc8e37713e4ae6b134759060626de75b2b8336ed9160a5f7a1c6ceb';let _src;

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
