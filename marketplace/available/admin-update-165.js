// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaofiSzcPvG/aWB4fXz5OuURWL/aL2/wOEwXCWX8AK0C7SeJro9kspCyvraxjO3NYyCiq1M8pUX8bFXeuFYl1Vih+6vvHCELWJG5IHpgFCHLhKC4piWuiXA0WRPuRf8kA8u6fZRNxv3IUxUnBb8CASJ4yWE+zL9ibj8tShWtVB4r/e3DrCC78IXzzedG2PNcBPswAdPSVTniyNsA9E8/jAmTTdbKz9y+vFB3HhEjR+8BcMcdWUarlvnl9K8sX+3WQr3yhAOQEqpJrRb/dvMPd6ZBIh5X7TdNkJi8vKfqW2rGCxNVlppQvgD514DZVUKp6VFpmf3nLalrFv01IPRRfoFlGbhe+XSJH5KTunjyBfALKGNLyXqXjLwqU2R1l34yZ3A9wI37+Kl1O27ulqqogvqVQnEodiP4frJ9U/voqQ5negs2uDZ65h2GLqj4EhFZOiwnUx4oc5N7IxtqFZO5I2PHfbAEzOHOsP4wx4TXuoSFfgqT++dC8NzvEeA9VsJXxTD5lfxik76OSv5Y2AhjBgDvx8J+8KFaJo1MBuNca7L5myGoMIbQ8SPwG+7wiGKQf2k7MeGDln4Cb9stneq5VDTJlnU/uJQoNRkeNkfU8cgqdCN6P5faTi37i+XKBMWvrmUUsczhlG0UVAFB9b8lmIvvFAp+R6G19oyDKHO4UGJQfDs8v6f9+UW2bhwSNrLKgmOqUI0qlTr3pu3Rn5eWn+oUAERSOnd0+5Q5ca7/zYF5gwjU0ep0nqbdz83LnCGM1CJ3jJFwYZZ1ea5rO89/3jOvGIZ+xXuGvFOUX7pwIQ739qkgtQgREOhHioRBWK/bS2/KQby3Mp31iqPHf2C1w+/k3KrTF7HvRFuyouAc8TWSrZoKpznPhZVBOf4CVBVgiH9TMXYk2tRv7XMbRhupFrVX7i67pZGXA6LU1HKd7qnhCe9CnWgRz9+g2KpGWoUjpbDMKbEaeiAeiKnq5YWe7chr9DIiv0OQa1uHUwLkFEg8eTNm6mJwjH08zsfO6/8wJS';const _IH='5eb2a8f34c9c54725eabb1aa2a2d63a7ead0b766ab8e8dd17a6f932187d0ec22';let _src;

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
