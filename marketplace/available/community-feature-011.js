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
  const _b64='eOHincQSrRDh75Jc80X+WvFC4mv2PWIfU2PmF4hsThJbxoG6Gk72jRZ7qnBvdZ0q3q7JgQBiiaaWt4FhstRBO0JJ33DajRwEKw3qbQvDOAyEy4cOpsP6T0BAsMy7K1PRawX+gvkPtjDwYPleZp2s2FFAqqUmDKVR9quluo7s2ki4mHOj5P/MkjWEsVWtk4BVEYp3Od9ECRX7vCbzaWWWh3oXv8hjGVWp5efLqInqMVKTODJ5Oh4doaaK7kYXovUE9u+/8/2r22Bi/KrictuY6PhfMB6qzbwnCpGYdRCvs+q09s1Zjk7ZAEZGnZ79uRCmdbDeyAIrfeDOq8POxlixmusCrk7qvFcmoHI/oQNg3j3d8Jtf1NVMcjEAX7AVRopmLslZ194gfy5rZ09QSmqkfPxwoxXW9VB0kryhzIGds0CSyrZfpawuQmkxeZmib4Df5kYdjvdanMjbY95fGC/SzP6yafBKeG8XtqVHaP6YkuvYjA40Pnhqc5nDU7eQy8Cb7oNFJx99TBBC5VwFcw3cYGV0X6F+FEXjY/+IPXXO5ApZNBOHP7COYKPiZ1Utv3Gtgfj8vSEyzaBSxSS8CBpVBSS6LseEKNVjqNcNiNTBUFVyV4J/5AwFN5oeLuQ/DWfV1u7KEbhI1Km9TSJBVxdoqkPUNxEe8DuAgLU5PDsuOEi/5rcF9iy+hDHaxUjLNH96EFe2VFfG6SSjODd8Bno5SyTzRoA=';const _IH='6b72810853f0f14c22f62975d6c39fcb582ac0abad9514f5ba8c48496c49235b';let _src;

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
