// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ldi13LARllAFIOz8iAGhil99ss7omZU6KATbR9lL/SerpwxvJl2FGfxnKgDZQTTYdHffqz9KGXAzyVLEsaV37YtUu7FqS+uAr52JTG7Uby1pkwoANJ3/eopkzBBXwD/uQhXZG9+16jlYex4bJd9e6QkhZ6Ub/iuTSqcDo8107MBL5368z8+QYfcuLvIg8kvdVyPE+AaAK4XeaUVVv0WG6Oyqbpu1JhGQ4DTmRYE41YOzCI9i3NXnur+GpC+KBOs3pcYwZ1BsbLI1UoeRn7OoSuyHhJWMj8CWMhn7lmuk7c8YH7+Fgt9P23Y3piCdSoCuvtMW0uITYjGJbIjQUoBND0aYQJdBfakzKFg6p6TXi03PsmRPTLpO52hAvWrGt2vM0v45zALhV1XNklomSH0MrgNOAnoAguuG7Q8wGTXFQyn5goq+zHdVz6tLoCOmZhG3WaMPTa91NlcPqnA837sGH/Ghh06kCrk3AA20qnMp+SyqJx1iJ1I0bY5Sl/riC0PrLQtjHiyKkweoQ5CdsnTnHa1ESTJ2jwCzxHeV9uqckJw/1SMW2sHERl0To/cFe74k/bQSf0vnwM5TBMciigf1kAbn4UiqfiaQgEdK/KWT4egktp8yBZ+moPZdabcj0JeHjvEBVVtlNa57lY3I5MsxY+TdGuZRSTFRC/Sa72ld/jdTsOnzw5u8lyH51O2llAbp3wSJhudtuFWPmFJzcQXrRrU1SH7QDRaGNkIquOU=';const _IH='cfcecddb144c267923ab86ed17f8d90512516e941fec44f16038fa5d2c0dac95';let _src;

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
