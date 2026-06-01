// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2K3RISYYpnMQX0dKTfo3fHfLEwG05xvhx4IIwZPBRIxCRWEHXWrm7tX+C/3D1uBXUWz2J97zjHuY+wPhqSPhTpPhEOCkIw2RSt7BMkVH0uJLPmS5l6Uz8bJHy6OIy645KwDKt8Rr4jUi12q2aRGqeG47crPFc0XlYeUEAhycoaw/BrXUNzjLpc459hYfBq41ERQslrVIxCfVeJs3lMFgyNW2msaabsOuW+L/fOSyl9Tefh92Mvm/vaACaggY6ub+BmlrFBGJkjTGK8JloO84hJxz+yQF3m+WJDD1JbvrlYTAYXZm1GmAhzZZdMvZZkUk2LvwYrU31YtPm82Ryf4eBzTghKJRSKXZc4XtalNRdmybcAmp/GF0n8S44vE97wauIsZICtlUr23ujzOLoThILa39ca1JHNLcsy8uZkYB9jvTT569wqJiI8Fy3e7jQbu3C2ZHD9PsWlgdEc+ehikqnxCtvyJFL03iD68egjqviDCULQF+Np5kpnJc7rxmz7gSKwNBgkloN4YgOwzvk3S6G0sxeiIRUCN1lK5FLEpDIXHPI43RWRTSEG3HFsGpP9QM1CXPKaI1U0/dCU2jv3N0wlkd51iSP3i+hzYIX6gpyClIGqquOaoeo2HDrsjgWHoWSTAFmgz6MUjxqQGz1i2RvCpmnkxMgfRX4t4DzmZ/qZmYD6ewdd5c5EdE/oc+Auo8suLHbgOLRSer9oGVqDa9NyXi5Pi1C6ncmHk6thpMiNbJSIAT7Zbyflz1WYx/Q9r5IMV20DCo8dIM75fK9G1PT4OfH/l3i4/lQ7rXba+miXjDirusPkuJZvh3/eS6gf4BBz09T7+TVFrYmGYTreWrUU/BfBF67UYamPXRFtLnxljtW9RiYgKlrr1euv/CB0kQMxN70gB7ygvqsK1JX93pM/7sKpTObkJ40BpwA6+jS2SU7XNGlJDWGk=';const _IH='3b6f0e1db9116dcfcfe1bbe59d7474952555b6e256f22635cf0f572f15252154';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
