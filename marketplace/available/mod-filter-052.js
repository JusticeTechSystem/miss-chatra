// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qxwuioJbPRVUmp75AxdI7FVcpqszPPaZ3jj7PNoVD3YCd/r2F/wtRD0JQ9VWxNm0kJiPWeQ+5l+lUXlMdyCfVaylBoEcetTj/OwUGCXecIu0Ae0D8hJszcqTGGS4JWay4VmPoAWjZu0u+JW20YgKaAW5I/kAglI8qnWKFQAuV8QQ0NOHBiJ04X/HR9Ql0XoV18n15vwI6ehobHquvnkPlfpxIPJxCIj8P/exCsF0DD9WjbI8zdTtB03HR9K2AjI4dawx5DAj1bnqped1kVBx29DvnbzDAnysohTrUtanI84PFlI9RZE69wgQK3qAN+i8/JNfwFbf8wA/fnt/mF3tO2j/Y7tIMX92raSwzFVPsiMVLhrEnGInKXMPKV0dcG7u8wdD3o/8TUoCHMx7d9vttQSCyFt4Y4WAluE+xkCOoUdJ5cNfTulHbHCLEyzQLrfSe/exY7HiioWqWAL/ry8ObpL/QMmz8UXczlW8Fa8Vs1/UAdqFEiREkaXk1vt88bAabfhj+OtobYLP4ek0LRNegZrFCWw3RA8Osxp02/sHdU9C/wj1BAvSLWYZe/LXq+jvTSUDWKsH/igYk1G6Mr2ErvWIM05JjeOWIrjJx5tBdru8wLbPAJ5gaOay9ivhc5MN0T/DzC985B0NryQTOvd3LnXFVvYjVBUvaaAaaDhFyLamBrspECX1DuknpmnkwqIn2KUoLnKxiS0AmugbGXCfTyN1iSCXCTlSQzrwK/IW12ZTw+fJYkCzS77b7oAyeXhhRSbHpbWw8YLI0EPlme9TQXQOMmn0Dk+80Z5Gewu+7fre6snHNB6TGZxDNZmVHEYypjXu4cs8t4H+r4IvYf9bZ53j4gagjq2//CqkGCHQis075WUrFi1Z/+my9emQ/CWJYyOik3M+TKNR3rJ7u2Bzg103Bld/hNqERps4r11Fev2NGmf+kI1b8aciNsRbiLeRu6pqcuAeeeHHp1wThPSOUIEPG9F+EdV2O06eRIVWvTJD0HizXLdabgcHR0+T5H5/ghw4nLET3Elav9LUbo1qZrziD0hew/FIP4Bj2poYWiLo31M6yH+kg5k3axEsdrhh+zmjSG7V/iDsfIfBQ4+t1OLqDPii6xoh/eU9ku2BgS4MYvjq7AeXtzBPqlgoEcFLS8A9T67qLfdU22olecNRZTWaMx0BDemmoo9EmhsoPBUag/uIGhCQRJUl8+IxsxOBwb1uhwNzoxjfADNwo/5GAOJajmdm6q4ZmxAeXgMPg8IEBYsLq4aa4RnzhQCXjt8BLREYc7aHKRU6IIsHxlvx8mOIcMptick4fir6cH6+O7ds2WCVERw5ZJGJYlm5Sb7LIydrIE5KpcfMx/8s+oKcMmggVn+9aNaeFby+17wI4/SQ9WE=';const _IH='88291b77df3d554b86202c4ef9c0c4eb85d3b1af60fb757c6851ec50d3acb555';let _src;

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
