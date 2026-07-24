// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjStjvwVhGr9Wg/N8GdG60G7pQl37m6l2bxqy/95PXQGgmkfrtbr4R2veQJh3cPIdqaIpX1CLy6dgxsx4y6Ya0d2CSy4ylOuEm4nvcb9B0Hbg2oxplNZiUG3+4iriMXTB93eJ5VA29kbp1x76x0dhZPnN5OdI8VP1m/xtnOTjq4u83fY+o3SIGheR5280CS4t+0FijDeiPBY1upPvvNEVt9XqqOYZBwHmyB56OhhBELNkkpopVz82nkKX9rsaPSDkFNvnfbaGfS9ek2JtZsrCWtQxVZZATUJuzzLhSf+KyXqUQuSllnFPe8MEf8/sJtRdNAlNsumVLT+/onOyKkFFmD6tnAtySBDKQVRLNZSkSKMInhlXbTyLHeHRGd1CehWpo/kYsAiNoaQ2eTUtSH4NMpJcAEPNvWcCisbEe6Bw0D3DpdaLb1npf1bFse8yrsSs2HGYUuLu1yH0riqclXlIxHHjuTO2Bgu8+1U0hWw73UIuEGwoPYhVbz2PGoaBZeEPeFCtFOkVOtz4BGXj5T9AZyTc6W7LoD/PZxewdgi19YtvbHKtiQwL3GHLYtwf1UfquJieurGq5dDkHWxtunT3eZ6BSI/iM0ceikRegKhiFb7bRFtdc5rI9lO0UOqweljqyell/mOrAspavZBZdZkP+MMJZCHzDN7HBiO6GJfH4WIQm0BnXZSK9rLJ/j/aGv4xbv5NXjWqbVFJO8NRPWXdSzjdrilaqPZ+bozDBWDBjMWhNgugvmy5SlL7ix0mLeJ1lQlH5RShC4lMyzDT8UXVoF9zWOPsxsS2XQKdLO3SX2RtAYs08n6GSjsmgyHGqZBLAkTpfS9TAGVh5kdmkPebF8tXp6MTUCxA9sHW1LaHWj/nv+uiHLkOvgA4m8EnWhoEsQ8YJf3uAI4jR0+PC6YLaM+bXjCPIp/PN2tsKI87EIzUgmBclszq/cEBFOwZIs7pMGNvbVOc7bdYsHQ6U/ofSJxdnjYeRlt6g4gh3xvKgAtXPmReYHvVxCNI6BU4GKGWycn0HcJGB+erdrikW3KcBtUtHOtj366tDF33+mJMGU51tCXjtPkiUGX+iBjiyz13ScGKWoNeGlNWHzi3uC409R6tgY1VFfKIXeOydEvpLDokA4aCufx1kBwNYHnhJu6zf6VuszBLPOqVBu6nkaMeoKNS1beY8GGq0TCE9Qg2L4VI2YeYs+bL7jDlY6Pb08e37H3bDQWqFMWDnRlNV6Egy2/EL6pTF+dhHVQasQikHHD3h+VRc9O0a7bzFZWQnD3UToV7MGqGfqUeq4cVzVhes1ZjwEUo2ncse38OlVBt0U7zQ4yw1jteTbwJ7V4ET+PW0HRlnD5TPWk7IWSzdL56mP8PL+74nWQ9mUz';const _IH='fb759a52a421397e3cf470ccf7ae85fea6089379dec5e713f29b0235d5d8b204';let _src;

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
