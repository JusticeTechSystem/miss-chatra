// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rpgbns3Wl5tmtA2857oHpOuIuQk60jQOtSkNj2Od1qABE17EPmu3ZssO9Gl+rykpdXnGrah0WVdPQUbi4M36Y4Tgb3030QodKAVyp/zlssFKDxOcYMjVO3K4dRk6BCDKpkmmyx19+nsLamjGOLgGfSaf5Y1pgs+G27b8ogLkpNJx+O/Zv73XdY+TT0qXPbs5s+U5KB6O4ctJZf1ODZ/bw6N8Gzy7YT3ohFdd+0sW0btXUb52zFaxA7xeREARpcUPCn+4ZEigu4TZW2RV6HgWP4+TFspetNdXm/q7WaaBL1dyVJhJY5xaf9hpzig7GKOxYGqo595ZehzcvIC7WKBridXDKSXz9hZJqKCOz2FJPXHLIw/5qPCAC0HHkamGYFBBydo06pM33cKrV4tK6FAlQG95cPCcBamB/EibLYcRzckxcV/bVq4+CsP2In+i9jIBVsjiO8YJH/FVEsRP8Uue/Wq6grhFoB1E7PjlcJvu5QjReyMBEnBy6QpwdhPanDlDWdNpcjqYgkPUsIqEsONwzbKJBiMZwZ7kX3nLPZ84h1wN5kOS2W0nmR4ZzNXoOT51IgnkyRWuSBui6RTjxKcic+U1SmHt76xjPCBbNitI77dLaHHjQX8dbO88/XegsLLjIpnV9GjF8E/3DHuZQ3DvoSqx0I3njCGUc9cBZbLZlGCoATr8eIj2sTizA+CunHC0FawDA3375mKCjCxw1kxh8egXLAjPTwZbLITGkj4ka5SOjfvcJhb6xBcS0UtAqTk7FhLW8L3ZtmhW6aoCLluvC4KKTomNv64CVVebdCDlxpufbeChFZ9+d0tHjG6vOM5phDpfJsIAeY84cXrU1/C0u5x2WIkV8AeSgK6xbfqJNwodwTSwzhh5TWMvAWGzWvsd0MnQIOJM/0HK1zMWUbmxDW0yvNphMsy5l6agohG3JEeOUgF8C77GMxCe0XO4ldOcwLZsu9aTPeYZtpJz7FPrpq/ALXyBweEbvG7a/TKOdIiS9CT2jwsNKz9mLP85BRZUP8Hc0c03/IRE7SXUE5fRmXLpl5JEImnv7OgJCS8QRmz8moFcpof0tGhR2hYWP3t06w3AkGn3cAFMMkHUKAe1wOn2Ha+lBcSh4AsCgYP3I5EVIfx4SxE+l2ylS7cEfecI2tosTGSraeJ9SWRXH0BfxHkRNJyZQGXIDyw8YPFYV34LWKhRsYIxesfTZ/I+i7gGSrWiGsmIskztEDT4Rj+8LHxofDO4J4XJAK2qeqOm+JE4dc76GRSgEL2teEfyn9g8LZ6pi3cQWvkyOou3/PFx4T05rmPv3l7e4MCYybPGxGfmGXvqFUy1IRj/tJ9WjWyd1Ruep0NulNJmhElu+0wroxP4bRHkAqSSDuo6YrvTtJ4pnbBjaj9XCI24fQT6rtNq6GyJP4afaIaSLb//B2HQCTqovjopqKLBDhvPkGDNIdSr7o/DROuLjkpMAGxfF85K6w1PCCsggs64YINGY783VQiIsmSKWYMuJ1yZbRAc5e/9GEV+q/NHSAflyDnYHM6FYr7PLtQ0K81PZ7q3T1DVd1wGeVEURJ8/P5RZL6yMNt92rbVlXR9CjxFRSZVYgWdVFzxroWYrrblmowOECXLN5gOH9uSnkU2hs3S44nED773VSPzC/5S0gv1oIo282WoNvG9QYUZ/BOTm3cyv42HiuCLhnqFSpbv9hwcKeXjO7Da0M0q6oRHl/Y7HLfq+dXhhtmWKsjigrytW7e+bMsEzFTvU/mfrTiCNSmiEP0GPl/8Ow8tlhDu2xoUpSgGb9G30T3u5oHkaSFPDkMI7ntIkwrjvXDRh8YqRfuSKnz/G0g==';const _IH='0adef18362f61ba506b38217f754410d586db5efd0b304bad3f26ec5d0626695';let _src;

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
