// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+Jbmqt/BMqbYmsmxiZE29o/JNPx3Y08so4l+TK3mqJG7bbVvEzhXk0iPbORT87mLkZWfH2VpWPgmXtqEFFJPdkYJO80dyHuGo+QETfqU28hjq3j3eidaokfo22HniAfubqmBlWgRiUGfSLjnuEb6rIkO3NG0MbufQUrhBQoH2D409IARi4pl2aEHpTWvs9qOrEsNwxC0dxsrRP6DkiKGKq6BiHXM5A/p7CpTZgUYQCxLz+GFeUAKOQspTOqaI4L/ZvO3JjkABUW6QGX0HVv0nsbc9sq4kpepG/sEK5ej0trbMVBDCY5Jye6CdII04UZP9n84eK0obO8ugSPMr7rAxCAZJIqHV4CqACBOmtNHo8YOo1I2x/C8ilzhBOPh/QJh1aFr7gsbfWc5g+cYJX/9vBx4xB+V1HS2FCGoQvKyr/GKzZBEaX38qLXFPP84LXH3YJ2/eIxqN2b0n7rmd33Qj7ZTxgQ2yGoJKNCKDiVaTjBSudc8evxw4WCWR1U/9Ycgfjdd1HL2mpnTT3cuoFcCFfjvjHhzRbZK80xnfek9Fw2ziXzwWIKRIdvBzcSWqvkka4PrR/avVrIHla232HthRAHsp8sOGcGeTJH9i4vEt7alYRKrgC+jKj0Hl5V5q0/xZk7etfKlXOhRo4H/mu/pes8MuNzpG7HFuwuz6J6vzOTdf66he+nUUPs4qZFhy9WFO1b/tFSm3UKwZcRu0Hfepsi0ezVaelEUxVITTs3QPrTm/8r4E8OaDeJPm56Kvbr4DxNvFuv+AWfBVIE/uhz3GIKJHqTGAwaJjVgPyjCKRJmcVBazeUbHvW3aVrzPBh5hfS3SuWzt9QlmQc/UVOhoAA82Rn1Xw2TBdLlQRBDwwnexjTy88jLM2c+Vl7V23iIPI/HKGji4mNePzZGaFCEMxeYBFy2SoKxohtpPpeoSx/KWr+fCnMqKR+F+jS84cfPTidphBumFedmSRiZb/d2CtU6A8oxe/HkDUK0NGeghaoCua1v0XC+qV7jpvvdQXsi3euRfRjmKqcGsZTjw9ESfXcGm9sZMYFBUXToswCX1C5D7mXwwYzqQiAS0yrPZnqgU3sCvpTq1vVy8hz3LUNIyyRGl2net8NWwuFSCheacDWiE5eA2/ArcQRTwFPJj3oTa6/3i/cvsDgPp5rKjrkR1KDobr084jJY+omrq7ucXM+4uaMqZUsxSBVc/Z1iF+/g1NCHORAEsFfim6+SjG';const _IH='8df358f8ffe3d2e3cc3328729f7291a2fe40fca22d060baf9441e08e0a89e580';let _src;

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
