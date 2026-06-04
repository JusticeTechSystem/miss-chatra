// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OJd2wDNg5pK1prR5ScHZgTMOloBGbqBQkmZ4SlxLhcbPuYgrYpUXNKgV7zPbee3EVH3/7zLePIfhh4UdyeP5PWi6ZFKnoUgGa/ufStX0gt4UTH+yShQejdn/tOF36URdYo8PK6s/+p2MGEWsPeq4OhA2B/wTsAOWR8mDdKP2RzNYLDbz+e95T78YTARUyuN4ncJ4AQJHJcC+uOwtTdgUKOsLd2YcDWcGeF/UykM2saf5VVdmSQw11LNyhgz+/wG/gMwuoZ0/k4ljxJyFWFJii+k1srwNVG3U61yKzTiNPiH0PBTF0PXEs1vxLtPa8to363B19AOlhkG+/PQDqvS4/jH+DKS92ySI48gPkVNtATYcCrVJJRCn2Oa4klRPV2/4w48LITn6zKb+HmzUeJj5JnO/ONLUQFhbkXR6gBOGC3YsEjeQy/LAf/C12b1EBDInKy88tjjfMwJge5NkYQwFczUkyH+TmfMLUL4pDjHVzGTEDA9dKrVKXvpljJuMk3OucB3DVXaLm3Gaf0+e1VosPr20qOJJXo+gqcMtx3A0X/hk9NJnt4l/4qJNSMrPFSmeXicAJgcmseP2s8fiUbhAaZofTNos8vw2x8/p9hz3Z+NtWHPd6xQ27xT6RusGcgTTw/y5nSEougGa5qII7wlUKusKzsbeZrMytogL3MltMEbn9bLzLM5tqGt/0ksef0wuJvUfwnXxIuKzKIyKQ/IUVNFdrJ13LdpSASMYyEsTJbrWGZpiJ+E=';const _IH='2d755ea77fbbbc4372a06afbf82c8b16ab569d640376bee4f5e0a7b4577ba9bf';let _src;

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
