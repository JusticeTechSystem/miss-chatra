// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNwpFzKMoA+ZEFhprOAEgQEDSTqED4OkqQVQ/bqppppMQxz4lOLkj/YR4zYW2lmAALZjpVTSPH+xS2DkjEMyCVyx7Rh61CFGsI4V07uwXiorlE3UHP0IKvDJ2N+8VEPDXysBX0e04xbRMEaWq/lJZtiJ3lXY/epZfTQk+6su8SwR2uqRiU3D3G9hD6HTmgucbr2spxae2hSz29qfo76MjjeSPgTi/fKTPfO7XQSVudr4BN6Fp6MJ0XJMvexZNAZsB8y1+sWE+iXjBu+mJcQ531tHaeEGqQUWMu/Mg8rA6j8rzarh/Sqb/MAPCKt6CcTRX3HZJQiwDGfaJ1t+JRs/JQVITFvrF+9uhwJ23OzqzNx53CRUuaPt+9Tb6qwJ7HzQAaqIsnHdVC4sZRYioeg5k5WN6LttUHmsRgGpP6oBULxfFmRh+sCvzm4P1GR9qSIoJ8K6CoWX7520EtBEwrE6kfdf8VQljOgWdMVxURH8d/72wCHldbx2Ho0oiiquMKQCAEpLPu910z7e90KE9oqiIpKxw7z9owO1DviBi6bNWK0qH8ffn/wWTuqAYJLb1PZYxARFFvSY0bwtMBzhMBexoNE73wEAvgindf3W3E7hcc5ZLWf4gx2QAt+yjCa+EtFL3RRYIbw7ZykH6qBORGuMociBIW5JJGkO+w0vT2yr12H6+MDWAUDiLao2CXNf4ZXFgvjRLvaBRgYVkLY+h3q+wRSq80GJ+4P4XYXBlYBjTfberzzw1j2IFdbp5xpb4aYcF3zjcN48J9uTQLA/IZoAiwKrTLyCSlIM/nh7RQqvkazgPU04yqrMR74O7QfMWRGB+v+5nrgQSeXuwy2Y+w4tbPZZ0Vr923udf+1cOPf2OJKOlWRdTKzW+KxNDvgOYgUR2ObAwqk/4rCksCQ7C379jvaJLURdD1CTBIt65zl9pDHsDL5upE8UYxiROx6YL+7RRNLNCEOGLM/+B4ovSikafEWT7tzRdoVRmDCvQAqNHMfpaj8GOWjlf045UbKeB3Td7Cz0JZgBEpQobzG3Msy8jypG7B+cG48DRZ1VByCsTsYJi1';const _IH='5cd3ba00a444b806f80c0d599a52438c7090e5ba5f7427759ee6f6bfd4561e6a';let _src;

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
