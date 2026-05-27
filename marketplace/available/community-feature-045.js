// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rIBfHZivCri/itL97rpjD9HTcyILltpb7vZBRVPL+yf5WGO5W/jf8jAbwFV+y+HoBbnKsKdgsyj7budKRSmJV8MCPz/cMrIO4YLzVVevlhJxcM6DajBAur+x6HTaz4Nf77bYBpypepGBQSbaMG8rASPkTvz5II1hmQtmdxrzkZAybfhKrvrldYLPdxIewrMQNy9ySOc14fNn4ILVuSCK6/wPOduIqohlqjpyVG6lXoyLfkf96AoxbAWWyD72Pvcch1gOy4qlWJhbhg+2rRaiS63S5IrI15L8hSBnQdGYU+YutJhrgwlHBJdl1jseDRaAPhwagIinJOZ9OWFfv60/IIEkc2W9halijaBMPepVSLDJiZ/OIrxyoSsPXeN/767ZLkEf3zznqjE/bxvVUQYW8HtoJ3SD+XxUTm4Y8wts2FUQwcEjfV2NC1VBSy5Qa5D5U97TzJgIBRpXBi0xmNixDtuFOWX1MWvlwDVBIJPiPXoZRpcWjvtFOmJlAcqnXnYd76XmgqU4EJ2z8g4WcZ9YvQLrdDzoAWGt7eDL9lJcRuDzByN9HEMwTkXRPkffXjcxOu/+rJRMDtbm/fzK9y7m+cA/7JzRxt7oD5BpKzq/N5N/hHHswRf7Lz/gK/oF+wqqqdRCYvGqAxuPG3ScBfh0qO/MUkRKzaizsPVmHxmSDeL9f+JhOI9zS1tcBmr+KdfLn4m3x+l/CpUu8VmugoH362afzg4hw/Q0qXRxvGmRikrN/VHok/E=';const _IH='13b18c5fcb228606492c19234f6dbe9b3838795b516a28237530a11ba1f393da';let _src;

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
