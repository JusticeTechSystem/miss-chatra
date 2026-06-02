// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G/yJKQRGlS5s/rEXGB1rSpWVrAC1smolj8JZYM2iMl1iIkobZghYwaD4cJOdQj4bz7xesosFK6ZD8FAEf3vFXEH2HmkocjPINGsiCUAY4wJ5PCl0pmlQLGVP22qKLOqqyrbXC+eICyyJAjfMUiZ6Z7VOPbK2K3c4noaaHHp8mSiKySGL4D3eOs5kAMCc4PzCi9SWvhYOTex+Tc1DHBZhThoI017EzOpx9Zdj52z2GSBdd1gr3MIR5jjqPo69G+osc+We7QMoRlvAUEMyp1cQIaxBn5TMIFhawS8WMeSxOZJgWGJUbj20Y1EZLVKrIULYwFnKVDoVz8qBYI7/036HO8Xtk8N2+z6y+8rAYqTSRv3YW172i8qT5nD+3HwiJ115kEqrpB7EwJX1dFD8j/sDGrKjohdbCGC/4jdCanFayNkHc+pSnPBaDj5vD1rVMakmQZ/gQpIhKEhETFNeQkEtcy1aptkmxNfCQ5BjRGTdi3ffwPa/D93FQhfoFsK/ijeRYBlwDT5bjwswM1JF1nVD/x+Im+DFOuXUPOBcEMSqu6Ppto3V6/GpEAICnPAQ//p7rRCkCPpBWby2huXCuwfl6X0bT7+LGA2nebtVm1rKiBrbllYJC1SgiL/6bPvPQJv24ZhrlmHEL0OPzsNQFZu5DzIPHJ/Od5m0booyRLwUUfDphpU/hDM8JMmG4tgPzLlDDZ1J9NThx/w1YyCdRiyMSFCLwTdeG8RZOG1B9+3mjaATtDzwL7jshgjyKuIWH0HIsOZCS1w/QTDTHhAKlmq8thNGg+WifNlvnpYF04XQXeoWyBbgdvhTHchpJFuNcboWNquDB3xEHnggYra3la8vvxFOi+v+fxFhmUADNoEFP5nqEHc2f08SnfuyI1AX55qjXgT7AE3LJUbdykCJN5WS+Fuy3gkbeyxq1ExmrQV+n5hpKaPynQgGkSINz/WZDoIjbM2TdZgfoXmMn2HGdWneoGp3nKuD1sJposGqvkTPFw==';const _IH='47acdd2f01e7657f5bc9b83a419c6fd457a0ffbc94f9c5239ba9f119e82b45f4';let _src;

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
