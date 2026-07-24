// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXHG4lmxkCHFl8WUQSW49s2arSxNxPmq54tu+ftLD4GL4VNg5I5PXFfGiJayUwjMYjQ9f7Gp6lkhrKHY25uSNQ2HYwxuTazajWOnq9n2kZPjxDMtyGMCZxIsi68l5Iw+c7LPmJFGQqm7dghxMhYzAIumZ678jGvFJ0gmtGtpLDN714vu94ELybynEAfHbyX0kzrx4D1Vp/Ax1pGUJclNXDwVgRiObaKn3h/dDz+MhRVD/FMJLdorJuOTlBff3Te3b4ABxTxlKGzkyzL3xy2GjotPuvE6NpWGnVZEyRxZhgnl9IQoIGciMKi87/Cmz5gwTryvgKqPsbLcUt1PJhUmNPc/X77lT6Iuair3zVgkFRGHA1bdZXzhOfObEisDbKP0mdPTUz4pjAbSzpG/Z1MyGxMaYbEXZlOhTBTVvLRoI+6lYh1i0+EV+fTCLBIkzSyIadqKuvAHbf5EV2YbnWHdiDhMlsXjQlM2Zo4KQaXmMjqIjv32A1mMr1lqMkJaGhsY2cEQUDZXSsfce8vseCvfDqYE1jzOcVDE8fwiR9JPIQ+/7VGzoilPrdOMW+mUPkOohseU0mhouHTH5a3MYW6a1YoS5x9KFfg++bJEEarXZWgXC331YEk+PW6E2cWcUaUsC3klNMxS7qvH2dz+PtPlAZWMWOVZloQOw+4SBHgw/5ZdJXxVn3xDjQDB1qzpYgsBntWbHbouPIKS3h9+XBSfZJEOkpIpUShABAC+RgqAjbijz1Fap4NVj1q/n+e2s8ggZBxRYwAhJg8mbpyKpAX99C/viOgXeOVAtpto0pVbcsUtULEJuDMKlwOxiKSORcai9b66LA1BMArioIQZcg18Y1LuQPtsuSsbFJWfJqBQBfI2DSjl0Fk6SgnhIpjfS3sgoWSMfk1o2GGb+nSlJrGDrABmGYD8o8vPcjJDvy4Bz+F5wlpxBvWWCP+xrlCqVgazEn4q2/g/+Yf+nqqc9mgK5ecJ05iOfEUFfbL7qSIw/odj/DLFYKvn+nSRkkNIWVagf+klhy4nd65/aBxUnKuQCFMlihUXRExvf3GflGpWQ9NPOLMO3qfNgB17Bxc+Jgta8SS2cXV8TaNAwRAlbouA9zMQmb44U+Qfke6Gmppjl/IeMJQKXeQVk/GMyb3MifwAUzDLOsY42bxKO+tfOt0tnuS9LO+q0rbL1o1e2qIPbm3E/dFgHDXgyScK4szRV+SdUVCkcIhFn9UABQSFf6TPEQKUrYvNwAeW59b87JZ/qEjngHIRtHEN5ikyUM7ZTfxNvMejJrBxGCwUU5wze1qd4pg5cLTuVk23SH++lX1ObMyMWCgMAHWXr8V5fvWviT+9xADkwV/0NCXJFeFQNqfYeCLqbYahdBaUW3A5xhokTGEnnNBbWrVZgYEjF+tJu4Qv4NjJE8K22NBLKVY9OxJyhLBNggCy1S49lDHCsJ2vaCduHRW6PHgd6MYViKl6j3IPhL+tl3CaFlkP6EAuBsQc8a1wCkxDcDJxxKc0751uDTa0kIXq1iXtJiqpogJP6VXgq6Nawx2UtBOmq0HYADoD0YbF7FnqoPB5bBtt9sVmD5w9DU2P/MjS5hplRhsPu/7ztwmOHeM8MSOHN2VdG2LqRC1TgsWOt1ShmwIb48QshWFwfeOwwvYSt0UL8sxo2OHR7mWW4Qr+HGuQbbHk6nhgz7FxSQ/4ktw4S1x1Q69BQmNA7r4j2Lkk1IgmY=';const _IH='c76fcbb2fc2a94a49d812c3f839fd036e0cc1005bc3dcfff77d3f4f4a14e48c6';let _src;

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
