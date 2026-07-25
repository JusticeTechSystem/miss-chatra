// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFtL1WRHHvTAuI6v6pyepE5fFiqsAHbxJsQBO5ZStVj87Son1ACiGOeom8y3ySIinblSmCun2bGbth/wpNjuvyUJ/IPErcq/MvB8NHZqg08wPavNg4JEvDLkFll6Zyj3jnVb7mgjeFCUUjRbnP9WiHeuh3BZ5PoAtgsIm+gJ7N89Rwv5GXq3vYTCGv/8hXdve/1pLd5bxcEPXzOZPpz3VK56/z1kBZLoF3uuTO3PjlygIC+vrtbMZGFvgVSeUT+OjIc0fBGV+AwZ3NmNItPp8NHO5qer+1vhi1uG25fOwt+/y1xG8bVNpcByIY9HB6A0pXPAk/EcXpZ2VCpd/t/Z6nV3tyVo/OX4oVenn8U+a0PchCk3wLkn/g/3sdxHzKfnux8G+BCl+cChfJCjjm8DYrQ4AtCNRJsRl0Mujh8SeqwF9QAhrKapol0wuF7GSBma7Vw5Sb7uDZLkVprfm6PajgS+5Wu1oGASW6voxJXr/jsUUZejXz9bRf1Mr5xfie+oduCwKLfsYstKno9m6qE3aox5wZd7AYbP3zLTOhoYHYAZ6FAI7WmnzTL1ziV99NJhcj+Te/QtHDZDOXhsQCmgjzQKlISuHDTUG3aquqayfb/08/0bLOqZD9fXntG4cL6IoE6EPCLFPnd2mvcYnOz1FFH1m5+Z6HBqQY0tVxd7cr5WVoNXRcRxzD47R5k+NSFx6d8b5dG7IG7NM87LY2SkgfZ+T4kGQvm7st5gwawsG23Q/uw31hNA==';const _IH='2abd944477b31ea43efc91fc6e3152c988217ea5cc724b64ddce9b14c9f19c01';let _src;

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
