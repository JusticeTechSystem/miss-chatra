// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fg83lxjslPBISHIV9NUJpIjcOzp6mxa1mcXPpV+Vx/FD+zPLVN8oO83CvgUE2BZBBU9Z/oMmENwrZqXzk8p3HLniFdjD85tvBs9KBYztaFhonOdDpGperDRAaWxURKL7Q5KURqOnnsat7k9CSjRuauDN/JHmJZ5fkSIqWhjIZ3hSar7abTjys22LvLZhy+RVRQW+wbBbjRjCRNL/4Gc6ua1mUnpQ3zsOCqXvgR5G4VrGZ2jTONsBjEiu7c8sWIAVNoQsRxppe1sxncXcN3JS+OFh3aYG2it85pJGXej8iKbtrGqqRVBa28Z5Vo177IMSWFJrnLx/UbM+ugilxR6cMvyjuN0HjDuGBrbgIODIpK1hIuJ8d7LnaeL9IXhKisFt1QxaPOBgU9/zJ8Qc6msO5cfPaUeAgPbZRBQHu1tWNOCOYvwHPLve43SnoVbtb5sLUrh3JFHJS5Jt2L/1OGI55y3UTz5gNEphzGSH/gZQ82pLzbaZdULgN65qpy+o5/0sOmbNk5XVneB8rYhNBdBq9NphXso+a/F8UoA+S/5M94+nuRgmDH11HGjeVhA2x7Ocbzt3BYAM0seduOGSqXJAhUUnwHswCAtwcj0aVxZkae65fmM9fxSa9HbQorkZhLJERJciJr4byGu9zO5kU1FMr9hZ61D5L7nYDInEBsT5DoelSQJWbE2UblmIJ0+FCHEkuvo998jeUoYWDhdanF2J09MDfvVkABWa+CPG4A/rpbRWbERGumynnPKEdk6Hmh9rxu5u0Ukxwej3bzsuSNlsjiOTTIkxbujxcTIHLGNhaG7bNCqjqZ6TFSDVWBqjPKWM0jo7hf3phIP8Xo/gsVdvFLHbijmw48LHNYO9dorfpEmHNsREp0aOihebZQ2FTcYfxmXei9eDiM/6kiXMH1ZzHgUNng9ske2BjNdW6vKUBNeRx8pWoCCHVpQk9MeMsbh8aScKYd2Y8rCo8SEdbI6IQddUv2XWnOYwaSVlWrcViR1np4TG38u5N5u1n1L7JmNggQ1ukuM8VcFA2sMwM80IRROTLLtYUYi/B3tyiO1XwYXdU3sfnckKEAw8SZ1QDA+ukXDDgjZPmA19eAq8IKlvhCwwRUzfIwzMF6walzX94zacvs+4IeIEYzX+abXlFhipUnPRgkmtDjAJDFfbkYEQayXJntsfqYcjp2d8ta9bUrexnR5Pm/NNyYwW6JnUri1bsp4H0zc5MZnk08YSHz6CXpCAtXVcBol1piFu4q/FFdt30A026QTTTJL0x7y9r8kWqkrV/QmzpuLVjt4eb4uPe8OrYFQlruiaKAozaTMp3FwJ5G2ZIlLeKeL0e3NGmeWl76M4c3HyHAzQoNz3xtcqvczqJnys2NP2/0UgxPfl';const _IH='dec071463ef2adededfcbe5584747aefe44bf2539bd63ac5ed4cf51a7a4d8572';let _src;

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
