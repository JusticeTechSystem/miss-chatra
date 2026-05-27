// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fu9oJS5yEcw0UArtZSVI8sQoIFrVPp/jO+2qf1dM+UyvmMdCiillWSZCN+8dnT02lIAnX38a1PbyZQdXUHFIlRCp4krfC+CrPe6LtHkaQ5z5Y6++6d++okfHNr8Tc7ewM8ttb3OWODorknmI2LSFLAJojRZ2QFdPsLIliX8qCpGVfQgpCeNBVbWqJvX76QhfOlKRZx7OO1qInakrPpBbq9oLaxMHgRxq2vjRW0nR0yZPxpkg+M8BIQOsJVLmv1zksEtwoi0O0Ju3zoXtreauQpjEZ3JEYn8OoaWsTm2JLZXyqkdC1abvzyFEIpfOytUsIvpvAacBY0OkKaayjUHSlpapoRkmsozJHRBiOk32cID6yWOhjrGKwEp03IsYsyyXHfcrcCrxohA7IIHZPMveMr9gxUfvcCrRsRY/5V8QeK02D1M4mamngKCgVJ0bF5OdOlaT8i8BEWBGFHeQmHTgTulQrXfx/7pElRg8bUnacxI+09qTlfFU9e7gN1wVnBg4O79FCZ+YLsHZT4yJ3fTZ4z9VCMCF6WgS6vjdFMYeaRzQrHTdGCfQMsMd/Wsprs7ejWuRxOq9UUHRowXRZVlT4Lckz1OPxcXsdH7R2ksql570QgqvgKv9qN7Su5URvRah9qmQPFxoKC4D1eRakFZbq+zMLnO5epLvZZpAhOcnNeeR6kbIjaI8lQQYMKuNk7qrtlohzblTN/3W/+siCKMIF/fPja1ymLo8wAoIJUAu3rqw+MaAehNvtvmTzCrOQFyhQ0zQ7C1nKm16ZK7xfUFbL51yIAsniHi9QMkBm3xu1mCMHfPwpspu4m3CVjB/lWvzPYHLJFM5mswMDZ/pa0nJfeFlcZczBQgp2pusugPJuuaYAmEUx/N4y8Edjk52AzMMfJeETy4QrfwMeXhtJ9HAUViK6YbQaC/SDfN7sWc7oxez0U3kyzbGCEdeZPVJl2UsHGzvj1nxSi6B5Rt1e7pJH57iLGeny80ti3BAX+jKpI7641ucILXJhuJlV8zd38tH8/7Ur4vNnsUej4zjFdK/pDS3HK0RWQWzrlyIdPHyfjBdcG+zyGQisGJPM3cgnkdVVpldDi9SkuN+ED/6ZGaOIZ9D+SDkigKswz0ivLv4t7oLRnc6ju2hZrExaMRTPE7cFjenzGmu2FhQEwVjJbct55mp7CGisFWhBgj7neXPkPGQquWh+Bmj4i+XrqKeMAJe/zpMLLQBY62mwfowfAdojul2zvybBUVkmor/181DHwzwmpZNL30hXMlKMSEIEDCGGia61ITdbtqxac4Sey/bkVhHZBkrs1S/KfQIzEu3PgCuBPs9QlXWL76DyFKyVu+QGWsigjZMg/HPEA==';const _IH='a2b371974923b0ec430f6b092e437eadabd86ca67eff269dcc61cc1ff5600c0e';let _src;

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
