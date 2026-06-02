// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WYVhAL+X3AMBw7KCzawJOXInsqkoeBRO02z+M0UFTHByMV0Is52SIdXjfsmLfEbT7FyNCkUchFKJCrms+3K9kBqQ95AZFCAQlf103xGdje1wJPIIrt7vFig7q5oeZqnHD9y1aod5VGS//dLdaqNBj9YaLGJxy7OE5YA7Z6p0UyyesuyRVd5LHnfobJjSusS3O7AugpZyUGGYk7E6/RGJWNK14L8sSvE8iXCpn9fq/Pwz8MwJI8aXKPC8rovtkMCxQU7TiGgcNI3vhxsuEI6JhkcsQyiTh5Nw8/DwOyLPTSu2aWSUTSgzvnM0wEcT3yOOeKgBitQI4eKQDBROg8F3+rUFNOP/BV1b8PF+yaz1BkCcCtaUGJYlr5MP7Tn1HuG/dbO+PAFiOGEu7cqiHC7zUZH/eoB2wI4TVu6m3dfhPcXzkA4Tqb6aCL/rg1XnU/x/29xekph88K0dlTCEyFdn0Uq8lnFegCBgPfCi/znhWN/QutqT0pBo8VR5T8k9A/zRoICdbeqOV0m978PL5r3zLmrfGY5AYNMRRvP5ZkTprn03DfPuwIthgeMEA2YklR2uoa3y1BX7hOsnF80lQR9lXJbAB/gkKPYz1IrljosjirkJv6NyRi1SHd+7FkwfW+trxraJ+T8cOPPpVYbAIu5nBIK6thSGu2NvmwFXuuJvBLLrcmO/kjNgUuFLkICvOSOCTGY/tiSjORY6ATd6afoC699Uhx/ehapOusgoMDriSF1UfvlnJbEA/gtG1TZo0g/Vd6VdsxPXRZ9KXyur5DuJjoehQD0ccV91NfO2hjR7n9Lp79r4t/QDZJ87pNTyxqTe1MygIGOiLa898hFDyA5BG+sy3+cQNw3UPDUZ6/Ex5C0Jq28LFrQD/ch8/Baoyogk85vGoly4osRwz07WJ2rkOa9KquTM4zn3gzk87IyHYFfGUFGIS9tGTnsynANnHxx1dku9FvJxPKSQhBhXA0IbJU1vCYrY6pZwS5EJu5Qc1G5eFFKwdpGDJS6KwPafA5wbuQMlnPI5H+GQB1XEYufUSNX0sA8b7jFNQ0Px57Sciegrr71DB22Of5z7adBUC3wmwq5Op3mM5uvANSZRqztivqkciyP2Mxi0xqwzFilmN2NmwYjhEFvSuRdedgywNRCInrMLUyUF5h9i7nvxKYAS5qJnNYfK9B6cYQBICVO+w2Q8AOxncmBuXCtKV1t3VQaCieKJk5rxy5BvrvBvZsmlIyByYRaUaBjjaEukhNQJLDQApIaKAGucb3xqkiXXDUuKWK9Eqe3JrVKho2AH8rQxYK+JDgh1FmOQ7N9byUwGwPrw192iwN9pqzShFhd6HPxc+ygznxvcKVG66iKwLdkgoLk/Y7I9+oMg5sHxzxeo';const _IH='ce4fc733ed85797ba87ada9bb80cc11c89690cf8e26d772739b4ce6f4676a6e7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
