// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kySXqzqCWYUTZfMpOoZGMuey2XZSGAm+svTkGtE/OqV+VOXvoefthiZ1Yjp+bSiCk26k92X7fg+XSSvT7ZQOuJkb5bGCndy/qLT1HhaNDOKeCQXhKU0/eNNAiDyvQErX6+47Vy4fYWbS/ejjA3pkdbyeRWsAPfxekyZS/BuU9cfp47EoCWkZE+7ybBC8XGJdgbQP4uSccHojL/OcchFmOIJvBq/o7L7IogBsHmozWbTgqqYBMPqs2GoX1gc6mu83WqAK7U33/uNI92kSv59LvezxjcYskTomu0ju6p6cFJ5R8Y+xmFdWLGzKizaAz7dHMlA51P/IUdyrmYS2Wl8PVfKKQE9i0Gfb7HXbuiYlb+rPbDZ/s62Q1UvMJl2/P+j4eUqBnzNV7cb4dnAV6oSP7aCOP3yWbN8GF81V9P28Xie4YJJ3utT+d/f95TmiD1DbG/vXInTba6g1sAppgEm4+0mGHSFhuYHtuh2i10cY2LF3lqX7mWjzI4ccf9ycMv+OLHQcDPIATuokpgF9jP2ac8hdwcVhHycEsrS5YynufFKggWyNSA6YEy3/ZNWKuRD8oWOZ9hBMmVz8j7DwvealPUT5/MBkykFKvBRWUq0eCetQjY7akhljtGvZwICTc60aijJX30m75T2O8qKTIGugyIAoVz+qt9d3M/MAKKlYv+Re7rWV/WXmAbZb8dbSCvlz+nZ7TDQz9FyMSBolM2LJMnN9nO8HujC4maq7oXuTBpMxxpZ6PaWduBAvIlxsacTVVP0Xm8OFPb4KdGniihZ+8cRPv0gznn2mYIftRNlnf2Sx7iMzdK+FGgxuWwTFu0+kakgeUavUR2O7dh7OL+3/7KRWRMxU2uSndXkZmR1mibfwniC+c7D0w9JEjY7FDab4ZF2B//Eq01IO+EWeLls6SO/HOoR4McbpX6YrKKPThYxw2WNNEdIMu4aEkzHNoUuVze/8WhLYtNeCj2DH/Pg0ZljBVcXNmxViv5uxozqevUk1JvS5rQfVEI9lfo+G0DIdMYIvceeuHkv8FC6T4SdSSMH3qL6BDTIm2459suCL3C69bGUQvFct+FKTAulMQrLpoHTNpZbAkzuCwvOe7tDywM+5VyOk317EJqP9W2PbVPavlcSJzB9Zn4YaW/hjvoNtFbkvH8jjTvZgMcEBF8ZqghG12A5h5m4UyiqhWm95RKQB82LJgQ+xuA7g+kW470ARR1VO97+l3bY=';const _IH='57e2a572d72f049194c99445bbfcaabe959f80d1baab38add407c66d6e640474';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
