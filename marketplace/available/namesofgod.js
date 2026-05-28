// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f9ujugUQDROmkSL5Ds7xvRG3diQAq9vZH2SSL74FlYFNEhP17jJNHSxJFUSL5tnYZzGTmzLqJXvcCXBmfBDoOU/4ysHUmw2GtO9Adq8e5F2xlCZKYap5NcV8TnxuayJciqczI8DKlxdS5x1Gyv/MGY7gXad6wa+Vg3ezzLV/Og9Ur8jdoUUdpaLW35mca2n8b5vtMV/HrSF1tiH8LpeqKWP1hCL51FrGcGHYdbDsYjAVVarPU35GN6renWTO50QK5yP6wWRrUaHzMIuwC+Jfc3wr2G9+tJuTSk6c4Ll40MfYlIYPoKc++EpKqs5v4uv4tOhaal7BL56oCcTwXkceHk/eRlxoDzoMHspAsJcbKqyuaz0B1J7b4v0fPhAjD1gkdvmu91AZC7cHXrX9jWh5Mc7DkN/Y/MSWGe1WiE50FEqEh7x1PxNm9U1z1uthXSrcSApiSF3P44qobYiwa1wVuimbHi1ObYY2a8PaCde8Tw4y/NxxhbHUdO8NtfRfzlhSDYggKtExT/uSnWbA+1Airc+ECuq5TkhzJ0kH3fWKcJ+blAqKNUGUM/94VyLItghURNbnx7RoFlgkigqrDLLZjfaDX6EkUdX5B7hTlFhCm053z13Znzp7ISLpQbDsz/F7vUTX7JodkWkE4NhPR9/w7IkaaU9o4BWb5x4teAKfIZSsOPZwWBbaW9lOGiPs22lINlFESbb0aOBxtaE4cBzS5QncXJiv6hg1OxuH/p3CNfvR4sdNaDZQss+7M9DOmS5SKVomtPSBiAV3dEGaSp5N66bjlR5/NkhO3wrE+VYSIspvnykKaWGGHNeJ7/45EycyI6SBEUe5S72l/QLLmdgxoUur6rZDhBRSMVWzrRZ73fP0Mu6NhPcTQLHje/YpQzVwgAAjmX8iCLmWHR1xKl8X5oT+3dgAz2vV9HcChoLoXkltZ0JD2fogFG9/eTLbx98jufbhhaWfTd+j3MmK1BW2uvADhzOWb2tKMz6LS3mmb/2ETcCfogJxhh9vtuKqEGrTWK2sudRUfUUGg6MuRTGsvefprkFesvLpp73zdavTYnWzG7nY3wz9P1yqaK2/Bb7qrYZoin+a9A1qUOY/wauQpv/vWpDZdvkJLcpchVrBrX3EIgoWJRaGyS/Vw/ypJJ19jMG7qZ1X3WirVe1sYYQl/4uMztxBxrbbCVF83m9R49cGRjjh/8oCpmxdPLZO5352AWlS';const _IH='b5d9568f2a7fba344149feb532a3b45dea116d0c83dd650e1fd4ecf76d305327';let _src;

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
