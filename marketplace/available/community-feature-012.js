// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0pwZCmSrgg7ySpLyUzBgI9RinKpt4cxl29MyfCIABD8RI8tFZ3lQuvTb4aEmPNReyJFg+j31F24ase03zuuNCDn/5WgLK4NRuinjDCKxcNuCCTtIGdK7TogSapn4X2dgMFUUR+qxVuKXkFIcupCABeZzFg09R+X7DA+9+W0hcR8Ol4m/JkSY9aktfljrKlQLQ7UH/lt/CHiH4LBC+vv9k1CIbNYkv7RvqjTj8ki25udmnY0GKdWGGXDikKAa5EpJMaHk/tv0BIECaWlShVthhk7pVmz06XTz53WndT7m8rculsMhDGryN4ZhtUusQ7B9g7n8x8xHBtifC4yUR45cet+W+xXOwZXz6cLV6cGj1FYClHAow1tPqyKVk1I5Kp8A21jFk1rCsuEQ0E6Hh8q3oZTan8dUZg2+ALHEsSVRhAWCaH8k1CVV4Do29dOuccilkUPXa+kLASgyZ3h2wBTKqAb0QwmPWgxH4uwQWVkTYx10aEDTCTBLaR3puYVn5u+LHRwErHy30h4M8Ev+l2w9cO7m4K1cCxWvMBeEXW0GRB9nwsO7c9NtQi1P5t02L3xHQsT5tLDXI5xGW29zRVW2ugqpfUEmNGpcKMkpkXN/CoWZuwkFlBCW2r58WwGZLOiZI7mH2OMLr946sHntHxYjJO0crE8E4IOGi3kRGzniff/85XBi6IFzCSfotFVgpB9Uao5DpetprScCyX12YWdKrr2dBI1E/CXtpeLWv6Ihhg==';const _IH='b3b3a4cf294a62d237345a70d17cff9c379fb19ff7e38b3454208b97c120c8e4';let _src;

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
