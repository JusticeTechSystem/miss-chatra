// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTGjdvxaiZKwNFzx5EAF+2n10L1zz3H1qKqyiYGTU0YUap0G/v6g6YvvnUKJ2h3dB7cyNrHO5K8jsjjI4fADX/RohZqi29V14I3NDFEtVKhLiXC4NlE7b0duJk3pr7K/2aENVkDamsWVQ0bLUSwL5PXSTmD67T5aZZZcLStgcL9gwfPMX0u53oociUGjqgSUZghzd6Ub/zz9JQI+IqPoXY7+AhcHzFZiqBDC1h+JDu75bh8zwZ/7F1PaGRk55Dmy64HCfNUmQicKOzZHJ2Yg1I6BG+AJBrvyc2lc/tVvp0qYLm2vjlHrSThgfngPtUFq2UZ+YCtD2GOZtEENJill6hjTWdRRJ6i86RQ0XwOXZkBWyZAyNAr72CtF6QoivbbuwTkZTqa3eQmySg0WQVDZauzIgbMiXK7ek+1E7zEZcL4H4v11wUKl/ZPxPxeFxT1k8TZDPUw1Gihzk7uzEBWd9XoSr4gBSL4SJzcJ9t5ZhgWDAE6uX6JN/VizePa1QWkvuSjgS0nKZ53D/qnHQitVFpyRX82qQXWmoH2XLH3MJ/QCiPevhMmoONJCuCwVmzxfXMPE6vQ1cucfmOQ4r2roHiFkm+CsWN/xcnpglqZBbjVcEqd2fDvHhVOUfHjKrdmTKmL/NmTwVgZEESOFyZVsg2kqiUPovfiigJDSTWRoYrHC2Br/Wncv8OLXmwyGApcFkBVCScjUUhnDq4PH+7Z7rMa6lRK6Y1Yb8=';const _IH='be7542e0a3e6d2a4e3685df256b261e86a8a348e4a7f1205114fec3d1b170933';let _src;

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
