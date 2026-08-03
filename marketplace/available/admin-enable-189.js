// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/wBFyJpzCjxS6cROmpOxkqKp46ZkF3CuzGy0itLgQPEokEDKjxyyhAIwUPFrpwPK/BRAclYG+bCDHN6vfx8n/mZmhm1n8suMVDjaLZAKu32kRmzm4rN9PiB80+lsoAFr8UDNaBo0Doo5yem2Ax5Hp4rWRFeuovQJGxuqa+xlk0hDZAnKggCoL6MA0A6FNIW2kRAHXHT2sXikiGVVLGfuQlr81HeLVgHdydxhYENdsdnbGxs+g1USga2EaI+eOyypAWUnYfd+tTeM4xOegoRWcxfWGprYOieo2tFbyOr01ONr8wR895Vm5btt2AtPRBCv07PO2Fo9XcVgG6OQdZEIZIyJBXWbyq1ucGE8GNv/coXLP581luRdKxhxPy/FTA6k8eUi1RVUtkGtZqSQQwCGKlHQwYzT+iXahg3xaIcZGbcrVgf0VX5DWcDzg00tDfTCkdM461tYTQu0MweStCiK03epj77NeSU0+12DALQgdzeTpWW1ZKrPGct2ZD+/OL1OleDd8P7gkc7JmbkGF63SJEeVAUBpESxH/DefRD7kFq+4NIaiXsoNPWJ/xA1hTIzJCIfCyGpIogYo+7Ye6A7MlgUvuJ18WY9ffVejyXCcZgbfeGJKt7kWjg3PI3eRazidMcVYA4CdV6uXVMYrlLxgRoYyz1RR6EjLyFU3MT58TcFN5actZFGhv/F0kq9yWDPW+C3VAngJJiTMgqSQoK7qKhZbxNhRWgKmhiXN3bcyCdyhJU1gAzdQ96rYjYBwbDNhAr0BBpaUhDl/vg/Nc99Gu4eNsqXs+wI7FUfHYP7tL3KkUY2R7+HV2lMwDyLEs5Vf0H9GLcn+mG3ece+NXwXx4NLTdka/MAiUVYu7yfj5v0cWELWjRRUgW97fzTaVUcDcF2j4vwlRzy2+3NqtOokv7FC+vh7IhyX+s0Q42VdHEcvKnywgnxop8eMEEHqTSBvqKFabVbwKmGRoMXX8bj59VmZVCN6OhxSGutkjm8TszAr/SqdCAsmYwXH+FIdvCEg==';const _IH='8f4512a8e2689e2afe58f03f240b401210cbc2bb9ab454bcf6f8942c9ca56b72';let _src;

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
