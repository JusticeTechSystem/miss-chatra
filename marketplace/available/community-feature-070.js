// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSyFI9ISD84g0eNVB+8Ln4arixsxhoweOby7Dim0TpBE5J+90MUrVj6o9ghvQzltuZGbLyN2P5KQ0ge+Oy4WfJwAZehbXbdPN3AaToQ7FeKx5+qN34feSvLopGEIrtDdqcoggPruzYNeqsBhR/7jvOeJGvzq0PVkoDwnPJUh6TQ6TqMmDUtDOGCAIq4+xCjGf+zVjgl3qL0CxLcdoOuE9ZhqdeZAM3InRERh9dV0xiuApetgMcg7ETUpnmSaSuLzRrkwK5Ngb81HyfTxyAe0l9TBrNBLDh4vYt1JhWynoI+fcGkS8E6YzYKKnYjVl31ibqM5zqBUq3IlFWa3fdRMU66OqKqadD2T/23pPib7/62VJGwoWfkt1A5HCt5r0cU2ep8VGG42iXLgeUhNO9CxDmvRT05ajB2+ckqOL3d0QtW89sCV68chYVQQiueb0C2CwvRJF2FgL5474ZTbzwsHhd9g69lnBvhcU94lxEAdp5omBxb4TGvRNd5Zuxll1VUadsujUTE8xcHWqC3vUw6gMrWAFxTNOihqkSPuoGOyd/1IHg74NEwbKd1mV3InyeTbo63e2W+d+sUPV4WPhAgEB+SpznEIMwUgNB9+jsIJrVPoPYLnLxKWO8c4S/sDEiDKalxeTlk9dM4YWLz9lL+kKVvg10aoo83AYcGkR7RliQctyQBwBJ1408r7orUAA1X7ulP1pxSbB3eLhd8dMFK3Aj8QPQP4U9mrH/giC4kYYFSKhHm';const _IH='6dd25e88a7d9a5675c2e73a0ba326eab41ee3dd5bc91186e72e1ef37c747b815';let _src;

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
