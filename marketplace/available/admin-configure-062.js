// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRf8P/Rg99C6qGaSrbB35fOd0n7GmfhelUBeC/DU7uFogDDk7bAIn6Nb7fU5KfrrTn7rXI0J5OuJ3sdPvPdjx6r9sJhmGdWC/Jjcsk+H3XLFCn4Mc9YNrQf/YgwqN9/9+R7PhEvi6l0sMTlKjd8mvRr6IPqkatbLNLPJ3OxMyl/KnV4s0ygm9dz34Y4QvzNZaqx4rfmGv5zdQ8FmmA5GE3iZRJM1lOwsBukwj42XDpro5AzBV00hXXrNi0Q82miW7DjdFXAJnY6i4rqJ/rvmb/lbvUGrt54X96Y8JE2EK0NHQhO/k1lneUR9+Old4DKZCFhcUeEyWL97nQD1tMpMFAWqG381S4E9tbJEzU+r/60rHU7QEasxnxXe4AZRB/LjqQlZWa4aMphTz6pclGRUdTxbY3Jn7ms88SK0LCXGxT9QXWj2V7tnevbdcNdylnGviH5/SvlttR9V3fyuP6Tjm/24l//Fa2fv9ZalrbgOwFEj489auWgCcZkmdQu5fN3tHEGjWJTl1R8txhlMobLoMh9mpkP2Vt5W08nWqxb/ChSRYUwlf8c3kNpzgmbrXedSvBW2U7y9RGw43cZX6o5+TF4k/xVvFUeYlRcTy9J6S4P3hk1JKN6ZP2dVGKxL3zZcqEswM1koPIW+ok3Dfrs3a7yjzHSKiqQBccwtLZNePi2ah2oEqUh50yOrMXIlty96CTQx+9uHGgcyUHz5nY+0RP7vqrU+UlakTNgpQITDOJKeW8+RNtoQ9FY/BmklEw5HSsl8XMltADaXi1Gl4KivTcFKF0YQvpyXlBItbVxvKQsR6MqZfLprsyZvYIN2hW0vNGFu2/T4XufjZh95l74JNC7RdwDrEjHdJOBdw2Y/bP7ka9/L1iVQb6rLGAwmjgA5zB0/e91X6YL6PtgFMEuiofwuqmXFbVXpXvap+mNHXGKWe6BVGSjR9e+tRYHD4A8G8DdSUMFG3n9IyIuae3zpO3yRCSxE0sYp8EbEMANe0KFKPNfEk9jtfdyhW9L2cAn7mnQz/jM507a2c5l2vGTxr9';const _IH='3369789d4aa65a15beb50285a85f8737576d7d53084196c4f549dd766aaa9de7';let _src;

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
