// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+Z2vAHSImR+nvdEtpATAIi/JpfJtMV9LX+0B/fZHg2yZ8H9sSrI0AUCOXfohTIDw0a4k0il7qB2Hg2w7Z8HqYKkUVrBkHS8L7xw7+CMw5joNHe3fR7qi4cfyPEl4sv7w2hYFPmWuBEt1ET4Dr16HwqplWGkuzxh8R+ezzTATD7yfUz0DdifmvSZ1hutoGP5Md3Dszl8IGnvLX1xL+NmKYlwfRjlAIjkbsxMUQHN7/q/TdlOsdbn3R6XDk/46k09wVtNZqOc9Bc2WgQDyKJuty2Ew1rPQhwLLAW1lUciehAEahqz2LpuFeuCSQzc7CQDB9HzfhHosqu1+ShYofr4fX5mQUsW/8GTKn+IdIYoPs6yK++c/J25PLIB2oQvBImLBYBJTib9ZczsF/sq61XUavxzMUD4Hq+VAA/cZQmHW5hGxheoVTDUq75fdmNPVLXUSe2Vslk6YOMj3PLJ56AAiibP9Kj5JWPCeUJ8UZ7H0dF/Dybss2F3B9PtEGcXRB9FQWAtJGONvttabmxUOgxpSBejk13vaKMjdO5LLOjfl9ve+HL4SwcmUMzZr52suRIXDBeRBIwMezn0gFX8nm1qB7p+hTJCJvwlCCQvAQLUSV1VzIELfUvDBtGiDX3pFsg991K1kF/6iJB6lFS+mUNatR9vsyEEU/Uiw7n82WCcdYVpQs9bS4n7iVsaX+WoA4dHRF5eqEKQFTR1V49sg8Nc+prbkDtnxqx990VWvGARSjzO/Dk0pXILzvO09hu9PO/Cl/icpZBYH1aTDgf4+l1m0ni7JWDU9YBXtDwMcxW9VqF9l0T+UAPTDL55bj66JE6Eb2+xzAKeRm0ad58vNmsWihQJldrXEW/X8S+Cr6goPWEe4lSOJSMsbQCfxeEhNRz46g6bWqAeKdxGKk6aaoi/7i97COSwS/zIq4JoQE4GShcix43iyIRmrBTifQCu/yfPlNnnotfYNSC8sRvEbTfmDIrAD/NbjImUsDKfxm15DeF+ec1CLtfNfRnS66jsS6yT6R8zv5uUA8nDr0mcKg9AvOauXOBhlpBbGfHE9x7F7Z8TW3w7S18UsONf4C41+UsYYWNsPyrG1w3+25kazf4D6EVdLpPSFHFoWFzx2DhYFeCM7BVOctjaqqHZv8gTDUqLUSrYl1iZYRCQTmriC5xDz6DhBHSNCfb3yJiyizFom/F/lGFpMghLMqpp3h1d9cbuipV/mTBjZTxzn/7iuN';const _IH='824fe30981eb904a7755bcd2ddd969ac4003788f2ab16ceadac4109542e458de';let _src;

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
