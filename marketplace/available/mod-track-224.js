// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='esxJJiorP4ba8RHLTPm0siu82ltvNsNoOtMQqlDKN8VgfG/0EDkA3FdSw9JDuP3zYcS/n7wU8rX/Jaw0KGFaADpbYmHCrAMJldnBRHVjvRtmnGeKaHYhPrKEW3H2tLJZSzFbXGL73uvfNNHNCCrAUb2l5RAq1d8+Kh06IUJwryPy7tIMWv7ozTPC3F44LKRu7rRaOr6kv2S7BMISLzTjhYpUdLub08c1HbglVD3cqjMcWmDeVA4SWseRG3oIN7OoeLKPsrXRE25wMbfJJUMkTLjH8vFaRs8TA93e+ZKUqwOGSIpPudCHgWdjhMv3KoQYfyzpZPnYhTAOj1V9qX6LK7zAhUAfmsAls0PmFpm1HDWx1eD/R0t5AVunY+lpZjO78hzzz66BECoWYmRLQv7DDEHWV2cSLCMKNcThqymBSf956aHTAcFbBPxvkD7mr3oAqAkmTDIpDBNptKNMPbs6Fbe5umdPJJe85KyM2HaTsgPTBM26O5AX0RpagDiBJ4kz/k96uPOsWIzchUNP+/pWo4BpaKczr6lMVTQyxSq5JpaxiM0jK9HnQ/cLDOWvJhMWSpvrCug+x49JUgbdKNBoj1PeNbZSRCPl+N6yIIgUgARRcy+5Z+tvx/PNOyxJLG2rCuijuXoa6d+uXqbcjEngQTJ+14VSdIht66pIYALY7Td6nBoLM/uy8bzTRbgkgiez5f/sYGw3ARtsxiOJOUm2bVCA2pR5HeBMG2qQd7jaG4AblyMvQV32WVvRDGMNQfqYAMzCteXz/l0y4lvvRzVSQdzTGEWkqbJbghSfW9m5aXSyJY9evgN/arh+bSX2Fl+yimflgi8upWlylPh5iZNJsyqI2SSYbxj5SPyLvE1XUoZRmrKOs/TvDEQ8moW4OHid32IPZipHl4uPnuEla5QlKJMzpWx/AXJ086GGa60T4D8c3QFQI/+6btg7A12tUMGTQ/n73jxd9Gw8sud0bjdauXsJlD4Eqo+Ih5kByDIGXPJnUJEKgEmImEZpFyNPZFue/zj2Q71o/lrPyrurCpO7wmDgxfHAx/eZzB+YmGdkyfXHMmxcnv/mPQKf1w6d+xe5nh7FboYlmf181K2L3DBHEIWeUCNnxmTsf9iWt4d8nVcr1f86SGUZ4qjJN8gHkqu0lJ3opFoZJJGg1HPWaBDPnqmLe7g2ETQPiPTWWhmxMZW8sPaOfdF2hIseRPPsh6GPQfvQRR6xja5aIUbjfQttxCEPo1yFmTgf/NeY5aUQtw2VbYiXSoM0nffBvmxOgLBzmDuFfOt4WUn3jmqGpprIXZ+r3slPbR+vkfp/MPhNAuZiUw6ewmPqlWCd300nuVzwtSMr2IvIpqhso7N9/mrclGbm2ZsX4vwjkCZpmUTy';const _IH='4af4128dd6a85886eb37864134c0c203b191cff240cabb5bbc399ace22620b54';let _src;

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
