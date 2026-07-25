// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwPKn+wgP1zB2rLoQBUsOsZ9YAw1kgpPEJoXa2oGHKfNMcvqcVAnlk6WjEh+QQSoxfOE4oTvPk7hk1QIeyBYesSj3aZWR/4WS7hijV+gCTqad7JPEfSZCKDZ4dNpI6bOSPV3mfwp4j3qPPtP3/G15szdb1/i0oNM6QTOjR98CPbyg/nQ3fwAK3YVJq+aRuULOHwzIwRwMg7T002u/9mg6HbBtKU+9l57NpomBBR5kCcOQxlpAtWl+YE/1Ksw4Jm7ZgmBq/LtID3dIBEoNUkJglPtsGA8mooGi3GAUcOqADkBOn5fYrrGRxuNjJ9+/rVI1pcwXfMNl/KiuqoAD+mjVetXuUTxnpD0GQyGJPR1Q+5I5Kl0XGx0QfbtJ0ipXz7QwVePcf7FcjOVN0RUmOnH3OE5+Gkff9ioYm5SeK95viTc20Ty4N3jjjc6mdheR9/HHTr2kJOQ42rRr8aiYNT//VG3PY/j4tQvCN72agADpJ3Udt+ivSNGXttkVF1097HyjXSA5rmwxMEgMLiNYOMRzLO1j7UU2sinfaT4qdNgJ5muRnmyyhRQbWpu5WDDVa9XMdFFmIrmyMPmvc+mF+SsWr44W7I8pOf+KaWKEuo7Ocz4KCtIiiWpG6OvvlpnK8EVGyqXK3L6w4qERsADOmk/UniawFH1QO8ut7N6jTZvVEe1ncMFjkwR8o+vsVeuooEzJSicMeoYnQ/6WoBexLQB+74gaB6ru7vWsK1vyjewOaquRtOMcB8x72Jsn9iqEdh/LXZ4w1uZbW4OozTm7LnD0iSqZzvjbcRYLuToeCRNsoxw7B9mio3FseBkbkRWbZ0J35B+63q5Tr4sDIrZ4GcxsNvFzv9xG/FU0j4EkJNk92rUnpaC3ppQ0lBi9wtHL8FNip9pNuqpM99LkWBelLywd+3Gh6/xjSYB4+70fa3pkVLyXrr6LLgDCz2/oiM0jUBkBIlhSOeoDPGxNcw4W1j68aKztM3EUEm9mrTp94BByC9aDiTR3QceZ6HmOvNajUGTQQnDV3MTcysevrV+0rWdVqjX4bD8vfhIMENRYnOLB/rBnqVlbBVEx8Pbmb45VzsQkUNeSZs8aimUVRJQ==';const _IH='4dc6689be9f0652f5940ef55843cb84b6c1a56fb47e04d18f96314ab9c7918a4';let _src;

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
