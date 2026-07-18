// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSB0Zvdc29oZ/FFQLay07lUuuisqtm+wJTwRbKumfmNdeGf6fO8qyFLeMEHPDZUFMRLWLbaFN5yylaXKs8Z/g5W2+XeHQ1C6Cb0Yicaa1eITaO3Iht0SH6KfpTg4GsXIP7fQUcdeSwiP435SokyWy6yiYbTb1sXDn4gi3qTMeANiIlmFSnoUjczkPvTlcpqFcTpYX6C8WxMQzQ7gssyXzpcenTHuo+jGaTODBKfuMs1DeOdbclWZDEtC6Qtc6I64PdSc7W9giGMNwCty8dESSTOjwb3/awVAHzEcvZNPI6cHyna52ACYasuWRn/HK49qoE1Iycfsdbj7oH01cP9ZeCh9ro4xXnWGyb37KjnF8i4xblcCDKvzbWcICcnCdkEJ1zEg94qNQTCkhHndnlTNtaioVX6yNDM5xt8LgOgEEv/CrkGsUh9pHCLFarf9UaOQ6ifXUbtzRsgWXj2jhHtXT8ME7x0vOC0yWUrMxb4Cft0oI7VCI1YvW7vf/6xPnuCN+/hUFLr6bmARvKqmMFgJkIXQKC4SSnD+f66m94R/RgEr7Oidqbpnux1TCx6jSRkvrzCnI6qhfC9c+uiIHzf6UKf2k9PnUoMc+PotGEjOL7fHe6cVoJ5zL17ZQNMGBV0hwK42avuEBNKYcwlEzK+5/8zTJv6yh18VpM5M/wdcj00/HIVDwmQ2JywNk14OPWA4rrDtCfBwWj7K/A09DkIzMAmtkwR81pKNp0FsWaL7DhLXno//GuRdHOEpkI=';const _IH='8b579b53408a1deaceeedb40742d4f428667043f2a698a0599b394e2028140aa';let _src;

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
