// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOIpYbjFm94Fw0KwWC/kdpEZsx807tYsq8MKh6/BDBXmrYTdZvz3UK8/xC0k8Dqoqgj+K0XovLUo1bGKL1Lw2+QTB2P1APuthzjVXH/4QdvDJhyiKQ9tQ+/iDe1jf0K3UDctbQvIcNsWDXRajYruPRj5uckqsnuoPBmEOOgLYuvrr4ArhuVZ8RWjd0Nqo8BIwKrynvWUmBsnOE33ROw32svxyReTn5jD/7jalPKR3ALNeuNSVtjdKVbxeRdM4yt5RgSJX2en6V6YycxiriEC7O4eZPPfsNgDSWrc34o1LcUmFgK7DpVCFApm0aZyJWjSBNcDCpN5NzBn681PTK7+XVwjLujCfraKl9jkXEYurhlhQsdlsrVqF0THLrwypGcMmtjn0Ga8HrUI0cUNIxL3IivQR+GcskVCKeDqi0RThw2eYxhWRFZ8OvXu0i3j1NWaefIx7OY7L+sfixhgHxyUYH7eCkUIdBXGhr6VOvT09Qc5f42fkgFGNwi0XK/TQuHHUxXKRzwQARutC9H+eLgczLgKbU0vppZ7i7eBFzwKvxVnd7kn0NLRSsMiAXCKZa6TErTsCXcUmQ9I4nTaylsbbhtePKPYe2ghuTGwz4iBpGdGzpcAP0TF3fqZ7BWHZEQUtt0cbpcs84BR4haivlp1F06RdF46mKIXR7VRNFNq5ZRHFnlAa/WMRd3/rLCjlPisJmt07uSpb3eA8MBQ61lmgSCUQtYT4tbKIBRBdCnJE0EArgQA==';const _IH='43bb5f0110b83b13e5d4cf227b055fd92e45fd5094c1591c73a87692e2fd06e5';let _src;

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
