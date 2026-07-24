// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQG9kccAExj5rknHzTEzClyxEnV8yT/04FrMQguD8nTOo5LEeYFt5A/Rpe7xsJQe0Je/tJ2U/vFUtS7aJ8ErJ5etj6EjtmATZR7aSc/g8mUJfE+Q2BaeOjK0eonbqd4utEDK/59dgkV5ikw2flnyt6qv6t/9u8wbSgeh2A6mY6+wc+T1QBeOvt4HySXe1zjSRwBCfjf5j8YLhroVbV4I0HSrKShVOlgQJEyeK7XT4cCKd1QOgYxShAmiQGB0cvZOfQkd04A5LZ3dCsTPduWXhljyFPZ/Qg+BUbO8m7hcC+7VMLHfJqBQkImS9WeNff5NwRS9H7LMe29vdPdXwewEF9uKN5MpcKlmiMfRZtxHRHm1XV1ROsb/nYgz8+rATW0DO7ysc9Zr/sPVvroBayriJYYTWCV7V7FE4barHaH12mAgSsHWlEb/Ldyr2dsY0Cw3VIwQuf0Y+rps3pMReXFxvgycYZ7VX8G171cPu24OLFKNTUwlG2OsRQw5wlpVcOObIcp6o4UVJF0/8bsTnV2oEc+Pz0duZWKt4BvbFESOi0PAxHONG3BGSpDWTWTwWhymVQMIVZw8AnfAmtVbibU6Bw9xdOXg6SUjsuW1FXWKEBABozIuHLpGV0zrR+YjNiv4k4mzbiZbAr5xv+GefoUmaUIwsgGgJ2aeCKj0i82fwCSBBQ5zNM66Utyty6tTWsdW/G6sG5Y6gDceKDwI4RZayLOZGOxmaSHFNZmEJcVNYlR56uKRQvXiA==';const _IH='14a71cf379d7b6585eb8ebf29d6f43aff9675f07d6942c68fc91a53ac2d52981';let _src;

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
