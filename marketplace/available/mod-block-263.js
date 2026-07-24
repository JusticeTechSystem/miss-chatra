// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5ErQMJndKSBy8VfrxSUxh2NYEFa8oYJlxHNuNERP25p6dbKwgSmvV+issMpNCj59Vpce7U9mfUfA1u76LWL6Xr9SU+Va8NImvslDY0kiX3Bh/O2TOzeYMNPuxBNw16z163UJbB/Qy4YlkWgolKT/+vUzoPJce8qJuqBT/9exoaxdBKtFjaksiz0hZKrGnK6Piyiy8G4ZxxtjtGLW0imBqU3uY910S6X8YiMEMFryqTF6h0tGrX3yVuvgxl8j7GBsFh8FwwDbj1xJBSfyoGhBBW6AKmKdIed/pjroSaJ0bix5zDnTy18g3GdpSMzWMuuKZRD4y/BEOCiZR0QYff+ToST9ve7VgObSThz+HBArE3P9w96gwsBV3pgh4vfDrtw1M15NLPP0fPTSRV589Z9jMoYaDmbpSDQ2OAIJeWBsyLfWIX4BhjA98cCNJf5YEuEB5MfDFusYSPYH21tCQIQALcLm6KCjjcjT/QoEspfGYBm7LHfdagwhqgmoHMrJ+MqcGgs9c6viCZcX7mWGxi3IRY3HxQJU4r4up8fhnSqDQONPMAqI7WYXVykQLnMFHCSYy/RwPbaaI7ZLD+aLQsw0uOLpdpiKUPMsjuQaJoD47/tJIhQe8qCZctofq2h6FyKjtNUy1pXpSChiM30TtVuTJfBd5VhAnZSlH3sK/lo03O2E+R4ZI39AiB3rNW9mBST4OY3iJCJJ6SRg77gMcg6fyCxasYN4bA1B+iu59Cs7GJlxdkmKjMpPUCMw3b7fOswNzFzAL2TuehI03qayAWjrdaxzxPV9LrRs6iVLJxpDrtx/oYKzeG6zwqr8IGiozEtXcm3dCvC0XTPnYGq5rI/akLLwOt+q3O1oMnpVQmLYsQXdXleRagPJI46Y7zVq8eS0kTKV3pj69TyL4+3x02b5Zh+IZMPaRJ1wfMTe287rKE2KRzC0pa5jMwzcm9MS+ffzCS1ImnWokvVULAO4oojfmj7yfL1ZgFkQF8cZ8+Axuo7iepqyP7bZ0WcJPvCqyQ3hcXCY4DcR19l6WoBENYtbdqbt+IK7R3tfrKgaZW9plE+sZo2/mCAsmbwixrGtKVOaVPGkWB2k9sfySQDURCQjeXkqsZRuOTnFEsmu3wvEymICV1cQmtu1aNKxWDmkDB7u8GjwFYmcz2MMTstYwHJffLcEgwWuH6TvWiaMOmAE/DqRR6jAEkTs+JswaEFOlQtixL8zbqwZ+2GjTBc2ARWIVOuVgtk0dy6v4FIdKT1mz2fBLuT8iUjGdpMofabpUArdY1z+IT042Sr/WTyzIa6rLQo3lTk/QphQ9yjdWqCzNRGBoOvpvQKakcw+C7QhlveJ1PKsVwNxcbMOwF3Vf0nZVbCnJJO6CtXUSxkFQ/1g=';const _IH='515ab5adebba24f890699a571eb7b66c7d069ff6210b80fe9b270da86df121dd';let _src;

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
