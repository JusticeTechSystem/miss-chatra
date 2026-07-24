// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxFmrYzw1AHzbnDALN3eux+PnUa8MgoSYa/q5xDRuaezia/Fm5FjIiQC+ZokF5v5rjzNBdU3lpkSkrXi3EIrD92ntuaUzpND36acu0JffT/0MjVXlnXQRC2ciFOhSy8dozNJpH4qMCA1z74yKu68gObUC9uO5gRUKMAxLWOz1G9A9HMDHycpnj2HdiNnA390V+lXjLzhZzHvNTw289adR42Ru4BcFY6ntdFW5FhN8eYFHsNxNuUfCKqTjRkdJcSDS3gy8lcIV5QUfrJmuAdhXoPdItshFrZK2UB9gDCn+y6Qc8lfs5xHsFy6W4dAQ5JGkZVrXEfWFhcJAGCPe2UEpoq/Dl6Qrx8vIFDujenCAGboduJ5lmxyC0cO5HiN98AaVb77yhr1QIQUh5mwo3kDgQ7zbJEaiTYRI60rdmerjUb/1oi7Ups7oi1BQ9Rt8aojXBg7Mu9LM1dVJSsKcpppDeWbuprEBCIYTF0vTKv6ADgvaAYdhqV+hQQx2oA48R68cRt2NmY+LidLUbFONHBW1phIlfd9ljIAU/L+1Gvm4MQeyihUA3yYWgqO4XmkkNvxfPJrfGJskt4qRGug8j5FGPQR0SqNclXzZO3JpIqb4cKbeeBvx55xSW3oNraWMRUrW8o5Im5TeQRczQgttDhDn8HuUgqfx8gpl9U04PxQ0Jzgna76TA2d29ltu2Flt7kgKvB9cKM2lUBwv4s7afh9gWayVyl0ylobFztqnxDUvc';const _IH='df3be7d66d573ee2c71758f63c2105bdc381ee33565d5bfbba7392325e3a6765';let _src;

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
