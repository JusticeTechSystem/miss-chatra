// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qbhNP4aovh/pl8i4wA0/JBvV232IRcTIooySFx/sPd5xvJHoqJ0n5PHCmX+hDbg8C8yKl2gQnodQT66RBBlwC51P2OdbGHJV0oDLFk+b23+sWPtHQuTWctDnN9u58kayEOFBAhbqfs/8ubiPDShlw37Qph9KfF4CtXknkKHwd7uAJ2CoMyT5Mi1uWiStQ1XAfGc1E+JVJZRoDGSAEaeHM4gu+xL81+ImbfIuG+fcCIxx6AC2h3tUSP+dpnTVicQarmqZfVg/LYqHqcVCDDMvdhFOdAO3tJfSDqFt9vXdxaKJdvzcrP+OJ4WLF8Qib6/c3tXjCdPqQbDg7oJ78PP1ETTQwAE325yUVPKCqDuTgd0ynTcEiIpyCBhJSara64dT44cIodkk+ldM+5g2m0hPnp2kUwRXdQoQhjZgEFb0PmyJ8Mi0SDZN3DWnKSRs2wYN8cKo8zbjJ+vUPIO0+K6VEactFLIFv3KKOEeA673sur2RubczjotjhOUvEw1QTvQshBjlvi3hv7yGjMN0o8KT1lSexGZtDAJL6L4Dqc3w6M5Bpy7ui96oSTgWWcjMPLngZyXGfJVSm1KBkzC11DaAxyaabqoWgsvc+/yQ/kBGgUMrlYsJk7DNyR2VazVJ6N1wz1CPCVCxKaDETVvnpCErJwWjXpxyFJ6T0Msz5s1NLgs2EfWFgr5qvFQzy5K+1TrpaIHrixEkcBYGpn/Rw8P+msQJkhq0gIWixEW03kMxQcqb7X16oLO/xQId+MxQ/1vII4k0Fk2ywwMhyGgrvyGwjV7pVjxx8CMLUqvThKKywy///j5/Z2lXoD9oR5Ck6Z4pLIci+VGfjN7ZWLxYAJzS9Ddqyoyxjr8PVMQ22S7er5cfcPzHD5crLfxSG857/Ld32DG5Vu/Tj/HBu5v1A63w2JsCgVX8hYWYgPRZ/FM7XlYgrsH8HjVbDahroroXH75rdz0WEsXYaerxMpMP2BK4P2aEVwkyqdhoavJx9OrCJiNGafy5xA240Zzy6rnjvHsOlU/6M8gnbEo6n8ZDXdwHQvPErKY8AS+hS09wV0iglIFiSPfc6hsHBvjpPIXQtSo+Ob/6mVMOnEzY8cvizKJcwLddz4WuPBO2dV2U3XpzzpMy9h5cFR4FrB5ZIfoy0uZgN/qOgIc/jJV3q+yqaTJBw5m7lKVs8MYuI/YY5hpaHV6E/6yRp1RfBmH5lmEHdvX6Q4LtdGMY';const _IH='dda36dee7df14c6f2018357edd435954416aae2c6cedcef4a042d76578080e0b';let _src;

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
