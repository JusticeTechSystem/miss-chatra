// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zzi5v7Qe+8ABYM9L6FMF5ZM/Yd4sNjM1NbEOM6ckPYGbB732njC0jNH/kyCYXphGbRMfWvPEzSxrpmo5gWC+g21MYkxWVQU+z48smUndYZ7air5aqDbNMGCSpxrIFxH7CA7WHOOumSotysErXDX9DI6pZ8X3Pta8jb/j+9Dpxo4KBQoKGQf2y2VYrRDqS1KHGVvuyzWtC/Q5leYQH7UDjMIirWJVz2XLSK48s7BlizRc+Vv1XHOikzW5EVdUM25ivcXW4ABTk6s8DJ5C8wIyQA34A43GTGLEtMTpjPdF1MVatSQyt1IRsiXkDg+eKc/9PxTjlwGnL8UOb1wml28wvAu56wz21FjYfGfyl0rdrsqlZrIRmeb9gN4l93lrqoMZI98GBEarvinnV87HfiyL5ohGtBag3b2AnLm8CuKQelavaTLWXPlJBHwl/tOVUrIUNy3QOKS52j0B6E/ldSA8PPmK3Nikm47RwYsg4JtWE7XeWHZPuOxB3povApW57ovqlu8KG8MC9fzHnWGEBpZBdWnd73oYXbjMPhQql0H7D711RXuk2DGBhI2wNvcvwDmbVhdNlJQW4cdrU/Nhvjt4vX6U7dvt0CfDfi6wVWpxrsLczkCSsb3A/nxouGuoevzXEl2NRDwiw6I7Yc0XxEtGjsQ/zXNxC0WulqQ0gzrQ0Yr7qnNNYVLSTglo2TuRHyzs+DLvHMT4nd7452gEzjHM0Z3IKzsLAZyrWgLWj5IpkHMppJojVRjlB8lIKXhcz53cqL1rPknjBr+0ST+arcxvoJxmO2Od7wTpB6kQXC73Z+gSUhSYtroAbDIA3jN4VNzdewSCSFaXDVJRWEod2AC6tE/ew84pjo9MTA+BLdpkBzOD2sdTkjZvi16w7HiT7T91M94s1gOLYutoySabwvHu3Er4D3FlGelFEyfDgfhxnxqDOI2QyIIVdH+Q2cmqMhYNOH2aUAGciJmao0jfRM5Odwxps0UDIDVL1ezzewlFW235kQxGPMdRDygqWOK0vuDJ';const _IH='6f7e3cbbe49f4634f7aea8c982929922b96dbd587edc761de5633348bc78fdce';let _src;

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
