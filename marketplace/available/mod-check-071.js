// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LewymR0tsTyx2lujxludjr2ocQ/dlwLAoTTRMaik628I5lONQIQf57nej0nrr2NCsJhVX859GMp0jyRkuofWGJbPWVJsLburKCXPvhQYRzseLnsJwqGzDG3iHpV0VqIXEecHna+7DRJJkVKkGwJO/w4Idy7XKuWxIBzT0JnbEgMVF+5tE1qh5SdJe1IJHLvFwcgZUXhrMmsX4kwvsbcJrXqG7h4Q88x8XBHk8kHl0jzzPdGuf5KoBU/ug1oEwz1b0bYiahC2OgSkQEov9cj+N9eTUVd7GyJ4z3lHAPEDc1Lhp5oLzGkUthcMtX+uNFUST2XjybPz1P+ZJXD6JDu9AJc2jz2ENBnyPAwbI/BCXa6Z7yXUAfrAA/jrh8wOlFtrbdZqCIZpj+cmJMbT5VgYp1yI4i1nXeV1H3MxItgRAk4rmw7EBSRXVFcJ+l3SShZjzkgM4Ebh7mImForVRINHXAn34fGHYqRe8vo7OaBZb+0B8pHMacMKy7UE7PGU7CJQDLAI6qjcxIJMdeg1AkZwjbSRkj0rEHj9k+EJdaEpIgFYfNRM4hVWWAoDJqaMATnUTcq/E98Pggi6klgQ1YZA/u2f5zRLce+mF1+djOwlZg6oJGa/K07FMM737zRkdfX/qkFmVLYPIshbMibBntqjCeLG81U6F4BOnPWh+PrQHhr4rFdSTACoNGtWwrSDJYPis5ASEKCQ+g2QFdcDxDtdmJnA/XX3JGiDnR7mhDwGKUgP5MsvkDcd+NL/CcaxfORcmNNapMofND7F6FDyCACJ4jTo0DGm5bcWeZwM5a7hdskBEC0NWjEenJ/YG68UiEDBE7CN2eK9g2A3dAVgvDq0AqDVALQMoufAkivS93SJt4wKncjv4P2d32iOaJCklNYQamVffzO8nW/mPGmeFU7n7P+9423Sc8d6x0g73UyD3nifOM8ksdPVCsSbAUhN5kHkKWsoJO6b2yL+jxSc5DrzIKQewE4l5I8ToabGLej9CCjtHUiyRR/FMvZEK72uqY5N+pMAPILLn83KuFpey065t7xDtVzA/N/OENVWZDohI/Nue6vqd0unkTgViWpA2kEI2Iobpe8yt63a3KsNNKQuxBtqsPHz8ZV9ktcAIFfFCID+rfSC4UVrIrn4LqO95+LmQn8P18G4wwxBMqro2gdMAWBYOd3AAOD0QImxug+jWI1NwTRgKINyrwwe4sEWujx0FOZ9XMPEKq/EAQc5nsLCOAZt+qFUMZNmTtHp2egMvGK/VXgxueN4096CQjKFnHDBEauZgVVEwL72HYqg5y4QfIBbt/bkV9R3964tdSlZJssDe/ySzTNq1oJ2BQRSrgzE4XZbkUqLXT93rEF/j+cIMx7+ee7QyBhp3g==';const _IH='387c9f1ea60d49ccd686bc150868ec57bab9048a8c98fd7020aeb8850acfe422';let _src;

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
