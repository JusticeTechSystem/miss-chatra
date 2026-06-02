// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sa7oQgc7J7vWHmCvaCdV3yfZvOQ+Z1Ahk0JfWx4r1NJ6YsRCXjK/6k8nSnQT9qDg3osi32jlnK8ovp6z2+BISCwqkfOgPnUhEWSyUVAQjNQxDUnY4xi4Kp6a5u+EKwR/ytbXVyI/K5FOYq9wgR/5kK8E7EER61nQEz3axIQI1OjTIBhSg/Xr3kK06+uBYYIV5q5yjyBGY3EJIbYKPLKEvAWNEuY9FwJSy92fccHVpx6mLGY8w4OEPAhEhxWN2e9BWoDmSYfkT7rPu/NlSWF3wGZlM6C8oIE+wYZo7e8e4qzL5PHGnieZNoPadQWIDTFrgHz/DNSYqdZJmkcvfHd2/psXfxa1a02jau4CbhC5j3GYyIx1ef1BVRLN+Z7N6ew6GeIGAFG+Fmv4duFTl79agYaOGXHLH4KcFco+tK6hvnXMoYQqujufkpUHBWZVwzI8Zv4rRIsSwQhgQ6q0lMbhZuSeKKot5mDsjq1rLG5mjw8Pv7G0RjUbN7O7+O0SvccoJ5la442It+31Kvi/XDWGgRxj14a3+RQ/0runM4n+XsqSGpHwBtv9547o5DNxdapikWs/GoKdp4E4pYzLP/eT6dPJaXWggqw9QTowcsOVVAn3BCQuhqeYfBjimUCWDqu42BM9YrFdEGFnX/pNXYqzIfrBLg748q0bz/AC+ImHX1Ws9AdZw1HLWQ4O1xxLhNctYSrz9nte+qVD1OQWJFqO/AMm8BTbqKnpEzFdQC3ti/SCpQfklspEXXTSkWKTAsMYbeNMQJEnoJ1r8qAwdZi/6cZF87jGBiStsIu2rbB1VF9mfvV5AmycXGPKBWUWxWWt20nmEvFJ1YRXuS8qhEgb+HbuVK+zaJZL1B+7E5X2VFVXdC9DW/BE9tbF8Sz5e4tfqbCoV8ZwWlZOqq72DyV3cbza7o7mp3+Zu6Gc2w1NfzBzq8pZJ24vHSb8QzYPrM/DphQNYHTwIDiy86xb8bGSNVy1Ip+cpPuCbAlPJsi2RPDaOopEpA+kynx1f4xXhmN29tNCp1YpYmGY9rNCZxAXZiObQ/hz7ychL/+4Pld6h22FaEvIQYGmkx0mTghlqkBuWhSuUwF1gpXyraCgXLKzqgrVO9r+nyT2FB9UA7m0Zh0Skmq769U0wm/fxQgFH16jRDDTthv7UeBu4ZvCP4wg1PPWt3L3qnFs2kEiwiDk5Mbhq4nxGd6VuVLTgHHa2EYa0Ou2L+Gb';const _IH='a1fbee5cd39ad702663fe7f4fccd7d07a296440c6f66f8bf8f2688cad609c50f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
