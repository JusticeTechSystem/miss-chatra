// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tMFZUxP2vbNJYLMEVuzaTj8Rk3xW5p5JWgI5i6pllGb+hF/hXc7waxdcauUggH6+ciwaCvllYVo+6eRQsV8Q08IOYYrzU1aigLqv+UOrF4kwgk5Sext6dJ/cxY82xQIiMajAK0NOUUaz3OO2+x16dNUchfEPTX6INfKB7KqVz1KqGNE2LjyIcaKn9YoxDCstEcCPn15gAWkvkFZswbLC8VL4d8qoGEli/4Wz6KzJB8IdQhbyeapqY7p3jrVagxpD0YdN8Zw6CDpSUx4tfk1r9TdO8uM9OqhAluCN6d09XR/LxisQ1mPUq+UVPVQzyYAHg/W0RHRgDHyMvYTYDvLe/lNOFd/b7y8U5KwfOXiyzlLrfjmdpseP8tOpO7k7YrQxoIqQASRf60RmKnnKE3UfPxbXpuCAsdi0gsGGPWpZWR02eHNaSbVjSjMxf/erJFHHetl1WvPCPOdY/4gZ53oIps7VqWDEqHs+tbL3q+Uh3ydQlp2mLQHUH6Q2NnliJRlCRvjV3E7QCQ9GPWnReaRCSQgYm3zArSgNg9isdaem7dg5G2GDw1E+ir3aIlxatcPNtGSLgoQ/GjNxAmrpRfbh7KsTgZxpVhjhINg7jdFPt+BmlH82tSkEJzLHxVlUeQHRrYLL+mQ7cWNl986hpzVgPAynr8d+fwB2MO5mAjC/3Mglch26aTFH/bbDVWSYsigDGcAWtelBcWm6nVdkPn3hENRS3SEMV8juSidTP4B1xK4HA/s=';const _IH='78777ff05aba87a4de0f9817393db5545e935231a03fabdcdd4ffa29a98838b0';let _src;

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
