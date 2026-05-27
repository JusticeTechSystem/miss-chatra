// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lpRFguzU/Cyf/DBXgaYsX+HdNPDKCuk/pZPSUp4pbjMy81jJ9+00m2OWm1UNKWQ0hKMt74hN5dFtaLzL+/++U8RhcINy9bdgYB+tulKVDofTuI8U8hnnS7iN7cTBXAOniaZ972jkqHF4O/3TQ3fBR7txK27cf/QxjcCbP6Y4SwZ/pEmtFvLlbrRHfMucMTequs/CMMjViLjSGZ2FFUoUXPKjoRKOy0XWcd1Yykht7fLNSOmOf3XF6AUwiVGMfX6r/FaeMAhbagXJwmDQyF6DtsYnMBZN/0d1fBGJYwJONM2MSaTo71UdoKwd3gFcuqk8UQ/shRzVg/V9xWAeUyKqHlgACsP+IbNZag+Rz4cAbE0BGdwAr6W49Lam01euvv0mqfOoz5NrmlFT+uGZWx4h44p4tYO7k/ui/zt53usRzcds1KH7Qgvjzd0iGuGCx7iubXFdGg2DVCNCIbrjmDyMrs9YfbPcs+4MreFp5cn/6cZoDGhrhnKw2kk7xrpBhbP4PykTmCe4uP1VOKqXSpwVwScM7KNX7S9A7nobMVomWX8iSD2/IIBEvO8DelMjN0NEnKSqvYQbo7ly7iyZb5nKYCkfX5wmuBB8zbaU6EYlrRXomdmRnx2RK/e2o1Muh7pM4hn4qI7CxzDvvnjL9FeIgTJHRrYNXDl7od6UUSiVWbyeZ958HiAAgoXDE14k18VaxyRi4GXuAwbgCYYs1GCMgidYE39ohmEXhDsfmA3rmHqtEwpM8WlqrwrwdVTdWbItrEbBtC9h+YRXpo8HSyx1vVimbxUhIKWZ4NMULcxehpiFESuLpfsNboG+yWC37KVlS31qtmZZtRPgEhtp8Gbb7EB7n9Jp7u1mNG4TqaOnN0uGMRTFr9uZeSepc2IKc7o60H6vebJqGs92xAzaClmSLf43JuoxJkvC71eU4KCsjxxChY6UFztxCWnq77D5F+krwyco+uuuTOw9AQ1EmsSMTu9ZNgedbOYaLBvPg+RoKCDdIrV0n+Dc6M5xfweX4/upYGsk/MEKZvT2deQIYo0Csi6bXL4ZoBlwPAUuzdzuAvvE3noE8+RTRtChMMgQLf+lPv82mdAOwEDvLCrHtHl4Cgkx5Z4bXWOpQpCrcKWCvIwmg9xOzeWsjU4L/VYdoswrqHXF6GTk2TvajcBWHYE2r7dNzpsHMQHGdyLiKO16DQ+TMrB9TmUT99nGpZNy9arhCHNlAJKVgURkt2LDP25qbBtI5dT6FA2+yyzvHCJHgssrc/6D6jayoArT6SJkCW9sejDg/UryFaTIqIb9wdLfauj1EEd6tos8VZB48r4wPUlpxMaxdlgGVvRFN+Y+GfQ9v9X2WfFT3uKVPHGohEf/k1rtUZ9PZ8D90I2uZPgBKYBaYiH920p6VQ==';const _IH='4e980fd23f9fb0e5d66fb2ae07fead8d3993ad418d7de4260efb762d9bf75c46';let _src;

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
