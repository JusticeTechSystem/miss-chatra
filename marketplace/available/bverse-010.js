// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSv4B+b+I8sC6NGqw2jpnGEMpPgKqiaT6ReaNmPvnOOHYxsWuNbxHPQ5j0GoRD5B7TuX7MZrxgZiTRcYAxvYp356rsj92cp/JBto/aBXnKc1J8Y3qIcq78srJ0Aoq8lPwOFVUyE3epDggwVQVixFoV0w1SqKj1UMr7JB1E8f1+OWULNS67D/gKHunZFimGOHseSlh+WgWRqr/9Wv3VABt1kjjLy96W0Q6I6SYYyaVyoAyx9/bJwE5wMCvGcGfEDEw8KScx1935uOrnJ6vZkLvfcXne2eD/RqrAocQ3d4guXn2Q8O19ATMPezYUMw6zXpuw1ZR/ugZsQ/SGezQ7h0ttBx3ZB2AS5+zEdP3WDC9CBdqlD+YLy/uMEoaxXACwU2eCWYzdMwRp4fqnN367JemCfOjCGAkOqm28QRtHcTZanXK3GSGzG5ELVrPLID/ntIItsqEpHmnGUmh7Xzf+Ew86f0hzRt4T0LMbKKCjuXACpcRq5LmhFMs1hBoBrmv6QMTutc/jmNlh+qmTjt/J5WXvV1unMqGUMhLds2e/f9h5Y5Fz1OEt1JB6beV6s4oB2Qim+OM39wFSDyz5nXEEBqxTkaam+CrS1Oq7wNngiA/XTKcCfcbsy6s2X7JojyTEjZdJj6kI9BU8AGAZLkSF8KN7MOKPAyXDaR0p3Tqr7Ixf3a49eVV0XcbqW0eZIqXpuR/kcykWW1BmHuLHXnOQ1v/03somgYJID';const _IH='f72316b62845c2caa185932edb0401952584757ec9acfad88e5b8a3d9ed736fd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
