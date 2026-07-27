// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJXwww+ll4XQE4oM/3ZS/lEEJi1PCyT1M5AXOtOqR8zTuD36nkQGih/7XoUfr58lJy4styotZnDccgmRoLmRz39Dn7aqQkbhf4FgzmuHWjLYAoWme8cvEI479PzNEDzBFnumrXcv7lvJudCQBRJ1yn1I0SfoHhtS3YqT9iJE7OnGv4z6+hcZVYM4z8GTQlm6a4I3yaoz4wE/Qwarmf5iio0LCIEuk65iM4SxM8civgK+nshmej3pbH0+l0kKO0/AK4VQlEHI0E7Lz5+a06nfga6fWNQEEsm939J3NEOtwvHObRBcXFpoQqa0WT67954Apbf4G5iWm6oZp6C/U2Rtnh84Bv9zvDhmLSLHQvPewQUfXdZogVhXKcvebgfM8VeuP9V4hMbAXc3tTUxze1cBX+2RPUG4D8yhGfjGOqEAGrKetWBxNNgWJocmtLdSDJhczmG1JVwSxSwMee3q1oTP+QXhqChKvYWGnHuNpYyJt5gdPOO1HUCeLo+i/ynTWJRSuYtaAR37hnFYGkPvXs9GQm2Uq4AQtlhA7QeIG2c8vI6i9ekBI3HeP0f4B+NqiLGt6G7d2vSlM4mT2eAoyZ34Jg1FYNZxvd8TyiZHTewp1heL8TKd3O+AGokYeWko5uvWcFr73DxJm568SrGpBpf1PXomsdYyg7eXpmQ+L8wNuY+Ty2kJA0LzlE2BKtCfDoUNnAqvKP+lyzBZOG1w46yHoOi9736ZJhEIr2Ciz14FTJ0BMj9ycUN78pWxjOXBTbef1JCTz5/Ytp8zxZOZfajZXToaT20daAZ7UBuaYlPXFhUuDSvttTLef5ms+UD0i0h0ZDq5rWUPcUKkdwyRdgCbR0UWaox17s5/XNPufL/MiDfDa/g1qxQuRo0YEAFGDUhexayDKI1yWLhuHIovyqoLDrISvX5IlMspuwlTMjCgLlMIIKjs+W/WWpDcF4GUQI9Qw0LUUYACDcdM5gc0y6aHfcpzCBhr47AeewVAs6HD3vVU+D9nUmsLq2vWPTvI66OUmZk4uAhLDeH1blsjxm8i5+JVhoLYzTJEN8m0tEk3vuQFm6gKRMiLYJI0gBmXvR257nZ/eQeFWrZn0s4yZ+dq6Et7dJaDFjWnvfjaY84Bf4gvgWUco0ttUrCOF1M8DgLiTo18a23GvlKdSHIIG+EpH6VySPLfon8O3L8oUTtRxloeVLFB++rfknZCqRwvxDXKhDMC0zrtcoLsvrFmKyygISRcGvMP/3sx3KS8yqvTxe8NC3ty59Yk4Y8cIRb1z/w1FYMs96DOCCJgYGP4AWNo+J/ygCA1B8wVN6gW5XJN4M3VbJDXz7Fruw7fz9AcR+cHCuW7ki8iKQFqSXUXzBV48+7i2l7UOiNJKZ';const _IH='713ddda70e42abce8d3b8a7511649cc6a77d4886f33f50e1c88520dbc62327d6';let _src;

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
