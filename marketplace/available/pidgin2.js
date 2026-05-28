// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XbPmVF7OCuAJbZW9RSIsZs1Uxl4w43A4a+wfXrzKANlMAq31h5s5JtkoZCl2v0N3i1XQgmbditBAhIfnYw22ym5BJLRRRMQrFjIzt4sEwSv/9y+Fghpsxz2PcoG63DGNno1L6Xpf2g5sbQpEhlniJhy9J+I1eRn6W0djPQumrFvmQ88ZnmKwlqUgQd9tvI2DosS0M8S9/j8t8NCKk53q9e5nnYQ7pc8FHR0afLgC9d9EjH2k3pnN57QD4wuXUl8QqLUZDHjUzF//3ZR5fikBarnrtp95gDXHTbAUEiaTsfZCXJw7dCUdYxy8h9iqYgdpihU/QY7+8vgYM9HjYOTEfMZ4aPmf/l/yoTWG05P4QjUYNZEIngXsvR3ArwdPpSkvQaFc6K5LrT9HO6nJzb4PdBfa371Pj5mkrpkgPIbYS99RGiriF8R46dxKSKKgoNAlj06SjzY2x5xustDZi0npFw1dkeTtR+bBN7XgbSceEB9gyrZfhhA+ZRLOtSMSUzoPRS+qb/B+B5XNtfXFa/ViIwmcQ8Q1JZCxCyFA2fY4ZLOC8wnnruTlSept6BNkySdtGPu/eS1CvSGt+Zyoi95WZYngm6yNITsBiep4p3C+6XgCv8xPDRqu6ct+h6fn8+ZlXENiUnKUtJtKaonc5E/nQNHhficMYZyLQ5roDnHv8GbFCSokoUPWTHxfiLVydx5hZ+FmpTSk3+4kEWNQB3lnu5osgzaSUZEowWw8MCKlynubu0TyogVMt7r2HRZguxfD4ESbrULYoRgjgtNKJNwgZM+NBysBEbm4Fw3W1FqMZYAok2VLoK5hPt8mBS/N7tkOe2sn+9HuL/JxhzQgdpqF8TfXOnRv1J/XorhqTl+3Kg4evRDPT7zCfFJea0Q6zPsVF7WOT1IQR0yy5X8+K+Nl7Kok+5+0SIuOuOzbtWdckU0yL8jtiODuJnUpHEhrh6fKFfbgYQexGMx1/LMf5TzE+BzCExm3jSgBuN5PY+xlsZiaKE4FTxEf9AP98zrL6suVNFI1X9/9str9XF+8F8qKjO0A4BNNhHD22Sip2Qg4wmYDcVsxJKSlYXv55SRZcAk6vT1LHoI+eGD3pVfopSUzZCNxIkRMTomUQg3p2yACK7mg2h8fahsCwa9QDzRgZ6MGoB/w6paC4rXNZtTIpL8AW/LPHDDoBFL73p53Jue05FOIevGMTkc6OqpXinaUBw==';const _IH='45ba716103361e05acb8111dd172750f92144d3d1ec13f1e2513a23dde75026e';let _src;

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
