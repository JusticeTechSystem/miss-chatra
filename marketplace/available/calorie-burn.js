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
  const _b64='T0JGdjTY4qc5rFMzuUAbjmqUk8+cG4vDHzS34O02MznKraTDsv0n8yIYPjsCveHCO8KL7O2UHC+iyCM/MsfqjHsoYxgKQS4cU1x6b0ltIuE1/m3F3+e2iVLq17fog3Msdab+yAN2H5rvOXm9KJRlynSG5eOCjhkANgjWeCQ1KnQjFNMIX1QfuwD0gs4ZpsXT4zwnTySJu7aamKo5nKVBx9X3MBRwhuYgy4LVWhzCqAhKSEoFn2Tejo6Alc5chi33Dkm/n/7DrnPXIpGy/LI5Dll3knlDMDVbMieJR1qOfDomcBsRhjxOf1D/3ALinVY1eF1fRlqDbOWl47fVdjCjjGNFoY2RTu8gL7kSMFVpg/xM2ZpH/npaT5HCwOXnsBZlHb66ONCkCTHpKCoWokDsUhO1H/hxTAxT3YwDm4wW5vcEmXCTQpQ94ZJJIfkAH6qS7EJq/m7BYa4cP8i6JCd6S7vTulTnWZULX49Qm6xFAYY6Wfawr+/TgID2uFG99k770u1MqIDb2oSoHQqA4PjU0Nj7EyoyWlbbS2ko3G/qLkijdMrHbaA/xvn6bc/73fUROGXYFzjpgsj48R32wkLDWxKzxJ728Tqi4yoXpg9Ypha/XzqxgOuQunAvg91r1LLhSVZG+4kDxpwFMaq9jKiTZdWg3h8iyk0chxsIwW7orNHVDq2PgMdeP8gmrWqLmpIcWWLtcJ1tOHIj/slWlzhlxy02oP/3XuREtKd6kJy9SCH3AUYuglb+h6ws71rvaW4WjGrd2tHhhQETyDABSFueHYIuiPrXXpWJC9OWj90tRpOwsWnOoXUIWFtIksXPtkF+WLjLPV7GeHlDa3q3zrdQxH7gg30EnQ+nSrDFHx+eXj01vCeGuRmAjiXx+wsMP3KJl2dMJ7VndkPDSefc9ccc9vWBackQ1xUkzGCWBo1/OtlfxktH2Qqn+JqhRAKs0AWr0cWqDZMVLShLT9uKf3a5Fc55LX9eBhDmRASdedWcMHF+jGDF1PBa2p/u3xbYVdGSsCJRs+IIz33qwJH56btn3GTBGrWjPvqkEMQyYGQljBTRB9BdCSZ4vhNGTn9gAqPt0NWINSJ/aQg6TbdD6zl1RtKE+vwwkyJc5yES5KhhRLhnsqTXANjmzLnQUltAm71W856cgypjy2uMg+/qNef2TkKCLotUprsNPRA5abGEe5+NkA0uvpRZlSN3n5tNlM15OySLpDO57ObNp62rC8byNCSuB9szZmQjF94il/DgNXqYWH2pPT+Zw5Ebzx5Tm8wfBXXrm11ztAd0qkKXCaC2W6hF9iK8VgbD+pr/NDIdddQKhcbY0MK6uEphkDDgHUNEUwrq+8O05QJGX0sd7Vda9ip/bwB4ELbEYjbOZYW/ppokzLt9XrEklrAU4JLlAAk8oNf0GSoIgJP2e/D8TrVEv7cxJzFQ7mUsxFpkbS1HRg0=';const _IH='358216efd6a28f5112db56910311bea80328e93cc3fd633203e2d2b763d07d7d';let _src;

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
