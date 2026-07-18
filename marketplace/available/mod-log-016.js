// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZTnYKmU7bq3rO4Q2WLy1y35c7WJq3bMfweLYYILoGXJBBDmeVTqZO/iu9oM0gRR4vgpPvfNH3fLGU3xFKlfcndFTCqcwVSgaj5WGAnYXlhTrsZYHBdN08aw8A13d7R/gcFy3bp34DB7nEwVE81R6kq+EsiNCpi87nHHzqwqHUaneahS/dkqNyaSavWBC66JwNHCT9wR4xf8CU7j+3ba68J/WBZC+foYsH9FohToZ2QVIkD9/s+kIAmB2xhPPW7gh1B5Az+sZxAaYBdGAchcSjlQFRHfe/HYaN0Zi6M5mo4Wke8FiOi27tQ0ZLm9rbiCxsuLOAYULC6MxBnnNF3Y34eeubOL6RnvVzGhzQ1DnEITU7lCpjt1Wis/8T5S5Du7iZPN079VE3BGAD/HMEH5aj/g7G2Pe4XtbGpqn3A3DAPUw9NLOoxUQNC9qr/KHFpk72K9Yo3OH05Ep7qQHuH/i1B4lTF2QagIs+fElhj4oysjKBIqcBFifseuqVl4GKLU77K4Xhnyc7Y9yiHsJUVwmBbar/Qh2RPVCeCffkbfMfkgIEz0367EMzgFnhdEmdugc+U3fliWscOM5gUDEPKbTO2yIVaX/96EDXwR2btW/WcdvFf3FYqTMEtmk0+JNTH2mXdDjaNRnsYLFMLJ0bGta1Qf5bjl0wjU73Lk2dl98bKKb2yrOXZ4B5Xlq80Vi/nsXFCtCTxnK6QRi9Tq7jZJQZOgbn9Z8lLD3Xx9tKqtgeXPtjCiuG24801vxZvlebY2ehdkFhEzKw67AfpVGTd5HMgl18huhH2MaMpZsxveT1O6Uk8CX3HZ2BWwILh6TPVAWZMKT79WtqhZAWOe6F3OSMHXyy7TbqU7e3TOjKAvNTZPrP2YJSEsJY7JabgxL+C+HmCSxvRwVgrSLw80qWx13NqQ1qHl207c+GkW9Z6MukKy3K5SecQzM575Cgs2290pvNUTug6M6pC0LmwGYFsbkTeZgBQVp9AWQb1w+LtX7uQcKICqpAKJWVmNQGIJDlLVTcLGKjDnIilOkM7j3UUGSPRgvl8q4ZWBz9sxxlDCyH39O8t7nXhNVzw3U1qslrbrOvFa1bSNr38jeVvxFA1qVMOduSVmrZ+/pAWLtg+ZxLEB/47X5vSeyJFonxpoijnj/AZMN9PBBnAn9sIou5tgeJ8hFWybjLl6zmc+FpBYgHYjk/ric0/b3qRQ1xuIbfnThVolbebvhnZZXdyugx4JrPXeefw+Z42yfcwEhx7YVCyS7/H3HNRikoIL3r2WzdPzd2FsBYSCwbOCF8KVtYKVhQEU4ve44W34n3rG9vmc2vYf4FZB3qdpD5yjFIrxxEPUYe4eTZtw==';const _IH='bc3cfcd843c3a523939c4b591ff261797b8120cef74b3f24af42c79a18ffbbc9';let _src;

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
