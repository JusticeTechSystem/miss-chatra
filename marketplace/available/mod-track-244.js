// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ziNo3ezps+y+zSkAVOtQnaNHlFzsuUsyh7vkUlQ1kpnhRE9nhQ+8YQAzKlaBtdBBSHFLQ1+IRhK4Se20aGVhTklJISlfs1NQNB0/WcRJ8xqurYNRpINJJEqqx5aplVrXiXdLYtCOBtp500bmU0nxTrj2uz5bljJnRyNjJ92Iy/fdeRo79Y1xVkOXZectzbA17vytNjcOjQUPWJSbYGiozF74MhcMuDqemOFTtM4xKiHcUIRPERQOjb/7bRnq97mHnBbLixbGyeNZqCFa9cO0/4zKJPDUfAs5JClu595p5xE77eq2eETVVH5lje/VTPnvUXg54ZFflhkPgXOGULLgvCfXU/pKIZL7a3gQxytbKK8hSIPdvKZTYsdb1Wtl9caR2/eH7XsBDa3M4FbfZFsbuu1ccbs4oj0rMXhskF5mlm8ICpFMCLX8FF++MWyclUOsMTXMlkTDw7udVqzPl9eM66DoGb2Sd6hBATgVG35N1LqEYzKUjhK55fTIr1PvTeZZcgaJrPbuE/Et9k4WJItC4JeQHyKE0JSN28vevzLhwgV6qc81oFLxkWgfCmcbdEe+eBGpi3K/yZ0VMiK3Rj8vdvk0CVX0MIcyKEtKfC/DFuysTj9vFUtJzbJ23V946tKtATWcPu7JnLCig6sIbcsL2tblDAi5UBYK5mDut426jjeTQxwQWlGT+PZIiiBI1j26di/ttVVjh73tDsxR//MHg7XIaB0soSEeukwKVdumElKedi392UQE4ChBGuHXi5V26zEC4AM2JaIILpE7GWjcqT5P1BPSwhwprgqPgnezBBU1JaiFCOHtC8Lw8x6h32EheyY03Q0ChO0tzOXtB8WvF+U9QutAS0X0wxNrbdMLKdaE45RaPcwuXOKgS3ZoZxPPNZvW1vEp0qfnbnYf9lu1VmmXcx1JTfz5jTHy0jHXkPYt/D8UOpExq5TSZVU2RHPjs1okk3dvOzwFqnnY/XdNS2faVxs3Jz3Oqw4yMsDYrh4dtssn9WYjDPnF3NIXRFvAQ7CZ6UtD2dYt6t76ONKsgG/tTPy7/8anih7p2GIeukaofyKIig4pKgsTj6FoYWQh7Zu8RDmuKJFFG30sxSWZwHk3wcS/nUsQjvvXceCNNh21wAtXe1dBtZZD96/+NhuATyjzQI1w9Cqb4xkecxI5ZK/BaV5HMY9bohflBHReD5AiNsJAhVBmMjqogZK3OTQHJYN3c0w7dEJv+0m8CaFQI8AdLJAlMvXw/4wkPurE8l+rX9v6PPG9xsR5vJcTh8WkfE1xtM0h/u7/XO34KyjmNuidtQdfWj9XjWov4qLH5/C3GcAftjxGVjrUUGNUfVU9I6yOHG7ivgdo8lSlXJv0PG9y3EYrVa6KwTnamkoP';const _IH='500be384f8ae59a1bc3d02e71dc779b39d345b0aca50aba3a275aaf12fc1f040';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
