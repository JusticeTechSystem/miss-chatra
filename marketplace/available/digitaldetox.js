// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/LMh2j3cZDJX+2kvooNowr/6NtxzBsTyTqDKxiGYRVD+nqjr/ftLQTjLYX2+7hfvHxJr44HgtJWyQYWJhYtYVtyJidIULsx+mtZ8hDEQHg6H2PITT8iMFYzBX4EGEhgn5mVbi2WuRYjTFSbZRo/1rxWBg4Fz7mOBzIx4cTjMnit++dk+ajn+FyrrT0DAygpkyX33sOYmrKAjxUOjFNl60icrkKo5BGHTIjYzsh2wh53qlPmN7zWRRLge2JlYnm/5zdvrAzqMohYdMF4UJtEwh2zW11j72iAIq69EdO3eCk5356irEk/RRyXQRku0mnciqYMQE43wyfLnOllHp8SHfx92vTW/PfX1i+fmgW/iGOvaiACg2pYVfdNpP81eaIUkg6am8ZH/VaEIM4g4te0S7xDU21nWaeMhD1X5UUALIbE6Zg365A/YX9iDC/vte9cLKYTFkfAOSNANV86d/vtQFfx8QNTVjRmYl4TVoNy/S4EDjgKvME6wXy5J0wifQ04CnNGE6jQs8VYMZVGpZViqSjRx9n1Quyu/Ee1s29XauUhd6HnBLrBBNC/JlVgrKADmzOYBu/T1YjM/nGPK/7DeeuJT8n7Fn5b/P932bOscXBWv6w/WI4lwD0mU/ibK4BBHPYfGbfTqQ1XQN/QM2DIVFNnfQ8m/6eLZ28nqvo/59G6j9vkUokDcunQS5rswcSnaizY776WxU3JlwvsT5YHRJ8UK+9mrHveNQAyX7FwvFmq0w7zAKeb7LsHrB2dgWR2+dldTaI3mTLxC1IDP60C2TIARMGoBmrzGg2wqn/PZtSyjRAGF59AVnmzO3BcSNUYk0sNEIFptMaLVrrQQZvoWAFo+VblynO/d34WwgTO+nJuh3M+2cILitL8cEPddi2dvoLe0tqgJ7OzgHvHq38oJvwsjVUbtbq770M+XGjQAvF849XZ8UlbKlTq3320zcvfl/2fU+5OPLdkKom5W4jS4PikkKP52dkd/ttxkJe1FB+nJNnxkJci7zLQGz/P2nL4rrhvaaJwrylgE8j9ml1FCwvjPOS5SvrUIbjcmQjbypPOnp9mbFOrOLnI2vZTlMT1cnnomQmcz8OpMMcUL6X8dTRm7AnbusoG+rPKW8ngAmeIqcsauOKvsxNYLfNkFlVDhCSsdMMYjYr8j84ILIjHScq8YTx6b5kDRrx2dPE90jJFe+u1wUVzRxUIMj1ba5llB/xqE1YwxLXNA=';const _IH='0473d9923064244211da473ee844c9f5578492286c50881a5b81c80e69132f73';let _src;

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
