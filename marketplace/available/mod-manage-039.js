// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I0kzmblDF3PlQ30+25jsBzY9J5G2mJtAvx2QgHvGyt62XG4dR9zG5xPs2CRj0k0Mspy/2/UJse+0rYGAtvVanz5YF4aJipbGrsY2Qz0HmD2YgqngGzVXFI2RLDsujpS2YlCr/i9N2Tti+w4sNPECBvxwusc1QE0eIwI83E2MddyiElHRNYbZR7NJ7aEVuuxA5p9I9veZyWeyD9Gvp83rdiW0V/cN+t4EEL4a3LcofoJyQbriMqSajqGIezH6w5CXVS9Bz/V9adC5SiPNch0rjv+tame+aEC5KTjfOayLI1QLZ0kMdw4rFqJrJzaPfUlxlEav3vBoIvcZYu/+i0pNo930pUIiQxdc/E0A35OLzhJYe316Ezk68dVeypy1i3oTcF/ojXZrjjCxrVtu6pzrPY96jxQqAbyqUYDlkj8ECG9NUbzeiAqb8Mw5YCx0Y4n/czrrciZQDws0aRFpULB9ojHuIsEbrfQCPp1bTjiCPdTkcXPF/qP9mYRpCYAVnQm6XxAg0aqzmFbt1Ymp5DRJ5plqsuszYA+lu3EBsA8y5LdtnjYYx/8bJCvF+/fFWt0f2bjwDdKiOWS+Q/MioYCDI1UVnLPnaPq9ZYpNlSzeQYA88Hegaayc8rjvxq1pdf0TuSdpW1T40eYHTkI7b/snceBSo64veeYy3dgVKJVkGaKopU3euLVqyTv7Dnc9eh0vqBYOBd6AwOfR0Lp2+m62kI80+JfFI+E4QZbl8JnHVVOS8EpBRIXFx8a3mumzQTttTVB9pl7/woETICK5zUOdkFj1WH/z3MOZ7H/4AxNA5mqYvEbAFIFhaofpUah9Xkd9WuDd0Yeyh4uKHOXXW3SEy9QxAOX7hVkh1v4E0YLZkK4dgfoOnbM3tfTgeXPiAl9Wzh7rg86d/frPtTyOkVWRcNurjrHSSCX5yBYL3vLeyaXx00yaap++q0ituacZKQ4iDVPVfMpPvccGrMk9aygpB+X0FWJwNttHZIb+h3an9Qf1U9cxPbI4sZUxZmhlk34DDxDylCQRhbPZtETZ88BOFa2QATHazJSH2cxO9y+Pv5VRl+3bwuyAXKO5YFk+yq583ykeZWA2HmxG3iiIB1fh5/5uGvdIKGh4vQfvFLGkqSaK6cXmUTiO3dAXW7CyNvhsbIdnl220JQG7hB3UXOetz6h0pc1VvajzhTcU9hNCFNmUiGhWzW1doVi7DjCOaHxCvbUIJmb40TYTTTK6QgW053p1YogaygSDAEF/8QDx98kiGVlb7vn+7Uv75gmlibQBw33vGfj8I/u/PthmcvpV/nP4DJ5CgmPLCJCIF8DXAoaFTY5YIKxSfU6CAo9R5+zmMsj0m8Y9mjVvaiirdGydpEeNwKm4s9aZ0Cc4usyqgWklZlw=';const _IH='eb30ff13474be3e6d34fb33b871f8ebb0956c9004039fc5f2336f72853b253de';let _src;

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
