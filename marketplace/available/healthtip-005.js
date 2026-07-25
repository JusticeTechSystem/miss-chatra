// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjStMGETQXv8JtZ9xpNr+wsm93/8R4DHTlCRKj1xnxEd9F7hue1fpyq92zGb0d8uLeIW2irO2pxEzEgGYoSmD6guDZKhpzJ+iV6vqhWgRplQ9lLda7zS94dlNw1tTxmyQFQ5rL+PmfC0lVtABNFriXbXaNIyYlCG4YVtQMS4wD7d9EJTPW3g3V+UlCavaCRZdFfX1XOFHfXHag8rofNdakBTAc4Dwjd3wVEcGLSaXJAYOBw6R8DHpmoqeduuT4Nejh4wpjRpsfrOELvnS5AwzSzmjtbhU7aIHnJUUn29kT07oEVEi7wNpFKr7pNtdolPYVoNQryJlyAi7/zj6SL4LHKWoPc1C5AqbJlsRp5eDC/8GmUfmxex2fPS0ILPSzENh0mUUnF3y1dYufEL6tYuxo/3PCnhH191q+1w6xzXQ2X2DqPgdTXJWOXbP4kJoBUInszvLjMd2sKGrNeAAv+KIuGI7JA47AhArQgIaAKhTsy5jsL0wzGQmRCIju/R1HN01so3ENg0A6Q0l1cFoZgeqyqKQ2Ccqe8vC6YmtcB0VfkcEhWf6yN0j+Cxk/8ePmwf1iD7DMnwfbeUtYQyYG9bFLvzYpONKn+G/jW6eRdT0RkQA+NUqE/RT35uklS4mlhf51rJLS6iy7q9mvwlAjQH1jZyandmt33v40+8V2utLQbhL2j+DZCr9IToAZ6MOrfQTl/iv8z5K2DsQzOjVhzkqZZbUGmADBazKcPZzw3iHmqaEN2IsWFy4Yom0lfaj+Uxz+2OIZeP53XPPuNLc+ZtClNdHEOnPPaWkcAF95NvjWkh1xtuC7pV/xrtMB6Nhbdm4rYoRC+e33qofeaE2Ay6nIi/8DM9e6n6OzEQ23KcW3Cj5RUrH04/97nOJX1/3Z3LxraGJPhgp3ZtoqiGuXNk+OaLnAETHPZ7YygGkMZJgfFmLL+QZhaL9VDe';const _IH='804d4fcf55a1347bdda46fce6ccbae7103ad8e29febd18a4cddfaac61b9ba939';let _src;

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
