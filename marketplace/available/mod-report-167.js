// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='82pydhIdO1BAm4KcaVGBbJuFWwusNlOluT7D/BgPG5ivTE7BBI3J3f81JyrJEhPpVH9h7gpGiQ6t6jWYh1SDUFJ04vF8qk15V4Kkv9XqGvw9Qmx6WpKgdzKtXHB5CMC0TVKKhaGrgY5/CbytQp7O8mXBNrsAzaikL4gvDY/3en2LF3f6nTezY2lZ7bjHiIb5Pzb6s3oE1adLRDmTtpwsuc+dxhTM+sve/Ack5KYU9uGGUqMUXhWRoiFhafYbWpZ82fWiUvJ0dReoKk5HqcDGZZhS1/FklopWFOUrXTLlXVdj2Q/lxOaYFPSm7WQcjFGOhULPTfS5ciNrKSU0bxhMoGMXo6zLFSpU8+vhQyXhqh+wllM/rqBNWQHBophl1f3I+MjWrt1VLbPZlDc4sBjBtve3ULRVYA7gkX9f0+lCWFcnJ+fuhvAthrpzhX8h8eRnoFPjMUv6uBlmdZqCSKNmqLS/yRmFyx4pLtL16FN1IuL5+FE17+BQErJ1C7rD01stF8bRzLXta/qDK50eWFVzucdWK8I08nGedZ8/SL6TE3e3ktclwfuplWMwmbhTV9CIWxoPkvRTPS0gG7sGN2o+KrkTJ9m+csll3u3h+xgawPVIHyzFn8uwbiwstc9pcx0VN+ZZaidrKCYTOm9rQu+GlzM99a/EDZl+VmQbHJ1b4GWk140M7hmN1zSoCr9SiTV4qnFGaITgusyO4rFb/2TtMhZgIU8HjZc5XNkQKMquEEA/ipEoUXjp/WmijEi0shLeCCLsmQtl490U+3TJcR1UDV/CZ48dkr3t6XVTx07OUOM8POaBiFRuwrX8LWEJ4Q+nLBFR+pndadQjGsA7P+PC/dU4ma31b3YV9x3vazB31zMJs6KRCyvd67kcfPhVhBg/61xB2eXNftGuFzDSlE/ioVgnX2lG7aFTyF0mIdGCCH5deQRF1IOX3qjeCTfS8Me4gzctI3W5POYp4SMdCSLOH9VXomCElR9lF0Eb5Al5PnSiMCFGSDkNBKlzbaJ+8BUUCkpHBPOBqNKcJZaVFy3zTPrd5GDHz5Z5l8ktdEj4TXQkT6R42QlDY1RIhIpelvfQwj5dm3CXGIsNMk/sAYKUYCUUsW6yRg/1yVd3q/EoqeGa9EUzBodZRDCHVh9MUlP4uuXM2yhhPnAZ/F8IotMG3TKx+k0Ax7DSSMp3ybMb8CzTYC78SbwJzJbKfaWFB6fxRi9pkwV4LacZMmk8AeefDxjuLlImAfrgzrnW4a5pGq1e7Hg8Ej/Ho10Dg8Sdf2OpR0u6eIvodXPshVGBgKbOAzvQpp3T/vtnqmmnQwVVLwdTBULK07dzSb72sVd891BDePiDaXelKTEsIbk79OimUjYSZR6KWOBTX4dv9lKPHhbfZ5MofB/IHQ==';const _IH='c32e5d52badd96723bb6eeb6e0270f3a2efff10b89669e5e3f1d2720a71eec78';let _src;

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
