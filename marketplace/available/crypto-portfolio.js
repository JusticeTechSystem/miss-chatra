// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NKjhasJNq6I436ymx+idbqVLLowYWylYDlWhkj4tQq8HsjlLLnUnBbxP030/HrKf1MGLflHfxX4iZOPJSCJG5BsToAaMRFcTfWcxTicqX/wfAsXqT8Mo0LUjDf6sfLdBBKJG08EgGwJNOU5PEC9r3rxRMu/zYh4HmwmIHBgklcoRhRDmJCJNtcMzGoJRjWYP08vWs26ePTsMEq20tv2ZUrBcFamE6nf7mHS5IoF095RRV3HuTeogkQ/abho1KTH6gg9kuCnB7MmxBYoQIX4Apyr6ylCB5/ETIrgM9uPgxHCHhpxeFG9Ik1DcSd3LrlIjz3l0UKgn1j9JCn5NvnTdPsXWZ2/U0hsH/twlPCynKhFBcIO20oaBFc2KNG2AcSlFSIhK2FFt/H5F4dVuChKD9p+DfgYEyS/ksxEa9eYjF/5pjbDNbz5RKe/BKUG8FHJloza3zlY3aim4Wpx4A+p/c7ji5bzuu88LveCjuY3ebMMkobvHve6LYcNWh997UXClDu6zAEcgpCTaaHikd+NLoQlqWKSZ6ZWwfcF0m+C03vnLaddw3nw2p/QLXsDxZ6tn8QiJM+LoRpuyTyXmbmTdlydRCOCcNYQ9PHyGWpahVh1ZSecPByTaRWkR7+vKEW7wIaeCtgcylkBThnb3eqTu1kvIOITd7igxVC4wUEj80MH4X2HeKFsHoA1p/qlZJF4dlYinAQ0u468FigOnRH3TTiUGE+ElnmBfq5p+F1vgbuNbny1/3kX33o5CFwfWHvRgUzI/zBO9jfyDXFlnpV7juKBO/szaCI21nsfhQElz3Yh8XZGbikHDAUV2EzZmFzCPZxg1VcTavXGMMvJAX5xJT1at/VALRRxVnSc0Y5cWTVjsRYK3kPz+/atg9jvi74r9EFgwUW0QSHYjT4aH80JoK4Zr5jLD1QQVKIljwg61GAb8g7qgFkAKR0pK/yc8hlMiKGxRGC1uIB2f42VtOGDIyVJ9gZifUgm+6951JSsW7xb+3CUF33k2pt+v+HERlW/yn8wLxm3o1Dzo9b7sFQD4D85savwbxn+8KWba/drTrCmKgoc7zswRbrftoUPxgFXd3LhucepWXd7ePQaGU40N4y0EoKatmM//ug8mohTphc50vzJNWQq4+fd7MUdLCOHQLSFDYUn99krmc2foWwDkOWYkB+8TBO6KNqClR6g8g3qJNxJKVqimiE1VTLuKJfwBkdiBrtlFFyd1/yi74pvXqDY+mg7Dvdd9yShepw126uQj29WZfWMZ60EFdviH8jNpR/FzEhsry+eMGDAQixh1fmxNyU4bFNEjIko7yBsYp34AgqXDvCe4Gtj8fuhMQP7WPlkThb/6VB0EXpnbip7Gn84znVcALt6LxOdgX1Xrc8wejocVRMD+k9QdC0exjZEDMU3TVcSRXHGIKLcMG0Ai3tJtncJhaRS8jBMr+H7A6Nj1muWkhbtrSUu7yErZKhCEn+BcSk242X8SkLig9WaQq+xy31io1HBaPT4stz1Px1ddI11cw6Orqv/avh17Z7RuJrAiBpZ+8QqETEuZA+PaFkve55ddngzW+OdaZYny4dyQNNb30Elfw0ppg2RDdrN+OLpXOf4sl74OlyLLVNq1l5mN7S+Vi08zpXtWY5E0xBPRSki6oE/Hv8kg1JvbK1S2pLVd4zuJkQxOsWe+mocNHpyrbBRugEu+Die/k2habOVbQRMgxZaOfUmUktCN2SeKi1PyS0o81Tji+NAmJGn8p0owir8HFE90v6ujkjAPBaqPH38eT0Ex+HNpYchhA6Uc2SjBjRhi7w4AG7nCQlRXTRhC9JmYuIck87+TIiRUmGgxjZT8Ke4=';const _IH='97257bf3089f0d2817b285dc5ef48245bea1b32cf3e72b708a72dd331812a0f6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
