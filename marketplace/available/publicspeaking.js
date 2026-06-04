// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w0X5yxUiBRzDrcRiNWBF112LI0X0QLI1sTGvKcQ43ns0kve12E2DtUhnw097ojcG0GeCfFdcLaxGin7h3bpEAsEsPxRa1QViSA9J2WNEdCBIIp2Ay4zjElNKspcpWtuhwJPmrjAOoqtWmyVtpzCw50W8Z0g0vbzkmYlWQhBoDhC21hcjfN/xsIrJf2geknrPHdM2Y8kQaJTBcQ22wul/KqQHvzu6I4TP60hf78UiWGJQxQqRhC9Prw5SFsft4TpMZpofAUYjwrtptKzEJvE9bwm2Te9SemvZ8ddjt3+edCgVFnWi+dk7+r9XB+Qgd3RJETPQG2ijrCk70zOyJWCZXL+jJkLd9duz6mMSRKMainhbavxc0gTASh5+MkFAGOFsbUP1yVIiv2k/e26FpEeHE5osCJ/ivlqEgC61O+bkpIOpymaVaeanYrKazjYUi7MfG71x3i3YBYaPVk8up3aHdBvQWvbSb2Os+wW9DEGxH6vhvG1oMW5kCiuZkC0XseuvMxMYZNkwNHQVOJ+umoqry3U2SWKUqWqoVcui1EByDJR5wjXg37xEYOdy1EofUf4eyrEmunJO6G/99DDU3G+xxins2XrMj2ifOYQikA7EQRFqYojUi5T2l+ncXdXhiyfsxqw29ezrkdEBsKEhd3L82K7YN8NlL4EsLytQeJC9QraeokYesIsqdQemsS7zgnWEmrRk+VUdlfeZkBybKCPR0E5iopzmreZgbBo0EqZLhG92n4366+ebLnuHutAAtIoxBeerbjelT3yLX46s+62qLqGdN6s8an5ViZKj0ZiFjrPth9u2DwVSjb1K9MGRL/0HTnIfUn/k4MxvsfWtw3O2uwHfKPawkMJ8vBk1kgsk9PPfiaoVhtjf9WakjIM8dSuv2NQ482VqCHnd7bLBt7bsPj4DQRB3DCzXxo6HnHz4L1fSNftgaCRWFODCkMsQg2e5tT6W1tX6Idw+W2Ftw28ic3iC0WZo7BiI63khFZ8IvjjT1usZILNUYtADjY+zz/JmRtMMR+C5wPrAzHORycnwtoRE9GN1l8zWTGbk4BKE6/qQCRqslm680DPecimCJwgLEDzypbhXBMzfpI2ZwDyc+3NvZNa5sf9VLIDjXi+dBmsrzBy5Ovh4FrddqvM3hKiKK9Yx8yzrOuftYoo94eJNbwp0ec/QLvC0q4W5TnwMJ1XX5Z7hS3v0voBMsUrheIB04i+E/Iya+72tVwRG0hKI4ar/';const _IH='4c71a3b72b63c11f55f17ffc713458caf474666acd6fa3b4b994bebed9966969';let _src;

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
