// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ90r0qd1h9xEapVOo0PUGuiErx/oQsgZhaN9Tvwo2IVPxypGftqHUX3Dh1nPRm1PaX4qtwFN5NjS2xTdgOp5cwX2SV+hNFvhvQ5BhoB/Cj6Wjr3fKEKv3QiUNT3KHYLoUV7gZpVd2tlfDZhwvKfTDmCnrRBWroRevdQ12/qbBW+3AS3HQHEmoZBcmVjLpIfetRDWzzAbx24diOcjcvYIJH0/zUa0JUOAEP82w7eHqF8/s5HTLd2equcLWWrzf3lgAAJRInBhTcE4PlbOsPmr67ZcXMBcwDPrVteVyBJNip55+4bFl0g2p7zGd5LoRvdmskkfh2og0U8wUVpEOKHDpsda3uLGgo+wVW5mc0P+aKkMT2DlfKlX4mK8FH1vJmvQ68qEg8UrCChZW74c+d+YT1qMoyXX1JDPQGN5LVCORbvNPyMur38NL4bih4/uxTz4KQGrIeXsW2vwbY4qWtJBWRmAmpUAbIQD9t8IpHowwmY4iq7VaRlZm4UkyELsE5ZbirA2/S3yJTnzf+XMf1m4+UhhWtrhg168INBwuuuLSzD6QJOVz/lkY+02Xj50clPAz8Cd6dbuORZvivzYoS7kdPm9t3foFV7emmXx8Z35P+Bnh2iweuwJKEan+aZPZHAFCcVB2iDx5JEdZSwVY9ctPL/ax7avY/4AylTWZgZt1AFjycsHX8RdSHJuFuWZZhqmU/U36sgA/mrmejiDrNqTtk4Iu9L2fE8ACySDfy/ot/jfgEWpOn4JTEgeC0ShLn9+DyxmA5maHJjAuS2afJkEDjL85TfCrHljWJgvUJ0Qqk9k3oJBTDfp7UEjvgcqAM8eGAXn6wrBgLUOfnrANVVpyZ3dnTEnGwcprRZanCUWCZUfQoTK9lcUQXV1TgcFqfJfeQuYHllrZbru35dTvIc4kHFFHmg/VYk0ybOXF6PKdfPcfE4Ve7Q8W3XhsvXS';const _IH='c9d8733d5dce8df4f11ed4549d151fcb9d95e65e74c68783ead1c0b4609f4ef5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
