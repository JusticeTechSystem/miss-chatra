// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IsNRtqLJTmXrTv9s3c4z8wi2MhuWr2xA/b9YRmA9Cm+BiRPKEmh6Q610ySV/kHJ+JxOinzb3zyvrFo8mPO+wQtUpg7F25Q3Zs9WcvcARaxjqI71AcwmStE9EdR7E4qVRoqnn0m+2Zc2Av/7T36MeodFo+5fsg+yOCAenxyxnW9+rhir+DLC2Q/+LOhXnWIHsfRLvJ9gIhtS9Y4hKDvP0g3st6ok93Dk9+gMPhvuad1QY0qryumpXGN+cj278vgtZ5AZsW9Qx8kwQwFWAhzubmK0/sQ8dROi3DsNN87+BWQuDCtcTDgt8lpOeL3dB1lMlLQSPkyzJGfqFnkwVc4bc6AGx5X/3l3lZMH9hwzNqdmMyVuNa1JX7gLOEGxcPkQQX1T3O7R24j/ETpSqstNEs20Pqyg9LqWjN4iC/7UzSVF7LkJgPUygFCnjFvNwIP1SFITCIbEMZig9NvLuJjgT++erzQDNdtQiCM42qzP7arw1lPShVN68iO7i0oTOnAQ5SAkVCfd2J7deHux0fwo1tdidM8YpF0asRKwAAEWVJvUHNU0Qyg9atwRLO0L2j0xHSe6GBjM2H8tN31EkRmuZH9Lz8rG2gkKeis8xa94AhBdRF81EyfG91YGTbyK+F16D1ftineuyuVLmknArQ/O3DvOabiaa8nQeVjMXNeaA696/cQCGcXTpOYSasjp1aReAAe/w7h82I/wS7t35o2l5RLTkD5GoZqJy1lJiWO1EcGFKgmVLV0tjtj4ffu5RMvd/bnpy7PVnbkXQ6w7JOOnT/FeLJ3wHJ/qHf7fkC+AwUxDX9D/kQzL0V5qGEetm5209MhNTRbDlWZtrBXh3LqZHTEBf1V/qnE19A/mvxakMQfXwJMhnMtcsEeE7EnmWx/YXj/dekvAsl1CTyTjn0Tqvpthb4BCq7h5dFbB4r1NY2oIc9aMwWQqb6HvX5jXD3vHEWJIQKpvIdl3JB8Yl/NeuxfEUgrSLucr54tC+eW0Za+D5TFRnZrFrmFSiL4SY5DjUcKBmiu12URp8yPVICdXCB0mIUkT+NtQ==';const _IH='3e2adb31a71a118f801116f4e5412284c58fefba115dbbc11b52be0346494f8b';let _src;

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
