// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6CfUdltOHs/p/z3KFAvGCILizQ9UDs4+GzgwXv9CdbW59d7qNmmTRIJUFFHGDbezj15GP+Eg18IraB89CgQoaGx8XAASvYq35wVlvn8dwnWuKjH8A1eNGlQi4m1/l3dyK/YP9f0TSthDm3XlJaqeBtZ69p/wOInc58MEmGDlKuk22v7duKSSBEVMFup+Fha+n6AiGWuJF0mboQEvurc+E0P1+pNrCo27lfWg63u31KXj35e2wN/CTRfXvCs1ccHgxX6BvQPYmYY4seme8p119rAOftol+AK8B9Piza9WE50HKtN7smfgaCyJhIu+Mf1ag7gx7WLgzuTKZgnGHuOsQXuC+AQqb2ZI3mV608WtO+T+rbjnEMPvhder8XzgSHvAFr9hmU7AzOUGFsl3HT0nDLZRwD724gDhlLhKWwZbu/2zGp7chp7ZVMwKN8PeGj2K0aPmGSfiS0FHVxf6g7impFTXA7vvYVZLomqUp3eD0S3BGXoBk0znbKh5CLENFrHAXk/fKPY39D0pSSWl7acK1TkctO+n7FPrU5zBgc5kNjzqsT2Ri4gWMftCChLlEmxgntvT5/Zc9TYV0yarXnrhUtW474UrZoZjPV/FI3448jzExcKEzppllQuKd6cw1HQvnoL/EX74PZFLx/4rgM91LxcBFYmO/0HB2T7P5k7n3Cv0wesMkkemi2xyhX5t8XOaxaCT5ZEf1pbLMWJo8bjtkw1hfyrvj7wW4vyJnaMMcVWUUdRid0/yj84BjXqbMdvS/9QacbNz/AsbRNPmAIGurh7q7EmR3zNa8NTPGCkaUVuFzIRy+A/bEDY6EPkdsoIOKcxP5DQ1p2RnZMVhXVQ==';const _IH='4359ec3969481067a580fe36def0cb2f0a3e6332b1fff913317b2f51fc2d5949';let _src;

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
