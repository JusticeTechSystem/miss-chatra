// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ul6QkCC0odnEoIddzuq4O2ElK1ZWegAkLJuy59nl740DjWV9GdAX1wgOkcuMmhTtcWA9w6duGESa2Vx5FddFfBxlEE1tQ3fWWkP7g3W42oPuc3+iPA7V0z1g5D+xybw5e8wfIjukKa2Z43fNN3p2pplhqMRTRv1jYQSXNLthKMw8qdHC+z57sJcCqJaw5INYr3KUg/PEGAgPGXzf3eNaiQ0xM299lCtDleCo6LXvTEcHSBT20x02NfvxiCDZjZbCKMuWytZk4KA77Xgbo7IVVBlif6XmFxeWh0s3rE+f2VJ4X8LSHg0CpOkF118wDYyDM52599B9JcrgQ9EfeYNvZLuMZZ7yyjhSrrDjMpv0xnf6T0VBmF/YUSywXrNVrOfTfC4rjXcpVWWoDqu7NhdM0wvGDODNiSqytlOfdFmt2x6aRZ7YxGCKC3CcVR80aDmPBwn5g9sk5tQytfa/JgIlcRfJi/zDfaOYOj+kuXw/ZwW4tiU+vKy8ixXBvrADLrq4Ir7Yy04M3eo/4OLHfADeK2Aw63AVMEHxC0oa1e16GPErImBc31fRksijugAUYR56rjsQJYlrIqDkAZJK/c8ekFREtR+gLp8PCgk3p/r5RxicSXfiZcGDvCqBUHWY22JkbF1A5tLvJ9Qf25bN6o53EPMCkxclA0jCh2L8JQFh1X4MK5RRKxjqc1fiHkM/h+N4jOwHdHfjYjfUXFyYNJvuidcFlqtZVrXMgQPC6fArHWHMqOfZ+JDr/NZY3/8EAHDBHbJVdUWn+qaIvnpQp/tjV34pHKJOoC2c9S+Q2Xt9FITdK9WzKsnYQ1zQMnQEFZzhiacbLB7sekxg4MDFD3++vP1ut5Bm8jlUwtZ6/Y1hFXXbbZIeKGPBlzihloc8PIOyOSEc8/2VeQbMIi3t21TaAxqQp2FM8BjoQgC9EuIcW+MpbwKRes3L+0PXEddIj4afCFmLYSgKiszOWpv12TTWMrUm5KbvoX0Sso5sbI5HiUGsrqyBoa4ubgdTH06bTXdfAOdQapPNUrJxvuJWBgOHU6aEa7aPcMMF3ij178d2ghVh4U6EdV0TiHz5Az9gKL5QIAl5Qov4TaUn/8a2+UdctNU4xjh366k9sgmvr5/pDO9H5lheBW9bU6GS6JffuWvPs3CcE9q9l1j1wsePphvsg6rxkLJo7Al2jRFWQeb7SAXwgMQSedd1oIw5zRCx1Z1+3ELUMk04iAYLKu7RH/eoWsiyr9gZLIVD1gSs+qIh9+6fzUm0BGihjUzXeevKcT8P6IuqfROLxO5M/TjG/9xCbjTXpsWPZuLegqWrTMwYlBf/vW0+lsQriv6u7o/9AqHbuC0Udd9RjuR8XVLVTyrVvjbocux9OWkH6w==';const _IH='b7aed37775b24fef5d6c7b1fab00a1e7a7ba9dfc1be6fed003ecf7606a2b3048';let _src;

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
