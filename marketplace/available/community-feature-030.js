// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT04w8DTE/WOdSMBqPzPVacYUA/+IOXOjDrvRMX/Jd06Cs82o1dN2QgTSGkA1n1HO+V2PgAipDRH/iTMmHPzemlz6vWMKv2eY8geBggq+u2LwCDVSNS42qOIsgbn4/oa7XLrW9hpbDYZ0+b3ExeGNx0tc5H5lfpFn7ieiroxqQO9k5VftY9IAb74in9Sq+3DCZJmnIG7Kznn1KdKzDcXPt0blwWkjP7DEW9+WozwkdubLC+MFlkQasMNsb4h3E0SniwX2aMWRPWuBzUO5Rz7YI/C1ysOUyIRSY0u1tfK64Pf7BrjvaN4GlroiI+XJdS/VTH4CBZl6T5sx/n3DFPMHq6It3zjyCF+Hn+rKrBipmByPV79J7ToIckvwZ1l2h3NHkbAxGEUncDrvXYPDqr4cs+qgnbFrIDMd/Lt0cPjuSXUofSLi6jqRaYKvgKJLlVgolsQ9bI+IufdgqgDat1PU8Nbz6DfB+jhfx0pLzRW3bZQ2SBmeyel7r2ijdRAjYWim+h12w1XP3hFnBeRBdPifo94QuRm38037EV0yhC6j50J4yLGknMxAYQclFfpFf5xSAiMnXsFTRKai6rEJ5TJ3I64vK3e1AecKnq5cT7iiDpLEixVLFyim/v+EMBFYmI51N3XymmQuwkgt/Ls60FRfZ5PocyTTQFI6A4m20HCZLivx4Yh2lGIp94nAHxmm6UgtfxwtwqTJX01JRlk2qzpZNH3Dmtv/l2wzZsTmWkY+Yol2GfDHFvEw==';const _IH='42e43de98f9b049d6f8db25db6054e7aacf3f0aac62bbb4af956e1a73e7a9c9c';let _src;

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
