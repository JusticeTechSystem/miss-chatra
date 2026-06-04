// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='knSrG9EBp/j6CZIbSpwJ9X+IAT4s5smFNOIVuDMpw8uEq/3UOWbjSfUVXGfkg0pbF4+ulDPvRks0sg/4ufSbBzZ0yaiW5XM0YdKCg/YkHj7ngxmB8M9ZSarGuLUFXkjRKzL95Tc1Jgrp+8GLdrmvWuJ0vJC/c9Rt4uYW99wuhMIHq/QDRr3RX5IY4zUr3wN5Iu/zOWP5m7YuCwiM1RsuWypvqU8sb8m518C3m/7cADD4JVc9P9LK8r0CsumWWTPjsJVcqtAmN7YaxWtp6gLDQh2xpHjaIguSoSrusvlI4q7U34ILXFaDKgR/ZPR3S891EHNmUmCp1C0gm7t3LLWwjyc0+k9egVaz4WpytTpZ6rhONBY3IDOdaehp6WhkpS8TSHpDR8w8Vr1+JcWSHShxe7z+ozcIlCtYROvYLN0PzKjE8Ngi3HniADzIZk7A3NS6ZC01rU+L6IK/yiFnseoNe5o68sTyaXknbZzmv2XsM09MMzCvybEWgGTJL6bAe7v1/D7Cz9EvYfyjyp/iP2e5pcY7gRyoysDravXUANo5FRep9zsLZ4TryCqgqVWwKjVl9yclFy+FvNG8sZ7TAv7BOhxq8pC1wvGaYsEx2smEv4SUKFS+6jb8+yHi6nPg2CTRl2xFqiH1uly9FheYG1lxM9/CpbZ2LH57W+EQI4ClRlRDqS3MqiKwkkMqwdrkjrcaACCh1khsjBCuHMv44DTfAVlpNUBYk1Yo5ZAviMe5CvbYVqRlWIHg0Pj9U/QjW6KhDUb2PFhijLiNH3h3aFH+PZD/5/DXCdf1u5rSzVy+FXfRb71AcnIf2h262gtKxPMacI/bMu45Sz1oMumhEsmLqDt7SeR7nrDrWD4iSSBygzgPxvMl660IL3fjD6P8SiDsbBDdIk1VIgmzUWic91hmPM/xVuvA8mgFqbKcTsn7cK+518Aq1DP3bipxjJVqFofHkvMXw8gfQSOcaqnzMTJghPPB/z+DodWJUNqU/1stAkvA9K1fV3wCWZFTJMNP3WEncvMXUQ3q38+by6Aa8m7WQo5Yw0BTJIKRMuLBnChm+tc3veEJligHSLTxD+4VF/FvBgSJRGjREtklirl/xoUfNr3+Out/QaKbIF7mbhI4c2CyL2By4tyc0N2w6q4j4e4fqLwn/u5SnRbs1cZtu84kO/xKjzEFEOW/wa9gDauLUSpbM5SqxMuYsCuhfePgutJ/';const _IH='89da7f37e127769bc8ce2a0382229263a87f087f69395158c2617e22136ce7de';let _src;

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
