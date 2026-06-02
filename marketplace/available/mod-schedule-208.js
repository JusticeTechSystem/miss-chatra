// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pIKGUtXVpFMuPB98YjCIAWGchwnMiR6fuKQI62eInr653LpMOaKNz88FkU7zF2YOuHbJpVUgzG/ynCxVRPLARbWKciibdpKmQyq+/WN5WjgoconQuLPGjiLQZfi28V+Wr07uvNBO3kU/K6wH5W61digw7STMtwJ/FROgOgirvuLJl7lDwG5Ta+kJu0uZQwPm73os8wXF9g1T21tOPE1kdvflDIDFLzEKD1H3q3CzlteVBPT/AB4V0+IwFObq4epUZJHsKiOP4eZgYGhJrWiIaMoSEIUTjlsF5zNbKEr3hwSbS+h6gItouyn/SmA6Qg219UczFoCWq5sZpiQtLlkwMZrwyGDF0nIYPBroA5uvk/yFMe4pAyYGqlRDba7bdFa7I1ef1xNWXsPLwkfm3aZpfAUSIIM4nNpRsYvs+5k0wtd3uZ9Q03PAq0qdygdUreuLSP7LIgicKzXWNQroLToVNfG2DfcOlogLWARZN8UhlY/xZaj7k4AKvNHDQDG9fXA1R7Z4m3bCVMR8CptDI1gGUmzIXnbQKhnzMzbcsyrmr1K9u0AX1uRHU4Lz4QR8z6Ysc4FOBKC0AoOr6GdZUxVjWf7/ajJtKA6I9xeD+aRpfMgGgCZwFkHbOnaH6GlhWVVTYqxJCtquUIpH1q5Ch1qoRL2KflwnwI8teIhMxrbP9ZM4WtTh2e+om2yvfzHNP7xmJrc8eXpQhyubLFQoEESQWMG/ztVACoodrUqD+948UmZrkFOAna3dsFOfsy73ZeESUR1wHMd/eHXmkXSnGcsp0GWu+3h1mF01oAot5op1vmX1pI+NoIRIanhVBO6hl70gC8z3aNiuFrll3Ry+wUauAgLYYFk/6sHwC/YPNV3BN2rr7CsQ1TG1XW9yBMax5DUX5HbtS/kWc3FUVhjelehOQfw3pnFC8u19dU9Kn7p82dSRvbU2H3sImDI90IIPVGcndNK2Y9XABFRjaUqZo/hu0YzULGnitdMaGrfIx6SGrH7mxO0+i8AMvDtwZI/TirQQhTUPATnD8E9O/iXF8jLr7zG3QJI7zvOE3C9iYMwu8rawDGFYGWn1qxSHGYASRdm5REWUvFczqIoGQvofoHkAomTJKg3BSpUju4JcDS+WVvMv/4QsaXDzK+dr9BvwryiCyfWz/IwdPXsqqDytbwgBVpUx1UUZzQY/3Kh59D6Y5XWrP3PbrsVLQlUub2gal3TISfA4raHLD3gbS8TqAzihC0dFoViTpDsB62mh+J/gnV9YaIi+2hNXY6Q586Z2ivnQuGCT90Fb8y9YjyffRF93IUU0TVMXhaqPuS/jVNcRJ+oNCjG/yozFFUZRPOzP2skHt03qpb41FMKd5tkUNK0byaJOvOCkki5i8+LKgb4iSCgf9vOsoM5Gs5HmFRNlPqKN6kGCfklQ2XnyM5Aq';const _IH='08887b8450b6dd0cab2cbb05bee56f65504712e1f8d92179c6b33cd37ecffd38';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
