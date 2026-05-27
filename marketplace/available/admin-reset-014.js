// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IotJBVq8Z0/CBOC0xts4pgIN8VxMHG366enkRo0laZ3JG91S/B6RF5oa3ugJX9dUG5Cnau3CLshFcvBO+LakXMUEMm1Pis4P0y6Tlqxg/uScFcHL/THWu77gB32ILMv2Co7sJYAcU/ururI1nkoy+kB6jp3x59pbmGZ1jhrhLvoPL2nLUTW43rXZpuSF/5CGrSXtfypZJB4ALdPlezeuNhOQNQyQhrdaOkY6j5MXzAIr+RVtBZgH9GayAxzZ26h0ECGv0xKDS7+lsQNdnlbuFzG3fET/DHgMnmox7Dt0Q+VD8FNqlI8XJl27pR/j6nN/jdhbGG11V/dLyIWDfnbD15YJTNe4GSYISP03tv33CfdPMO3wikUld9paYJ9WqUPnK1Wz4RhHW+4819pCfLqT5vlWAYJBzOHbQWNCLF6bfDqTxZDOc+aSkzyJwvUoNwZcS7KYZQMyn3U/pNIfLGVNP06bZ66nv6Z1nmvfLICvF6SnkViiGoZmOIgCz2IXHtCU38aey5Ipv2hwJlfOHDW2jT74JRW1H5UCWYwoETiRPaUjr4JqYTzurbFM1aXOeL4eInyFTEffZ48658KmQ/Slt0BU9a11D/U7Ttm1icHNOnXtEryYNJK+yTO3fF1bspc19M+gOuOQ6G9MZXN5mG9NRsgI922PfUeVvUT9/HuCB9bpzefyJeNN92tNzzZQmRd6E/qhvvQrvS4gUY/bGteNdT5cyUW94oNBIPYpqZaPkjvbAIL8qlYssgxl68GQtyK0IkFwz0kUEJpQwQRu6YMwcp4e4HG3SH7GrtIbLGWQOCPTcR0dmAjjFakoPYkpui0XxE7WjZklqC65Q+N7nLsx51jHPAlAOavoYFgHAhl1/BDx2SsdQx4NOUBFcuuSqLQqN0NKODtQBgrStbX52lIJPoxcy51ve2KaUnXvTTZFz+WMC1mjQqaGcnZ66/84QLiNk2BmYHSWkcrsoTAWaeU5JVVYRK5BuF9wbYjr2/yzN8fC9YzGq6w=';const _IH='0d92c454d17b5a1a0849d9ccc9312c3625c9663611cc3854df4f211eae90c857';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
