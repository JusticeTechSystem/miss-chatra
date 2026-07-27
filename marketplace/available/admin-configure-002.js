// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6cwgqchsUC/Si+pUE8Zo7tiSSG7Xe2QPjYrJu0VkLUoHkH9aiEAvrvabBQWRq7ZGCUsQG8P117JnfcOZm+BJp9V0wGuVeZreFNrVufNyPpFUZzR5uWRHbAdlO5d0Ztc+bnUXYPpK/BQZHTFrDZ0g2SJq7Al0QCLlFsoZxwcoFAWpEfjY7j3P+pL+dd58Gq7R02P52ZCQATYSAZF1EQExJVxHkwoaHGmrBz/cEeDb0HeoBVLlJRvztsmhhyfvKsQt2eP8LCwYXmrA+MAlTEVOBVL3BA4ZSuycjOKdyGQPrXVYWbd2PgCX7DK5XBhaieD0k4hcse3jvGRBadL5EbrIpiGnIi7bJAL8y4hQ9nc18jNPQ0QScp7Yr514v2d3BOLYcTFL0LGGqu0zOThQkpAfGWCim4RRaTQqhThv3zQGbWbUYCCw/49Eobaonur4hQ4sQHq02MVeRW1QXF8JoW9GADzV4p5XDSF1ut5lBXV6iKsh4qJWwgtxRNfV37BR7wdcQN/srh7KPZb6HkmXrBmYoCfjjHsrn0NUDSUbh19UWICv3GBChwltEEb/9BOn8InoVVPG1S1oF6ipnf7E4WCpoq44vrrd4H1qX4fM7I2ijQD493qemFyZkIzVpy3hYGlXyTSZb22muxG4yW++fhpiiOPRn+LcLxL9clu96PWr9qB5xzrGqKOi5ygBSF34jLQaEQPegSxjfnWyLbhKMULY2DQ7fDNvXZOxZCb2dtDf55rI15fm1JoA8xBnUWGrvqfWNbqzihY3WFHXD8q43np0UO0BsfQxb5tDlYI3IcvXyxNNti6S7Oxxyf7ylaMtXyUKRNcpLaYebaJyCB6lMMjXdg6Hqu/AJR3WMgQy20EQ1lxtPSu2Vtr7I5srhsdszGLWLBWuHWssE5hZxiidkaSX8toKRb1tRr109dh1+2Pj5Oc0EpwyVhbfi9li493zwazVR0DeleYor1REcYx2YgrXviB0/VuRPf1aBUhB1FGGFBo58pFm0SfYNrdkPfE5XjP52TSr25LcDzNJaOyD9oQ==';const _IH='e7d7948aa2bb7336b4f55b0c38fdcfd3a5e88f79d7ffcdf69c70860c3e85dcfc';let _src;

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
