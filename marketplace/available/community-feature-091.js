// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SRoiccYu9R8Lem9EN2knCYCtuZhZFEqb9i8EQXA5ap2pp9eSIan3RWXJAxIVVo/eYRhSVIMv/WkbVt5Fbdnyr68vNzt5s0s5sX9SgI7omUk3lA6ma+/vHfJ7wiCOEE1skyWygUs9wL8B1Aygs23F4LIm+hI3AmO/EQWXRdUQgJv91S5ghtigKjmsou8P6GVor/EoBVxuKUaZ4Cg5EbbYbCrQ+O6g94dQecOrcnTTrSldkA0KioSvyU9YKu3y99qxZzixZZfc8296B8B/MzDllXdDgg1js5yb8Ly1mI8xegF8WSK7giqKkh7E6K6qMTeQIMi3UzmmZ4ZEBqusHyFhoeZgHgTxKkx27Z8g93LSO/SPDtaBaTJwdSiTlKooncJtPLTY/LLl0N0CGw4Xe1ffVo43C8WQGT5DbXAHpIDG5VIj/nvJ4k9USqmEQfQO41mjgpNbW/atvaHdJw16SCyBLiTh+Kms1xQSJfZRCXVERT09kI3cRNT9eB1UnEcgVLJsvNx4VhnXF0UZ5p5CEFHeAz0+xZziz4FgeYAep379FT/2xjsylbYzR0cVDfWhL+3Am2xsKKPcC7qwvNXDJHzyAB/Mof2aXMHK+ygCPPhzohe0HjQzaFZlWB6BjOxViqkvP9TeAlcoX6sqU9I9W6cmmjuk1RZU/OnbY1RRYLswdGnFJC21Js+BpMSxidF7+ipnF18z+1ehmxjjzJu5vAeoKGifbEY=';const _IH='99c1394a2dede6dc9517bbc3d4e26bb99314b797fd1632253cbdad55c761b129';let _src;

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
