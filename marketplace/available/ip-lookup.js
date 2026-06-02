// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bhkUQw1OTlo+4L+x3/XWH5MvjzKkbGxDtM24EsHn28YclJ/IEOYXYqGzR3Apy4x9I8JNOHu/a0EZbHHHHBCZzPshHAEGV1WPWBL6JDx36Dcoo09RoFCKfLZ3TBTisyCTEAj175qmtvOkG6sDy1/ciMcYnE17L+yaqeXVmISDCf6dRYFIqkObXzwkYlcjSrlX0FUzIaryenfAWl9/twb7zkP4k3dWPM2R7erB6W0ffDXEIqrhzt503eGxarnWT+XjNrsVrLX4AlgjEAsw1xG6H3W0aE+i248I+G22O9idVqYBpQjBr7wzm0KSrsnQRlnrLS9hSoaIf0sKJzTwUytHq5xSIh9vK0vn2w3YsPzgxUP1DsKhEtSVR67cz4+RPBpVIbOF6kOspLUANs8yyVQPKFrJcGhcHcNHtNJrI2vL7cW2VtV3zKfXzC9GQVNmEjLqZhLzwCGEqM9wHhYjq2NQnBWohJiEHzX1N9JVgG3EYZdjjCL4Rw6lX4Wmkp7AXTA7eG1klHdKPVl1GY7uZonbvzWaQdNXCEQyd8OnmfXWj9NaSly/tJ5Ob6CFXG5GqUugvNjQhgxz9PFYLyWUpRXYKHIdofPPTsFOJhmv7KNbLCrG3lKz5e14T13kr1/aowWPTcI7f2//C/WTs2bBanvTUImF8GQmFl+/Mq+UounFOYydOQXL7QpK+Z2moY28SqoOnjzeXsxvKobPK6IhWUP9dzsnJ59zomkcdhO4l/rloLhOE7tYpMxMXw2oyca0BwJZP8wqfVBBr+xBAq1EClwy5Gfrh3QnAVIxcK6aFd4RQ+pIbmia1lhLyPcoo25vK/gClruMsC4ekgh+YX8HzlPx0EP4d4hsPGu1U7GrlNVlBkbFtBihvR7ycC4jbcpN/4/GvT63pOW/RmrEhX8EVVredLkUgkMpre6cvVDr9CU/noH1vzou2VyqQfB1QJFtYKox6qwDJLxs2wCerqqWMAsGECbQvkVd6UA6fDAgAtWMyXhmVvqGscX8yx9pEMvVxcvsIBmmmG0lRazxlZU+ryaN5wkng6dZ3NVes2LStDmAHYvyIdY/PfVevvvCZczgstQt/Cl+y6BIHEug5wHu4zYrmXYh9kYdaOBmisOOG/CE6I0LStySxPKHt2YrxnClPz8zFcK0DBz50arK0ZwnBQZZviyz8jTNg7nnl87l1+wEqEa10TEIJleXnuK3H467XZaLKY5metEGW34h34o7cIloZm1zwBO3QxqmSHIBG3XAokf3hjQ/pK3UNHAGwxo2ybW42g==';const _IH='f803eb098f2ebf7d34910e43bf7a202f42bc8848872d3dc7e8da1ec43058b832';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
