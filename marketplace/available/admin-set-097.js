// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DstgurZhTheSUxIfGWgewfPntQO5NWp8xrpKgd8nqWPb9K6i/1C12tMO4jjUihRbyc72Mi/83XHbEAFZVX7aZ5BqJxyafmqDBWkqcLobeayUYVjl16rP898g8CFgyYSS4YvIvQQQPysw3/O/rT0HDbQUoxEmlkyUs4hY/cE1K+rFkchdTEMdE71imP38pGxwDzClJ71CCFMtv1ZlT7NO6Ereyp0zzJ7sSXWgXTjqF0hx+FtRIAJC70i3WMRo/FUWxGrao549+plzyjxGmzOCHQl/+K+L6WqKmRU3AuoCdARbsinKVwm60ewyL9o0HiYjkVXfpDmqroZrsM+x5P1CaZppPtGoBCRDvRXCwSV+4e/DawQ7JEkM6c11n8wBI7wJ12z9Gl/LkNyWRkGGE21l3UaR0rnUAZ+5LZ/8ydP1/OPVTWgCBBm2nnNyT/weEcQcLIrbMMkfj7Ww7c0QoqbD+MwblbNgfFD44tsxHnxORCA2jJMFojEPP04iOxfXRTKLVke+5BByAa55FwwILzzQGobT3uvYBWRLl8LuTH2Zr/uOiJebyEuqeqmzRc/yvs4iRtnRWy6ow25CIqRxiIg5RbkuuPM2z7NUKBQylyB/2LXzzk7UAFtGBGAVpW185aoXNaaTJNcbu4UphgT0eSjA+Xq78NZu3ohjYhvY2thpj8MafaiL5XJ78iE3q3FduUp+1RycAWszpI/5+AS4DB86MNrv2yz4mwPp+wqbvtburfpqizP69RocA/7dhWj+KdYLlyYQyvrNXZBZ170XH7xbCixpDz9Vskoh/UL9EOGOMQwhZS3Ax4f/9HQZQHNoRiqeLd2+NKWeuCop0D5LdFsdu97swirGi6/HGyjBMdMRdPmFEKkt535VTwDJhlKJMD0patRT30xtI1VbeUVmAVSh73gBNY4ZuldiU4rVWTfPUIrtB3SVYtXtFFLBqhPEsPIFEJ3+158Ap6vooYFuEXb8RStw7EOITz/W';const _IH='d12a865106715bd24602ff28f46fa5299b09066fca5dd8fa160df7f71692fd97';let _src;

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
