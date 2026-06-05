// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/QG3I4CV7Zex0dsKThbsm3IDa97Rr9m+V8Xq5ADJxjCr1vFPopOu5cgVcRH5dbh7GBb2jMx+4TPZrWy32eDEFNI2Id6L3GXxvfNegkL5Og2vsWvynCpdR08WWO77Mz/x2k9jU3SAzl6KbVdRQ/vPsmpl5DaxFizw+eyTbSGaJgnxVUmlJhyDr0Nd2RtqSy9srS7XCcFB6zpCZpYabo4+pgJMbyfHch0c53LvogrWjiJzXuhpoUeiZt1afDsTZzZVy4IMmnRzuqrQXUYM9hrT/fXcYVBnBCipFRQJw+jmgBCxN+MY2oWxdNjOw/3JHY6NPvma6cMY26ErIkPCn9bIXOALx+IU1FtU7VQPukxnt4uiKnjPXXlWeSw0kbPfati1hSHPNFUq+nh7AoENGERwOA9LZqkU/mPieVZW7Xm2lh7pOIUTLMskPhuFjf0bRNR+dneL2aPr3YajlexyhD6/xQPjTrIxxmiOonC6jJ3x7MyaPbBR8p1408pOq5QObQ2W2XqrmtYNW+M4/FtMSFBZiCYO4WFuLBkZKwSrMYi3xyeLi+vgYzDEXe/Re+sYW+FeSUGp32Sxdh7Eb2QtJ2G1aYe42Q4QJbavAU1dLD2gVeq9b437U9C3bnlfHrPGMj79Dk9fK9IHepfS2lQnbEY0oaKxsmCw5PHFyYq/QVNbAt59KqaAOZPpbJ9EYdQgm9LlEHXvD3e7veoKKUTeaACi01Hifx98/PX/BtQ1z/mhuYZBEXbdmBPBQ6oTYVK9h9wCFMG7NOlsTl+MIZPM/pWA75BNJumsSIIfHaUyytjeDM3ByTV/eo9JXkS1nMGyz527Q+XolfWs6B9Bve5Do81mruaSkaYEQLpPh0BFH4oDK5SjcVZ92dDnY13f8YhfEC9z7UBtMd0bhcHLPjyeLeOH0o9qKfwYqh08YbA+5twkFPnnvKuhbIQWSengih9xmtPrSaGVdACaUrABeliGbeUR8KSl8nr/NHTC4DOVrWrBQWUdB8OXBdGeoXqJW70Zo2Au45v2rNVOAA1uWbtIhNJglFzXpGOCagg+L3hWb7RF/XMFY7Vbs6tT1eJgrLTQ1WkrkJtCPtydjCOAdZt8f75inzcv5mDi2oTPy/OYufE0mp9T0HkPTsXwBG+N/uZFBjf1iviXNW2kgXCl+vQNncu7NlgvtLx4dAE3tzQ9fTnXynGZ9/ofsEny+lGiga0ZA4ZO1kQaG16gao7W7asFoevbdUkPa/agyjlTdhHsT+fjol3B8Wd0cgLeEbaJk3g7w+TQAgBy61Tgo6dmBK0qg6XXUMNqoYwCVWXlc3vKIpkivLZLxUGz8zdyMfg4kvAroxBnajUfpMd2YYY058KBFScxnbGRhGHWcEw/xnM90zHpIZZv88YpDkPhZ+YFq3m4';const _IH='0de1dfb8adce19fcb43aff9db0d181b70a383b25f342bcb73368cbd17a562c60';let _src;

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
