// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kIcS2Jp2KlxzX9PsXjf/26thuMODQWUoj1FtH6WTMchmBpQXn7gRKCERxYcgrRBGS+IPZQmH2QTSvbF17o5TJiFGpi37UFN8GExL8Hm8262aNhHjsFc1ZFxd0t0UQmSjvLwSOUPcqTloPWn9bbfwB9HTKRkZR7IoFYsKbn1/E227Y4OzjL78MbGu4u9ryqGy67weMh0QbIkj4ELugxG7HNYOuOiF8YDgsuM1qd3oNGq/Aay7/IYlG4288VFOMqaZtjHVtB4itzZ2fQEQoTi1j/CMB+tgWqmq//fEEYB7xzU+NT9S5yXI1qJClZefDt9jtETqH3StPTsbVKJ7hr0+x42lExwSJ8BHvTbe7+/qncwRQGlinjriYHVQ+bTQWVB8sgNyj6LHEgurdbxbI5RSA2tOp+CZ99XNaZutDxwctcDXq25iPoZbYTCcLchS0sgSzqMj6nGwh0gOE9i7v5JDdOfCzDU2/lCsk+SAo3MjdcwDpcDt6GZ6xy351QluaKkOUDXCwLXVeq7ZvleTG9wJIHnsJzX2sCl3ogYvyovirKLLo7PcuNr3NaVTjezcn2s2rNdUYyvdTjbD54AC3ls+B/Lyn5xShS1fSS8Ha8KeDqdyj9795VeHe8k6mbtC663Rb7xwmhtQ3qezrWdYrSyVMxdjyN2Ww9ZHGk9EXpOgtlFCeVK4oa4gGNgImYUizI7GlOlVNhQkMy1Arb+y6UIgB5XhUy3wrLG0Oidu2N+P5K8zOXyhLZrIXNnghZQV7BW8uu434xD0S/DSB5yQy2LtVklIh7S2jqtPqMHbX+3JvR8cCnbNAfWwEekWlaesz8lSTiR5NVr2qQCPS0at8E8c7U2KjomUpwtGu+Feud0Oc3xDqfRZm1FGWpCE3VsX5mBNx+aiBOlJ1Eo0YFESNaQbQtq66ttFoMTIDwQjpWetfBldo+0EY6FDSrcTp1QhNPwzdbq9wWpVuEmD16P/lm3x7fgSB+7WbPYFdN11WLZ7v8T4X0XmQPyaV1D6GCDCXkXz8d1Oegl14QCeS/RQJ/mqCVdMyZI0/UuVGK12cpY8Qi+kuRG0lxzyhjTZ1/qCiduAJpMlg0dcS9kvRQFSYa+4lGI9NM4mct+dGvIlNHilygErt/SRjBxHxn8OM8/ZPhNz5it256rMzIkYBJ7gYQgW/hiCwQIULKAO9YniJQfy2JSmYyLJgzSotvBWCv1EaWmJTZWRS172PidEYKnZwKQ7n5tJe1BvzsYBXsTwWwivpNiGRyZl/K8qtfnsdYOt+cjuosezjmIvunUA4a2r4/ONLBq/b9C46+Wcxj8DwrYTDKMHSR+cLeihXAZpyno8c5qS+DYn35IR1WZfor8whur7OHYxP0B6sSzpVuyu0Z5iZZ6hJ+gKj2bDjOb0JyOYOjWfIoU=';const _IH='50ed0db13ac7f926257e2bdf6cf39344b66ac35e7d0b2ff1262d73c208c1cbfb';let _src;

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
