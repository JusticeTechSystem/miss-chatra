// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ky+BCfSqLLrw5xcgTpbprTManstjJ6KDCCE8Ngu63KotVYqTd4dUuzFHs3Sa1zNIDAS0IuETFObNEc5FsEpHoLrY+IkAOoTJLM7Or0y+CkjTAQxw22gAJwjqxzEJ61hNs4AHvosSBs7hGjBF3jQd3IFl80Ohnvk6orcB1H71DFtVr5TXaKYavq0i5P7hPIozd4rdHSJvD2ki/CP2d3R+sjsNJug5aRT4OSEfj7tz59lS4GoHYAFI7mEZ1pIdU8Jn5rZC4aLK8nzueNgjtt9ck1tidLMxgIDsA84WDpS6cfldKlqOM3dJw5u6Tcu/Mb/qyMlvLUEl2q2Evv4zU6N7Dp72PHgdSBhRopOlf367t2vPfxNPQZ+DO+FT4tvoZ8Yjp47f/LmDmecSkkDGvIpHLhoCp5aJAkTiRVcmPqXk0VlsEbsb7FK27OkldgJlJclC1P12UneR4n9/m3etamYMaITCci68q6tOI31IBdHU10595rhdBOlnrWUuhVS4XYJqwf6+geCjBd136N9r956bHyaSrM5uHv5mZbxoMypZyLRSjynAmxi1SuaorNRQSX3yHvyhVSa0RMPdDeYcfTFSGneJ/iQM4Gm9f09bszSvT7U/f09zkDHRAHTDc1mkUPRP/basOnkGIN+NyqBXVCBgeEf2q8WjI394haPV2NhqsjsKW1dDOxiKKwmNH4OQBXeKhRN1aPt9SRcEbfyO3V+slo7Zs7ae4nSsJsEovCJlX1Uajwn/KdlR2gRlcT0pIvZi8fd6jjSStq/WCECUT1NvW+J+qNm5xEE7s7GqxCXRdE6VHCQXJNMuoOhpqvW/jTNJlSdM85k9+GO/7kGO6sakSkirOSnUonctVsgyZJUvkfz0gVdhfwRCbdTC+b698w9T1WN9dyAJ7ABYBP8Rshb/Z12ZNPHl0h34IRe0N2HofgZODVYlcDNr+vbjV/g=';const _IH='8ac4ba0a0ec7b4045483a79fec4708851716ed9acd382e9e51ac90f74ff9af65';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
