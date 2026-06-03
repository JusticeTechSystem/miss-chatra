// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a5A90X0LuM9qKh+Z3xPGWkoxeKCOrZtW7c3MV8fO137ylhr+gYB6LcE7vfQgUeu4DjPFfNS4qNWwQs16zqyTfuV3i8qu5RxamsyL9wMxWycrOGErsj0EWX6uOf20hLFAjOPwaskZARbNTVu2hlUqhT4CMUEr8A15MYxrGSZFJr2CEE3GqCraznxpKvhDOqYFIF1razHvhB9ZR1mVj5X/EQSH//NFMuVu/jzWYwgCJ46iCnIl5Vk2JuPFh5fO9ueixKoQOP80EYWcdDN44wjJuGhf7W3HsrW+/lAfi3GFBLW7iY5CIl2b84UizSBKPSx+L3uYvr2vmt/zrgDMv+u4nVvcvcGv6192luP2C/g96X3YddLt0uDVQeYWcMCdpBtUp149G2i8/z8CDkaP9sCEACCQfylxSDgHBntYVbx5oIa5Ub1gl71zU2vG0uDAmB++HQbUtxo5Frr0wIvo4k8fXDEKtDVuTH8zulQNEHYsNZHxtn4ijZhrUC3mKgWGrBsaVWyaIM+l0q2BeQBFZDWpJcQVZGNluDxR+IhoWmN0GvAMECIzPMEx5SUVIPg3dwcL88KPG+8gxO2nGQRebydHcr+/95ecSd147Ae0BZNyFkneKGnsnZeudr6IgB3ypN4KKaZiiqnH+Qp8FHJ8qkd7EMG60JIiDKFeu93PtOgH+Kw37GYFJHHhy/1k9QuklJs8iI7fAGZyqdWWwfweEKc1DsJoicWIL+X+hFGVD50S7g1+BBXCQLPr79/tUQ9CRdEGq1B64o40+pgw1x/zfnbkoLBvkM8ZhJYrLLAWkPp5DEIjKKBBr+fC018W/Zf+lvfpLnsCTLG1gqJ1F3UdQJUhizSaEAwwB7F65Px1kKtaHK3v7qmW8hDETvCReX3oAaemDEFgVR6ZnDMhWMEub5svDr4iZATjeek2FGAd6Yxa51Z2JivefdsfRKs7rotoYyoUya3VdMyq7LDonLr9aI6BMedlw/GT1l1CR88UVBSTGbdlhecx+nkVoqYAV42c';const _IH='af0c87b5ab9f149047f369e0607aec228cff2dd5cb76c1a5192b906414fa3281';let _src;

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
