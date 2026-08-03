// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPdvSV8nkBpb/ZG8Q+RVG2qv3JVfv7TKR7OW4zzpuIBGvbWt1RFhkbpXElIpXql+eJbL9THcDm/nCXYqIodbVi2EYWchiyA85bAlMIOEE22mxjkeEZJzjO6vaHEX3smDKJwHv/8ZktY92K/FTOltV2lZqlrUgT2k81+2jAPPsjIJTfP7Yd+2MTrx1ZnnNxavATF2dm6eHd2FsLwfg0r4opueaMJmMK+b9cTbYVQjcctUvwQKgIw1L8Dv73HmQaE34gcmdLr3FLMn7vWzB1UzqKKb1B4T8cOQN36c6s13sWu4pgaOaLgiIuWjBHhaYlJ78uQHvae8KAyo/qS9sgjzhla45WxzI+7LbZDQl3cY+uTmtYWWeVVQPOGM1KyDWQ8bMPcfuYaeCKBFYfexhO1loGM3fGevsXfv6JiSmMaw7MXy5ynIOszf5Ob7YGe9eFfaPZ+6SzIXT1mjfaQHYghTYyX1hRwcLi5Rm2gMwgQ606Ot6dFEO/ciL37DkDw8IrImkcY+zC3A9i2olsTF0Zy2hwYEoIpUdFGM5YrI59Jg/iCkc2VX/e47PPm8Bh2sru4u4eNOMxC33M3gwqrTepMHK8FPsY8x/HF7o7+kJlAlzTJuHgiiJQK3Kg5ukMZPnqxHlfZa/bjqbWbPYXSyeGHq2KObL9Bw==';const _IH='628dd14156b62fa1e2bd03e2b705a495a02fae989d5fe92c8dfeba80e1c039f1';let _src;

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
