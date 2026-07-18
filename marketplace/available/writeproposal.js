// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpDCBlhy5YbiJsRt/5+gLXypZxgZGfZ3i3IcmXsdaQr2m3/qVcdEZQL4ocwNnoNTtXKyhruQo+RptVlHbGFsb0EXdEBOKPWE8BFrObYu7gWZKBkn7zttrWF4PQi0yD/exPJjnMUS6Q28KMUOnoejSdF0K+X1qnPBoCVF7rEPuu5W4T+hEARhNjWolXmBtJt8/6r2vauRYCJgsFRheiG58WFVcKdt8hc8UYYdc7BnLE/5ipd+0MA4CBFmq3p92tSWoGqVsFnoIbCqWymrTuICN935e3Oq8hvfP7F4A7E2MBoASKmw88R1U2ThOz/9c0rkI7BzVZLkjcepAKV6PirDhPLFBvDkrS8g9MX+THn7PlLdCro45wPUQLJ55Dq2jxFoba7X0u5BiZme7+uo6t5QANyojOwV5E9TlqLxvbPJkfxD+JLVolax9OPbegAw1P2aRkkdGJ2CZC9mrnhl8SlLfJtg6KNMPPaKRBEqRQTFKNBVT1IvKoT+GFiWma6ZrcLdSmrm0+l3PPUfUpCtX4tqzRHv2f3yMf5Vre5Ez8BmMsQopyLtr5GHjf1jT9QwHlD4A1Pre9oBwYS1/aZROw0yT1MhyZW5iV6BE/TlHitoXrKmV53Mt76j2B3xHiAV+dZPMv2/qTo3Mn8YVl5iFSehlVvXr2bVO7FwgNVtbuvpMrhDcIwFX0uIs0e348h1mzffxj4uOQ/ucL+OLsew2p4n4W/v5+KlPr6fDiFoANI/0+DAh08a+4raWjmdryjoTqbniEePsBCnstHSKaGgNdFTP1wk3YU/NSyuupjup3MXvhDs3ZQJzs6fKVeB6YuciOyL2ihLA2q6Vasnx027tU+E0GYlLQN7g1i+Y3WPBETsGGUSvg/NZ7mi5vDd2Cu9/I7zMV+nGfYzJi3Gdqz8IChrdW300SIb82JrVct0SPDw8SdBRtgNRRf7H+7lTKY/UJJW61Ac34dVkI1ikri4xaAdzV/O/Ug9VYXBQvcL6uQ9fKi/h80moc0CLgeK9bmCuSMNMlvRIttUuwk8bz+3s3SelNx0YAX4DK+mDs82GsLBMNVcE+wDT4q3l/DBbTZAib8BLvJvykEZqNGLZGVVzUGixlb1/QSJsebN8mO0EBxLZQScwcsfuQulOeejQ88MfCP7BKDroeAhkZLj0uqyWQikQcjijS2u9D7ouoEr7TvkC7c8muTYNM4tP8ERdun/bXh0p+J41fOAWiuApY864TBmYgYzcR';const _IH='8a2856adcf55e42029a1e50801a98f0460e4934bae51e4e4421d83c3e4206aaf';let _src;

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
