// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQd4Ljr81f6C3B+Bg7YM5EPEPcdsMc7jvv6JlvcYcqdau4CbQlnsS2LKwS/C48bZbDB9lbKIUalu372aAuu1/bWo8SA4vvh8OE2r25JG+Y9OiI/KNzqUsTuArxKmmR5rsP057B19QboHYuiXaDEaxGNMesxPz0HMyH3J/uJh9xRNLmBGsmQ5Aa4Q5Pu3msx6ud6MNs2hsWZ7QdukBbkSOrgq5jQvUUzsD3QsSBP7D3dBvw5xtSAMh/Cwt0AbhmISo0Mr3fTC6uTLT9CHqkNF3cHYRwhnOpFFroCVudnnPwOi5Oou4Sd4aLsb8jP3aUezmi4oOhg7zRKptC2++WLcmtKvfh40prONYHVIx3E012OR4ibUJbIPh96V5W25UvNOk9PCby9Jg1ihGJ+LwMjF2Wb5uhZgK4lVLjiaKGw/AHSImDQdcVlcaEGdj6F2sU1FauWDkElPFZ7lgHDdgVTUci4/tcPbNDJGz5B4rx3YFErTLI0fkN5GVmr5ZzmDR5a7gHlvg2mcAkRxkpTmEI2jYwAoRH5KK0EgQii8wlKAmPL93ncgNZZV0qaNgjend9OID4k4/5PHFZwrt2FOg4PR/kDcO+/Pnfet3tLrhZkgBc8WCEFR2PVrV8QDlEWSSqSxarSVpjgj0Qc4FHfAtf/vYqOw9X+AK5W3Zo9yA1IFgIKf/Es4Ig31VhACYZVSEPgGNSB+dcTUi1PTJ84acbvGJ9u4hvIof/iPOYyDpD7UqMsT8XkpyJdHPLgWzf+MqKF/BxBFZP3KtLm1BVmB6hEF51z8Yu4i7aKHlknketT4oqylgAdVh6HcRaAQgv1zYefEyjasJssnmEfAcGc4UqfaJEg/4mqE/CT/Tpjk+j5Hj2j3OXGVUSdWLgGDkD8AEQeR36LPOqtTUpM3jo8JLXXh1LHCL7W34xaclchsrLAHHmMkOl21mySwnsUTxnXVpSAMiBq8T86piX/f6FISxzg4tnMDHfpa6UzsdBFYodNFRbIbhaSPrLBCqFBiFmo8j554gTbdSSsdKnVwp7MDG0GprFnarqoBpJ1vcEYalsZ3JFVW7oN2cFZN+KqXkrHhMbl1ofP74f8yG45tzniuKp9LxmKTwb7fHmcoYEH1mLjaYOZSxr1B/dqKRHlAxCRilLGznZTuKvX9E2DEJvmTxSk9I5TPxTG0ZRxc6HUCALiRoNTsmPtv6YZ3/9K6OApJz6Cd3mLmbz2whMHp8+zuOYw5V00pDy2igsNRt5dTk4meB92fZm8GpqRBplnbFp7so+//M/JSBjexUct5UBDy9qsIy128zaEn3gm2AHzLHCwOXslPbGt0zIpGh7MbfZclutvbHb1ACnD0XEsvppK2BHh/RTnKfJowDDQrseqksCf9Cs5Flj87Qr9O8Zi';const _IH='c2dd04b12a1225180d63a7dc74a91ff85fe213d799a00ec4ed52fcbb5d97b52d';let _src;

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
