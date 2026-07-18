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
  const _b64='T0JGdjTp+Q7Kgv78TzuIaIXM/mQSO8tDnh3fvllLP76q5pVpRNfN0PTt3CjpcUdbCtgHk1CE8w1ePesSeE4nyt0RrI8Okan/jc3hbJoTC/gNaenuGtZIiDOR+v1Y+5I2gBw/po7g5uoSf2WnajowHQLgD8IgaJKaCSRmcJ2FaQkSaeMCYSIZZPjHMdjVhWlm2whNmYd9gk+t+/nfMNeXkHrlpNdB6Rzikbcw8a651ucEzZzU002m/6ExsrhVBvg82TTRTRxQFDJt2vTSGjWeP3MSfv5IpCZVEINK2UFzK7bob2qLimkXueEFgMR8Jn6oYmE6dBCmbYDKe1pmrlSVJr3FWRZRNkAtckRWAb3/OfDoKhC91cYEizbeOINXuAdhL1L61FEa/1a8Jg4Y+2S0iTc/0J26nx60sBOxFLDC5xJZ7nXJoE/xWFpZaqGb25Dmt8aLhtf/8aGyOgL+Q0FL0FJpIJVO1iaYK8v4H3yr2W/sF1RJ+l2rAw2d7ALdoqfD2SAeMj1iRlbcZIob6jXApm0sAOneEaDn4RoDBcNFmbKWvIxTbLNei5uJKnZE/gVSR3K7I6yWCQ==';const _IH='707729c0ec216796ec84922bd2bd2f0322a62148876445941031f31ee53b41a8';let _src;

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
