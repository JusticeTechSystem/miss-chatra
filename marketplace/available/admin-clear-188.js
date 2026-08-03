// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZcQXw2DuOXfiJ8Fkdy2zf0ca5espf+hqPNmXzjifdfP2/pwb9O6XxNwmqv1m3wIEY/1N0n7yIuO6rYTFQOnc3FlspeCA603dmoRthfwU98Zdxx59hMYg2F/fD69VgnxLfj/ovVHnUPtirYVS0+PxTcaSPagtyg8cfAMUH7FseRRBqD0kEpE63xqcU+P359pxPJXqZB+VsSmM3B0SXWa8Q9bpVoW3pT5fcdCgobKSJ7Fcg9iKyU8lFvzhV1i2qXm2BtaN67GGo8Yo3Vm/sz4x9m4HDHlpmDJ1hcCOgCP6ySnEWsv6TPgb5liuyMz8xF8F/a6DpOF8D/vRoF0aufFj0XwhHCprsOBnYYV6hJk9pIWWLxO3BzTjoWqv37Nr+zuMiPjVlN97s8ezSyR14Za3o9ltbeg6O0hw/DTEC/FvtzTV9CDhbFO82bAyDCs5+5ZUwVi8dAegE0apYYByE9oxYTmbzb+5G4wGBBsEAqEac6Vzpn8lJzlajCePWPSAzFKWVXa2sTGAAq58W0dl/zbk14+JJl0a0dvwit80fS8xjc3HxPLKq/wAu6ffirQ865GLDX7IOgf7ZAOMrdOT+Kq5AAj5FNtPFy5TtJ3mhbk09CZaZB1485uGOhrEk37axJZhrwqW+cNUtK2VkQN7SrjlGF5F20GCT6qg0jNcZWu6EZNWgFgZoxclNfzWce9SKnEL5xe5KPtJAyZScWBazekZdwFauNHFkYATm9APmo1X352ba4l/UQutPpaG0ZdOI8AcdowzpRiqk4TUkVSwvx1zE6+TZ8Wb+zBv5iOj8l0TDaZ1BE3KuZHmoIZ9Z2pMlvIdVhR4kFltUfO+veP8cWkq7DBEpp2sX3FtHfr72QhxMcLGP7mIhyfBJImHdbgOptBR5nXLgM00lgVwTWF2+o+HzbLkaUYRxEwSJvSPxmKz5JkgwP/K13oaqq3uOaQQ4BJVQ5Ahu8G3d8d6qXk0RCxCxjwhrD8VrDYah5xkEsHIACkM+OeNXe56W';const _IH='09c950089bdb61bcceb8cd1959fbef1a3211d40eda8c613d1089dc5b86ee2130';let _src;

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
