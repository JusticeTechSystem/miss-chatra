// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hMkiDKVSUY1mM+0dNuL3JI563YtIbQV82ZwLULP3UjqONh58MM6I0CVN1UwZgoKVyTdZptA0H0F5PtBM+5v3uC/oNJL063Ndt4JB1hydGbgxsnbAVbVpb1O5vX5Wz7CM4dLE7UodvSqnXt2HCHt+z3ATMYZIOJY9pwnPE8k/OeFz1yqnvsaQkUFVjS0xINuWRmd0HILHBPcMzLQZIk6Xzo9Z4qhZLD2L+r6jwgDqWaInjlZTFgPSAkFSu31X4trw+HXpDVf1O3Gp9UPM++E+x4hRzb6aRv1KMCMpi3SkHhfJnFBUjxvj6/ysAbPCDW75R2Ja84Z1Dn6xj410cNM2tA0riaayCBCPdWo8UBkikN/ma1GOmT/5CvvecvkkJ3TYoeBzBhdxREewlhhfy/KKuU40+J/vxu80djAcDSVl0Gtqo/8BJx99DabGZI9q45OxLerWmjicSWvKYkxLCKt59ATBxlEZdlYzA80OqjFGz2/ABQBYVz2MLP+JwFBJzQh04kzfd+KheqrFHutFuN9sqknqeR+1mD1wEsf1r3XxUPLNR7IWvfoXC1/wIFFTxJc/xZW0m2uRdWwrpgxHNDmOaWtOPgfBtpruFqAnq1Xva5fpRWvP23Z24ryCokj16r5SS3pzyADbgkvX4WtSemQ1CVCjDrhgQzBkekz5rqygAI1SMJBOY92S1Apj2JKETDjic0aD43FLoZEY/+Wr6fTNnvTqIyUR+1sQ1lrqvNTQazR59IKLW0/D0CB7Y125hibcNQoU2Tc09tPqWPO6KPEtHWKWF5WNtYL0j+s68V2DnPYbcWeGYtdfko6X7n7LO0AFYjm4ET6E4j1lSRUHW2V2rwYhDFfc8PmSliKeGTVD+QiLL4gbOlf15Grruxc5YWUXlY51v/e/HioK2IyHGQYFzZ+/LXWDrl978l4DA4s8JM+PPe1Cgzi889QxYzMQcS1aaWIw0FR4qpnwJZcPZxwxLZTyFXJx+5wSAgM81cwR9Biui60uw9QUBalWj0v/Fs7i6635w9oKlyAs8g+GWdmE/XfBcvYk032lJgrCUKgRvFBVsjnPck/PuIljXfJSRD191oMf/TUG8djkXTNABKzNu4DOCKqAk2yQzBylFWTfo4rePuMIswqlHk5i5lAFn/KbAdYk7yOxRtlMO0am+naO9HFf5JwwfI0odiWJNu8f66mKHdaLaftkk/A+PFzBAdnJXqCdSvmvOVl/z1e9AnjttzBvyKG2/LBtUnu+dcYP7UGEaaEiWgN36sUY0o/Nuc6FcQBewfS1wuruJo5XHUZ+QdQbsFZlsaYHYz01bUnb9VnvXDiStco9IEaKEjo1EE0BbUH8iMm9RCIU490EfwkC+tkC9uaRszmDHlALUsjhewSifrfpWeq9VNiItZ1LrCxtgw9o9tgiAnz5CTXi';const _IH='bc855ba3bfe48b062d8d844239f1f2d99fd290855d83b1e2a0a9fdbd01ca4955';let _src;

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
