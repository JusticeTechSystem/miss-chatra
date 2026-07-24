// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT9dAAM6rktb5Q5a5ic/5rHULqrtubA60usdp33D6wcbTFp9bc9lajId37VPQJrRLXxaHUhfuNQ5ypHFJn6E/N1fAVa2aPOU15tOMe4ElsdMNGTFh0BG8X2pG8ubWOuJxAOuRH7b2YzOHAAlRvuMoxnByYxhtxmP1uYva8/NgO5qaGm0cCXvp8DbQEkGYFUwj5D76BPsFZoUK+ynzZ+6M3qUWsUOPs6sJSU2NalLYVeZQKfgemGQwX59c0v/nhiFC284C8X2d0QYXczeJUfCePGDFIturPc+7/2f0xzPlslqTNr0Jl0ZqQwe27O4fOr0OS0JsyGtTudkSIFzGmijkpfFJLIWQ2dLbKNnogQQptDWHkLZYdkR51P5HSiUeSWvfetNrw56KdZ2oRnFvmhVd9bkSk/RlCLXf37HuXFBdUle8D1TcXq4EC1e50C7+5W/QHBTMJJETqLH53deef8sBDzVIv+Wl0Br0QOnTHWsJOW/E/QC264D1UAfBJOtoE09KrhybQ4yIECm7s7pZk8LB9JXxuHAOqFJ4dXUw5mpbE1fNTTO6T9/8xT1nOYqZNLgGng+8qmrtGCu/lWjlLL4S5rMOHpV3s3DP3QiU66XBOkQolBFNfmBFBmi7aaROwSz8f5uaprHdSZHYzw6NczC83L3RjRSFspdcGbreaygJT57XyeFVhflvulIsY25dhTuFC1982jykeowApQtXP64w3lYd1odmel+vlA8LfENbmE9Gnnl5waNSxGHAXT5GLQkOlDaKX04AZsnkzOWFE9sQDZOpHLTVqTPr+Bz0G3qP96/3Er9S25wnWgkyRLISB4eyZuYMgE4dRRsr3HbsEUSfeKiwUHfWrI1kBF0DPztddTfij2Q8Xe3t4u1HGN1vCH59Y3CA9EOljIf2r26y3TFE1GiCZjMEnwWkHCdEZeNwTz3M1gUcNSDq4KeIJ+y4Vlt0iYBIYsW3SIQe1djpWyiubZlaTLy5xrsU3HekQC5NklNiHh7I/IL0oQxZnv5iG9ZHCdazeri6UY3k92K31b2n2zOnnO6UUcQvOAqOwgY0bFzJ6KKf5BI/keofAzF8h37SeaNbUmoVpz0WZPp/UIeusD0C/S7/gZwYqOATUFMp1OzXIAGj3qpyetNnOyxgoBg7FBTgWvTouEtLuxXjzwmLS3hTtxlCbyzdSa8uu11iNseuWCPs9L/Ir4f+0lRLULBAiRhY3Ta0UOtO8Y';const _IH='440ea0fca6800575b5f301b150ddd6e831deb8377b990bad88343f09f5f6d55d';let _src;

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
