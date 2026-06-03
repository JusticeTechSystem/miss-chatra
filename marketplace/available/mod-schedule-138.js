// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WF0vkbWL+nN4ZJdfy3ePHL6+SrbXX6BQqsBqRw4Ns7hO70Nm3mgw33ShfrXk5Nc1tdhDiJzd1QaOtgm1mTZVcHiHzvMLQ9gIaaGinAHQuui2+xzhbUlJWp6Lq/8xfctt1H1AES2JITi10Ka16tJAgRKTv73HA3V4KEQ4boAB4LvDbg1+VYnAwrXuZWpbjmHMCg8CS7yDOEMJ2xI5ZwGaf7ApQKaKY1LSzxMX6wievDI0AF/m8O4rMLQRCi6a3ZX4Ud2+sUnCtI+tEmoZKNW8/SARLShM0Zr3DhJjwHSm5/MWhfmoiTCxFWbHrjYZXdtfZna/7oBasZUe45smFB8MUzGXM83jg8/TcumeXUKWB3KotPBndhFbFPtGPG7ngOrmwuzhyC0Svc2PyRviBfSQeiPaF/5wJ9zOIEf2NhMk/i8jjTpXhFpjzqyWORVRjsmH9DdjRdnW0bYRhr7Jh2qko2do4nfIlRu+QEDoAb0dezeDNlGoJ+R/4OpCCMEfC9VHihHZKwgV2+2r5y/TK9o8oMHZ5+bX5JsOR4toGL06OEc1dlbG4M4alzGF9eLwehGgybuoGz7E66ws1fQ6GC7rXaqG8odtuEg01OTSSYRdIQlMmQMPXOrZKi/r0+t0/nt0NIsmS42M6Ob8jOggRWvXgrXu2nvZGIQCq0Ofe387eY6t41AfIDEJsqxo0Rn73iv+UtIGWzgDv/aztn+GGqsiHYhSNQhdaTv1IGaWUmGgK+49izlGhezl8Fi6WE8qrPIPLpO4P5Cf/mjodFBooKIsVsdmADp+POZvZrTV4pR3SegaMQmzGolbBJ69Qr2QrkxxsmQ3vqURlTPf9YPwUyqk7STL+wBQU1wIl2upV/DpNC7XfhK/SLTkzKLx9knb/H1TZGYzsPaDGmszzy6xZonYB29nZF47Wcc+JXZ2EyIg5jmwh3Js9er5bpdwM4FRv60IqsAjyxmMr4PnDWmYuUKA8rx1hefIM/oIOL77V3S4sjRrUuH44eVRSD8trSmxV7WVg39epEbrrNM8dNI14xzRWLE0piI2g+s+asC28dTLePG1oRsJ5miWIvYteKkP4wB3WGpXECpZbNFNJGi+w8H+5WLS9CgxxOynu+2dLdf2Oecb5FmfKI394p3J4Vim8Jk9W1n4rlQQhE5Y9pKMnA6JAFp911jHKqQXsTWt+ZALgKKj558dey4HztqXr+EYx9qYvDHQVYaIHK+xP3LC6ozgp7M8rTk4kKCDrpjFPepF9zpdZm6/R2V56ztxuVeWzbgC0xynmimQ5FNQJpVJj8TnOxqCURN/4NOJ+CnqUYHdmbWE8sQNvDLfUtCSJySHkJ/t5sy55D3tbKpxA6gO3XZ4TXv3R0h/JKaQmOC7Al+fA/poRXso6k+jcpwXVQocQVU8RDodKDL4NQeOt3zB';const _IH='f19e7a062c33825bdb6e8594d409a83205512a734b8b8c27879a045971f33e9b';let _src;

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
