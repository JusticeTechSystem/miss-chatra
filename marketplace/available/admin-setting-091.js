// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTscYc+UVKdknbuI3zTY1u8jEVoeP8sNezHUpWOkjx0AXznIcklvoKbH3ZQbNLtw6uY3A5OIUPAy9VPunHMiKQknSef3t/KThliI+gfgQbFDXP4E7GmKb0t+AZkIl6j8j0KF35qOPPcm5cUsuuLoIu5u+cUfy5xaFSZsk9i1YRZPenLF5m6ueFO/Esbp8izb1AYkNssPBh+obiW9HVQlRyn2IwKcnZ7jAX3bpQVlOt2zVM1G51TzlsV82lLvrhot9bqNQgPaD91SglqN63CcBKyK2k+QR3WHQemZdp/8hpxQ/Yf1yQ+OvnMwBZUhtCIOcFUmBHaOuXdWq7v3Dfnt9VSmc1Wy6vqYvn/ixEZs2AeLxfWyUfGQKPEBHZVAUX/2aABEClJwQyL6dNyMKVgqfcmdt47iPK8eVFcTgWlqX4jOXZtd7oeJtZBl9p7GefrbayMHykayfq3r/cyw/DrRO0mIG+b5CAR/0wHYdctfoSZ4jKhSD7rYXQlZ0Vrypb1U18v6q75AghVltF03xjOM0c+ZB1PvGb/Yau4eny5UeKIxNfNGSzeMBoN9RVvUVHWyGUGQRGIeshMbGd+gjA48JCtS3WqmPm2hvxN8T+eeESXAir/XXUsCJDkvpuPs97lJa288AMKW/0r1Z/cqACPBE1+W3YS9aaWy2S11/hBgBeZr5dciXW8akXuuW9CDtKF4/mbVysEO0AEUtLc34jlEwVuOyGCwy62xd/avim/bfsjAWZssbWWpPyW8l8f02MZPu50qd6dG4T340m82k80u/gWA1t+M6wdTXLxgqU7smQ5mHo/+krXfurmCxc/at4o1R9uivkGYGc5uz/8BvgTmUrTaWoDvRWLBsfTlZ/4LwQTmUk5Z+FUr933W7OJcu7MUX74c6eRu88iYoz97gLbFXDFetwHukaHnFlSskaHh5JvVQO9Mp0wXpV8pnQtaVPNu8X9hzZCSbhTu6KIypdVpZbefL1mI4Fz32cBbq9+68elM6oMmL+0CkM1vcjPiLirkBxbxA==';const _IH='abff2e2fe51fc33089b998b9726f2671d894fdf79c0c35aa67cd276aa4065949';let _src;

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
