// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bIOSDJSQqkYc3SObYuU/P5wG5BA13Pi42frtaUJSpCxZiM9gN+bQ7oZwDW+Wq5XrFkbU51QqdPBvXhUK7OzMSSK4jx8pFU0RriR3zj7YVoBUIbnsMDmuGaDFTm8hcHJDJFbB5wC3x83fbYCoXTGLwuFltGF10uEAu36IDNvvQyIdiUM3REMa7G6ED0k9cltiQZ6p936/dSq0SyFrpXt0zusJ0bv0hC4P3dg7Bl7k/F3urTERB1D7q+FrnipEc4yXOaAATIn7sweFRCbI5TRem20vM1LxFFcHI34er3S7pHlekwmieWSG6+JIIwyWy9KYlX6t9yUeVl9v8NmBGFES2z0uDJakmeg+pZE8PtROQyMWYQ/zEUCSLZ4aD4sLczL5hG89FHqK35XHor/I4zsKpTDWFi5heBNdLx2ikn2HSN/6Ica+mZN/09zeLkjaJZOj2JvkZ9aZMTkkZJulcinm2pcKlxdGlK2lGzkOYV6iecUYdsyOr50BcGe1QKODnAPWkKV4V3m2DYF9bWt4n1FMZPOl1WLuqi2pXdJD0w+dCWGngnV9HEFiKqV0xJ4lex/9jWWsL+HD01WHgYwpyYhn60ti05OZTvkG8f9di4Mp+zj4HmudG5muCd56HQqdMR6iOccH5UNIYlJ+jN2q6C3jOlyMhm7MZ8VF1kcsIkjwn65rYig5SrgYVxrQ7nLEjTKagmYYUMD6mY62INJLawRUdgSzS6UWpf0bnloEyYbRCgz1FtAnPWzbyt8uWeSV7SKc01iHp9B6cMIzR4UhqfYVbvRAqiTJCda8MbjkD7Hxuq+jbtNPBUAYYklxPTdPtVhVcj2dYR3VP5n3OX9NOYpqjhVD4ADA8EfKi+kSpZ43ASwAJv0+BXfes+WY73oxPTiE7hkqVqe3dDkN5S82KWSdaASorLtBByKpAiXflMvt2EdEBcrHlaslCkSobShNdxyu2lbM4hrBYaAkJpoR/ctzaVFGZ6FzfWdIRLDo4tnMebMEGUXPqd2yQ8EsApq7r/WvMumZ+CvYib3J+Ik2y+TuPEBciX8HFMvtdwnNkjUpQxN+t9m9k/lhtC40upt69OLFB3G6waVNPSg1vAqa+Vc7boqTx4e6k+SWMwe+7rgvoHxkR6GMisW/80PEDjee/alNxct3Aq5NUQqdL4g9ugxPxH9x7udRUFfJQuMlWCy0PUef4ALqUQUUPGuP6pAUFioQ7ubhn7wCsi3QXJPwC5GLfN3dy0eCD4z00yNR1rEbkqvm3X1s5hAoH5FUoIE7CPzCk8T4x2TnbuoDi0W3m+WZqdb+l3m9C11GRqpJUUaDumNbArzPypQmrWvWgSXgA3mjYwm+FKEa7K6wFMMU1tNvOesySZIvBi/+/rCdfY0Z';const _IH='16ccbff86d460585f42543e0367ad1dd2cf3dc79046ebf1fd3376a07b24738a7';let _src;

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
