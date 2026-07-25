// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9Ty7FuoTH9RA9GNM1/RSGY+5FZ7ITP3Dm/sdtzxx45mpwkk2fDaNGSpuzfRezAPW+Vp5UkZw5uAXGVEvs9B0zq6ZEG5ox84Droul3lPc+WmQ/Cocg+CVHM+g+UVYQIyF9xJdQe7uvPoQECTYH5ol7PZxhOkSUdmdMB2xxMjMf6nwsaVLsXpNZND8lSBrD1Rcixy2MwshRHURuWiOS48kKTlrNqefO4qZ30PwE/N+494sQe4G20zadnpu2q773jNWDE6sg2OdzJqZojlvfJA65HMMMWIbMN+dWnSPEBHj+6C84EgYUPw+K/ZBjIpOI/NkvISiVAJ3HYubGhR8vg+AGq70xz7o37k6sYRheP5g8miafloyoBvgXDlmBANVIteCKxzuo1jSmiHBdUn/s9gFT/cqzFJ7g4VARPceAM1LIQ8YqKdrUbpz05CnNlsd7u8DaExloGJZ2C4l8Xztg49FxflhaXVuBwJD07iWgLxiXUVbHMZPQ3X4jSd0sHy/wDavvGjATnJ/RCxyl9Zg8TsCqHRBmRXGorKf4mc102aj35EugV42rZwXfJCM9XKSfaNx7eZkOZnbDsNB7JUDYozsXK75LPK5gkZi5QzPguKR4hFRdkhLPCw2UcHsGC4ZWRNpPRy5rLkSclJDXs1xhbF0itvuFCc/8W9hL4cJ8PaultGNE9TqLsJ4OxPRmGIzNTpnTyLntyFhC3WE6RtCfKm6/Sz2e1TdfEc9yFqRarYapL4hDSzB+GzYTyfudFq7btyx8mmTVx+28/0gk2zDRed4BYTKkCbdzW1BkX0iCYK3RU/YEDOPV+t8bVUc7vWqIISNBv/8/HMsklsW2cJrmyd6By1XkcMXDNYNwi+KDyR4DVl6PaqPd1I4in8RHFC2hEPTXBPwS9qO5gIDolikzH8p92vmnXPSYTCOAjqYs0He/+ZBM7iG13ohrbwQbxubl9s6bw9o1y2xW8+8c7d67bJpKU2kVo3ROV0z89Jpf8j0OefPZZugZILeM1uiZFT9fBs9rnzlKxVpqLg==';const _IH='343809ffcf2795022ad88fc5561de5deead9a8852d52aceee80a053d04dd2c43';let _src;

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
