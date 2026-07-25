// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSB+Ggdi6USOqZ5jw1mmHCV5BvwtIbq8wjIMNlg1e9JdHnm/7Rf3dY42aJ9JyO9Yx7DcDKe5SCNuqFLhi5/LwhyfaUhGfcf3xsD+OOclko57tD+ZCxITXoqn0Qk2SP8VW99cGuspyI0rzDSgasZt8AeztG32XPRlyzaNde/oib2xls19kZITWg/bHhftCGlgckkvyHreZUFKiEJdiBLDgcTq9TPpBdDKJtxCvDgSkGBr8kwMLYyOqyaMFxzXWdnRv9ByH8lMoJUq43nXP+4u5rN6NHSmcC/b/90lw2u+KqY/Bfa6+GxAirSVSZk1KRq3nMeBfxMeGPnyPed2v6nN9Fk9qlsvVlbUAfT8WNXCZVmNfDVBAwVAAFuKAqP4Nv466bpfdHjFMxDNNAvMYQ8pL7oErmRq8LrcWYLwQK2McIe1fpYJgFMzT3oDizc3W5oowno9jCZt6Lrsdrch+Q01LtzQ3oIUnn9XxuEN/3Kkm+65xH4KqxDiozAjRrjl131xbZlOzANLCNfdkJ2uVSG7SaMjZsMQ/VD0tE4hl46FIxocu+yeVZOTIPBp5K78JdWJOLeb7sTjR8iqjpVvJ4yM2znrVCKejlEeWCNtk4b2LFhxcMH76UhPvlAYWh/PZ/mehXgPsWUuSldZmo79p7PmJK3IKf2OrG3/uax';const _IH='695c6d452739524c12d589a72f3082a4ce52834bf95964a6c8311618030bb61f';let _src;

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
