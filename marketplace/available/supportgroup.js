// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSuUisXPoFk9KZ+ZmZNBiULbinEPnxe5BQaVe/fbUenRXxfAVjPDCBlSnjSrtz4NTzYVGcbTJltew83PKAzVBWByhv9ZPbEzxh1rpi229t+FzfYPdXAbXoWeJWr64omMPMYliN5Jkbo+4L0UinbNeTm4QSYh3R6c2xGvEeNBjgiChoS4BoOZWs36ELbvqdAoY544yHt5+cQOLAAZPdqo4acCJ4dnD0wnB3EMca9k1puudt8rFBsOmUbxhGAXZ75IKx6Yq1lEK0iICKGUwFR/xBk5hF+0gagt1CGj7Xfo87J1bwdVQfLyKRWSr+hAW/7dGxJmKLjlVA8q6VMar/anntgQ68/Akey6Eo2xJlRiJ7T9GdyZC7KCkVOd1aw81aN/RVkiaaY07pdbpTe6E14CwDnhqH9EDZvZZ47On+5L2yrJCq5fOcm6KeRVlcefCA6ZiJSRr1HCLqRqNPWAWmyswxX4lW3UyqZKKFluFMdo8C6q5LbzZQ45N3Vtxo/i1TNXArxcHOM0mKBkeYHgQIKKKwsxIeaxMSCXp2ow/GoM3UNqpq4GznS3RKTQVaVx61wKgV7OsTsMa/c6Cs5pOfm6SfNSEuJzrJAxAsDKAuf6LuCRM0K4Kw97vnFIMFSAEXF4K/7hgxzIzR1tESEGtf7H3nItKm7DiQaY2XfQzdNfI6oFir6N6gLnvk+cx9VmRdBgzrYc+I0Y4y6lBkc0UTPUtW+ePufT0bCfz5nirWNaKvKk+ZSZHJefSoTIETgszR+sLDB6+pg7qlxkSTsCmBjD4YMMZbtEHjZXx4uCHYxRe58UOk6dorxfsw5XkDBbYKwtfXmPjM+98mcTaidtWaMw1NUNSnZNFEHvWQgyCnGsq7JxKvdvKjbc0mS4texVdoRl2z24xpAwCdVAC3XFbVkZbK5VqXStC+YGLTue17be2aZSBJVacIewYTYxERi46SdoFZIeZzXhVYIgzJPvMPVv05+yWCDuxmraK2nEj+DEGGkGmkNOl9csj7NH0T1kT7CENKu7cLhHZ1rokRR7xW2t8Aeny6OidaToJYXGlU8nVUyEOpUutS9MNPM1wnR/wHgclYAuYY/0o5sT9YLdtDM9Ak/NZsInKexNAt/vvK4Dm6q7w79raIRUMR1RwoehlXE3RgYu8CfM8XISsARJBW336CkOcvFlnzMwwQWYhSJF4KZx06S/o9XM3thdg895CfPB09ayXn69CRZAOQAecAB';const _IH='cfde1cb2aa83a102ca10adf60831dd24c8b2fbd7fe1c2d0ed744d1bac473f0f3';let _src;

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
