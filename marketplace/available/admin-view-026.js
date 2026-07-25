// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYPrwk9FVm9AUXCc8z+WzhBK7l+7NEeU1kUdxOjg6z28vpozKrwRoQS54/EXZ4cWq6DQlCDG+mDlROt++DvL7LG96BKVSirH9EEVH81j+I3Cej36CPdrqYopI/RQy9WD1QNP+LAz7LspnWmQbrdg+yoI+Ry0LpfB9bnU6vk4zRT3JPYee+BYw/4JyFT+ZtYpeitkK/fz/amsrsKUN3R/dLyID85sozyYl1Ztgh+d1nbg5A7gddmgVH1UdwhJ4WQl64zrWd8FOt9ioa7XFgkfRV0yT79Q76llHorJhuo1crtmvCehjp9b+wrrBPYeMwajNENCtgabYn0mD0B/KrUHksYbHxmrqS7ba2tFB99+iJP4xp8ikMXE8UrYPmSZ15RVUQX52v/YRdEnq+l+6W0N5AseAtcmRQD08dVwCabEJBFcp4KL1z/uZOc7O2CmP1KvBiOuhllRH4/CykrzKG9LxbClDXMw/sypJu6aQSSfJmzaLGetiBX8uCX0AyD2OzqJ1h62+VWSVMJpq6H/Z1Ingw5s2arCULvpIWV1fPvHg/KcMm50GxgU8E94GQR56ztmB/Poy3cUExl8R3UF7mQE3Swe2GSwo7b8TCkA1HvY3XN9nXIZNUbdjfqWW0myH91U1DwWLQAjGDntGYH0xLvdFRZ7l6c574XzVygnMrcmRLIFsTqSjvwM9RhZa72FtHGUD8w2/KjAzk8ZmSoDQ+L7uLStWf5Jn1VocZ6h/xyqsQga0pRGEL6s6QG/hACZ0hFddt79kQYrv0ZcIMI/gj9G+clzzDQa2PO3C3kAmnd13HvDDzhUVYpQg8bqzTTsOUNnbbgk5BwHu2GAZX8zEmyv8f94GzZyDzDKEk8BDokLWgacfme9p5/5/JP6HMZJUN3A9uAqTUAnYtIcEV4PsB0XFyX4ppgcq07dd/6ldyZuUrLbUJ2aIr3ttuQJCCG4Vqz32XWUIbtzgGzEiKzeLbMfWQWZ9b1XTHsfkZ4SLJDzKF';const _IH='470d30f856db650eb975edef0e13b3be8a49f9459efc94f43da1553ce46f8a81';let _src;

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
