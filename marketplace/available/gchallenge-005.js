// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPzVD4LMoTS24dyK3gEzA6n01bTqyIrBHxvNCAliS8QHJRPFbIfn8H2nq9rdYLF9m6G3vi62o/YgAMnidilwjc0r2XHkJThNYhXXFhOZJ4WxkcUWg0g/0J7EC9ttymSNLSeRimHUEdJqRxl9kulshRV+ZB2pF2mamkpCZr8Q2uuKrXcAm1QBNGxW06OMtDl0KWDXV8HZSrIlSeFk31t5Ffa6hP3Qqb6CCU9dQhd0Z85GlLfVy9BcRmcl0zXAoVDEbAM9HVUFZSZlux7MqbGSWCt2DQVvcPVBTpIdBh3SDhCuT2Q7rCX8C+pWQxJQOzKB6lyXsuc+aw7sq3jobpLoOMe8yBYppLNeEvVuE61Xkz/rLk5A9t5RbCFPKn0whaMQZKx+MRj2N466Hl8hs9320Rdi0YIybc+UEpAoqmlmtwaVsJnFkN6Yb8bMri3CjyUHdL0Rh8a18ExKzOEDjL6wmu/p/ud7jqkZ9FIwrA7tCRjqX+sIOa6w3ah27XRKbVanSAVljgc+bWc7yycGmErmQyfRFJxfAZI2FiOlGrpXK8dOB1L2G9KWjzZM/XkhkXAkCbu3bjerTXuHknvrDr/zYXKBHL3KWJIDsOyJhx/J9uxl/RWopjU34OPa1meXOvaKqGAbTzS1ixE/oVCfK+8D/PJjUlyVVk/K96IsC80w==';const _IH='970a117c4c6d6506c1e639352c6f56477b244ddaab0564f0a1b1a32fb4061a82';let _src;

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
