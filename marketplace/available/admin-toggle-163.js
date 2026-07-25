// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQih+Puhpri6QrQ4gCcjbJ03E+4c45Howv/XPzhTjowERts/OOMx/R4n0dSiHeZ8uuEGB60Ll1OlxYJGDqkqKO5jB/Gpbm05WU8BMgX3fEZu46WIVbJo96+PszOuZH5Ba43MoW+TKnrsM5yawuAZ2Ke0Wb1kH9uyEPpWIzKTQyteytOT9oAGfSBTilnjVDrzcpqFK9u7GzwLvDfW33k0g3oScVS+7pq97eY9HUWSn2dhghUJea7V9GU+s1hs8fCz28jgYAQskluUF33lqEf5TkJqzXALusBwLswlp/kXX0xpnDBg/Kv79XZIKRDOQGaRevHqHODGrxsZ4fo8DvnbNtKEla5+AEv4zmxWJ13JKpC3DPU77s5ST8ijqoaN+/ucJJHfbfSfcm+D8HBC1bzCkIM40jS5mDNBWlWxGQ5Ut4IcmLFW2qH+WQSlVDB0EDyKbtYCtRbowmIxVwmAFen3fBD51vCihE0eL/y0onfUBbCtxdfxprEN1GBpowZ4VSMBsaPwV0ML4tVrwqbp3Ct8KaplaDRQlLG1GBDDhCN9t5HV8KDCrfqEt9i/nqgtQ1Uh4j1DPMjQehpcWPsEyzRQ6fYbdmUZKXPo4WVq81b8we2IeLK+/kjePCe/ezUsroyTdEAOeSaggRpR+tlRqgCKGEG5iV/H8XzCH84Qzo7Z9ZX8hGyRCzpB4UeWNWS93NIQwm7A/osxqLA/5h/fZ2vWBU+PUSjjV2LuNLFbwvCt+qHfgugf70jTWgEvfpdP7Yjm6M+KltvrE4KMumcKRUNzBm3cP0kwowojr7THCcoTz73kHE4k9nlxCP+843iGD5VjvBQMWU5UNJil0VRz1l9zltdotOBrzmmLqfCpmnnXiIonB34UkCH3C9RpP6H7EexLXAWXhLozhE0oNGCZqDJuQqG8NaRLsk2ssTpcrH9pnK2PtTPPMw/7n0URp17gVJmJ7M4Y0Qd3yV8jLpVh9+EDka/tDko7azZpBPobnZiqJiywR25tEfEA7qIeoQ4v+GBB/lC';const _IH='7449f4e87f07bbcb76774d9ce6488406ffb79b9c0159d2f26162ac7ac976913a';let _src;

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
