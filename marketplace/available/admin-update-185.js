// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTC5ubUicYH0EoFktn2GlSWMqnqIIxxQEuh39GF+wVJdWbIhSCIX2vKyzu1SHCpfGJPvZF7GiMqpX7AAhd2r82a+BqpvkvwORI+QsR+htX58j8vKeSOcalI+KU5DHIuUSpCBsxZaI1UPflpe9ASJJd/Lvtj0FLaa1OA0LbKCucfes4qY868FGXtnADd9AEKvt+SSmveRpcZAnnuty0dk1XmUBkEEMHtCCVZFwFh+wvmsWlz3f5mi+So9U10+dgY0oVzss8z4gZL0D2hE5S7utThSXczZLdbVnTUBSy50h9IqbQSAim1Kx6+6RE/rNsZWG1XRiMtXhyNESMRP8+L/7RyxZi+WZJ5Q8AThiAVrdLJ41DPK5dZ/6blohETltiMJXnzKWzgk6thGN+QeWmgj0DmE5P/uKbxem7IQfy6PI+Ull5Ejnkm+omzZ9zCn/v7fmLYsc8WXDd3Y4GbvwQDAOtratYOuR+75Y4fDT6jhIlatj8R+0hgGuy6MBh9yHqbI/aUf2iMQ9zpnw0Q9mF/1A18r65nntfXrUenomewzndqpN0XYW69smwFHECL/fYA4JSPgy4WgMrxovSRbfROKs1o9B93McjYU0vJGJRphTXDsRJ5jmZq4OjN7GPvE7r0H2l/HcYz8x6czOneaxJ2T62M92g8fv1R1PVKIqBEG7HsYy/85gx7dQQs1K6THnlmIt+th9YwuDPxuL7DcRQlfhgUm1DbN3XeZx3GBK82ndHFGNrrt/8f1ISh+5ktzxeWSGtTSsRR7dgClGkL+7upSd5OYJNK/O50xpUvgMYx6Bjoiqh9gHIwyaoJxhnhZaNwH/8iRz+wZYg9fFqulOrJlcsyxZOfllcA3UVs2h3p+mQ8iHdCb70lF3yMVHyQC7hI1QFbOl1kDaWRlo22mMuPOplvIpfAqNF31PIx7UnA1UBVTBRdEd4xNswPilPIE/l6w3YNFCDDkWgMXUVcvUb63DIMdftCainPZ3ycRPm/G+czejEzG4CnfOalzNF7VftoEqRx';const _IH='34f2dfe3357f53f1509e4b9fa6f566ccd4fa470d0e3184e3bc1db15a39393a9d';let _src;

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
