// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i/b7p8lZPKItrhBJdhkwhN4+6deNlFUNtihovDQVHxcMXihqOyrqPdpEZ2e0G49BNfB7n5RaSRIz6nFK6jCe1SIEiUudYwgnxPmc/N4JzPUPjD0xSHEEPjC3z6cVTRoyMSEvFUA3ysrw0kOVSiidsDHxLr01hHM0wDqw25KfNriv3hdXWquxX2lx0O5yYLzX0LGIzyGJMBeTIFCg4PJfL/qqDlz5w8p7rGYYrGuGLeak95NkxAO43MY5t3fTydYErcHwhnTgkXbGontdgVy5UGomHxaSPVlHNIBU28kQehPkbEjUDaejHbeP3qC6uOszWo/rXaXWDP6D4pO5SPGBPgpu+/xcXh0ryE6ErRAvtjOR+1J+KOsRDiG/YDFDuk96aYL39PQq9IWNs/fPzPa1hnbv1f0VD/rI0LR2+uE8/UzCN2IhcBWMpQElf4JmcELksqFJj1C+eyZXE5JQcb7PGZ9WoR+soTvDYFTq9FsAAkhSlF3BQmX35mL+Ke9X7cKuNhn/9YQTZTssfDwvLoQOmO6E29P/oOi35W7jd75xa6Mbr8yxKTuWHBs1hjHMZgmAVURx5c5zoQ3hPLUipwxKNwDOwDGwDc5meow3vww/B0YJdiXU62PRRPXO8xAM1SNB/cNDjE1LcYvR9/JnJd/bS/YGZeZGsmMOiuYNMy+4AgNnlJrt/egQghxFlJyB4md8g5TToJOQvapmSNOVh8A7aNUkd1pcD9Iw88ZvyNFMRdtaDLVCceCkxjkE5GYvJNteOClxS33W3qUqRbo8mkNwByK6ZpIv6TXad//br9JddckTiqvIO2tvQYFC/JbTkFsZI2jQmacxxBdFEc7pz75TtxMAIQK+Tyx6xAoNFIEAGL04gogLu/J0Pq1G1NskAK5VeKBbS957bfdD0eU2O/SjaM6Y5RK807Aw+UecvM96PbsYGDVF9O4G8YXiwTosVzw3GKNsf4/FEu7Cym1X3sQ/+B7kTN45jUimzh0xLTWvjieYecocMijI8xaq5z2O5EBU39qeJw==';const _IH='3c89d98302acd35d093e1274466c0487ed0e679e29a9090b5e4edefab57d01bd';let _src;

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
