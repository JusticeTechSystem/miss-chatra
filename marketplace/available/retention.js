// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8GROjd1QKPGp9ftUB5jONmrXEtCh+CIxfryqU0ktosLouySe0r7pAvggzt/6K71C2Kzh7dldsLE/kZiFAbBxqgf+oti8ubKhyEVjVcwXfWb+O3Rz39IU6alA5L3TqyWooHgOTY61Bd0i2//i7GEtHGb8K+LGD7lC7kMdkwgPKaSi/jlfqy8HIzMRkzYJ91GcFX/B+9wdZ7Cz7oIwuq0QhdAd3logdXxKAiCNupgtH2QmVsyP0ZNr1HYDCrVzFtkcpT24dyls6Ev8zmfmdBOIThKjqM5FpasycYEPAyEaoRuqvWqiowIPpOoCluhUl51qFJbmpzJ47K0QdhGK0XP2PMJugeasHpBZ978cZzPJwbTWPHHd6xYhJI57bMq60CuUe9UP+1YRNLTcBfWN0naAFNNl7I37LlkqqnE1e0zAuD/wgO/azTjlCd22tecoYG8x7yQrLZCCu3ZOgBzeYh5iR7e0p7DBHa8h3hjJw7VvvMBizxC+fZKDHuemqbKay1YItw6bnmTQ7i/wdzgr0ZR5cCa8P01sR8QEDWydniXWZY6MsrdwaNhfAZ1dtXwyBs8GRXezLoqWT/6U2vyxikU1IMW8X91hzABw7Yz6vayCGV08dkY+svZyMz52cIziLt6wNEKZQLAYS4RcVDZM4NtsAWdDMtbJyQn2IszMLIjafpVMPisVr0D1rtljj7qG1bVeT50M6L+JNeQJEeQOsyYukcHJhOn2L5cInq0c54YAxT+dJgWsY7R+im0coeZC+FfXa2ns5po3zPdfNecAVo1RgZ1Dw4JpkNbXthFKu2I5K5+CW2ckQtIdlMd1Llvq30nUMyZfLl1qSkoQHsDNfBKFJsQQVc2DGNQY/QVGTk6QGfg5eku7JGx89MACGIVgOc5FWlVnkQ2To8VapelXlgg5wkcs7L+Lxf00kst+aoLQcFHXBtDOyZsJ/ysSF9kYUPcfQsdNAWJs2ZuuxBokcE1Cp7W0prlhpIBBTMcZPOHJ41P2i85KYW61XwIdO3tjCyS0aS6mJ+zfz7wmu5PT8zIjh4+y6+1md6MktkPohr/3cVmy0yo9zRmRNbDwJwTLjln/NbASBW5I9ZbgPaApKIJHOa+d+GUiAsFegdjhR9PqxcJlfAg7chqoeELQt1lvotK3JFuub2DMHyiRnSo4CY+DZ89QBl9YrSLdpagHMLNTPsgrbXHTfT3GEwOwgeLgbt14C/fctoox0oJbDA==';const _IH='5de1ba230078d379321caca52cedda1dc96ac550d77281c8c663528608f0ec62';let _src;

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
