// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWeYSEyS8uAOhpmyIA8DZbJ4RnbuHBh5h93Lsr7QM1JQTTjxaXJYav17LThN/DQ4zJAUdggbQtmViZkz1xJ81mCF4lKqKObO/4o6dt4S0neLkhzfZU5zJJfMckIA77Zytw5w+KBPEnoSEGflUaRA9MoyyjsKdRwGGg2Qb1VFB8QR0uLEq0en1bt3XiarR6ZalGML/v7WKlzwFdDESlAdWCcVy/wm60TWFmBGQ0wcYLOw5Z6YI8uT8yiWxGmfWN8N8HcwFgWhbXx/vpjvcikgA9jRKrcp0c2lavM3xP3rEhRjjkjDNXFfQ1ghQC0MZhKc2Ur91JFqiPCuCa31gn9j7rAz6d3zAtcw4I+HLf5V32a+HetrPTuEQjHfUJo5aOPLskXoo4oGxvL+ejyessT/yGggkbeT0oIyLL25/iV2TXWBZJnVPrT0K63L3BLEm7BiIJoAXiUOkLHS2tYK3dBbvuX/V6RDkyWoh3dEYp2vr6By3vTnyzDJTCz1VJDdE0mb3hs2CQIW+f';const _IH='9f12f28fee7e0be3eebe82ef5229e23678ff805880b8141bac83fa917385443c';let _src;

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
