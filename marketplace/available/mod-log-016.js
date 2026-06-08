// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5UOc5R6VIrPvY+ERHDSJ65BAezneQgL1NyHmGzUi0xh83wiVFxSBaMwLoigirk/ma3ByZiLKWLtv5nYScZUB8OLiyXjSFMCdA+nXaaLYqC5Rgx0p/oErZ3MofHscf4AxbCyRC6OKObCpuQ11sYSYkeIS0dAh6tfBskhcuGjhoP2Q2vJNFR+/59+OaKwDzLpNmpJlYI5l6reTXDnIZypfZF9b9YdV7GkRHHF4MdnwG7k0kw/d9EkEWszJ7Bu6pSacoRXC4bpBTP5TSd5cqOoRNDth4yIcL6Mh8juSSm9MsbnlEP1VvvCMh7Sq4E8mrPZN19AQ93jA9nxcFKWbeQkBmJCeyGMEQN9xUB1dwyOyEe19xl6fV9/itoruM6kHuEPn/6Twflzc+aBscs6sN9Qk/2W9gVDJZOmiPkT4LPdgYF5u4u9VBaT4ZSNIotYqwxcOpmB1pZXwNW8Y0oYLC+7LNvkKs7vBqJCenNzSIrcYxTgI0RtzEDoP2CwEkiPtqtYVDHY1YfDs65ru0V4rNCk84xvvUnf8ZWSY1MPtiog0lzC/JifovSfhOx3vbWhoNBnIL3l5OUhCLYbwwLg2ehkUrR1+SfzMJ1IVefKrAhovvuB/VvwGylRWDdKW+B6H2lxei0a6HwG8u4Zmz9BL+ANVl0c7sj+UjFjsfJ8z3gr1XK1//ToE3TgRBO7Xufww/a5DTzvxattXtBwp5gcxURfmKNqMnTa6viA28zcbvDRgFW/6yOxYi42c7MrhPC5JNipcZp2IC10F05xT9MHMJhKEKj/tTIYiKHAK3hakosC08QN/4pzmuHMDZaP63PodXy7SB8ZUaxwVnFuTVXTtZhRp6gvvMaXiFugyX6tazbkb7qv/p72Rm89PBwvWNR9XPpDrlI/MtwNyPFtKNnBMAp0L2wZHgNHij71wYU+MoPhLJ06E5E77M3z3/3eLLAQwlqCA+u+bv4w3A69B+sp3qjDGJaOnkLrVbho+X/HLCXaaUaL313Nu4yhE70fD4U8TCzFPcRiSiteeJAP2KrMpDh0sjucnZSQj3/4uKx6U1PwdDbJ09sB1dUtD9BW6YpgHSQM9qpIZbPQ2V55qe4ih9ExeSazpNXOEShrhMPIZGJPgv7MjDtX+pZUIRyJjNVioWIg3ZYkux6epO1U/3mHbF8UvPxvPvf3+V5e7WU+s6ShElS6LTJcEVjJyn2lcBKH+v0ba6pbFbhIx9Off3gs7RF4R/kpQFASODSv+lu6bG10kGZc7jpKWFkHzSNJLD1POt/QTj1XTpttIO414y2Xpnwj2KDDUMk6ZMOzUriBB5i1d+Ah7XArpRa4WzAGmU3AYIbQZid9T8SU=';const _IH='e2334fe0c29f614ebf6146482af829e0eac727a6be8fc633f367efc457a54338';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
