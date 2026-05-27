// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K3+9icowJ3xToX49uD4+/vYQjYnd93Q9K5OnOvcqZUX6bsRZHAwRtXLU4noZxhLSEaL9x/KRFrk6ziNyTFHJx4NBZmDoNunZsYlxN2aTMsNu64W5eqivhB32yG4wBAwk44qdY7wkdFQfGyytJoEl8macgV3iFg2BJQWYr20Pu9WREzcFmk8W0COhRUEAwlePRdSpi5MS09x7WYOKfIdeWtpTgbsFnyrdu46g2eeUUJorEk7IbfdoIYk+PNsH5/8tVwo26XgKsajJacF3LFS3aaEwsQdt2sru4Khrz/K+tu/yyPZBbu4xC699YzKCEPFSJB7N0d8mSfUw6Y+YaRswtTQRbBixyvJvYTa1UCWxx7jUb7NL00r4rxmayiDRUVIGSTKPlmWBgWwUV9JJwehKIeLXjJsPrpOAqaRz/l6BIgQau2f2UdyNGHa6I+cWe3yLzWLh6RV1EEa1BfGANbXS+oiGiVB0Zv0ib5Qysgc3F/Kz73kgxN8cn9ZO6Xo9n/C2jEJe0YT3gjUjgfm5PiPeDsfBC4sVgiKV93ZcVFtPxda4dlDmHJCgyY4oi+EKn7Mi9FmOX4H5YZSJU2VreSDKGqmzb7B8+EdoNhYoQ3oTOCwBxUc8ugHLQ6hVEzaGCRaV+jVqP+YoJ3BEfCwUvoNRH4qxSUSRHFlXaE05/c3hu2vHuQYvXzKwsEkGpcsHH+Tg9kuE8bRhDtY0zazgPO87JuVnlBU8akjyAvC3WciWFRm0vnpaxACAfWA21CgBLn3Gterf0WNq+zTZSIzqRUbz5+hz1rEJxWoUyegLzfLHl4paqUS5mCBGUSgl1XHFvgr1k2KXpY06ZOZL86Xp+Ksd3R1LJcIcGowBjsBFmYTIWv9PS2bcomwe5f0g6rqdIUHK9hWORGPya30PSHSGpYNVPzvTcDarXNW3fXFnkQ9UmxpLP6XIwSNRgSFQVpF4yWkvt6gY/E6F6l2jkQBuSPskwkYyXiNEjw3VT/xLG+s3nqXeOm6NXuhOqNAe4+kcMENP0BACxwpZC2Hjns2kB5nNDo/dRqnKMbTwXkvdreiRMuSDIDnqSJOs/grCaVUPyUcD4QDPJPl8rN9hTOn6NSGjd7QYUAvaojxJ5YRze9AQIT7cx8kBblzzeHRGh8k64V/hb0uLfDSVWZHDZkToFFf7bWl0jL5IYi1OYvKf1LN0phaeb6sqH+EK6x3/LoaMhWvYOYC2PxsGT/Rn9HDd2MBoiHdySo02f4a0XN4MgVLf2EKW0G2QJnkIv5xh0FrbtK/dF8oddDM5cb1lV8NB5cWtgQgyBoKAzN+o24beXBS49evQ6OOBCgvgwDAOxzQGiO+Q3+kNNi6qPIzw+damTuZXfQGAA2czpdssbSkohb2uXCO25yymB1SLnx4WLoo0Aw0qS54=';const _IH='188e0dafaa764d5d54ef81aaad5d444f2f79efd08af9a07acd22cd504f436375';let _src;

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
