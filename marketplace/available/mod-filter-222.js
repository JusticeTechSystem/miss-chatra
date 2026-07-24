// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOKkNrija91Avn1v0LC1YEi1i5I8X4t8iKGvfhYsbB9NA9WbGAu5uHQKMhwpFMGNi+gXKlx5Cpcf6KsztuGIgDEn71h1VbU5qcQ7TJ1oFdmJQrLk7i1nAtCGDLDUR5bpx3R/I/LD92VRSJ3FcWBiYqk5YVzMHuvfPeRolhy0DzSqRcA21bHYBlbYi8IpD4TuSZJdDbLghOSzJtOEgvMcZ3uwwe9zo6GSVC9ShFrwIrx2St5vw+eYrZUrzOVejbc7sIFLNjpuHKz5Do20XHlVzKVs8jKtDcZp+Gb/UAJKO5BPMGor/QlbeMXhnYlTInl93JE1BdYgCqH2IST0iQKM1q0sexDVXbgY6Pc8TdZxcL0CtaLUmy3U200lU2EhVv0JG5QOv9bjGU3wz4WdC0gCbwfKcCnqRQNJRLgxuZOv+jPLs+MMjwvil2NtJJGb4hdPsKZ06KcJdPHLeo2G4+3Ja/5Td30Db7dAJ5c9hGoAlf9bb1NFEyaHhTDzsVaYmVQJxI4lNUL/U3rZELjmechCcheC137t1O9G1FGTDp72uoOU7hrebS0PIUWMd+8p3aV15V8XWwK9pdTkEouvXPiKqeDqgOkv8mhU/px8uKiMSExEi6/7wSzkwy5r2aa2XK76MRNwBrqz+QJn1Do0pZYkQQx/b3uYqZNNODgkYSVJtxLWiDxkrH8VaWEavbZ8bceoobSR4yb2TmbqB2uhIFciqpi8tbD2fqJlHMp27RLQ6RngDhoTSr98ruVqPDHx/Bu8o31YCn1lIOTce6DD4AV3uTDBZfmeUXdLAjHcHWbJYhmN2Lx0GVViw7ssBzx3MAhXgIySoG2NXm/kkNEImaB1b1JruxW5Oq8FKsIXF8mkaA6FMRPBBycsiR+EDF+e78aZ/B8hTUL3tPKViWE6tp1My2jcW7ARjg+wKs9OiIwUOoWz+Z5I0fVuP9xFkU495oSigeXVddXZokH05PBFdlfFIyDCwQkZwXFtcN9ZF42Pl7HWP8kS5IEZ1Qb5FeJdwDJWQaOP75dbv7DsQnfEKfI3Hw/aNdJioJ8HxetnoHyuiJZgsube8mkYnVgze6WxmDPTjQajI657CEV1rrPiOm5aUQ9SYKsWYhi7a8POljUoPBPgSCg8+hd7vftC1R2flCehN1eyRtXXbDAdx4fOj1DAbMpd3SEK3QxsyOpbZX/B7Uqd4slDoRds3p/qWWvzdLX9JR+e2Mb24QwZXqhpULSb5oxXsXz6/n62SE7zXPpTpUYbDBkEKwsxc9TkV6Nm35vt5KcdKWOkwvG1zhdv/m5MC+06vg29eQ9gqIuM4meFYYf3JnV7XtXV1qGZIeirEyGdbyip/q//8vf4a4Rabq7MJ9lFgciCUwNKuxdBUUs7xJSmaNPnTMe29W';const _IH='fa018880d095748b6e5185f1c61a3d3aff904c8bc1af623011209a12b604b6bc';let _src;

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
