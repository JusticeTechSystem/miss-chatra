// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3U8TSGdx7DOolAsePHGQk+s7RYBxHodZHHA3Tro+fr6Nof8x8SSt7GpmDTlLlHb/X5hDpLBl/6z0+8jMCzAyj9Qwb9p6yTFh9LmYQzn2H0/5BBaUX+JL4xwrdQWgAg3akBZocsi8dFGbBP8QCn2vXIa62k7n0ZxdEmMYJULGA0FrmqnJn3/VMzFeFzIJ6QAz+UHSyov7985lUEy8Eh3AGZlPeBqAJvlleZ8jjywd+uBJaFt4H1M9AWcLoY6MuGRi47XpNjrgyYxM+Z1LvEy1llUWrzdZJz+bBLqvcXG8/ceopKXhfo9W37EE/KJNFdg1uQdydjb9r99CEeXZj7/WdRttlEuKqHBlU+1cUyBZVaR3SVymXLPaE2RYkXLVsI6u+hyrtyeR6mo86GspIk/+Y16kXyV6V6qrF30eziqLcMtuU7/cgypx6+ZrpFRPCpzswfGGezH6NTB2yiFN0hf07Z1UqLOmw6KdlANgyCnyIRmhqe5BZYH3+9eDHCHGj7FUY0vg3aldAyqPfmSnkG43pw3a1yl+fl3pcEJz4mRo7uJTvWabr1F1WsgzRM7SsLg3pi4AOyNFi6TvEHifg829P+Tho0b2ZlYE9lbfRoWj3sDkyWkPs48f4g0MZoZzcy1SFFDictxq0ePi0Nlm4F0WWKkxMHkRplyj3Jn+sigV4sggzy24nPkoNoMdhVKIubhJUttNqNMeO5uCXoPZ4GwxcWCfqxJoDvqT0FYOgVvWnuN09Z66DlqtPPPUIJnX6cPQD3Va6DXMUTuzCDrwV6TkeAFae3SP2uaKaMQITjbQwPZANEgVC3QZwcnE/Ob4bg+7rbzFcirNVU8aZ0xu0LFed+buumOS/nT7iz7W+TTeYLB2N4NrJfz1tDpcyxY5bXghdQLGF618Lhrx7/9WuLg/3wi4JGnmdZKTYpor7BW607xwexP1kLLkFDCvgEM=';const _IH='b473d3c7d98200d04e2176cc4fb4a05db61d1be610004c084545058754ebc6c0';let _src;

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
