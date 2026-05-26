// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IestE1RUWwfn3bho8710b8JHHSk8kuL6dbdm2hLDXwuGMvKIjzG+LAWEyJNoudoWvTzmad2rcUQLAh8BpaoCXfRV20jT7ijGmgVPj49zPSr2IpzjXFck4J6jHtj+sL1yFsmqeT5RD8zuYNr4nd0h4OG+KVN5slyzl2sdoYjOoTspx9MJ6vGAnwrWQCKBsXBhqxcIBlkRIaZqsAiPEON2XoHDWoyUieWuYh1S9AwVX6sT6l6yaz1NQFda3TyLbL/a9Yv8wsbnMtz+4T5Guc+PZ04NT/UD/bRgGVOoHaxCHO5/9cR1/5OdhM22GoonaHZ+/+33sSNFFVHPYTnfzsmjx2ixElAl8PObvAn0GAowwcq6LgB4dMbrcvUWJauTIfVzVVy36yS2L6RPnI7HXrW8Ni5llc1NB/zuiBiLi+NkPK3joxEX2imnsKHoU9oF+GbM3ltLIyNiRAbd14DOl8MoUhkfks2HxV02XvycfphKzMoPlRIG7gB5rh1T2ur4Gj6TcVEiC0SHDthRvHMusW4XZvR7iC4G7pbtJjgATxMP9zXGKplSTmGU38hWcZ1Nvh45EpmSHNUUD4BNrKmJuM+gSXgXY+IjmBOQRLUfgHhikP1bMop3g2qKWybB8VPAnMFjQy4ZClAGXnNoTSxwtdDCm87XYpXmWoNQqQ/lNzGgyhRkbY/OlYnbBQ3priUNo4OYDyfScZ4/9St2+2BlV7txWKFGfQLRZV3ec/BhihdePVmgqcOGDzgBtsJdl7UjzNepGlArEcHGQgxGqFD7zphBwNbQ801ot0Rcrl68EnhXXKaA4ukF27vuztKZMQ+J0t++tUX9RkgvJxhRrgp1Zuj2F5v5MObgqbDZQAKpOWec1Ur5DTWy+EmwJ5Wgn6veJ76y7HAEx2SzYKNRuzDlD/0Pir/WKqzT/wa2Qb7TG+KlXIkghnyxo7Hyt7Giffi4rLucwfd13m1JqbuGaUkHU2ep3tzLezRrs2IQhnggrOOjPMMMb+YCZ5G/2JCOyxJhkzjNyVGD1JDSefT2J99XCVJjQokvvbFL58X7/5KsB/ygc5sbGvbr3vAu2itdPBYp7A268Oh/BT2gfKLpsx8D5twqOISDVfkk1c5jSiH/EJ7RlQWhvzbgBy6PTaezVDn5xZ7W1FScPbK9wOKe+mu09PFWqRemb3TZ+wK9qlQE9pYtfo5V32CtTm0uJNma4+TUQ7M0YY+0teRjXb0fB26U2TlT6D4NCzN0InJi7ZBsMCrY/vmIHYB7azU2ud1MM2fbKSEg3u/iooA1lKlmxFr6IiM6Pd0o1OKKj+wzsgGoAf/BqBLF5vNixOGXqqbilY/pTL3jE0Wqr9f8UAdlypZmGNok27pTDqI8mJLkksn5ICa6WUxfN+VsiX1lIbQhTmaUaVVsXhvBjLWyxA==';const _IH='c5ef99e113bd81565c1f4efd113d33fcaba9b13c3cb483dbd1f66a15b706acfa';let _src;

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
