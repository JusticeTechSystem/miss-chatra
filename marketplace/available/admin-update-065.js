// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTa9Qh25Hgp0AgtTCpbaQOZLV3C5/tLppnBZ5QWWXk9F6Y/e/RTh+Vk52q3P/apebo8kgl2kBzShGRGLEZ/BlmKF2Xd+DOV7TNjM2rWRz4O9RIwz/x1n91euqzkmif9qTkD0rKsJQUqpgxnsV3qT+tdY/rVHqj4EclRPTHKAQzfs7iYBVjln17NPl9MLVv5CAL7kjL4ir16KllAAJL/4dTbhP1B4RWT0vcKK33HG1NNBeoA0SLbBQ4pwy8N1Qiji7VnwH+HNnbTyITL/Hf0xWt/hQVh1kKSusIWnzQN8+SPxul93eQQZMOSWXt7fFhlzhCkz5mux5gmTQrx9R0Ns32DGNOXdrTgyQ5xPxynta+n1BSVaPKsPrDjCcLqAYxvg5x2iyO6Ysi72vX1lFaSPMtWJ4U54SCIVZ/FdVIjegEZ4tIc6+ZZNH4mhlVu7g/ZtxL0diNQZddinq7qfVjRE0y0DHN5qHn9ndNTdfLlC2F+reBaFTfkjrNWWjrg9k77z04wzs4V4BA85qOkObSZM0KzWD8a2Vw/s7NV5eM4QAkQOC4wCiQgu7lYyvtoNIiV86QtQGom+0MBpGiItQwUzYy1XCo6/Z9AN71AklXogK2i9fA8hC+1SAjYhCldKRfSrg5Yqb9Smkn1rRKhMSlre9vW0cv9sxsokQr7WUMXQFh5csAXDUQUuJwGSh92Uv5/AGqSsI3qi6HMnfCv0fSmM9oSwS7i07b2T8B4jzX0aybAa2+PCmAsFkKf63Li9BpFHhxE2euhRq7sT3tlnZpBkJRyt3m5hBeMp016L0I3Dv56Snmghii7bYZ/g/T3kRj8tqvBAmJ4T1Wz4aA+CHbmDJ2Bk7xLV3taG+vg19PciacVD3oCzHWWBdOsM9JuImN+wpjkj7PYLJtYAfHKD7bBeE/ahM+8LWK+6ILevr3C4qc1IVFqzg785ntFqO+dv/ZZUDLMV3oVeMm37nwt2dTnS1Qylv0PabgmqSD4PvBs0RiIGCRZKwi4oigViRrHrz8=';const _IH='b1aa6bd61874171c096b504d301f79f64a3fc7ea12ed841e3bd491a610df9864';let _src;

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
