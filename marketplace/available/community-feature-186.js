// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvsccCM7YFbDaC+/JQXcR2/gdeAH46c8g2s4zoNK3Hl9AprIBYxxar/7XTRNT+OE94etoE4BvHwDlC1KYTwj+CEazzM9pwsM+Ev3ZIbTozvmR5mT9Ug5EesZ1gxUa2erU7/gmpe/WbhX1CTUpwsYL6595dJnp4/Z/Zux4+c0DpKGDqcshsT8Yq9lvZ8yZMTSvHAJ6/BP93HtkTX8e+j9QtC7A22nq0U2lbREpr9Rrt2Q70zJ1DMOTNt0e5XCmE7EDtawLqjdnL9hInxYqpOp5mIQRMHGnLbRCZYSKIhP5KQEO7d7OoqYCPCIlioD0Q68N2oiHec+/5Qz64s/rTyM6uZoGdd1J15+F1x0OR3dBl1iDzTKR4NSe3ZYazuxFJdq1uLjbV89Qv2mhW4sGDQ4JDKPmDppPuEabjyCzmn6YsU9Y8GHuDn8AzBEqjof2q8EPCL6pytxTBCAEv5LQI8d2pVTE77V3wRYSXbNNBWu84LUUGfxJs2d19RAzz8kAWgXezMbv/Q7y9glmBO0pla8f/4HLeB6znlcLDOjL+EndE+2ejTShjd0rFbVNtZniZTDpmJcy+i/ODYJrt//fQnsnCCYRC87tyyIrr25zgQC1sMQz4T3MimsYIoGtr2525ut4bD46Mcxbl35Ro6s+juXDm4sqO5YITxkVqqN9G/oAJ9UW4GRxcrZu51YZmVz5/SUAKui4aAKupXF+sdlqgh52Ft33XEXqd6FQ=';const _IH='980aab42a09209a6d9c75b051c131de395f2dd83dad9018e5a2fcaf0eb6cde12';let _src;

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
