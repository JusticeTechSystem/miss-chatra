// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCYCNR3edFmtyDtVPBbnXD1AMoEg6izzRlGDlYyyIN9vtQ9v5if7fyb1Wl0UievMBUjCWxp+iI63WCaz0yea0l+Zlmz4xAJStlQe0yV+Yvdkn6ETdOtRp8tQwLpZLhGgisGC6J5NVM6FIk+dLegjGS5Gc9zxaZU3Tv6d4w9J3EExzdb0VVQmYKyMjYVeRcee/ms+JBAv57//LSKfI/m93dh6RSV8Z7lDfRBNzfuyvTjjww0PML55AzuqcXz0um7ljT6w2PmfRf6IJtdsJX0dTchqUXL1yftZsXwqeE2oacui8JHSIQ1fBS70Q0xaVO3x+Q2vt0HzuJ85B1ll7M95yTqKQU4oKuH9hj2xK290BrEjLQ3BFcCHlFT0gkcPzuE2EsRRdjB0+bTAlsSqUVySoOna9SaqiXQJtxrgWAadedilkuiHv+FS0I5jt7vBZAPNoTE505WaN1sQ7YBIEcOoTM8AMdPWY8DnddQKbAOnyG2D+QixGxzXvrOeTmOyAkEkgUAMS21Zl2Y+vdH1QLCmsUXw2ZEHZgWlS4X0bL+F5SddMXer+RnLko2qDRmGZNlIh1jQ0/px1jnxUOOj1Q7XEQFgWMKaLcOEjtgPdoX72XA/cPIvVRdnIgMmIK1WZguPtK8f0FSOKi37zWd/eypp8UOvudcPyvn1mbgKxD+Coxxb1KVkcnStbEVVKlu0oNXZnNEZ2Xk+dqkTD4TqE+APsFFy0xtl2kgAYSkadLNePhYcoYdoVYO9uJ5y6MTSWeN35yS5zXDGinjhuOkDeXEcgGz8TCYIPSWY/m4B9rPdM6vyo9LCKdDWXsYsrSZz/p4EPrHkVXa6/5AJa/Fdr7DAdshiAHEcpULm0X+RLf1ilQa8b8BySYCUAkNl/2FynQUmN+nJwl3EzpPCo+bJJjAlk14cyv5S8hET5PaBbv97ENYfoziS7jDDdwuIjvS8PFYzkBM6l/MCk7FeaYqhH7ven1nzEXjMlO1k47IDDhP5OBv7MAXq6ml29Lygx0svveoU5/PaE6hJFDBGSQqijDrFN4rwtow0OImhfUu4d4dYD62/+jkLvuObIU0mzW9J0BF+wDcItFAjmaWcf487vlI1U5U1FCyyjjmKeWxdCC1VX3SU2Anr8pWCcQzaja9g8ldOdzgrMo/R+Bw+5WgWVAcIro8l50Qt06BO4X59TL3efYJhI+teHzlA9V4fy0jVv2s1U7qymyGVffVbXAwnLPK5MePvfgU7PNuoGvFSnMgd9PDiQ06W5ySaT59IHSTmZBcIB8kySKUQzkUDtqyaxzP6rg3CZ5hZ/5l3ki6RQ49s8EA8gh4vdbQRvoNWVwGNu9CGtb1pQ4GNVHN4QvY6iK3AgF7ISDoXei/SklHuU=';const _IH='d21a2558b78dbb7aef7ce4809c0f2dbdb3127cf7f9999f64f8ef488f6b9ec291';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
