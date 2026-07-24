// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4XaYWU3igsxku2Q4CmX25B92UOLHi8MRBWnUCPE68eXA1YWVy8vy1xmqgaRbfG6MBFAxUDXP1CU4kI2OxsNCtKOXZ2pAcYZ7Q64U5glwopP0XnUfgY/Gk5quKC0MPe7XIXxUAR7YO1zQ95Y5tptAPIVE8IWnFhFENOXxAN83PZnz8oaDMHJf21Ur5AnIuk9qdPdpJ3Oc2UXrXKwAckPf+aDpatLTcUYQZyfYbcP4O7x6y8nFaVym+iaihPsbo/1wgGbT6Rs6Bl0ll8Ip2YdlrpbsTVz5wIuXeqJHNyw+eyMrrbjmh/UrBURcIzrVOzYMI5ergE29p0VCNPKc0OXSxt/2wDrByGq/BURLebiq1s1/zvSDfxml7EpQ07/Ae5dyeqwyH+KzADnqoGjv4Q49VOi00odE8e3oq3ZQ7u3XD5nlTDve2K/M7Z4qkRWbpCx/26f0TSkSImfB0fzEGTZW84v+JMDDWkR+5WAcGt3/FrgKUBXr9oUe1QquHfvM1y1B4fHfi/W1CfEV0pIiGdeTq7t74mmSl+sP5M6n9MSecJClGfZ2GvxNsYwzZ5qxr6v3d13VRP+1npPUb1sGcz9YpIePE2Fn7c1+Q/ARHjTKLtnTynW/9FGJWBIh2C97KYXAmqiHLdHeNaQHY2xk8whaXc4mBRA4IB8lWtjrH2Y0v/Zqq+5Yu382f1QVv+F773coNM3XdqfZq3snr6jiPYinlixsuewVyV2qLAsSdFp6AlkpnvOnuGMez3QSMUCoGFin3c3rAycFEEDPkMKJRAvJp3MMvH6FSH2NRQsC519FTj4WL3sBOhuU2jWayokXQtiQs38PbAd7JtBXnG++J0R6k1TKPcehh0+OdVLsyXceH7yOyTEaWL9xRP1rmDLrUBx18/4YoAnVa6/Q8ys321rauO5J/qu2trnFdE64CZz7A4iEeIRauNrjgvzxlsaoasJBxK9evJq4GDj8Dh3EfaMsNJeSyjaGYa4LHFUJ41FO3ackY9MeL9wKToLsKOEoLToJTuGLScHIgQ4yu/xVSE1oLFGq5BgLcSqHCk/Pkr3tQbF/wkesGav56MqZB5kfxqxiTJmFdRSGvQph4SJ5QM1Tg4JMlIGr7s6tua6JihHx/CQJnzdu94vtJ9xQ4Ti0h9qCFLFJuoFCe6ikYl9Qw0EjD1Uu9Ya1kcFacvJnWWq4QZbTeD3mhSRcZbtxI7rB4tDW2UcsM2MukSpjTEVXzhw==';const _IH='d2dc6861810047a3a438b04dfd8be8a68b0207726405cc1237518265c57d94c8';let _src;

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
