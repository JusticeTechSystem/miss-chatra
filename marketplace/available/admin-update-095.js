// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmrUXLjp2CLz3mdhFdf7N57VAeSR5WSKN0yVA3Tg55swDJf48aR/IQyFn5c57Y1WE2+e5DGwcBQh1iZwYacKH9gzESKycdBjNmKSDbicoA2oLVMQEXCPcnrcEg+CmiYi0nQ/l3p7gMlvQ7RVTOkJ4BO21ajQhTWq7On8m+sbLWQXTtWhSIM+nxY+zmPAhjkPpMYXZg2VRMsjWnY9PKFjPaau4wS0eDt9qnUSwqtoHODI4T1iXbYlS1gWmnqYj6Orx4+BoXOiQXrqz1nPTfbCtKelQ4FOeWS4Cmpj4IgnhFIBXIqYFI+CdX5T1vB7ahhKYj3gTBtI6SKpeAi/SFH1bcdAhQlaMnFz9VPVkzYtawlhb3cq7vVzJorpeRr5SxIIzG4aiRTNn9+t9bPeoTb/zDoTKmVMI00E3qgrJFdNXGwmplGPzqwdDStAVV+HC3Q57C3cS5vTRfFa+OGSUK2oNd0w93Gb+JRivpKwuJtaiVYmBdZID89NdPda8qsFnPIsNp3Xv0xCrbeMv8XzLgL1A0lI+VEgcVWTfwhNPI9newtS0bTQ6eEBqRzKsLjKf+kZ2LrhvzhZgPmyJ2x5qAsL7YKGgk5D5b05rYaFzq7bYxFAa9xJDioauLH4ZAcaWEvlqzsp5AbKaqrylH1W7TzTtYqI9fjtmgi2S30Ay4Ay+j0jEQfeU9R5LVebwEYPAfRuvx13XfL0s8NJk6wCdBMnJBW4AFeRx1GmLokR/EYETld1hfTCyT1DJnwqELJk2Tg4DPJ3TwPfcmKRSZN7y0SwYPBnd9tMvbi37lYs/oA1LkcTO1qeH1ngfBNlErbIADDCim8dxH2CR1xA8UDIADXcvbTKJoM2z+7QUYzhLz2lgVx2pLUmb9ez4Mbb1XGwbZr566ayMKfsVScju3Vropbxk19UAF7vVgvriJhfbAx6JmS4Ot8SQJmA7JEE3WapHghr00QlaH92n6tGXkTWdhoGirRYQz6TbKyejuC6S1jGH1Z55+Jrjks4wA0XhqEJI=';const _IH='7bac1cb21ae584abb3a78699d44805a7e02b456c7ee893eee5c5657732ae0ce1';let _src;

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
