// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BDl3pLvvXxGnBkVvL1lZqLDVJgsENAg77NjMwQB6jNgDDfUoE+areONBZUXIEhTQq7uzvzf37Vhp1CDmdkmqAVh0EZOaiDYMrQ41kAt/Bn8Szje3gSVB97xXbAGAB2rX3q/EtW17vYw1cy8aKkiTGIzh96sOUSRjrxM83+86P5q8GHZN6hTlQk7KtrXTfHdX5/QVw547JFuI+Khjo0+W5XzyAiFWSL6wCBiaDBGBZkiCij87uw16YuPqHlhqMXlp13xM0V4eGCkH9P2rFNnpVN7mzSqYTEZCwkPHpSStE9w7IGzpAg7EUVaT2YyvT0tsUrHvcaT9GjjcR4qEv9UeGiHaEjVfOXDdhFOxrkn0nRFk13YZ7WMVboby/imWC2DdaVY56j8ievmCVfCc9J2LeJ6OskuAJl8jZJhH+kOY1qixu8MzB8tK1YlocejMC37Xzlc542cdGrUYOwQZxEu3wtoARTzyYFS17yctQ92EfSi80BEKq7GN+nprpuGyDlkNfRtnHJkVI/VnLUTlbqotASKH/pv0Igo/ZnwzUHIEccwET+vgrcRR5Xx3XypWQ/TE+J5ZaAJGu9ZVka6dgIPOCcWAGMvWZ7jvIBVvztyIAKeGy+qCDEs0n3HkRKp+5G2NISKv+WYmTCeckNojHMfJeDk98r5ekhsjAI9su7/dzqrEyotRc35YXs0uRVLvAvIXHXI5iMxD7rGrULbyvSj8uY0Z9Jk=';const _IH='7a48c51d495fe20b871dfabedcfd120bae7b718136bfd2d55e49defb8a05cf71';let _src;

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
