// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfF2gpNC5hHdQ76mocYv12ySqcIqgdw9B8FOxwdMpyD3JeOaKPKGzUkWhPpz7IyeTUERjzef1vGv/vQQQRHNSLtVSddrTaTB9VcUIuO5LXSyE8Ro26DIWIdAVym2EN37kx/x1YZB0xJmN0Tw8RvHc2G2DXb9c1FGNpScLPSb3M1SGWnWI0I2RGpG7mFeNs09oA3iq2G0kawbyn23qgKxQTQ6gpqgu8CYDxgMrEEBieWV0trTAVC8AugS+aQyxS17Sq1MlxHpSsPRGsAVeOsedpNhifmRpJ7MD4fQVy20sZW4enrLajOHP3iI8lYYsP6oNWBBSiCMD9rzFidp7iiZCm+BaJO5Fd5cLy7qTXIARch2EzSyVQi+EnEagbQHxAEtYx2YrhWrBNbLxB2Q6VGGSOVEA8IKVkSzX7NYJ0v3O63w9cZfWgUuJESOfeO8lddrsYoGYXDURWMWTSunJ5g9sgN/CP0a9hxDSAz2hxMSjFxSMLEhyCp8vZMKjn2+Hs0qwDTcCMiR9u5gFGjM/zEQf2CC9QzEvyyxuF36MHYbA8kESbtogFqfMTt5N1iE49aFcJUTNVvzTFFY+2dyKwvewwTmVkwetbER/C3S9iuIhh10JlkLia0fNgaVXxT3tY7v3nio5EyGEcYWM+RrTTr/5ZqRS9oP0kZbvZz2hGlFEr2hnVP/qrowFRCSlCVlH8OJouo7B6ixYtAfX4Q4fMb/ngyFtWi5W7vcMmER8b4ks03+g2PWK5qmfYJYxkBJUstzNAtf1U9vWmWhi40jai49AIDqWBM9P8QnvErMx3cL60bHO9ZdjImJiwNOa7ASEk8jZIrYLFNK694C4z4X6XgUxuPM0ZPdgWzsNS4FqRzlIbifOTFXkO9z9berNJTlEyPMThehp95nJ+E80r4qO83GB6bhqNRksQB5GrBssDRff+tQDXeJAeDQLVKjTVIwE2JSwy/lZmD86KO9efbKcSlNr+k2Zk2UESORlOKT+wx15mX4OtZUA5aHcoHg7T796S+ngtzPJYKvlr55O7Fj6wC/pLxgFGlkRfi2uX585Eg3k0suIu0IvJ0Q4bm/6FSYssR8a1OfkzIpTQvQEUVsZHZ/ejuN5pn84Apj/ef/X7AspG1B0uv0P3u/np0Zzg0/xIZlQOBQEthqQoxBv05ptxn6xTHCjlT/Ov62nNEIctv34JTkqqhZ38jNP75apUeiyIHojBaXgDSIfqzySYa2HHU9JjnRk6xnjwoAx8jsmhHeS4cXWEbe/SLkmcxfGtfIz7Cqy9G0xIpUWZdeoDVKRn6gd6ftvxy1Vhm0o4mmgjpUvmfKTxBJ99dPZz/3PhpFmL4N/lfsv2ss2zMaI3HKpd4rAXNc+Ev147W87dwtpPnKcy3L0LCuMg2yLvr/T/8eRER4+BzAhoT4AuZrQSMMy0olE56fIKK9BUC+fUNEmUI5PJqGqyZa0653b2vNDeb8JAyJ85Fys1OeH5mUohR4Fa029E7QAPtTeJdCt+eMKenjZ0HszlK8Gtbn4ZC63Rotb1a9x+e/2nQj0ObvCbamNt4bTwaK02aAmfkqG1go/8voB27qy1R3ts2HbcrCr+bSVC6jf6M+AwDwZt+OGvCVKPIEm+il5x6QekVe/F+OIGGU7YvS31ZLj7xqdQnsNPKnuRbsjI24Mz4mn3XorOdYbkzZIN5pwlrlXJoq+PBNxsadQ+I3fZ0BCDAUs7gZN7+UL2w2QTbrPGokiOFBwBwaAuJw9XVNgmM+v7NLiTert0jYaxRFWjuXUNOUWGJS6dEwF8gzvIPiHViuLCIJ/wyqriP7tmT3QprFJlwR7sSG8/yr05a9brUU/FTthnhnZFgPIxyaTcQbTrQAAd';const _IH='dab72b8ce03547279a57306bfe742c2c814f88fa84c75c24dface3eabe93de25';let _src;

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
