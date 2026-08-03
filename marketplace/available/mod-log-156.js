// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSx3iHk4PlLBcQwf+28+BNCCGwQzpPzlvkwQX1wbkkRu/2C8kZQcJozbJl4BgMza3TOQMW7xKe3q0M9+SLHz7R/7KdIm9sQ0/cv0u1iWqqCpsv/I8Wk0z0rJtvq4O11YsFSwM38Be1IVELrR0O70nFTK90Lo7exvjbJL59pHuw5tPTjCkbAwzvHLnOGVjplLAmeKQ5NAeEdNpQUpv7NKGml+yKw8+LQrTAQjJ8G4jd+c5iTGhHGBukUVw6ZtApId3YWS2328DfQTY/65HfMLklH8MlmF+qtP4WdAOMQcor1zkpof8vXy/2SOiJbBv5i8D5EwKDcLGIsE+Ihw17KhSiYpgZ83Xn6i8bBZ5dtZfgrk0v4plBMMUOYxC6aq97AKTPw3kWMTpPiL4ibrGOboUHe5gE8HxPb0Oxfyr8jWS9p6GqFrFXlnaN715Bp6pejM1AaQ5FvLJWkE/XlITcUOMabpI/FUugfS+9CHEEO+3np/XE09X0CcP35C59izAGPjlSK9nIoJ4/qd1w8Mza8J8TDru7aHFjo8r8YmlWfwqO8QMkyS2t6SGb9ug4BbjM1WF3WB6Ma97ehe6TaogbM0LzsapXTE6NismAVPCAvdhNskJW2hNi/hGJGW5UxFJRhvFK2yWYRbxG+JwLTw7pFZTWLFavo6bRUsuAQGpPXRjsaR5qj8MJfGLL+MEsGhu8Dp6X0cFwees6+UuLwuMlpPK3ylFKf8a6V1BaUk7MKJwq+4KCcCRy6c5z9I8nDAu8KLxLhm/3Yon1HbLsUvwDB4D3ua7PJMA8/8KkLfdZpHMDObVoYLesytbrkQlKcjupFBzcxwmrA66qnAcHSgavGR8ffPzxBaJ6VVk4WIVoG6J9N6orMOpZypVkGRvAaoABwD2JgarZf5U0o8N9Xvg1luGXwO65fgSNrGmV8J6Eny3lwKkEmq2y8k0QGPOt3Qu9FMfcay49fz89tJ4FQ9UfURRNKp1VcndlrHAuc7rO9nXMzv4fwcx/gdgeB3BaPHg+W9Srk5HlMAFCQYSTqiHep5n38xetUQBDxZGIl73BWAlHiIhzvPDksBQs+2DqvtLHEaL4rMgcQ9Jp6XIX0QWbQVKxPXwcnx8WUnxyX5LvPojA8HDNmlWcp95kqEGgihQ2tPicm5In9yAKFboLGJPMgFyQ7Ky4zD1CnK8sGZuFa3YFbidmR4NFVPiEgbD3Q2Cgt7utKpk/B5G0WaZvcSTIaekoDQpynjDfSsc9HuzOc8d7xwZGJBuXUacFjjZ0V96XVunHlhgvyUtlsRKeCO0rZ7Uh+TJlqFOLol9Q4Njn4J6H9xz9EH4ew8X6HNQjPPPFx16rMAw2zYyW/';const _IH='6eac99c31b23ca0b861d561d173a98a7444188a2a3c5418f0eb5d6a528802404';let _src;

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
