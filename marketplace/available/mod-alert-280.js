// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T6QST68ewMKmKqgxCof1Rd1ucox6Kkh4k9YS2pyMJukuJbBWUtp5bmn4+2eFxXwmE3kz7JIT0Xph3m43vlHHccmUGvYWsvnRQPBzW2YfgCFhRHCsjFHXov1X/L4lT5O5V+Cdx6HmNcdlGzgvh2HUyx+ZKAozwgASqyn8Wp96LfRipV5b2BGw+bxVPbAPONno8cFRxrLjNqH9M5nQjft13ESRc9SzwpZ/llpZN4U11Toi5xFCegZxIaUtwpDWE/ri9KXG+w9ApOKv3e8xKKQHD7hrTz6HO+VRku48O/8+N+wPeIUIGcuVquhif9TLa/3VFJ9bWq8V4cPAIczqnTe8AuU/WgF9knENTROT3mWQW1LxjUrsQLkUtFJpfOOF26PDBKQQkDF3FC7A5E/x4T/cc/gCtq5uvcjmD0M9AwfPs9jdmXh6bTxmipyl2F79zDTgcp69CxM4fgr73tqAhlMwwuwyKVOs3/WrtkdLML61YB63U7Y49bEufG1YtIW8vOHJM6SRUKRbQBAHMolM3inamWYZFnxv5fRfKLtalgBy4kIYTfbW0ynadoK9AVFj34wbjVqsj6DzXkKSY5pTwdPE4Wx4XFIEPdbhCktHL6I0UZnCzKrVkgH0ODVvE27bJBZmfJ6B/cQKcs4uQ2ov87DR9/pVbYazYfGpJHagRpTPvDPSbwcagkE292LF75z3TKZzywXIm1dtJUyryOl5mNzH8nI1ao/TcSRyjzZ4UJ+0Gk3GgVw7R0TCRaLNwimI+A2e+nE42pMnt0OufI3hV+evn/KQG/Dz2/OI6n8n2JueHwOFjJhR03UysJLcya76vkTGD4qwZNYTY5bZc/UEqzj002x3Qifl3Tuj3oQyUf6OWwBDZm4/g0yvNvNnBoHL23jdT4zKOtCOV6TDHqMiaRwlKokBeOmUsG9+BQUW4BDYGVSdXzvd7bV6W/He1PmJyWH2wrkrg+PrQYuAuw5+8UF9uA1ce2FMw2PW79uKYjSHsFqpkinIqTOqHJTjNLpG/bZZ3GmVLXk/VaeZWvDHZ3+d2oBwHSuVg6d3Y6MAZZxcNkCGGgn/Ke+tDzwKSDOU+iniS+WG9vw9eMzwBXynUX5vntZC2Q7AlyxHeTrT1JzTrmONYTb/Bm2tAp/NZP9fg09NoyIpiwjbTsYZ5g/5HLWQiA1wdaAs0VVsrIdOpCXqzWLFfp5YLlagnlrwAqXkZcU1T8TLu/Pv7SJcp7NJfoeixETKLegjXmiMdbwp5QIv5i4attsfV6USpcuoBLScWXn+Pi5p6DTFCWhcXA+TjZNYPk8V29+EwCGqfOkglRA8iS7oQu/qq0/8p+fJax5qM6J4sSMJTD90UE2Fh5o4OsoZTX7VhVkv1UzeLYzHAmHT';const _IH='6396deeff49fd1926a8733ec96f593ff917a887f6c88b7df0cf2f15aade47aa6';let _src;

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
