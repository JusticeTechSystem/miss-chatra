// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p6tfofw7HC0x8cu3bF03Nk/hwvBPi/qWNsyw64QAKL4veSK6EmAVH+0zh/T9xX4SM5E6lxpf2LT1uLi6osiOgPrGLd6SgY07uCCT+YkVOfYQQ1RtEN/5Dgy32toPw3G4ExD6r3WEFbx6mQaL9e1CdUVIJaQNj8Asogk+FYpHXyMICXLmiyVo/jH95XjJappNWaf1VyYjHHbDophuewXf0TpR8TBrUmNnSP657VzZbFj6xAaPk7W1NSXmMsz1AS62Gu+9x/2ecgvFLUOBrDMjNoi5v3zsaBqpCiuQAjgiJIo50oh7q01ji3jqNSV1notXzHyfRa4kNpCJCWQ4P1hnGoEWTWxfNnN1x46hSACSxD3WMvp8sDvyOoUlSpXFt3DxFxtJKEwcB5RqPwo57RsiZLCfy9L2G39kp07HyHqR3eimrfsQIhY4tOGs09lb7mmEV5kGBxilKMrMl4ILahQFfOev19wyn8KAOop5n0ILN2Gvss9UrGbP2+z9WvId99acXxhqv5AK/1Qhp+shnMr6nDbCUncH9ugzbrhJVKdnSn2FqGvSu78QuJHXeoXdIlyM4QIh2l69HcRZHgAm2XgJke64Gmk6dpSbSZTAx9apeWDtABpqGiymj4GrFRYDkXJWLOrLiwR8LA9Qb4VkR5inFl+6o5zIQa+0/5ijSBh5SQyTaCi9Abs4XrPouaKisMPES7kZa/nsYKIKfRDmmnAy0At2j9+i1FrSSYM0VWNvXEMSpucyDbKApXN5Hh1EOXEHCMX2QZNFPpIz2eQd86sYc9DYAMvl7VSD1EesmprjMz1g6NLyrcMHOPKMVRWgrzN++8psdCWfDIeey6xkcTXTrIZpfg+wRvAC7OdjOBaR8k6ve3UJOT2kCjGUWT6ZDoN3QeLQCm+U4t68zZcTTYvjOyGVmhHXDqU0Wpe8orPi2Cb8SRKGcbMm5iVzkg4CnzXD8zWPjU1R0DXGXHBnPcrb32iXDEFzYSLJk4fzdThgq4rtJHVuqTT36/OmiDE8LeH7kKsAjOZsKJLSyO7Lypa/Fko9';const _IH='b673723b2d55b470ed652cad7220d63f22b36dbe36801707cabf2295378de35d';let _src;

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
