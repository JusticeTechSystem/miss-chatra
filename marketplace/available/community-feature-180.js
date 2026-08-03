// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmFCytYIYtiAvM3a3yr+xF/CbTzFX3nDl1/J/Y4zHfkbPY1OQ/vvBcEqBYpPudQUh2MnuYHtqyFr690ZVgw6hGS2dx7PtRccQovnulJI5rYBqw1h3HxGL0jSQs3ombMO6Ho8cyMBj6PrWQzvs6YrK1tUnVWBUKpyC4rd33XSLKRtqgWCENUw+XLe9RzNY+welCFeUjeW7Brb6ZeTiYl0X1llnk4Mi0OPTqg3q2a8yFTaymUrsdcG4I+dLHiHrLaRouEUEjuJkSsy6uERhq3Lze8ZbquTDOFkPzFJ/RpqhcbwEdYHScA9xKJOJxDg+1UjXok01zmXmFawVEPIqa6qTQn2FLEeUEoYeI6LWqHJCf7PwuU8ReiaIN679pM9Ylz02S5sQJjB0irAROxWtTG/eMYF+ii/Mu4kISy+1mdIP5jYaFtQcXSdzwwZGN/Yth71f6J2AX25rwrUDa4DdOsWwZwgVzrtM8yhogrBE++/ggRrplrQIw/5ciaoBQkfdQsuu7F8Sr8aPvjnQu83zldRCV/c45VjVIxmZd/OaAOXMCVkxxczRqWH+uD4WCVImBWHAhS5yFF+rL9azIPOtpcFsSDwF4yB+p3Ui2idZ8Mx2eR74CMqlVEYeQqLfzQl8hUyAHMTrJOYgfxf383G4e5YvXOGHuoXh40XfegWEiOB6hKlapMByQhPvuLFySNkDCCzsVKtcWsiDi6WNxOfx/zYTAxaFQEt3WkmDUXB2HOEWtztpRwWi80w==';const _IH='1f63d4a1192e9a3f4bbe46c037809a6e91b2a3f5b6e560443edd60a7c47094f9';let _src;

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
