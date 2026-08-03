// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4HX/We/WaQdXe6Glc9cWRIZ+g4AWo8XiXbf1R+MF7HJWA4MyXU16Td+q0MYdiVjwmZppU8zEp++1vAiZBQdv+tJKK1YXftZ759ERxcdn/ynxBSMCsOQFWTO33G9DZDuqFYG0P7Db9AGylBPuC4ZVN6tDlPgGG9H8TVcIleIgPGJWkTTnsNSwttZ/7EnJp52WB9RADjWcNyVPj0U51pRgNS9T9JBCCJ99UfXjL9QPeeUmxBHg3/inWwtuFD1LOnMcZ8ByOq+FbitHrSzgrXhQ2HsIpmDMDd06BOKRuxS6Lxdr2Gn1Q0PdNS0RjQKV5sUSSUeQIPj19BK6LdyJawYwNIXafFL3L88ZsCqlLNjsvka0b+Q0w72rnWy+ivwuxmo0azHPZZ+ZMB03YXHOcFWJvb0l8v3Y0L/gZdY19nY5lNV1dqZDJx4uXfg5Z0d9Dv+qXh/L2hjETkv+zTw+/KuniHkDpYDlS4Utxww4VE8bZrSb20vhEKDRU3iYg7kCne9dHRs5xZBwziXdnhttV/az7O35qBkPfl4EbYqoM4g0XRWCelpwJJxL0K3oSjK+vAZrllTzjMn6lc644ggNkV1f9avGK8wNKf9b40pHnHWuwYlHYr0M3FfPgg2OrwIrPihZ05urQODQOpu8CT+esLggLLlsc/hx2vyQIGOomms8Ng91BrBwyKEqIq+qK0vSkTmlakePv5IBW4wmkqVOV4TjsPAvJiOl4bWMU0uwsTKka';const _IH='494e8c02b30ff7c660b6f33f5570eff4c713eaf2a890a04e621935e0266db19d';let _src;

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
