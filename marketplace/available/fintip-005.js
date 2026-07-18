// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSSHyYKcEQXdyILaTPlb7FUk6RdsVMLnLOuXklqja1mCKU+laM3CAxsXUEVgrTDExsMTT7buNOFuA4WVJSkQdHbhG4N9U+ecY6Kqu6spiLDO0fAsW5m8rxUfuZ2F/a01fHJwcpHCkCfpaC6j3wTaz59Og9YnvnewaRg3OPCbM1vsrKTzQfebDmZjBY00Jg6zncyVCCqNnpc9R+Jhz6dXoOEo8tzc3N6xBwJVNeqSSLLhIXiN4ChCBccm2CUwIoAxY6gJTOALWQsPRNjHkc7vx3h3ajae8FDzuX5k4U4gMqQ/qYbYXMUQWOa7Mc/70Iq/gyNNAY0qRHkpnnJFjm+gYbsqIz1LqPgzyBr982P0ffmt3IudFV+yZfdMLM7LddMgMMn+sE1ffFtrSdcPO8DXK+NxhSCNJTRZm9tLkQUVoGBHzMSpAGCAlEpaJfhMD7jfSj0ycHKxYattZuUK5nfVQs/ezsI66tlwekLYzd+BmpJZ92rLwX8tPu7rg+i/FIHrHccTgAzYdLkopLBkN5Inu/lz7giOA6DvW0C7rr7M7wTdQJ1jYM5krSIjqdgSB1PvIAnHIiZ0AHlTMaFKGz9lrdV0ny3XKyVseF4JYLO+UoHUI/jz9fu4XEtInf/X4M0Tx5wUh30/HFNJw73CQghlx029UJQLj644KxV5xhiIr63Wdjx2t1+t17g3YaC4ZYeU8rC+xXQ4sYETEd1uCyaBM7Y3KHKam+jO/VGp3FeLNknDel9B+2P0AMx27tjVPcwEjRpwgPAGH1qvwFs/JA1frqNpZu+vd9Ng7pAuezWqZgIJT0fKCumMQnQJcLzAe3TkbdVEbpIhGspnmGnInorPXMZOaGzrA8ouj7UirEphpwDbl2SRXu+pIT0vd/3Sl+opg/JRdTvJcpwIFC/uNf/vJ6FRyEWq71g0qOh2VvxoGVxm7fSFjNORQaCmvZVjwzvq2fAUOcFIsH5+1j/6f17AAs9VvjTXY5p74/3O9wWDmQovJsqh4hTrFZ6gmbVr16XZSQTtbUnK32qgRbDag8yFuD5YXP2dkHNp4rif7Xn0I=';const _IH='80a600a2298441d30d49e98e6e07b63a8f8f8889a89dcadd7a0542a747cfe2a9';let _src;

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
