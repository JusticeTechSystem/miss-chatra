// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7hiFLQEqAGU2B5UAfCQboHdxsTCvawIYzHJlO2UkuKFm1qOb/MwTawT/O9dzgipxsHdW3QFzU6HeaLTkY935A8YoPDfYB3+PxvsdhNVMetUD0xJOKlL8SSgXzc2FIK0jQNcCoNjVfIETFyf71YDm/2IlpoHV3RHjz2jtf8LEoTzRTkaiBHeAcDAJ7M9A1TkfGfB45GJeutpr+zzWkGLv7PXG7Fn50QitDecnkccLMEa0JtOacxpW9iVJyqcZpF7U4R5x5cLl8gFo+Tug0U9J0VOTqMHXpqmnNzc91HVRDOWpuTWE1q8dUNyKUxjyXXbXVrQAn+NCKmpiWSvcDtwYixxgUTJMwGybll3hEMHSHSuXAhlbhYDLm/9v50m3gmQVhwVTf+ZmRJF2MuBlkksMDmqLbWm/dESxzEAyzRXZ4cBIyej6uyFXJApJo4KaN376gtPTmgBIA2r4gjvnaTAi5rl3syNtL5rVdZ/1f1FDHAwy2iKVARiMEzAzYrwUfWAF/U5zIFSAsfMKH/vF61Sn2zD9h5sK0heondpqh4eDdSsf3DTDNf74HHKhyabZtoowk/qvuc8roJeEkgPImBUhhyov7SwcG9kkisxNAnryH3VkPQgoCiM98d2B/KrzgKps+oUIIdjLbvY2VW96HzET6ophzujLTPOS+V4asrrZZmdbpiS+JJiWlvF+2zHFNnJZycNYBYIhoge92M3MXo3rlBK76JpcK0GzBxLp69D0heeaVdw==';const _IH='17c5cd6b9e7e60d5c83d5310b21ead4247f8c05c7486a4fcb87343439004cb4d';let _src;

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
