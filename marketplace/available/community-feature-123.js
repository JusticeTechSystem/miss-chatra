// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTI337bjmO1ovh4L5v+7b3sYGVUxr3fagEJD5mldnBbijXcIu15bjnQGDOF7ifw4pdiQumJ5mAAeA6zuJuDw8nkgMrHKhPUPVmdwHsGznrxwMjTsAdAws7mkJ+Vfixci/EblXdTfjlJHI0Rg7aUehEgkrOH/7d5ueasxenmLcZLOBY1UhlSJeSzTud7Pe/RT04LkEeDSVoo2vTYSkcsl7ZDs0JcRWLtHvxZBGK80zBx27n4/Re8LT09iehgQEwsX0rHfgD9hDVBaaCDZAoeXB3POoZ9vep0svt/mccVcI9i4qeJn22rcl8idiXWIH6Nefv3ZUf/42U+3XLiFcIH1bytXukgj70f5zDD1BZHyKnwXeFXnYFKSjl591iMIitQQ9Vi4kxztW9QSpvcUK856ocTLelZhF7btcjavbtZGLkWyzwLuLs4TIwplSAoeY3Ve6KpEF+q8bBJYyFX62EK8oHugDUoetqE+IKBsM5fYen8tCaN2nlLsihArWu1Uec+m2EUJzckugTrKstarBVuu1mFN9Dqq0x1jOkmLxs4gIr9yFCQcYlvGhKJaZ/IsNpd4+vo0KQxQR3eePy9MjlLS5LlLqw9Wng9O+e7fXvTFOvnQ0x7mOEMuKkPm/TVYLtsykBdBwV0UbKMo9G17PvS8Bq7fLCOOM848rfviqCGnOuxeTbLl+OoL2V+Yxyi0pmUxMTZ/qYX98k3x5lDl7X+Re4BmDXCiP6sSshL/qOF/Q==';const _IH='59a1573e331f5b15695a5acb465c2e288226213099bda9b70f4459bd7c93dcb8';let _src;

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
