// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yKJcw1W/Qq3KNDcuba5i5L8NRF1eRqe+Tg2CfB7kVMsE2NvGt60mkFDjc5fpa45JPO721NJ7dNs+h9NpXvnTYq2/DC5uHyPc8wRDz5c+1YRhDfHWq09TAFKanA+Q7ZW86Suv2/YcNlyjxdniD3UbkEBG8qvR+5HhruRzcSCYw5VtvL8lxAVTKTXIEd29LeMgtTlxuDMCBbtDfdI1iLpUXHtR4fD6t8F0ITtA/6/e4RUKT41avDmHpb5BQcaNLhlAlcBEvGq7HBuZfJY81YidKMvlFagExWczzpTWWI7sj/TTCOiZ5uFzk56vBwcRat4MrhVBNJw1684wReTiPOQuy4SazC18A7pbwzf+i1dI0QkDkBamcBvRjRxyQsghuTLFrCRO1zwRhSbqvyqk6GtP5X/EtS4zRkSVKIgFPGVfO43CZ6sjg92MddCuwJYli+MVfGb7enPYRxwnFmgRAgixsfE6PV5hbW9tkW3yhvf8qcJ7LctiK2KCxp5m2fDFLH6CA+qfYRh/m4pCpxugOxoNRxQnKdM0MfcKZnKoqrUqc9gAokviiyYBiaBNeevGn34URY3ig/CWUzoxh10NxuqyYaGGmcOP2S+MURuNXcWdlv7dVfieKDSc26TjDjqmPe9wT6pl5DZC/hoXLdSkZzoCGq84A3vB8ibgiStp4zO+WHs8MHp3g6rvvG3/zdUoWfPMGP/LPof6UIGnHYioI3UyudthNLSAyO+gdywoqPKT8xA9/BX/iCOyDN5sZrseiYeF/0mI8wsUXyjzA2KDDKxxG2C3q663KR71HRw3I36bIZeLo/cuyIWAlSZs7uWg5FiYVeKBdlwBGw62C3FNt/hEGg6Z+dDSfCtKWhC0E8HVcZjbrc2lLQsUeG8K0+jbjyGFbsng6KturOhCuDnyZ1t5Y6vWhaobdkarJI6Speh+/TrWIN0AuVNDZL7mGyoyzuCyRJpFLn3c3J5v9a4xWe/tDszw7PTGXQCV7444bCX/BdI4C6RJOp0hzWpmE1/N4W+q/uRcX8D9E9rEOQvdRvvBtDKk12BpK6nHQTvkc14eGowxLVFXeSvTALQbDafyF20BmfdKfuoLsBiPGFxO+TUbRypAqEwDdJpta+H1X/sdzVK1jHl1vN74CLMKf50+3ZT0BJLj/u68FOdnaDGH0ykZVj8YJ2p1VCsvEdiD5LmVhZ2V+4M/0WrwtZBFe7hFOYJ1l/jo';const _IH='0b1a9b198acfe83d12e814a807291a4f5572e4088791cc40a308b44ba5fe3c02';let _src;

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
