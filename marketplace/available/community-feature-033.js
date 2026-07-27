// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTbvffDI3epnUZsBv8+DMahyEoxilylofyjHE9N+ZLm2QDuHwCZgJaFyNrdn5BQeoAAACWQ7FGvQ5jhoUmwcyITTkxBqY70KE4sqbdMRgJaGfP01FRHYjulc4Eyb8EtAdEP2agK2P5yievDQlxvwWpwByAH6JFQthDb/aJzT8MlVz2FmJmipxnTBbo/71bV1d2QpkCAz26EIC1PEvdP2A3q6VOHVok2/2dfcx5lSSa9sroKAlAXjXDt/yjs3453RXtwD6dHxZ7XOBM8PiZLqhF3iS0TgXFa7cu4B4AOZBZBUzEY3wDqd8EE1dYSi8/ZdQLTD3E5vMuHwe0j+VBS18Eg/2eAQhjOJF34mWep37uFthq5Uhb0hM8srrS1vbTTukdyP4n2+IAqjUocVYJsZuBbVgZIA/STUsGJzRDtUoq4bbDcmUYkiD0rw5me3kP5YmWUEsoQOXWu9EG1W8QIzCcCt49nyukEN6Jxs37WUXAKZvKnZaw0/Meqv0tSNAzD4UxMb1nRVTikifYyWDqa0obDO0K5IhElkLtCvKr5SxwhrYeZBRkuAB5zfqS3ENuLxk8IrwGD4RAvZ47oq2j+Olsf8EdfeznWJnfLCYEM82APL9GLJPfoBU5J2bnMVH/0L7KqXeiI4s8dU1uJ2CBPb75C6hnEd4NHjQYSyXcLNkyl8n8tKhsqgHwuh0OHKw0b/7RMOi6VyJ4wxOZWmWHXukRn3Je6wH3rGlXs';const _IH='2f704f4848cdefa83e17e82f4b1498a03f04ce27e8ee74fe1ec368b672005b01';let _src;

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
