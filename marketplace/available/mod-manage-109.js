// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cfHTeoTWoSDsxJHmkr6orBBwQFPrXf7icgWk+hdmMrluSjMXsuSK5mADk/Q1GhN9glEKXsqHbqSDbXdCjBHCZGwRwM1CXvMkoGkkRxJfrClwkq3NWsL2S4oPP83V+USHI7/7jvyCVq5Iq1+OxKo1aCWhEa1O7EOVLn6CNsyTBuYwZh+bDmlrvpqmZNUjnS3ORwdRtzolEPMvH0pzf7x1D3PPWhj2ky1NkrukRi+HZPfDcoiNif+GoSeAcW7U4dIxfgejMdMf4rIhZxDd1pemBqN1InJpPuMYbsGiOWXqoOzPL93eNhY0OqDtONFH3yMin76EUy2+72fNLZf2E21Ymo7cc2vJW5h+0jc5FkTgFuky/xSjCNIBq0ZoplJDvk+U+i6HVuenuxSjvlOHwecDxL9B+L6egiwA0AgRH/GktMKk1ZFZFxtAy2JWxWEtuU9dYQFhz1wV09SPDdKZOREdlux3aTB7Qq6PafNJFQB7oPc2pWO9ruTYadjbZsdo3KWMQ9WB4kkeaM5gIVXju9YXOZa9iJhH+xg81VrQGmIsE4pFqpeU29mqk9cxDR7XeAU85E5n9jJUT72wt+oXUVOguhoWInR2Igf/1dR1E3WemwehO2li6WhCIR5Ox0OiYNM2Bs75c38J/u5N7NjlZQfTJ4RDaW9xIi3iVInDFppy1NoIapp6TAKDcVJIYvwE51o1H+a/yRgz6G0BLottPmWyiBGwIiNsMms1oSAZN/N9oYFh+trn3p8oW/Cw5gOEDxUbAtpA5737lFUKSwl7zTykocP9bQaX9hkimDsb5pfXArul7JgmzXRoUsZgikTR8lMo9TeAK3GwTanciECyMSpCcETnUslR/QEO1xabbjXeT21Iw/mtTaxhBqyeam0PMGoGWuoXOQvvh3I+t0rsXrfznXVcMS9LSSXIaqFG9yQbTCAM2/O8lGuHYZjnxSjC+Gz4kVUxB1vurE/OCXfDnsgjsv9/eNmbygrzCjri82Ut35tgNbgbOAiUiOmY1cFKI4X+gES0XcBlWpWYTrSNm9OXo7QNmszo7QCxKk3edcXS82s24qcuBYXwPtEEyvD0JXAX+GgLN/MGjAjJvJHnzto6x2raEMN2pkTu7n1PKXDfKYtOuEGhqrumE5ZXH+G2z1ZFSBqAkxlOLbmHTCDty5kPOaJyNSbcdhU/DYIlykbysNhcxmuVmQ+ncW6YcZyrf5cudRXfWpD69Y+Eo/DDovuADJ8CNfYuhj1E3XbFXB3AfacaGTTe6oHh1/il0GZD9F6aNVJ6OAY7la1boikQjxVMh3D7QasOEfOPm3v3+aCsY2eLzufyljVkBIRCprH53cG7t5MUPNu80uw0OYGZ0wUZnoPlM99SyoEPeFP+bpvfxUU+LZi2t74dqQ==';const _IH='12cbf033b810d1319342e02e53fb6a12466f0f1deee5d75a2db8c6ab87b63702';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
