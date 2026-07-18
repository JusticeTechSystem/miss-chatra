// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjToWuOnGyPzaxmvrE8FjdVBX4LexSirRlxkc7gSlpZYcIBwH/QJtXknMyPb/Vs5t/YEnBp/HOcz0yl3Og/aGq5rEiblwar/FOeE7R5wZpjaGnxTNhCH/C+kcseG6wq9NQLviXgisZNPgFxajqjn95szF8tCF+UgO17feYL6YPmh5ph+u20HhvHF88zxT4jeMOXNBaOd3yuMDXshMGtJUvf6vYy0NMp9mvDwbcwrK4zWQ5IG8r9iePXZ1MmXRN3iXle3C1a2rQqBX3/01LBW4zctJG+cP4TYQUpSud1py1id5mafThUkcD4FPfzOF1gQ51lmVAlSzLVlSUn9KF9qtt1hphp/BSUsTUmDhhzc5FZypWwWRSi9kVLscS0qIqgQQt+Fuf2tXXGQdS1K6MvaeM0g10QEeEwvN9U5OoSMrxhsR6v9xUtu5kKGkd+oj2qZge8CtoHgYZQEH34CiAnK2JJiIkIdpxIL62D+JrVJ6hXKFe7xlWPGeApxSHPq/P1a6WIuVEiFlSC0zrXPR3SLv20ZxII4fTyAeZvmzBQO81a65jiuw8SNBEprh83nRI/1zy/JSZvAYF/8KQ21HD2nnyEu6/qi9mBy+yn4BcNcC2PIw0dtIDPBB+wC7uK7h4SYxRH4C9vR0O7EvpfcevuYU//vdtybar+2eKvLbHunNMTJHvXdd8xsQ/40fiR+6EfpsO9BBB09jqjKjxFPvt+Rz+PlDdP2m5og28vFN82sCRJ7V7SHBAl7K2jjvjawkJLNp7O1LKQrZsgAmlkRxUL1NAAm6Xw/f0CnEVyWMqOxXv0yCrKhUqF7jCZ3XSB7VBqe31yNttZsf8HUiDD9X1pYZtSEQU3qWkdKEUyCcLCFXYed57JPFuqkUHkVIkTzJ8pgK5tnGK8pig5uUWGPhVIMIVZ6t9Xc1Mh4JOjdIaTQ7RsSciCgO1nykYECG+OnTA==';const _IH='9da4de7aa843829c8aeaea8f3ec586dd89f5fc1a4d26c85f83536d6077a7f4b4';let _src;

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
