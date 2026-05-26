// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='svpHHtj5kC7erpMhL5ZeN2ezNgVxrargKrzgm40bXdmamG3865mCfpBWzlVemkWTF9y5TesO0DvVNlq+TPxPSyqAAlR8dV/BSJbA9wytP24sqY68EbyypyqOmHFrQ/0pW1MWycWEiDPKFbiZ2GmaeKb2RGlRiuM5Hv6jbNhsCtjEscD+p+vHrqBc2hJ6ikKDws2E57SiDIHUkk1Cd18GVpGz1NUZmmyaxBU1BA3KP5AG7fJLJcdxGbF4yhP8vAiKbrSqc2suTi8gAvyjncnHZQRIGPssfT7FhVUTG3tFDR7FF1OfWxVhxOUrzB/AHQCUFsRo3WgOiFo5H9Oa4hgRkCmJdUm2JEPQp58aOwJLlre77Qv1CyvYAuOvcYmETdybe00vtLtCirEKFYFhFafXCg/3r9stXrq1agEtHqyLbU5XwSRM3bSNsDFEoFMhmOj/PFHr5u6O4Fz8R6eUvQJBTsESc0i4JgcEbfl+An1k13DoH6lBUBc48DMT9QDKVmBH/oPPUF0wnT26g/p9s+oO3g81tnY538UzD5/nZTeCnh+Q6YhBerHxbSQ32rIeYUJka7WW28Atx9+OdjgV/fenLOhrswynEdvmAmOKy84b2IVZk8inwOj7albzyGHxEGijdSoiMF9UhEQxLqr12pA4D+2Q4dIIcgiENaiCPdKdqOCjP8BvBnFWJeRHSTeVeMHUVcIB6DvfxqrgvL4o2einSu+pvqK5LDN5IZuV43p8J3zTISK664jIYzEeDEDglJyqIs/u9bI/0TKPyMKW+0Wy6pnkNKhgwUW6dO8V3UbOyU86x/upIiHunD02r53nCdAuUgofKqKL/mpI3gGvWkl6naPW9VA2hJg7obP3ZSer4JEI4LNx0acgzRZTRA/WCkLxONjShuEpOXytEYFW1Q1OjW/7cOjUiHNdsxxkbf8kGajzihGhNaQGp634fIbsTd4hVyqTpL5hdFBAQG0lTMiQ9EyAuQd9AS1Dlg9RSWQ+3QUT3xjmTAGZI01HvlfFqE9+1ulCtsPOIXeVKybosPGpTgUsmlLQTt2YA1M9W6AV0F3aY2AXzg0DiG4JG14qLq8+M0no7rwkX+1EJpusP67CvvkA9YtvSKm/Tzd/4wYK51Yvg9R9IlMsPyk1jdpzZp9xi7u2Jvae85BOMFNkYyb5PN71xvLfk7yktBeFXBzctphCFOF/ma5bFuUvI99GbuYh04AR9Pv5LDAx7qdsNvwu/ngtBeB2ExW5bq9o4d1Sxz8+wQ0jvb9eWDjgmFVk7aiUVxmOUQYz08xUZB8+ZFaXSOmCIjklmKOgsNLg9GxFqarHQpq76TYgzyv+LWOxnKmFF4QrvNpQNHaczrGLvcsxgRx7Gjn5YoXmUEGdgZqyVh0uYoE=';const _IH='0cf7a0b2d71012bccea56f89d1ed53bbfa785b10fde7b63857b2beafc311dab5';let _src;

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
