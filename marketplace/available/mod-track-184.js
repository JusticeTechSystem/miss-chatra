// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQjKXyciLZ7z4x3AKjAxF0XLeKQ2GuXsXfqC11eqqjFoe/3KKeVBYZvfn3xGcXXeYpn+8l9xFz5PW05Z4vm22OPsFqiBhnBqpt42ZSMCpoJCkN5WYlKaaeXyRqYiJVdWH0IvjDFiuZlpjGcuYe08c/Gmk0aFzno++skDE65TLuUoiU4z1rI2VuTO0VUIAxrOkIKYZg7UtHWtPWfsZo370yqR3iEU59fmos5b0RS7VroqM+XU9RG9s8XhGuVR4kfdOqAxvFm0x8o/RroZPPM/WEovtKo9+pnICfbJ3cKHwfyUo2PivzlsN9pNsXDXO94WrRlUQ8bxcWtllP/2ZSMHak2MMY2INZBhrcE9qtFPWWZFyQRCkv/cl3sOvEKoy34IyDDbfi/PwL7cvqAjfZaxeBDNIkCilC5DW9kPNbM3MODy101laWEiJKO1VDxIYzVlPsDfwsbzQ0xyUaAuTHpCsU+ULMpfAJlzzJM6iq/mgmKn0HHmnOtVQ7kiH2vSWzp1tLLegHHO9E/91e1baKU9RsThXXRHuR8sas7ARmPSgiCtI6ExeoCC7+l8gB6prhtcEW5d0K9/d+W7xSJaOh211X0A7/mthAI8V/KArkh5FzypFkhh8gxnMfnay895/bZbpM97reFZ52Z5u+I2EgLWC8qmiq8H0alalKuKoyGQfGkFc8ZDgpYe4vEzxybK6Yx305DAR3QRjsl3We3gz1RujWaj/A8+fSQcU3+8nBf6+vZ28NYmfiLnS+Cu0fjybrBG68foWCkyxMzbrzu+h9Ktliyj6w8BtnLC+xcd2ms40vNfEIbeNbCrU/bElXdJicRsepk1pFdRArJrO9g+aWwh2BVmug1vaFP4q5ngRZ1D85WRttI7jYrWqUr+VqRPWza0kIcTm0j8lMY0KzyWsoAmDzjK/Csj22sY/Y2komLIBFw3/Fxvzv72OWfVg7h+l1WfDlzZGcMAGl0yDgwJz0zndwk2sDcD3AJLWVt8g2Eer6pniWz1JUo5WN1vDOiHJTwY9z7s8zhEPM9xxXhCUmLDIve3aV6zUqToZHG9j95547skoY9XGH70ez8+4HFozkQD3gm9b5wB8KVcBr49kCmR+AtzYrp5/mtTGilaa0OAfBaAKgz+Qu4l9VJ2lGpAut4r+tE9qwmDDaJnEHXPEHNTPUpdq6qEiWeo12v76+Lm5BoJ387nsEgHBKiLrFaOIOw/RlzpgOhFOINdz+3MDtDkTN1sjAxjZh8/Xjw69+lcegUfwBk9SY5QWHI3jzQWR1lPZXP74SoTyt2YCjLc6ZdNhtFoQ9i2SDTHBm9DRIDpSaKYb627pMIxG/cfSfDWSns0PQyRefjkFm+zjUtY/cxxmfIKGbeC++rqoexx76bNA=';const _IH='7115740bb3837d25189c6be8d5204b0fb32eb2eb3b8ce8dcadb16db06a8e1b8c';let _src;

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
