// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5PwZfjEqznU5Ai0Ase1zs9kfgW38satVbsfVdCwQM1r9lPU3m5Oiuseq2T5AQyI58A5nlII7EHEfI9Vzk0WckZPqlnCXKoWeiGvMP9QTG7Ggn1opx1CFYS7QXkV8IOyrmhJtBpMDRbGAg88IWSLFzYG8S6vv2cn7s6iFaRjkM7KwBV5mNo4gIBTKByhJ8k/zjUkgOgAZySq9O3U8CKgvVrRxINW5qYAcKvM5PTOd6KH2aYHOlO3Zy4czAaO99Hg28XUuP+DVWa+hE2ue0WGBSpwu4qsHnVPePUSEK6XgLytFsllepOfEdCXZdpeXPCByKk+vWQN9t/v5MmNySezJJHM5dlnV2d4E1/rwLCOzVZYdgmNaCL3TR432Cn2aaqioSYrdLC3xpNQtR/Q4f44OCWOSWWkB21KcXdKdZfA1+sMZwF3ToFxvO5rtE52akHbrhQu3Jm3hFFnlqaEwTgBG/fPEcFP6JqqG0NXHHNuLcgM7I5RmnRIctf4JZJGphaeoCITWunZC857rq2USwXEuW/L1uEDbPIkZ6LCThc+9mMs4qF4+3Qf41LqV542HQJtKUvI0rqkNfmO5PixL7A/WhwSwaX0AsUH1ZmoKNh+ieK0B+F+hQU3Y07bdliIPwg+5gQ4h5h7iUkRp1+jeDKPKBzxt7HuevgpKJYeaPx5NsDSkyPt+vo05mcl0CJLDry2D07L6GZ07buCcY7gVLmwntXid/ii89EROilHZ1v8H71PEzwf91xJ3UJPBBcY/7VFucmtQ0wIth2nt6zmRuZDE9ilKbL/lHIZHPPmfonu0lIqTfW6chtV9tEhjKsHf/cmDc8QP5LIWGU/aYGTf15jGJaLVxx53Wi5BcNiQJYz0xUD4vPzN3YjX5t0pz1c/lv/QbFNr+p/YR1cIgB673JeS6zzBiOqdcL3svnW/xEfBqlZnJmG2hJDrsnOdojj9xkCZ08VNl4bps/fvp1EBln6DNTADAhVGkxAE9VV8K0=';const _IH='09975b9999815ffb8ed282fa1fa09f61dfcb37289b78cad272c93328aeb71277';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
