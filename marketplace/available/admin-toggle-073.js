// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTey6Aon/s8y8nmU9tEaib6ThikA9fC5ut3wyqC5LK+ZgojDbFWzvl8wgYjceeED/YBYcnjAkE73DIjUNd6Ntkrm8XhqglTTQ847/PSADOjq9oayn/8n7nu6QRaf+m/u0GQ1t7bFP4HcNFP34kAgdQEAL4qVpiW4PVMBAPP8u8wuh9tMn3cdBoowIqAjhk1zpyj4L3EmLwZzju0crCLAYUOnTY2sbdMn3O5p2RKNKpDYyweQGovHlnm2V47wtP9Gv7/69zEaKXKTi7/d1fhAo/E4Nq+EWc/HIDlQgQ6NCx9QyuqTZcf7h0rQTU6ul18iJdWngENHZMUm/2452MHwFRlfmJpMg4hDSB1PB/rEeXiw7y9LtqC7AIYJFUrSCS68sb/NORTbFjSWS3h+NkPYpVbx7pzPB0XfznXnMOdGYnudtS0LGcCk0px4t9Gix8Fyo68jBS5rP2/BzuAeBMAumx4DyxbeJQY64uOcLq/xHHuDC1uaoiE/OIri7XZ/md+ANnP7dULfxrummRG7CNrNKH7Y4xi70eBRwshmZT9tQMmZScYeUJSvHyetcoQgC1QcWBhrrPXLuHQI94FGQqp2nap5zf4AUlMIGuBkEAQT0WlgSiP+/l8efjUAu5g0JBxK4F/CKo1LaBWhQMnYdRvyH1uq6CO+WbGyLO/CvIuu//NkGYEE9Ksx7/BPoRkFQ+8a7NKWtNdZGTbZTUezhEFq/LphVNl9TkniZ2IET/Zi8suYHXb/54n5Vv1hStnRl5mezLZXCm8nDB/NgLJ+iQSf6yNAcjitxP3p+WTZJBBOe/pszDKVwTXLvkCAbyhIAvgBWWqJ7RYHXmmQqaAzwrhljNq5wHK0vXxVfSFNExf6rVAQxH00kYX2YavlVqYjz7f7xCC5eKolkYXgd1Mjj8xyvLYxxSM7QrmGmsGFPgz7njAJtmIOZpKm/aeoHOeNQ/Sktreq83VBXVFteuJfoinv24LTr4bT0Z/MqazPB4qkB/WD2hz9ewVe2Dx4Jn6hM=';const _IH='8ebd29a0c58c8cb6aa0b709101a9e78156eec412a179bf939c6bd594bcfb6804';let _src;

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
