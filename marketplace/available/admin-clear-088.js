// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZjrzXmyVSl8+O+KM1aK1TEukF7U1he/3eKVyCFVkqx+CsAVBTonbh4l5m+o3l20NkchVmYnuHv8mprGFxsdL71vhRhbM0OQIfQ9pzbL7iOaiPH2B+7lcDzOTCRk/hdkB64CbXrUa4jCmR0JTpqL49P8BiE8ZbPbaLpl6uX7Fu+G7PkEw6OEGhNumQ/3TzRiyd7FF7Xd/e5JyKfaDrYuxnwlMosFFXoaUeg/FtlSiVALqRU+g8KKjd4gP6zKEr4579fNzSj4hz0FJMbWHCJbDJi2dRPLU4ajylp/BJsLbIb8R2Owqh1rAVRX75x/RCqJSWIefLVpFrLrw7fFR29F71UwQcOaS7Z6r7tqgQBgzJ1DK1+69sKm8X9T9UWx+WvSimifqwt0RmAYNj1RQyoIiB80kbX3nUN4EMNVq8WE+sjuVV89VyXbifbQ5wKxrU5yEzQzOcZtLH/wBDJ0p4uKe8wyscESnZC54cKdgZDz9Co5IaNYmid53r+Ergj0ROy54zleF6U8Tm3UVzkPrs0xHK634dRfwCWmyhG88bGxuYEyp7nBXs1HLqZUDvrEuVoIMjTHau+c8l7syfujt3ckq6pMy2FCsilS6IPj3CoCsPLYLUJzPWv46LyO3ddAkekrDNd+vH/04q8ecq1gDCd0Lu+WJ7/acH34tVKD/4AQEW7oinF20xDnx/ZcKhhlYk54xzroDVy1+QoAR9uoAcGbZGEhH5VEAFeewSnC5U3UHO8OVvgFmiTWSZXbzH4xbbN66oV3Kq3nDVqpsF94BxLUEvFw6TOjfVg0DHfPNjuV+lQoSXEbs9DbDzR6MzMWQ9vpgthgtwBfl7dYpsLl5xaleDd/vwveW0jpgXVxyYp6VLIBwFjwXkz3AFY5F28c6TSpjwf6Zvz8QOn/OfUaEsj1cYqi3e1Nh3eBkUSX9OvUUyoYWsImydUAfZu3a0iOVd7hfy1Ib7R8dWPj4VQM0DGPRLFOwOtzGBVoIufhj8Tjg6sHiBa2hZMs=';const _IH='6570ced91f5d2592a566cb304ce3eac9861addfd3c04ccf80378df0713e1e7e9';let _src;

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
