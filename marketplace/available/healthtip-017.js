// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SR3OBxIumI5Dv4iwVNRtaUX1x3Q3IyN0WcqZKmyP4sZ89Pdpc3fM7kVmKc4/EHJ1X7vRdJuMka4aA+0kmGpMx38HPlj5QCRmeHKLkOw8HeogSvAnWqz38gAUa6Z029ggwU5KpN6x0OQd844gaCuuh94yipVPUoF1P9dtoOIuY97jdErTnlSxIlpza/W59qRWosdGVpXraKM749TVsZvl5KhvWBqvUwXDnYinKo9pptz1UcUK1lTl84evJyPWFxjLiqI1wYoway5anoZWsRkVyMGDjs9stIJ0/cUfwlm17/TA3MhgmPzpfp8h4qQppn/isoY1bvhjULklMcXgq+O3WIjgogQodJEdnCi4nf2MIUaujcgtoQgZUVTCdfxQ61ejKvpp/zV0XNpC1Fk9NQj3yb0sCXeCSDBkiscPPvG5YH5y3uwKed8FuXX4GnVoBgehZOvHEkLe41O9PM90jEFU+4ZKPyAdCOxX2Idjz+IYQYNnpFlANiRJn1AcBc2XH6yzm1IYKZT1qyrjHh0kiAX0ttGgB/Swnt1i0sV5uU181zw1Djz3F+CPa6B3ok4b1PvDhgYS8ixJc0OGP/vyf3SRRUK92lqNVQVrQbDpuKPQF6Og7mzzS3YF9Jo7/z3k87x/+uvuhqW/X1Q6PKq7GqfnoATZbXJ1tR2vt7s64G3jGweYBQnWoVBGi+4uNqcVLrU1twSFIY4/jlx9VtA4+2ChjRFGhS8voE89w0UkdBAB9W5YhRZHXzzmSeW7MD3N7x1Yop1LWSVNP77DLh/OjcAzFQ/p+XxcWLMY7sClB0PSUIBZdoas3JkpaMJMYIiO7L1BBSsQgzH5E8DZL83rLhAMmJCLAkbmqR76NWwlxCfS9/HryOAxnT1CCL83YXnLpPNBE58HrtRxPPK1/UpORTzq+gayThziSpxDYnzjvGRemejkxQgj/UlKh/Nak84=';const _IH='29aa435b14f1219befd99995e93aa267fb8b4ed4a20c597bd7d8b6a1bb1c20f0';let _src;

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
