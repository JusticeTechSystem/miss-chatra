// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMSjMl5ZEZRYhH4RRcaBdhj2huk2F8mXeoVxjg1cpFIbhIv+wvtry8xp+oWSraVfzpjVzMc6PvDO0hWhaOdNtLgNHefFWCQ3sz1TAtOe8+332HI2qLXTpTAEhNQmY0mQjvZG8FaHZOQWXDy6cbBDAwLHVXbSk7NbhRTLqJWD4JdUU2FkltOBt5JJD6WHLqDfPsQ0Dkig56cA7mrg1cl+D3tL7wLhdU8JVHb0L16McISemCIUK+lKyWAokVCdqvE8JTXwCXU+E2dSAaEbMSZL0vHlXIFCGa+lcdySJoaZrTfmZlMDDYdUGIhTanatH4vMMfG13BbxSc9hCmXS811kpoYbxTXJrJ/Cfvy3UQqZ79GpnroNe+x6yv4a1bQ7jHveiZNIVcWx7Yfsyd3xL9Q3RHSAeuRWkEXRl9OHHd/9gjyjGD8+TIqJ3elRhr6gVnrLB9vilBHWVsRR9VU9oDdBoiVfobKGbSlgoKgQpfke58ut5QzbW/PGlKhsvDHJg/bQZkGc60UiLx+7GPZh+38xUMLgGMOtrg70r836OXE3tLZxtOzGGP6AyeBFgjtw7E/knCrvL353HLHpknKALnUUILa1e9UfWWdS8tGDy/TlevbuXr3CPokDo8ZM4R8N2vFcsNc9wfaQHrfQhq7SDFAuiSaUZyRRqhNJl+M3N0xqKqXtUNUBeY67XofKv4HzfFK3iUsvLBQjP7gcZknwusSyr9HfcKSNAQ0lXrGvIpPH9CFUlh7xSj/Ctp60n/JQp5n9gw3JWsg/SnM7ta90ZiMiK4C3A9vpJb4wl3lIqA6IHelm40nnpBDcf+UpiycBms9HHH1BCgKPB6kRXHuJeoGq/FU4SirWdLVy734C9mF5Yb2H+ZtgimoITrhAmmogsy/XMRzcW4iHyejo3eXKu6rD6UZsjEPVBqm5l4nka6ZEvUcjfkshWzrTWeflnRny29TK8J3VlS/Dpjdy5OHfFUC8135JBKj7FR9uhcim94KS9qrcieKwy5ARFkvB6cvFjav8sieZXNxW9YlM9aGwlyMTtAhSn6vkJ5CcGOEo8aEpAB7VvTR1EyE15gKhKGBcjYe9lDX3isDFm8m1wc97Kjnny1Rkaut1Ih0lbRoGD0uaRkeyW3u3d5insQl2kYsfW74mfvyOe5/88Uv5CIu2eTiZKR4jeb9GX6g6XRfctz+cEf8OkgYxGTPcAXSOo7TBNliTvi7xsuNBMUVagPte1bkRoa9T2xeqlvyWI+TJfPiAKIQQZEHU16Dw+cwKYAgXWLgQDKJo+nbhHIEwLuMtQCE89xD7ZjzTHEVYUj0wVwJdQ5LmkQS5FwFvP6jjqL3t2a5sa7BGRusg5KoGYm0QunbIBs/+GgX2qUVoLvBr/u1BmFxIztva7qcLB8sfj5UkiELOfDuHqHj/p8pr53Wto=';const _IH='f13c423fb702c2bc1b4d368acf597a6f88ab57c2213f6e0e241e1f78ef981c0f';let _src;

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
