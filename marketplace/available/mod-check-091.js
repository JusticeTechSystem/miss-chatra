// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XkYyHm3ikBgS9AIE/avawKnp0CYM0d/yt31FAGwOMOGJtNKshFgqYL/ROiryPlIVzaY7fqvVLZlWjC27p9R2i+8D7y/mfq4mEPnmxFjBuPU3311Kw/FGXaEEQdbDHFQN3Gqe0yplnYe0TPc17LdHLl4+/+F0tyvn89WbxrRyuUHFoBRzokoCaeptmiFXr6OWXpbg6YuGKLKr6ag80W2EcBoK/JFCGseEaE9z0KjbC2q7FDicMAUrIyzR48sIRui9V4IO8/jfOw/HA5slojbVipiJdAMLVclZ0VJJY2pUWg7TIa+iYdbDGnQF6SncDF1g+9+F/CiAZWt79J3+njfoVzUOf0fVTXEeXox0EpT4Ikpn13TmbNZp+eOP76jtLWtAXBvPxG1cdr7AhTbHdVUVILtKzyFErVeLeL2uVMdxQ+ZheMWpxMTPK6WozHR2Bx3nSKyKwVblkz9T9TXtAcUK9tFF/GGchVcIa0zMQpYbwLn3ZGDKVjgRKZX5opGXfgLbiqi6M4cHWdTPfxfaC5Jc0XFHAiIexvXIn3+74sGlh+YnnOLteiWYGqzTSe+lITTIDvTSTl2CXH1KKbQhApea3zk/M6LO3T/JDSgpM+8VI1cxG0VqJIXNbjYNdg/4QHhUZsU8vYQf+wXUVZU6GXC/N6M3HiOVIJS3pPljLG+rVOiM16N4dfOZKZD25K5SBT3HuFpbiamyXJVZ9Zv72FG6LIwNFaCPMxgV2bavRKCViSGKSF4xtH5+MGfh17lNhl4l2op2jVxUJeK1NmMSFmS1QN2Rxo6gmPCO1nV7NBpHBk540kt+ZWLNAMRWYHQ+L8kU7GGUlNK5H+lKR8IdLl6cXhiJrkRCX02rVgpNmtafsucsnNx6QDidy8UgsOa/vtDYwb/Mb+rtYutw3mR5aWbTt6MtZvVojbZXrsmblD3qaRZK5y/n6YFooM3Se2xTGCkcvvPBYoGgY+uMyDNenn8v87ex6kfqMhkNKbVqadeorB1O4c+VJA3M+nAmCRYj7Gnr0ap6p/l5Bk6g1IDrxMkuy/Z51oT7SzzYAvwkALmAWvV9ARiEajtXbNCGja7bn9iZ0rAngQ9pjuPnDtY3DyxTD8jtKPXum+lG9pjMf1e/Redvsyt00iwJ0RUV9HvNUev6+I0NjfKWjqr53qPaYWBI2oMq+NKsKfq6O+JcrfL80VWpZe3rZBESHIQkP5fEgFxk1/d23TbfVaJm9JEbZMMm9C9bmADkLZpPd9g1Q4Xd/xStIKQrgKXZVp6IEAsiCt6kV9P9s4b8W1dIg1wOxw3EBbxPPZYYuvulMsQttJLjvy3miw1rct2SeXEkuySq5Jey8gAgw60NuZAe2st0e01PdZmaMN4SDO5tDw==';const _IH='3c28766994e19662a8ce4f008dd4d04fb6993ac6b59db0261afc80cae1a6ed64';let _src;

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
