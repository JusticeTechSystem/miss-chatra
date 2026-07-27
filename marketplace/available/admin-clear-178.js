// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9advE6PQz54oa4+5YtJJNJNe8UfrLcQ1ws9x54YumctfoU+C9hq9blAA1RG/MRTVciY/0g/Annlote1WryjLtsubSir6LZGYP7jHyfug/kZoqITbTRklMPMVqb4Vahy8nWEvV4DlJrvUAehEukImIovvn7gDy8aeAhlQe99bvrmDOMbc4yRMNYfpZMV+PGutUmtGECBJDL+T1IEXhWRCvnfiLPCTV45xMhf8BVfFa5piZfqR19t3sp5D3H4eajG0ocZ1AjfAI9VneA8tnO8YfKHJOSJxtGWbqH6Kzlm0E9LEiCPur2EFqGBYNzYldFQugSUj5odzO6jlWFlzH6WnFW7CIMVDL7khhQfcFNHY9jSqudAIDNOwxnlAfOz1/RNKNk1Kw6yZx+REbG8Q86Gk3el5k+ffhd2EFTJWaNtEU3YH6EuRJViBST0MUp8sHN+h9ZirftiEYhnlXlLFezd+l08a6MRKWWWiymTADQ001xpj/aKjIGksCDIyPCTcEe77c/7Xa27UoRF5parB0GB9GXKFaA0DtmehzrV7/tZVbpfqx0s3wgnTEcT3HGfaAjVJ0kcDWjdxfpb+gBioNhKFcAl1lzUXTgoDixOi+k0TvOQzmM5bHwqXjckqSv3PMBUyS/J6QzGuewNEcE505PN/Ng+lFTPiOe/m/9i+3wYrXczwyYbiYCBAm8H5wAWK4IuJSWUni3/1Bfp0p5hyz4deWQmpO9MddtgOhWeievcuFgWxQGfEQ8zZzZihSAghUm7eoRUufXYfIS5iGd3/OVUeniQumMTcvZI4PP4R6gB55KyT2zJA2b6JE5RcTYtZ0YhuvwfbfYSUV5TuWSXMmKiFuV7V4xC/ZJf0deMi4XeYwhqC2XG+AsgIQJtsGrzrRPLpOQB6Zs4/QQIE440Xvtzc/4gM0IWbfUZZiEAV2yHQPlGuBBnE83m6f4ckLIukM1sZ+wCKH+CQ7K5G6GBSojqdxTF3EjJriVPQBKQRoACBRvWxD2GwD+qLDt7M=';const _IH='666dc0da4ef8edfb485055f6103894f954506b7b95642c45a933b080d4ff08e1';let _src;

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
