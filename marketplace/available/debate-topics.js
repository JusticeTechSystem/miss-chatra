// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkRnu6YW7OvBdPOP+7kr9vIGvcrA/+vs4/lMfQOfXckH35AlNA+m8fd6PsD0Gs2wGrW5oRPhy2tH3u4pm8XtligEj5BNy+9eSTmxhpBEp7tiWZGYv3vkTwZJgch2NpmMVA6ATOjmnEoyfCUR+BhKJMgIlfJOh3MJ/3s5HBiynLR12XM3TXyahJGkjB45+efL00PUPcay3AJpNZnVp0dko6YfaYMRsbABUpcDlHSoP9tjKbw68ZRP3dtwlKog1OZuSMNXjjN+DCgcYMgEjqjUNq0TCJPVfjKlxJGD60HzBvMFUfzSNFaQ/fseb50JS809RHRYMU0+QCFAjId8kmvNo2RTCeZmHy2kt96/nrvfVpTLti/EJqrlCvgu6gzW+Did8Beu5BxtOozNZkEArjBWm8TpehKBfDE06V/J1vKNQQf632zvxwBzi4UQ5J5B+ZGyT82SWGaZuVtuucKMnQhr1CO7y3jWkH5AxJC6V9cnW287DzgogT7UCvKRbdCTg63M+56IOXn7ZT9oak61r3drXTTbsnXytkWh05iam3AjLqWFtaJt49M6TbzCPWsuBSGtc8BECmgK9dvS981B2TPVLEz54wGrzsAQ2qpMrmozLrH13wAb3KiyuIZ6Trq0JqblC7OrHIlnN3NIjSDN1ztMxgwp8VNL45wxVrRT91SxZ7WTlAd/IEXoE1uum+n6Hnhh+/Qxzo4L74OZZ1ZsTE1AkdsfcV6k+kzHQ3w9yrhGJrk7UVAkGP/tGu1C/ITwTE/+rnWmvoqO89Rm9Xv4+E+YzxaSgF/QiadnvUJmMHOQAycKiZbGLSJFgmikBQz9RDjsmSDWSIoNtv6NKB4M//5FNL/+EgFgTQdn0HN/EGaYXEtqPYRhi+Y+n3UnHn4M3Yy1lVnJ9t5KHHlTI690vCGVhcgE3SzMMPo2ik0iXwfBVnfd+qRYAaEEaLm1vkNZgtc3j1AwCMUL/tlxmhSyiZAOxUYpitUe/cVROEZlJV4ZzY0P8/UCKj6I+t+xhbHyoIqX7ivgHtJKM3/DMmVRK9guKml7q9paMv2blSqxfbqnx/lzrj7yjlLiVmp0XevTWIKkir+tzhbmd3VPbtcXQ5x91Yr3vjNGyEu74aG9af++hoIeIgE96tdgcQvT7lbFV5NJTOO3x8pFqH6/O5jbMsBvVqMg7IWEsN1k0h+Bj1UUKS8hN6rzofSgz89MTJfMOpupujd0hbDa6oZPfFHo2Z9MG1PUlLqL7ARC/fx2agyjEdyY2XKVGTksz9Bybb/bnbqtKTRDS7ImCvNF6k6ifxQ7eV6qf0T33YTxAbwoF/9bHs0hO3uHuihGmCQajVdUUueYT73gXlklLFlSVM+sTxqtZbGsHh44uDYVWiyA8n4GWEDbJZNRCWaUfN4sgZZRZ/nEN+Qaq4JB4mqHiFY+e26gwdw79pO7BXpu2vZWMA/I4ha4B2hNalXzShI27YD1GGoLy7slan80zYB953YjhykPyNM6wumRWo6QYNGO3K8Q==';const _IH='3651706522c1c1ead1a83ae2f37ebefbbad296cd57bcc561ccb27e65debe979d';let _src;

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
