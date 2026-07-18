// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTCD3X35oxp0lDIbCShWKMq8I7+bcsN3qsrXE/59qv0RNPtveN9OJm2GdN79KCGFo/cmiciXU9Ou8KOHumB179yRJYdaqVMW2q4eOjf3lAuXEgW/T15+UxXiMUFoondcRqsJqCwwaVT0W/WLUs4ikiAzrGdHYIKW+RYRK8WKNtCeyppLrw7nge7U/KY1YkTHBTOlqoCGmy9el5Tl8jsiPwj0UAxJ6dlEtkqszoRktEZVxfUVmFSQrusewlko7/04gMaHEM+z+13vysvUtZzm5G22+ivvJ9PnCC+kwMwxFzf3FHPH4w2z5eg355QZqCuMJQ13EHeVmWL2fPETXb265jL2zZUeu0pbFZl1QRKHFr/TpW5htCI86rBi9cYLg08CqE8GL/vy5mLgkmpmqLztwjva3AW7qPzZXI516kjjpmfMZXgqIxu6gQgFK8Q9V+zWcLacL/nyIZZkETkbj+FJK/678zVbBO7tX5fELu3cS/+iHqBTvJfY4XjAXjEsYWqObbah6QZZBlooZUpZ36kvOY8svk47NWpd+x06K1BdmEVAmq3/LoUi4Cpi1W93wdGM6NEFTlJ03xpU+tsdycqU5k66gJ0RBQtfmK09tRlbs2E9godFZBKOLIeV7Y96XdoruZCc6f3Ysfn651a1oTaea1kfMfdqqmwUbbGZOPnONVFiKS3eUHlzNTpUJHBcA84jhTCJdLJFKU9lGrXlVemXvVkvc6JwXUlbNinkMuHzBf9sNULRI6xuCQr1F/lgDiulRY8gjzZInX1+PHjK7NPO3hSlCPedEQ3IzJACqSB0Wzyb7SmnWWevGjHjvUBRDfpslaswO8VRNe2yvYlnb69OybCXrz+jNWKUC4X+y3J5FDKAtZzWIpxqExxMDpRz2jLF+tM2qY7HVcnATVMiBxmCGw83XOXC3zeZIiz81AU9sEIa2PA82kwC7VuZNw25e+HS/XdrWbbxEga/ZhdSGn+k9k4Zh22ybr42ZZvww4rI5s7Fx3rVP+jC7QJShWWNg=';const _IH='863f2e743aff2d2c06fd85cd8e074876dca3a69dc4cb928f81e622a922a240e6';let _src;

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
