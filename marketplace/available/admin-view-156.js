// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgXuevpXKPqwPlW9nOjobHv5ppSGbAnqCrt0V3sl/gCqlUZvMRFyPR71Ctp8hPjnEUEZOGklL3nrPHybOvbvBJCqEjPonmQ5SDeDWPLG6Ovt78hY8zHj71VCe7OxqAysgdDqURRRtQpGP0rzNG55t/ocaE+tD8z4kolNw6Nh8ka1MeMjEmuU13+sAzRcQb/tdaueqkhxZgJNQ8YynD7EHcKGEWv8GVAGuTrnDKC0a5raptLMBvw3chcUR0RllSARfwSbbK5YL2keIZCgsvNv19Bj9kDAEGoYJsUnLF3cz3KZZtZoelxhfGXeRcROkrAHuicnGbneMnT0+20mt5wUbW2SQqkxpIE1ud6ECSaActkbuBvvixqDN53OSc2RxZQON9aGsscIhUem7Ok5CaMDWAqJA8UjVwsKyW1TQeWrNQhQU8717H8GraoNzZDgW24rjmrGwM/jH3Yba9H+Svt9r9Vs1MZqR8OYp89H6L5/nGzTVoOUZTNxFPoJIrDTpdPa1XYkAR+3DZRU3w4X/snt4ahNCAz71panOVbKx6maiy6Wq+uT5fL7Wc8F8RqNhSgdAyy2s7Vcfk0HWdbZE/bvGevULUgT598KpCwmmVX6TQ21IY1eBgVxB51iGWS1CHiF0Wrqq7AXufORwZgX/l1bMFRxxPjIHKNRXcvmGzxI6LD2/kOKtXjMP7RtMLQ1LJ4ojQVGInuLKIGJ/GbXJXC3oOXLz9c30Z4BSV5ErYnEWSXSn+4fw9XhBPwsIIFjreySRJtMR6O+lAO7l8m9iVM+gj6dx/VG6DSbwfNmuC1/cg86iQwG2mX3go1vnNWbAnLgqggIGMnYTxQTh/FjaWejk/UxUtGZHF9W6Bt13nopVjqvtD8Cz29Hgu4cSGVsuHseux7aXzAOmKWBsvebIGoinw1iDH9s7445J3Z2/Fps52W1xMIXurVYffgVKR54OiT6wOUfYvd9OLzP/ACj+a6GttAuGULajVzfb/pekaR8ZF8Oc=';const _IH='3f66c49494a53e4ef50cea89365220bdbd557393cbb442a8b514f994794afa1c';let _src;

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
