// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A7SxG7J/2GuUaD0H1Ap3oMz83IkGuITK/sVB/crPIjtCh+UcBd/1Put3MYiTtvH/edCzlvZLI/1ca3H5UNvfMD1KUqejkzmBd3LxwRYXCH9DpTgguUH8HoOVJ/djC4ORdKMep5sWgLMQL1xyZCGkGM8nyuxPOSZy8vsdcGOodfcaUtGjQvUMFgiJ4Y/d0KNHEXILni3y2P5rWOxzni2fVwnj9T6X00NBRv6IANYRnPy1ii75WovIkMbQ54zhkeC0Zw2uAFjb5y1JEmrkr6Lf+0iIMlWDlly1oTn3/hp8KNUWcsMyJbu6MtZodQcgnF1/at9kPfWrzl8DDf1QuHhQilvp3N3LUv7GNZUCsOP97cqWVOkssXP7iC2lZ21HVr5itgjex7PkQOS8t4UDQENS8wLYYPfGU3Tk5zgZh5VV0tO3uFIS6tSy4EpG2Qj9qyxDPwMuSC3iTLPlKsTxT6wp7SzfyZ0AodT8asdo64GTp0WsFd3CN/MAoJswNSVkIfHV0egC3PFXOmGHe5dTxxnlJxGecBkeVjB0ve6e9v5DLr+C4auKe0L0fdSIu74hd7VSy6JQI3DXgN7UiNrVAixaUQ7cjsZMpr183YFLA9sd9QheGBVnlhe2E1g0FrI+epffkpbGL05KvOv7kkciNX3n+Z/sNY6TBcMYIoewPmQmJf9O5HBwQxJFcwvxSHiOchz43H/gBHVIujNYPVdtcdXZeMLpfE64qgZ7GOnTREryGRBbPMxY5+A3vfKcaxrdxJLrDYXocgIFIKPEAF0MRaC8Rt+K7jVefTdX54aVxDnTHong2btp0l0QmUnwKh7syu85nHba3X45XS+nJOAr7smUJNF16VCqfOeRLEcPAplIBUXITq0S+fPRsrsqmx2rvtdMXFfdHJXmvRytOo1O2dViQg0f2EjrWOMvEhfSD97+2O+sV0ZUGPTuD9+GHdFhYj4pTHJMpKZltRTi5wMTPixjzsDCXXD60+I1HLtYzPH4MJzeXgTR21RdMt2gME4Y6y+BFd+jtEmypU/+btYL4f9wo2i8Cb+QYaUpakksjPprFnv+Ri90i4Wgptwus76Zy0cPkZhXffk8WYY04RJz2892fqXTGXVmvj+UVnXjigeZn0GQI0+wQkEcVfVfPDBKZFDW+7X8HWR72ckw0BE0qYBMlcWxLnY75vLvpWF5PwtFe7ys7fUooMxvbCCesM5kTRv6NnuDgRbTYA+ta8EH7LQd';const _IH='f0773cca5ed137a62d5fdc9c4bc79ab5764f6543134339b62ef3b1e01d5744d9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
