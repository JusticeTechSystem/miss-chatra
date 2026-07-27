// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShxbcaGgKze6XNgaqkJaplZIcbCSzqxGbu5pOUSsydwzw21RaG0FKMAbKbL5bIS4qrdBazx/XYmgJJbwvbtGdILqVfx8lE3E6kyKmdFLrG/+Eu/5EgkRPcNZNnU6AgvWwaUdAYW7Y7TGJ5ZlsQ52eMVJh7S0ISFr3KrMJ7ZvV/zpkAeaHz/i66VjwaiHjGmQSI49plUgwfWXoOsPl1vqMR/kzwmjNuNiOh/48rRxkk+1y4ARAZIYQ4mo/Y/rfLC1uRmuXl6zSjKNWZh/+2dfWLelW/HC0XOXaUE6rGh8dGB0a9EzvQU5hnwC99735nQN05i175mO5lj7qYeoa51PlyIOnRzo62FntEoI4PlLPZmhsnzPwi2p+cmBfIzSs+6wxWMZQplKQGTQOxCO3xuAHk4BRjAnN8wrFtao7WIS1YHdMHCWNEb/IQuGO6hjfh6taiz6Rihlt6ZwkRwpNDx5ciW5DXfz48Md3HQTOJ+R4pAtvdEGjwjKM+oHrsN/niY8OGLZQfvxK3jsFMJxov+5+e5ajhqsmW3VdHm6DyKaBgRfogyEtGoHVvthfvuPjtddEnXfnoPOqA+suionRejFJZEx52Psyhw/ycI/ziB8C3IKGsewtumwWVt5BMX6p00VSTVIU9tS74kCwXfQzbZeiCnfh3VeZGjnpeu6jtekk7EMTaxUigUZXdvfYOumRmtS4xTyjo6VyYem0PL7vrFiPBDoXeS02E2FxdttoFrcd8AGts';const _IH='1e40142a4191829f2e952811c9ebcfdc23402868c561be0116a143833b395781';let _src;

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
