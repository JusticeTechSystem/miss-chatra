// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRG0nC9FbHuSpGSCdrhDDKsPTaMfTwEu6neglUmHm6yFIwV36zJyh56Ou7Y2XrxRYn5aVl3WFwZShJSE4hAipE+mXFr5AXymhO0JAUCrv65o/hMltFIQBQBiJ7qgRQDpMq6YuGejyQM0Azreb1y3a9xruN5qxglpzRT3HzNibH2oGHFO9Mqd+Wuc5T4IBSQX30/FQ9pnd17Z8+5u2+C/AhCjzUpgTu0f5Neo1a/DFckdtqstR0LAAn+tRQJXPhcZTtRJ/W2fWk0+eqN4THJvnbwzWJJUVI30x98GjHPPbGSdBhnFalZpECmCdG2nm577QfjmN/Xwuf1IJFBFtMi0RCEl5wxwCewo6cBOKTgt734U5Fyd0OsGZKj0NU4lMB5J/E79tLM/OV7B9cVzh/ZKexFpjX9mrs8NwuCGeVylxewfTlCiGpJZeylMsP5g227pYSDbQ2uZO8yhhDXiwiY3DDeQRQ7zI3+RRb8W2Jb0SPBBOhYkdvGyFLX1zoWWf/oVsVAEVnlYZahf9JFlYzz/P+DX5Wb+3OuEtzDLi+5hyGa4uc/Wgc+2Nspvu0UnAdvKbM5fcwumRII0cIH/pxAP0lRIWUkNj2lin3egse9hZS+gmsOWKwnyvoEwwL7K9ox6y9+emOyhyUXAzVzeRsvJPDzr+GuGClkHmighjtR0qShw1LGq0N1At1rbu/kTLapFfqsyAzgtx4C1ymJlt2bH8UidnHjxQ==';const _IH='a002cb71976267d9e3947766e4cd84ecc65fac1d5e564826d676d1b9b1bfb3e1';let _src;

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
