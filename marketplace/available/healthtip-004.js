// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOvY610+Eyc3sHqU9CRRNTSm1oDbPms+Wv235cRP4wDmvG3GfDeWdyb0YrrR6EkqB6mSphtNpBayvIpgZaByQPXG2CX7tMaNGSbm3Xx3UIQl340qFkb9kR08yLN5I91y3ci+e55uAiuH6vQE/4CEXNMQGB6vUG4ra31FaUU7Uwmq6Z6cbjGR7ZYOS+ukqOhQI4FIkdwrilBiwlfe62S+zsxIUjUrR+zRLVFnExBqW/AW/DzsUrxOwDDyoTMwqrSl29Bra9yDBrA4oYW5o0ckqaGouUJkKC1u9lNyXEnvpjYCtXiPe99gyYvKzE6r6g9AZns/EI5k7TRXPEl9a7vKRShQUEJmWlZ7cLXz9QTHCPWEjmQeIWAwJ+R9ALGgdmoHjDTBGyvqAojCTAxnhIbDzC+uckcipOKWP/m2XS+X6hT408agkb7xKvWNxOMPRCqLz9z8oj2hPkI5/4G17+vEO3u2XdebOdQpJ5kWc8rj68VIlyaYHbV/3qZVmm5D6g/dBobpEUI9vY7PlCRtHb1yDWbDgAUnLjG1OvzxGZOMFd651eNfOwpHBsRFUZCRwpFZuV5DQmIjWZZrhjdjHUR3ZVg//2IM8/vVvwGx0VdjvsmPA0f5VgQgDMs/A0fCrAwNVdOZTxCCbt/tTUfeZ/qVaVqGj3vbDR7Mk4SDpkgY977FKvtdWmGowk2ACpAmAgNhAzeb4S6sxSWCEoK5qKcYJueJm8WSpsKCCMX84mxGn/5ohfzZzcs+oXLG9E65YygHz/yC3505bdqSiVdWgH4essGGFNWCEvp4WRY5/kweSMac7Fp7E4E4CAsXt+7QTijBbM+mY0vB0odhtj54AtT4DLVXaxTLlU8WOYMgYoMGBr1Lig/qS1bdrRxUF3B6AAe3SgW2663yEECVbJoeODGM1FL3wBYH7Wlsixc+MvGBgfCR9TlCQuKjdu';const _IH='9bd3ddfddfced481bc60f423ac0e2ab1db410634070359a858d85f15df5fe452';let _src;

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
