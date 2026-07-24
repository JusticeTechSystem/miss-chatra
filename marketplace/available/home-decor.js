// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGR19CDtKhTqdYYRcro07moEqBjTEvetD0fpA0e8PI3LKTlsQXMJ0IqDVqFmkFIh8H9KSwLaCZxui2XFluEZ3EasHqXPKQDNB/waWxVHhX5nTfvEMb3vFYIMM/v2a4oeh5/RpZOsx+Z0YlIXNOWNyztg1qTC1O35puZ7/hM6xxs5Nx6AD4RaAjK9oY5ROy8iXMh0Dfsb5TRxqSFCIY08axNjOBZQ9vY1YR9I7yX5vS5nln1/wHadXVHu7Zo0MlBSfGJgaCfuUKDpdN/CktPlnYDbXNOk1yvPBr3uqlCZ6saL2ONflNnoQUxxpJur1JprLLcUqWVez2DAlTX7nqixmAnRFUKARC9GCtZNl/NTGrlG8nFTW5yiZwm6OpPRI6HuMb+uQJDEvI22GcASYXVlF27Zdi8CTLPsn1dz/wKLMjP2Sd9v35y2sVATFMdztUQBBJmeoiRqfZj+mMVbPfDF1Ny/1xjTzs60GzSvY2afFvezbxRZay41amd4NE+bcHzNoBbLg9hVVvxVM6Z1q54bw5OYKglh3a3byvaOirfp8rKSr5iuvCL2v9hyhraWEJYgfDG7sJVt/ReNS2rH6F9zaEzao9k4zPwXiBTD/XbQCG+ppmyLPehtQqWmdcEzzCu3I4QJnDsSeOZVyUrVCxFw5WIbB9UGX3WCTIgEn95LBWgcHPHZPLl6fJ3YZN+0jlrzJxFRKMZph7yu48vOqwEydtDfPc5ImlNlwxyctJ1JkxBlkZvBDwAayo2C2xc8IiANK6w995sOCidb7IC3m5MWaOJbDXebJd8y7dAJIezGKM31h76FLZ7bHDVyY9HGYJmud8A5xo8jOOYyldRBqbPYqxUskx3De7W6bXgPNRZH0xuP1icrPiu6agGkkTCdlrq+bGZSjHuNrxv3jZ/Gs3RJ82RZk6wcb92Ek891HZI75uZ2lQagDtfXMH9ehtRiOlF89SGmuZfZBXsMk1CK0il4ke4/JheEDTjuWN7Wl65Uxbhcm7GiZuVde7fjOGXtRWOz1tyR7zhkJUXaw9olPZ1AEIF3u8zf7sm6BD0hVfuHIhD97hLCisT9ENbQJANyUSOutq7Yrh3d6TZCh0wRz6huqCymxOjFTq6uWn4MqWaWYLDO2CL4qCn+ximzgoutL1LSFAev5HcV5BgngP3JTGC6dkMNm5RkNwPMlP/eGyu3hOAWLlCkrgYv7x1XqdJ7D7/MWnUnEdiqX3WB4nBypZj5boN3f2sV8oFR19TBJjwiKn6Fqv8+syAXSAFwJWkZfEaLgtv3geXcQh123iUAdFkDrGKbuGyuuin/KSt00I2K+D1RqD60A95/ZzFRKyPwmU0HH30HuJWfgB+totVZg/QgDAWE/gugLNBl2CPuZkgmoPUQxiU12RqkMpg7HEU78oGeraxbkwl9TxyylbdHtWHul3ME7OFkTfUS4sOtVWACVjHrgJzfJqmAyidDyY+34yypShsgfTZ5l/QFk/oD2i09WFdgX2ewFFqLaDMi2tnhIz9Zi7vPalTK7DcaNnKHXX/hGs4+oD1ROhXMggCvQGB0saVAouKFag9bZt8NrPM2odRQAVB3muta8fMMguPOu/v3BrxkSy+ppJgrapgjPYE6S2eUCvT+4GGQLb4uDdgWceXwlbOm3/hA1WkriUeQJKyjAhnMqut9yIT8cUJ+d0weeRngPa05qkr+LbFld2Aeza4srZjGnywiNyhfeL4fXB6beVCqSldCzX/fUNQ9p7k8RnPG9Fvwm+sJ1KeqM8FkRtPVm0N7RHIYPZ5JZgFSkLO1VCQJxNpETMzms3P5jKCc3RJYVi2wqM8I/i7m1y9iwfbokDCklEfNjjFA8iXrFAlzB89eS7MVhST1xGVjJiZMQBPg8N90DBVA==';const _IH='5125ad074c1d6b80c4daaa85447ae1e8038a8301c0f317dc7aac2b91041ea482';let _src;

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
