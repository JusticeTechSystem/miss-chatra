// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRP5XBONNTcAkTBf6qKFtd517vYq/V5tGPqoXIT4T/AuaGByINeRvt7H43xLBo2kop52wMH6RJKId5UOALQbsg8yP1VtH2wi/R0FjCbYBswKQ0L7e4tkmqPPQOCtveENbbn0u4MxURwuG1tf1hOl9StuU7yC8n9w0fMnr2TEYWi1jA6busoNlQFNmpY0x8alPK0Bz0tF1y+a2op4N+PaaHsek31YO0psa6qUXD/De/NGqIbWOc6+gQZH3I1zUX9FZGRZE7nAxbxXMQKTIpqo1caQ64EJ70kDQvzSc2U99/5oxHK9VH+ibY9LHUO4c5KXBXyHcqcybOGulR3RAq8T3XcxK3JiX3Qbs9Qt+xbUJDhmapbLD773sAT0pqko1Q5Ge5GpYCFBhdzUYbEC264o38SKT5Exzp0jmECOSGKLwTAtvqKDUVKKFcvXuOpVQT94wSGxImv0tPPQDw63PcuLUqPlmiCz62BV1hRwylcI+q0TpmjpRfKRQ5E73VtXFGS33AEUjp2JzDoURi+8hGBELej7d4USv9UFt+qfLENqT9qMinu+l+nbvrtOX8IrvtKTG+1LgCANC48m8joDkI1FBtloW+IEjoKSZ11FYM6fhRH8bQaWCf+fksEfjm13zUaH5sOAJtdSVZJ+OBv2ew5MXfgEhP/yUGLsDWlaufqGoZMYjvosCIiyHybHGPIdCCcg8JkywNvFr4UgZNU0FF+VFIJaSntcLuD2jdv';const _IH='f788ec9097e31ea897f7e95d003527365fa50359aaa1b60e216e027b8bddaa36';let _src;

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
