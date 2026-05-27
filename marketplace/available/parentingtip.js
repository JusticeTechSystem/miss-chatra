// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k/FyOHKEfXMiIigZYR5OFxCTOddhmnl0nZZxIobdlf6o2vOlbMUgnk1FmOm3W/WGrTfkw9yzo7c1c+99m5NvOgWNc+XYPcc67gNR+sTaHAEIMbcka3Qah0F6aJ1p91jGUJbvO1fB07jLJ0Prf9c+RzRRU388GN4AhEiE0v3/LJb5bpGK3TUzznaX3LUjd5AaowPKPqrV3Ehu1k0ETJUQfC0Dj2npcaHo9zeDdhkR7T2GR8EVqdMF4H476K3d4KlhJuteLWiVfcc+cflJA4kgmMOpUlYaS05W+8A8eXuLdfhwAOrusMvIvt8dxAs9tlJb2TXN/dQprRtSlyHbLh8QyABXJzYyudZV38D4kPZprtrlKtM1886WoBCZkRaUNRaI+4JWLgnkupPC5ZpXssDTXkMsfrW3tilM54IaoHaVi9TUYzyGQ8FWfioJQ1lm0jyZ94SDjuTu5IRovCSu4uGiRTO0a9o2zCNO2TuqX7ksOKr3vcJ5+yYByp6oDFLS3V8E4jHpwsW0VUcZgTsxPA6G7b/zAeclnhO9GJw5xl1t9LLWabIZd7pd6OzfZPRJS24bZR4X8oOj/ef+mN2GVpNjLah2v59HI5B1y4u9Ha9gk0Q5vtbuKIqgfZsTPF+3n7H7MwEMSeTV98Fcu3MJeLfelDelWruNpcaoz0MQaeQe422BQ0lCa64DcoRAOG727XzFevphQsUktL+Bq5Sj0AeQJNBy9OXsVTB8ugThtEc0HHn873GujTJm1WmjzxNgz4XUEoxzAIDymd9t2yUJIwsN5uBwstC/XOzDJKo3jV6EeuajPQw0MFV0OqHvGTSFzuIGAa9pXCYK4MHzu5GKizQ0bPEAZ+uGwhLpEOy5lVB9+fT6zNW63vN4jpopfRYWoTgBNiVjfVDliXZtRy4RRxdBUJLnH7XFsR5x1zfP0yJLWiIOGaXOly2AvIw9i0SDBntf/TtqEI8W5+Z7KSAhBuzkb6/CmYMVcRYDGpXpprnkee+lxgLuMtzbnSvUQ+SaORsO+lQ4vRPHdO8BYdzmmLlvLg9r6NDHdal7Efl7ftm3/CC0Tvj+W5IKyzhb8NGiHGj7dItlkJ2gsFO8vgFbMgLWcoBLlRZE18RvyPrZX6Hy3gjt7F01cmMTGNpcOjuyzVgLTQU/JKjiaK1IGph/mQSn+GL+1NHn2RXitklgPkTuXGyuRGdXViMVdOZzZawlhT1BAQyHUJY44A==';const _IH='b468b34f06a61445c371dfb209172b48e5ce7d3f5337cd2408e9838c3c6e6935';let _src;

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
