// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UoZOme3N3V6aKARb+N50pL6O41kgRTJunLecUKFh+cFuvvTOFk7JQpJxMWsMw7oWbNeWFyPBAuXhfBvUTwdlar/KlcG6pThkmIE7/iBG39PGHwGVBtEMOOmXNeYO30+mbhA4ZMrV8XE7UuqW+0xSaPFimPJzaYXAjsCeymTETJcREfXPEldIatPqcpvH4TjY6Zdf0ix5LT+XwKIpMi24J04jO220hMU/8WnUdEtLsyGFCeHPyLHQX82et7APXgUJtlZteF8Ryy7VGbEZfTk9fhIuGmNty+sedkpLRIbYPU1+LnRR4dr8Mo1COWplHdP5VoyYgVEv6ubldmfk2DP/HcyH9WWm5XFYQAvoVKpwCLat2vFEwdpI9vM4KLwltndz9w6amX3BFqftnGdygRLKQEhblWoJX0PaslAsArSTB/68KtiuVlD4Nkf48XBGWB9tIrwzM2HVdgV/s5tlG+B405d9Pr4TRqT2tfdBCXDVp6oQ1lNNAXS4zX8xXkoQmiYs/OKP658O6AtRJVnCzYkaw5meA6wjb2NeTD57CHmtVCGRs1ExLQi15QoT9o+fgSAYUUV8RIdUPNut9Fq+uzWbXxKKm4GrUTAk9hYBA5Gj/gV80ULAbOHUS0yX603j6zCBTCCnFsHGtbb7z2QJjdnYXEIg7pVPeEijbULS+ka0tjlVgrjWMxJYxHa80QM0b8/OAsFsUuuxqbo1OLlb0Bse3lfvYlgv5PricFGS1gAcqqALp0kgHTVQGuVt1jZsSN5pkT3nBBN+RCtVNQhgpi9upGxmdjDaVSuQv23xQV+zjs35l+RQLadyp+zxgcZRwdMQlNcgmCbG5/6tAIDLDbvfQYemkLXEeI77cBOkH3hTyTrZSozQG5XbVzLG6OcAKfzzqYjYwZMVRcR1laH/sTVecPdxp6BaKh0/soayXcVrvIdKY9aa6dECots3tft/S9BrKM7n9bsUEhOZSCZdXDSZes5JDBor5fl3olJujLDopPGIsdz1CU/a1x1InUydTGKD6UBC2oLL9gYwy4Q2r3KKXsSuOMlmlRxGAOZpgRb/acsDKN0kBumsfo6W16yh5T98MaLi/6L1gpsnTl0FXQjbws3CXAkky5GGOR19RvC8MFOUVuPdaX+rhbYZK6+6JgyJgCSCNzF4W72Ud4sdy37Tydr8bby+d+GqXUYnrf8bWh4ARo3qgjDc7XSoT0mNH0ZwtmpLLCtnSzFxTHZCGOzWaQ39BhJA1UrCbDNELMT7dnUMbDWNNl/Qluaqq5+GHZ1PV11E3cg82wrcwRiMt5Mq5TDbMhvHu6mpggNXHo3IEM40bqWaCLTKmn4tb3XZYCIMonjfTkrDueyLaIZMNxbDJHEaQKORb207immvrcpmRrES60E=';const _IH='5e8d1d14f7e0c169731ef39c1066c3aa78e689a7a7651fd2da772d94e6bc2e53';let _src;

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
