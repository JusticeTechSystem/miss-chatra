// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dmDa1wgpNR56whSMaJ00cg9Nu5XUJuw+bmZoWqyViS+x+8M+bPT/FEnO2KEW5xyW0GU7AQZ10DGZyZXmM3yJ+pjV6mNFfXsF7oA9QeaKVh/L+iYvyu+VMoLFXJyO0kThkMAsm22aYNFQDUZ0M3A5/uSmSm2AJSlJZ8cX81L96nMCLogk5uXX7jm/o0fjncJE8FQeQCjKZCG/DXQoEKH33M2MX5s5gvSkr9X3B9v4JaFeefKdn05lJ5DOLL+r61ncIi3YCGaM9C7gTllSn9XQgsUC9rL57KFGD/QzqLdJOppviOgmc7CbDtRWl3vSxwymx3cc7xkTeNHfyWnZIZ8NheSG91b9/l/hufXBVIG2pgFDuepVbu2JN/srct8dRVFRgp18Vu78cp7hTVYsCJbFPF+KBtrDC1fj971Bm3AIGCsPVFg41FrSs0VFnLEMp0CDEZ1IDkPWXkN37B7+eyHRbXTxkrdYT54irNo6h5fGj9LMk9ejb+7pYeYyjZAaWBAfjsIdEJ4N/uYJ3YgjC7eDfIU25UckD/OSW4unGtx5aI14iR8up+rlSyh85DZGjnvZLBJYZAcT+kj+RKvrb1OORAued+CciANMrkydenthvhBXDEVQuGN3lEoAYDXxI+MwMf7kTaL0QjXD2Dhrjy3vLb5mtfi9R09z1DjCQOpBwPqA2Fi0W4MhCh/n54H2bvUV/HtFtIxn97ErQ0KXXj9OnXxiRDYL39V/KcM0g9IOUcDcAHVDdTde386W5nrxjc3BC6z3IW8RjaexXJ5XU0uCEYbxscaMP68YilmlM5+9wBUtDWlfW2Vh7guIz2/h4aXvFjE2TUOrFCjxAH86E19RUM7sR4o8ssianmPLSlScWec1gOV/C+LPMxf/drSlXrDnLTTtbIldyzAtc6NjdjRT4HOGon2sdOm/GktfYorYc/1AF0qKdeG9WquE0BruyoCHJXRkPpoglIhemXetizG+lXWrEGM/f+7yNIBtEYcTTccmrJzlm7/FEUAe';const _IH='ec6fb4f6753e89e40d5fb734603dfd5ec0321a90512f6196fba8decfea11d99e';let _src;

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
