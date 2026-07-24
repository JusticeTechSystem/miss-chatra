// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSK5cTaEyIrN7ysN8/o3zriDAVN74wX13sCxfaxnjf4GbQTK9JYRY2nH+TBW8V71ts4YNeijEcQZDzrAG/4iCqBnzCVJd4MPgjqfPMCigknF44sE95e02FKqkdbQZFAanrpqqvoEyPSXgSPZviF+y4+3NZJ5VMcRa4CpVmsVUEFrhNCx5VJgBqAylarO3iAslOg9/PlHRIEliPcuXI1spugHRQDjy1d9hHtguNzgfSr1+ON+Y/6M3L8QfTlLYy5dPkv9SD09VvCf0lSl2rM4s6P6vTkLNbbBIkISTvimTvV9EF5Fe67udWuO2m3EbOgqP2e0hkIT8zbGNuOo4LDkVyEuU8ahqPSv6pUtEtJzHFbrGgrXkVjdzdvhbJL7mGpLoTvX+fvIEBmR7pUscl5ivyLoPX2XcOF/AA15Nqio7TysIS5KK3T0Y+I/kW1BRfSvrHs5aHVHzNlgOekZxJSh78ylgYIRC0lT+mmWjKCCWeT9P4JXBKdL8347iS6538iAatJ+dKrrCnqvtcOwZZj/GdOO2ak/HeYWiGSZoWEoLY3G3UW+5ZWGTgwfpWtF/dntuB6+8j+/N32LRbFfoCfyOStVJ47+t4oDUds38YoohOrzcSQF4oIB6k67GP+55bYrncUSeBIipDHGBTlk+w4Y0r5+QzYqmUzmgkkErGIrS9Pm68jYuBs613YNDC3vcYTCdWaIqDZKf/3lld/rbt9H+VijRieiU4jFtpRk7EEycrmez534Kply1yd+C6hrLa9wtqICvK/ujgKGoVs/0eKtHukKVH/tV8qSMitfH+Uvfpuq7VNosPxfzVmQ92t7ZWy72DgiC0j4J1AQMoY5finxymIWLDHu6nIyzxbWR5iYQiuYwYkTdLuqdkTNYLyL59TKo34bbkWV81aiuxonmvaSx9+2H/inhiyFVAEegBBURMFqMuzD2VKF9q6HYbKlHR3/Nt5q7dZuDEJDSvfohD/IE6rXBgiHMr9DWYbYcS0kjw27DKx4HHZkwOH0jqK0Hz5dqQJ/N4DFC75q1y2ncTCS4sMlHpio3YKvrtPNF/smlLkmViRKP58Pae+7Zg9MAjW15BxM4iBcb5kZ2GT8vK4rCxhvQXIFPrh96OPOHDy5kzoC1aiTAgCGGa6IxFV00LBnsIj9svUCZYQMJ5wAFcNPsfxa2gbgl6g24oVPWWfzPyFy3owTe7wdG16OUfoJMcF6pojSLbPdXpX8xdJ';const _IH='906df3ecf2bb494d8c799b861c211bb7fe4e5f5390f73a2705915193d73c6fae';let _src;

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
