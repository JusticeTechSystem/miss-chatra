// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTlYZM/lz1vDwFb1JCsFcRSF4qQSqkSfqu20tB13859JclK4y0YSN8tw433xdtsVRWvEH2p0JGCCPEMP9YN4l0jOa4cZdY9EtzTLW5fJVDHTPqMGeqUS6z98nldx1vZHerf9rgWNic6LaEpCgl6hW9QRR60Qy4OgVVCDdeDyMvCNfwZuJwiNWfSDetVl50+NJgXqcT4k5zbPnHwpU4PTDC6t2YVJylrxBCnEuTcoHbtLYN4X5zugYdjC7wCc1aOvI8OSE2bI8o/9c3fG1zVAL4sSY168kLDmn2ym70T/ch88Id9i2CdGSI2NKkfo7VFumSw8VFzApMdf3/RKijB+KO+UW/A7pdAnjWyKa1LCs10MuEyfccC/W9JcsVom4irGnj8oZGuq0aoHHUXPOqtPJnOIGUotVYv+n6GiyXaQeGJg3AiISyOUoZhVZS2ByhgEAQP+uZ1or4AYfvcqEJ/MLbfm88VsIxeZh43r/ogpMzSivAtl5/K7/Xhs0iYn/7v4VygflCuyxpS1BgiPemFY8f4jOqTTyiMvtR+U3qSZB/vh2cLP3CE7HKpsV3YvxrOlajB/wVZMz3SDwUgtjadulDOPj1iv2yBJl7KdLs7x6NatXQg3JWOOOBpRCI24zFZJzdpwmb597PwuLUFM671g+RhMinsP46THnmIKnsJqoV5oZepsvl1BM3TtAavVyYFasVlaOQrmGqZowLDSJMX0/KjqC1PK2P2MQ7UQQmjYQqQK9zZMo55RvYzJYcQ7ak9wTuQEThipOv9E+3JKZYTIFbDLDnwU+VGcNqVkHyL6tdv6eCTQtCBFi5y9CgOnHm8eWwFSLhHkTY7DaG88k8ox+rqHdzptdL2OnR6g9EBmo6ayQCr3i72osXwB5ltZAOdb4PJMQQW/yJMGQVsDMfC6R8VpQhzZosNoQfQ/e+CxtzZtKXm/xEJ1YuzJJglwAyCN/Od7E2QK/c3Rqg+AhdgDnzmbHjY9NAMY3aJhc0EHtXG6nu0L44HnL/M8zzLeQq62W8XUVBBqQEFV4msWp129f8VXlMMvw==';const _IH='06023ccfbca8e1b37b74eda3bb6234a8ee437a25426731b799470ca6ca92597d';let _src;

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
