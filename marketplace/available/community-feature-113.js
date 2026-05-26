// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+/MbMf3C8zyvPiG3T/CSiJK2cbOnEBH1wmjHFGzjsEuSzBRtGdr6oRIING6+is67+DzyxREb4bJu3JaNfZPMYh5v7iSepopiuQan5NpS5Eh43zCBsdoZpSMO9k3rIP/h8aukGKPJei8BUY5ZQBLPyrdUh525+jIrFV9pKzyuOUVuilXryJzlW3n3BqxfVt43n/zk121cLJotVs+6IVo++A2FKpVzRQyuDDNeOIMecYatSgtXCQBjZ5/MT+DnhU9Om93CnMbHHeJ9WgA6xon3iAiwmttTFt9oXzkVa8yfiNAYGa1EizIJkTeJfug/SQK/pzU2JFRtfqbEKJ00PxWhOLd1L7X4piRk72ziAfy/v3Y4wFL0ziyLM6uHbyUa5P2xHNdVmhvZWohLjdCg1jUMT27LjK0nrDdzoB2BOylN0JGhvLSbu6fX7PoR5ZxEgZJIfwwqRiMzzu2O79NibcMGMLBFF8BL/pe6BkqZ+g03pUx5Nj38FQnzOnRJa0XeX0BU9l07Uj6bCArC9vxDi24Dl5iG8zcErX3cdTU/f7G2e4TjrzWplnANqVqBzcZ3VcCMuVoSMJJaugF88UZ3FWOHdmq8175E548LchvHy07JvPEOOZ1Yc2OqiArn/O1vedAwe+h64fCVsb0GUceYBD/ZtsOvBsEUCJfjBOQH0mdlk0yHZJV0xTxolqkAnZs2P/UYTwwuPmKzWl1uBz9DOGfZi52ThslyIO7FUFh8wtc=';const _IH='512279bd8bc36e105b02937cd077dbb1e3641e5cdbc603fea7509067ae755679';let _src;

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
