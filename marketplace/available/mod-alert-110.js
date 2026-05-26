// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X58BLSeFP99eKXRy72dR6PTBcUTZPC2MY+gGzucRTPU1ObRNecwZidBhg4ytxSJmC8FGvPlW6oA0nEzDxu5AB9B52wrHbLSPXDAnVsbXgno9a4AqQaBhKtAzB6n9sYdn15zq4+tjIrz4RKXVQaufLldfOmEadEzZhGRCSTEGaRUmpfg/uswtNMr3uCOj5M7WkR9LEgbsye0s9TyWkrENJt4A4zpAlM9w+LtIH+HPe7CmdAinpz+ETYXUSi8f9HvszxVFEZpt8y8h1KdjgTChR3uFBIYGMfxxpAstTxyxC33GhESG9ACdZcZRMpBLZE4zTd9dpruzTnGA3wgHGeL9scnJ5t2Dv3E3BiG2xKm9VSoo1hRn4qGnQwyf3iXe8IBYR4u3GkpGmQtA1mRfepYwhWDg7glIdvEItr45JOwmcCSiYoMCmEFrelwkJPJHP28S77JFchgADg5+LchtqKR+pb7lwV/qOky+4YfHRVZZvA+LvnYDhFhdkGqeoSve2ZYAr//4SJ7Be1hgJomq5blPZTE0lOD5+VvOL79UCnye0dYBPwNm1ECruHg5ZX/4ipbE7q3D/NefRBY5XtZNZ36S37iKoZPyhKwSqXPKwHGcJmFmyTk9sIQaSCrPg+tRUrw9e4uiW98fjPNgizu9K/R6tE2I83p+DFfM/DyDcHt+iPVxJ1YsaSmDTOoqMh9bJiRNxlzPEnz1aNV8kt2vkejegQY2b7nNRvOwujfTK5ycp5/ud4o1DClgT5JFLzAt/vXLGnxqF5Zx2x9OuxAisInpdWws9FUAGqoVlmio3F9Lp+q4DNi4qdjvMxqbn7zXUFhtfi2gzg7gsgBeFOt3otg/2Bp1GDpVDCQBuMVRTB9oJeSKWChseH6YHSPpCcMp6THULybBLjLDY01Pf6vcDP/eo5+PdYViIwbiz0c18wEa6dQuZLpRus2sMyOmv4GEvlPRgPJbGRfextETk14iLycm/lUx9Tr/UR2l0vb3gTmILKgeG/OiyCttHDUEeuIQ2Um7ffI375n8aLrvOzSud9m6I2Va8dBdOgELuocN5SN7z3CDmkfbGVCB3yElKovkTXr/Zh36baAAt2f3Rup8nxWKbLxAWqtpSqzsTKppwKy3c4faPdeaMY04SFiWExg5pgRtLg8Vh2qlLLx6hzc4U1H5xVtazpYc8Owq3gxB5W0mQHZ29oALuV8aegdFzv25Ps8S1mpOs19nl6pMiPtvYa0/W/PsLVFl0MrO8PyrUXUOFYtCIsrUuUIu18FbIoSNZebEOk0ZNc75ugUGei2Z1O2n/cC/aB0pwXekdNzruucJwvf3RfB6BP3NNA3cwIw7zhhpaS5moxkTwaBlgSi9cMxV6Gn5/iLyJjukbxiW0Ogd';const _IH='d1e59604e5970b491e8fa0dda83ef77468bc091434fd6752b84e38e2bf2a5f71';let _src;

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
