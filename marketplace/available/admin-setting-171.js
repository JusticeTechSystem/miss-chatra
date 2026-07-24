// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5EWoMVIRknFNsmeP1EE698mrMaONJutADcP/lNhM+bsni9kklwG+r2sUNL7EtsDIF6QAtbl8sSStZVpfKMW6QxSEwq5EtU8Zo3Vq7HPMqZQvL94rxV6TzNnxA/z54IGEQEK0FwGsinHwHQJR5/QSalZgWNvt2a8d1uhJQqDXS9RdRFyINvEExPHAjTo/5YHvYzcPvnNivc2QAPfmXEPtBDe41PkDzUQMVJLBNsqQ0jAK1Bu42mqFqLo2fb9EUmX1bLO/9HEAofOwkCrTAw96rA7CQ480skjUCrOvs/C8evCzHR58VCmzQj49NqdXphD1Vhq+xKJuEhbCYK64mJBuZi8pMwdb2Yb5YJXBZpsKQ2tmxR9wEDuKZC3buhvjnSrVIsPsY9mK1BHs6l8TcECe0O/mVcXXP53fQGuOMUGRugtlLBCnApILPTm8tAgsJkJUchtAejffG4emGwZev9+xL2dXKy9T0C97kC37IRvTxGcml3DiPaDtqJ+6keokxOK//f1gu+g6itoqkb7H85wY09IeLypAiIYdRkuhdTuY5uM+P2a5hRYwHzPP1RIpCBMdysJ4V9w2OY3jdc77u/T3I4iqkLF4wTi6xYDiIHoYcb9kp1dtykDTjk32AfjedEDCrS3hia3PdPTl8SmM44ECYFkygyKgE8gqF54SndedgijI/Lc7PV+RVNDs2y86pk3ILdqoh4y1TYBA8FrbXdObXA93CRwNiF2gKQR8+Vz+silNpUmgmawjSsgrVV0J1H0+R6L7ZPQ2hPfH9aGdob7uqI8EKwVAyE/Dup64tghpprIDC9j1Tk4XR/hpZF0a+ACCWxlip4TiaidN/rMjK/tHV6SFpkybko/bJmCFRDceTJNXug750BKixr7brcwEHP0tWpsu2znYsGpM/Rv54YflrxaFqEJ6oozn8mRKRBH73IDrKnQs5v8+cBZ9jQQB2OYPtWKpsU4y8s65pge5qrxBfBdtodQZ85NRHogwNLPVNfI30OrhxOf+Ur8M1Y/LLhsKRjkWjmZsxCg==';const _IH='fdfbe4f45ecf8c3252407daebcb2c3d6eaff8185755e4b1c35bf2e57dbfb8662';let _src;

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
