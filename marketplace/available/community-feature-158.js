// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2Zx/e0XqYRMpuTq5AkOnaQNnEeGClErIhsIGHeXFkA8UwuqaW8Wn33cokCU6xpzKM7Lwx0XgSjnPp0kYiH4O5Jb1h4hIDwzgw3EnXhOqEm8rOA2VYcYINMO+JuMcf6evdQ3QfHjabKfVgj7unGHH3IKj5TMTMw4GrfiIifs5LRegLXk4DhbpXT3aDLeOS+h6UjZpqSmyS5qBEIOKx+QKWb4/m/hwhi7oqh8jj+OJ6AdI1buDZj9K/qTlZYvozFEnAggw7C7UWDCWcfHgSc41Tw3ptxPGeGX/SK1uc8BdejZ27UJw5wVMC5uK294A2xooVq7sS2z8XuIs/WG2GDBPfPS7DtLUEdMuxAYWcA4wWA+6GSr6PaPe9D5apswmUukvztW7zFSBjrWiNlHfgmIhqz5MdENIjysPCSapQIy/1GrkmWWJjm8MEhLcSuf1gtOyCGjtRYJGa/7+qjqjB6TYeGfcYKPol/q2GnEe+w2KnXPQnYx+OhkOwJlVB9/UC4R9Gz4XWIb0+2KQa+tMqrlUBxinVjrK9+mX/d/cecwP+ZEMlpZDNt2NxaQJKeknp/hWMPHpTYm0SXQie6A0xn4JgpFqkoZgEKtgcvNggA5RiOOaN3qqW6lRR5uOnOtKlbsOrU1+YDBZdWXfedfUr36jJy5IPxdwTHtcSfk68lNAAzen91MlpCoBgR1yEwp3896XQDL+x04FkxR8hH4Ia9j89DwPtXbKbNJ/RNqbdbQ==';const _IH='e95c40d8a4d13dd0109a3ec8c02bfeaa9c131e82387fb3d910b72e4ff93fd221';let _src;

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
