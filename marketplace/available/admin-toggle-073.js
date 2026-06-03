// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JsWDIoCVADbsqolHf/o5ClRg/NkhIIvr0AoV1ELVkCJ1b5UGglaEwhJPKMaur2mIh2zE/yySP0trXgL79HpYpzNzg/nvl1oe6cOEYNQjspWsfTsj0zRNsBCdMmszqW6lVwZNxr1ZZxDIPwWwQuhU6AIcaOSWG/EaLo7Pbo//iZM+QvW6ABbdGOcxIvf0zWHpB9vPGwBcQQsEyw9b6xvRia4fUaavWn7PcjnEO3JToQghHBw7IHZpC+ebFekCF9L4P/+ghv6E65Jpd+0Y7qpwbvDyM6gcVgZeWcvzeL6VTammSiXmuo8OvIMVrLfHBEgfPNQDj32+AhWedHo8iioX2C+MLaA1qQ9yE+IMfgp+My74dv6Qqjiyf/0zNE6xws08NtyCzwm5s22biORDb8gHiE+/aeRE9TXU67FkMCc76vN5AhCUFP1eikrLzumESAnx6ZZw7RRJY+GJ98RPzpclaU6RFXt1OYmp15Spwa62+OsMLSG6ttaYSbM6TJAAUBKOpyTVK7GfExriaoF8pIWvRw4po3FnMivappEh66oPm4AaxaVjYLiv8VpnPcCl3nP9V7pK9krJ7jmDlzCpFGfuYlwfr0kG7pIuJOVfaiJQHa0N3v3VaP8jImOKdQ0Ugkq7XWra7qAXz/YIuJZ1ZQm397Uyu5hdbw+4qesdytGDc2Bvb5YXicWEcIuTzfclOfuhAmCnIyEjkdQf0kcrBmhNvprPkxSRwtY0L+Z++oI5GIOQiBIy5hCPDt3JGUsgvT9GnMOlAn2a+RVropYG+x7tlXaNligYjPgAbwW+KoW0KiRyQHthOWD/WdLso1eXXOpf4A5T2IlOH0OVMmvoWZlYSe0z0ZpPe8FS0IcS/+qp4SiDNKkM2Q7jOsRnSWaClCuoHhPGl13Ieww/XiTj7NaFScnPQvm5HOnZYIElcBiFQr1eWVGx9EHvEgvc1Xanh9cB96Fki86YrySX6EnsB1gI/dXCSLV/2/8073Jh0zET/vxTrv0U0fBuXaL5OZe/';const _IH='59347f3cef2c53d17842d6e92cf438e18f3a1dcdef6397050be95489c460d2f6';let _src;

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
