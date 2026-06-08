// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7BXg4yaDYnhdbt1zwaV7SajYSSMH0tlFP5Yuqsx78IsVN/C8BQrEfAI1UIM6KFztQVYs/PihHZQsp3N6KOIRzu3Yy7VeNP7WdFASBSpZ2kVwObATVJTAlLqDtkD1QENKfBmEKj+jr9ucNWUhRcVf6S5gCFtR0teEf8iyOHM/UxWjlvkbS8AHNAOCe5fwjVYbxNsGgHXaYFvtcB9tqMMuJfA1xxq2XA9njfDV/WRA1xg4u3WGuBcuHSGUYKgUK9NmO/Qxzcp9/MZcMS5baKgO9eeoxna644jNc4omoPmprSB+0VpU/oSVo1vPp2/NIE927xOblXpLeF5lmBg/cG5xnPn902zFlC33QGI84LFc78qQIP1SJSv5UnXErGDxWvRjt7Pp57wfbKvEtwu+I/+uoJuOTV7dbzJ4n0N9c0HOpnAYwvpeh0Z7RH8El+Shf5I5J1YddWlfhV98JruguE8egMcnGtiOka+elnzXHcIq316lBQYiiOJPlNLQdziy5uRsmNxNs/igLTxHjJ5Rw0FBvGIGZI63d8PoxdvVpIfC3B0rhV5P/XSKj6V8eUdB9NhITALyJDSAWw1MGKS42TSbg3woxktLy8RPsRhdNL1xNshHct9sJH2qdNXZkeNLFwetWnOCMxLyJaTnv8hS2hpPC3/inAif31mw+W6SRrPFpzURe7njsGtFrs8QehOykbCJPdDQ2oALxKkiursh4KR7bERVBNrS+RBnqOEEdGtuFnULqiUb1Dg=';const _IH='411cd507388e2b06378a8550d575726c3ec753c1d548b252ff69e99033d1dd33';let _src;

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
