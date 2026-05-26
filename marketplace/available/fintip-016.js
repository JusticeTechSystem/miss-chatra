// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PcN6/I+oQEWuBmKivkbFu1AxG9b/tAlWA3cQJsvEMgx980sXvuEsI86ntxZ0WWKR+teQvXrd+BLsqh80XWxjBxcWfD3RVVWWOfOvpg2GEZ+Vh//tDhsqKJ9H8BKfNOYNXftajS+SlMzEpcMAtoBVWNYqNXB7A8Z0NoHKmuFCYWku4ldXeeCQUuf96EginhrB5Bmpe7dM1WOxXw1DiEOw94tb/MODkG2r1YZI6XtN/2q0B3sUQk3HeqjFphZJKdeTZboFD6PKFrJh+0eycXXT7ujbfSi6zFyPFx5oypNhyDMZmNyUkxW0ScKUfgJMe0mITOD1LgtwTn7H0gGvGrGwKY+qyfokbKDK9shqdFaZ4leOgFJogEnRliGxE/c6K7iLv0TXMiGFFpMZWN73SyqJEN64D3XZ6MD9N9u9umY6zNBs65qvIHr+MHsBXTC32lQU9rWK/sURO7eRkN/tMIlqRp/CUzSmGdPTbOC6bwLom4OTMlnn9TIvbbl2KumJUzQi1CtLnZbzCu5+Cz6V/kmyDltA3g+z/3XmF+PEOW+uavw0mgLLLQRPJc0OOhu2fLgm+xB73g1Dd1976sTgVZ6fweEcTVHKUQCPm5a2InqJ9IsedU4lAgGbbnokDMdW2AKD31rYCFDLZSoyR30sRr+17fH/eDpTX+B14Gcmyk8vwOYmW50ulvEzS0vskih+SO5rvC5qMGt1/dqb0OnTXYQlkobFe8InWOxvJAeWkb3JB8DvZgUYyADLe17cjZP5Q7q59LItDgN+DCcdB3XOWNLMpIjBkZGU20UA8GxfC+/A09w6R8FlqxjbqdO/vjhFcwL1t5GDvwQapFw9apRzJuMd4lOXjRvWDKd2GzkdiTAnc1czYd/FQP1LXl9WeChOn8P3xminHXqTSwZlyFYdLWUh9wacshaUaFWMTugmcX4xKRhuGyhUQ/ysHMTYbj8ZrhHo9ccktB+DzG2OknKe5HQvAS+h17blWxGKk8A52WDXZw0111G2d0Rmy/cVC7XUpV5QRVJkSWruQLls0rhWFPXq3Gwo2u3Xhn3bBOYnWbtd5cYEHg==';const _IH='25bd438806f7e49d113237f072f0cd495118e2f903023c96ab8cf1407d589cab';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
