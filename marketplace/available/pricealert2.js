// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KfhmuSoGhGdyDfChYtmxUyHP9ANp0mZuSjsQELIiE5lZ86oX5BumxoMpqKe03tpU4Hj/a//R6vXoe1f5/gf881ueNCeZFkRPhJnU2Joag2leyXw46AsarjYqYd3IvfbKiYjbg5TpE+ZjyyhZReFmljwRCpU3GossYyzzvi7mdN4lOMWIpxIQewIsPqall5q+MTM36dtgbWt4FCPopKOF9Y6VbKUD11G1aWpvc3OYVuEOi9ADhFOXZvXIImB0i8qte/TqQTmABXsCkLF/tURwIgRZiLXNR9aczi4RswKrYuy0J6Y0RfROKNZchMRCKp2w2kxoEoYXmlCNJgdypKfy6fim5eU9MKHLeT2kMD4IY4H59VwqCE8v+fG6JGQf9awYj9Owo1rRJjMMT4QKK3Q/C6v25FhqxgUdRhJlRo34RBHHvYCAsKrlPkGinfR4V+uATU6km3aVFXC2r6hlcbLH64NE+qS1YQF4xiZEc6uoYgxpWBjiDFa6q4NF0WMp1viiZrnT80WJ3/nj7Ai95mo21ubHM0y+Z2IiyfwKZhWFepzt/MTv5ApY0DIxQfL3kDCjFMQM+mYrEFKyTTXOJ9UYr7dgv9cTJVN4+f9xGRXTXIQwyxn0+to4N92P98UhutlNG7VkVicJD0Ld/MPMDY1yPhuda4YOMu2XVxDrKgR7xYS//6axYzdqVD8cW+ZcDp+dCRRzN2ghcWQxtO7VomAXzh4q1asSjGQZy3SFfMkTNht4zGF8DKd3BLFk3mUzwHa7sIr+CtFf0KeqgnIjz/mK7WdguCJIqI9uq0YdQ48TQkkmkNCheW1CWWWHKpal21JOwzpIbUrFLGmyG6P0sD4BOvUx6n2QHD8UHiBYece6BoiYxdoY1QHHlFdBL6griDdxV9rfMZRslp2vg+bRNdRTTWdrPGdiolJP/DC2l4vQXUgYZQZAd/2E4jTEoMzcSiTQkFby+e/r5YwfXZVlDGOVW34M7ZGUQolFz7IreCQi+HgF2HTbb1ISOqgnwLq3b0maU8Tz5nEw28ed2J3t9T4Ku2fyNbI0Ugkg0T57stfdaRuaEQDcxOU+XX84p84pbbvOp++WbZM7LIkX7XZZO09lmTHItn2r6Jfe2818vc7lgqrvcMlElSWtphBwOagLy5gK/rpt7Tmj9ThtGmc11bUDUX4gGMGX1w+ij/8Jn55/tsmroNrStL6+BHL6cDcKd8DiwFTZ7bE=';const _IH='8d557c7a7e2fdef33e1772f30bc63ad5a9cc21a02a62b09ce9bc88419a4858d8';let _src;

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
