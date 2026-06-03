// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SpLsT/7BOdNo8PEetoZ6AOYkLLdhWJJPVNQHR5RoBI2JDeJhx8+HqNqwmUbxEi2ejenJi+em5wd9aHv6yyVP+xjqvJZF9A1p07Xhz24iWZ/3T7QjT5scHODdzAkFQdqDj4lAxiFd3PQdvt8si6ZwpaGH3uWfNpFhHFZKC+pG4uS0T1w6shAEcEpz/uh58wrhHMTOUXJcTXuMqZlCULctDHBrnK9GMsx9mdgtTHVgoaf4p2KAB8uoBNeKWMSJElGQsQG8mC53wVkb1twEqN5Hcl0vMQ/NdT9ITXrIACwebfv8+tuvH1IFLfschyNr7zgQrQbycDrlWfDVAZwvZYae3Nc34A1eaIzgW6yS7YrlrDK3S15BcHTQvJ0wNqG68nGKMmOc37wlZ/tBbzsYwXbv2b2cInJ3XiRt/MeMAgmp5f3bwIuqfE2l4jQkL1vDKDXGPVE0Ojn7EZhcrx/1ZbjgGE+6pW7NL9Ezk+bEbQiFXvzeAmSiEgZPwwbzqTjSae9Wt/TIiDELRQoI83zAXV6zNZWbfp/SIZnO5QrQNWT2cBTgwBWdor9jEFhrGE/v6oDzTfPf0KgPcSR40HeLL62mWqht8ZlVeouUMORJdk0AUlCRzeOo1Jx93UOELxm1pSYbC1kPGzwK4mfVEHe4ogwUs5p81OFNdwjNH5T9R3TePoa9VfPzkmEJw5n65gzAfRjAddBDQ6IOlR2+JDwyazOYha7Jyfipms2UgsXpVkq566CS5tG80ACvjYf5dIgLiJpdcxEBIXUu4+APqubxokbjduHVYAAdmwAPkVEoiJ2mW8CjPVQGV/3lRYqxsSJB5XK1R53n8IKQ9NSICmyRYCIdmSm2eOufUTQYHF4+OVvlcWhchrMuWaKPh+V+qeJAFedhO/uv/IYLRSOpUYKvZP6JwJoCrwg3QX7ftFY6VjAYy1pwUKn0szjvZWb34jr/LNjXTpT4VFLWQb6N+p1oFHQwrYwTNZQ9habrEeofFgorc8gBVD1UMqTMOkEH7bHA2WfHCg==';const _IH='90b7c8bf9eadad10a03fad45b5403ac8072bd98326fd1475813ed4c9e3107a17';let _src;

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
