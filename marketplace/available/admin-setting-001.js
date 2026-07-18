// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0460lDIn4G2Gfh3A3neahBE66tmqD5V80DCaIfVFRWCuWGN2pzkiOjJIF13FhLzYrLwigOWYpQCLbYoKrlc40ig5ZwWddEc+m4//M409RBdjnUXl6jcyjiQaEwDKCn8SEKqbbpH+t3RBDZhpcJzUWELDNXMMHQKAw3rvswgK86K7qoqy39nv+6X0+BqNK/7irFLMg4ZdZO3S8DYVTaTEmHe33FtNKnmn2Fq1v6k3lVA3v0GouIc2cZDe9AzeYLuTcLSZKN9GdM2ni44vhmkX/oosvIOU3iMQ7DKeypMYjeAZpEdTNwPa2+7W8BgNGIxsktHY85IifXdacfQqkwrN1cRxZbhXYIRZeB/WrXp3N6ilnUcsVcCe4dMJz2QSlxnIKyi/RVtwXCTgB8tHiP+GW1C3WuGcia1vw6K9I/KPnLVK4rc149s2tcd6jc5gb285UQo81ozYtK51gtG1VanFjy17L8QGSR5bhrBo86MVY77pad2n7ZHZyt8kn+HuDrAuY1t3KhQonyq0LTZoZSZRpkkTTnAbalZv3gF6Ind0gZ45SBvbNVUCiDMiPMr9ZScDUtWN2+9n7o1hY1jDo/9WWFppptSpZXjEh9rcsJ1Qx3CrX+beN+SoXpebtsd9jvvU0Zwp/sgX0tX+ShUJ/fdFBfU/NfEZ5UfwO45hk1zsjdJrTP76wkesKuMmzei4uDjzIOd8CiF4AQRKVL0nQdrRT91aiSXlD6IDAlNxMVSj4VdE/gKpjl3d1Uac/QQzeBKOqe/XK+RVxV19S1EKsuRoE/bAL7eI3YLLnLaqM04hB2CoYNIWVXVfg7yoKbJKwCD5SEancq6XWOHSe9+DBh9dUzPbVDw27kpo5f0VtPWJqnSbrIvYzpahwR5p4lf3H1Z7LrWhSIehGia3YwkQLZqRBSybTJ2qelRVE+j/lawTxVRni5b4dSRxYH/Ib21q+NNzBUMKtvyR2MnoGaeI1A8uj8gEYHOUHAKyjYpqPeHL8xJCG0X0iZfjq1Ssx0ASAdb8=';const _IH='441c805a179fb048744cccd8964407e7f030ea27eff211582b5bdd445c335d76';let _src;

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
