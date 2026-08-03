// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKKFs78zGIZTvDhE+Du9bscGgnA4YhoODGSGtHauiKc7aQU6iT4rDU5pjN7gIz2Ys+D7vZKc/0hCWfXpyckSyQmny6umFMoGxoDc54gsD1Q+y5zb2VJzwvqsbgxC+eZmeGcIceK6f0C+I59cwbUtdG/0rlZq4iaiOEELlAn20uG4GapAe70fcfqAmpDxWsGrG6Tk8IGg+EdauoxuN20Ymv2BhxOzLuMIHLVdl/MyqNbwjYqLqGYoT7Nu30G7ES+fOOxgwbSTk/AYM8eslIr7t9/+9zssuCwNGp7QTAJlwIw+EwFLQmm4lzar8BBUMkcaJW86yw2Qkzp4qC/JRHFVRvkrilODd98e9/XaF243qobSlnV5v4Om5Kq9UYRp+PmpL2zewWn2uvupaCWkDDN69r59oa0UcvHAvHzBHIA2zt9Xlyd/o8nSC22Ips+R4bsjJOOOJVYF2iEWofiP+jEjNM5fsYxdpMj7p4ldDTsT0IGhQXTmHI9ca5o8KDW+5wgVNqn/FFzTfTMWOtFbdhZH6dceE/7KTqJgNq8hRxigKxZEeKru1E1dO+XYViHbZkiVK8RlCsNsaxBtTgfQQNsfS4Adyl1TXaM6l1x8zDGvbLQgP+6GUyx5oh4AXuxAMF3D4nEk557hCUtKDZUiuybfjBUXdh2VfiLrNdH4aMU7SpVSqiELoPfoOr7Ps8XsZikuG8fNaDNkhmyFfiJcXTmkGeKB5kH1Mfbuoxaw9U5H++m6dPH16nQJF6CWBToll942XDTOgNNZJboRlvObKTjFLPZFryjlyiuYBLmLwUIHdQx+ObD+1TtSlQO+0+TSBY5xoC48oZ1misnv/1pyuBdPXRkyXfFYxxpRmxOvHBgk+N8wPcRW/kCDcaijs2rW3Jclh2/KpFyXENmQrpCgMMRWxIAKhy6hgM3X7Uro6cFtxlGVrF+taidST2hP/irFzG+qB/DPHik7KMwQJ0Vetpeg+QhH/PbgmSIZR3J8OclmLJkBvMuwXgsvCBBXvai+EVCw==';const _IH='df039566c457df6659e2f642fbfb8d2d4ac221ab5f676c13240112fc82abcb4e';let _src;

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
