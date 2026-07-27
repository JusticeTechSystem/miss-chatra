// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLtOdZCONmLAssq2RRes2GrGnA3FtaibHYJm9GwMXEQQADFouisly5pepUx8rbGZQIzyvBDrZvRh4spe3obcVGKsmmWyAszfSyxMCHKHiY61KzPXWTMWdJfuxxiv3e9LIaKhvfbEylhvp/OghSSHAB3hZoC+DYf0bf3B03k/rG35qTIsgEqR8wn2qlAB4HD6HAGOIWoptSHgKFXpGKtdRggsedkxe6pzflvaGNu5O5KzGcBmOURyy0l14iYvILZZrYGZrA6NsgOl9Wqo0KC/oxTjvsWgwBYLX/lf1C4+JFFg7+uW2J6XxoSnaPi3om4L8gWfnJSzMX/PbPkY4GhkpWrnuIWoIYnewjTCpSUhGIex9MLVJDum4rHC0imwd1iKdKnIuMU8ptjUv7IrhXomrMOYqvl6b9ODzVVH48IpWKzZ1mxpRJxPxlVGztlTtiBjp6Zzm1a8s3Bx6RlZu2Ey1MCEiD9Gbj4kO1HUF+P9kqX70x0GRYcdvWtJ3GHkhWRT/Thx7V3Qs8q1Z31xeM9ZHf5jnaAy3vz7qZ75Ns0uO4TxAnSXQWVun5oq8W1lhe8u1kGjGoeZDbhMcOMsoFhULDqOpnAbnpBy+kyUhObryKq0fCt98jNL/isuBdNtPYR6mqUv3BQDPE4fetI87mG/du8t8T+vhYDCEKvtZ2WOtkVh1/+hpRTKkfVVQBusrQc9YDmuuoSQujD/SRVzHuiUNqbxr8J4o+NE9t/TFmZE/GRM1VYju9XV4nXy3DBIz522Y9pBTZZQH40qmlikHGOgF22zwN0zXxmw/FMZhV8X5mz2+/Z6S/GpohXAWIUnH0e+JWV/69iQfd17pLIRiIuFmjY7hmr1vv4pQUYimUTh5VvDEsgRXsXez2pvBPoKq8NdEu05AheBUAawGFYMdMKDvbQzaxcCK5wRHzMH+UDR9BK0PgSxKVycjJ64cU/zpRl/BBNS2gADHKNnsTPv+ni1AXegQJHSxfJs/08M0XM2OKZordRnm1odq2NoiBisCC7UB5wQcR+vvui3cNLEhc8oktJ/p+3Xw0SRYT94Guj4mK4XNMwNi7zu7I6B2UiTtJxGZXz5ualI8ZWjHPT3rE8p9vFH14zwGBQyl4RhMnkf4UQc47mb0hW9j5ppoIx4tCmi0Ekh+PdjmWCFVXh1DX8VPB17Gl/ExcfFc+iTf1SKjHrXunV5wPcHVJoiMf+kDT8pYlk2nGGGv4/LSolOLdR5YdBrAj+L/3JfGqNrCdSU8G2FZaChqg+rHaqcFFPcuZbViB0biDmsyiw3g1Kd+6o7TNzyX/Dpl1YWqv02oBoDWXaNDbNSoRw7YkFajCj5f6FaYOP9M1Z1JTuXvUJulJ3kYwX2F9bKHUOWegUcSIMsvcT2b6Pw==';const _IH='445565632e46b7ffc618e05717d32292ddae5516fb750df584d660d0911b0c85';let _src;

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
