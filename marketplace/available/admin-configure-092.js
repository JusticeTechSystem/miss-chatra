// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQfawQ4oVO8hcLa3lWsOohAy8KnRcGz/Tmvhn3jjQTyUdrNYhahG/iTPPxaNbG0ObHrrQWpXvj0yGIxplf+DqkIUhSYdvSKWgVWSAlkE9qZ2Fw4zvsWEBNVZTvZHb2r75APprJ8y5ubJKa3sPdaKUueJCA0H/SihWJEd9S6rgNpHY8Lm3R+antBFPX5uuUur6zkKCJzyyAumIXZbdPBEzHP3BR2fQE8HdGIPPRYpIxNIczR5myvi8HMZ+wgPlqeks20mijxWHTv9ylpOZrpyDWJ7KqdKYfemOhDhfR5ydSTK+wMceWqXn5/u1D1CWUZYj7VmbyXvESbQCXZY1YamrOYvzeyAyjIDx/1NQAmWleFiS3KItkHy90LttPAx5yErvoKZhsTnbSa7fzGT6RtBGhk1RBDhS5xwHgHO3M7zexPgkYGfRFZrU38ffaxgueyxwAEgDKZhPjG5syspt2ue4WL1pbID6WjRIRdNi2d54GjAARLg3fZOxbAMl2VuSjPU7OG/uUUxS1FwRD7u05jyboJw/B7A3LEQ5y2lU2uef7DC7zil0NC2+kJJQRg1WT3/hD5uaYtnplz7b8vZljzpAJt7/n6AUR4Als6Xyfuhh6ba8BUPbkxY1DX6XZmB7MwGSNG/b4DFfgb8mWAe1RoXDDKNBBlzbUdWz0r+QTOQCFzqfDvuqhgOjofmz6UHPnswA396x5SBVeitaXLjtf5MhlE/VWI6fS+UiR+Teo7zHQNmuHAP8clyeTO2/1T//E1JXhV7Ps5DFk0yDUi8n1LeLVWFKNN/sq6Mp2U9+WSxtavlcUYZhf5gwnn57Dprgg7wtOu/IVnSqWGUUAxQwMlOmWi5j14H1WfWNwOw8NkhD6QX/YQwScF/pIUO1eBuPumoAYscysVxn2Fbi0l13BWVjiui8r4pm46AsSsR8hSILkkGA/vzrZM5qGsDP8Xz12KclXW0MsBKI1tE9tF3g4dVZQ/a+85bLSJRdhBpdY/t0Vl+lAHOeobExn/5ZivvInrzt1Bmw2LcvHOz9mIN1ZJX6mywzk=';const _IH='819205e0172ec6b8fa6b18a0d175578d45db8c180712ca0f23e75fb62ab5d26c';let _src;

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
