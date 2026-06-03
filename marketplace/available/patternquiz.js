// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hZk0r6GX4Te/XopuqrerFkGOZAEbjdJT7BF3TK47JSMmzXMAWOYKR50PgGltIfKtgGT7/DBa/Sysf+IHfWc+qCqpY/U60XAooFe4shLqUITLKpVI60NfB5SgwV4nBd59AQuthpATAgO3Nh7uvU2WcT15bGr2woK3JRe5w3A2Ly8pgeVVeKP3NYgAWPB4xO3KVZQS7XQbPxQ13NQwtsj2SKw6aAP1+1Zz700BMBjsmFHkOj2MOahWi6Wg5pjPmJLayW+/492DmnjtjA0NSQthkjkevy2cTA4Dh/IzkKbGg0rfpXbrcWuiTqN5wraBBnnk0zMq+bA/0ggGcCwFdl+EV3Arl/1cS4e0N2l0+KkT+naBKAQT+2vjAQYlRZkVFx7zDa9kiKHCTQFfzocZtpXboXOewLkIEJWoCsSW/3gZMZVGi1HBTWjyxXRPk7Hxghd2bD1wAzK7OkPaKqrIcTTkRNgROvbea+iTmO5FQlWco4n9yk7X5mBohDt3zhY3OfM2XfIlS1ZLcSYcJtBqynFgxf/Y+w+Z6LPRtsKAjOcg/SFHXW+vRpl+CB6f4KdY3O8nadkaPntJ/PT/3v7AeUxsF5pGH0KWL70fr7Ah2sDzcyw1YvpyYkXDbXNbJ94ffUcgI/EEd18P88TtzQiEUtbo8lV5bDb6qpKCFiHx+zX/OqmkWHbXOABlBzwInRuC7hv+cvPEdAqEp0A0uyBa4obSQyNkirlv4SSBLstXTGY1xJt0mkMHIBY4AvHAMAzRwB7JUPdgp6j519A4pArdvYvk4pr7hm2gIJPw5s6u4thKB0FrBRipJysxa4l8yZTvGVs/GCXSVBBycI/0tCjoF6OfQ9yAGsbDxuFspgTi7IaF23kjYJE7YwqwgI4KW2rXkIaq5igQXG0LJMoDBGtwMZRsDhrQC2vjB5wUMFcnHWTJo4XZDuNizlQEmDxoXR3n39OuUnBAr8b3BSbV7RGAnNdwqh+AyFxF1k6e0nDlIc52YeZ6Dc70ih272ohZwE/32qz1WnfZ8LdyFZkJFIyFCCTjY49iIX598J79/2x1ZGRMNr7qR95ixF+V66zLBY2JCSYzqrTJ9UVpSnrRjbZmbS+qqK9NM1dr+50D97wBhaJ75PNXhPoLqsB+vj7o3GxRnrcWGvmM/cT4PdZUl2Nvey8gnR/bp5MFRfmIbTfhn71TkSmarGG/tEEXDuvGhzqUS6MKCo1URWBiyPom';const _IH='850884bb26cc4790a559048309ea390138f4781e2c83492e0e103cff87e6a19b';let _src;

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
