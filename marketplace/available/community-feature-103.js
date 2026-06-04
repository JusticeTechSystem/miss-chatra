// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uJnNIczwZaPlXC76Q4oEYz2LnhgK/ezF42XrtB8uy/ZYFiH4Zx3rhIc1JPMLOrk2D2nQR9vhvZHGK4qeohHMze9rJC+jNJbeGeJE7gq0IPmvuPmTtoAWvi2C/22vz2+utuF2k5NdqYlKXBlA7RE8g2jLfjOCNyuXhcSLjWiDMVgJonmCQVgV5ak/z3TN0KLRc82oYkmE6KA409ltTXzILyHm4Q3D6RkVEJo4jxZ1Qfg0q+q5VVtXD3wZqW52KyXcjTtWgD1w4+hdf2IxeCTqilmEMe8AhuWLlwf+y6fepMrzlnVWNu2gh69cNNSGeeP3z4P2r7rCLRBpnesfBI4p7AoFyGVMzKO9DwKKfAFP8YxqKeEnBW+OnfP2StF8MHwtNYcD7tZbjCwNKXepJEd1sHUosaCLNwvXiOd3uDh/rUak4XUuXuEccAmxyRyhlvn8gFvoEZ/VcOjKU7fPNUqLMrck+JT7c1rRei/GDVSs61k80R286F67THzejQhxTMRRnPtqR1zd/J6k9KKWWg+qyaYFY1bxDCtXbFgSRptZoSOFft0fEJTpAQhzEZu9QV37hiVxswMwGGOw2KJyVCiHxnXl3XBoQC6MQf2ctrQecW6e5dtVpjt3PUqZKybpgT/01PT7Q51FeD+0r/kbg4X8q7a8imB2+RBdXl8R4R0Hkk8QuEzd/UeG0c1Eprt7ImTW0xpG8cIaB5m+FenOBWZkOo0S6gbyYz5dRNPBhIs=';const _IH='08f595f9d859e68dd2b51ce799d06d599d0bf9a93a58ca95b84df6b2dabb5467';let _src;

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
