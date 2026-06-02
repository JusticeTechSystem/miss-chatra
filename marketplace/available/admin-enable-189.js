// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2h/WOhCvw3jrAZM1ODcooQX/25wGT8vo/gSpmt1EBREmd0mCStdeO7wWuDMef7Qb5IvE4W8+oH3Pq+ZxnbxpKX81Ab+rIKc5PXJlM6ZNrEYbUSPBNk0Ux/XmyLXQ0zAaVyNgIIl4RuDBZXxbBKvULhTa7ctAGc8zYKywZ7drQbz3A6B1b6MICz7OmWPxe0ug0jHGZNh/KMEnf0XyViLhhg/vkx9PTYcgItsO85l4iNnp4ItbrvMQS7X4ZT1s9vQHMtF183oTYqz0J2L0ryoynlaps7EuUO6CFc+9RQKcp9Nk0tRW2jTokQFgj0rinky5BPYNLqZyqklE4WR5i+iDGPLg182BXlNazg2ndEsJPw9BXNdGLg5X55h7IAHBJ6wu7P2qQMNXAsT4c7fJDPu5TQycVRTDKBz3dqsZv9VHocNnWCJrrqrX5wpRcai0QVc1HwPWWMvYxGwRTXxY/QPTYJJy5m3gwN5J1RaeLy93PS29STpNzGgM82BqwN0LRCx/CH4SGdJr210nAxbjSJu0xHMT/+yeWyv3Gf2Onx9kr2yl4CykVft47SiQ7udebhtFDMfftUkYgAMil58lCWsKU9No5eyjlgLH14wjkT3oyKuf5Mo/lAYRnvPYt3Zt4CTEO7ydPFhJYPDALuQbOcoHsf5Sp6mT7veYPDsplWbuH2/KTzkimLmC1WwaMdM7AI1eWwm5/W4iK3CmA+Pi3Pd/oNomtJJFyrCgY3EKfoubaVDU/See9VFyvPYiA6PMQ+mzygt6cIEjjfrV3zY54X6dRhDb66P7VFX24y+hhuqR7fDaoWhx9RwC4IWpf4tjlQd3s+o/yvaKceVhxlVMwYOzXnJy8xC4Psn9mfRzhqsVhBGVACN4Ez+t+Sb3bOLCPboPO4CWHHmU5UQF+Rr+rIJ/5XzvD7ImDtbL6brax4awLi0uyqcd6VviTXHU5OXxesGrLnXo6Wt3H75wlpjYtlIqGYU6wiaycmm19S5JgCnthro3ywKbZN1L5xbaqqc8+8Qb2Q==';const _IH='4c0d38e80f5f13f9d294417fb88347959bd70aa09290ef612e618fd085570382';let _src;

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
