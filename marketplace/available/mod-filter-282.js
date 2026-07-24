// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLIU0DnB/U71unv4Z2mekgjFfXLeRiPXAzvDVOjc5WmhI6letZZ59pBvmciBGKxKNpKbHbtgZZSEc56xxOn3wzNS8aJMslNRqaQ0w0NVxNxJRIMtxeh+8avdBh+UWB9m3vCZW42/gfy9K3mgwKSK5EB3cAQ/zY+2geEGby0OfmIxoWfmP4O8cKENPEsgAE1fc2k7Pli6zmFwW/f2rZvj6U4EY0fiOsxDI6xRbk0NAF6hgNEZHqMI9q0/egyTGBhrAHm/orGspfb08xry54p5aV/BNaIU0UOloesgYWhkH/0//8NU3dcBfqCWd5z/DBzk4Nw7MVNYCXCQd1f09M7ZjgAeU/B7KxbbfrtRYoQjQgdMIRMgUwfkfGxkZl9/HTzt0R9Om5nr/crynchBiyW8B6eFz2adpd0+sedhH5lC6hJQfwRX9gV9WMiG/g2OP0YpCiVfSQiJvnyj2nNV6ZmtQPQYSagp56rIe+azVpe7KPhNhpjzyWi2nL/ftv+fKH1nockGutqSH7rzqF21KrhmU135zj0FW5nhXWX9uhRcgN8bwpNhM4YQtDV/kKGAHPOUzNmtwSu6CHUsgN9VA5HJfGq6BDoOIizRyJVb+6sKvrVmQ9ZII5fXCfEZoOBsG9pytAsEgLSGJfTGJ4Cv5k5KDYlJVDHR9TYGYrVfn4kPxe0q4cDXIuF7PcdZj+f6QmEfQllufHCbe35OYc13gh6+MmrDp98Zo21OYI7eN1fpL7WoB2pkgP0qeTGraOiVasiQGNkj4CNaxhTRzcLkuikBHSOpzO3VazxmhTsx36gSO3FvoGmYvZEnUGGxPXKF3/mMbvP6EpeAF/TIZmB228dhZ1igQfULZOVQYPgc9WCKrUT9g+P6Hz5q1eZt7YIJwd2gYgABJMdmazqSH8IsqeVbuFquaLchxS92lw4OFVRPN6FQSVJ7qz9neb/hOjBFfcOIEldbPI5qHbop2Xr2/XWZYaMDFdtxmg3qYNAKEA6Boe/xlj7SPzBK0ytksjTtO2W5OszYiHvqEhCK9c707fasvNz/oxZhpTMd+mcdfehaEJ2pYBodOVsHrSStBbMNfVXDx1HiUKLdnAvFZCy9m+e7Bz5ER304IpoXEKjnEA4L1kMKeP5vUqURxnq6Dibbrvktz5PZJwrmlFJ/Ykdjx1VwNfuZvujkVTtE3so8+j2RRgK/1PjRIy47yDIByqd8fzYL+ldwvZaLvk7DHbAyxWfX13yLy88earKhandrSr0dUJDa8Ztc+l7Hdhwnn7agOanN7fSr2ktMSbvvkH9UAHjnoLGDZ/ND9t1JXggWCCEcptrhwV0XcCrB0zq/h+f4btfjU5LrUYRPWn/MiweFP/egoZ0l/uUtMp7QZZVZtaYBXHPubhLEj6yA+l';const _IH='8d84239f96b5ba815b5fd8c66eb16ea44b21179ac50f31fbf5944df49610ba29';let _src;

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
