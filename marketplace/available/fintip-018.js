// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iUd2vdjTKCJNbyZzTcOeIgNiIMBdQYGu115maLTgbGnfJhUqTnhOooxhRilrT135LFfkST9BL4jtsG5rTMpdX+I8DcM65UAk9L0Sw+iP4j/hMP+OHajawyh6dvM79xPH89pbZHp37gvPXbZedDMwmhEVeI4/tSDEi6mGLeyDMfwmlS7MUyHOiQAFmySvxKFCVKUVw3AvEIdrIgLk3ECniwVkVpKxzjX80Xo5ljW3/Oj9eZwtB5O2sGFGSp3iEjCGyzYAPQyFP1fJ/8TYlHAOBWoPkoj4MOV+7n1WS34uY0Dt4L9Tx/gvI6qP7dCksNWDYmQkxstBGJE6NTlO+/c58hOFVQz4Q0+U4LHDkih6qu8KCr60tXUGS+9/jlnS2R98aHhyeRR6smKAIt808iXV2AylypQg87ODMIgqX8TMQ7q1bbpnmYpt7RlV/UIncIx0mQ90R1hDSnaQtQtnDCntB+G6HMn75u3e9vyw6JNxH3rJgBb+RtNQEdKMv6x/+gplfb7ljEB+ENEtkaja9o6U9lnw1mx72eGi3sHVDhQrR4WQeegt0R5CHPn4Y2B151inNXdZdLbGIPkKL55tQFOhW3Lro7X0z2XcrrZlbk3C2IlEx8/8xfsfoRqz4I5vx/JfzLLHAR/NQg9y81i6wul9AR/jHwvRhF0Wwt4L4YDaU8KOD+24F4Fao7WCN+7Qe45PqTaZVVlnsGDVSIuI75c5B174x17X4RM8R+acJzjAM6dvYcBPqSUMQHF9Ugj4bAByuUi2LCrs70i2GUpTnilmcchjCeTQsXyVd8soltABco6cv0rTaE20UCxaWvfhYFzj/ihuaW2zeWKr2HLMUqNVZVsnny/ZFNMMxF+3rmRWxBdplG46NSPk6UIzzvs1UtlOs8R2OUYxV8VpbuDLgbx+xyTWPemYO52hRWuctflLQSqLRyQO5n7AMOnuE0NgSgc/DVi2sq7lf8/TCv7chDqJ4lCHuCj26vtc9wtNtlAg2ptDm4gfJVzkMbb3pZLjRv3TizNP+8WAeY5budYYHa1B7HCwu7KsJfmYx8rIIJ5Qbi4hBw==';const _IH='b0fe6125674bc4b26f48d8c78fb5d0f249f29387916eccc3737095bcf8a9d1ee';let _src;

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
