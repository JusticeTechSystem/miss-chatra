// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRnc4YSIH7NyyLS6pROfPDP6nWxB/6OL5DSbgNU8Jcqw6vyvBjxHo8Oy5e3qCu6KIzzKDCmx6L+ybgOBPGcd4l/mCbNbg4I8o7/C7w81n+SgqxRe+FWGAjXnnopObyFdrh+YYmgGP8WDhSR7JRFb3QPRKCWC+xufWMo/vRAIipbG9IQMmNmL94SFuKqw516FXoGJdvIt03bZ02LkouN4wf57IW7F7Hopq/NrejRpeOjhcSRKJHxi0Fitt89xYT//EbJPXGhQLq+yXmEhOFqhjU7yFLU+gan+ldoE8uweuzuVVFqQqBSpYsQSMX0/8oYB6i+KwUgivl+XbzXC9K5BiJ8TSjieTPf+DT9lnIUs9/llIBlEioDW5gRzu4L8ylHxGrkP/IwDNXYRN8I0ZG+ZpFoDI9gTA38lkrFZiCx71twRtHn5LgOQ25SEg1PVVD3XBWIo4Eiz4kmK3f+rtIitYpTWhn5bzMhgexXRDzYv/h30kDWNP6hpFKKvudG6n3LeraSREVm3cNh8n+lRWEwFyOMj/sUaAkBeXZQV79dvL97j4usX1fevCnMslNd0iioFuDOtYIXuFsegUo5PL06OOjvzbXNdU3BFA4+W2h2VhpHd5F98sn7RJjU+TNYeR4wRXy42ITnuPCsMqob/Wou3CLUbB7Dfr7pY2zWZjRhOhc9neHLsf52uCfA/HrdjC2Qlit/+dpqfwGlmeZn9/zaG+D5bxsujlBcEu7TtclBkTWltI6K';const _IH='da40126c9ff6bd921eef0026503cee3895032d457427b924ca83933653c913e2';let _src;

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
