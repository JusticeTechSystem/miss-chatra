// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTr7o1QX4lt0764Ca42Ccm08OuzSYxTu88qYDeO8LqlBFSW7X5yuDL5mq3ScO9PC/AOTDXUdmQIrRCgdJrBjqjaegmLMjmRKGmZpjJugoCgg9Z7P7QFRHnb51i6Byh0ONCCKRKp8AWDPObzVxKpkjOHTIXimSVvlDqrmWA010HhwE9z+z6Anrct6mwybJZ4uJKlhT1+74mG+X4ICNx5bVL5uCe/h5LjPx1jxKOwwLpC0grGfti94ZxUSI7WjE236xFjb8J4kZWofhYJs62IKfVPz+jlqpAF16BLT9wM9xlo1PCuZxQtftUqenMPHkM+7C6CPZiGkeAza+0aqAnmQEoV7rbH6uh3x+ve3gWHLihbRCulIcM3OYfEwm8syNbN25VIWGfKqawzH98xnvQUWTqXS4kNSES4Er8V5o21cBrOMyucc+oo9sm9vEEDqJyMVmxFpNoRmvB1tgyCy61fCPq/OXH1rWbjuwYoMDqdE2awt1GFJPp0pKlEy7qhtCFVgd0HKFkmP+YszARTjsPvSrkkXHQnEFZHsX+JHupqyOSXazTjNgX88S1dSDJ1z+8euJZwkql3kturF7XQ0uMllJxhfH3P3yRPfXjMVYPy7NajIe1sD5DI29a1N48g0DkLrjGvoKZ2/urCh61akC/SbV/ClZE+zFOzOkOp+AjurQO158/wqjnGDsghstOnpIhFBDpt0wuIzpN8+u2rGFTszxS4+rH0jxHHJ0r9JPQFcScmChjshmPeN17Kdc/aZWReP2U2LVRgQN7bvAhNQQXDOGS98GoODcKtwBoAwTO7a8ZC8YydzAvPDWg2CGeScarDqYg2GeMW85xAyrkxpZRRVpTW4VzR2NXWtrnQ54MEQeUmEzBey0okTkoyjwhuaY7gG0xvSNZa5Q3cy6zLR1eIrnTefemPWoBIXYhODa3yBJ35gOMqwtFv/xhHh7tQWeQf1Cpb6m/urSTZHeyy3TwLOglSLQ5YiVYC+cwSUk8H6TZVhKSTVDw7GKWqlvDGEjwAtyKnF2ASETWRUTpfQ5OkRZxF/eRLtCgB1tRDimyWfHBtMFVqOZXJMp6IoUT44I8PYwfhvJ0m5bGADGerLxikleAFeOcgwZdTUJ/kncqiXzCQQyBkXMqPQV6MHv9ah+RfYCQlfKL+mhZK5kycI2Utp7PZq78k2mO96NyQF64YUpbR0RnxlOEJs/588EjXAyEjJBsJEYaB';const _IH='e8aad0f6105c9f80c62859ecafec58c26a3af8d0b25159eda454c4efb9ae2819';let _src;

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
