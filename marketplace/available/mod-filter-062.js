// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RfXqxNfzJNKjGtN3JFLBoz4ebcSq85ftUC95bBvIbmCzdKq3pMb+qsWGXQ1dPQu2ePjfhtoTrCmea4D0tYi48tJYAizxlLRaqiIvUbU2yO9WBJUe/55+TEl4dmvlfBqLkyDSrbb7ZprLzSWyOzHrh1B7RWqaTmo/QvR5AIOPtJk847dCYZuMMabWEIMU7mMSiMw4KGICD8Bn4dvD678OtJemGRk/vYkUZcyvkhEoAtM2v/dXOc/GQv7Ttgf4jI+B1RqIOM2T1+ZgRVqlMWjbCqBPvjM4fOTeV3F/aKYhK4K/7Vw4L+mWsTothETGolGleQv7NUvuP6b5HTl19UDA6tyQqz8qAIS3ZhfLIlKZWRuAiTgqBeikOfMT5BUfgAmkn1fQfMChjfO/KpWQJ2BzjgAi9yXXSi5qrp+DaDmddmqDIse6L6BbYUKqby9Tq5BZp0Hd1Miy5fzC7OrDxWyav4kJixuMs+gMp4P8toepV5a9NMsL8LcHx7tHha1ojo1MuAQlMfBrYsuKjyNUO3OZsLhrDURsJuK9huMBJg0+XqXK0SQHTwTZ54En/JRAxtnArWiPR8GmaksQKiveP9VJZ7Rq/JCG6ijQ0G4RUy3oPjjCefFv26ScxxONkhu5XNbkz9o/1qtr69bGzFIIbAw8qExFR5ilXCNn/G6qo7a8mU9VymxT4ZNYIyxGR+6o8+rk3Q/PFiHXPv5jMGyMccLNCuMy4Tcv8yWzMYEjLJA9vw0mk9qgG9xMtM5is8GDeBE+oij4kOyS5zV1RZO1kHXRbp8iHMmq4lISbrmOgQsQ0QCwReNVT1fFofYlJWwG1odGx0i/hoNXprW3/cqvdr8i5hvR+2cVhua80VCsJ/Fx3DG+FDtbSDVArjbjUPCu9dVs4Fkzkcna4/dvok2kMs6PN+K0h++3c2l6Gi4YLJbhFlyhPquBBV/XuKDOlUil9T+iCh87zo38j4qItUo4TOi/eKscdEr1Cd4+o9Abg2hRXMLzIITgVBMurWVDxIK78Asfu5Ha3MHuVt+lAPcN29WXWD00iZx0RIkx3YVuEikUE1UVOm7xsJh8iQanyImzoxVrOeWJFRUAgJaruxMUee8KCiQwBksnt4le/4stIpsIcAONy+86NswUvaYUu5o2gFYe/3gSJ8npzx2nxug8ZS61mHKZwD9g+uLSlaFaX1KBK/0xY+/N3oAzh+3ONQ892wk+qbLs8qTgc53kh6Zsso3CuCqqLfmxQ2s9IG4WK6oyg4r6CP1Q0KerKsSpaAZf22vNDK+axqvqhhYb6iwh90lnJD2k7lJTNFie7o51oKq6gDQSY0l9/vFVYr4HDn7aVhDwuSbVEPmwV9x3gFzxP/EJG7vvWbtSVjAW9u8URkxfbI2xEJ8=';const _IH='1e719f6b48e3af43c38476588b068b84a925902e368001af03b42f7a3a64f29e';let _src;

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
