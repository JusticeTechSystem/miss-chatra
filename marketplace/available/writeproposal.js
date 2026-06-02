// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ODSzAqrDP1lDhK8n60ObIHeP9JJeKGiLDgj2Rq23aDyVpHleydV7AdI1/AtcgoiGwH4PTNml6mn3qKhH4TnLAoijIMD/tQSlxWfuidYqFFOBidlNIL4ctZEp0dqbksozMzmsQ4ShjcajZODlEsk1tsSuE7l6acTs8HQVakXksbFk222sohjDxl7fz0JbJW2WJi8lu+IYPbO1bJrFjKO8wjxx4qzXgFgAAwPaLIKAY49h9Fb+Wwo99u/YRPNpuXH8YGox9g8K+neJUfTyfL7qCVSlt0bH/GkOkgsxq7p5Qu2b38gXd1ySnj3cXze1EACzgnm2kaOsrsxt0jcHrGKB2IKOeJx9CDZhZJA+aQIGvr05n0NBDMPwk9LA7nvC2MrOebjgpqS6q/EBYfI0bAcfaK8plZnuFn0uW2Ho858M9CD1f1dZsc9sFiKMI4izEhUZ6eDaxW/yndN2n+t0xXMCA17Pt4OwjGPVezIBdsu7hR/6fFbqCZ3kAVIUXl2gBO+gzmg7T2ME0wSwz6mK3/WCID1tjFYzHw7TQVdqiHBgiwVTvy3NiaqEGeZB2mlzCiXkmA2jBG2tVIzJEIxIWdn4F8mHFTygZbkqFEQoqS2kyvwHYqgzoYrBBqIrudcPgJUclCjO/K6tcrg9f/klv9SG6ISrm9NA5MBa829XFrdvOWcFZWjuqPderlNE7ilQPg0rHtJeLhhGjsK4QOnSoc02HtM/2J5wJJ5bBYBcpNZVUtDHwWR00tf4YggSoah0ErTsfGIU44gy2dFGNP3j0fiDXnemdzC0+QXFzZSj2ebUHE4z5XInAKKFKpSnv2eZsJu/PkhL/WCm7yb5sYKnyIWWU0FFSQvyTtF7bYhTsVw6/w3CizYe8t5OOfXCGd4dfVw1WAScdYhd7tmI3ewRqErmGyLOgLulHWIXiqWgBd3vHd9iiMltZQHRrJfEIop0s4fM11PECfzhv9ghh87jo1f5tyChSgqveIlfiDKrMddYZrFlikDxPvo9QjQs6jClLlc54ISOgu/zAYF4MYQ9enedchPAdkvL1qZPJf/tBlC+Z8b0CHLfB6qQrMqzSMKvOC4LY/KujsrlgCmUwDfokV3F9wK2gWChEXgEa1MBmWhzhuAB5PI4Xz44YFzuZu1c/uD4jkeca6T8QiRxjWnjU+qLhUtMXTv1Oj8tSJa1kOc8NwqRtNFT3KXNcOShrrbs7Qfcz1yfqBJUdYub5V5lcKSp6fHpNA==';const _IH='7fcd0b97ff5ce62d5c3067bfe35055f59167d4cce1ba211f722e4e00cd5450c0';let _src;

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
