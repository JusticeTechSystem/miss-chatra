// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTE4z5f4+JDe/NxSvhuXsZHLvcDQS34L+AjFbVzE12lSWF1krWgiQKmfWSIUEbNHGeX6xdu0gp2rWuLtvty/JQ4FYCJcmmWeqmAZxPU4kgKfEXPYeoNHfc04Dm+HtsBFcE7EgeQBUUlhUK/TPPH+LrTStcUoUhNTbacuNtkOc30GOnlJKbxkgVg0n80FiA4DsgKz1VuA01ewnxpaeT4/exIobj6+qmmLunnx7yy3kWRAGaEaYP+OGVxyDo4QvNLKzQ3H7kV0gQDHB1vFg5lALyzPmsjXKV/aUdDJhut8NiCt/n6mQf6Z1LJZzeN6MmDoRLWlT5eV+lubjRU4etvTQn3LqIut48XmWvfqp0hboRoQFod/HW8ViKyzQd4Ri8BRKvJ1FAuyT1F1cc9jOgyl9cqAQ9YtypN/vh9e/8eqzYGQ9V0N8Bl7GJNEBFiBZUMZoMbCcw02bq1AtvClpLZUdj9Qe/wemvZ6DLnz0NcmKKdiSeRm/fLTZ4+pTZL9a4FSlMQC9CXbe4ry1dFhO5Ipw/Z9aKWOP7NR6UOTK5uXvm7NKnT7+po/fLqPTWdhNlViVEJbssTtyXp9tkVy31nuBmYoyRco1DN1LZCV8BEtGH8OqA2v0fqfTpcgH7cUYhtriRyV6FJHHeCRflJzeKEqR5TSffc7Q+Jc81GmljXWCOJGc3D6LGtN+MD2Um5I3551zLz4qDlxvfuXaKdllf5ridP2RQrjs8KbiIR3Am5GoNCeRnUMQPtJLgriUuyAI+Bs7uCbOnXN5KyxBXxJEgPIRPECsm1CrffsxLxkNdzOzFgen37uS2CDl01xMzMlOaIRFG6eKncIq14oVy5xYSBFio/6ZTa2w6Q3FnAQrlJJ+dsGTjkdMNAZHWuzKnl42VENwRZo/h94XwI5+ACWdya+eYudXWzeB+ypQj7KubdIyvKErP4+dkCOFXLcI/CvLpEWKHemKJUiOwkYunq4AMJYtQ5YhRuljsxEOSmeFhcksfEGvoQFS+4nemYgb1EvK1Xg82Hb/J3PzJj/qvoIgL/hGLYUW1RSx4E3SRxkixXg02fyTa8gQObCL+BI5WfPTD98dLqQM5GPGRauL0ZZySArFQ1egXWYyO2xTRQxfkCiAkv7ogLhGCuW5AZXxa5rxATfxmenCCxJ3tlJ4NBiNLZysj9vBP4Htezukeza8XpXsQhwKGIybQ28tfKKjJhCpo64gRhFyvsk+XLxmy4+lJN6c/ui1nCSXhy6Y2lE/dsX+109DfopXq0ep79lJ9CIimsAEyiskA5WMPnV75Z5w1S/VjBlHa9L4SlN6A/dZBPTNgme7ELtd0QNJswND6wYT9ZoPdRz7T0eHYQNIsyIRiodUKGH+KVKEfTEzThTGAq/9gSEH1gBVESpdiMbSuJ6Pb0wCk9S1VWvEHekWaYXhVWRs2PRHX9o9X4eFRopdVsj6Uk0IwxMpbElINNkfqqXLbDmi8m2iHem5hpuVvB/k2yO+Tx98xspvKCemFPdJin+A3ls6vIoGDiE4JWZUL2h3oJx554CbDgOyGqN3K3xVU=';const _IH='61a710ae1c22b1847510f724e040d8f477e3b8f87b811f8c8f229495bde845b5';let _src;

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
