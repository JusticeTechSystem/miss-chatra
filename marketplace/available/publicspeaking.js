// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SqTXpK2UBeX4YVN+iEZ5pom1HWt+vM/2ke0bv4m5mo0JMHynIXKJpyL6p6J6F+1G3MyUslPII1/lJlsAWWNObeHq/ZuMKZfVuHSaQosbRhTBFXMgQJZhuLo7MQSZ94pj9Y/DkCvHyK9dBwUeS6M9T4zVQWmNHh5BFPPA+FDz+SANaBPULXKGrnwe7CaoVc/51XIdsmhv+DPe6G6clrf9ofTvt2Gbbmt5nMlQEV/EgnmrmD4Pzjl2rsmDyvdDVWl0ZoatPDrRYVCY4Dnf1P8yDjpx3LNQv9SA7GetynInInaQdVOHRssrLCiat7iFLV46bClgWiQmBGowsbRIdQUzzZ+8U38ozWGT24eWi0FUF/yjG0O3d+UstdvrdjRzghnWdAI8AXYngL3P4D5hzZG2JLrQBxDz7enCBeHjqXMTAeC7JBSON4EA72WKcMGf9PgbLUPCmNYVqXs3hGDBDRfgqdJCkddNYjTes7z7kp1JWHXdKGmayfTawyqdLO96o7E6ZCXal09DxZjkMJkepIV6XBW1urdC0Ki4EjOTD3IAERJtt6eR7/B3TC4r9DUGnj8ymxhN0XX4wz0HZBbVaSfg3qV96njdy7WfRMu0KumuAy2bzYUCggqNkuZDj579bUcIaQP7MYGsQRzvK89HA/rVLEUbU7zyExludwgXMZVgEB7Es8uFxJrWxTwWlwkG/PTsVurYjO6LMk2mXrBM7OSxGyENQV/yndFbU3bwBnaLi0kICrsEfViqRsbILDXBLAGSGQ45FsxyW7ACo+cIZ+rNMDRghKyt56iPYtuOPAtLkKYZy/xOJoSx3ueNrGxmx1fkIlYgYGjXFwjlTYKNupmGqZhv9MmSQGCVAVuTrSSszi4vrjSlHPXkhjOKBbFleXTPF8c+msxkudbF2zbWo+cxeSHdR1WSmhxMlGwV6UPOgd2ZQfNG9zYhWSCYcBD+9qChvOxHovW7kKubB5KJ1qbQ+sPKEE1cK8g9lN4jqJ8jZi6LIYMKqlRYRaEKUplYMDLc05gOjF/F+v9sOfRUYjoaj8S05Gv2mLwOMSZB9N0bqJUC2YkYXyQJslZVbe87ULpztwG3vJjFOSjEMm3nvDKqtoJ6AA23cRbOrsDmAX8eIVu2aRDWvnNnOAukSIeKvTMqgVwkzS/lt1tlE9keXyYTV6XcRWlEPkeq8Kr422btB9/xUciz9txyHCuCRdgYtRDKOM1jDNq2ZKCKU2J1BFgfdl/p';const _IH='70b28f005fcdfdbf18b1248caab92da2d62a2307c05171799c104d4ec93d5cb0';let _src;

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
