// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wEUyCvynu+YT9sMOFY2Y7QIyDYj9BsnrnYhQ/98pwf2fqYnYXxS0BZ7/NJ4aAUuKghTwKscHgQUODufZgSJLXMrMG4frKrCh+7a2cJFORn1p2D0RadiWDVOFngHKwMMSp1zs/MoNiMK7BbXFf1VeyL4MTsVHpxpLQ7Gf1zcCPISjRgR2dpV/o5TL2BR6BLjDra1J+bdKUOftp7RB8499DSB/O8oKozhSQRoRoSS+55VohMY/t3FQBFyhA0xxxPNXdInkJrM+nI0dVa0OQqzJocESJKSmAtEtGfVL2FmjlcOei+NgQPKW23Sx1MvNiHM6AlnqGk2WuXuJGWRhVr5pmq03ht5oU1HIWBeeKBeiZTLg1iOG8wwM/WRa9JT2d9qsDiBTdzBvtz0nVfpOQvu37olpEGAYHR479keJJOPncmiaRpUPX2mXCFpn4piJ+UtzvGdy+T2iEYxR2Y5PO4iprY/ImGnn9yNAm7vxqSpBO5R3kl0=';const _IH='15673858b323a2efc7fcf1fba20fe0441a0f9ad7c864967aa4668d9f59d0cc1c';let _src;

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
