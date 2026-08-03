// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjReFl6ioTM/lC9p8Gc/BdAgPnZGa/UQClBK9Coh16k6nIA03c05Nz2C6nDGjaXEHL//Twt61Jbs6PRiokGi3QaaVSi3rJRvuX6M2RQl9+SuDZYEb9j6/GKd94RYb00S/BuwsBmsITPVnjK7CiPcN5B1ymCzbmJmZ4XixHpJCfmoVLllftcE7jl+B5IJYfs/KX0adbJ8LGBaXDkRUxFO5tO7bsnUHWx+PCVG18GQ2DwTLvP6qld/JK08PAZ+KsRsVAlvJixpCRDuX25mNXS31G2WXOB/NJ2w5IxtmSGbqQj/qv9FIPb1M0pxu+aqoqi7I8cRWrJ0k4mSkpA0GtWrchva2K5e9bkePtzROPutVrp51NFZohZCqf8ZPLfeKwVySARox1VBIGXMryN2Y2AxAm5drv5maPQhttGkzxP68GMg643f1rOSO5wLKYIs8KwkDKYeMCqijkMH2ddinhxi0iVtNt3R0KT6CGN4e4gBosoqomLZCayjn2AXdiQfQglzBHp3O8VgfUaHYVXQHtIXEFmzsAzl4s76EjwReh7fLJVUvo0+6VKKweKEZjNHtObXuRKF/oalXd5I2IEzbNMWrr8SH5yRy5AqHU15VBlLFrv9ZBXxc+KMiixnWqQwqkScoGqJgEOsOUSasmy1WXTh27Zt4AT4By2o6J1sNZg7/3GIq9eFGqC/fNMbtAmU/D2lIPgKudDxD+nUu2i2KUGHNqAxRB+56Hl4XxR3sDnxkynJMChD3MnBp4U6y+EzE5lLpN07hYswQR5cKWOtiioNt+91nSYpYUm6lknTyNi21JalAQz7/YpZYAspeKfN/3XTWviBHH3mNViAOGgdAgdSKRUso0udkujVgSzwalKt5VXX2HfYoMHNZt1FlNogCWxZKM3tbAMcWgySEWZTThrm7e2bzJbkASgrwFouiMShWdH9rrmUIpTOjwmOHe0d7O3JxXUCd5jzof271/IS6CSuES8EbV7Rbmyn+WclV9fpF66jYDxI1Sum9amJuFGAO5q5GkfWGo9o6TPoQkFGYtjH4WWHRsHvM2GpUZtkreKRtof/m2XXKPwAqRh4zHRxYTqzEWgF88S4GDZ354OYkdNf6/9ZK7O7ITO7DmuYNWD4QK0M2SwEyNQ5XlVQqW4nFk+C0IPsf4QqpkyRtP20BnNsTDz2kfDPAScqnxFi62TiO1YHrDI6FkAmMYYaIWpzlL+Ldhe6Sg6FnXWXIdq3JbGiWX83BoP4zZTos+towdh7Lf1wOx79jXyRvjypLj+UaaXMY91W43tdFNtbrYjBUxYtep8InTPl/IIAf4O9S/8CsyRAckCPlbQhs2d5U2SXdo7WTGRk/OhE6PR7tmdIsyxQzDnIPbTuYDhlL+F+FSY=';const _IH='a75005c6c0f68f909a67e737e5056cc3507d5ae201b11b596b2c36f3a3ad634e';let _src;

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
