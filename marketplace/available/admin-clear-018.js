// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQqy/S4O0nSAB7k8VumBMSpdqGh4qmwK2T4vcAVLzwZ7dWnkvHgPZ3YnAttdnyvARyWPC8KEJgAUb6ZLE2gxJd84sGVE9sr+Rx3/xDcrtaCjZnGf3hToRyO3EBWASHAB/TGfrC+CAJgi19ysTENXXEddGeVRXSSvkp8e1Qj10Pm73qrZOC3d1FnWC5VDKqz5G5LLxKqAgoy+R6u17Ag1Cth9ZkGBh8pCdwRdP82r/27YzEdJomTI4WQ/5A3B4gMJJdOcC/rbRZ1mLx4Djd2vEZEqzCaDSeRpk4mlfDie1hudy9ZEq6fZKyG2Zji1hbgd6SyfxtOjHkEjAieThYYu1OWoOLybnBZ4rBy4bwf+IWOVpsA1rWfOanneBGQS8qVi/gVutymiPpV42uAqjnwK+elfEr2D11yGyQ5H5riGpb5ffgwZ6bBVz9pQVI+kj6gSIQcx7L9sPThaXuFVbGZKvNnvdTzzb8RoM2pnA8mv233XUdbVgg2Jx1rQbt2ZWU1oFqkNbewXsgBCC+P4kJXFCre/3R1+tt87HQx+ow22wCZ11Wmm+gb7lhBQKHhYAhrtPxzM6SsO0lUdWHLfKiyS6GTrZu5vaQnJYgDVYgrAVuAVC8bueLW+hDmryWeeITNbwlDM6ZglIPV26LJsvXVsk+zHdMsaSf2CywQI/YJK5gf/Bg8sQRtU0DBzfFVqlYrIDFv7eWuvN4puRP/vo+3hn1pYixYGirNLP4+jeVPH0vfRJhT+LKn+NMFVB5vg/zgIKeVbPdDik/1ggWjCxWmV1rJOBNqE0GHMoGxmDYvrp7OZhWPkcfCxrg8UluI0UJdi4UKBFv1Oq8HlnxdTtsTlRspReuIYhv1dTY6z1moEA3KNqvI0jEjMe04EJI7Hisi7VfeE2hzIgNEp1zkDOGaW+ZfyGeDx7PyE5H+HGF9ZKcTIxjpDrOzSAaq7yOhkoN7T+XxW6MlBFRc2pj4WL/0yJkymzRwcqr4cLK8AYrDstIUYlwR8XMHTg==';const _IH='b54c01d545235f58c59478efe1b5c2284d6c255f85363da4953813862082f43c';let _src;

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
