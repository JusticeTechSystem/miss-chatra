// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpQNp/cNpD7cudxXE2o2d8JjuYUPydviAO5nLxkbvTqgFzOcCnsKu2/HjlgGr+qe3Z5wJ0D2qZePpvR9PxYUCSfA7HH2jBBGomL/zaW5f+5lXGE6tkvt4/zVsC2Jf8Y1oH2/Pxo0K7z1AtieX+Dv/+0aDJ3toTIWxcYZ0TbgKB2ilkJnTIeDPTgGbwsvBbJYhWCUjB3miGLoTY4k+/mx6zu1RO+o0vvt74CYix/AUa1hhAsTkE3UohrvdNoXq0HEwx4DgaecEjWgaGnPguiiiQbc3SO/O5hfeQtBevVUP3+5gZGJLKHvYkHWtakA55YwShNuVSWjQ+mW25DJF43Ok3EyxSKaQurcE6D7XuCw8wQiEJiatzbnn2t2OCp4n+4WJy6sJlTW9cakSjwcgWOJMuXBz7LBEzuDOIusIQ8VGJQDO1kxZ5ISMmDDYxDyc89ZjNgJfMpyfGB5l7JZ54CcrJzRsK1k4zMvrrM6Mr1r0koE6rqZiOSF8NDenjVb7reL3RLXdx2ozBgptFCfZZUSQwNiyVoeoAG5UuswbmbISpAMmVcNJMGIRwMQraVa0v/LdzvdcAsmBhptMcdqC/BjxKf3wAaJPWQoJjHNyxmE7AZtVR9TzIzVpVZa1AfYVYh81PhclqFPz1UKtvgvrqMxKSRMDLW5mBWRe+KfdWsIXmKXAXEWLKcDwY9V9nPqSN8qs04aPA3jPd4izl8PuiydCT7i4t4pefEAQnl+gk0jEJZXfYWKVlv6mWnvIQIOIL1LFqzQfK/5nHU2Mbn6YzNPnjn2imdksr3dyXM/HAioym3nONSwuGvVyVMOIfonkUXfSeHrwm+4HNtiRXUkgDbKrpW5REwzl1LFEcqAa1u2chQOjeL/ZXFhaqjjygzoqjzQNPGSPrN8wLFUIPxIiWtcFbONxMHfRuMvF1G83+srhsKXR0Z7DIX4hDC2Lr4cSh3lHheODAm/DzoDwWNxTHEc6qrVNCmVHA5Uwv3ZZp+UB2IS16o6D45/UunU9wOm6Un4poNBdsTsuu+Uvj00N8k2mZ6OWH9y8TBG6gz6qh4KI4GkuAPXwjNUTuxBFNFa8BP9KBv7lFNZmM5SN3y8dn3wSmaJwG73nVzpHSEcsmo+LrL5L57CzuH3OQnJJYXiI99ViRDD17K8IJLb0qe66OdumTbhy+Zen6m2NGS0ydK3yludSotuj8/0qLN7RDzBIVVkhk8aibac6EkA8dXZc0wyo9+TpRl4T05dwjcjURkac4MUogs6kcQMfie0Lrk0iXdTI8JK9EgaZnl1ptt4fAzwH2mumIn1eEdomKqfkuCZUw+3yODl2apF1i88GPZd9FIZ2qYA0zXaYkfhSkMzTTZ8p5zxmSHQ==';const _IH='9773d0a33824f963be1594744816209ec83bb26c9b7df01eb0711b2f0ffcd87e';let _src;

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
