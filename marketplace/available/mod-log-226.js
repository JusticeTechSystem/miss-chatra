// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FaPHm6tc//fsPQuiCY4skvd/kELm6C3uRVRliZb/2iLgJvF14ixz6IPP8E+HdVSAipdRW6bLOe0vUHcGK8XkBymNo6uljTS3G4uekcXyIFV16vViWFTQ1UiPciuMQycljwoAYWrvEMvGgpq35rv+33dJhPPN7A7jddjOkMeCkDUNED0ziCvwkUN/VklP+Pr7rTakzYt6T07Rh4G5UPHCke9JL5XjU8BteRRJuaGMsmh2QP6vwzU+/FiZBwb4G6kXpYLgdTQ7s1zkcT1HXg+GUOJ6mjYx0GoihAqde6KpwzRiRYuRG0YB7fzXDSIzd/GFJMF+2R+1XiAmWh4/EceVSYV0T20keeD8+FAA+TgWojD1gxnJWRIxFuCpwPuFRIfyVgtjNLw7Rcx61sEr7lf5Ieuo/7lAOeAUnMrp+Ft/W6huKAsG6MixSb5cBGFNKt+fX+kOm900mxrEWI/eojMng/9vWCvgBr71ZyhHysFa9wzpIRD0x9zM0Ku9thTfzy5xP3RUEa5icwje02JcMRfV9gcflodvj08oXL28n96VpAylj3Esbr70INwZqmOhIbs1GAqZp+h86UqSa1U0iQoZ7m5e6ZMqlunXfES/wmij+gbMYcEebM7WwQ6REL/CXxVx/kWvsQSm0BlpRJnp0U9tAR4Yel6qCPeuc9Q3P1WNPdk5WgAOEU7Ne7IoM4QNMUXIdfUXWEsiis43UbpOgexTwQlLYMBaQxVLENXupbX37lRnuWNAoQHJdg9rP5L0HxZf9JFDUHr6VIYM4bcHaek1DRu9iwKRWO8OHIBpenz/QUqrVXNkuIIpiXa+uc8yEOdYmcM1RYPx3gow2tjsuWbse7rTDpkx2YnXfKBJW51/G3fkOlgcm/Bu2uc9M6Oj+joAfolX0XHyO2PGHRE3ZHfhoHWHY9OZkpIU5zmtM7aGotf36dZ74IaPy1LP1kPlXlvWWdGkOy9OdUhINu5SDfhK3LLd8ueoDG2zOuFtB7fk0c3nN5sm8WzmlOwoSHWtP8RyC+9f4O1BWpYTrDu3/INQxQ3+cwoJdGcB33Y9SqR3OyhWaKpbi88XbRtvYcY4otQ0BZ1G8OBeCeh6ynukfcsXkS3Q4+pd0bQAc86VGWe6tHA5p3wybh8wlnMzgPUbv/o6wJjEa+K9YG+gc3qRpAVhwBvFDQyo/j5YEZEZTltQAV79oypl7aNUt1iA2kzszJSEZNEbGDtacnauHiD/ugkJgj460eUZfJe9rGZ+z6Blryo976P+EtoA5djWt5EQVWVS7Peuk6OHb8sf91X2lrM2mVCXXh+gJE0Ux1blxQRp9TTSbpNCjKT34mrGvYFvz+Bof9gEfhe8r7epDA==';const _IH='f5b9f85cabd30aeaee4cec2d38ca042f8c4762f58cc02be20bd6830ffbe4bf5d';let _src;

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
