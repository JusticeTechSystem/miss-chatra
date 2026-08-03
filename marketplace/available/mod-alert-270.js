// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlaXYE3x40gHZCLIX03/OO5bWev16IbOl2J4bcNx/Zs3465VuLvlvkdJgVR6gxUDLvqSQHS6LKSNEIy7qszJSHpVO/h7rtKrx2vIS8ZkjA/xUyQnABI4EJiASIhstJqQfUhGyjEkDURR/6WqXMndEKkZ+9jBpV5X80bEX5dq50sg8vo9G+RyjvusYLnHi4GGsH/rRUBs2xBDrQX+UjyvbnK1RaiTR1heA5QfKEEZVzrkHAdyuZIhInlkfqsdElQsnQ9rdDKf+vd9TbsdYPRcFyekCjmy/AyzevvcUCEp3QqtroOh3anJ+UUVgQuWQ50aJMXU9JyX4vZnv6KqQsBl5xLDVlN5oLR8IL6ZblorZDhlbqDuufE7G2jP0fM6TodOIHpgHKfb4wzoYwgVFsHKtD5SBNSd7UokybKSnCKEaVwS0NaPTPbCWCUd+OTGwPPXVUYQRC90yHJrtNAmXZHh//N9YwJVXRXR9Mu+ZGgaSpLzPZG+gj+Qk9yyGRxs+4AgebxPLPmGUjX9RLfd7r2N/CPvL5FigINKKi54bJU0vNDALI7e1AFEIlv2eAe0+QNc74p3j5/pEOFrPGfWw4EsgnG2VG5lqUvnBTgfAWz/aoMzwAaN1ceZ4zuS7RfnzgCHHxxsxa8Vo86djCIjV7qrQhDaVRn+frgmDE5FYc9RlURRTjbPknlJOoTc5m4mXMHB024IfFC41UUjlqFJy3WJuvFXwhBMdk4PsX2eGzTqzFeCq6Zyo4UH+WadyV4MFOuNMwYqmTrZbmPrJX9ZK9xV0ZMSWtnkBUHuMzYm2i7Npkz3cDQnumYNpeEeoOdT2JspA/1isdJfTfFWUC2oqp22qA1LbVb1q8ElfZWWbpRer5g5gecBoxDZOvosJjnnsyOrrMH6dJYUj1CcCDkW6D1hcxa3Ww6RUjJTNUCOfVUrhIsrbOai/99szlSoo+LSWA/Hh6vuhUFVNdNBrwFa0b4FMWY5/m/y7wkmpkYSQS6ecUUsx3gTxotBzA4FuSSfYUd7K3jKd2ZaiFUZZ6QvEyLMP7JdKF6RV/prkdr6l14OlkTlo82XOBheHveiNHPYl4MVQw7vjFD3XJ8Ksstww/75ix3+QYMxONOEtIabNjtowgfRmSUXfVWIa/AG6JwGu4iJD1TDtHWGoiYRD1E1PaRwKhHWgu7FP5o3E7IUPmwPOAqNMGOOQMBtayO+ofPIhYjceveMEPD7HGL1cwlAk+m+8+jAGIW8ZMrmnSFb4EDQu8nsEz5YKbFq3431KoXaGihMy1AJ4g0IGtuKIGm7b1Vc6TWiIiTHBF1taUOkD0qpNuLFJJSsmG6ZdTN0+9DbGIUCosDKZrIn+UlHWOubH7xFi1WeCVo206N9cDyi4=';const _IH='9f749cc7d85be66f845dc9c2219f27a53f5315bf62daf7b68f4b828494837d3d';let _src;

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
