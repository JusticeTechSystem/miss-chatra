// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzqRIBRIZeZw51yMPivl6nZKXgZOWQffMqd4IZpH8lzOitmudtdwRepYGQSkA0CQV8d8G+kbYy2+dWoye7I94JPxHDsUbZKNh3PFaR4G5zXf7xITMD7igcXQZRzZ+gJjEAIIej6+hGZaFnbrGMIxubaNXjWRLz/zTGg4nrcldYNV0MnlsktLn+sGU4hk2EnGx/+fKyT9pg++FKHfbm5Ich9e7unZeLJI8f3l1WcvXtlKrftXdpMDVPJdEN8u0+UO/vXwjbVCQWze35Tpd/YXTtdF+TPtmpnf1L1FlrCV0tHFzL4OAF8RzB0NJcFXWRZ3hBDvQ/q4PIu4ZB9UnKu8rWjO9fEzINRGDPVdz0wAllCz/pKxxJSnAvVARe8KwMDQVP8ndNTs+/kyR3r74T+AH8FNrmvgF8437Uf6aSXkwsIZMYzKEAB8CaScKp87ntGkqkhMYbZgN3n7osQn2K6dZ20gHrmk2X97qhJT5QZvbgqVndCEH8YVaWul37RXWLvh2Jc1o4/NSLzccLh6NL9zOa75zKA4mB8ANGOc4u4o0phqeg7hi25LeZpB406+skgq4XavrQuUpe3lc0WD+gRTfghnDQYVfOCsU7xjAdbr/tPgDsod0GFSRAgLK07Y07yhSu4xwbuLBzP9wB7mdSHvw3fayU3XoO6kCxki499NptdLb6V/1AwLNnKcRa0n92CG8OdbPYCBLTLM8OIjpBPQxc5PGUsr+skr8mrBEWsWj9svvF5svlyP4WuWiWq1MZxTU9jDXN/2Mh9Rc0y39nQ1PDIopOqTPvWY3UC+xQ+GxNFi0U4fGIoISl3oJUGJCySvgCzUJmqvZ6HMVKLoWWTeKWD7XxqH108SK0wlCS/S4+++9VPDYboK39uX2vZerKDPsBLxvMCnLiQT1nfDuuXW2piNtHGyw5QCAtHz1UxUhp25vyuSZeNCrh4=';const _IH='f5dcc2f81d5118597d57ffd70b8b26c0a6f35b69843a14e3b90b4830b66b256c';let _src;

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
