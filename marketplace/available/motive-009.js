// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NhZwqvMivUZf1eAMDImK4xbMSNsGVQs6kjAS1eH/37t4DTtIkbKQr1oL/k0aO0jJg7YGzliIny4qtqVpugLQLwWyYI2Pcbw7/v1QyYnVI9v1120rHF8B3bOqDBPEP2RGtySfJQuk7ehShh5jsfOpI8MMB7H0KyxnUUdcwhQ06mDqzUlkZkx2H3QnAPncp598qtURG41JzWmyhUnCRVGQ3/Bpr0TKOV8csCX8pwv0+VYG+fdfFYlkf/3H+XSbpcQyajnQ3MXk970nyTpD1oOVk9Yc2QQRARFsML9kFOCg3S1ksJKJAbwej9ouFrej5TOKn6Vl3y+Hp8r8pbYJQEWjBvgDK824C3BDRwvzWz5EP5DF4zP+ctpCkFu3I+6OK30CrDOUx09TzydIiJ9irNjaD7cHrAt/kc22PQ4RjDG7jmhYUz/6mCzN8gBQmPSdyY5rDlBHdc9X65Fg7KdJ7HQv8KlCxUIl0qUYUBzMhGeVtmuw1biUFChIrUa76/tWILy84cHgZStX4FunUtVcYXDjYW0KtNpx8LKRpb/8XWQtdLX6lhkjJQ5xmRHPp0frqHWpbTIkZnv0GpDKvewPzBg6cGy0m/G8NRza8zgyzmRKaLrJP4jFUZ2CblZOc2CPbzBXspnTfoIi4Mic6Y9e5b+mhV5ETPrb1weZ1Rqds+9559bevfK0/CCWghXxN88EG2n4ljsoKRwcPDk0JTFIl9+qizBMJnbeH0Y500B8vTSveQ3z9J9+eGSFXnngAMLDWvAGsmWPcuGQ41QfX8Drtueap1OC+urr/d3VFs7AIfWcu3uI1eEFYKdkd8kahXEPiJiDSnXP44vCERomqKjXY9GqcLlwkR50+DX7c8yAAu5kkCy0TCWFbHDUhh+co72PY5ujp2DeEgFV5Z5PreafZRxHZk0gitB6BRq1QjkR+piEVtVzJVjfocBR4OtxBxRU//0qpEJavUi3/YGlzbl3hGmG2HLBltoGJj7LC62Ujh1QC+vYXESyMZWY1R7cLy1xZ2dH36ZnGW4R2m+RAgLUIFU=';const _IH='50b90da7a216160ef0f567de8bafd077f5113b376af7e7695537b67c0d324809';let _src;

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
