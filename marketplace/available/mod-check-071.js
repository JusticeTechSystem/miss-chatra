// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8OkLdTSD+0MyCaWjshVOhUnNfgsv7k6A094G75dW8zspimHLxiyOpuScqbS+DVdLB9zSbspouh+hr3ULUA4XQjbngm8TKbT79paX7sXUPBgT+0wMVphKBH5RVRl5C1fYcFGDbiLGpPkh3PvEvbvDIJ9I4CrRr9yvUGCxAFexzNNc4MTpAVcH+A7NYDvhAbQ0ADxkHTd7ezuTq+ZU4+G1BW77NXgaWtsFaBvMi3hKC3BAbhAZ7261JdZUn8hitYPAF1Duo08xpoAeD1lv9tBtzaqzhdbse6IoyAb/xX5o/kYETkGQa3NdDfbrqQ3gOQGs/emI4wVA8b2FeSLTdWdbb+QAEyQANA76Af0Zmm7nDUiLTgZb9mXBjhpVew1pkDxjjmb1KAx2VFuXGgtmPCsGkJPQ/BgcJDJqkdIml/OpeADiHI5UQDWKeq4if5Wu6AsVL1eHrEucf2Iu8S05Xj6AQ9+zWP9EP+/sWzEsedPYnUC2qRzzLJYqTuuOR9m0cJ1jGjw4pPvQYfS/V2vtFb5gqPQj2GOoRduXTt0u2b/0L08+TIq1CTgc75mnHbX6gGckxNd1Icd9i44HL6s5YpFSYK3UOdVf4FBN0rH37knoWdL6D7lCFKgXBQMUqZlKcS9vtahOpZTxS8Ad/bAAikkcfx7t3ODkp/HdrBHoarghRhTJYcL5xVifqoE0/7nFklKLuBYJjAQW9/YlNV8IfpaXgURcLy6J5AcVMzV8rHTnfIVfkowfjEYOGgZdmZJ2pKE4AeTxnvT6qo2D+WuD/2Dyfg6QU9U2sE1hapKHAsB+b2uINBIbNjTfqKsM2pM9CeSJL+ECjmNLyBxr/vPeJfgCFqI74nkVFaP285NraSuiTkZP9KOrzWoOI1Ij9o/PPJmCy0xWaITlEXrAXycbbhheHBzkhjn+fmMtCpKCi5pi6TS5Kw2dB6J+tF3v1OYGid2hqyTxlRTiyflMsKOWeQW6f3wjQG3UfO/HSiyp0PNEgJVVPzfAJweBf1dCMUECS77x3abz+uj1mhnRgqQx9AXCTmAPSWb2S5WU74C5GpCETmstYA82Iq+r50gRY98jWzmluGThXpPuKG7SZnAxg5LhrbD8mEU+S77xskHtyIKwX1uvYU4fm2joFkPEjmnFOSVKhEDBseWVuhA+82uJRNfSG64ePJIsXW5RyUA3/Q3WcxFDIyVMPuc1Ax27Uw6IpLXNmGLwZydGWSqciW/qv1XWqOhigHPWsQSAAngo0QiTclX6qacFfIJ8V2CEDmKz6dqYItTuy/rUiVcAogcxEPh52bo5tdYOEMtG5bvxDjZLc2FAiDBhp9JbhQJw5klgdP6dXLdUjWbKMtK9AuejMv0OW5+yqlD4B';const _IH='59fa846d877b702334be4d5f728c7c712f29ca3a093caa9a106eccef15811346';let _src;

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
