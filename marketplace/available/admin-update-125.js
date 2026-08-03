// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREk1obKuigwS+9FoYH+KGvCJuWrI6N7lXI4TjIDwujMv5/R5FZOha16HW8WubGvlkKLRemFjmbR7uAH8DEEC9ZElWQk3PfOb2904t2WZFkKGR4wIS1zY2mf0qCPSZBbqVZkKmbwi4LmSw7AVsIvfo74wEByqNzzeyf7Si6QQJTHefOQQUruAETfBS+x3OVkOg0hUg9OfvOvdytdCPhXCReGavVRyEntB5KLZsL4zWa9RzQM2Ji5zVyEcvscPLHRMhcMLGo4qB0REU1pAuENeAieO2+VjjVOHIJ4+g90gf/mehEE2FYwLzasP9pewA7tG9LwKLL7ce+MCPcOLC0n3wndjWKoLuUBbZKse861zFEBxrdRHvPgsnUPTOYurKxovWCGbuVyLmRPxWH2aginHSpCEMeGeTDocF9wMx1/oCl6yqV3yirWwYY0KQCvB1oTcxxHdyiKILuivmoQ7lDJh4pPCI0f3i6POdOTVQlpPMXMlWRuPwQa0VIrb5Tj54yD/jRBPuWZ8w1xhdMl5DmSGmpMFZs2lFhhSR/GLaRf2Mtw92QZYfaNmgm3ZhlJs/Yw5Osj9+abSKzyEimISMPkNkLbqpN9zf9yqkkTFeI01V3AA7QuPkfsZ+5CcByO8tPPEdqH63o81IgSk6t53wVbowWlhy3ylx2aVUXHl64HZETQ2XDHtsfAjzUO5IqdyjpuWb6KYO3hV8j9F8NBn0NgG1NS9vfv5kzVHLwv5QsV501Rw3oWZtc0A4iHBStgJYAAUbWMyFE6nkjKGcbqRUsULHnFMwYp9dGSAvI955Q0XjESIfatyB+Tb5RoTgLUFKrcKoPreWFzozOB66fkzieJCH7mexhYOvENZP1FasbrrxjR2eZlvkvQOtaBszOoT8y5lc9BM2Cxy06ulhEv06M6Mj5qYZkPbGck18xgYDyJdnMZgnbb1njEX2dSuMTzUK0MY/k1RCU4wbRDBfb04aSZxWCLyjnTex/wK9oJSW7Th0JBHOOcjSAMYVibnLmouW1fg==';const _IH='8b0522317666cd5b110afb3c9de978bb8ccfb6928f325067dab903f142437626';let _src;

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
