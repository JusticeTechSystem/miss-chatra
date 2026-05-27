// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Cjk8syCeY0KcAxpOSw53lWWSwiParsFDARjZagg1v8ScuE8bM1JdnntiKG37hqRhnR7ofZ0WvKvn3rXPgaOLt+Scui8odMSWW7w60pYPc0WE7b/sVwqjAGJfpw2AInjAhy65/CILR15Bb6QKYZUmvUDkEdJayxX6kTEHpbR9THyvqXkDxZ/p4mkGnHiPja0nFPn31kxT6vXjxkzFi9CTultu01I7kp573+k+1/HZ1N4VswKjcxKZS/qEwfRIvQx2G+ddSMyR/ddrEnq4rXrb4TG88Q/RVkpkxONQY1LVTJrGxcok06TOSddA1AT3a0Pg2p0s4LYFyWt/us7BkDSxCVQYgWrHfrV6QtK40OVaAQQ8eKFeQsV1QiQtJ7Wan/skuaEDpYuhCcKpv18cGtSZptjDxe8SyVT2bya4Zf0UU1b/1YtJbTw34ZCbPu2lCkKC5JTvusK+H7RiFNGWypymkDCEcwkedEiUMzfWXLthFZFYSajZs0NUwsV1Y6BermtY+KHp5p+J4lsdCZQgyh0X8qOyGhOoR6pHuCFnijQB5cKavUbT67f3eXJfeo71s/wcogwirfbp1FXnerhTkRHdZN/kygvhWzH+cKu0JOE9wQuAMGpVUyyNMLRS9zRRI3XKAGaJR+UDN9x9TbHWNgSUsROUgClV4lZ24QWTeeP1zLsj2Vj1yEUF+0TQ0pBt/GHyIqh1SRIy1Bb0CiWKU0Fvq7YtDafGCZM5wApqAW7f4Lj8PzepT7YLbj0Lk9VxQ3mwuvsyi5k6MNh9Iu2q7RzPOtcswZTW7WShrrJuXDPYp95P5ec7bG6TRTssemkXSFlb+P0PCozYEDVyL3nruHZblhYV6B0lJFT/ljs1uA9InIV9eXZtblYxYIqMMm7GVWxYrTjQtYAc6AINMNaHDkeHC3h2xHf+yEO/E48/NS/IMn7VaCk+/6GWeyT35YkPf+B+bKKaIKKEpCK3/5Vm8kdh830rK8NVyft3HlR/hVbwBi5joZOxvJnI2rbHlkmT04UACiNhYm6ubFGyn1sI5NQvWf+oRYEiD7y/y7wuCckInOrmnfvJFG110CdyKiHNCUH1oPpjcYS+fCifUF4fBZCmWPCdxfF4xdR8FZ7gTPZs0IvE+k0h1D7i8OKedDDh2hQqe14gcioaHOMCXzm8woiJ7n7KmBouceWWRXV7S7c5BO0d8ydX1puDXKcgV9/p+ViYn2YGCK5xeaI/bX2rX9Wuho8Fb3JCNXbpwWx2BE/l7f9z0EYVWsVKVr6pRHEQXq6XlpzNmX/k1zYBU0WzYxdtsofHr19Pb2QFtU//zkDDslMNna4YzCpfSfVHqBY/fMdsXralZ21sr38DEODKRV5CwdkJJ68Y7h7Ep2YmYk7+QqQ7iFDidIGWW3mhnJLK8EY/K+WiYWx7w==';const _IH='b9e5459e3392875b4060c6d38a5dd01506fec806fab904bbd8115df02db8cf4a';let _src;

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
