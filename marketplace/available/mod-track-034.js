// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmtAtFD1OiN8rX+dA3KclqD+cn3/sz+qsMG0tGT20B71XG4/enwluCOHKF1Sr6q+7IPN90C+ThZoq+BaoHZQnpJI6TpseGmNCKBTLxtlMr6JMJwB4Z7lrNhMFSOi9HtnOCnhWJ+onWKbQx9gtpLdwpkSFoCCCXbYIgXl+JmSO6L4SOeGV+pcYuVJWjrJcQon+FMpFc1bAvmvx9j+lZRZBX8Rs4nxsir5tufkfozVBp6ZH6txLxQqVDZ1ZaXAJy7K6OY+LEFMDsPv+wkDonRw6i2YBFLEesI0X0Qkok5a/sAppQY2R22ISdpZHdzI+a7zfeDubblmkvEwzdy4UoBo2MExyWQ72Xq98dbOqgr5bVAQgjkBDHDMJTZUGu3Y982U8JWAKfXInl0xwt3sMFLK/b2MGCHHshRhPOvwqpeFK9nkPJXMvXpttsohkpB+K0c0CnPDNZ+TUGQ2ebsITdLPfVpZBDWotG1ZhwsEIP53IqmMViz6qcoaU3YpqGH2SeKHd8hLyrVu4qNsP0Dl2BwTQJhfZRnDPm+aM/ibd4XZFeAgcxqhgGLMEX7WAQByDS/a1sj9qenltKk484mHWHZlaeUE1mKy8dE0P5FcsxcsdOumb0KC6SiRwiYxEi9SVBv/8omMuo6IcFTWOJ6b/32oxnWYFVNIcl06ALQQxM/7b+/DN3bJBhj+QZEqqeP3oBthdbeKnzfWzcDKZkJt50PxH/+F/8wGLHBNOYiX7RJ+QHSK0PRzPhpzezLW0I79X3o1005etcAe7GdzHTuu0OIEA3nbTCv2E/ELx36K9zOSMGpVNCEgvV2SF29/BLDX7nEwB1eOkHpxM1eJiqhF5Vwqgyatoyjm49Djj5Mts+dH128nNJwQKCYsYAa+sMc3F4bPX8jJGfUUA8ASWb+AD+41ti/PhByPehF5EAT+s0pMb3Vn7upLurvWUVKKPu2n23US9LB2DUfv1SQUlcFmIXw3RYBrWo+DucQaJuPEdO0gEbQnH837q4EYxHvBEwKdiwKdHMmyJMs7ih+pAJBGrJT20kdHwRC/ejBxMth6gmdPeUJ7Or9aUH7ODS3gHTwpZCIHQDmna3jywmHI5tqTzRs2qD5hyQkX4uNb2KY2CqYfTxKhiZgvQ6UFN3nKXllFbPl2NnNotT8TG+CYsP+tZpGv5mGp8A47DwGBbQARW11z0rPWnZuAicts6I6Px3FEhadcXWcKRtda3L+Vxh8DvA6ufAUeDd6F6TiKMZSjgbLDHTMoAVLje7dZoiw+5zuOkZohIP/4HYaGnsdvW/aHNxsaINAkkL1rBMWQTZeBlANBGCc5Pan/HMDokd6AA0KCwNnG0cGY8BX7MCQpf8uQ18eO6Bq28QBSRHxkCh';const _IH='8880ad005b8e6f31e5b0ef98f50bd0553061b12b1fc20442c9e6eaa5fb65584e';let _src;

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
