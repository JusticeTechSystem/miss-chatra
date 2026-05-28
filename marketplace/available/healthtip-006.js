// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ov0Q82j6dxXYMoceyBR+nz936KVV7Je+vDkB7r1yADqiE4LJGx0EPfryEm8xOHWqlu/xgBX03grnjblfwDMZp28mDVl9B3gGYe3b00nYejlJ175/SiRURUFSpQVXmWvVHBMlZfUl+47qGW7h7Z2+Cp9Cwn1A45feAwf4s5pItfoVV24R26UnxFSTut4XoIWQbDATsDTptguvPCTAUmnQXjOOw2M9J89BG6WjMW/NnRblm2lHSrMQcVnXUEvCO5qOQriKCvqd8t9Df9W61GH6FJAFumLJ1wiistE+gqSWbKckQY9TlvAnfKvkcBjO334Vn02F0rn/X0Bbz2iVmsxsZU1gBrbeStchIeY/xPMH9YA0KWo3U8wXUOniANM1Atpj7ywXfO5rpxG1gSMTDKBOYiNzyBj22jay4Z4Jh9iqnphSks0i4rY5xWx+gB8lSO81ZYGIamvfcc5LISWAAjqmzRSLqlKaITWO31MQB2RODfyl6boKTbsCDYkXVwx8wNwHtc+8AiUJeRyjFyQcTLYLMP3NQAocNwb9OdwECWgW67TxchzTjJ3hwWqonfOWJp3BpLEv9ezOMYy0j8PNh33le67LfDHDBI8lY34clQ0BbN9oohnIZlDicePazbgBK0CurNKDuku6lmBGw6myIxYwN7vKHnwWF1wxJ9jjVTwiKldWRYazdXvCZ2AgxtDoqbTNKKCX7J5mZAPhDDVUlhJpK7t2psZogL3Goj7RRio6WkGhXJp2c7pBthuEVmLNWPbVGYlUV01q5UIF78B86CrZvYq+g0q7YobhuEHxYkH5mNQRrY/eHV51z8PiMLvcTT0k2QxXDDBoO5dS2ru5XEQ7Ypq/RvJoy5MEYpSJ8VC91og2c94jiTVhD6pOooHsEVgx5Pq+qr9Aq4W9YQ8ewJWqFoclYg4zv7u+NcWCUlA1oAq6/FI/B2TR8g==';const _IH='b2138da73ad4ad15627e82674b97093d5e9fdae56cc57c9d3c0b4cd4c36499c4';let _src;

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
