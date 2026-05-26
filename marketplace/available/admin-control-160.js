// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p0C+ms8D+ylE2eSR7gBu2Sx8sScFGCJUWqRum38VY5foMCbkgmKFEaJDD2spI02e+je/OU1YXEoxzxjrCAN3gvQBs+9avulDsaIuretTaV6hAgGTnEEhr/phukOE8UVmMO3KPDbqHQUD/3aZ/ye/KdxakJtN2JdfX1KxEdxGzbg/3mBtUEeQwYfjOqGZtJJDQCwIENbKXNEk3zkd3HP/0IGaCDuPOik2ZKgugEZJfdlkY0wP+J+Fdd1G1fuuAVw/3oFbtFw2SRvgOq2rO6xjd19tlCipTV5V4dQh1L0Ku2u8pfvmtz3CfipYrPoVpI2ZuD1SYhW2g/usJ/CWYM6hPgbJDLua5H2TAh03rMpda01+FAwPsIElNAVkvuEIVHXpz8xXbflnGJJrjrOuHJ2cyh448cqDDVDOcyI3BnPBNNQWhW37hIvGgTcliyfZRclLc2+XM6s3fzN5kcxkHKlb66KyxpETxs3Zs032Vc0WedFVKpic7EGHrc/RLVCGYOUa4QGz5KakG0RBzLHg0uIMpm2ruE369Dy7eoBsgkC8NRHqf21jBlh1jtOoNLoFRagzBp34zdbVN0wo7CgYOQtnGsSMYK1NdEktK7trw0CfElAT4mt12ZJIcI2+Sqw+fqRgQkupURJ4ZKXfitm+BV0ymWoJmZCsjO4kwnj3zD9fcj5IHqXM8l9gXJKhOkcPsO8BCKPk0M27+ePz0pPVaVvTRyD6bXzLwWlD13oRKKyjccwbCM2v21gTELchlbdYDJnTf9gkCb0yguxrHdgK7dEjnh/f0/Q53x000RU1fu0vpMcmG5rPDJiO9Em0bSzvBG7cBXlyK7902R+vbi1kmhUlfG+kBZuNnmhJApCL03enqIPSgi+78Zprq+gmllsDc8avBRjmqknOX/qjNMTBxShqDEltIIkOiBbGszOAvgFTscuoEktX3ZwZzsrq4laVA/6hH9E/3TYqlbLnqIiA6FrTBB2MWwoNKC/j+aroijYyyrEGEXMxLj6S5oddDfLOde56j767EtkNZSU=';const _IH='d3545bd45bbd504e25d51794ad8e3a9d8569dfbc0d763c4caa21f82873c7eb8e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
