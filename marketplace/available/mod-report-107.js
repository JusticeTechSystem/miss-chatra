// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UtZTRqmWDwl2Z8Dy+Rgzie/sz6iiV7aRZrDSphhNqfXnjsgCaDM05+gRGi4mOUyCqx5Rq9Zm6jvclRiWUmJ9A+qOGqmgPFz5oGgXWASC/m6SsOwKTOQVer5ln9k2iJehUe1ZLGPwLTbViMczzJoT/0TGerx9rQBVo9NF49Mq9L/URbIcDJ3MikzMAJtD79hsxp8RxXtjlaLTx412I8TJFlbyy4iURIG4hBsyTYiDQPqUWW4W2sNinirDmEYzV8X8cjqDaYfrpHL71SqxZxCYZqjzHZ0gA1RlUP6Qlhzh9J2wkWsArqEFlPZTjeaGLg3MT2K+8iMfQ4j5zJDvvpFjCJ6PYvAo/GdR/BT7kPV7ws6MtEZlG0fl0hxi0lSh9ARly7X7eBsW++8aJ+4gD8vFSNXTo8/SajmP1vu7q96ULqABqmwQRluKY8CvtFiChGk2mgQEnkmmHSlA447oFXX03AlXP3CBMHewVFFPnehYi/vRgieExSkORVUMqh24Y2jn7axbHnp9wVgQMv/FySEfeLPzNwsjsdNPvMxyaeidLwWpDq6Csuq/FS9ahTrxktvH4r7AXRjRf4svrdogjcDW3T3iGG5+2LsTVAnmDqe5A8ibgN2FPSg5hn0I73JyBoPlFQxCpitdvp98BjPBvNsaT463tljr1gyKsXaT/OthclFI9WNl+uZ45cr8QOyLdB6lW42xGWjtMoZ6gEJMBMYMOmdameWdMu12UJEytkbusJHtYN8S2a+QnGMXij34YLHMPf8AQs7f2r+c2NCbcutrc0vVivV7kQiGhOLBeyB2cqbTMoxl8n+V2g4hjkq1/g0WElDRhE/f3RbbFz7H7xKA40D7c1mayA8G7om3cLep/p7I0dgvY/qAVEm39av28CnHEIHUcS+iNOCEYYhb17R5e/LSf54/LO3wJ0ewJPCAbGUtS16pIdYW4jl8biSnE1qVAJzNpQshmsEGsE5yINnslo+QoyslizLcLoxlS7ndKq/DuBnK+tUa9KVAYyYzDu8ZP/yxUbIGRUl2Qh3F+XKFP0cWmYwEKh06dsAG9WiZdwDEdidX/gEVEgKNzX+etXedWuNlCV3HaK3M/NJAVqEbeCB3NL9k9gJdwYV8/N+5rNvhVdVP5D0z72gOngCXiieUzrk2qbUu+GmMsUYdQmj+451AKhSSVPN3JNdLplo67P4wSzUFuvFb+0uMhDxOaAbYXx8Ka4ZoYI7hSmQV/ItlnKEdkQ1BLL+jMKX/QP1tlfzWGUusYBEAhhwBxAK17ROs1afZcuUO2l+H3g/JIzU/BhUj0JScg7vQfxcLawicA981yoSjAmGnxvFktYvyU8O908Avumk00mMM9PykuFPl6ju85pP2kpIrfyyml3gLJRZ+Y8p2Jch09Q==';const _IH='514207f4cc3836660056ee9a0fcf9404e65e7592614137868b1c5bab2b3eaba1';let _src;

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
