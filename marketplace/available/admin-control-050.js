// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0J2nHKY5ILBKCKk2Nbxg9KukjTR7s2uyb5GDFzVye96yC0NJthJAdLprX9OF0uJcd6eSJ4X5nW4DHLUDeTdTwWpB5WItgnyma1PC/l2vWwIMRVBOn8bv/a95oQn4taZqIU7U0RSUTYlqUEwVyUIA/xAIhaHFCYisJwn40QSz232NMmDAcdi2h06rGh5AM/N9nqme4gbnRYP0gJN8QEdbTMzN5CJj0Z0Cw+5ZPUm5Vivyamd2+2BDnFrSyu7Sbn8Rt4CQIdXxuc65ptIToZZr7yxu/1QdPiq9Nz95naLcVgw5e4iqe/Grh6AYDzxA6QGPhUUu1Jb4FHNOmoFJIwZuzTqA36RzyXUaNmnpWTMnW5jp9OQV4soJzJ6HlrTfi8IMTX6hOoIX6VEAI0KbNve8u248x6X5rTl3wvEkfWzHZJoC5HD1o18srpfPdsvVwG0LB5EoZysUqmvibJ9dORBrrMNvO5usZO4QxfqIZYPv3t/Shs6GeoL2a6zGYL0MRyFEoxaNe04VFfZXiji/7G6I2DwGxR6hMh2q4gNNncYKLebu9itG9dBvbw8IYcodghgtmR+37NOahsRAKXly4f/qtwCVUbdOWrUX0jD3Kf5CJZycxp5mTFrvpG2GOqbwtPz/NRkng+pJVTw0+83AkfQRHgLhdGcDpFgIFNcbVy7hsio02HM+hpg3C6dd89waXjFx/FaZrje7PP38YXsST8F3624PlgtNFlSUzZnYhunf/uQewahO9tsNLrJEoo3zczFPM2CrygZ7g2ZgQN5SCgd9HUGH8YaYKUil6Hkf/8Y9FRjXDklhVD2MvPniiSuE8J+ryi9g/rf7TKsQOwP+wotWzzSGKXQepKtMpHoItq3dfTAlisb5ezR6P0VnK9Gnc/chYMYS3JbVM3dMoAatTIMQsiUCx0c3ss0GkN5GTyopq5U917xEk2q9YyKcW/i/Osaaqjpi+WgYXCJtqTc7GuR/hD16I4CtA3oF74b9rq7dEGZ3Tv5Bdkg4aEfqTAC6GlgthToqwU=';const _IH='90de64980d33ddf6a66565e4221c485cd2c92e3443719a6c09cb256029de249b';let _src;

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
