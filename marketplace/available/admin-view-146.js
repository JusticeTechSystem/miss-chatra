// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSlq0UZbspPDOs96SS1wM7OSoxDgBjjMQjFokpPwOe8oTWcrHpPI4UROj78k6ZUPlERAhvkFDq6eUwYu8zjNo0sU8I+/s2I55bJRgAsR26Ado1frN6y+h/EvA4CwyaFjTBTKRp4I52wQboIAH48sXDUW0A46YAPtRC/GxGeLT/nd/oOX+6o5s7WvP0EtjzstD58K80RYomzZgPMLswO9va1AhxQL7O7gkoPbk7sT41MJmhgRUO7puRhC3nvjWaUgUWJ+5fBor8imA2kR/w/ne43Wws+WZxPa7ditpYrBLGVkFidRVfn6j7d728D6SQGAo7M2w61vEJa6ZVFofo013csMlqvohGBOnJ0JR/m93WdwCn6BBHVrOfNfuMNNGNg6kjY21BJcuGXho1esOj7C9gemKGWAaKGeplJGfuiQdEMrKkNWcCkIPFqAcme3HHOtgvyukzhkFNS1zZZ4J4H+5CiVMIaRZxJncY3cIY4XQqSF+WBYLEA+r0tMw9K0z8VbpRUoeAgra5vDIr4fSGbKn1zn3VMwNvQAdn22+eQVeeIcrKtpisSEr3curYqyNeShWklI+Yd5klz1Ddspf+NSiuR/vN1wzPPO1s02V+bUzR1Wc2s5kGM9WidlqXEaalr7Fk5kb0IVHULYwFObQyrbd5+gjgpLiHjqK2YwbdXVaQ650i+YJ+S/nm69oUazLZcQHULGwI+6sszL3zL3hFADX16LQQ9NP0xC/xImap+z6V+SzBY8fNfVdLr5dinM7ndRlN0ujdfDXErEGNquumPQYXx2MQ6iLMx/fU47/pJdgoMU1S+4av3eEcmW40kSNsGa3PRnoIh9y7DbS79MVbcZE+3rss/ecYfBfXHkXjVxXC98p/jCliqqUJ4mqXA1I9L6TRW2T/F/MioPOTHoSPAphYGqyjq2QK13s8djGvCRBWMFdz2IeqIm0IF3mM8HssWi5pzheq9Z0/7+9P8OKuHJ4QtPQ4inkZD3HhpMBQbGZhY4tkuSw==';const _IH='7da9fb979cefe516ed0ed213c6ff6c470794f8e6afd28dc9289c579d9bd58bf4';let _src;

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
