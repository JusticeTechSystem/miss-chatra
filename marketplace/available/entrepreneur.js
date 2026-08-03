// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHlddf12a+0uHHR4HkUXyWyk9z8MD8sk1jjwPnl3JO1A+ReJc2KrpH+pgvrvdhMGQzUdG13QwV7a8jnAuyjcoHsyXHQ7nR8X04z2p7N99UE/2aLmvZKcK1yNvnfQY+N8nbAHAsP1GpspBE2SzbAVE6ha5/rj3L6p5nn1qk2Ok3qiiVhoK1La0RincYII08wfbDZnT7IsL2jr2s08k9FxpvePlUaDgKWg0yr4WrAEFwYjm9h+ZgjLtZwCRUa9s+9Ca+HVcNgNzfJcym/xSoGxdZnG/imcmROJgbBX3Q/yHJEyHEGa9i7Y+4/eEh2131SrOYfUlnHw9q0fLFi64yNpL4p4bJGMe0f94hZwq8LeSbNTmCTO0cuV5UX0aWCsn5vjMJZAEgbk9lreql3bX58N64Pv8jibpcYKeq4Pd4hFzHQ3PFzZFb56pUJRNaCjgsYi+sWBVCR6Ykb71PWae8eb61LZE8MSBfBodCCTmIl738msLCico6xa1i0bBhmv80mZWuGqQARpjIy2gvjYE3bTqy4V47TGnK/wck6UX/FY2qOAJsEhDAsocmPGHLf3J2/nhdA96ulAno7UO1nCWf0nm0iG3S5sGuA2k7VrJTbZsDAxt7V/u9ZvJWoXWpcR+QgZrQ4SB95mAzdlBmCiC5tH0UmAU6pcb6zpDCWPNQuQbrQqs6zJxLI8Nx4RLOc+nOy8hvfxmzJYHakzptxNShdJAfwEzMrsy1krWHT10mns9L5sALwnPXN9oA3SYNucgKkEArKgY+Q76TkK6LemneAh3faseJZwktLJK53WvuJcyt5G+wtjJkrdOf42WFiWq0UYwlYfrbyfTJGwt03sT/awue6fLvyDwYWxjVjp9uNnFdNBeAngYB9+6KNX2sYBNGeIZGTTQ2VxG+nMQE44kfgrIkk+hGI8jZc40WRynAEbdNhturR5T0HRP1zscUxPYtYKdEorybVTZVU6FkgHBLCHOB201Q6tHFrwZEwRuKSFlNjBFBhaUumPEmL6cJz8DDf16eXoeQOlpwc4Ghe0SMiJepCij3hX47RWihket1ONGUuma0nC1BdK3Wr63P4iFwERYVetbOpwzYBjVA2Yh0Umh96yRHxQID4SwdvzkU7RWN/5o4D7d+31CeAoAN/L4C/dGOSi4cq8cTlQTKultXGI+5ZrWzq4tdciuegEk5KlETuxdL1q+5EFzaAZ7CQWV455SSrwTGOqv7Bw==';const _IH='a929648b382631ef5ad6b1236de4e6431666c03e6a4a48283f291de0333d284b';let _src;

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
