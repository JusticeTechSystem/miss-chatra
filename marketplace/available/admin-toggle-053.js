// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kiz58XK/+5l4+qWirRk+z9hNOySd4Rw5jYVxPdoifFm9iW+t4AesALTsi9fv5wNQoOr9BRw4sbPD2KTxAGtIyMc/OJvCFdoa18FapgHz+qaZeRnqA1j4D9KthKbN3uam9B7GeA8r0f9LmTP+RPC5vBKlnWh8y5i0/azr9xQsuARo9AHO1HTP8h8/747xzwkmMGwzBbfUdiXxfP0dLy4Nx9HsdWrxeesOE13eUdRM5JPxCp4FAj2xab3PvrKJvZW1JtvHClUCP0rPTEJaNlLIlMW85VYVvZ8hnxZfJzrqSxOKPqKNYMqS3jlgSIE/o3Zj+J2UvguC93CYXXFm6AFlCBIXSxzn+7H5ib5J8+r8Or1Iawv4PvR6GFxghbtkR52BVWflZ5FeQ7TTeXNiYHln0smpj+1HdEkyc0DAeipbvnW21wN3SIMOXVIEAuO7gxrXa0ERu+uhMOVcb6DvaR/ar4/fMb/BIY6RowesGICZJLndimyOFl8Oi3zG66JDfVvY+Dfhhmt5skLC3pLoYzeFn14OJpDsF0Ysgi2dS2z+NGnwN3b3Ptr1vhC50w8Vr5uqwnVNG/JvlFAfMtd8sSCReFFMqpmB7XPmT/8nGPFQ45yq/+ZLWJZIVoqMiNC5/urIsy2s/zwgknKDlCp5ZxTkoaTuaQU0aMz9Nfmxk35EvaKrUIsYsnyyZSQD9p4y4MhTxFAkvdSzo+C8QFNqhaBU4ylNSGEDdguPw5zqowpYmqiribI6idW59/o065YOqz2jfUmdiVBAv4cVvPYdGA8eW9t6ytlhrThlXqDxSorulDJL8ymUxQmBNulkjQm1M7DReaw1G3fn3F6gZ2BEaDVmJWjY3KN63loujKr8wc7RvzpgPCVJVpOqRQb2+UwcjkFBjSB3YOGa7Np77M1wuv0Yu+1KMyAUNSfxfH+S7z3FVunj5Mq6KzSyfAmvmsxd8vUWqtKe14h5TrQ6vcmq5B6uzKT74yl7iUyGJVGsXBELd8xJAtthiuqp2duNNMNg';const _IH='3b09e43743499da20f84cac8d37a8a71e4877742cd9c35da8267e22170d068fb';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
