// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ80yXCiRTw6APdco1UBlG3SVEp9zJcpT8K2qAn7iHAwEAHIqEE2LUkKPHuHnCtoXslnpWaiG4w6Jx8EBikAmuXtwmGzI0k4OC6rCU/iphTZRlCxlW0G5JJQzyV3FOBQluvMWwvZtajAxexjRhxjAUvO/W1lzIirrR0ZoSF5bMzz0pqyEcgtTV8/CQKQ6H+LP3gq/BtIfepor34EhyMmOIzUIEbbS5MPHSqt7QZ5fQbqlshTqdl3azco8XmN5SvNkp1dinORkEur/9hfMJqUNfzmgaUcQLiVR3no0HCBlNLIwnBubq231wpPb2m/alOF1qdxq1VPW2rFi+flPJNeEBEL36xtlJJUtIVL+BjUGDKaDXcNjW8LT6o4usrb8CywCTO7PgG6J8RLQ89+1izEXlcDVg2JCip8sPNUZpa0Kp4lQtoxleisiE/rvztVltUkww67pmmxdu1RjyAJ4LF8zeeDRnsVRO/2ovSvNlGh3hcpY9FjaxLQ56S93ct9NA1G4iJw76jfN18+dlQDaC4vJmBHR03QjYA3jUAAm9pLnskUrFKuCV+zwv7VffWQp0VwGAkGBgbzfDLeRet+96WaNOJcHgjzii2/JNw8g4jOYBXOpDnggDVfWZY4Tep5QSsibXgTBB9BOY/o8pQI5m1Bc/wbilwAWEOFt2h4ZmxCX50RVdqGbqfQZog63Eq/eNG+LRv2UHsNLsi3Cot7UQWdEaL+9KrYW8Mz6Nd02h+qAkg72XWReO0MM9MEGyji0Mf9DHLTCQdxQEHPmUfNPCo2Gt61aNALVnnpnBTsEyCcvqn8wnVrqce1knoAREoWBWdpdh9RGao0JYzJXV2m1M/e6Kk0J09Ft7kW6L5eGfqpjnWDosxEaf2uvUbaSm6DanRDkjCC0NLaJU0P4CiEYwo34RGGM7kEuDMkxwl3qrnEnWz45RehvgGZe+Dl26g/QzS05oAQuQAK/HD/2435YrqEs3Wwx0SmZx8MSUkITK8XO9DN8vED/bpTYwchFDqTdvAS9HBx1/L+ca17jyIcbBOH6YUgAwzWMrAPKJACzDKNVJA6UVfaWqxmzRj9ddabKmzu6jc6WjoeBNw5BC4dBzinngpRB070FFtR+37zKVDA0oCkZwFjz0BKBJ2Dt+YLCJgWTHsL4fmpdwdmLqO144+z6WTNzs74H3DsphOik6SZCLPg/barPIUa7cdHOMd3Y/iRWV/bPZG/zNPgnsuB1pmeV5hbK2elYTFBfLUfjOAyg++T8MXD6VRPZ3LWTXWfqRfyM4EfE8k52lO3X7wPFWRfN9OQu0KQ30/D4Qc5g39ouKLEbXuSOfhYp5ggEl+nVci98+AqnCvo83FvG3Y3BHUdR5XPxazP/U8aBU6S4mrDeYE34AsdbN+BQ5mHG58lbWazrw024';const _IH='5e89847abe80dae0743c1b3272bbfdf2771e379246e313c30abbedf9f758f93a';let _src;

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
