// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ov77yWBEcKsgYG92hR/CzcYDs74KjTDBVuk7iDoqaB33DQ8STLSpgBzgdXGkIvowh7rRVyaaet++wsZeLASruBxuNyxinBDoS3TerWrEOTMWU9O6/lOOcTZgMO7bMG2GGeTp7gUjyP/22FdJeLGAYjLG988ODAyePIaSx66lNCRDlEaOfnkgyfPXjyaY+t4+r7mxHgcsEKeDDzxWsvaTIMtd1uVuX56HcHdHmFoI862KukJ8V1rQlVEdBPHQe7IHyr0T34wkXvlNorM/D5a+eYufqT19Y+N4ltKdNx9P5qGktyxCSWgwt9xePmNLjXN+TsOdoofiWDcURpT/feF12F5iUqSnkVDO/W8HMfiXPCEnM27ka5GiX9484m+bHX0W5MqkWcqSabS5SWtv/8+0edvxf8/9SB7IrX4sYT9IHmIPXVPuIhU7yQDNRuCo9hKvjEfaWOD5eKCxhZOjKCV8VYUT3jeou9X3CjYvdvbmyJEjPSuugLrY3uBJVgAnLJ/Td3sLfTk5GPvkUTMCpUSMpGYhIUrDcuDVFy5kUQWOovQ085fxR8FooTF3Trn7uNBSddJZYTl2dWIWji0EXpyJR5j/oQnttRNYNxJmYtjKab05Zo5f7miV3vvjV64JdkX0tl9sKY1iD/xjHMbKXuKPuuVh0OV7H6OYJzMMdDVdwQBxlIIQ8pmTxKCa1B6mpcv0o6ZmQBGFn9T1cetMdh4aDfZgte+s4wEykrKaZIcUtvpjY8zqur/IFuZOxMiUgzI/jX2eK4IBZJ6eOTy2QjkWW8RDOfTZRw5+KOISOshShXZqYAxJ8XPy4X0lvaSNOAwYpaYB5SwFJGCG+lMe1cm5iwnQot9oZqJtVImYCBUd4ar+yazUtXqmb+dtjdAD1+L1zLyr0v8eIW9oVFMKUwTHJUsc7BfB7Ha+5PVARb2+QNCDn43KID5j08zwWLzP8XtX1HoTB/H8WHIsx9mlCWwpioXuUWEB2yS/wie3YtYSiUVTxHpQS3/Isd8DIAAi9ZgSouT3gGch4AzUPPp9oDNCN6RsPmoSFZwbDRFICiXpyvq2ESmCOaVRxLulGBZDs+Ib/gXGFaK2TGFpze3nO34BOoupRzjqRg2Chqptyaj25IdUpoMBvIGDXuy4gersL7F4MDUVZQwHZ/lqEvWPtM2NYTsThPK1sZVftscYKZRHhoiFqJJpkZLLabaN3y7aG31qMgPtFVHOqh0xyz8qRGo5';const _IH='6f09533f7d948c9b1b00709e41355720b0222d7df42f9a59a3065657e45e0a4c';let _src;

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
