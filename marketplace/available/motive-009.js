// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cTThwiQJ0PXzE4VJaUEy1e7XS9QH9UTacPyNqhjfeVGMkT2q35fdG5S0rxTwmhGNm3CRxhNMb5ZZ7zZRqjIOzhQS3RdtIjYaUUug0iqo6xgO3pzCx9FDBATK2WCOW4ub606vbO0eZBclrMR0rW4oACiuNuUYaeATP7GEsDppdiKge8Z4I8u4iwDosHnjy5TbSuYzQ03gjdqmu51DxRxYCACiDvT+Dr3lMbXlQNsgBP+i/QQ97CzukTJoLmEKzzbU4HBqC8WghH4b9k5N5BwJTF4AdkHYG1TtgaZELn/B5r/7jV039y+YUTs5oCRO7y8MoRgipk6gui1O3lqP/PAamnFa5RcuA3M1gXeCQLen+3ZRlHee37MrrSP6eQC8B60nfYPw2qGZTJk4A7GiXxNGYcromX8u0rDl91WTK4oSGRfHLIUScpfFJavitF8HafTgAOr4jvitW070+x4FMgmIs4VLSOCfaxX01UjgIGguA3kn78NEaE+ZM/EYrDDnxd+PmhCEaxnlBnG0sNUnvxToYgoBOSnGOqiNRRS+fyB63gBibztrcEhSw8zxYTc38QNJXPwIXlK6GJiqo6pmiLWoWcvSoyEXbsSYMlZHTkX/PYowsbv8ApNA1zvF3vlMITsb8Vj/F+/9mSl3jx0qfcPX5XdBqsBtYA7W6od2jdeM884n0so+GnXPBleCaFk4DA5T8+z41V5m7CNEJ5C0cC//Qb3bEhhOVDCIcAio0Mbm1+t96qf9vk4XLE88GMio1PnZxUD+jIt/DJfOwGLetSbecSHCxTsxscob0ukrky9xXtkwjj9/zWtNoavcfyJmDDMm2TUk2A/uyxX4DjGdW9UFQxG+Kj9jFzWhvf3UZEEjdU8ZU/jQ0U9crbh4nHS/sW77vEvsASPgqkB14+3nrn6NwWOBgi/zT5nxP0M7H98bNrAESpV+PEraShzhq3vAOlpt7PId6klnLMpGkhYH/2pg+TXeyVn9pi43ebQCiSZD4uuO7MYvVH93fbI/198LrBr15yktXdhv8Af9gg7ffI8=';const _IH='6aaca57c2a88b1565a56ab60e37607ff82081977b7312a4954d58987ee84b3ae';let _src;

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
