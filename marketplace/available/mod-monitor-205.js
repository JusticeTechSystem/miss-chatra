// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6or2tbBcAqiITdBI5QbhgAidpZEyVWXtkUV2Nc/aTmALNrFeOZNr2fGRLC3tA+dTN65RNmup0JMlZesyjV9GSqREIoMFJIMy+d0W3lPw7KX+/kxAL0vVfwtUREQYowyRUahOfozlrEFiHdblibt4B38vjOVCuNDS21IzcJG5LTwCvDFNam3SvlDdEfGLjBYQYKw3QYm3DGRqvJyQYno6xraF2cU8lNT65/0Oi3PR0OGRcoaHfPHo5sUqGi3g5aXAEO0Um/fM8L+EjAytftN4QOqAxCzV56ot76Mj07G4QeizO9UGuQIo/Q536Thvub6cfRLWu9j9LvLHODGxRwWAqQN0ln4J6vFKBWUBRVXj7JMR3shMjnePHAAyljm7u4xKLbZhP4KbsBVPDAQoshHDF6H0AZMYpdU8/RJqQXmzfHcyGaRNNvbvIZOoVhkBgftQETBF8hO5PeE/VUhVpxdchpx1siofQX7HBRpyZfboaqnpvQbdulVgpTiOuVKFEOEzvJQeGIqZ4MpfYqCR6Fy+Q77hCUp0J2452l8JuNVmHvUhDBuO9EW+ShgH/MeXevazUAN7lbAj0MzP+V+eL5jbqjRqfid87CLBh8JkSAX7oQoCVh70pHp3c81ir/E+FFX4Zo0bE7QsEF/Np8y6PYfk+jcc0rrlRn0UJ/P5At8om6BT+dNtg0E4W6DLoXSok/LLMKhGwG8T3QzeNiV/4aiXzx2j0qHzImj2IMbpBc5gZLMX18GGKeLtGypyYwcDBF44T1C6TfSU44u0vCvM/92XSkSk8AOKRH1PdJr8uCqyzridwTQasfMOJOYuP6GvfjUHWCYosBd5DskTobIIGEy/PJ2JQeBc9nqeV+NTqeVGh/XCgdBdJXbaN4qN0toz41nj9CoslzRMeauB4Z9RJcPPKZTz58dJGVZAM55vcZIdKX2KAkCsdaMe0+tzx9IuWQIRy5JRpwBKnFnOH4iffff3UWmM42FJQHaNhnk9/Z3XyPSa6ZEH12cmUvGqZmPOzqYte1YfY4srkwPDD4P3mbxt5DEO0UiB1Mw/f6vwWeblWdyIYK6JP4RGBnl1Kr2aPTjbJJMJBGHf1vEMNNsVQOqKL3WhNkVP0goUf4vifTE5FnSnYD4aSzZrnVErXfDxc68qlZ0Yd+HajRxicv+z1sjdL8XbJNeQCuYGqeTatgZp0ouZvvQzna7H0Egv3mnnae43YTTlv/Nq0qoc3tSEOX0I+6s8ugLHcENVwZ48yCHwv5DomNCOZotKEDaCZl0uNirJ7bgb+QiMdwuDgPj0lk8O2cgNbB8cc6j4AA4wTRZZ8WZCYDeH3z67XNAg4kwkMSlT99ODsYq0ovFn8T9hmH/E3oyEKVaIEO0oorDk+r4JteNnN8m22G4RiV5xvKJmJRKMLen';const _IH='308c4c0f5dd2f624aca9a6c62f7f2076af65fea629d72048b8fa30e6d048bc20';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
