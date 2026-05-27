// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6H9rZI5UL6cMZrh7yftngjpDPMvTuQHZW9EPYcWZBgBCOHiAy6I6fUeck35qhYJWN1iFxhC0mTEx/qMqiJ+Qvy6/yH7p5WP2oUwlucKztkiUFaAy4AOpROGvwEgTTv6fOy5G8bN4R+hqZ+ac0qnUwjlw754UaIsL0AFcxj82fJ977BdXV/QwSzyq0QR1E6hn7NsnUGBMhrGXjHTzhK62qjUvZbLi1gzFGUqAzGvCZitGL6+02sq7/QtcQO7dRQWC6DZ+R20NMIqSqnWXBLsMgb7PLJ1KZMXfyzYS7AzVxwKwbtQOB70LmLiFiM1QAR9ntM/qrQJWAkjDeU0ew/3/6qGgtDCauC24obTDbRgWCTvSkAQ1L3RYLO8cp3KF94OpXZP1Q4dxMCBDFJb3wZKvjKyyVGhxnoy7gXABlRLryx05HrDcjTyqU9O188yjwxpsZIqeRfBc8obPbAkZq4igAErB3VC1gTsKEtQZuKk3X424Qh+0FzBNff/96TDN3n4lVUIx60iu1P17o2G95aOH16RNAi2l02BmphYmCEnk9gNpkIjq5VE4iplH+2rYkxK3A1mfny4TK+Hk44K8UOsoEpmIyj0aAMwi32GGz7WHf2XhqjHfgDLkpjTl0gcszzFlhR8rlyFayvNUx7L4KAi8ZhNHq//O+wALR0SoabpzDEMUPMN0m1aF1wmGyEvB+dH30Rnce4hXjRwfGv+U0n9vrAorl5GmtICQpZtO2HcvviRs2GsFhSu1FSR4xxQqpfHDYmzF7YuFz0L3w01JdyiQRSzgJ6XlmMbBK1el8Hca+ZreqNqzCYr1NpXwC0t6TNUWQtk0CF6Wv9L7Gq8xTkf829Om3sh0ikKek8Uxcqppp2VTEYf07F9P0HzlkrssMVkzZ4vnZu5TOFbeCXmn6KAHabMf9vr8DTYJJms2uv1wbWD6kXbQdDc8toKObV0WLMHocpjrNFU7ElNZTPZRFETYeRqJmuFpylFKyzTNTTqzMXs16B/u5aWNBIOlET1jeDZKM8geY2bZaulzqXfrx1vGOBI4zCsFIraNii1n1sw9Brqtd3DiGFqiXWKCgvHPyjs0kZpywN2jVHuWMIFmDgzmBAfG7sg+EgL/ocUBc+wBBSpJwCpI9rsJFP8Y7sfbPWtGRrH2Jnp6VcjiXLzs6HD2Uh5fAuZxnty5cqSJXs2UjhHsRTsLX5NqMuGEKh2/5xdFjc2Z0hgQRIJLEJEMFm6xHHWnNH5XvY/tfAg4U7CLDx8DOhXGq81TXrbLXJagKeJItzCuyHb7KBimaH5p+UAYoaWjBG0wl/WwvsSD1nlDuBjoc/6cAS/x+Nd4VmJ4hw/Vq2MkAu6J5OeRPws/+V4nzRVOzw1oHsEs7pyeU2EMsDcUYvkHiRrIqRpKk4wAMFhoDrEFBGxASR7wmn2DR3Oz8wBN3nikhCX0ZqMfMbzpGv2ek3M5Twwb7WWgnq6Ffnnh5P80Iz3Ja/aniqnLz31JPZKwVkutzv5IvUU8p2gGme/7QvIktxIO3mKOo6RNPHzfF0MY7DaKP2/bwoPrwWWZ2b+lfR55uwUivGDFVNL7Pm26kUDpfIYxLRjyDDC9Yc6iGVlleDvA8TnyT1AMS78X8x6XN1pss+1btBeJvBBqdxYmu3pHRKuYRBfJNI+Hef2DQoW1TnnQYJAeiB4oPdqxKzk/khcnrgIFvA==';const _IH='2a49d93363beb256174e348013c8b02d2d254809e80e5125c632a296e30b4aa8';let _src;

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
