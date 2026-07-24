// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRn7xG8eujvipFajUYvGK4CjEnYt/upKHOqYtAFMUGRxBGWDrdb6/98aFFlVmaNJ8JEIgd6GJAFdVq6FWOi8F+pxYQPdjS0F6G8UBqTDIJEruJ0yAAxyZXzQK43ZzS+r2igXROelFnwlS9watPbkcQu3HhXT1zcsIkzdSNvcUui//F0nMCjwMGs6/n8cF3g9t/J3niB9Z97nYkc3qwmfaFHK07zimFbAsUGjRyxiR128Thogttq1D2aVC9d22jRGAeRF7vCjccOEqTzvUQJk7iH3JUfl/WhrVUhFToW0OgA3zdNAk8eseqHcN619b7yGLa1v6WDZgZUj/JDwwMPAusk6x8cLtldy1jS15WSxCF6+K87ao8F+f4535X4GWUldVp154YQ8vfT0HPhP3oJmhUjZ9walT18lWma8Uz5D1VPWs9yiFIkg7c0JsQUpHAafmIiI6/dRM6SwoZcjW8Por+J6AV8/Bx5+gwbYClm/77q4sYEdgQohrPRpkqIGJp6tln9QskSCDUOqhcGGrbEJmR2drxUx0nTpqNM5npUztJxvnvOrefrmh8LihVRYEwn5WGpv9pN4rvprlN5jriIoa3EStHLeeNHQV3cK3/IqCt3wBRvF+TMHTsyQ1mXnZSaTC8WqxVNwDi2Do2KCOz2cRtL8xe9eSipBacTsIajEsY39lAGtXMNNc7fuUkYoGjopCdO5o/nTbFP+3G2U5Xoi3NLJrPO5nbM3umIkTPYz0rx1mafOasfDcCrOONY5817m5ttRwpNga3zaekvu+Uuou9RiQXVQf0l6qEEztC7BZvHf1dGMTXsm6Cav6IIbE+CQvqU+MSBX0GZ1roGE+7GaTX37uys75Xzk8bdSfKNfO6IaxT3hGe2GSDLtJaG22EkFExShqYCinAx4xi6vcUD07eYmz9nwXY6S+8u3OzNMp7hEwvMTiTGrgEvbt28+CwFzSv9vJfg5oAy98Sj2u9h5IJDa2GtLWKlp9ceCuA3yEDva4t4N8QUwwUDbtbSRBF7JYaHCMW2j83ADLAMctQSxyFqEuEfwuA6XCQ4pG0YRcFMIlcbEXINBHtgJZxbe6VhKOwldbxx00Vt1yXRsbdbHWtz5C6w2sJvdnUPdpu7nCGsM3UdvzHdeLHJErN4q7np8O7unXyxxIII+DL1x3II2qr5ipZcRCz+EaLQAa4EAc7c5zvW0Do27j7tLrZc9ZiYBXGqCVggyUB5lP1pZri7HitWYyeO05Li757Khjl91Q+XqpKb8D9ub153uk/7Z7O9Xo2DlDguuA6T21NV67PyjA/ML4/LLr5PMvlqI01Gn49eTCcYhcNzpHYnw1VqFRWw60tvjfKJEjBAD0X6hxQy3I/8a/Lgr6DV2zJ2WwYRokLONO+VIpx+awMh';const _IH='ba6f942f21b1e189f03509c57932974cc0d3101a08c07931f52acf02863404c7';let _src;

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
