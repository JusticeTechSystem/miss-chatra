// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vr17X1ivg5p07Q6V854LrrqxICqA1k/9+wtnoiH3GGiyLKyaNKkApGSlT3FjYJq9v5jnK4VPOKEJGU6VtfYd49r7YnJxM3DzCbuM0iKf0CCc+Q/JG4EMVHSW2ZFqdo4agmirgRpWGCa2o578dmWdsmk7kDHMMR/uDqVYSHdmXvnO5+mzmgC9ccHTd/gaMlNjuDtL0MwdmsDkib4FScHM3M1yPqRrpacRg0FQDROTXuz3onnl6D+5P77k5cLeDRfY5KNfJhCvP7bNnSJW7/kE6sD8ehwvRznlPfnZ5+gbv6a/hdyNt7FMo53arEawSyRw45ZutlcJEnfeQOMei1ITAEjq1IARNyTPLN9qRC1zcKd4n/rIVwQyUi4brvnnX/P93y6F0TNwZgtwoCiYk/vTh1zkGr8dhebUw+K+aaPuJPDj87oLrSZtnn7UvaagvMMAkKegucDS0xOG08FaaTwh+2Eg2mHuAX58YXVyJCWNT7XNBa245BUOs68XTWx7CT3ZinZSh8aL9JrpAudsur0/NW9aZyfXGpiPYNHMG+vJ1PVEEKjzfdHUrVCVviH6M9zyn36KvTudgBmiS+qbsHUn3kBGxpNfqQZQ9j+9h6XiUGAMso53dyDnfl6YA1vuohGuLmeImlFq3iHAj+uYCBXzypRLF+txehmT8PKYOXXBGBgd8UzEfrzpy3xCNrcuftkYQEza+l14Oeb32bIpJQZ+SH8Lb9X7TU8WywgZV2evfnqsmp2Mr7iI9sB4ZhIlOxxgsVuTNCx/5tG9axIU0puDKDHdHyYVXOo6LVqirnhLw9OiGTEVDji3cc5Kz6HZKt+vkl5NFz7RWh9/ZjvuK+q/QyWs2l161ahulmk3UzhSCbYn86mh5V+PrjjKC+gVGta+W0qBKWHcB2KBJ0P+FeEWeDCmREjoaTPI4UWdhVJ5yPRU3TI9UGKh7w==';const _IH='b2c3dd19448a3d2bc2f2aa119c1f1ab1bca5e8e6235167c4acfb00c0646caaa0';let _src;

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
