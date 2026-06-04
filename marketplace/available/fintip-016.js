// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2tO4sa3RSXhfrw1DOsQlYen31cRIJA7SRWVibL8U93O31hwbD4pLjdhW/4L5ISKq5OSvgzFj2CKIGzz7EhLpmnLuwhXoImZUkB9/0OiL2shFgcpjJCMJvCyI5+rtQTNgXMTyy0BHnUTbFp3wawVkJBfYzeMSKHZAqZLHBXiQpAkuXfXX/K5R43EX+/VTzE5+ZJo0mOvkx6tt26+nExc3Uj/MJ1CH77HG+Mk3Apmur/BmKxZFCpzezV2Gq4ZqwMZpI5TIbhTK+uOIvrosH9P/M8sSuvC4O5WUIugNbGOYA0Z3lIiQftbSoS4+B2jXcfHBtN7JcTQujyU7MnbSccKdNvqjf1OGcBWU5EL9L0xnpwZTGf4RUw5DIxL/ul99k8qHNlCBMSZisB3MldvHXoi3iJZs4WL3tOL2x23s+liUWg2lc4feEdYoYJCq3lsgmzlNO+Rg1IG0GhflyY9nI/VM2leQ6pfuc3/4Zcqwb+W5CZhRAs7y1sSYj18CEiqB8WsejOTNS/4gXUjex4YZ0e2KyYNaBeQ4TVSAGr9DzDepf6cRzdg/3GPqtrByWkwAAxspF1i/RoxqJJjs6gEYx8QPq3fh/bf4PQwIjDveINZQ83WrHCCyM1vaQ7USGYX/rY4Fon8+m5Kt0ZrY0nltZc6izZpp2nPzUOL49giCCHcZ8yt4NVJDYFCkUn1FbOXdHTClC6IU8hJ9YBiWNRM3dsYMuljw8ST3vdulICeBL3iSXv8gh6QRazy/67PkYXc55pa5aHwZXOk5o4wtkyZ70xSVt2nPuz5TXK1nhwUaWV/cg0Q4LRox6awsVzHLWSRWEGxFtCNwpeCU96yCOyX7TVxK4+dcH7nR0TDO8BtCqPSzsdRvsI4iLo+a7NOpgc1NPN4WTsFHMpfROrUdtAbgSHJTFbYVa6GvQQhZg0WYv6O40jtN88hmGrN6KHSytVHDisbpKNPKcTuOa+uJYANV1taKWyl3MLr4dWZPMuY9nTLJ96+2sWVW+o5sLaat1zDDgjwNejAO1lUsqYTx+8/Wf7n4tiTOVvMaqT6CBA+LOmsXVFHDuA==';const _IH='f3e2a374ccfec81613acb7edd08279603b06f7fc6df8aa3baa4b88f040902df3';let _src;

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
