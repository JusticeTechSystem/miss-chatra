// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS71NNN6iwq5R7CrVPh8F5sQdax4JEd5zK3q/JceB0PP30MTw+9BXQop2WIB4bKwi5tTqiVSBcsTdZ5d8nX4hRUEXMShoIZTyRO7f6YIitNcb1w8SGdPkgL9Igov6ha2Z4wAUxKyiNT8UTT7fsyL8edH9UjKwkNee/t0B6jSW5r32duiP7GWug7EC5BFg+xOOqwCABXMkmxv8k8neKOrPlXP7Og28mk64UYCY1ObEsV7F9BGRYLKqj2SV+XIKoDHl83Kd9TwpNts6lRRebZkiZU/6QoAX43DF6XQiRVQ/H70kQhYlM3t95GSOsbe7XXJyfSZiwSSQa+OkAxelrYNclpeAgGIX4oxI8atSm8U/fIBfbHjLXfUMj/lfHR9bO3ZQ9wW4Oo5Ge//kTQii/bg5vAdC9fqTChno6KVrhHAdJtman69F+InaGUrwfm99GylGTJV8jQ/wMXbxP07VT9g2Fh3MC8IpLSpCPswHCdeFG6jgBpjzrV4+EzUSN6Oe51ieAow2wPb7IJveLa5LxJ9msqAJ5NZRTYpXq6SHNkOlmvKrjoRKOQDoZsrLJDn4BskVQFOVbWynE5DK+0Dlby';const _IH='6d47f775cd22211436ff374f451bd34b63621ad0367d491d995cf8fadd6e7625';let _src;

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
