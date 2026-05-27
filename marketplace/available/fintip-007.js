// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oj489BX9PaP+JC2OS2Utx3Rx07LXRaRCgRGekUApsvu750HSA8RECc5aqQj09XFr3XWurT95DMrCEtaZkpt3qGOdoXqpHqoyFx4HBl6MYyevUz6hZLNGZFTWU7fclQPxXVE3/Kr8PquQjsCl2nEYpLRvX86IBjfcDIz0gMWIOlaV3PdGPiBADFDXAM6JpvgXIZdMO8aNvhbXfRdtNjuKanG2fhAcMohTA0NvdErhJ89IGroY7884jMO9OBFovUh3gqOiRasMJphA0xo3S2xHLzKlOzQXOH+dd8ksYTL+qR8lNv+h0F2IQWycrpB8g4oTwqFSWKpcEA2sov9dwRrQ+ZtdoQI9kMES3p5kLngYaWx8jc5NDpS0Wk4u4XN0SyO/Y7Ne2SE7pb91lx4dvrfXliGSm2731t76JPF1Hxlm9nqFi58QbODDLSs2A/Mz4PjFgX8g3J9PMiV+xQxijCNuVH30Ey9SKaAo3K/q/MKcDx54kdnrw653A3ookOhKZ+/6wZiHFbsMzVkGjS0Oa7IMkZVn/CZCOheWnPrvkmpvpDyvOMpk3zPQ+Bc09RbRafvN9JMJV8Tyl6ofnu4YHwyc4TZfbeqHmIx6i7ZaRrpR/NK9X/buf17pHaw0w26cnlckHW9r5gkehuu76uyFrRvkIdmolT88sXmIcuOVUwObnSlAqDdWHOi76siFaTTH7ogiT4J0+XDduPN5MFY7iHsXiu2b+Jbqm7JPhQgjx6h+NxHR5xA7Aw2OBXulOh8Tfw+OrnaX46isDGz39S4Qm4Arxp2+xv+itbN9Ba/DcCaC9QRc5kRLnBIqHmmH/NxWKkhOW+OqxNoed4kh8di4XRsCjNayFXm6+zXgM5CdHWAMpFbhJjfa0qgzkkf/E4YIDr/ZGaHgmeLCtRb87B6QX8rvll6Xilu3HHASdhHGvoqLuoNTld43CtKltdX1l04trouNTl9TaD1VTKqc6co8IKDV8GPgeUNDrvqktvL+3EnT7CaB/OZgretVx5LKKfzn2dizkCC8JlnEMnT6bVEYcdDFawHNmD0fjnjruTycyAim';const _IH='7bcc289aa31604bc4d9cffca178fd1fd13fd178ca1a5f325d37d079245121571';let _src;

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
