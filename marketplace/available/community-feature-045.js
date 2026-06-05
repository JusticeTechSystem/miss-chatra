// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Itwop+P2uH9gXW9Gn22G+IcWiMOSCVL5tNRkLMSA5V31zokz1ixpvl2lxUP7PW590NByaII2UPW7FTnjZs7WhhSQXcsPq4AeRJwcV0T/wSdBuMoWetYIk/EHgARbZhVPPYXpamfSqhkCEa5ZMRsdRX0tTiMnj5aD+y1Wd/yVax+Za9hRc76TukZeBu6Zp2sz5LB8Y58UkUCdondLHR2YcjUxFxyy1chlsHHpLqYKyVAJ4QPdTae0cTgDyaUJWb58Goil03hT8ongUkum0S45bOBuqjCCJG6zLPIqcyUYT4hsehDtKwtUjtm1XjBHxckJmhqqkncblUMemxRzbHCz6CZGJNW7wJiCduy0iedDzatVs889eQfrPmXvvuFuuSQawRcvh1Qvyk8o13/CO8znyt51llzqa4Lu1s9sbiPUlFPmwWg1lYMatWp8Nd02lMdynY16RQHn3ql0FjLeXdpgKD0bMcVGAGAySL00qgjGugPe1fgR4ml4h3phcBfCHPaqbOfuL0ieI/3WfdxMZHix55N3y4Xjd64CJWq11iTPaEBGcBDucL6VAtn2z8VJvTLXpeXjDmI4hwJ/4JNZxxGSXjA5ZzgBH2U/gnn1VRfwOg3BUC64XhjgXDf2MXF5E2MijwADv2bJsOcO7/k8CYxh+30zn/BwZSJ7uCwgG+0YJXo1K2oxP7r6IOu8SMRB5J1K4O2nJThRbEWEXiI/wTcYQCdeMdM/GBqTMNkFP4PnGzBKOYafpjM=';const _IH='178b005a75cf79e6d7a2e0115855483f6bbc1f402056c1bfaf2b8594f43878a1';let _src;

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
