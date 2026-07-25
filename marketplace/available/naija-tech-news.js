// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZNC96eiB83sbWmzD8EZ2EBspLFyiY4vlHU8wWc1EPVvu/l6F5/abhp2prNE/7Bt4MmSkoaJsyV2Q5PUz9vFFwLcIcbxkLoYnHkSkatiwSwhTUCcFCEvXrxovyleeC7/sR8EMjcOG3WRrzycgIWarD6LLikwixLJgcgYF+My0NUkmbE0On9IoBdxL2CaPBzz+Qi85kaunFdIrj5N7c6nWN8uJclWPt+I8SyBQiPCSpvlmtw8jsF62ymxjYMY/P/uH4hEJtbJfTWMauCsaAQPF7WJnmVeyNXb9nnJO8Ne44TLHC/OHXrc/thjSlwN+xyE5YhkPezE0nGIfbWws05ddejq2T7mR1/2vkfGbiyIx2pt+01LjkHa1r1FXNQwi1a/1LfxImUKcZrAIjeusz80xuYhpiEjcQ5rBCgtRjefM+lc1dNTfBaxFh1Ps02IbLi2dg1GKBQUcZnfGRQMzDdGytSOv2+VsmkDCcXT2gPNmDOkySYCLu5xFnPO9/BltWEjbDhFzxEspDChCNU5vN3Ep1Ja3llbcoe+CfvcYDd9QGOygj3mgRg1wAxIFf8FsFC3ovvqZ2PhDFmMq8Avv3k2U9EkPHfJ/N5brADyJrQTbbjaJyc4RWHXfEH10pqWAk0QQJO4h/b6//SgtaczNI+4d00t1+jUbQxGHiWkkaHVVb1pnlUccmNP/Ij/OosOsZACHRRT6dVptmCJjGVflGwp/+ZMsViWUIkyP58UvvAOMELXam+v5G3+396se4ptMdtIn79ujeuN+3iZ9DjbNjoGoSxTNQ2ngibPhcHCRDs/9EhSApORsdtxMfjXFxsHoQu5LoE36XeZdAUXKkkwmhTYd+Yq8SQkcl5zr13rPtdGRDXVMCzhdWg4XC6DFKq+rYISa7cDomel8bazUfj0SjRSo7vWAqTtzHKivDnL6aq+aN4xhroIpYGTXSOw1KURHv1j/CD/CqaHuc/Nol9WZMoIbvTWBdNfUbYi2zAQm06PbhdzvMZNMKKYF2IxLXQcSgCZSKoDdabFhKrNzTvjWU90LzcW6lDyJBdlP+rnk8/0l0TmgrG390yytRXvdwZYlTOZ0v6CgC0SQ90v7O474jp0GeeSXsQ+hEtWIv0uW+AkNew/qVfbgBQa/R8CHhIX5m0DKYBCOLUvz0VNL/YHa9uMpnf+K0ikfw5biuVD/5iF4gjymcu94nJpglAKR4EpfUA6v2T3BSRfiaXg==';const _IH='ae77b490d8c0ec29444480f41c893f7d181c5f2682bfe261131b253e618608cd';let _src;

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
