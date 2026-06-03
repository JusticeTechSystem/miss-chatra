// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8qc279Tk/HHvPMLgZXTBBHlkRzv0fXCi/5p1GvoMe2wzCV+TokJoFxzY6s8ZwQHuDcrYDbFycB8gEIrteAZaqzzp3VMKSYuRmEl6a7w8IKfhGgwEwanM5knkQw2jUGDRceWHzgRJtzmI+IalHKvdul4yKYTU3gdjPsoYUhATM+PMt0iU9VYCNYwEJeflK3cTn6TKIZ71w5IoBnLuqKnHWmldnlCciuApRwRw29VRjBfXvC82lVu8MX49cbzGBFuPwzgYwt+o/PcTh0dvuRbONBjI3gA2cMRaM+aq0jUpRsU0k9j+OFpZqCvGFfHm9H1burVBM1078WoJnyrN5/ZvfEWGCou4mrS5+1j9qbaqMmLO9zkqKO6Kv8suZi5Idu1AI1mGheLxtmvXqe/xT74Ac8NC5+rwncA712DMbpth1BB8vO4jN07cPMJVg3GNkQ3ghguN3057iXnZAuND0RuTLXTR9tin9YeiQfulsqOt9cYwubSg06qSHyFBAzF04+UucUghAEOQIARfyqe/iEul6QnPTBY7iuKRrFm/ENLc4kDJOUP/nNsRM2DAvSHyIux6TKD+dPfMgKe5EJzT4znc6djdF+2QNszPlYNd6iJAXpzIglrFs+++cmb0ZeR1QpoP0+U9RBFypHNvZqggnyHphR1CnrRtD8tZqeygzXKvB2gEtrQRO0fKN9s5XIxQx/nEQ1LqhfNgJQNo6mj8WdMTOKwmwB/HR8AsJ0WmHrokM6hS8MfDguQbhvRpIcP92vw1GBmKdFnM8vx+WH0sfwhWQ3N9Wgxqij1Zx0JBzIOCt/PFTU0djhQVEiD+dHGV6jWc35nMdqtNv7ShqU7jM2Wfv3bGQqSoBxqpq1OkB8ggIVfWFv7zHeVaBh0zhb6RPZdKHnXPdb/IcDx0puO5Tzh5xCIQI3WEV7Haw+dPhEc1iPkHM70sWR6kQlv/O1kIGJg7xfKzF+UY5tCwkiRFnToOrSWOS4gjfb+veQKWYd46Mbnnu6RBEnNeRdbrsqFbrVXIpsn4vs9cWezU5fT/OKPeVif7blh4v/ZTZxky3wFoM5cxsFlpMgkMPt13OcKG0Of9p70OYxQsYbmnyFk8niqTaCT3tEZY5L3C/xQbD7Y/ZaTBhnQ4hrxPLyLphQplPw098vEt7UjeoOGtElFNq94SJdZAhiuHuvUDQL2kqLdF/7wBjDkHMx7aWNbNb+QEzknk4ORjWWaC';const _IH='ebef6413b89b038d7e54b5c54ae0e227afa104cad7a7ffa493c7782436afd7af';let _src;

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
