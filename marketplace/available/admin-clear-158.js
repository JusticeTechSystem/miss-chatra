// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPxkI2iy9ityUiOh/ibUmqoQGNBUTmZoXPkPgIhjGiNiTPCPbLu1Zv7E4oKzRxQ6UBubhu9bHiwvy9u13DhGIYMbx7Sxc6hxvejg8fyIIDozH1zdCZPziwR37cxL4CjmCtIPIMLqhGeM91aa4fpSeFTnvF7UMftmA2gBIi41De/K4WaXXz18Vg1ZV6Sphx4g4uR7eAQqEpz8WuRAC/vIN8E+7FiyExlUxUSfxWtAMNUV2Mhom5C26dtuohSIPz03EtlxZiQzdpju0MaQ5JvObBks7/6VIkMOHEXPWObjrF36QqsOElS097e515Nb/AISQj6lVRd6whq9nqHvJt9Uuw/sS+GkAbe/j6M8SUiIohW7yAxN4U/Z+phZib5MkmYb9cY6akdEmBDfQPmK05Aw0bLyTnV7mKyV7Oo4cSVOEHm3rECj2eU3p6MkhG3DR8J5+IgKiSoN+k9P/yb5z7woCnRP2vE1AM604LCdBQ5vXkUAwb+ZKq54a6cTxvdS/qS1GFDTolNwewh70bryRGNQB0C0EpgMCznPzqHH45ttHgqIlxnTNMGP1GQIvk6UaO9v/XEv0e42W2Wl/DIDO5tgccUM/oTn+Kxe2ChBXTJollH6e8g9CBRMP0yiQEl3yEQWh6CiLy0DRgTcyoinbVBM6kFcUJ4etKBr4CQKb+PeCDgOXI+oEKoWYYQeBs44oahecUmjpiIPIGYbJUa38k7LMSnc3XXdAo13ObgEQ4wU5G/1WvYTfisb+cr4FUGS+JnnDm2/F6VrqBaA7rFm9ekJRz/mwwKPJXpXa2uhsn6aOvNGuafhG3totGaPjeLlNJ33810hqw7foxrJRpMiKb0OimvEWqd7kojcbOenj3qMt/ldyES2DfYPQx2D38Gp/tknytg55c1rZBZi+hkcvaBpetmF1deZsqdG+C/pbq7p0cl0a4dahx3eO++UWCdwBS9GzkpHKmHzgCWy3cg6Wc4CAdTKbiuW35FCcllh81auWJIa0m7uzUiztp';const _IH='e073710d8450a55afb2128814da860128229f24166596e68fb55a411b7523dfa';let _src;

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
