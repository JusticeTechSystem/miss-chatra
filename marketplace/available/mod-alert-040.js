// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTcCfZiQ+27fdU9gjRLtq5p++rhdKhn8sXLPNs9/dBUIk1lGfEeENcMHYsa5I2u91LyDi3E5Jj2RS3tnyFBEb2uWNtf9DC+gpRG28YwwrSpD3fF2e7+VTAQaHNXK+SPrzKqvCMOWQlTtyLqCYyOnb6Sk2F+tQ0OQQUhnlwpIpQowyjweXAWVs/G3eyJb4jRlaz2q1Uf3bAz+CClXTbQHjKwhqYO53EYeIFOVraNVdCywMch946rA1Cc/ji8Tq+gR2nD8XJp3vLYaYcYnAdTPViKXvGiIBDIGzA755Eb28UaMxR01X5bD99T5cjp3xHyhHJX2qXkMYYQNmJi94NAVvHbNrhpCwPOAiX3G0R47Zq0PPrM5z97mQKtJoeJmH/czqm6S0RYe08NIZE54ZQQ/q8iHPU2AxH+5Jgh8hDz4Y76E1FO8PqwLkVXr5OsCPgfUcGBA22ifUxfOt8SrjEUXnMFHxhP2ipzPrpxd4NG/KtZlncpP4sEXjgM2JPg0FDbu1zI1uvYLO3TOewkqNVdItWorsIKJKOMWdrvDBDi38KcpR6Z/xm5Gr38Yg+iHieTsqWhtn8sTbk9f4i/2VaGxHiAv1cBiub37GCocRkC76EXUItcfkSR9u6wiMDy3mKnyMpt4vwmgieOU4swFzZMEg2X2hmHuImn4DyPY49zkARQhPyKN8ozxHEJBPSO25JTiTV0+LlchV3XITr3XkbLeNs+vk2BanP85nEaP9JfCHfN5CQzGHY8Ss7aIjF6570QHFW2HCQUs2OOMsuu9UlfuZGIEu2F17kcOEEKKME5I7x3r32XnyenqrzZeToCt/520ztZTqcNAtldphNlgp+rAt7daA4ttfW7JKdQ0esd57GCLXGf86LgB6LdzfsQjvnRbFpTf8zTK1xP5y4GnXiv3cLGJ3c/z3JfaQLszZbCr7069RoKYWdP2JVM9CL9OhHjgMm//LIPw0J/aLqacxwjghq2twVY5T80H1wQ3UyuLa+tYzqJJe6OKONlQG4nRt2UOd8jHn7oWBygH+v3lqTqYicAYrju51JsR+WcUnqXJnoCLnrdOXG+3VRx9SsfyqDI9VQeGx1ROkLjh9nKzD+0+3K+AGNM0+l5hiNjB4rXkWiJthgadBUPzGVpGyp3EAs2xBqQ9IBkEzU58KaInfHsZRN8hvJvb4HZ4AjzdiDFu22OaqexR6XI/jSNMyRe0FjlLoxE3j6fVdy9f1FQIxVl+gs/0tS9ExSEcjuEhkHFC7rXzSsGJjahUK1OzzkID3yDhetghYlD7/z0JVKJ36jssZbQ/4M330QF1kM9vHcdnjkj5rQVaLgvP9TapoyGY/Yjsu0kN/Qx8rvcNg9qm+tZLaaD5LhmCfdc/9Lk';const _IH='206ff5dd36fb9f3bd200769cc051e79f9f0e15bc0e2ec6696f7afc69d9d9844c';let _src;

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
