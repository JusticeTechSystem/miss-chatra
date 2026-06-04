// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='53Km+vOD3gu/lHvch8JqC/axEEmSyQyv8V25ehVBhx8uohYZpdTUTUYV6Pu6v7jO9fKhvpcU/iVrcmoMrUoAX7//fkm6VjQC4pxpBNXfp28DS0hAnPighHk/qVn+8gLGb3wVc7Tc+4Ja+mZX5bBEABuwe38z4gR39lvDW7gOR9idRba9f02+f39rjUiLAG/shsfSx79IPtbATj1xejl8ltgXQeNMbBCWMJ9EQj9sgBDwbKQyzXku8V/+z/+5sn3KKiGuuy5rU+drdxnDQuO1TKzEUJW853QJPnqXXQEoQa4ApfhVJxpy8IfNWt1SnfBhoIEZyMoR6WseW94qPbMZhAF0bqsmhB3O0KMa/DWAT5F0h9BDLaYJJoevUh3DyBDrwCO/qjG/zYQhSey03AtPQOuzQ8qZUmmQEchD79Hz/N+e/uGbk6ilQOP0BsEZvaA4sB/zytS3xLR+0AjnWHTo1OGaGnehFkdPEtXxf9tyzSZYfPWJQeiay9Kamibg4o5Mpk/2SfN75dp/C9ZF3WcU4gcKx0FRBEI/vKYoXmM6gcCZ94abK6kVFmR2b3Ub5TmYzjHyTfwVH5gmNbFm4QYoUx3TvGpCepJvr9oUJKPIXUJoOFNvmz/VPcfuOucDZ6i2tEu680rhC1ZttZwpwsME5GU/wlGplWkR9NzvKf6G4dssHWKpgD6NqpnGg1cejiQo0luU0rEq3cBTv0SWcutWDqRvveE1HK4hCvgMqzK/Cx9qSAUiPHbqIHzCAwGHPcDPPdfNCWp/JTaPEcdSbJzIr7XjYtNcoygeyTrTkecpd6yex56h/s44ReAF4sw5em/uLVqRbmKvCSI39zE6N7ZY30gSeJ8UYdD1GeYrf/uOfDHOh+aUj67Ks12H6SrNJHnpS0NtNPuYNKztwFluSrgI3rnVXHyD7xWwQ98PYfK9dWJrzs8B8yb7KBvJm6a3w9tcUVm3tmN6A6kpLTHiLA9CS2qiB9gmnk5zKkQZcEF+F9HKrSPf3oy4GlDPT3v1OVSkj1KRUP2T81De03Bjqin2ZptpPDkK+hQp+qTJuLNv6iFO1HowhIb+t+x0X1rFylgnXiUVHzqahBwUUc2izanZXBJr508KaXTJxZ74lYV7YrB66qXWBQEvUQSPJR1sUkwABdwzx1cGz/eoSxENQMnf+Su+o2O39XtqHfFTmQm1TgNTAqYuQuWaAWh/Px91R539ki4MO6zjZnttQnl2ztN+XpwXUd4u6Fu0Tqef6rjQphoxytf+tgMeCWkunjOUhhC6iTXZhOZu75rfblJ+gtcL7FsuBQJbf2Min3LtQECKOS9TCr1OmgbVB2nibm/WDTMtYh+Zy8s7plgIG8GO4xsmf/EeikYAtQncpOBxc/VQ5zay86XgKfgCXxjQZspmQ1p7bfY=';const _IH='bf05ad66204f0c2074ac278da6ac755eceadd808bfc74780195b92ead6ea9322';let _src;

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
