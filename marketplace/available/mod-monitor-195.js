// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpumx94eV4rqUPINAfa1Ql5TN1gOLpRRmHgw69fGR+a64jftF7uSwHX09oE3r/lzuhK/mq6aRtVIOHLb4XELGDwkkbDD9Y7EHqDlV9njtCjS5GIHhh4ycIYSrCqqdanRnYuaLBgoNJlda6msrkm1uXHNUbmh5h07WQ22LdI7T0JwE9Rxq4OMgv6vRYQ4K2Co0drCSaU2B9miJY2srzm4m6/5T3OFkQEKbDh4drwbkGUYaFlRjpcUn9USSlzTtxgfr0ZEWW0kXaNng/Hv/G5XCpDLwc/dHtHAVEiqohpKSuA6grrALxzn0veB1a5vSlXollhSqaC2/TpCgMu2ifIQYRY9FXB9fiGbbCHdFxIoJ2inwSXB2i8KKSSIdrGSYkuY1It/jW5Qo6SCEygc250XEFj8W+hglkwCxKYU/Y/L3y7QidCpJBb+AB32DUvsVFqOos8nWuaNmjCQsr40Gb3yKPlaKd5T26uWydNqNV0QM+e/b6e6W3VunejMy9YrrcQqsoHjXBMfcll10AKBsdBo/NqFeSbfWxgleO312Nv8blML7phB702CiAsZrcWdEuHyHIT2tkDvWKrPf+AMXVC8SaLyStnYyFpvDXn4TCf1EcqpFT6HC+nG6aeqcpK5SpWxCDpkV3sbtXQHrhcrltY3MXhkTntgM/s/NjBfhEk4g6jMTHoSruMgaRlQ10dJrJUfrLcvVRdTTmtrTsKJOp77EY/ICRwIluCWLehWi+8yMAJxotGft8OAvoHNd3w+9uODi+eDTntuKhsI7Jti1ds0na/PFHq3AzPTV7aLAescICn8hcpFSxYUaPo4B74hFR0qtFjedU+/khw2PMR65xNCjzal/EgGhlPAuI7jdfusK1Ut04We9vPZHBtTMKkwhpByYxQGK722lOQEK9OjrD09dmm5B2AuhWUgeatEQUH1hcUCCoKcPJ62NBBSqv4iuoSRPgUN64NYHHVfovifZdClL/KmzeLHHYnId8qkK4SADnws2UPxDYq7EwrIto/MQTOcf+TycqFtp9l2b8d0XxAhOpsxdHgwv5dPbX+6KQr8tt8lM4ooVzG368V8r1LTBWmUA7jlc302SZpeUCwGHZs/gr8b3X2xz18P1iZl6j6m7ziJjfJQ5JhE1Sqg9y8F+YfL+jBG7igbjZvMLJ4lYyLfwJSA+vPIXum6KskDDo/BQytcw2056rwiBUAB3phtFhHds8QI/Xn7qNKtPa1UkgsqzBqaS2+R2+nS7eapHHqlYBogTcKrJ8baxLoZJuVApRxTJqzgZMDNigP9XaRQT0A/tNgNw4lJ6JADmX2KNDgvxTr5B0MVr7azJRppWB1qxv9kqG7WF4j/n1YXBCyET7XbuOMOGpWJYe9vahVnLsVWhzmTj/z/Ks+hXpg0AM/3tEmg==';const _IH='a665c76931808238071fa1867f320687ebc198bab2083e6e6e622290c050da95';let _src;

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
