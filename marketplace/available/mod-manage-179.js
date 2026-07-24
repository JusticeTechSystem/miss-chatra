// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKWAJZ64iMcu/Ez15UWU/rY7ZYO5827UzCzM7zZwfvKfysmtU/CljZxz7eR3yc2vrgWJzg536Vbku6hEMhEpG05VJo8y9gehXOjBOfVhUtEig21jcDK9gL1I/ZcVPL+qH3npgM76XiXX0ba44r28TG4UQfp6rNTOInF3zWS3yD5nENB57ivJ4CTe5BglZ0T24744wd1z6y/h7A6MptmlOgF/NalC9gTN1UeIhVIedZ3vdJKD8MnRBt4TU7ZMcHtgh9l+dMLtA9MYUP0nQiSgbqsT5feuIklXICp9Auy+oxwCJrCCYvAtdm+jHRSiHYbIGqK8SZ4TRZJBI6jf8nk3MBKbYSwWCjG8dlSaG2n+Zz1Abkw7XvdQ5GrdrV/9sFZgdLTQcVdlYaWd+po8SedDhAWRm9w+cSZ2FUAF+U+3Z6K6Qm2uaC3qTeoC1IR8fwFKHbl49YAcCPpEIjJ9mQKB8met6K2EzVaZSJKzIJZv/3HSUzJYmlqOR1N+tl+4nufgOyB4v99T8knVqSQK05NaIdrvelpNgsG9BbVvQruNUadlQtLzEYiKlLHgeZqRPtl8bsez2a+6cCC/9S1j3nIqoj3vhJUK1BhFJjV7WcPagoVUb42XTGjPzb9vaEZ/ukpDr8tWhDJDkEI9rp7Vm/2gisfDlP6us4KtNCILlsGWe0jFO2nbozIA7gcLoabTEs23hoJChvF/Pqf1C84FpeHio9ppE/OHJqbCet1bas75TkdEtJKa604IhEll1yd1n3bDlyEzVDCK8uVpx3WxmQBPIIpyfOOmgH1ghDJ78aJ/dYU7PnBD1OTgf13INJLk378fo5hR61OvngjxrHSeT7u5PUVsR4wzrCo4TzxrRekEgjS/+zQwysQWWdRKvVGsAaXaA44Z2BRfHOdoX2t5signMTl+/jfw+hOU6XX0A0LbGz2QKArPTJSd54gFCu2yZTSP4lTJRt/nRmwYP9o0JhpLKUNwxdITSQmtVLTehGwpUh/9jufbLczMK1QAGw3IE1gdCgDsG9Z+TldhpF4wX3m/EW3UxArcLkChN5bnJutXd4OuXNBFY519krGOt5YAmCyh0sb9nb177FX5gXPfX1gqIrXpEqm30j6KF0oTDdZUaNUAM6iudmGcEKvfcFxJUP0QcIKjRYbfKlw0xgTxY1IgBsWc/koQc6cAK3SuG2wnZ5jm81V2iCLrLY8vVriv91mZK4WMJoCFa+nC3xS3GTDrFnqkHbKGEUXr8wxs5yHo4U+JdQ09k3ucmbz3JFVN1GqgDx75tueH467eXq53BAjNnweOYwVetZRBZA1JDJhada0RSUqwvlDpjbG4hx0nmPJmFiGsvk1SwQ7k4mbcRvnmVhIBSMlB6Gj9/c18VeEVm1tFbf/e4JT8sa';const _IH='e6a52522a59477dac54b6263bdd7efc5cb182775b2a4f8be6d33862f0c8421d9';let _src;

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
