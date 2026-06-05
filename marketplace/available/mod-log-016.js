// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F6D4QCkcjfwp+FaYDjbGJ4k91jNsmvvBbCTuu4uqJdifOo5pYADYAdzBBccrpo8CUZTIHSNE6EBa+ahoM80cvejg8VIEC0alqaUlxqqWWCmjH5vWAsWPrKKUi0IqCyCW1tU1L/B3AbS/eax7HNVq5WxX400NQpUFMPoRGerBOCBD5BzxLakA/fPMtK+OnAtst5VqO44hRPSkN8zSyftEyWmoPG7iplAzglfXZe/e0roS16EBXBl2woFr2LP89DvrDrXcKx7iT0309YSwcuj5QJ0NRabdgIr4zjiRIpqI6u3LdlCeNZUeWs4TA67kTTv5tTwe7JCGH2wJNnCiB9f7yGJLjJsyogOFI8esrpueTS32unCGf8MAZiyFYTfsjtdbY0gwBSYCU9XpQ36AZMBU27teIPhASz+xV+sLcqOWU2WjN2I/ZiUnZeAVT3GiKr6F0pH7BiQ64/s77LeBY4GQfiHcxoozEYNWcCsxP2D/FDFQ5m6QAs5ACtpCHf/IbasmhhgpNSzRen6BqpaU5TD83i1DSeVUUU6dKIT1dEG6snBzjBrfItjyUkX7D5bzKnfK2VpcCjDLYbiew1o/reOMutf3u1a9t9xVfO4mNuSulhhe7kn5um9m1peTHKirAYU36P803KD1WHyUWKRi9N+1+KCegLln5g+3CYZI6QN2Q0smILIm2xUMxq3aQbYW7jC8Vc7VZfo/eoeivX2ysFLCHUD+wK/SIUTFsGruxwSnyFqTC1cNU+hSQjYVoGYi7xPuQ300MPsMIi+d32jFHoyw3GMKo9HncOqOLVvT3Fv1hwZvbPY3HIfbLkXRDP617LuVyWhqxDroWzqm3ovkUaor2moFpx/1RDd1EdiHI2/t/KrbO3H9X4QArBVcW9Qm0d/seQbrMLsKlzem7EKUv6rtCkfexvYjq3er+4J/srSs677SD929Wtw1PO6FbsNZFZswgRPCJS3yUFAeksBump1eQZX6fmSUBvUDINV2FjnrtiS+AMoQaJj962omfiW7K6AkxdmVNVATAOLeaSb7nbfHoC6NNv31ypmx56ic/zXkTTr0hCLt1DnHz4SU0Xszp+ZJiLY03Gz1HKwyRPYiFRYDcAEX0UeyaAE8Jy5QmGP1mmzGVyMHOS1M+DpXqwby+YBXpXUZM/juvt804HctBYEs+FqenKrLAycMJhYvw41in8XN1/XRaGdLFkS6UbS/VpZonkbkY/W5cZyXFsqOE8Eh4xOViVMkMcSlLVAYh6MPj4yX1OgROCk8Mh1dXS/cvmJSXCl0iC/V4jZ3BI9FLHFuKJwJxTgWkuSPqeWjFXUh6aAN0PxEhQ5NojoMr0YPe3PpL7kIBwQ=';const _IH='e8dcb92b0c353411a827ccfcfb1a03b7471a8db97e5cade4dca5988ed7c624a5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
