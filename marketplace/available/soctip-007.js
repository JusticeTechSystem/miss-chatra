// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLljyBAlGnBncQjkRaUIgZliaiQzyYA8PLO2LZgOE5vsYs3HeOpyOGKXqZ/gLsO5ijbBJjGgNYVkSBtOzYiEBfAmUPq2KqBnDEhAUf1vLinofMXdMsWxTdKUBMNuQX2HA31c6PJqEr7cvICORddrvAiXrZTh5FAR3eJzbb7/62lRtA3EU07s864RXZ75ZkpG4gUC4pmR0PfhafBfx6Ej/EZa332r3Ahn4qrpzo2koA6Zb1LeYVueNj+zA35YvX2KLykMrL4cRiMZdtn/A1LZ4JKuva5haIw6xRjzVqfGHURxnWMJ6gHUD9/ShTDT2XtGbpteL8q4UxamgWAW04ffynbRCSjvpQet1bp2BtafuTYntBgEnZYIS2wGIYidBgYZ8T3I486PYI9aMYf+9GCmZLlFcNcP6YrvXtKLS4yjRfTERp5PH9qOmvyE1IYza1+dT3LdlpSu18wMcqhtECtIxUxBYdqRYGxDoubHGcwunFnObqtzf85ZYcoDrt6837ET5oCcY40TGsHUgq+nj+gEdO+HHRbsR8P/Q3/0yvHpa00LDG+Y/1Hpp9rLzPHk0wx7t1nOpVPfNs1VSOSPquqamAHNRvpsERQY4Ui1rDrIAFU2vPGikSzXNh5oKYDG9CJVdURTdfya4UiG08SgGsTDFhVKGy00/pbGXz5gyK7FtNvtLY3OZwL1YeL63V85yY7wh476L2UvT4UVmh5mBqSgqxyuEpGWM73c1xrAKiuVIjWj06ojxu+2MCA1BJYVYltNGFD9TDV0mtXQhgBHR0lKwBpJQHvlhpWfgx+W/xQb2SjQ6aWcqeUE+HyOFv0Pi30QzvzA4Vv9AGGktdIIZU4rZhEmdTduM2xgAeT173guVx0L3+kIxVRB23wCnOT3a9GuQ1HfQbpKVOqqBzVWPmF06aAMfT4T00+jiguclePS0cTFy6cvJZPr/pQdBLYpmwtAWQ5mUMz+bsZN8hu0eOHd1GL59CG880OOUUSKXxoFa8kvI/75RQtyBP1qOd9SjNaM/I+oQuuvPrOuvTREGMCb3WyMopQH4NK8WUNCPwgj6pGDdoIB2d/w023gYmVrpyyu1Aa5B6zOX1cffH2A==';const _IH='586c0d50c7f1832e392012df7bdd2aafb338a230153739e0588592967612c22c';let _src;

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
