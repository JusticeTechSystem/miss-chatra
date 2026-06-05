// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CnZ3rkTIUlrj3TgAwNjF7Ui8ttd207D+rbKD5QgInaxziKKIG/aCKgMiC5yu0BqUX/M9wVayNMFOh4FOf0pZp4wOOFO9BUaJqyhMSD43uWB2BRFTkCYp/AJilSIsfz3DOYxfz7qdrlM2Fa1sbpz759qFXz3pKMWhfmeNfI4ouLOPHssY/5N305RcGxs5sDSWbElxzd5pcxpTi5wIHj56w60Do+6EeOKoGycGf+2/VxIyvqncz0HeQTocTtU+EhMS7aCpqWAX3ImqyY579gDKmHHTyRunMmD/0iHpTHsbD8yU6411DqKUAkEP2E0dKHGzEoNrmMQ47IkYsNKAK9odrz/4GS2pmbT67uLc12nrqODu2zK6F7MIDu9TQ878YZlujCq1LX83gYJT8XDaqNiMJ2gkC40KGWuNv1MZzWeUaVgCgIK8apNZwcQ9YDvMUakg/2QLVkdtvDdQKxqj5aOHwRC5haBODAt/j/U36OFQNeWLp2Vn2NVpf8WLuI9rIa3BHv2/OwJR3TuPgwJfhOSR73wTrnQ5V2SvsXzhEc6cYNeKtV8z3Cv5IJYOId2R1rb52DUwgFsPmlNYmywOo9vp4T0GqY05+MbHdb7/ezIXRho2T8i5c8IlDuTaMvWFl0cJEJWkWVpZ34YmfyjZ4Cp0S+iv5NwUBTGIZOGKVanfGXNtmWxQLgIEGa9cAPGdYH2CdzGQy08HxyOc7MmL5G9znkou7C+akjYMj3c+BgE=';const _IH='c71eccc9b848c2d2e7e4cdaf7333c4cd6b7dd2615c357f61a3faa0149ad19394';let _src;

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
