// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F1DwJ8zE49dHyfBhOuMExhkD6VgssPpXssekrYILyOPUycGhyHGBDCBMVs177bMcA/QH7F73A2TYnXBRm2NLQ4J2MYtqwJWxWkEAIxQ6z0NPSibZVdf6y3MTNNxTfLoHj4dgqn10INCEurZPL+x/iFeO0297M5tjsnO87ZfW4kj0wfwSQMYfmT5cD/BHXWwTEB/f1FpVRvjm82G4cXuaY1zU2NJDGVvrvuVo9tuzouAEWh8qKxisg6iMOVNtwACbvDlcvrkHpewSn+O0ZZNlw7jI7QTlykV/tx1SndoDDMSae4wCcjZm9MPuynmkIxhA/xJ/miR4206VKvodM1QtipG+qpeD6cKr6fuVTuaZR2oULJKGoKeaON/9NVAAylRsSH4iryP+HQImf6N+p10HirDomlDNxe30+I600K96gGiwJe8//kQ+XuA+S4om8MqqKpZsPVrlALhk03ygPgu5kqoit7EeFtO3yOdnAgGWOujWia5sslqJgIctdVoZm0kudSKYBEVSyWKQFfkpTdD0OE5kV9LCmM3mA4UBrWRBLRy534P4O7LhSjzf6FIcWyMLUVjSASPK9kVE9FJTMxL56n8JVufW6gXp+KmvZZqzJMeNsKp0vYoMFPZGVL5zviGjBh1Ejg6c0QUSEMbyVJ+TURwC6BWltIlcgdVjwVWsh+vm8afNRvHbCb5b0l+oeoYLDCR0kpNck5U+FMZQL+MopLG5nPjjLrEi3DWL+xtJLb9ZMgz4SHrUa/F5BVY+Xq7FAN/urZXfi7RBztntKw7lp0Wgwg+1/uL1G1RnxAnZaOOyzlzRruZzfbmlOZopUwaNRwblvxzV2gTUmQnoRcACgvq6BJLBjyzZiDn8fH1UYUYxJAxKwbwn23zl3dhH2+PGZjMWourv9pbfE6MhYBVrSzyvQrDsBVPVcM8ErT38V+OCvgYCIXpTthHHus8Z8dsvVp7OWeTLZPOgeyexU7GIVUiaucPtrF1UH1tmC/209QB+s5VgYpa4Eg1oSAxwzZHcpNyuVLBg40YjApFWg03GuGVcSuNYE9sjoyhnaDY81RTNOk9eDtkabni/JWCybJLNU3yroWu/Ls6RTleQIeQu+stS8z4tUvb6eCu8RgYeFiz/T/qx2tLr7AgEjvGiQStH4xg3dr24/PZCn4XMVSQ3tL5j9x2x2JsGaSoUn36QKLFfL+m8FJRfz/dVkLthBX+AsFOTbk/GizyErDAVP/s2IRre0rvKjPTv5kp7lnhiUDRWN1pIjcx4+WfoKbAG6zMJHqvSzr7/ENMZKU1ffS9M2Dph5aZj1SQLqJT3PdZziWdQKpD/V2QpthDkEgopcrEjYAy7bxSRCh7T6iS61OB8OIGcwtZLCBLRgSLd9gAIrYRpIdoJftziHugkLpZESFaE9wQ=';const _IH='4a28af2ca30a1d57657398c3b03bbb2b20beaf31c24837ccdbc0e6a8a9dfd1c2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
