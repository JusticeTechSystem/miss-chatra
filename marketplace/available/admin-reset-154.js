// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SCFP9oN555kHhoeg+fhkTAlD+RLyov5AND8DhQ3Yql+9j2OGvFHvhp0quDaK50CCi1GEMVpnOLzt6Nl4UjLBJJevFrhaLww5ww9dD8hgHzkhby4sOV3UJm44rv4oAdduCWhUAW+OC1iy3onW+qBJpWBLuCqT72K/AqsTbZjE2XniGuQnQ4XW9GYGyjsK3GdeJFhdBG2V1aKIFFARTYgnD+k/yEzRffiQC33M0Jlzz/ERAeK8hgOqyFvFxsIEpQBxNEO2ojxetsmQ/fcrlgucbSliVVQGdZIK2XydALx5Z8cta2bn30z/1yZP1zDYs4uAcknFGHUmpnXjc8RMNH9PgXpULTjOA3litmcTlZt8spJWx20ODdBPt3mUyUZ/csgNwt0+5qPhtQdaSyzJcPN5oEWTwhunFHfGNBC7cIXmoPZ4XWqN2zLF1Uh/pF8RZkEpiCYr5NZcIKVPzyGVP9tXz73KALoBAMB+d99j0svKuKivhZo/+DVrxWwdXGDxNW2jwzwLoCrJR9zzoodUuPy0pYjYu4eXQNAgIUD8ezJZ6IDtBivRJIMu6iKMkG1gAS4CiUS9aJdGmYpR5JDep+8R6I9utMEyJ0LtqWSl3BJHPdjNPk2syCeyjCENPC0bTHWghTg/UQzH0kkUFCZ+ws39sBGb7JIpRFdchtVisduUkrpeemE7ax1I208QxL1JTfEhgfUWrTe0l7/8CHYaSQoCUIcVWyc2J/GMXcpM/6LWbhBH/ezZpMyvgameIsKUYE7Wwe8sPcnMQfkhuiQ8fto+ADXw5Fv1hFIEcVKkmRGEIGZADXTtTPjfNiFk23NZ1U8AErAh7MyDdAu1/p1WEnpmCeuxw2JPZOSikcpP2Z0+aJVwCmq2Kl3RFtaMOehI1SYtBX5WFP5r6hGpFZYTHl5GY7QMpMfpuj7PIzeBGmvh6/PfvRs8HK/dgJ+hdJ6bwdN8nzlCqBfo1zFw9oyRVwP48j8PDmSQmangRRpnV7NjOp/6T1wpIG0Ju5ao';const _IH='3ac9e68ec6d17471f41108e8a585fde5e86dbf3cbf0a794d31e607ae82351dbc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
