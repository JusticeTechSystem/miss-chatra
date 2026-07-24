// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTcRGsyBbpwOFgr0nLBtK6EzZ4Ig6I6fS54soWpBUPEJwvygQXKRRst35/phJHD2SPj9ghaO0r4RtYEHBLeQKi4o6cwIZrGuRgqhKznYrgJ2p602YjOkWFZ2QCd/00sMLM6KJVO/s163MRA7D5k41tSrmEnxcrl+9iF64250VyYATMScYAZB4d4X5EAwfsdLldeeqV09oojM+avQoK930dI11wElkf9//XsYAt4FhgaaKnIhdbXYxgGtHe+VOR/B24GLxaZD1Fsu/XEV/pjpURvTtDlZreEswVYPXzeEBo0L4rMrmMR/1/uPkFbKUDXb6apKrh/rUaKwtJUmb4Bw/YHETp4rK5IxOOLY1HQXRTAWT0JRtr/5Pyjoj8D4UyGzhPqcXBUEBv1LeE4MFIM/0D91fSm95UJFAKSlSsH3QXycXkDYeyRMIyJFO7C5Illkh2fxhKRT7JS+nnpRI+x10jHljAJu1t3jleX4q63QHAk0xS+/f7hFmJ2yd5Sh+OlKVEn7bGaMC2EueETWzo0lBmwhRt89F4hf/EbZhLKNoHYbckUOrrruEXJlCj7jErtR/9hOIVUXM0o7goByic32M6kSebpDKOhGKW/al7GQTAhOvgXUy+v01b2hDyRPv5dm/jq/cf23L6QstL4MZvm/S9o9JPQyudG3WiLecTv4a8vs4Ifv/Mcq+Pyckzw9GvAbLPeiR3+KfRxUFgvXH2fNhpjEOvk0FJ+HT9mk3MgjQEnNEioTw==';const _IH='a36d5265e7f68bd662f8ca868f7983100dedad378d7e5a8cdc3ce739f63d319d';let _src;

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
