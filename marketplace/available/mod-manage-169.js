// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+WqhfxYW4zoMylDWiOhc8w8+q4qMpvw2qbcmEEVnxyp4YHmlOWrldqCbrPSWo3kOFXVDxww0pCfmmajK7cfitL+gveAhEs348gaMLDi8QJ3MoQVTE1fYqYg3i7UJeZpkJDN1EJ7eGd4u0pAFtwp10bMwxiqrz8Y9vjIjW6EWEUy4p+R5MB7h+7M7lQRr+lTUn7foRF4td48Zgf4tNFRF23vhMLY0szUeyp4bfl4R/4LEF31a/niZwTDDUxlme3MT+prQCB6wq4c74OlYkgAA26KRGkcJ494SJRZd0nUuhB0KLhja9nyo0su9N/PTZsohl7ROK2KgitKi6MtbRVFLO/7q2GEktWdZkIK5AW9PtsUU+MOntXIprJRA35kYP5K/yY3JYFaKsL/c4zJrJ0Apglo474L+DAR6T9lRJiF6adSf/INWkZlqaB5pjFh7CkYYsjUUmKJaFBwoUFqbEwCOgwY6lIncx1z4m8Gr0PJ79s7ZrSrIrGIlZkHt4f6zBBgXsliaMWUxmNfcB2mfy3qMTAyyyN/BLNwRR+W6TrOdiUYY6ofTvF1IdBYZGztKRMDvx88+rdzlxZFHhOqBsNZvDkvn2+D+po0Y6wtTohZgfHs5agRP/l0oGKBWRImp1DVhBA7MQpKNJu9NFbDSxXrzU1Ru55GYXHMERyeXcP100bYZUjysxnsDDh6G1a6WngqtXf7bbeptYmdnh2zz+NU8cegC84PgdPu6mBEeocm2hd2Qq8EP/jAJTcalgpC5h+Nzc1/E5pe+7h8gaumDVIM8J1ou1HB3w7QyPcBYJqpJIo92nLHC0BcQr+1bMVZptuG3eq+dXQ7AzcOQ3NQepN4BcumNgeE7oz0aa4ZqDgMvcBzXX7XS/UufdsgtNkV3tjscLkkIpF6MT6itv4+QUl5JIt4e5kkgd0Z63YnbCQHgtrEqpxgw6gOjYBwuEZRRGISYzcVVenF+oI8bJGxDBkIj8B8t0jHakokvOWi4SYQuTFMaIioYX9owd/w4hGsLHDLPDm6lw497iwGYvovbzEDrAFr1Aoj7xVYBFMV9z+085ftT20JQDvEy3K/t/J0SSK0YVzjsrYhluZOzsYJkja7rPB2WMlJQiD/4E5Nhd+XGR2TEUSXQVX4JLnEeNqnIcANsuGissAFRi7AUek4SkhSXmQlyhJLKK6PtcfnBE5wkY673TOYQ8nB2RIwOwzkaQz50QXc5TYkaLOCVI0Adntz+9p0XXVE05h5uDvgOsw+FD6sFOh0aGD/HsjFYWNkrnmH1I3Z1LjJw3lhGW9Xf086tcD77DOoWsTpIBXgf0G76aEpavApVmBBQpc3Kf3io0aYWJwOYecG7yQd9JNoXQnR2Mm9oz8H3PCMOOWq+gQfGBrTWlHWUKSUeA';const _IH='8aa56eeb60b75d082828f4806e3d33b298a3808f637a33ce85050efa83f65972';let _src;

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
