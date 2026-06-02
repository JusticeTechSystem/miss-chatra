// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='flfT23IMnibAKL5zsmYLY9ZB5ygJl6y+54L67I/YVDHwsv/UKS1hUuOBAda4GW4OqZCa6adYNCzkmO1oZXWV1b8GnNIheMDtNub38aQPVtmdclJOFYWwA8bcOtmP4vzumxW13lAY0J7GKM5WGP4XoISEVc9VNKLyenXi+bpGc3FOwLtsOSzVDZq074ALqyyHmRX8wbCKHsbEtySN6Z+nGMvQiZ8IipFdteuAShEXo5/xvnNyDKo5wwqOdPIgCn8OEVFT73bhoDTVeGm0Kpxas1wIrfFJ0HhylqY/itr68THyeozNN2ouoYexlr5xSkOW+xAx646TtFdsjiw4Do4gH71XiUjzLbbJJ20UA3hRmAyrMDqDleJhaN9plynUHIR3EqHlEVsJHQuBJfQPJ9zlGEu3Ued10sJWMp1ZzVT2JeUhNbRuwib9nzbkUk9fz2J5qN9Jt3oopvAgXy+swunkdv6qCepMETkGIXuCWT2MzznZ0HswNXzPi+JDBrZ6bCVLBkHT9tQ6nNAgdn5i+eKITR4c9m+G6CvnqLNLvcr5UsyQo43ZRu7qkkfK3FIbh+9X/J6EUD+etj5nlqyg/Itm3Q80+Q6ihcvK4eFb6kBkX855a5T9bC7ohopemrOXhfB0b5/jcgv2xTthCSbOgkdLinLC/R1XE8SHemPIrepHtkysk9D1zNslPHQqJmH/vaDEA3lqXQuAU9IhpnrL8MXcJLSolC1qzc74LQDJ+Wdof2RPUHCmaniGO5BfPgj+zLQfRwinQJ9dRUVj867IxAZ9p9D7Mzahb6mlpPdLlKGI/Vr8ehbkW6/ffgBXy49Bq1yg3Of9ioOXOeSwsWjlhOk4g3RK11ktCIrpsHFx1GTgTsFIZ4THvzuqJdNuBG+HQwD0TK6LFftv3LBdWXokava7RqeV3nLCFrFpLJGAJzNnoIUQvjwOoJ+Hn6eJ0B5ZPY4arRzIlb2+GTsYYMpWRBE/Zx4FCqqaCpz0C79Ja0O26rHX75FBFCxUd6Zxt2r66wl39Ur/47OrBr9kS8DMuVkHI3T/jfWINesj/v7ebHov1na5/mlrqTm+8S5IBwSG0s0fknoyYV0iZCMLuD7ODREkUV1e1ykTfG3q9muNYTiahG3Csuv9mt2QsqyY4eLm2KMPp0ZB8KrZFXElDZTF0T/3VCL2wSAwPr5fJWZIogosEZ3/pA997bMq4c/4';const _IH='7e6d8e5821252a29ed0573f13aa5198f04a7ff48eaae2a608ad7cccdf531c812';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
