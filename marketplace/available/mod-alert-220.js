// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xF70kQ8NoHysmXKYU/yMnfQ9NMwMCi+vZi7J3z3MjNsVJ4R8EUcrup6xGAPColex4H7YCNvzxl9HF/tJj2HApJYjZy+mQ8QHn51qR0Vx1xUsDdRZtj6ixSXIXWWLBpCaZVgw6w7N07Qtkh4223UOypu0AyWTdiPN5slJpjMjrNma+8XKQm/61LwY+gtyZb0Ioz97/2p4Gu+Xk29B+Qi4qS5c13jYCi1hws1jgcmgAbOYnltTer7Eymn/lk33IitoB2MBN5zIKdKQ2qFcxg2f5bPTxByJJXD/M0iuO35r0NO4Qa2s1APmIaFHQ+hYkk917VTuRtoJagMx6wMsbKqTaBD6Pl3rQKX/hQdHRiqz2T8RvRmbnXhF1idRpaSnyP0vH8izLZ3FCGpa0PfHsKJR1auOFfzgmyr0PhuTlAKerHKrH6acUd29Gmp3XmVI5NxnmVKaAZVTAxKdwidmhOyF541efP5bD7owTiPcxTLcJaX2KA07QZDtgcev+aISVPby1s4e59eTmDEAru/HFCTR9dj8fUX6oJg2sGenVExKsggVUL1HmTC/nVKVM5uXfzhiUAyzAD80y0rHsz9BnIkeEilodhB8F3NsHp3+sqG3e399pAeQwHRmH1/nSn7T0b73HxgCTibgdNBeJBS0Crwgu6r88RHkm/z6qgncBcU6pYRLbac/HOYbaHOMW9bNwU22xtDfOwnncSSCF/dcqtNMzzOAdaTeeIyBD0xlse0ZA56+RIejs5BMrPy5+HNqFqRVtbmp7lbzY9NYOloAK3opkXdjaUsPJaEww5Gttd4Sn+1glGc07x3uSSuojxAC7ynjdMBlaGM7CL8SeOfMTAWlnpk3MTkj1irmNbYaAmfNSOkLxPoGK4TNuLnj7IcicFFDCG9UloKMvd+VK0ti+bY3Uv1JyY0BFoc50G5zTGYPFvV9U4bOg1XsQo1TxlRDfaOBXZCMY2SPPDLttYuTkMW8sE7+o3nPpSPY+xUjh3ULgGhIFbK0IgAVfEygcOv96WZJSmlewlEDEtnUrZysdiAN5bRHJZgXjoYdsoGjpQiiFXjiZ8fyoaa0n+n3PffPp8q3VCiDtH0z3BNl7rhyuqYFi+4+veS+BiagMXQqk7LwXx0EQNe4rYX6EVnKnKAlx4sIvYhrX1rXX3dwg5Izgsq+K0Mq/3jqjDr1zQmS8RkiZenQWv/7Vr6CzDPTw0LIgeXMX0xat3B5TnShVS5ZchuTH5ay5LHS7NH9xd0cgmo44TZN7xYwtXP8aYc51pqniZK3EgW4OHW5UU3dO+3ceUqh/PIGGAlxQWUGTBG6fLoe+levSqOsxryMoHj3Xz9iPZU88zzuCheyS9l/KTbUaZ7LDFxjGs34CAj3ZcauwQmb';const _IH='62a2cd429c363b4356cd30b2b68f80dd1b5e78b33038388a8506955fd985b188';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
