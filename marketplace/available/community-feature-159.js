// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRG5IsyTq8GQt+IR3QngGlAcGVd8VSBIsdbr0EthrS8BSsx5lX/3S1/9sT98zC8XouXi2HsoLb+r7tjZuahzZ37I7yTSN7LI0kbOP1zfhz1REXwwk9YqRuK/GK4db19jRrgc+pNJ3RQLZ5JbYwVcGy7LDV+dG5uhcKKM3T0JyrlkKQlxfOtp6QM7rxBYRdd7qacmmzsiLoFJ0SBxRKRWC1WJ3bnTzd2o2KgNdWwsoXPu6w2F6qH8dXOIqnWQ62f1tZUCrGKifszY8OzWk2dVA3nv7EtsGOFuGCoXfqN0c7/sO8VxANs7Ke8jXf8UI6qHuOdT0fL7QmbKgvzw7j/kWwxmKbPBCHxq7c0iTkVGTxB2wL8z1JeGvePU3I5sYQd460fe19SaPshoUn3rCNoVT3StNWQ6m5pyavtllX/oUwOWLzqYscgGKpuVP1fta2zhrZtsq6913rqAgzpIeadk7fR/51yQcCdxChuQWc6fD0Wr61I5pg1nN7xXUSvPmamwwyxiLARWt1u+mcCyErxcW/pUGkp+3VLZNxriP6HU32EQZjRKh9UKnPBBUqV59JEMrRiIzE1wlu0msUhMZBkYhZQMbN1tn7dnO58OOGRVSplVxPBLFQ6LRTijrvemSG+BciX4zWTtK3v0AZ9nbZ7tYu5dQMVEpSYQ2La3Pyc2jGrsGvxF4NnkEVy35up2d/YbDJzLp1MZvDcqaqpGe8BlSEwa7AxrAHhCZYnZqhvyBkxCU1NJEmjxw==';const _IH='16793d1acf418923e01aa8344b60a643dc15e8190e655a2aaef0e130e59507ef';let _src;

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
