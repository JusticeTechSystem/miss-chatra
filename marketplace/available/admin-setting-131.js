// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTEmPB0540fEqFpUCjrhjEZCmcUWuXiezhC/Xfxq6jSkiSgN4rhCeUcMw9PwbKhRUo13uiIllLptkVQzz1HG23v6mNOxpAXq6pTm6n08XJc/jCVqNcDfbhubB47nXW68N3DlLqUE2KaA6zYqIi0xwcQUG+qQMO7bWfJbrpU8cz4PAitRoUee5SMyJkE6UlLWsqylqQCww0ozd7vrNFjxuXhCrkQc/U9ccA43SowHSnLVM9fikuFIXGEN/zeG3DtlObBfWoae786oTjG1FLU/LjxyepQlD3/CRYsT1HZ49AC2WnRmfgFc0EWjc2RKOFQXt85yhsQQtbdJOQYhFP6Gx6wyisNJjUmvtKZHMbuuRBq0vONuEw8ESA+p7GRu9DS2bjaGNMpey0P4vNY8kpcYee0xzHDXtHjxljxL8zWSJvlotTX5Jz2IDn9UBQknXsB2Ffh0GSuGTtyF5eMm8lKkKU6mZCP64me6KmvR7Z9xs6MXv03IIKK0LDrrt7ZD0G3h5ibhMdzGKo1moO9W/ITjd2lkxPhyj99hmmsZkdLBxFt5sVCCQ/kKKAdV+2Jwgz3gTJChxAj8L0JDwbJ7MMB6t7IB10eJXnUfwJnIoXFecx3R+aGh5OKwjVXfzLaXNDOnSjBzKqPe1Zis+86ku6lAt+vGfn8grLiAmFCF/CsVppM5uDhci30rtCuYBOCE3PuX2lMpLCg4aOEsG7+2zoA0DFLi6vp5Qi3HFj2geQrUZlIkknXLIYHLhuJEDcxnJ79IOah80MqPQ+69j8LhNd0DGGIyyjOt9MhyE1V/ZVX/7OS6sCQd5UpGLUD1b1/SV8yyf1hk0uqh0nv+hHc6o9e7/v8v2knZis3qO/oTFvkqC5YmsXbAdd++E/ZBqHXt0vJlEK1j+gU90SlUjVwV1CTB5bJ+f68uXpAXKysmvh22v4/UK4rC9N8k2KECu3eeND/cdfVNLe8pXMZ+bFifOC0UxNNI9xqK3Ety2RVJFxJQC2t2yVuc41dO83RJe4h5MwCBVNe3K3Fy0d8ow==';const _IH='69eca2c6e1b9ea18e9e2652781808b2e5d614904f044a746010b201ffeffcea7';let _src;

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
