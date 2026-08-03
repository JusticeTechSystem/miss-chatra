// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRyPOy1EZ8OiK0yvWolCd4V68sFrkv1kS/Je7TeQ7nW2Tk3iHMdYa7mQQc43pR+MeHJoaPpAvkL+jBn28SYCSYemVPwSRb7O54JO5qZdImk6YP0OsUt0nuQlOFH0qtCDxg5v13piMPc+1wEULEyPc7qVW5sILISkSbLs+TJvuYw+pgigkbfDXWssYMLk08hH9ExiGSIZzt7j/iugeNy9SiRFqA6uCt8zg+as/9Xa/JK6vL05aQhhhAJ+0OznTNu/Txr6Wx1qCOwfW1A2fuWBl92IQuvjmDn2MAG5FUh5LufRsHU8k+y0pk5qO39IhMK4f8RxRl4pkCFFl0+BsVnFTOnSfY4+vCnJunBYEIXFPqRoRWsmbgmhNC2pL88nwVJWzwiNeE+HZWs0E+v1647FYT0eURoZxTgZcjMpNWKPkTMJV4vuu+StCCoCCMHhFwEdrOEO2YKuu/W50yPlCnT6uF2ZggwXq3cJEWINjWT9nhBvBi1uy294yQ6P8oPBva3s6zSeX/t4BDbEezTB2u+CmdQzZeFbSXYOPDHi+/+yxjGXFHWJuea4uiaybbQLHu6/qliFcngHAWXz1ojIXql5WCiKY8a5Dn/J2gOSqraFDBKlfMBgK5d0yhoKLGHE4JUWGlbYmf4TUZXcE8gQdlLI4lxXdLTXBWJIdSi3K48ztdOAdevADYJvCtm3Sgw+EfSLobZL1ljOw47uIRKARitSAKtUkV+q92BnRrHQ9eH3VduXKVwmMiCAt3zbrJ4QSfNF46fPvHT1lnJJKKeIWZgneod5dv5C3hpokRcE/y9b7lrOuS/jfEQBvupDTptPyxIb162JjUAQkZpgB8hVVF+09Qpv3BRMyf6lfvwvPILhmGvLMegyMeuk5PNk4wsA2tU7UhzIUM949v7B9AaUtzGkhTvD9/vbgjCdYWVc1n730bXzbh/NhtRg4J2hUU4yAEyfM1FifLDTXobCPlen1gnxddsdnpxhEkTSkU+BXf9lPj8DMn0lsZWCldYlqZY';const _IH='84beadf928230254e7060a3dcd02517e2abf9143314e81797494cfb2525a14b1';let _src;

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
