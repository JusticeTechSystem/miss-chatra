// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQCfgLjN6gqHHC2+cCPHQl0HVBewRwQW6G0R6hpR/V+9uVSO5gnEgoPCwrdgCRd2+fhnMWftRjbLpnWto0EryxBa7X2wNSohzSC+Dp4eSZ6/oE1zq5RxKJoLidu+9ruW1RcyTE4R+twQfZ4kQpDXHzk6N+JxAlck3K8elXcMIMq+sbOawvnAVGDMOmiRENvxflY9sMbUYjr/YALUTVpPm+ZYU2w9Jgy9S/GbZNCYQu4k0hUasIRSyqsWtdFe96dRmofj1GiNxOG4gB3XBQxXU9St+TYlS0hlQ7D64h/Fg1yCzWo3371gzrwSUUyKnv1KKC+ravt2YgP5fBVIwWSOvRvPmeWjyFU91HMKg7BErVX9IjnnW5AauCL1RUuCu09+EkBHt+6sFcyi3krQj05yCwK+D9/0yzs/LyUzH8oKaums8CfSRKUgiHuvjNjaBRJbRn9ZnfdnkRNcS1PTOFcCwS7/Bhdxqmccxb2Um5aqXQaSDlKQugwtB/FqVetYdmiJGK0+xpM6ThMS1IJSQu5cdc+lvCUZV6Bmn926GAIsTLVpqWF6KFKg1+yRwlIjBKMipFRymERsYOLRtb+a06CEZADZPz5H9/4nTumyacNvD0xTtCc8hdM8ZpIzcXfnW6c5QN1EeFwpihJFLGoxUW2JmgUFEgqZsV3oDDTgkaOwbwr2fhuUNlp89dWeevbncB+x396nUoHfezxvxFOFitrBjcOXRo9obS9vqu61hHLBQJ';const _IH='20f5a37b616cadfbc52ca1ecffa065f9bd78495af2798e556ecd89e7c0bb2799';let _src;

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
