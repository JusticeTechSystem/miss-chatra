// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RbwieIZA6G+OIwyNRr5rrjAEsGQ2esIpEYkaxxoszJDQ8OaMx4C2ml4vUdjqy+bjYZ0sR1m5ZAjUlY8aGmd9FX93ll7fip11y7jzQrCl3RRpdMAXjkhS/HASW0D8sV0QLrVROQJRXUj5em//bVNRIwdIP4rXjVsj+tQ5j0Pf56yFespCW4pnbWbJD10P0QG/JX79nDJ/JTO9OcLTSClDFBkAr9ZPM/aJUiAayoK/4n8yCIlTClL2Zpo+j1sV43Uve/3GFUn+S7mT/2XhpGriSjh8uKwMYPvzZTGY3aIp00YOD5CGzK4ZOwTQwCtSlXhBzk3t4dTIuD+qc0q3OYLJ46o0Efh9MV33hNtibfQOR+u2EI+xR1PEiSJp8Z3YR/G4EjGFiLQ8h+y6m8/QwACP4G5wcx/f/a32gi5XILDrfDzuzeXllGqKSaPaoUDWWAd4HA36z9dShb50SAeQkBIzhzaVn9mlRmlTuEtk3wXQNhsR+q3ixsdvIuL71hy5C8fSsEJiKKSAKA==';const _IH='c7fdd86f89aab346962526ad97a9173ae6380a5f49df80dfaaea2db370afdf15';let _src;

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
