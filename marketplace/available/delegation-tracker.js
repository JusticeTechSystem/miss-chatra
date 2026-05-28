// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1fXjYwulSoTk9Fe5agkSLrHa7fyViQrGe09C744v9aKtkcTgivzIC5ocTlIuA83kNlrPIqmtlFX5WCmPPKCZT/w8h0cBRzLSWGbJok9gC+l6kMdber0GQIVsEwXhBuTsj84oR7xf/fHeUHIv6ErL1paR63O6QiHkKibG8O0dGbTempzBZccjKcUU5eBkS5o1znPJ+20pBMXXiyOGaC/bYjSf4j11wVXBkqrmQkQUWzojtgsS6m4jEes5KQ3Pz4VkbTXJwEbltJj8AYaQr8Oi5QmH/APCq0MIFMKZDS7yfxT/mWsV2EaQR8PiTkeHdJ+iFq1ubqEAyK0n0c+iqLBZrAgxM+7V7rmq2bRquD2j3D1zYBcKUGypcx29uUCZcEt5QjOncGSR096DQYUlx99k9oLKwB2F5d2KZmgbgALbZsCkNJ68BHlGSM1IjsvOEQZVjMgGtkX1+8aiRs9d5PCLtb0KxGd3WCwn1vJzH43G/Np0ib3Zx+2my0FJn6WtnB6YjII+Ou6uWHMLnsQgkuxKuPx2n/ItMG9WquBa3AZoeYdTwYSLUBR2qm28drn2XGCirWp5OKKLyf5004OlBv+FygCplXr1PT+zliysjcrMIS/3gXPCUVj754r+awUP+7LXxSAQX6jMUMK0Ijbbs3EeBUcNJoHYp/gXKRb3drnzv1pKubQaTpHLEuLSySZqO21Rql7i4dd1Ie1Ao4wzZqO6ZQDxVj93BK05NPGAys7GnMwn36dSXO/VzOj1B1blz2kQXI+x0QbBvoyXtKjChABqIVy6ejuxVvbFQu7IwBFBHnbsJcrs4Cs5LgBrt5bQYA1Iwq6dLmVK8CsBwivgVEpzzg3T/Q925PssJsMMLiSmqyJ8W3BOGy57y8WTJ5niHmS5kegFYiMAvhLJop9PvL1T1FtsziZYl/u8+vi90yIcoT0lWsEolu+PL/EZH2X3xs3Lc5QlUhzhG9kJQCmvwA5np2myxCZQD5w/MHZW5j2I9rL2RqyLumgsv6ySXXIbPX/z6TYA9u5HExYXiWMjq+/b871Gkc5mdP5kwPFs91laaNSTugveJg9+EqwgiZ2PlCTieAIfmFa6mYNrR2Aa0elkqT3ETkfgXo4v0L1vzGAZSRjGENHYSBUdyuSucpuGK62+nQx0gTXXhhrUrc8nAZJIVp5yMGLV640/LNUdu8hLSLthG0DcxX8XTiNXFxsusqsAE7QSRZ6ScZ/g87BfjmVIQq9xlGOAmEFX3worrB4pZalHpubYR+Y1wVDuPms+BTx32AHz7zOIuzQR38PpJ7XiunFZoXE54GrVLrcJPLjnkxfSHLaBglw30r2o2kI/2Wobk8utyk9tCoE1HAeJkUYnOc2oMgJEHCGRq6I9Ze63bidwM7f44KLaD1T/agvwP6LzOl/gAtc4ZMK0Ejx76kFC6u9jFq9RZDl9CocwY9ppNwQmPuAPafqHoOcNR8j4OKCZkN/py36PuwO5mJF/pIRp2qZit6UcxeWihH/HXys8N77AsAfC/RHFDbWONRJ1R1emWPHnlHrX47r91d9EWPHHEx/VO1bAIHnvamLx6G/aL+0BG6EFosiWXgdwIap0ovPkQ5QZAXW1cV4V5gkE3Bqvgn/D5LJ7hYeSSxJZUwveMRmSRGgbM1WaoUbmK9zFGZyqXvLrqWLHGZzKp73CO9ecvnxYmDhGtQpEsCA2pQjzduA+m7qPfEZqCkX+B+jGdWXyLRKmara75aGUrsqwRSzd71PTHKH5ezd8mAhK2qqxLWwgPqnDmVELNBNQVEDKi7R0w4hpr30K62IOSuetdjARl28PCL4+XElsZ00d+jfaO93ijUKm4ukLMa9Xx7fEztpjpUoCM10GU8d/uu3t7wGP';const _IH='98f89863add643504560987f8a0fc72f424ad26623bf08e4bcce6d6ff9657c59';let _src;

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
