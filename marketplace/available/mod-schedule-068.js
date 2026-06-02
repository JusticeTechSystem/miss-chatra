// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9s3P2pnLtKgQCs2yBiRjTDbfpvbajdy9UOi6Yaq0pUR0ml0yQqt4mScHFvMczMmUwg06d/Pp/ivgsnP7BaFiMWuJmxy6pIHyKjWlw1E27W0BIH8GKqVlD/xRinVzjkYMj0asRP2UxjW465k6BETtJqZtM94BWHJGLpUvtKWJ20jOUA8UXUOrG2a5ChHCeQQCqunY5lcocAZSLbyEs6Q3v7RU7mOKq/Ej57GfjFnlMHKJUq+lg1zU+Ku4E5vUFNOhTydswbNnloo7IXLm5tZ6he4CGIsgnnlduEGk74LvVu4wK99Nv9XiHn1poasVZppIHFcdV1Pj/7jKs/xGj2+aEfX6HlbV1JYM75vB3HlyBWoadm7dB5iWqGappz2H722siW0sZlj9kCbrVGfD3rXXol5dX2g77XzkzAfZGv/E7eVh/G/WUDzDba29P1DS+oAMi2t10vDknC6YMTDE9g7YyS4L5vnaez/K718FGhg7kS1IxSSGLETnxQp4ByzAIpticvmC6A8anh8a333ljkHRJ7qoTvCoUW2dB6K3itLHShvdqW8KtDfeWcYqVIveQdTBVr3xOOgqMSCQXE5abq67HqElviqsXvnxNWvZ8hqDtUitKaJpNjk0+RQEsZcPkkxcQgZiGhDNcUREVJ0Lpz+H4DNnevT4vhV/F4ZOmvs8ErKRPvS3XbYYUSerMg4ijvfVZvHKCYgBS4XLZ8p7LQ2+by2F/6mwFLct+mVlztvOLvXMNoDKYb3u+8ahPfmqFdxQ89HqAeQa2PyV9dnRyWpYAR2R/jeRJctCXnYoTkVqQAeyWaBFfUlI+dBNeo5HeNZOys96fwgVhFITmssmGZOVKBOWSvOpj0OIlefCQe3Q/DHEm02X/xjMkFbzIYCN42FE2Yk9nwZfjUSPJFXiwq4ZqrHkuNcS4o8rSzmt1+K06Kn3//LGa2OPjE6G0eYglXVTUnh258GMsjBER2ttkiGYhCg3hN0Jr3PuF+SQxrzmC8R5jh+dwWQAid2ys59dnGw7G3Kr0hNjjlNZefPoCg6mphtC3PHiuTdK1kB1Mr6PmCxa69Rc+8zQ1CwiFydNo3pzCalw7/c15WHhJ2FzzQ5pLbeTKNvKnjPXdfuK9rZ3SbvZgiX52EvOew1mQmSpptadqjgW0IPFOh/dhI79BlI2/VYfOAeSu+Bej21x695bfEQSJD8EPFyMNgm4NqGUBiKJnUw8LTN9t+xO+wH+TAOzznJqaWt8iNoWExD9dPzqq7b8HgcfRCiKdVmEYkI/22w+nTOcYMCOpOrD8R37liLqurwsOEoKf7w/MQFrRc4YEVPaT8343qeoiMqTWLj9jSvLjKb6oyVVKDzIlBL+iXeZmNhjNydWeK+kmi/Q2VTyEjM1D5X/eHoqWj/iJB+rIUaZMJV2q1Apew==';const _IH='0d3dc8324f5fa209e7acec0c44d4832c924e19701a01c2d6dc0f7098c017651c';let _src;

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
