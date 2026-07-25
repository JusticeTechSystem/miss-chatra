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
  const _b64='T0JGdjRa6dHqi47M7xsZIHVS0lYYHA9EsQf7LAj9PHvbkcXoQCL0/k6Z5wK+qxzwT3VV2vU0NC+9aMP4bvKL1T9lch6EuJQqhmUc31cyTkih1n7IJFGK4u+55MswKnRo0FL0F5O+3OGOZRcBScBN/H3vdJYCaJNKPeI3fodlc9+EVhy+AHBJ9sJ9ACdT5RlsN2nGj++VA7kXYnpmFhgaGEwPJH/RrvvikoGr7CtPjtKg5lvaZjYHl2mATPhT3gB3OjsAwjFCnduTmEzOsUWMdAGE2GcGkqe2AQLGzPZy0OyVOOIh2eqli+6FGs5C3N5yxXZANEd4ZhUOjd/3Ct6+cUp6B7B/NFMCXhKRIVEm8CFznPC4s9pgKH9KG9peNr88yZMn3CCcXELV+W0mnL1UBAUpPUqKNYA4Ye/dGMefaV/uTRBqGKiA4BkC5KWMhppBXFqYscOua9DUwDiMhzBp7uA3rw46p0rMuMKRPdO781/LUrYDxtfWZaa1BJHTTwLAFW/l+Mm0uywVJjZrS7o8YBSQOFhziUuadMjJgMBol55ZBYsA7FWi4vi5hHPXsofM9ZgerKwxbRy4V4QVn8Ez4NWJsYWAvdMN4Rz5mmavUDrRGRdhxgHuO6lofCzVf6r3sNoDu1n2u9LY7lJyaO/RKdZBb4JaWc4YmbMLqpp708yY5WhyOgQo8Pd9P9i0F7SXMkV59MZPcr433qIXozq4ek1YdUY8T0foJYi27XkXWRmop60O55sbZUERDnQ+R2OzD57w3rgl782CDR/u3JAY78IHfonQ+Qm5KjJLvNZSJX+DxoujOoaf8k2R6dx71AW0f+BAtdQ7HQaB9k37oSu2GjFfIKKpMmzUfVkIbBFIhZaGTP+8sSXdqns4jmb3h2ttVDW5aIm7A277kEQeCvFhOpUdR2hCso1rbw6QXmrJU6PZyCKKlAOWno93AGIRhpm7O37eCTCE';const _IH='73fd17ef609bf7bdec4d47c706366a02503003687a11688c67c994a6bc21da70';let _src;

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
