// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfmR12HOi9VndxQoAX5KGosl/l3V8iK+Kx15QVmiUZsPMQG9qS4A8s6Csr0+jRKr37RXvCbCzrpx/ZtxJeV0hYLRMsCl8ZERQ9vnmKAq2ZZootm72f+IFZj+/7oMWIVEItgM3ofTr3+GcSFfNT2TW1sqOqcPzbpGQSwn2XqBZPFR2vHSDCPMY5m0cWXxRv2cOzXOyVJs3mrynFYH/krtLctOKhyp366ZC25IT44TO6Mj2Qw2jqSg7CVZJAoZSUwLra1zGPMbG+n0uIE9vwzyMYa2JNGZT7C+dewdl+RASdd4iF5c1Fd+cGGkGaVs26np/nc41XwNUiYYuIHC66RMAd/hhw7A2xA82HLARKolkNkcnTqQEAXUih80e0gEyxEb5404Qg9qDX9SAEpwgHHWXr3zpwjsBt+RuDlFltkDg+ZVl5xA4MerlAOjsK9qZfTxCm4WG0bYu9VGgrluKqvwmN73lp/mKTWEOTQMv77tgo0yzlexAyjEapv2rqnHgeEKDyx/KTQnvV5fb016fkeDg6J03FN1EHzX7zOAq6aAohfq7hiioUHLQ6Rem07D1lAwBS3w6bu2TlwEsgWs93tW3OO4ZhElfqgOusdsPEzM46gD0HZAouuCMf+nToKHsAXu1Lg7lvW9mvQi2p39LEqVlB+6Mi1QF84pnCsRxo9cktj1w4c4sG1Iham2l8eqDkoZlIvmtSS6ywbs7WImazibU1cIVD19p/cnukE6mOSVKaExIIhl7XPktXiTjgnYiwLZeRQVu5yFJfUk6DnSPiCOC/EUPk/8rogp/a1m1dowsy10OBjoqwyuy/JOXWohGeaC6k69VfD1DLxTwdl465ib6St8Ypxw1YRcm744/wpVujRgWh37T4da/UQbs6LYr3+bX+eSc0RJ/r1dsLYIiVPzIbAoGQBI1s7Fdz5dfNGgyL9+kKUj4Mxu0Mr6kJzSX0CL0LGv6tNWoCv1yQkKtMnJZXYygjr2QyTraAtztIRcmsevVbW4jWq8SsM9DuajcqiSegnb33lGH7gArqoFuHrH2h/6MrVjdGKi7UJKQ7LPskyvcsuZqC7bttsNUUNMfohpDH8eZHRlfXc5wXzu68Cu27S1j8U4EKlCPRRBv0CP6xcTmE4RJOXceJcMi33Nl0mpp87N5oiesEfGcJ8j5KkhOuIy94HA0mUZHw1bx6M5DRprGig6ZeQ8uhizWgR7PvFxRW+WSbE0pTHNqWXQTeHvPWqRDHMXPqvnAgOLoc1lknkE6KmjhVXkwODT/85ch4jhagYVzJJUQze2zBNXwinaeYIRWuo7N5W2Fq/qoi1FQaJojY2tNWsZkS+MnG2qsGf8EuCDtMGs8M3ljVKEEcUeK5LLe5TJafrg2rXnM=';const _IH='e8952664c40013333310d0dfb7b7b0bb79a977dfef878a959b02c9dc5df1c552';let _src;

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
