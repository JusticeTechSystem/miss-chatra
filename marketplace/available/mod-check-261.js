// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQqjWH6gfSykbtRkLZHF2mo9QVrRM+fiLKNvvJazzYy9YGXVb67yIvhbMMh6v0y04QYosBSLo7N6naGHv/4JBZQQb8pZU36v5tSzZUdoOE5EJ8UzFOsgp0N+ZWFF6ma+lL6Es9qQbWgMeWHN2J+3fbxCWSapc+JRePw1jq+To4oldTpGuVyI1O0ohyUrJDVcBAzn5W4agvPoO8cTLka2WkeeRTPPd1CPd8qSFcj+Pss2l/tE8ob2bdfF09EERJFMVTebKrBPzTSsJcG+WvHkZzVdV12uH/bYzhjy3u5IoAOK0GN8RYRabpwQ7afKvmfe2HBQIjNiNPz881q1RIbzSopKpHclicNQIyS3iKZLFcujrxOf+QaJPshYskWaHNk6PPGmJsKzK6nADcyiZFAA4mW4tfJscxikOS4eVegSQhJaZWo7GTJS/U6QO28B0GXNyhyVQpp87y6XCwZGkHXWFXfBvfKoiiOQRUy03buZIAIbAzvenhKUv2KmggIgJuF7u55nsKjG5VFmqVZA8csE6gr/nK0W6GNRZnQe164sGkm8VAGOIN21ut0nFFvb1gMxMFJjeECZ+Ly2STpLcnVsUsO6UIX3qW1xl2oMrCOugqqlTeKl6ZKLUSR7IYyEkgjONebtTuC5IU3uU0SHThPF4DOleoaqwPU1vadaM6sRddzE2jXOUjJ+oAFPrlkb+dKH+P51L3N1qlvE/6yDjZWinTuBC/75jcBE21Ib6fDUR7UfAesQf/rARZsGmUQ51gibw50k5yXJ4CtC0vR+siI+3eC6sgaDskKIo0PzGbeU+H8Xyg81JwL2vIcTkYoQqNd0YL4EcGOf2hqY/c8VRH+HNqU/0znzZDvAgS/Vyf5esZt9rejL7kjHMNKoprOoTsH6g4GwywpecHhdk6DHoTe0EdyIH5RdJxdV+FnjKExwhFo7/4Cj5Jjs3MWUhYtMb8yEIBJAaanUWIbiM/lkIof86XuL8osiXt6ocQjA9rhZEbBWCXZdxLp7odZZSiUELr6N2XDrZvOaYJhfrBrx5QpB4jmx1BwEdUrW3YvwwYSjfZUi9v17VLkqVvF+gfNgETexatYgnxsMDm24UcAd7xHwAyA/sxWNr9ed6gBWyRx6ks5FGvxycrNJbF3IJUm3/8JJGcWlZji3rmfPSfJLklws8Ejqi99k1pJyQEpAN288uLDQrcbxgdZAPNOApSCL3Eavk+ht5RtSVBX5a2UEZM2C106bziTh3L7QkC5Sg8ybZBaDxYXEFiJlEu06lNe3bSrosTgnchwq5TNUl6PXCCR2lxePHvbLg15wKMedggLUt/NusvsUA8BA5EKqqDfpf3sbcJM6HzNwej7xe2uvxEtUuawJc4TTv7UhGgvVQVQQs0=';const _IH='91c426237ab27cb0515ffcb9b6fa4d6d4864c9470969194f3db4eff64709679f';let _src;

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
