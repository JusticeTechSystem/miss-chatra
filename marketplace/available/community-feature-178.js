// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6b4lFQ0MzxuKwE36q+ON+4VbSm47GRvmBt9CD1MKvlLDrsJcRAvaK6RrTDswlpgbyMk/0TQnEMv2ExRWiGFJE+ZSypEVlNieo1nb8vS/bkCQhY8cbcpEHDLlvYGWLLmORYltUN1y2Gw950CnNf0d9X2qyQnsP9rFPrTwX3NsjS36SK6fTarf1c+hV4hBHa6CAO07vAzzIeJupYQ321ymBT0rW36thZStS/w+WW+7uFnk1W9OiOPb/deviyqNj6SkI+eFmHZ+EO/VrYcR/+RdBHa4XcID4PWGRzSWz1CmFbt+vbxj8pYLM+nIUnEZx1jWvSFctTiLzhCcYMZH35dcuy5E7bvs431LCFFiYPo/rFOSRAET/k+qkBI/f+Ih6TxQNgi5KGlggufJJkbyU/OGmfczJ5qarqaJUwJnxN2vVPa50JpEx0edkYWSTU1tYcslwPOOcmHDmC3HYT2UrbIgwOex3LxJSnc28n0yGTw1/FWCfVQ8II19Zg/R1+quREvIa+iiq8XocooL9F3EIRncw3v3dYNxEUFzpQQfLEUzOZ6X5eDLt/f34Lqwe9Xj58Wuvr9k64xT0S/5n1AQXtC2QFQRzUUeB9HCfVL5EaLL0c0Q+gydRw/SYHuzMMNY5FuR5kmimKbiMG9RPTdtChuY4IwMDQCQywAZZ+4GFIzY1GqeG6lBwZr9gDOM26n+j4rqo+wWdMWLi3/4tg6mv9T98RI7iVMbjxlj3';const _IH='8888dbcc5b88c7535c3254c0914045ea42f66150d574f3438d8edc0ef4b31ae0';let _src;

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
