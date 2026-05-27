// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g2X2XX6ii/9Z4/62swbYCJkt7ANUQyDqF+KM7XwOlz3pIDrdrnasPku5bpoOqmFadF63ToBceomwo451gWfZ+CyRNB3ifTSwdMccDzAhv6dUTy+6BqvbeaHCn/yNBVa/m2TpgHxgr53Um2qITJiXfxeK0G2M0HAxEaZe2uYR1klk5L6V5FqPLzNfQTiR8RfddiHw68PQHWiqr3FFVt2PRRjjdDXp5dxdo4WXBIjxhlF9xwE358FHVakxMFh813j1abBf/r+xM8gFqL4/fobdDibOM6/Zf4g2DbLlYA+YyDUO0+nwVKiyCimoyWrAmSd65s9tLeYw6wkyPbrpl571Lxj0J2QxEocSaJt4auG298r3rzqFd8fV1armtIbxbsU3MdXeglo4QO1GbeIjh/yQNWNsSo+CjbALnGkEVTzTD6jBCEC6QwbIgpdI9kJhZBISuFEOAmd2zCB+alkk9qxSJQF+zborBVy3ITUcQe+TrZdNC9REz/OMA6hVBsfkdiBTol60a+N9FJPeO0ifMZZSVnAENvxM04x324iQkXMnBwZxYxCnGH7LlaAVHlmSM1HCrJaMmhUTXtnvOkeQsv9SHWsKxMGCRffaonDB/agV9qEb+D08pSL9yLYB0jpo1PADKJoMAVSjvI/k29suuVVv7Rmuc3wPsWjRJ8HbEA8PuAAI0PCkCc8Otg1RErCI9RbwkdqBnah6v40gru51FDT0hJI4dPmOsJmQqSVbwbr/6U9ZbXb4+pF8D4VF4GQNNhyh7uCaojRf8S0B3WQ7hyB9Y+aoyPq1HMZqdKeM/rTj5wJpabIVgswGl6jMu1/pBt1UBy3yLpsO8uhtdCm6oJOkEOlNMxyxuWBonWq8+kJfsWZOmvCk59yguVFY6gAGMXbg3LhwX0h8Cz32lrDt0mHo0M4UdmScQma64NmiqJfjnTVXQJVu950iSnbiy5tC5RE07A+BfYmlq8RCTXs+qRoOLX2/VoFl0rQbHEr1eow1HVV70jqsAQnTEBmhqYH/BQodhT5JWhhWxoTPk8P2FUOPiMVTv2IEq1jGF41sSVNB/egWnBRmP8nbO3T/8vzzaeAnELmfEAFiqjWHpslPlAyQeL6xzmZel9LQVuMy6z46Juj/4CQ/Cy5vAt7si6/iIaLj5uj2b/gu82qY0NH74+IcAdOj0ioABF9Gj03fXG5E4sPQE3b4qFqeo41LiVRNIvPeQZUKTf5haZeJB4fHuI4hwrjG085JLjLkE1T1cnO4xdtR4WNud125G/yuLtVTRe6BCvCSRi22Rps6I1LWW4FGw8qII73Jx4R3v8LoXrdsxzKz58vNMsWKWa9k3PZfiVtAtTae8/Xim7jO92ZVW5dLaY6Tuivi7cbPlIELE3ZRxGnwqExUVXGt0VwZy9n1jNp+zSJQr0dhZcrTox61';const _IH='fcc09e7ddef8b12c2441f1de1cdbddd55135b7f4af788d80b862220d1a9df949';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
