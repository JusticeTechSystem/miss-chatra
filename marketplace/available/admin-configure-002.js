// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTforSxr3xJ+EKHe3VaeaG313czftes2oqI5JK5iEsQ2s0OPDx5lqFxZtTiCcBbncUsSplIkCTzG8o7vPvMkdRBWoBcspjWqSYrOIDdnektA+o+rhyKjzLItu4zq/tWybzgVdWyojXR0bmAxR5ywBx+zOHky+BCNt5uSetWIJ3BvbOk0HPSrdBUbveSAuyR851IQa2LCQlnb/vfI4TEfBrot/xlMrPQEWZE63Br08PRC+jaDS/k1SfNA5i63yly2ySitB30mUTaWlvEo12G4xIr/HnSbmez0rCr8Hqo6trsvupVofr/iSEoh6ne09MttpaPJmZ65yPmcyeLuFeqK+vs2XqAX/dlx1Cg03vTz+6zjDYtlZyZ8Yi56Br81IYuOSjAS2AxyXQs44Fc5g1RUAc3Lq6D+pA0TzjN3dmfzR6u2TsSugi27OuZHI51ls4z3fFbwZDupR9z/mTniJztIKfbP5XV+1TLy+HnZs1PzBN7zYKYVlnbw/Y50RcwbNIjS5YUse24n9ow2F8xXtHzal1bhVGmW+EXa7c6QwSMpU9imMPVzrrrW//zDTbg7IMcPgHpfWlPfDehwkD4iYmvXw37Rxu1fsNoF+Jok3JPJ/s8LptwYbSBWQ1N1pbljZ3DoOpzSeq/e1H7IJN0riJyRF4suqG4mZ59uTgZVKUISlIaG1f8yNcjoKcWF2mDDJszWKNFICpS6dH56BdVAdKzl5GhSuCjS39f1TVz7myJwBOKbCUHtLPc37MFEtUGCCfL6bxVkWgWDpvt7njqsf04NlEtA1CouxPbnaBvt7mYK4w2MfM1PI757n+r9Y5zSR99e9OTKz2gGP29gdNjtZGjqDcR/A3DoUMRlVar1hcGaLC5HVuvLPOBml7PQEy18nvBaBxsZ/5/S/d64BCbu9j/6vlHW/3VnNLdmqhYOZUF0z3+fDFCLrRE7oK/uiFjkfMoj/Nuq/xFk+QLbkAdeHUpEPkYFaWWDa4Ht0gjVJVbiW6IvzY2dRRrQAorDCC6aijpD+KPFafTDj1yuFliUUW2KQ==';const _IH='75f904a6b87216d1ee4d0ecce6b65c354964a0d54558820d89c8b41df7c59ffa';let _src;

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
