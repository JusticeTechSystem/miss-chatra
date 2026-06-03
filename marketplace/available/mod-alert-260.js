// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wTRHCJSytf75Uj4xHJAo2r2OHS9cVI0vcSRNogTqsaFi8FqQXMBd3L+/WrNUjOiAeLI4pWb6dEkiN/4JAGo6DsTld0MOeJ+OiBeIMZyh9FiOd0vE1Lll56Hrdv4oDRTFTvVtiIKTbVc9XRkWI11nSY4fR6kfjHczWQxF76stoE8pcLKz00dNtjKr9rlHAM/LKKWRlAJQeELR3wDoZ9nKZqOYCf8bnuFWwVcWz8kv3dtIxTfMgWMjUkGF7giFFjDX4UXvCzDM7Bl1jmQtd4lTTAWb/WzkaIl0U2vo9dqamIbQbthr/HE/SSzeyqZf7ukMllqzphbymQZm56vlef3wzxww/GrqKSbY3ongQ7sTQCT4HzWM/kDfLSVbXOvzf/mlZIaA8bmLGqjQMHIswiuFTnDRdCNbtHRs050o7nYgHxOe9WTVO+3OYhv4x+hNHePVTSdWp/53gUkjPzxZx9VBsm7GuJZ9zabLlT5zJkWWUYTSTlFX9YEmd6qyi02KpigSQt0cHwmiyJU+JZjfeO2F1QCJ8gS9Cer4k3neqJ6Q6MUW7VYKo40d1x5Idbq4BPihfSXvCv4SNH0k7rk3MlhOeFfIlldo7L3hC2PO1K5RSgvOTknDZJOoNu5xlREr6jrw6AZMQXK9SGwCguZ4l5TBFNicFJALW1skHnnt1qXfXAMZvoYsUrTwB2rLySAQ5r/VluBOqGwtSnrMFNeEL8fyHpuyReViRUE6wPa+uXox+Id42vvnkVsxKEWBrzJo8fRVt5r5QRwXbIkIdsxKLjGPS4jlzVk24+A+XGXpR478NPeP9v/DTuA8YEBjbE67HOuICKsPYUEjL+PH0Y4JD4iu4wVjQHQO3+uy3IdUC5PpVMn7lwhwrYSJYHEXjmYqt92By171A+7vPkP/r3XPJSjw77lnDkN3fbZ9Ip6cOPGgBWlUi4VwJqRFoNtVMlmHgfkXh9B+7VomXZ/Uz3XhrZsP4kbnIsi5Wp8YUYeeWymGogKlOGWoKZUGqQ6wCI1HKHlsPfn9c63QusCF3fUiE+eXhlTikfhN2DrpQ2papLlvqaUYF72+rmupIzRjJ/4/fcwLdFLcpzrUJFjaWqiAxtOj0+3Ho+8FXylCHgpnjkzIcwSpJ1mFJ0Qr3+UXLgUDI7qZQN8JhTxhVe1cE1PNtG7rzVz6qfCiiSqUMQ8ScTADlQ3UCH2q+6IjyHB5YUq9BCPpWroBbvwjtL47KnGia4P1EXSTq2Llkwl2fmJPLL0qPY7DGBJHBpC3iEGFJUYjpDxWCVyfZUqWMLjqyLOHezmhJmsqAWTbkuwEJv0MElZXZVoXY1iU652AwvcbIb4OvJT1xeMTvVNIDzlnLIOUofg5CTHyAI//T8NVNzCSo3OP';const _IH='7bd99bd774c16b5e7f8f3f5b0973aeb9207b4cc0e2e7d5d73e867382efaf6aa2';let _src;

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
