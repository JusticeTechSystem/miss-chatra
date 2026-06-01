// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/BNaC4o0t/2ZOsNWEKHPofItIy+iuyBp7L5Eke7tWujWGQToy4iop9sEaRADLuj06a3yx96xX+t3h+WRZm7yIk+mUWoWbuBqE3QN+HDKPky7blVKnE3rxoih7fDgLSEIHZ+rNRADz1C6TPKpZOj0a/EKHGVW7ajyJNYRmsgRtogiRgKcndpGkbwBFQCJbxjoITPlVfhKD7++HPTkMze9KRSDAikzQveO0in+uPZYaQWB8S1xqoMsCLMfFfM5TxjL/VzQ4MTGZgjsgDVc+3IwkXQvG6upG5+IuiIKQ4/7rBqdZ7tC2XyJGWMrCNUtSEnl1vJPA5B82BNWgMXWvFyKRe1rdtrLFmUTCXsvoew7ja9h7xGMnK+gTUQNtt5Y+tfuO3IRzEQRFNXBF5sYaIh2+mZPjI9yghxFKsxLy6vH1l1SIY25JhjZ7SUvND0wU/NpC39gLS73jcjjzyCI0Wz/y7TZNSQolzicLhv+C0D66HjoNz39qrDY42sIbTr/ynq4NWW2prpYDPlYDNud9F8rdOlSwpjJCJjgPTfwHApE4qoGI3PB5aEG2iyPQwSWjI+qdKX5mUyxEl838eqAd3TBxw9gs+wfbC+yiHycAZQDjyH3R/fxk9ZdRlgTdhugsmjD5ijZ2a2THsYWSXVN9T4ByC06MwuUX5AR2x1BE+AelWjJ/TUjO2tSZi+MQCio57g5fNLusyQmJnyioxLmMj88rk/X5sLzIoHWOMEwYya+93wlxP4T6qQys07HjsWymqYm9w3d8evEbpPazU2XvVkgzy2cyQfy3G6Bvm03UK8COZRB9Z1GM+wAYk3njwPgRGpgN+2sM0L8OnkxBqm3tfY6Q8KtbkC9Sqe5T5kXhiidE6hjaDOeWTGluosqI7mq6yRGJiN82P99W3fFrkxBCTZU8jNrZBgM0d5cKqev/joOcuit9ik7TTmLkoa5j4B';const _IH='a53f8785626078c0166c289673e6344840cd78d862e4419cbe81afa742bcd8a4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
