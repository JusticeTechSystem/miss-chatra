// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTczeU408kVf7yW1fPnepFRJPwjKcADxcU7DiQidJpvWuBZqKxuFaXS+PVu6oV16qY2wi6dV2vF8IFzRIaemustyHREf3U3HXXh7gt+XIqQF2OtO9QNwnv2XYcPkNmEgixQ2yUPH16WUkVjL9qBdpKsd19+NH0tPs2MyCG5OCmcEAJJZnZpQVR9M/iDNjqHGd6zXsjWQtunURxoH2fdRmy78Pey4K06a9KUJTpOXO1MyiZZL1CxV+/73dAlWNZHeDBHJtDsDDX8b+13kJEOQnS2FtAA/twFGQ7CYVKKbVM1OgMtAaCrBq+THAA/47Qagf9ynFSWnt8RPtNAZZ9XY0bWM4eCiRTLzYe19yviBhd3BiBVC2YU6yhUbShQGMoKY15DkVUG/TVzE8T6rhtKi8biZOigHtNlDy1tNpHDT28OVrP6jGSK4HUEw00IFVMhtbqwSlok2eJgZLg+BE0iwEVb3cRk2kmVcsQ7ByrYo8PZK5lxnSQV7QClcz7t2s0XgQcbCF49Q7WWMEOQVA7JfxxBGk7pf0vagABNfnahS27Q1H/w8ermYZpt9E3zqMtZuYhqqsIKw+Vd5zTFrtJv19uduncoL4+af2KG1Unj50OnAN9FLogLeykPf0ehphDhm7t+LinpJ4zfAav8GZHHFY5FV7e23oG8yzsN+jvZvUF1C/vsiToyv8jBSm7Xsh6xFfyuS1FY3S0W4HqaEpIRP6UgesLK4orQWd0pfjsNmmdXtcri24l6zBQ/uV0Pmh36u5X9Znd7ch4Pld+KAELAZaQ/9w5cj/4UDomrsQ/OUIbK0kympsdjxwOiiRD5rmTn98kNDXHYv77R2jTj9+hOwSvnokUFnVPim0wH/VEJjK1LzOjcOLllt3/PaOPBC1hV4SzX5Iud408kxeg96KkXBAjRzkmPsnVsw9kRgoNhnmTevFnk+4v1rriNDMN6SX66ZSYlBBB0o01TJ8LUbWayDao3+tPq+EujM3SdSc/W';const _IH='65ce2945eee2e02d8b6f721a5d350430c8812ba7f6c6ced3c93b90d3d66786ff';let _src;

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
