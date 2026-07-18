// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRXRAYWUvbmEjwyo87AspO36OPHjWBGwQ3WSejddOGcjS5Wey73m9myqkt40pTIEyCbfzpkJfpF9+nkDQthsyxZhuLuaBP594Hm3PS+lNI1ZJJIQPCrHxQ4131bAnX5F6mMe8H6yHXIJVvh4hI4rvg6K6lxaMHsw7LTRZVlDrzWffmcabkDEjWDD0thaFL0tekLbydPJKPfdLqoRwm13eg4JwMSu+P9ix4WHYPeGoVcbePxpMNPIEB66lAEo8+uq/73w+ZwppBLkhBBTOLfG59SNlRUAvSriU0xg+UDKReZjYxrBWT+PdBObLzR2e/WaG5PeRvpR2nm7qU3DYoCspODmNksB1FRaZo0SlkEu58VaN/oeZgOvOl/g381QmNpcWVkTQwm3j+62/BzjeqsAOaA/7/3LLRfh3a7J7nnC+tyGquOLbZpbiA+OBSZQ5LLr14lncs+1dTLyqIFUnXso1lbyx2p/qFgzBwaK1Vf5QCjZFNfc+0fsiPh/67/jJCHrdjV2t/ZDpqT4v6vLt7IIwlrqs/3u1Uovec8vwyruuJdt184KtgIZ5EE7F8jcOX3v+t8lA2/2VsPdcldgooY22DTZgS57mrxLu/LBoNTcoPle9NVYuyNfA1slD/9H3aTz24cJT7vhcBq4E9GlXNXdjYBEapUs0jYqqCmUXdyRTEDXd9oo/hpWcqWUKDy14jdKb+uIUx0RZ+40/cZkjqPsUkGh2mHzku6gnll';const _IH='e18cafcd09fe034eebd6c4ecc03db7dafdefce707072178b5f0f31e8d012fa81';let _src;

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
