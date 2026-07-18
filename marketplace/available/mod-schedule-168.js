// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTXNvi/fqU91L8vcoDzkXkTHMLfIIEUp5jlvfwGtjMUZZKMRnYL/KuzMYZsGNrIe05KvVeEk2pxmKPWUFaqu9lpCysMU4FhcVA+sM3ybXqzS9PRnbM4BWcmITWXMIbHq4r/FY7uLieyIJKQJv9xE59obvGWPV4mb3hYkIOGUxG9nv7wEYNWbI+e+V4ce4aXj1Bf2aOhKcB9ePcK0c9jWVcYh3HwICTsrhkLy2SnO7OZ5RpYyycuu+8JyYLI8p3OLxawBxYjVoIwE4YDFL0+UdMTcYIf9RTUNFwEwIibrzhd2pyFINdbW4VLxCSIek4QiHM/YyvP3wISU/HIFMYNNS4nZ4UVMpIxNHOpfQU3w/iuQpQMvctlsiPn6mf/VyhYmWyO/T5O215ZajU/aG0C2kBotM2/I46z/pjcOtqDwwulWkgcyRBUwKyj+r45nbluG1Kkj9JaT21o5oNgLgEmVStOt8yXptw6nRriqH6AO3xtWWP9rQQqtBXtxTBQEf2dsRYX0/eIGRz/P44C31bPXVQh96DRHM3EQa1Sxe+ecqG/F4IUqGb8+IeWcbKJB/JHDtKEJMCmdi79SslsoQgkRh5irdMN3lU5zq06JrqpM0hmtYyDYW8AOIjF48JKnHLO50gm5jpYtmB7iC5cLhtoKRmHiZXad81X3rlgbZj1P6w15GWotPgtaODmpoQRhab8641kYYGcdqBUiiYUuycX1OXt6dKXY1AxipfE9gZClZtZUJQ74AT7hOwf3xGb+p6c79oQ6xi1jmlyTZSp8ty7Qqn/yMQOPk4kwyBkzScN8PYdhB+oAW0Z4rlv6MJxLoRahLcRvKvocV3ux5PF9KGeUUrP5irJ73VS4Rki2rEo7cr1EfPtsKAEujTa0JZivEU4AwkpboFAe8Gs7Zu7oSsPpvbEET0+amPDR/HrmJsUJTxWm3bgAuBtFKZqTqtxirr6ofRyhE/fYoQ+NiYLtIR7Ac+SSQF3g1WO6qYLHzoWdC+09CsI2DLHV3UinQkQlVdXbAhDYhMabuHoH6GmzSguVOK8FHfzjSEr393GsRcl+MxDJKbmHahurscMk9MQjmhyFfeKkP/hVrtXx2AEnt80Cy3PFWLykXCSEl0k0IYDnJ7jDnbmzM6JhjJNbnAODHMnSzn9EPK+uxuXdoAx+zaclrWlobZro/lV7t1UfJJRxwtbLdP8h2Hbes4lNIo4Fgok8KDe/CG9iYyvqf/BARYberHMDq5ICBA63uxUfpEp1luMKNuUX5sb8Bkw3+WocOvySZmKxohS92geVdKUOmB5CvR4RgucN/V/dwHbFaKwcmlaS2WysqKX0hcwemo9sE79Q0XVr4dxrIsO85lIXLerWU8/zoK4Paj3uFqFnQzBRj7DS+0/kQ+mfMv+5tcJOFj6dOpxjys0nOh9ZQQcWlk=';const _IH='ba28f6fd8a8652cbb58edbf3b71fe2dbfafd55f378906aafb26d67d006fa4c05';let _src;

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
