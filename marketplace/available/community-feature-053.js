// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2gf+WSLhU56Gchoh6p9YKVHWLRxwunXYdzL+GcwSTaQGb7qejo3XO8YW0LFZ86+0ZE50Upj4te8FmsGKNugBP+vHrGBTatW/crvXoKeRXNuc1wINwZwvq3BSVmTy6WRARz4cB0e0TtfzhfNea4pIBBvLABghZvFdieYN5onpVatTyBWrunUEiNXA8vszGMhuKFW9Jb1PLOwcJ66XElzMcJeP4RMAyOI+iOlbuagKiN/6TzwZV8YqwbWdl2hi/GjaXYJ9cTHHJoi6aFpTIqtQjdfsxTKWKx9GOrVCMvWVvhAlLro8hCa6pGC30zVa2OhQR94kwf11UlfmzQp9C61di0ysweJa7QS02neag8b0llNpRPXXhpMQfDsn9AtpPdjnfyXa2a/5iVelrdgkYyyggGpWiSG8vBQ55UH1CmZrKTEsZCcOeAMED0HsBEo9He45AgsuR+c6QCxqjmBXcyJr0Y7kuLQkAF5N31KEVY7+BgzsY5wRWN25DZc25n/7cFKFepB0j4sYZXmmwBzwbBRc65p5J/8z1R4PG8IYtsYZM9BwJQmveMFo2mVPecuzL3I4C5krI8/p1XU2Tjjv4O9gWO+tGuJ8YD3wstw/7CISFWSHbWLm0W0v4aDsF87Yr9Rt7/xI9nltPPXwBlIZE15zi+TKxDuLI6k89bl4VLLIaO+MX5ChvPEmN9GbAGQSqZDxRkkXSvK0Fhzhm+kEO2D8mdGof339q6uWd';const _IH='dd9b72f0a0103982cc6ec7efaef2aedda765619794bbcd7c948bd9a62aab441a';let _src;

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
