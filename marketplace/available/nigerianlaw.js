// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxWtnyPVubwdJq31CmyyBkLlueJBMzQoB1YM8KAGpd4FVA6JHQz/sDbGly3/5RU8R+xNpiEf0Dpy8tMt9LIOTMbuya4gv9atF9NT+vJXBrPiRNp63HrykKAXWIKlrTs9uFX/zL3KVpSYzutEhWO1nrh8QdGQ170ZSbL57HiSoK54EyjhptDM476YnIrx5MniN+OO2U1b/JyggSYKz3vlknQ9v9di/762b7qeiqBKZcHrS6Ac5GEOKKnQPkf+W2lB/ZqxH1fc44dr4uDbzdr79kgXUShaLqCeKYzF+HsOdZO16YKxTOt6OMlt6ifPBSsdchXqg3FMtFjxNOHoMMdOtzqaAg3TWQ+phlCoxIcR7hJ4eQG2DBv91PyaVQywPAc5tMtN7oZmscP99nkQFm8m2bA2yBOWXzlUuWVfrKIgdN0NmZsIVPThl1jgJGJj+L+fl8ycOUKAQQzgWdkANuZfG7lUzgDff9uulQujJq+sTeeggfHpmDK7CR+946OWkkQzko7iUVJEnLMb5qoq5tWC0zsfMLIGvkdXCT65Y1ekhnJkglwfMGCpxdOg6mtO2NR1Y/ZPqPbTZ9KBJVxLv8FfBCJr3RwyjbB2BeQuzXQdBpc24zL6kidh1VJm8yqfAmycAPqXEZstomjNTQw+AVGl8W2p2eHdzTZ40xsc2oQPhB1DsfV1BPuNV8KDgP/YtcLWTR2zL3YLynT3RxeZ9cpvb42Wsbk20Og2WfDGU6Tm2+LTX7s1teGrYM9TmXZ4RoMcEhY6d+BrLM7dc9oMjxaLKNnZW20xJtDucd6crPKjyrYbKzEkK47nb3VtxFfCIDnDF9NZNAIwIUIcp5iZ5Ue6cmjyfPKmXdWD/LASCtBnAXMob3tmvFb8aYuRUk/b/PPXIpjq768rH9Kf919sUqZB0wfGH3woyGJPorYVqlHzt4kdzIPW++GKc60dDGrU6toJSEqEja6P64MghFblOTohhR8iSB2XUeVmJPDa7D7DjCzq+es9trePTU3xMuWnie9o9qkCFfc9w4aaMFjyqr1suCl6p9GC7fIfGHsmh5lg1E+oUNr7ERAYoAqurti36nl8rhJ+pz68hJO35x0OwMv/ePb6fXk8iQrWpG0UOARddIt+YrlCEWwDNn9LxRFSEactHkZtoh8DKa7A8QYJAqBHvSvaV2czg57NzMtBNBl1Ztcx+xTJU3lvQV0T3zUTFORk+o/ntst4omSuWO';const _IH='d55977d7088e95197d4725b22e6efdede49378f20a2b2ec59773c12df7bf84f6';let _src;

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
