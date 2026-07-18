// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0MKZiF9Z7dRCeHt+k3fW8pCJ8uxw2AJceGE+jE1VhZkF8+FS58C7Py9YIumJTsPY1hUjL9w8MTMDiCsm3XssqR/YRM2FKeUvTuuJAX+OpX/F0pMsEJNvpXEQpiCEBID2zJk7OwfbrEdZOAiFG2lGUToHvXH/zUuX1hMhhw6Iw8EIJ4T3ThqLb6cSWPDH1mFioH+R1oj7Vkg5JJy9WsESMCnv9J8/fMPOekdmHjk2wxHQjnB9EbuNmgjCLAEGDXt9Adu8swna75aVp5xJWzcSavy7VrN8/jGn8pDPnQUJswD9AvTOO7xZAMq56M/jMIJ2Lwy/lRzAmRFxMWZC0NClPXIex7z+hyWbBTu2D9Ok4xJE5m1FJO93q+cwzDsE/ZixtJhMEoe3Of1FdHKsb2qsN/5hCVCfreUwU8UhVjS5/SEty/9t9csDssMjRj7uMVayjujD9oen9K6w6d9VlkUy+hq6CvEiWma10BUcD1KER/fuiQJf85ezJ3ofsD1HZ3iskw8yXXqotBrLeFExGLofkQ5EixirGLhoScwaf6IBH/8NTsu7Zxb+eCF/F4KJv5B+pOIrT1FtzxWNrgxmxZnea4EzU+GUzS45OBSg901XJ/3Uf9VlOXvuU5ZsIi5uUmTWf27GaYTAMNWOLvDJNsu54vlJTrEY+GbAYdVhgtq59g8L5NaYnMNn8cg5CQmRBZ/AKSnZ3clrlrrf4UJs7I87nDJrmO/aHjWiMBD+fxarG/AxY/1VMYF+CWhvQMfOzUR/3wEWeP/eTSRh5aiHNCTDojZkHD64csJLNwhq1V5XOt+DmSpyPocJUf8//CSjCFxOv7pj9nQ1vo9kmgno+JVRyLBpUXEa9nCn9NIKRVnB6eUs/plHfnqSinVFlcb5BpVoDCEFL7Tusm/LgRhz0/4tLd1GtH1UoxJnk+IpkSk0YUkoMUxSBG5oPC1dj/LHzdPQd+Dkgdb/ESHGdUMACtp0Si3gYIidsSLp30GFhJB4ihP7H/N3ym9fRje9u7XAl2sKYHIDUZqDV6w==';const _IH='bb171fcc3d799d0ed1d01df5240a7469a0ba26d4a0d0ac3c391db16e1315436c';let _src;

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
