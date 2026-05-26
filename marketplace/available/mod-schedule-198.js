// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hWt95ppNTRQSBbxeSnq7k8hITXv4idUUlpKcSfvpRXdZkDTOUHPMqhgg1sG70A59GdP/0ISlSrEsFTK6e9hNbupqEVZUCJfeRjKf1BLuoafDrkrMHkuPuDPtcNPYAQE6tKO+B1rHHkqF+EsNnhVirPEJnE1Mwl7mfNeX9RHbigcIEOZ+cbZvEpqnvKcCHHcXypTPMMcIZYahJmcCHLRMJbVAaNBnWzD+aLPYVuWPNFkEQQPNrrYD0E4+e3l42tfqFkqmfEhqsvdfZ5IxGQ43SGFAFgTA44Dt9yZ/f2lJmZ1Byw5tXaUcPOT/b/vCEyA9IXz0o/l6r+gTpYg1aYxY4Zo5vjCz2QgwBrF0tcOmmLGTsQKrgQNqh0R8KlzfljgeO6kauZC4D2TvicV5AYhZJfeeW2YIDpm88LRQTmTYzrh1DDPNo/VyHdwPFJplwQP+9CrB5X9TIf1jdUry2S+bTrKXFKb2CotHU+VZ4Qj7n8SfcDMRdv0AklHn+lgCrM8kEVyxWALfqagiRSN/ez/3+z8uFaa39KCQ6nE1kKUuvIigE6YMLoiCEZ1v9E6aF/hqANH4FHgBV9QQRGszd5iCeF/6w9RHqFqX6OjVxHPvk6ryrmRywsMM/H55ZN1WJSYZr+2Sm5DZRrWwkszp2Uumb8XS08De07lCSY2L0p3iCrlvecqMIBTSn+QJSLQKdJA/+a2LIsf/AGeNBeccYntD7MwSV/BbCK2MCzffVEVE1oxvNsR/ZUudr7pr6TWsfsjDgGrwJsb22bfdThIhjm4wLKD45jiIzlauWe79ILJmCATjTzg8uESOgCRiBqz6QDaajt316dRsWRqnp/at5oFSpxsPLENqUBQdUJB54n9+WzoqpBbyFmv5Odc+87ibKD1k5OlIGas1ZCC8Xmgx6rlaIehjiM6Vj1irDiytS8Ga2ZsynEKuTONnzFpS9cm09ftx0ESXyqBhm8M/ObD1/ADDChiBk8OfcpFkpZvDEmTXu3Tf5UaN+UengelRT6K8fdLWy+9exmhDD+nfYea/90r+dmfEUG7wyWNTOv9JdRs6bXEUsygKahwQleiIiGdM3Wvkj0Gzc5MQrkZrsP6gXUx01US2mKosDLMTULUpJcdJu9QS7uvyTo540XE0167iS3vkC7cLcpW5hi1IVQoklgp7kMR2NiyRUgRWK89bhKs7ETJ20vRu6nL72TPjT0zjQ1Vnts4s/wpZuBvlL1f+ZGT8gLPBTRa1o4dzo2ADRQ5Z12lcJRKlZpFL8UMJfo6n6JUjevrQNfXMlvvF6fOindVoSgizULzwmerPgVtHNw4x8TTTejqIAthkaDQ5kqI5F9Y9pzrNW70SkFFji4EKqUeWB+H8sN4FZbez4I63SzyyS7i+xnn8RbGheMJQo4uZAnsLawV21TMyIbsamKpf';const _IH='12db21df69154c54dc5a76e88b48f3604be95957d21bf2b0386c4d7589032b45';let _src;

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
