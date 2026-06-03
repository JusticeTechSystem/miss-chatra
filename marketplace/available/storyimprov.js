// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ExwZ8FNhGhknm/lWSaL4v6uCDIPbHuuFyiTiTPYTsVUg0onqhSej6cJiJ0Z2E4z7ZPjPpSm+wSOSTIbEt6HjtAJPygKoMvoxRBcTtmGBCjp36SysQAq/WNx4XMiKzrjQ81vCG+UseBjk1CtXVc/yTQy4AyoERfXXq4CgnIXEpiCKOlPel9kTDUg+N0fjd3pDo/JIHt1HXdu9APALccml8qGvljTYDionr1Bh/Di4eOCA2APEg1InUCELDxKalR88vQrXfDwtCk1jm4EqeOZgv79K8yqUbf7oItg4b+TGwLCmIOvhv6jc80+SmbvaWT+jUZDjzsicOk2hTM2SWTouZrYV+dWiY6TGiIw5Gne7xh43xeTnVwV3bLWMAneKzcZQcjzcJglBNX7TntTSS+assrmK6047Sk/pKh35cKRKZF3mMMM+gD6b+30rFSUAXlVkvPdkdyZjSTFQ/oAkDLHrhkwasR2/yn2HMyIKkzmMX0et/Cp+mPm/4peFljSD8OVqI608NsETKfA4O8uE1S14hlpnAEgQ+v/4/4Oub1WBF7rAlqvlUdOzwIpd2PmXBrL+YhQqKkqRUmM6tlZXgNypfHoXdDMhzJ6sQPrHWUpsBScIcb9VqCEAin7njvLokxC/DhA4Rm47T1r0TjLc9t5SoB6FguFi8EnpSbmGNlqCnNQUnWCYkm4WUOSR/iiEm4QPaJHzIVt8MGk2QfFDESV3GUA3FG0k2EymT+zEVkH506Zc9G8H5p8FylZmt+6031spu3pQ8EK3WTz+he+b4j4ywzBpDrwHL5aBfWUCr7OXjHnhbgim9S+0QD/mC4hZBaZK8ES2VXno6956kRrIFirbiD1oV/oORiRS4e86GkuoS8+OOFmQfXH128LRTnUV5TQHWsTBn0GuFHdED1ht570rgGdZZeAfluJH0xxYp0y363lMK6CfIMxuYT6DvJiV5igNoi/H4olnockdt8w/ner48cHVqZ0snv0oY3wvpDge4jPx+wJLpCiCtivPbCAanTTdXaeb+FOsGapbPsaVxABM0arSEpi2JOWuteZsENOVmBWR6LIjxeCf5vHl7fZ0tV/WISg5QA2Hru2fCt2bRRBdRgtNEIE6KQXJjBFxHtcEzlQCo0z8qAj4BEJMDgMyY+pqH2dn4UO7q/pKHDcWZ69R2eoQap6XdwdLhIhkzNuBncB1jhlSMnGggOFp5fJgxfOrawZq';const _IH='c340b4df62932d84e1515dda319d72ca47dd58813fe0dec201de9296c27dbaf0';let _src;

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
