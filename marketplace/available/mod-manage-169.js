// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gC0ClYu5L4X9rgGlBU25/Q4iYymbGFMIG+r+Eoe7cneXFHMmVd8oFolycOAB/Jv50J6tim5DMBp7dm+TLDCYwQ6cyVzi5zFBuqecG6AJ2bQqEXMq8PH2nXm2RRkvfgBlDz3Db5jyUx+dmP1Oso6NfN8kxVFKBYx3N/z/JKIk5/e2hmayv0WB1Aizcjj/AxtiBSDIGymhNCZVZZHBYr1yZehe/LjDsw9DSeaJ1QgrZTcQex2P1LeyT6W7ICW5I9kTMdI4eRp0C0QH7frRL7LsvF/E60ORu7pfiJtnL5v8bdnWOFxlbrclWwONco2fFchfoAHYRscIU2fJFu3pipiEUmvZbSiVD0lju9ShRrWsYToYdlK93KCJwXNYXshisl58jn/ndMn1CEtaL6DyfMq8SArXl5MVeUIdhc9RQ1fZWsbSUSBNyiRhyIbIOlWpCfYAWd5/jgDW1StHaUKkeTlm8vDemPTgYtYQLg8HvOGvhkFKEgO44jkQx9C7mS1hvFX6ZDLF8WR4QulDeKWl5hj9gffJmJPOmEQkCeVqgxXRjLwVxii1IFO1c68vetyna9rnWivTHZePKUXeNoDuz6O9kgQwO0GAvd4zn+X38joW+OBDpPaoJLLOh0NgAvVwK4eOIh97LlsUWrTqnO9t0cvD9Wcz5w6ujUYJ1+EPeBAcozTEZyS6+UMNP7xe8vB7VF8v9/PBECroNrm9VntFkwwEX8HwLOEaCMgtSJovJVFfpbLKOLjKyNHG5y2bIBlYjSYBBWoTRJs0kzjX6TFjJ/GYF15yBkIY8ego6Jz5qV0qE4AD0D1+dYq9peBI1gy7b4SAgdNU3GATHPStJ3Sh6CVGIZKjaAutOBmz1BU7BtR+flFtzudDE8ifJQF9JMdmkVXPRXsdCCwEXgJxHoxnigwd8jLO2mxEnWR4JJYHu52vK6ChqtRvBlMWDgF4tQ58ZUen7AgbMQBAmFATkdaYaynw+DxcDG6nofFaIbWzboqfXa39StkotkVWlGlzgf5AKnbt0xXhpXwdK1NUe4U8qgIEU9AgA8Lv+c4bwgp2JXV0V5TepmSBnvf+EByxpUU2AHwwHiMkU2fhPTRRsvOg7oZLewA78Br+FZkDRQGsScdmWMfM4vSq/2Hhq3O2PvJMPADodjk3bK/tgErgEfkXorcgLAYoC6B+3qWyOPXNgc3oFN44Djc98/v5XPywX//PLo4Q/4Ehfvxpt4jQSMptIKOHRvKiuZdV4ULIwKDZr2qQ8sMFK2dpmam+Qozm2t2K9hT5shU/630xqCTZCI9jqwtFWJokkMxuGjyQlIU9qpGGSsvS8PJ9kNwqOvEpqaHhkTqZH87sU3TDNAjg+CMlS6gJstNYe5PDLutPVhPO8KOzIxBiX/ZrzfmqQQ==';const _IH='defaad337134723529c1051fc012a88c1cec9a036daed15b094a1e41461fe1e2';let _src;

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
