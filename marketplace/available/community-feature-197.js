// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ckkmxdgWub0AAERnRf5jQtUABFipHYOurwJSVfkQ1ZzMR+npn/JIpYsbORzeMnQnB/6oUnvwuO03l7ARPs8zXxNyf4uRk4ejGndLxENiBETuZsIrpf+Wp8hLfKIvnOEgieU+1uEynT8BXhqUICrgtrVP5ILSU3Rx0RwLrM/fsaF7WX4tGwImvyNsUCDXJ8z+geMiENu2lpw2YDnQAerWPtPe+t5uhyGQV+ds4vCSCwMauoro5k928XAYZXEptQAx4iuoNAHP7UeYPwyeFaCAtJ8GsBqkNzjmhert0/iSa1tAkFt3ZtzgF9L3X/y7qOf3y7NhNomUXcx8vBONgOogVQFyCosWcESfUHYeZUlVAAWa10ldyoB0vvuo64e3acWkmaHlEsw079MCSpKto8hyM8lNuwBJiwDG8EZTAcVrAvELdIaZh+cuos02hdPIGkqcrnbIf8OCOTnyaffljyyKq3kBh2tkzqrVB0eBViRPlbnXGkgWLlzCRDOcjKV6IcXIEzM9LgvHh/6QjRnB4aUbz3/kFnggMzSvdYPdU3xHWSMAetVrqnEMEAuwWHOWCIzMBUwuNJoExGd52sUbydbLEO7PGHP/+1zg/z7PkJ3Wk2CigTu4NhyjEnt2NpgW/qrejbFg/4pkwShWtvZDQbT98QJoGXiAeQLkses6NjelPvnpcs0OFROwZgpRDpoVzTY3NOcQL+2cfUD20W/K//HBSjPh9fdE84PBoOxf7N6BUBPilcs=';const _IH='9cdc22b3ff4b31f579b214762c649c4a6ef23154ae19ccec482e7bfe6393fcd7';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
