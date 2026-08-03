// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8z6EpD0cBEKwM6IHmGTd2ipgV5eU5+mUD5u6YR3e6iTzx/+E3dvcxkQHQpxTYzCv8Hu+KvaduCUN66YCDu/UWbqsz96vLM3fQGTEUEZ+UdYp6Khr1ZZ40RQBvyUr5Ncc7eQHdV7vxV9D1UzhEAzREUPeIKslAgbwZFAGN4hF97fQW3YWbRVc1/Gc6zV6dZm8MZL1utQkCZwdFqCorBH/OeP7OMumSinvZyxawCUvRbpK/EtVzYTHln/uJxOdgP604RPFuvBGxfhaoob/GrY05XbZzFnh5umoCPMn89BcByH5exM/7bloNeLGFoQ+PCgMuXukvRMXorGy0yRnVklMgu+KyRW572BATdMi6auXS+MTzBeR8Ex4FhcwgeTpjDkkX0EuQi4eV0nIUWS/yN7UV4VSpHheyh3GXvAuwd3lNIPKyEqUEyQJ2UJ9GP1+Pic6ECOPS/CcjDwtrBnDeMwqUeehbqX3bOD+mDPzRnB6oRlgeotENVrrzvLrBik3I0icRk1EELO/kTH4aYk3ee5P12VWqh6GY4C/5h2ZhOqFHPw/WpwyxuvY6FIwLmHjhItfv9Yw7jNyn6Vlqw/tf+zKd87+9jA9Gzdq9pObxMXpdKG64RuMo23WqU3JKN/KldcytLYpJ6LWM0KaESNgkFlcRCCaU22p2Npc0/HYXm/KKttJMWly0EKNuckO62anIoKZuv2/9n5hk42kPVP9jMy9KUl2UmJgtbG1CeMvU7E+vYfIZqXTFdSkJXz3yLYUdH7CIs4e8YUSYhm4XNRy3Xp9f9Om/EZfdCnZmf3MTQUu/fAFVDNH32Mohx1YZhDpdeceE+u6JrMqICjHDxa8Pb7ZjhhPWYzeuRwMLSLOogDTrPbi47qv34EW0QO/MNszAJJz9Y8NWyDEKvf7GdGzjcgWdIVzGt0HJGkmKQMBLpy7Ipi7IpUqG/807kF4gV9IrYs8zMRPdI3UU5WN1k0Mne0q1ns9UAqNUGxef6ZeAuUYSl0Nqh6S+YwczWtcShQXw9YF4NlW4sPmKjnJBWMFZHD6fFpGLuRHAZgn0J6ZpSOtWCsFiUIEY/ALmTZsUxcKFXZCDALTZEU1KmN57x/CIzmapw1T0tenMZh1EJCkHFEJbtW3NSU09vh3Y2lHS8sz/o9sBQ9EHlBu/weBga+5JiqqrDSdGmdce3hPCr4iQhpi+uEZNQvfEEZ/9CIdT8NzpdDv2F5DrNWF1Zh8cz/nMhxetCx9g1cyByciLPmKXRS5s4OgX4UrugA4mcT2D5yUWiiouukzlD4TX0j9WMW+XfWmiYArkshTGb0gflz48XGZZnzJXg9YDB/MdFgZuefHQfMZHA0obPKqPkW9z9W2XcySRETFvTTgm2hawdqY=';const _IH='100f02af8f24a87068ed7eba69e321733e433b31802b039e957c11399862ef04';let _src;

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
