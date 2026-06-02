// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qGtE32VfjJnQlrL6Q70nm7hfZtPTTfQ9983V3QsMR5MI/OIMNMA4vR4d8kV6opU71pBxyTsbjRxViqiFlooGfhj8IXeVzAZ9dfNAg0Co/v4UaAXcpALR8dt00IwlgdPbTyJ0DiwhGad22n2UzHHxBWCby+hiXWgCOt0nanjsuM69P5H4yqASkhFwdCO4JQPVu2M35SLese61WVmRdapXqw82NsZ88TCevMOiZ7WVwf13mL3p4XffMGQjgBlIWya0i//flCK/6L9JYkVGcRpbMcscOAcwxSYO+WTcRTizzH5xB89kAYjs/8SX88wdq7rRzZBRgOVGHFTB/bkmMaLbqQfGEcAx2tqPeorhzZFNdvqp+YDxneramiSyWCXXMSZOMQ9t0/wDmEflmnIhY8kWMa0PJXIojbitTFcxpHQN7AyzYFDwqoenigzY+uX9Yh3viRrbPUNCIk4HKIrsCrGwUeh4vfiVPaCH8EY63TOnktCaPXZrfdL8SYY08JCluTPlIAVLjHip8pK5IGub+hU2KnHbPCeCsK52pw1kYpd4hfryE6Y94tH6Q/sc/NB6sOaN2CR6R1n2aA7rnpALXEPCcZMb65M6JtO6mrAECpgUR8oXfQxc54E7G+OhTJnCEGxqzUi0rI+C6LEYEcAZ495KdmlXx29opzq4aWGVbsZ5Z8xOXBJGf8sr2oxCN5WX2UvHM0SHZpBk9IOKcncLlW2+0gk5KvLp';const _IH='3dc735007d9051023a45e4fff76006d18faa5eb39e84016012611bcefa55441c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
