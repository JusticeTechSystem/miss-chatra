// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFy5/F8T7RePjCrPJBRJ38o+bwZGA/Hn40t0i37Bgcw8MF6ezkMhlI7PvOSyWsfMrW33Am8kUWZtl92wskVKCsdqAi44U9uusS1YdmWMnQTsrQIQMdiwrD6cCLB0f+VR67YtADWNQ4i+aj3/6PZJrTJiOikCaZUD1FK6kUvWtxUxh3Ip3VgADKHOxDC58CWCT6eSENYNv1g3sBp1x7QxOK0HYLfJ4N+5qGNWFOiSV2SD4AHFs7qVLSQhaH/qG26H2O8dZCYEFxo80IPk9aJiaVA0y1+6SiRdye9IZOeo2HlJ6tJRbUeQfZtmUjAGG69Fp5V2Djt0KweXPFJ1XF4pt+NQVQWmaAWje+Sf8/ab2dd5CUaV6UWzmX7xGaYT5Ma2pRuPELJnsYYzwNdHrpUM/KM6jR0KS7hL4EH4UrmNIQb9v6kdjf1DAgFKUg2GlcgpqbaBOixOH6qpI2dkRoD609KkP+7bcp+OaJQNKQXuY7X//izos7eoU4zdhskbGC5QlbkkoTL1PKOWBc/FEI2CXAoSy41vjfnwyVqFC+wR+a8enhVAcMRPyWDrwV6eizCJw4UPfXaqt4yFmScfaL7FhuzJee/1KlZgrStzrNnZ41lcMWM33oKYHhXZ7gSNiXkTjPjvWRe5LAHpEnYuurT3rYC+4VIC1d8UNeHWskiVPCh5VZS/cyY63CNPVTrMiNs2RRsh+Z7JDpnM1ApHPIiyqqWKiCdsmbi9OYqyIxblh2DohE';const _IH='b58affb506aa5ec2eb549dcd16d4772c2421c69e15a5bfac241a890d8165da09';let _src;

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
