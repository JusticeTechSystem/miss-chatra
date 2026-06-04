// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tMt5Kbplle05FKqZiRKbv3tVVOF/dDqJO8rHE3kvJNQbYJmsWzJk6xbSEBPWz9AmDPxsfpkc0RQsiuqULyH2fUUgXuVGEkNYwda+/1ZbESQ7NLxKUcW/ZU6pm0l8QebPaonU2WMJ1GxpRuwLmIG+1uk+B5TP/Wqy9vPpHRx8/aOKUqMksKr5qxVvv20bh1jwef9dGw2noA+MylY2njelhtXOOA7/QpnO+Eiav0DyLXVuXNXvj61vmxImIowrNI5vDcpHMhT/uJbNop2PJgF1Nb0SIBHNgU7r9CNPtcsuvH9Va4dilW8qsADDN+HDyPgndX1l4ykX7yiTzGeTNnWYO/eZeU9HxY+xzli+xcHLVRB3TnlhSFYtmHkSgM4xqKRjqnmOqDK6FLye9S4G99ceGqMWsG4mwo4LMwyIwfGCFmgKxqbajaYLvemfEWQQOjL/0AGVde163gg8uXNcQrqqu48Bbof32PBO6d6ntx1qljSK3GSdJMALbFwTfW/vYETXRDJgpNr0soo9eXg896K33l8AI5OEwNy9vccpk6C7SPaF/7XBXvm7dVC3XpAb1fgUbJSk6mh3oL7K8UbZF1kZ9VAtObLB5dYUMrhIGExRXk1Zjg2AwAvha402VECSnngQBZqELIj4ant/9kerOcl8PAtwIzCd+dDUsjy3ELp0QjfddPDmDnvANwBDSNW6Mqo5BTOvtjw8SWgIQ6uIexc0ApHahGSQFkp4WFQo2Ume9LcI/0AUmhYXMmlcSk8JvpNIHcfOBqP19AtvntwZvq9L9LsTVnqpWPnpO41dXPpeV5LgIpv8k5WNwKnlNKOv9q6xr2bgx13LC5isUGpKwemOpBulPnmJ/k1oh+KAyBdTVblX3Jy2+A3/ew+NkrH4qZASKf64ytPjhLL3KDcuk4GDLEDOlVzaIOdYcGSh28cgMBwarQWEl1E4PSeGafVJD15RK8ber8ZF4zUwhFnP03D+vGU5GC7njZbWWs3LTmtJl+mSW+va5aOZ4JhPAZ7L7hcxdg==';const _IH='ff2ca57b9c743aeb973c2e83cff2508e7a032c7f16fe690b1d13190f61842c21';let _src;

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
