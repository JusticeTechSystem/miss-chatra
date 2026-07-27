// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQu7wmxmXkIlz4bCP6WfkG0Bh+sAXH3/y5cQZQy6pmuFfUpSIEh9q6pK+Uo9GMMnGYly/NExy/PkqwrKAWQP/03pXVV7upEGcO2DUAH0bF3B79qm/b72xYZiF8vsxHGng5tuzpHfEN8DzeW+8RIy7M2bcOAZfzsPDkNVm0/07B5CPE3GarcMHoyQNKz9mp6mXTB5nUVNRssSKmYyphxadnwMW1nikzUFRc9OK03q3M79OxR73I/iqcoHHKHalRTZ2z5zGqcPUjtZYU8DbakCvjTzb+cxatgnyQvWe1smF+Zi3gL7VXbsMTT47sAc1eV0L+9CqG7qNmCCoG+3VGmT1+feHFG5UlMeDVJMSX462SQXxTJlcbJRPp7Alf6IwSE7qN+y6cMiut8n/nWYXBk6NXmBAqAoMV28XjOi/hXoq14SVKuIm8yI3PHm5h7tGIEk6WJR3ZZRUvXWsy5t26RlpYMSvJJ9on53S0co+SLHOuwUN6ggT1vP4/mgsjOGou7+qdGy287uvmnFi/9/y6epif517l6RG/pLk0vysWl/osLke7dJMoAd02VpiAP0y8pYHD0vCexZVpiei0F0ABUg7GdmB0k+RX37WOMWbcOUs+e/r4cI+3FLUiLbFcl5hhn6jZ+cGc+pIpyhcWSJsuj2/gTzPCcFLdxh1XE7vrlDAd/rXmovsB64XinW0xrvmEBzxAiHdaOJ92DJLDnw3zVKoNtA0CpVPVraIQb/HLFNjDhRknmZrh7dVwg59DyK4/VNw2OMJdYMXyt4wAQbxGaMLk+BzQtecQkyD/Muib0znNxU8H0SznQ53JYcyWuYZJOkjgZPJ+BFeSMhOfWcv9ItSvjHLlHbxxVikThgDKgylOkXr1VekHc6/dwPxS4VPhdh4M94N3UOimBd+XHx4JKLUUJARBrEv2BYd7I8IQ8GL84Vr6IlgUX8UuevEjX53mp/CUqpfEanK/9NmxcSUCkD7C+0dhQUWSgjjEPb2hHI805q4nAy3oUsWi1H9LaS3Vff8Sk1s/bwyWq2yFQdHVEIsnhgE+4Uu0MZihrZBqsUkoq+KjQJOiwScLYw3AJZcOWFybf8oqg3DsUKhnTO92B178rOzbAok5uNKCI03DqbkJCAVe2z9igUSeerNwLBUqi10RbWLYj6sb0B+Wbm74PsPzHbux19aZBIdiOYniDE8f9dxV4t6RUklcbaqqzHBn/xU1tUAok7/XNvFuzEMe3O+a24FmHptL+qzeUOL5eYNTW/8tV3buZy7h8aB6O9UYl8lwFBqXUJBaRFdAuB5qohiszKKlN4nbSOWhFbtm5MM68UPc6fENSLQwFu2VrsMFa8okA0TO2C6aBHZNZAdDzVBMy6/6pByXGfjYgz0I5XOjCihncOFeVGPFxlYojFk5EfBmTlIz5E0Zb64GLqc=';const _IH='2280f836c7418732395b01953800ca4bbcf932454c63b7d0cd6c006e123d8a57';let _src;

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
