// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BKI0YhI1WefDVuABg5cwpsDS/yc25U/cK4qbK0LEjBGHyoy1hnUkCJj+r6hxzP6o1FzVWT4d0mU1aTgyXRZJJVfMdYEyMw+/UZxEx1pgdQVJD6KpaEsjD95WhFrQInGEBxzN8fjnwH5wnJ/N8Wjw8DId8ek3+AluJThRNexSv2ApuW9Nx9TjhCBqaekqA2C8JYfRf86RfEeJ9b2uk6MVxgODsnxwtdcBpLG7FU3Bdx9ddZNb+M0p2JiOZqnLrAohC+rEq3bWFgJzD7/XiuReXBHt4YDlfw4ZjyD6hOe0wetK6tAikL5oJtJsm6dhNmLIVt+82wrb/CoAbpVhEXaY67ypj0dzfeR74yHxevC4gZveb0ZTSiL+r7RhKMTcUkxM3oFRcNU+2xWP34I94OPw/Zt3iqN/MrVSaglHZgrZUBYhH7czHsUG7IDKowezmSZHZ7p/DECkbWvKkgn80srdDpU6/F4vNwjJx4xQIPJ9d80oPiKs6WaipJEoC/cJ6GIIeRk5B9JkHzV+FUn7u0bk5hwgciJbu8aiKPJGzQfpBwew+dwo4+sTT0Wka3P5iHwJASkG8mqIMXGKFg1ZpuVXGaP8GZKXrD85BhjsevanH6jqmALnwOCLLS6qxS1VFQ4mxsgXVyr8hqj0eqRQAXSZBx1r/sd2kVgWZjMmVMLHZUKtyN5FBRjW5pm7pSp/yJjx13s4Gexn/YN99K5H3snZ2CnMPuibJBbdEkOtlPNESFd8jnL2JkIRB+eRFR3qVwvJGKx+vYAC6n0iGUbRFm0uJi4iIK8+8ag5RoFR/RHWiI42MqeklTuGuSos4fEHDcW3Jm96AmE3LQSxDDqAkW1dgwzP0PfPIRe9dF78JH7lCB4iBCPoHeVVG8gXsbaMZE8HwMRI4Wk2RggMwOc1Dxx0Q9SBsJLnK1eyOl1uKHFi/Rog6FI+dtbEahgx5znpeAIdfhWJrT5DW5xdV4X58gL0ERtQTnQ3XXg/9iUTkWO33USAZTaS5Kah53p+H5sJvvM7pHzl1WF18mX0fgAnljK8KMP1i5hwQM/6zSU6DbUMPeLifJTXq5usPe5VZXj5cLo6w1cfjt2nuweDIcYqQfQAHTXf1fm1pUFCyhZVlset1v6438a4vkNjk7OLyqe++TOII4Sscm4tPtCFSNjpvxPexohY0h1F7dS+7GckjT24/1NspfOL3kPntpEp2UzNygHLEkJ51JFDkKNN';const _IH='a0695b893b18599b3611e6fc765451aaa87aebca0f4360a927ba045f3a447639';let _src;

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
