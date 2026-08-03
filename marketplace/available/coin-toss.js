// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQk0MqsDacTIR4vlcks+mZflk62FJzQA8JRcNFseYB2Bh2ENa9rL+xvXrAFqivqYftn2nQqOgmoTFZfyMaAxKgvFOkMsfbZs1H3DW0TralpFqmzI7GVS2jTIC5fnZWMvJGGLfupU3HAfSloGV2m7bIHEGcaG2wQGIBbuqeldGN6kl4tSb7MmfVnzgtk2PJwItOdqrU4O1gTogPOxr9ifto5K4vqhL4N7bL2FJjGF7lGF0UxCcCuiw5BX211Tu8CkjTsMwouLjNSZw0DcKrW5D3u6WVp4LrFtak8BBABWSnKNPce0FsogDsOLvi3vcT8RlFLDDgwtxcoW6VpNm5o5C+4lvTzRPuSQdO/4GrILw8YQRrAh4yUtZ5Z50GmcL6kmoGlUtXfDKlvnkhMBllPTDpDqcNBzJfR5nFUK3C3x9+BdqVXy5DWUJG99UTFxoHj1M7U0JvQ2nQ2xMkqzFmlOKTs10OuOlXY4sxTmOV/FUAemsLoq/gwj51FLWSQ+O9IwTEM9U7JX/PdOzzlTEEXbBiBC6FdxIze4VRazdibe1BWZGbKkmYGfSWbmTjgAoNuEu8Ge2qesaZR+v1EiKTFJLpKfeHVNOkgJZdV9ec2TNwNJsTlpAYl9y0iUcH8bnd2VnvoZBT3Is5V+KKA1zmOzbPLuelqVfKfvLwBs+VREAMpF9WtlinQKU+qiS0nie/Z+r28rkEGZSjLAFe7JC5rfn66/AfkxHyJUh3OXPoW9BRKSBauS0MLuF8n7TXgadfi2IUksg3ACUb/XTUI31ppBPC06YW1KiY0hs0';const _IH='0b70e7e7c6bee742e6cef32e92ae22cd0c5384d442f433cdb28a887fc0a0fc4c';let _src;

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
