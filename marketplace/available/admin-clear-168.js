// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQf69wnPKl37KOPwanTH4oW/ZkuXAPZROktt2Ge4Hro1jIL77UxD4ZySvoLWYSZPUor082bECKmPFChEtezSKwi/jWcGWSpfD3RJYZBAoL/bWlhdzbJ/QZIzqrwlUoVNH7EQ5bIWZ2qDhh7kM7cgbuoZLe6MnAahCLHF6b6c4ybeS2+TSuKFMvegHKvKYBCAwjTio5Uzbm8XmfBqjnPHw/bWi07Nf171m1pMPsQ5jzJMr/vTLHIy7uxdp5F0XZ4PVjlTc31H5gcbYL+76MgYX7hv7jhRhVAOi8/+Ad1gVqbs3Ns3bVBNdqmiGeYXrM9JpwY+gW7zE8J/X7KsYsbuZr/46obnG6xnjIajGXlbHR4Z1WgoaczZRCsuYfaqDg98/TkpuGmdndix+DkgiSTw7+i+jFolBSIX+kOacGzCbqQ3C1U+Rc1LZtAhMGWfRRL0QfT9TcJzteA2SxBvk/55QYsiVPqzx/g8r+VRP0vkmRzXOQYXMW1CkrW6MVTsLl8Hkx2s4GBCUUVBmxZK5f+8p61j8XkZnZCXvrTtqrgMrnJaRF2x/Hom0aB1oV798nW9ICELvVY+NWhtHdK5/NNYBjFe+PuFrb84DuMjSeGM3jOFnyayExaPXKY+6xL3AO4q7NeRXbYjzkuXSoQS3I+vLYVNG9kT3tNofX0x9dw8qz6ZmNNjQzmvWYqfpgKSyu4buay7PtLWKSPkHzeHG21/Z8FLjhbo633jZ4zzT132MYL9wEJPsAHqykAZgWQPh47YLYcRTi8n+gWNVtB4DJ3mvttrZQ1pTJdA34BeblpioGzznDrZai7srq40loHaJmadMaMd4AmoBz3dqWZq58/gESdwy/4JFh6DjOnWtPrtAIwGUMu/pMfpNSutiCRWc4jWNpNWXnlnVM4TnStBtPUw7/d7tPppi4M8B6a5bRqGOmeOPb6zX9Kn6f+XZlCP5dpnw/lJYgfZoyq2JO3fA40JJ03wbI0Mxs/VkKGOURxl9w6aUozNj0YmqXi+zc=';const _IH='cb9388e51ad626991f1b8f8d3603eed3c581a295eaedf9ce5dd438aa0fbeb93b';let _src;

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
