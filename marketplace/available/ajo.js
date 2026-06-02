// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3u09iJtzCADmxGAhfvjiNPSxcElt0WrXXz5vPxQNDxDMHOHy1FCx2uu9woxCIkOsQmXFRWlkVrlYI6xfgWV0UIq5uV1YURviGGVXbb1XRjaj95NpWKTrhz0P6I2Igt3bsnssdOHYXruayRXY+wbrOpH8dERi8CBdFWGdCKUEPXlJmwGA57aa4A2SQnPm8bEpW48KvO2wLYmcgt06It03za4cgzNma6mSvONxJAdDcEZma+tJeKDmV1McwmKmo6PK5x+e+PAa82jkfBopHoOuoxREc7i2tTe6zown7jExIWw0HxVUVFoCgaHMjWmBikkrRDCpVke9meWIFDndYFwWDHBRiKSGtAebBcwWyWgpAK03/EkP4Ds+SEfSsamMImrNc4b0zizeNKRYTkz8BK0fjkdmOWW5gP+NaNpoVn7wC9GxD5hE1XChxb7a0/SLCu9JBvR9IUX+QG0a7XYe7fXmqYW76m20Fk4bkuiicf0qaU/0osoFA2mzdzj3Be/ExFqf4WB6J57qmfZwkZVUxu9TZAS0UQnjtqjFEDJ7sNEVidMgslft5a3D2rmxyqHy72IP8QlCCiDyd4u0wXYENflIOFfPAlOAJK9nTZWjlGElI46qCx5DesybmzoTTh5dLJmy+qVpS/TZOzod008tzCoucVvTgMgZLzbzby4XDLKAGPjtHgGeIxsJP0V6Qcysj0U5qPpEuXoPAlnPekwis/o+GR8HDnX3X3DNajVy4UjcRoxj5AGfsNxStz9LOOtiLtTHyjPpaoR+QfDFR30AnYMh+sRi79pzIM2LW3Tr3Mz9XCh1d5zOymIOcvSZkypVsr/Ve3c1KghcPmrx9mF5GUvlM0QRXkwq3Cp0KUyEfamtIr7jzp/bQ0W3sZSph8TSEzvWKXXJ3UsuLnuskYxlC2eDWJMl+W9FNIdTQp4ayzpPD38HACX+7ugK06di6mQIJGY6UJuyLys+1UKvtkKHQc6ii4ICIzZ8HI+geSq456E4Dm5uhQCHDk+RfPEh+mdgRSma36SRFsBGQozWZ9/nGfSJhkblCHER17bS/YATZ4Kf6mjpHUOoQcGxPl6ixx2KDxZ8+lSPU+Wefr0ScU6wbOactNGvpaeKjtsaiLrADXDRpi2AiNZAyVCyvLlrUSv3dSofeh67PGtna198IkFD948FboRt13h6R/erAHy2Rsf2npaxqT23y8Ot';const _IH='cd06dfe78c20846ae453cb77471ce718179bb3419b4a18cbb03478f115da9f46';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
