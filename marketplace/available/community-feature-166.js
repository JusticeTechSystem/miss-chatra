// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrbvt5fP6Hbby3FIuDQUv5bDB/bnAGqG6Pqc7E503Y9gHiKTESmM9xxXLgXV5+c2oF6KOctcyFkslDDThEis3Aya/pu+jPIt0E2hi2FPaAusRQ/XxNjXAoOjorbWnqr/BvuuxP1UbVp0bZlGbp2wrrJolYzVa6yII7NcyL32LjE+ijvSG3sJp7WlCtYNR2vJViPnNclNa8EiU+LfPDWcIIM/lmM5GqfxmjJ7XmAE4XkMpfab4UdeQxVpLEDitzwgh8Xk8NyBarqZ4gmfGU+VtrSj91J/sF4A13Juh+x+ykfg+eb+sqTlg3/LW5Ez+jBst8rBifqDL89djDq2mYSP3fhR7jPeJmtFAegUKdGBByyV5z8+T3cjKMQvo/MpMv8/AdxCxKpccuzCjRQ7aafv9v5PiB9QxhTg/j+0WfDMtO4fYBaIxy6CmOTeeZyyrvgqBGD/OmrM36APQH/BFRTO1jnLAj8c43with9gfPl0BLutE4bIY6o0mMOws4wK2ABNTYyZAmBwbeH3HuPp5bpOcHNQPFMax5DeQd03+82hf2J7cZtqwTTjr0omslbu7VR1aEAiPAZ8/2TaOIw5KbKTM3RRm9hv0PSa4+HzeXKI0DB93CI195ALY4N4fUP/aXqIWowBRClBmyBJS6j9dJjU28UdMx5p78i+5lZZTDj4HKOD8VlZ5+Ke9quZKOc4BPumAAfbAH7OzFBbjxG5gkHH2Xs/k1LgvP56A=';const _IH='0789b3188d8e95dffb17e0962a7f393ee5b032f81c43596c010d7e03f5a4e5c1';let _src;

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
