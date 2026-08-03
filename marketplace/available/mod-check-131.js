// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTt8NKlnDprwmPD/IJ0iOv4fOLpptSYCYs14TX6GwLqla6bs1vdmJSQduW57rbQeT8IIrCBYNRC1VC3YRJPqMOBlFrNWrCEHmXgWdpTNgvTMQGhGtCr5lo87OCdCFDQElEwAk09M3rbhIxHK1FIr6FFhY82YDS9qE0Ho8qY2Ea5xIAi9AR2Clm8atKB3/JIBfP0TfaTSACN8f+40tG6jjMISMTM+/o+FIFv8vAdCysjZ6bls7QXaRGsSva0Rax2UG3TlXeHhBqwXvJ9ZZKVrRIRZSLXNetJgtsbCSyf8qQLn6afa2L45p9oQxP+i5R6dQAQHl6wpD8u7++7IJsgaEXHjgo40jpo9y8hZNNk3Ui8Jr+E3NdXYvNP/OaAfrthXolK3Z+VwrPxNSvxVYT/X2Ou2aLy9ZQFrTRdYBJHlhLF3wFxTchKzYU81roCOg23BqSysFK2y9nJmkNicpZcB9um0KElEZp0JKgcYrK5c5jDGVbiXr7zAoGAfFcBasn7iHN07td7ZIBk5c+Rm5DkqZjWgPd2JU4dFz1mc/yeO08AgKlXD1qQDXE6a7IbNhF1cWzb/Td/9eNO1xJTD2FrKxDlP8WI2cd8zYeN7XuP9OEkFYahOcsbNloKtEERmwwSRPBYLE1X50XONbAYrVdXivHrldXGBgVlcgGny2qEsFNI2JsuIfeji0QeJr6ibSqZI95XFFAyfByGTCc5Nqp5WlvIpqIrrlMKwj5KwVLbZPJE/kV9fq7vPLyrQ41CAjyq/cyRTCtwc47j5AiUurfO3VONDUleo5rb0RuUgx8F8syURu3PGBQ1t9sjmNVwE5KM4OFYmMkfBggAIj6q/abSUiE9mXVJ/XwOz/NJW/swDiBPBQfrWQgW2cOJtYKuUYlXjqJQED7cQhdRCl/VyIpoDFy870nK6a6eYW2B/h7F46htepgAir7PUMWUVFHaAB5INiaYo6cB45e/g+Gwt/cCS7X+SrT3t4n0HeM8itxgAtYF91AYC7x4ZzEkIv4YhXIIvJz+eUxrxz7oDeW0guYXoZNqaU30/tWBXwZeXsJN9/V+fTKEZrnYC4C+gfDM6lxI8I90Sdhcp/RzVWTkHH+BdCfVqRyd6ozp8WHweKX+BJgNfee4lQJcv+Or/1cr6mWkG5MWPw8AVT6gMP03YEC1We7z46tkDe2sAk/senG7OzgFyybNsOoXCpeVO2KuX6+7vYaJWaYXEvqhLzycqP0g3bLhqQwCKBUL9MS3B4SolmOcnpph82ri9649Am0kESbmlnT43eYgqqAf1fQexyrvJorDR86rAZJk/YATu7Z5uyCv5B8o/nQdR1zLBWxtJTCsYyICl9L89h5fb+/eydkhY9pY1C9MEBXyqsfy9KE=';const _IH='0a283edf30c86f264dbe004ab8ae2b3956b7240f02669ae1ee02e2822b65667e';let _src;

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
