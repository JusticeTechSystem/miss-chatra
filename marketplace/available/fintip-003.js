// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrFjwdoZ3FgJA3f8/U4EiRzhsJ8sgk8BiAIw86yQNUlOA3KndSnrnUONsSInTxVjMRBF6rGeOcL0iLNasHUj79eiJsXTbsO4BvAlfk/U2nZNOG380SH5sEBSxPk+xRwkwbOqVbKILoweC4c6yviJe6v4hG7XRyT1o4KPuUaElHF2d7SBW1pPFW02wM9x6xqpHLNCBv3XP7QSk6IkYfibrODQ7tKlKXPDps+A4X1uY4Cx7A6uYEzB+kb6LgcjbXhB5fLf0Wu7FDsev7RMXBndb/GZHFS86RHIfVDvNjrVv6Z1Qc2w1J87FVrzfst6YdNCL8f4c1LOf9nQTs2VpF+ElO01Jd5hPrTrbsK0ZIELjCkc6RBhLLpJUU1QKDUZdn3KmlBa9NVBWQ5Lr7cX8IrlukxDc/gdgtYJv1cXeRGnH5ZIf0AbEJIBBV+BAbU1ZQ3yKN8j3yUA1EZioHVpcLagQk2xVo2I3K68B43dkWsytkX7YduOGW6Z0zzHcBoPcOBH2SFzhx0l5l8wHLyqC1Z7VNYobXwitpI6Arojn/izubRg7Joah6WduLVbBvuwPSq68J2OHWIn6xJVHvFoLhi8ZCqJbT9JpNB2Ogs3yqsgL2YuK1DznZWjf8ZnB9P2vrYxzPJWmvx9GdpCfczhO27IcPGjIgv4ki3zv3IMaSnH+1WCNlA9OClVKwksTFOpP9+AQwzkmB2Ksply/rC5Do7L3abPw4Enl45VAucQPFMHVDvOwS18OWnZPhx/o0xD0NvjouiJBw7x36J6Jk4cOIwqMxn5RPk6YnyGxFin3QnnU0wBSU8hxkWzoPa18nDDrBKF8fbZQ7AiAa9c5P7DwWkUJ0YXCiD56GiLGxWmEfCiqct8s0myLUNbFFqeyy+jVaFpaGUq8XP5j/dV/eq2MektJpjdzFj+ss4i5yBR7cuQda1MiGETAivtkHerTRUVMMh6RfpsB+yTvkgP/ZJWUfMI8z06l2VfXGMOShd9MWZxwdpdPyw3EH8R9NRVo+agoIygpptF/Z+Wrxh30+NDuqStSFauwNg6OrULhCHI+H';const _IH='a713b726d0d742993b711a616644f46fb6435bfad774d94f517dbdf19300dac1';let _src;

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
