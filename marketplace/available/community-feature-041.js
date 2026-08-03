// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQyOeTdTvUbuS/yX2r9ByT5x/D2dWsjQieEkN6qZ5+nhZPxtGXd+gH/ViEF0rjuAFKyLKkeTS6Vf2kxiSTPCeQVXVZNd6PY82fd0epzv/rrvpjAKIMBR3qzYVURHDbH7nbIstEGai+1yLCov2kFAGPR1O6LEs3slmYz88jxjZwupwsYsPLOcm3o5YKjGRosgCP0FaY88unr3UJcj1gl+H6c1sgG9+1OjtAdlya0zHOc1fhtZdr4v8qIpFo6giwxA1D/+wb5RO956bhNzYDKBmUTYgzaLwU1oGODocoIjViqYz06GyqyDlezocx9/IPyxTnlesCXxMnIfD/F71tiul59GVyYCjLepbJXOYmcSuKMXl8vZNZPG/I7to80yP0irlb8HpRkgz3Xt8jo3bYrlevZi2jPfZTVMWMHSxIu26cJiTHD8BeCWL9Xz3H62g/li6NXDmx2jRzOywnhLtc8IkR5jC07z7ZYiPBc63sulEuHRswHICT0y+zODYXspCEJ5mdQgYjHXNaclKr0hgycv9C8kFsjJ3S7ILJrXFrl2ug+jC0mfa+etCNc7fourfrcuKLhHAyDeeQxJqXzjpxD7CtWWj0QLSbQDl/YtsCfTv+NoNago+JZS967fjCDXmUY52rYRx19vy3HkMcbHEEaJq7svWW4ochZkT4je98T6ZryiMxVUHQ+GpAg1ej6TohPUNnId8Pj4ArzD1o+Pj0Ep/mo';const _IH='ad3a9e861cf2198e8240f6c94bf39003c75cf5b7d598dc0f62ccf34abaacaf1b';let _src;

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
