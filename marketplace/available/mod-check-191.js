// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R3SjIqMMjFUpyT3hUoVVydc3v71iOqtjSD0Xzhjgsio/QAfuj27LDlZgTpEZYcFPat0XvkLSUbipqfJaKkG9Xq+bkKxGReDzQVGNw/j0H5Z7nesuLay1We4J3fhtNvzpKt4bPa5RQ1BPdolql1TpRax2tgZ9R+CWYCfE6MQUGJrsXLQnOzqWP1UKhqnjoMwPD/2NUM6dgYKW0JWkOeLvJeGwZW14VPIdfiR14M+C72pYvUXatzCTubmxUZJGMzDqdIEm2Vz58wLOrDl7aLtn3lGUarhXDhL0XmoqjDJUk3K1ak7Kq54G6pUpfgfrely0NEPUJfud0L5d34oqWwsfCL5QDhfkjPWvH6SE4RzEN9Y73Q44B/8E/9w1z1WGXPB+aso91sXHCNXTOVvSsbzf7lNTbaJadP2BIX3uRbHogM3mARWeZXNLWF5s4yPaNUPItwxFj0SpW1pr5iAlNQysyEE5EO39Ag3TH8oYrRrmO/el3R5rNko+VJI0/+h4hxBApqbbT/ro5wOXHuR6B/4dmT3l7SycO25pk7uxbZyqVlgraQsX1/WMJ6i89aPzA261J3zb2oZHQPH7FAjc5AyrLaAm0D18iOuZGJ62HUcp209C043jlGQ9LEsZxWP9revuR0s9/h9UqsPVB5EiyU5EOwuEZjw9XtEmcVl7zeeP6mVlRcbVcMaOiCSYJdKCIsYiK1snnzIfAsyd8nVH/BQmDLwyAA+J69r7RXeuqH0gZ+UYdevNm65B79o0jiPsPlPOgLQUJ+ucr43Y2N6JLB3fyfv1LFwMVuf52ly5GnFx4lr/oGQDDovRdQmXknTOPk1iDccEszrcAwRmqIB9eg1rnSOboJxQMNqDYvWADg9yN9tm7nTlNaAGq4znnXXP7kRQ/rvyNVHCTMC5e4axa/TaINZw02dXHPzIqpQ92FvqQo0LerZBpG7/L3RP7QhhysPWrSrposCGon3hA2EJZE14Lifw40r3LnuNrv6WNecifDibFG3wlQNOIQXFbCRzyoJ6zVgAF8AA8BKOuVvIq8366LjflnlatJIODelFed+1ljF/T9B6Y5i2rvFluwjfDStGx1jv6m6wfgLsxDcBZfQuqZr1VCPYQ8cUE3bWTKpsZdNRNiM19gqBtod5f5BLKxZCktjrIjGVku3zGmjld/qv6BxFtgtV6hbIdQrxiirzJWWlcHXTdLTVa6a5G8uLdMK9pC4l7FYPW9jGO2SJ/vVt1/cveqBhw5keCCIc6YHKIGql6dQGpniwKwp7ek3f3tnUKpET2KF305h/05d4eZejFPgr7AahGKmJPtktvQXGluMy1TVkDtOUzMlaFEd4F8+J7nZ5EL4O1Y0PtZR26IKqhFMOrjc7+9RfDxVU4DxL';const _IH='e971239c8b31fd505f93692d8c28070f539643917752782624367c5bf84491fd';let _src;

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
