// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYl0ag/WUiOzpi4vC2TJAKyHal8/36n/oYLy6RULSMykNN0/oeoke11WiwkzwR2fqF1JB8+0mRAh7IfddpNEqB4+epEYwTIto2wzR+hiCq95P0HXGw6WFZL8AbqjegKBiE9ojvL1U+gfPrGxadp5ROsrhVMuOyvkccYfozA7ZZk97evjnqYKG5QPMdZ9WNpXtZzgbpRb2aJNXbzPy7nWSbWorUKbfCOS4R7oxiMn5U13VYIypyegLEdZMLtP0WLAPE/+iEU5ysT8Y6YVreU9Ix65DPRIluyZB6JBxq0l/cD0MGL1PSwfWdxUzWr77QPn/uMic7FFnUIAeB2nqZ7lg33/GpYShjqmKoIrFeHOIjm39V5jcNdL1mlJYg4P8MGvhtxFER5a7WNWgaNiwieKWuEjDGskxJFozdkNkldpqhdjUjKzgIMdQpMhzJ1G5A0PZahq5rUaEOGWueOlM96H3bOkIDMLDfHJ27Nf+qPB9QPzScUV9JVH99W9xrVph9EnP2VXv6buHAFDJ0XG/CZD+cUzhqF65wL63lqqUqr+hDAIE1I2p+jItPuwWvcFpxwcBDdt8G4Df41IDd3tyynhLI3vX4GdFUiudihbWRTEJqBkeEimVtOuSySIyyhfltjy7iWfe3KWC7iQy+0rLTV2OVmRpctDhMeZY9nj7P5KB/r/02uevHl6kvIcjjPVZ0qJ12ulxHhUq8zo6aBauMt/boH7boZTrk6JcP04W6CBtQlCVpSx5NdbcgJzd1SR1frPkkKEhMYJaAYT9fIdBJAy2V6PwPInUiH6qxiA86jOv9BgzRxruSHh2SkCjNTQyN9Nk+bOyEzyprxtqwB1J38EI3tAqCU9eI7b8ECrKivgx+yvQMAV5HtUzpy3+h2pVYBZcz4YfODtuJxCmN6LBL7D9LPwu5wOtovyQIBzIy/m8fo7dv9J37MYp+IFz+aBOrHwDgiouDUCGLAqF8dDgivWW3iDdMX2thltO+8Vl7eGQu0mJEeB8HDqE0XTY7LqA=';const _IH='cc1b098fb25f87b572769f4fb05ac0b530abdf8bc257ee0ddc66954c614b0107';let _src;

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
