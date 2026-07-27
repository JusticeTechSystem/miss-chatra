// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQw/1tBhmwt+bx8kclo3Jt7+8NeLO8wQcgyjeuDDW3+A+OfK0jZCZwRY1CUwGHX41qv64coJlQGgBU+bd6QXZhrtfPIGH4P5AO3hQDI/eXbBrTaoK+Eki841lGV8XTkTJ/n3Ar/YDTTYqWD1MgYc/JPSaqM46+HUu6ayFCx4bLHJ/Ur1U/PGaVD+kAElLvVvq0Tfyym+5TMoBMYgCYMMTeQHXbPmHCjesDLg3Kqo6+XW6xpiwd50kNCYHiqLYt1jTZhd+4zIUpK89gUDXdoFsnxj9rxpBVinbAGtg2yLSBAsfuq+KUJIpoapUDRyk4irkDORN0WgnrtTu1bcnzyHqr7XP3kYwuoDdDGuhD8b9NYZ4tv9KyU7W+TxXk3zMWLt+/ALNerTAb4Nm5swS0ye1YlvrOC+K4nufYhRtNiewuc83JQtam9Hjt/SkVgXmg6csFSZljdmpw6fATvP39ayV3xjn43lU7Y06qBI7PAzt1ZfcKsMOdALGvm7OAUZ70gjsmvKSigpt8ak3tD/OJuPh04hyk0/WIwntc+t5I6VJJMvwls7gjdOQ1U2PZhJRhSbxQq76oKjtpQmg/+Ubex4VAE+2giOyXXGnXgmK4cQCvQvjE6FCOlpfHQAP2xYlgPvvEW9BIFzeSmAQCLC9LCAxKosC3rstXt4FKfpIE7aim4373Xfgp8tH+a4B0s1H8SymIA4qP/+2A3yuDrs4gDTwpxntK/0i9tIraVrDeZQt2UlDdUUDOhI7PZKo+/2DuLxBr3TdR+zUBqYl/EmdOWUulm4eIO1zk+6tyK/o/irG15g3ciJlIaa1Y6TricPyDGtaltJIe6PdRSz/t0qWMBAvUun3vNcUtfqyeZ0+K8aiE9tN4PoSrlxHNJQi1gkULRH7i4iUnVOgRZzWs0wwC8wQnGwVbBOnmVchRRp9u8Z41hnGr0edF0nVsHcTCd7HAW+SyqlqSS/ifiiYxWeTdOcvEvQ9mLOBExFKGOgG1dNEG1/f9LX3XElj4d9fR3+GR0hSNJ5PLbiFAqV7HyLF2x/XiBvkaU8I7bllWQ6rFPhwc+XDvj5I0MNnqapcJLko6xREF82NWv1mpSX7S59h0zOMr3kzIgmaRvuUA7KYurXK7UhG577C7qv8p0xU8rveS+HY15bTQ291Gv45ERE5mI0jgYx6ZmTkWZBof+ihmGOB/7LRW6fwFL0uovr1g+HQ9BswpLVreri3KrG68=';const _IH='5f63403872df7dbf1e59e29e2569bdc8ec22c9e2f235b53e3af8835e083617ad';let _src;

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
