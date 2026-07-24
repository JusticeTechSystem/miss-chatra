// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5LgMULr4dbqubrbg9oZoZwzP0OM/kQRs9wjpqY8nTDab7XkVuRk3AOxvQrsjH5vOoMdXLDa9InpMxISxcZUJSWxyq6d1fLkhnw1LRKhqXbQTj7PsS8A2l0Wb+yOwzdBgPQxt3Yt0T1fvziMEUvuEZJmvHPJrJig9qHbEeJosA0G75TicPfmKc0422NxAWogLCOQaCzRQ0/Qpga5ySauL9komS0jKYqw1XowEGwnn4Oa8LNGPYhENhZ8bdenMOnjpUVgsWZwlSJ+7Q/rqpzSpwU8dtVFe6hUiJ1C2j08rYlMMCxTNofOHQtpm31cH0ai7OC3GUoVdBoGiKyO7dfxPh+pxo0M6ISD+1C+wKzahqFZmlsFDYp8pznciuXkUqqSjMmEuKrH38w2CsYUvniFZleHqalRVKIZ8WkP5XQKmXmiqmDLxS6CGx/ZzjcSKOa328ZlY2xgf5ucIwZsb3G4gscinok1JP2OSqXG2l5mVNNbWzzayRIbgbsUKaDwfPthwDiq6nNJ4N8nmjuwfm5kmlYxC9RueQ+Au95YRy+kBxWbIyDlTC7H0wUS1InQSzJsPVEbCaTsNwDNgNo1dEnh6zaNaJgN8DbZRF2La1g8pixfAKT/dZ8yj58sE19pXoDbs2S+3OU8icXqdh76n8Y/N+nktV/qaD4lryW31VwffY6bOA6QF77mPQnJqqME+AyvAro7aQcR+Gdnl6D8xFE1ojGXL4gQeNA1bOQK4yZ4M4qmJN4aKnKOdax/RrsuXLhv5ckTa/ipbI6yf0ZLsgD+tg8ZkXc/i2JIezgOciRY9HGayunqPJuMmry6NTJ5DAyMPrLQYhRRzNe08Dq0pLUyfeEZdfEdbhY+lAiB7IgFLfca8cZCuY/s/jl6k7+vZg/m+p2b5l3Yg13jh0DeorNJW7+sij9bjrpIKp+5dckYn69BcEkQ0WiN/StaxkukUBMn0PZmNeGIMujTcOyZZkuoYIHuJjosqFhcCBix82i2K6sPdWpEAK5h7WQAO2lWZhnulyXegJsd7zx/GQVKqtMfx+P+AKfqh8J0OLRBB6LW8gIb1GHJoHk+0SX29dJPPc2wWL74I1GEq4qE4urqjDCe/NNz9K9PSuHcZRJeDP4ubRj8tRB/nwejy0/9CuYPj08qGQxXG45PiFICVVSXRQ4mmMm4GvoLO+Y5deiALdkkDSIiJNsf4B4HrZlcbKgNpNOeWm0Y4x1oATNASwgZoT8+JKkUkKXA5Ek3gWZMptf/DI5V/10zX92KDkmRA8l9PY8/z5+U2Vb02Q/qPxYYrt01OFOYELEscmaCD0I6lDrp48B+T3QQhVrpxpJ4jZ11SvrZwtD3MevWHsQncikxrJseUwVvVhJZA3HkUvYNkH+/l25YP+EaIDrSia';const _IH='acb4c216862e114174006e9bb84cf511e885e71ba5bd99dbefa9a0a80545b802';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
