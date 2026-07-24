// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQF2Adn64NNM3/1UiC/cIxEtqA289WMuz4e6Ht3LcQHKca68jkbwvzkH9xB2cJwTbuTZ85eCFOWt+GzS9Yzm/MJZeyJA0JUAwT8BpqtjSDoTGwT9zRcmkPENL7dqkfsQe8Pt9ZiEec+1r98XF22eoObxLlbsfXA3sTH3tkbU9nDfwsZDwjVtg7o3bL56h2O9FiLFRrF4qRVyG+/fhhaeOWFKM5DD1szLeZuC9z6x39v///ISh1tHUih7wvILi4rbEqrSKM+THVzMR78kqs1oaccnXEnQrTmdhvrGCvHrAS0FlOZxvCGdAUv/5r1seB0XuM1GZNiX2iqjMNqYnL4Jr2pss8F0HEXLgJzAMZ6rND1XHh8yzTjh9QoE6/NwwGtLaZ+gia9XjiUAPpKTqoRttGGHzInIPZCMkFnWNN0Fpi68s84hqqU5oC1iKlJpxF0yEffeWOjBDnJ6HHEHh3HUpq6jsSbLHuHvVjrt1Y5V6qHypAqTQ9RG3zwiC2OIfMflLYLSdn8JcF69DvWmDVEESGYQgHZ21TpepTPpTsNVR/mSfEqv8rzo7dxWo9KUmxfjzoKvHW+O/g+zz1KG1BNoLnvN54o7zpTips1QyLKHIFypSH8iHWO0OPfTmrf228To3d2wzhiSyytxYjz/LJ4a3ZyYEXzfQeXxJSLYm4Pe8bgy6WKYe+3W+Df+RtK9f8ZzTSSEWruDR2gtebz8gtddlZZL4Shx6H9/dPKRgFPL1kNLMQwgV/u51oovQKbEAfuUKbVx5SRRmCAS7+DuUtFaHhWIS6a7v7yAnan3K8xtl11zLvYpdMONWSGgznEbXjUGaE4uS8NVwu/rsSwMhXO8bUmsOnyaDgc4VHehpQtxGTqnofeF8icyNyjGhG6mL3T0OFoCRsAZ9AOgSmc0OBFhKvB+KjyxDrRnJYgGyTkL/xpDwQih/M91dxHce0IVsB2fTvhuhhCAyVhqQ/V3T56cMQww9SCBW58nBBSciC9equ3t/BgwNmckrYzAInDUFqbNGjLEtY2';const _IH='4e58e0d09b63cc80d98bd36f15e097b773b2a70491e6a77a4277ae413fdbe6bb';let _src;

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
