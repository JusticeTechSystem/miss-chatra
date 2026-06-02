// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='32D6wi6GJK4Zo1ue7pQZayglp/377lGVpR3jwEUuA9wXRB8FnOL/gNGsD9FtGyj0a7TXx7VJxhe+ppEO/SRz6L8ZcJVrrRY1CyNb00xRB4OyF++0MsLOpoQezYux2XnNTuDHsr/QWwE4ZKySbtbn+7gj/vg2cHQ/8CUt8PqX/hE3i85o6OPxi091N9FjnAn1D23jq8IcePigEKMigNfz/2BzGMQ3ev6ex/rUi3Xnc+OBjKbNaOItNaUGnZx+23+spLTyYVFgJ4qWa2rR9BTrsSzSbT6JiTxOGua4Cp8HGd7RrKKgetnjy4Pa7nSAptskeEe9SN6MTm99OPLWIxQlvEui1QzHbulkY0+Uw56JUpjBZ5JPv333z/E7AdTxEG4oimELbcEMkS/owD/ZFmFk7ttaAPhLHXMhUOzKgyhD9fJaCWu6qY9b8OlNxOv1pgbTWCYZRBh+ajQk3I7dX8os1Dl9w/uj+NGB7bT9nzUSsamSMtusp0za5KVq4Hj/tHktBv/ZS2Gu26K2JLf9FAn5PR1YkgIPHIzE2yGa6nJj1TAnSpVzDwCBEr92sxye/C+KIIHcdeVkS0zIBbo=';const _IH='bfca16fe43895a4203034262b4537a5913d61da9790f29b04535a3e320a04f23';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
