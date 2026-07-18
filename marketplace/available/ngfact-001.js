// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKvrpcaLERCweMjJX8L8gR/MGHT1IMNDn9rwIkvGl8T/ftexpNZe+upPeMpKf1h5HLXwsi5h8jHoFDCg2xbitE4XXFSgYJPTLBBzmTZ/CjAmY18mq9/0d44WbPGbBf/R45Uk4swMt9ozDE0kjoCIUHySHFq9ilOrWOoGSLxnNP+ncKj8BbvWzDUk6fJYTC05qZOmkod0ZSFecQ3T76DEtJtBSV+7XUJNDtpFpf+GT/bpX4XW6qrTC9j2c8lap/nAD2SEAStFQBxdaYampkdY4b/ihZwTusLLQI3iCKigM4p+M+NMEqbuNfqTkRDRU7j0zB3sHx0b0FQCem8Qta9mOC1cbw3+xv2Bh9eA+rx2yngtOFVIdElgKDqvy2om1tPzdXoc6UbHRRVrIc9+kGlO3awAVbbc//oncIbOe7vf6p4OfXwguIqBtvZi+kdZZC9kUN9rUgAlRoN5DHUYkWaz4448ofQF/DOGc65365a9QxxcFOSOQN9MpwLWXYyjYup3OM+ZYc0N8/v8MsTWnIKMjoFMp7jVatSVssVGdwbJVGpu5b63BRKXHiZLxO9PD7P88hsa+G6IAaGh22Pc+w1MZBAmgIMibAUUxvNIsPL6qUnHsPmUwokDEnDQHMxh4gAR49eXjWGmSYvkRXm41EY3tgLRcxdNIIerrtKBXBmOa0hECVQnbRxNS2llYwIu/lz6KAHurCLT348IkY1w==';const _IH='ad3288c962b4c078265041ee2fd6a5aaa0a095dc2a7149e7a0bdd7b69f3dff06';let _src;

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
