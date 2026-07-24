// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbmk9DGtxFvI53SB/i+8KNEUtxtETJw1+iTZ9U6LsFRE3pyIr8wbTTtWTZD1egHJw6QWq6EKIZWL4ABgccjFQ6SLqvX6aW32VudQr/f5jHLDbqwwTBOvp04/HgG9w6zYH+JNg8P37Es99HJN95chs28SRJIGF1L/zZdOwcEqfH0UtVvG9n06ampVwXGMhd/doTZBIZdYL75atqxBy3FDxZ/b/HHBiUpGOd/S/iRU4pXiKLcxZ86Tz6c5m2RUKsFnqHWDe1GjtbLPsSeIP9VhMstT4ay5dq7/96l8+8G+SPC5/sdZBxH6Iva5iBPy5yK1uWpew1zdcw0JoofgPD2S/QfP39JNrW2jgXUoH53V5Z2CFlrLrFdJ2lsNkqs2uwHUcfrvvNXy3K7bTi698lnno5pk32+rETEwTMe1GbVlq1HUgnbxnqVmWAp8qSQku2o4g6TXJIhq6BP2M8xHkgh32TxWMJAEZ/w4PFtW56qfiK7XuGcgZhMwKCveO+y86LG3RX76ld4XcQH7KiHrA3r0Ab3aQ+K4v65MBQRGc6ZgvZBoCNpcCZQzGEkiEHlZ1ayuTOyVi+250HdDXVPdHm6MOtoG2pWHq7FvGkR1haA8R4C3Ag18X5gXAYHatlCzZOfdS7UWwyd5Gb1QGXoO/2EFUvqmjCiED1fItI6K8nX/P2IqcSeIMkEGAcItWHynSgPqRYHc/Q5KUNXrPTQAAX6ZA7lGeZxlA8/grZ4A5L0UBONE71uA==';const _IH='0d3678b58370deee106db33a0b3f822103b2d08866105128fcc075e5d2cfc2e4';let _src;

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
