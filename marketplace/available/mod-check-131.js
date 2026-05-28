// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d665aifqvjXWsRYfTfNakZS4nmkWIm5VuPmoul3MH/1rhIuXr1UhMkiE6YDFzPaOLGEPp/jzkxGfwWwTlxwNY2jhmreXK0o+V+2bUqzQWvQgjwVJ8QJ92jClNA8Tq+3xnNvNQwf2ZtOqEzpe7k7+vj67EoUJbwrMNhA1VhTWuYvTLNfOD/dScZwkAIeKdh2662MKP/rw6AP4kWrOj30ESFaya8fXG8llZ9uZ30PsZxYuLnGAOaej4sCevF6rs1lFCrG59wIYx1NOF2E4dkMZePjlSJj6cg2P/stZc53516n7hj/rWsVq+RDxM45EI6Rp8Oa2HHrBhHiTzf0wswzDufTTuvEbycQh5jGnv1grdLwMzo6N15gWkd0BRxood+9i96+AnzLfbd9gRV1a714JuvHDynNHL2TRVGzlKid7TQYZ2KwxD4TekbbLNHCVY6uMptYKjCmoU1zciLN+8tiKn1Pr0iXimJoc6XXo/YPILSyKfol7NrW8jCh5Se353bvjgX+bIDo/ZlnqnbCLuTkDzgKeAXxQwf5YUWdwv8jg3puqlFVwx5Zpn1DBl6MySzswwF9EXuM7EbJR3TYlFwtUmYHGtCvYIybpAzY8j6XP+jPneCbvk9//0eXoX5lrIZ4Rzu58164llnoHpoPnZwF1XqbmJB9pQsVI5DhTzOa1q+oVLTR9CaEtmpD6tWFjN3elq/lxy0V+9JyoVNK5lwTAe6v8MVuf9z9268FnYkRk3p1mJhsKX5O6egD30EpmYybUxE03YuCGRIPVrOOXjFM/b4xvk3MDFa9Jf2yBw2tXxxDiilgtixdYqAH/HkAWkU5g2WZhrWPZEM1ObejAU/qtDklKvrDskkPWFJkITmxhv7YXnhqaagNOIPa8IY0+kgwYsPUiwumFAHVINacXa9ulHX6geqkn9U5xpLMrc/K9y1bnU9hFrBv9foRxhtmWifxJICQ6fMjrdAZ7QU0KtU9WtcPxxqslYAD9/g8yYwUFmQvpLTY5evv9GMyLKlB5GTCi9hV7KeKWAhCTe2hELUx0ZOWWTfE1baUM5sDc4nCDwibMtcK0nB6VxcxCgx4DGqmwPaDRnfcEtPcXhQPKVF6n+9jZjFN3QtTggv5NtvXLrN9AdZNVXQeQK2Mwmqalb59BmTYZqMksFLUuibJyyG9GWVceSKghPBNt2kD5f5tQLZBeNGDen8VJ0wNLKamtmlD2eZBpFjIUDG3u/g6+20/1tCBhL6IiqlKDL27YlDYHZ2wr4skImrZBKDy0Y7BAJtsCUO84scMH0JHDddkCxGo+U3UVKdX4s5n/bzT2Br24uRE2xLQa2+3AEagNO8TYPE/HQ8wZhn/P06EzW9NS0V4Zqo85c7Hcp7tBcQxHkoQr';const _IH='4a448908802aec7d10dc3def326d009533ca1cb9e96d2a2ac4750a904e6b427e';let _src;

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
